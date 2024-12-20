
import "./globals.css";
import { cn } from "@/lib/utils";

//local fonts
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/siteConfig";


const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})



export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  keywords: ['javascript', 'typescript', 'reactjs', 'nextjs', 'web development'],
  manifest: './manifest.json',
  robots: {
    index: true,
    follow: true,
    // nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    //"scroll-pt-[4rem]" as the headings doesn't go in the nac when clicking toc

    <html lang="en" className="scroll-pt-[4rem]">

      <body
        className={cn(
          "min-h-dvh bg-background font-sans antialiased"
          , interFont.variable

        )}
      >
        {/* <Providers> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex  flex-col bg-background min-h-dvh">
            <SiteHeader />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>

  );
}
