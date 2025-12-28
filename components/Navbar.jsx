"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-muted bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-textDark"
          onClick={() => setOpen(false)}
        >
          <img src="logo.jpg" width="130" height="30" alt="logo"></img>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-textLight">
          <Link href="/" className="hover:text-textDark">
            Home
          </Link>
          <Link href="/about" className="hover:text-textDark">
            About
          </Link>
          <Link href="/programs" className="hover:text-textDark">
            Programs
          </Link>
          <Link href="/contact" className="hover:text-textDark">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-primaryDark transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-muted p-2 text-textDark"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-muted bg-white">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-textLight">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/programs" onClick={() => setOpen(false)}>
              Programs
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
