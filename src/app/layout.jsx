import "@/styles/globals.css";
import { Almarai, El_Messiri, } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
const primaryFont = Almarai({
  subsets: ["arabic"],

  weight: ["400", "700"],
  display: "swap",
  variable: "--font-primary",
  fallback: ["san-serif"]
})

const secondaryFont = El_Messiri({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-secondary",
  fallback: ["san-serif"]
})

export const metadata = {
  title: {
    template: "%s | شرکت پخش سراسری"
    , default: "شرکت پخش سراسری"
  },
  author: "Alireza Ghanbari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" >
      <link
        rel="icon"
        href="/icon/icon.png"
        type="image/png"
        sizes="64x64"
      />
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable}
        font-primary antialiased   bg-theme`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
