"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignUpButton, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Header from "./header";

export const Navbar = () => {
    return (
        <>
            <SignedOut>
                <nav className="p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border border-b border-transparent">
                    <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <h1>Vibe</h1>
                        </Link>
                        <div className="flex gap-2" size="sm">
                            <SignUpButton>
                                <Button>Sign up</Button>
                            </SignUpButton>
                            <SignInButton>
                                <Button>Sign in</Button>
                            </SignInButton>
                        </div>
                    </div>
                </nav>
            </SignedOut>

            <SignedIn>
                <Header />
            </SignedIn>
        </>
    );
};
