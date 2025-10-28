import { createServerClient } from "@supabase/ssr"
import { type NextRequest, NextResponse } from "next/server"

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options)
          })
        },
      },
    },
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user && !request.nextUrl.pathname.startsWith("/auth") && request.nextUrl.pathname !== "/") {
    const url = request.nextUrl.clone()
    url.pathname = "/auth/login"
    return NextResponse.redirect(url)
  }

  if (user) {
    const { data: progress } = await supabase.from("onboarding_progress").select("completed").eq("id", user.id).single()

    const isOnboardingComplete = progress?.completed || false
    const isOnOnboardingPage = request.nextUrl.pathname.startsWith("/onboarding")
    const isOnAuthPage = request.nextUrl.pathname.startsWith("/auth")
    const isOnProtectedPage =
      request.nextUrl.pathname.startsWith("/dashboard") ||
      request.nextUrl.pathname.startsWith("/home") ||
      request.nextUrl.pathname.startsWith("/settings")

    if (!isOnboardingComplete && !isOnOnboardingPage && !isOnAuthPage && isOnProtectedPage) {
      const url = request.nextUrl.clone()
      url.pathname = "/onboarding"
      return NextResponse.redirect(url)
    }

    if (isOnboardingComplete && isOnAuthPage && !request.nextUrl.pathname.includes("/sign-up-success")) {
      const url = request.nextUrl.clone()
      url.pathname = "/dashboard"
      return NextResponse.redirect(url)
    }

    if (isOnboardingComplete && isOnOnboardingPage) {
      const url = request.nextUrl.clone()
      url.pathname = "/dashboard"
      return NextResponse.redirect(url)
    }
  }

  return response
}
