import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import TopBar from "./components/TopBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mariana's Marketing Portfolio",
  description: "Marketing portfolio: selected work, case studies, and contact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body>
        <noscript>
          {/* Scroll reveals SSR their hidden state and need JS to play, so
              without it that content would stay invisible forever. */}
          <style>{`[data-reveal], [data-reveal] > * { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>

        <TopBar />
        {children}
      </body>
    </html>
  );
}