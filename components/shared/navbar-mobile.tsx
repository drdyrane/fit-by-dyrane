"use client"

import Link from "next/link"
import React from "react"
import { Menu, Activity, Info, Users, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/shared/theme-switcher"
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export function NavbarMobile({ className }: { className?: string }) {
    const [open, setOpen] = React.useState(false)

    const menuItems = [
        { label: "Features", href: "/#features", icon: <Activity className="h-5 w-5 mr-2 text-primary" /> },
        { label: "How It Works", href: "/#how-it-works", icon: <Info className="h-5 w-5 mr-2 text-accent" /> },
        { label: "Testimonials", href: "/#testimonials", icon: <Users className="h-5 w-5 mr-2 text-secondary" /> },
        { label: "Pricing", href: "/#pricing", icon: <DollarSign className="h-5 w-5 mr-2 text-warning" /> },
    ]

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                    <Menu className="h-6 w-6 text-foreground" />
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-[300px] sm:w-[380px] flex flex-col bg-card/70 dark:bg-card/20 backdrop-blur-md shadow-xl rounded-l-xl p-4"
            >
                {/* Visually hidden title for accessibility */}
                <SheetHeader className="p-0 m-0">
                    <SheetTitle>
                        <VisuallyHidden>Main Navigation</VisuallyHidden>
                    </SheetTitle>
                </SheetHeader>

                {/* Logo instead of Main Menu */}
                <div className="flex items-center gap-2 mb-6 px-2">
                    <Activity className="h-7 w-7 text-primary" />
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-foreground tracking-tight">Fit</span>
                        <span className="text-[10px] italic text-muted-foreground -mt-1">by Dyrane</span>
                    </div>
                </div>

                <nav className="flex flex-col gap-4 py-2 flex-grow">
                    {menuItems.map((item) => (
                        <SheetClose asChild key={item.href}>
                            <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center text-md font-medium text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-accent/10 group"
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>

                <div className="flex flex-col gap-3 pt-6 border-t border-border/30 mt-auto">
                    <div className="flex justify-between items-center px-4">
                        <span className="text-sm text-muted-foreground">Theme</span>
                        <ThemeSwitcher />
                    </div>

                    <div className="px-4 pb-6 flex flex-col gap-3">
                        <SheetClose asChild>
                            <Link
                                href="/auth/login"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full items-center justify-center rounded-lg border border-input bg-transparent px-4 py-2 text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
                            >
                                Sign In
                            </Link>
                        </SheetClose>

                        <SheetClose asChild>
                            <Link
                                href="/auth/sign-up"
                                onClick={() => setOpen(false)}
                                className="relative inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-primary-foreground overflow-hidden group bg-gradient-to-r from-primary via-accent to-secondary shadow-md"
                            >
                                <span className="relative z-10">Get Started</span>
                                <span
                                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-white rounded-lg"
                                    aria-hidden="true"
                                />
                            </Link>
                        </SheetClose>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
