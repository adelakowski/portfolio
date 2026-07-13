"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const resumeHref = "/assets/Axel_Delakowski_Resume_2026.pdf";

const resumeLinkClass =
  "text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-accent/40 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2 transition-colors min-h-11";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed w-full z-50 top-0 start-0 border-b border-border bg-black/70 backdrop-blur-md"
    >
      <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-heading">
            Axel Delakowski
          </span>
        </Link>

        <div className="flex md:order-2 items-center gap-2">
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${resumeLinkClass} hidden md:inline-flex`}
          >
            <FileText size={16} aria-hidden />
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center min-w-11 min-h-11 text-gray-300 rounded-lg md:hidden hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-accent/40 cursor-pointer"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-border rounded-lg bg-surface md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`block py-2 px-3 rounded md:p-0 transition-colors ${
                      active
                        ? "text-accent font-semibold"
                        : "text-gray-200 hover:text-white md:hover:text-accent"
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="md:hidden pt-2 border-t border-border mt-2">
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${resumeLinkClass} w-full`}
                onClick={() => setIsOpen(false)}
              >
                <FileText size={16} aria-hidden />
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
