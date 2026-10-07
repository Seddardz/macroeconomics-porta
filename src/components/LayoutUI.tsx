"use client";
import Link from "next/link";
import Image from "next/image";
import { ART_SRC } from "@/lib/data";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home", d: "M3 11 12 3l9 8v10h-6v-6H9v6H3z" },
  {
    href: "/library",
    label: "Library",
    d: "M4 5h4v14H4zM10 5h4v14h-4zM16 6l4 1-3 12-4-1z",
  },
  {
    href: "/lectures",
    label: "Lectures",
    d: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM8 7h7",
  },
  {
    href: "/exercises",
    label: "Sets",
    d: "M9 3h6v4H9zM6 5h12v16H6zM9 12h6M9 16h6",
  },
  {
    href: "/news",
    label: "News",
    d: "M4 5h13v14H6a2 2 0 0 1-2-2zM17 9h3v8a2 2 0 0 1-3 0M8 9h5M8 13h5",
  },
];

function BottomNav({ pathname }: { pathname: string }) {
  return (
    <nav className="bottom" aria-label="Main navigation">
      {NAV.map((n) => (
        <Link key={n.href} href={n.href}>
          <button aria-current={pathname === n.href ? "page" : undefined}>
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
            {n.label}
          </button>
        </Link>
      ))}
    </nav>
  );
}

export function Header() {
  const { theme, setTheme } = useTheme();
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="bar" style={{ width: `${scrollProgress}%` }}></div>
      <header id="hd" className={scrolled ? "s" : ""}>
        <div className="wrap">
          <Link href="/" className="brand">
            <span className="logo">
              <Image src={ART_SRC} alt="" fill sizes="38px" unoptimized />
            </span>
            CHIBI-MACROECONOMICS
          </Link>
          <nav className="links">
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
              <button>Home</button>
            </Link>
            <Link
              href="/library"
              aria-current={pathname === "/library" ? "page" : undefined}
            >
              <button>Library</button>
            </Link>
            <Link
              href="/lectures"
              aria-current={pathname === "/lectures" ? "page" : undefined}
            >
              <button>Lectures</button>
            </Link>
            <Link
              href="/exercises"
              aria-current={pathname === "/exercises" ? "page" : undefined}
            >
              <button>Practical sets</button>
            </Link>
            <Link
              href="/news"
              aria-current={pathname === "/news" ? "page" : undefined}
            >
              <button>News</button>
            </Link>
          </nav>
          <button
            className="ib"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
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
      <div className="wrap">
        <span>© 2026 Prof. Chibi Abderrahim</span>
        <a href="#">Professor login</a>
      </div>
    </footer>
  );
}
