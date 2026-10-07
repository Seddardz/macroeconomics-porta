"use client";
import Link from "next/link";
import Image from "next/image";
import { ART_SRC, UNIVERSITY } from "@/lib/data";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NAV = [
  {
    href: "/",
    label: "Home",
    short: "Home",
    d: "M3 11 12 3l9 8v10h-6v-6H9v6H3z",
  },
  {
    href: "/library",
    label: "Library",
    short: "Library",
    d: "M4 5h4v14H4zM10 5h4v14h-4zM16 6l4 1-3 12-4-1z",
  },
  {
    href: "/lectures",
    label: "Lectures",
    short: "Lectures",
    d: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM8 7h7",
  },
  {
    href: "/exercises",
    label: "Practical sets",
    short: "Sets",
    d: "M9 3h6v4H9zM6 5h12v16H6zM9 12h6M9 16h6",
  },
  {
    href: "/news",
    label: "News",
    short: "News",
    d: "M4 5h13v14H6a2 2 0 0 1-2-2zM17 9h3v8a2 2 0 0 1-3 0M8 9h5M8 13h5",
  },
];

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

function BottomNav({ pathname }: { pathname: string }) {
  return (
    <nav className="bottom" aria-label="Main navigation">
      {NAV.map((n) => (
        <Link
          key={n.href}
          href={n.href}
          aria-current={isActive(pathname, n.href) ? "page" : undefined}
        >
          <i>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={n.d} />
            </svg>
          </i>
          {n.short}
        </Link>
      ))}
    </nav>
  );
}

export function Header() {
  // resolvedTheme = what is really displayed ("light" or "dark"), even in "system" mode
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      const h = document.documentElement;
      setScrollProgress(
        (window.scrollY / Math.max(1, h.scrollHeight - window.innerHeight)) *
          100,
      );
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <div id="bar" style={{ width: `${scrollProgress}%` }}></div>
      <header id="hd" className={scrolled ? "s" : ""}>
        <div className="wrap">
          <Link href="/" className="brand">
            <span className="logo">
              <Image src={ART_SRC} alt="" fill sizes="38px" unoptimized />
            </span>
            CHIBI-MACROECONOMICS
          </Link>
          <nav className="links" aria-label="Main navigation">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive(pathname, n.href) ? "page" : undefined}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            className="ib"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle light / dark theme"
            title="Toggle theme"
          >
            <svg
              className="moon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
            <svg
              className="sun"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>
        </div>
      </header>
      <BottomNav pathname={pathname} />
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="foot-brand">
          <b>Macroeconomics</b>
          <span>{UNIVERSITY.name}</span>
        </div>
        <nav className="foot-links" aria-label="Footer">
          <Link href="/lectures">Lectures</Link>
          <Link href="/exercises">Practical sets</Link>
          <a href={UNIVERSITY.href} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="#">Professor login</a>
        </nav>
        <span className="foot-copy">© 2026 Prof. Chibi Abderrahim</span>
      </div>
    </footer>
  );
}
