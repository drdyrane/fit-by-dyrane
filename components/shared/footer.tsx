"use client";

import Link from "next/link";
import { Activity, Twitter, Github, Instagram } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "subscribed" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only demo: simulate subscribe
    if (email.includes("@")) {
      setStatus("subscribed");
    } else {
      setStatus("error");
    }
  };

  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Activity className="size-6 text-primary" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">Fit</span>
                <span className="text-[10px] italic text-muted-foreground -mt-1">by Dyrane</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">AI-powered wellness tracking for a healthier you.</p>
            <div className="flex items-center gap-3 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="size-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="size-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="size-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How it works
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Compliance</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between gap-6 mb-6 flex-col md:flex-row">
            <div className="flex items-center gap-4">
              <div className="px-3 py-2 rounded bg-muted/20 text-sm">Trusted by</div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="px-2 py-1 rounded bg-muted/10">HealthOrg</div>
                <div className="px-2 py-1 rounded bg-muted/10">GymPro</div>
                <div className="px-2 py-1 rounded bg-muted/10">WellnessLabs</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Integrations: Apple Health, Google Fit, CSV export</div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 items-center">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-sm text-foreground">Get started</h4>
              <p className="text-sm text-muted-foreground">Create your free account and start tracking in minutes.</p>
              <Link href="/auth/sign-up" className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white mt-2">Create free account</Link>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Subscribe to our newsletter for product updates</p>
              <form onSubmit={handleSubscribe} className="mx-auto max-w-md flex items-center gap-2">
                <input
                  type="email"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="flex-1 rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
                />
                <button className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">Subscribe</button>
              </form>
              {status === "subscribed" && <p className="text-sm text-success mt-2">Thanks for subscribing!</p>}
              {status === "error" && <p className="text-sm text-destructive mt-2">Please enter a valid email.</p>}
            </div>

            <div className="text-right text-sm text-muted-foreground">&copy; 2025 Fit by Dyrane. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
