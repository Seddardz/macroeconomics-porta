"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="m7 15 4-5 3 3 5-7" />
              </svg>
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
