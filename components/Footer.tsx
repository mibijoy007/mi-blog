import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-transparent py-4 px-6  text-center border-t border-gray-600 text-xs sm:text-sm md:text-base font-medium">
      <div className="flex justify-between  ">

        <p>© 2024 Mi&apos;s Blog. All rights reserved. </p>

        <div className="md:mr-8">
          {/* Made with ♥ by  {" "} */}
          Made by  {" "}
          <Link href={'https://github.com/mibijoy007'} className="hover:underline text-blue-500">
            Mibijoy
          </Link>
        </div>
      </div>
    </footer>
  )
}