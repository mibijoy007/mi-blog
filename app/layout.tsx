
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
};

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
export const viewport : Viewport = {
  themeColor:[
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
      {/* <head>
      <meta name="apple-mobile-web-app-title" content="Mi's Blog" />
      </head> */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
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
          <div className="relative flex min-h-dvh flex-col bg-background">
            <main className="flex-1">
              <SiteHeader />
              {children}
              <Footer />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
