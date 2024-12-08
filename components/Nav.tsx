"use client";


// import { Icons } from "./icons";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
// import { FaCloudSun } from "react-icons/fa";



export default function Nav() {

  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-6 lg:space-x-8">
      <Link href="/" className="mr-6 ml-8 flex items-center space-x-2">
        {/* <FaCloudSun className=" h-8 w-8"/> */}
        <span className="font-bold  lg:text-xl">{siteConfig.name}</span>
      </Link>


      <Link
        href="/docs"
        className={cn(
          "text-sm font-medium transition-colors hover:text-blue-500 hidden  sm:inline-block",
          pathname === "/docs" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blogs
      </Link>


      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-blue-500 hidden sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>

      <Link
        href="/contact"
        className={cn(
          "text-sm font-medium transition-colors hover:text-blue-500 hidden sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Contact
      </Link>

    </nav>
  );
}
