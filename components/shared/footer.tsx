"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Activity, Apple } from "lucide-react"; // Assuming GooglePlay icon exists or using a generic one

const footerLinks = [
    {
        title: "Product",
        links: [
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "How it Works", href: "#how-it-works" }, // Added from your sections
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "#about" }, // Changed to About Us for clarity
            { name: "Blog", href: "#blog" }, // Assuming a blog section/page
            { name: "Careers", href: "#careers" }, // Assuming a careers section/page
        ],
    },
    {
        title: "Support",
        links: [
            { name: "FAQ", href: "#faq" },
            { name: "Contact Us", href: "#contact" }, // Changed to Contact Us
            { name: "Privacy Policy", href: "#privacy" }, // Assuming a privacy policy page
            { name: "Terms of Service", href: "#terms" }, // Common addition
        ],
    },
    {
        title: "Resources", // Added a Resources group based on your sections
        links: [
            { name: "Integrations", href: "#integrations" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Stats", href: "#stats" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8 text-sm text-muted-foreground">

                {/* Logo + Description + App Links */}
                <motion.div
                    className="col-span-2 lg:col-span-2 flex flex-col items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Link href="/" className="flex items-center gap-3 group mb-4">
                        <Activity className="size-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-foreground">Fit</span>
                            <span className="text-xs italic text-muted-foreground -mt-0.5">
                                by Dyrane
                            </span>
                        </div>
                    </Link>

                    <p className="mt-2 text-muted-foreground/80 max-w-sm leading-relaxed">
                        AI-powered wellness tracking for a healthier, smarter lifestyle.
                        Track progress, set goals, and thrive every day.
                    </p>

                    {/* App / Partner Icons */}
                    <div className="mt-2 flex flex-wrap items-center gap-4">
                        <Link
                            href="https://apps.apple.com/your-app-id"
                            aria-label="Download on the App Store"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/apple.svg"
                                alt="Download on the App Store"
                                className="h-30 w-auto transition-transform hover:scale-105"
                            />
                        </Link>

                        <Link
                            href="https://play.google.com/store/apps/details?id=your.package.name"
                            aria-label="Get it on Google Play"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/google.svg"
                                alt="Get it on Google Play"
                                className="h-30 w-auto transition-transform hover:scale-105"
                            />
                        </Link>
                    </div>



                </motion.div>

                {/* Link Groups */}
                {footerLinks.map((group, i) => (
                    <motion.div
                        key={group.title} // Use title as key for stability
                        className="sm:col-span-1 md:col-span-1 lg:col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h4 className="font-semibold mb-5 text-foreground text-base">{group.title}</h4>
                        <ul className="grid gap-3"> {/* Changed to a simple grid for better vertical stacking */}
                            {group.links.map((link) => (
                                <li key={link.name}> {/* Use link name as key */}
                                    <Link
                                        href={link.href}
                                        className="hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Divider */}
            <div className="border-t border-border/40 mt-10 md:mt-16" />

            {/* Bottom Bar */}
            <div
                className="
        container mx-auto px-4 py-8 
        flex flex-col md:flex-row items-center justify-between 
        text-xs text-muted-foreground/80 gap-6
      "
            >
                <p className="text-center md:text-left order-2 md:order-1">
                    &copy; {new Date().getFullYear()} Fit by Dyrane. All rights reserved.
                </p>

                <div className="flex gap-6 order-1 md:order-2">
                    <motion.a
                        whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
                        href="#"
                        aria-label="Follow us on Twitter"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Twitter className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
                        href="#"
                        aria-label="Connect with us on LinkedIn"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
                        href="#"
                        aria-label="View our GitHub"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </motion.a>
                </div>
            </div>
        </footer>
    );
}