import type { Metadata, Viewport } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header, Footer } from "@/components/LayoutUI";

// Academic pairing: Lora (scholarly serif) for titles, Source Sans 3 for text
const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const serif = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Macroeconomics — Prof. Chibi Abderrahim",
    template: "%s · Macroeconomics",
  },
  description:
    "Macroeconomics lectures and problem sets (PDF) by Prof. Chibi Abderrahim, University Centre of Maghnia.",
  openGraph: {
    title: "Macroeconomics — Prof. Chibi Abderrahim",
    description: "Macroeconomics lectures and problem sets (PDF).",
    type: "website",
  },
};

// viewport-fit=cover lets the bottom bar respect the iPhone safe area
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1220" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable}`}>
        <ThemeProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
