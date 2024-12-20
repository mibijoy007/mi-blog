
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
// import { TfiFacebook } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Metadata } from "next";


export const metadata:Metadata ={
    title:"Contact Page",
    description: "This page is all of my contact information"
  }


export default function Contact(){

    return(
        <section className="overflow-hidden py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark2 sm:p-[50px] lg:mb-5 lg:px-8 xl:p-[55px]">
                            <h2 className="mb-3 text-xl text-center font-bold text-black dark:text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                                 Contact 
                            </h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <div>
                                     {/* <br /><br />
                                    Email: mbijoy6666@gmail.com */}

                                    <br />
                                    {/* Phone: xxx - xxx - xxx */}
                                    <br /><br />
                                    Socials: <br /><br />
                                    {/* <div className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp">                                     */}
                                    <div className="flex gap-10"> 

                                    {/* <Link href={'https://facebook.com'}  rel={"noreferrer"} target={"_blank"}>
                                        <TfiFacebook size={40} />
                                    </Link>  */}
                                    
                                    <Link href={siteConfig.links.twitter} rel={"noreferrer"} target={"_blank"}>
                                    <FaXTwitter  size={40} />
                                    </Link>    
                                    <Link href={siteConfig.links.linkedIn} rel={"noreferrer"} target={"_blank"}>                              
                                    <FaLinkedinIn size={40} />
                                    </Link>
                                    <Link href={siteConfig.links.twitter} rel={"noreferrer"} target={"_blank"}>
                                    <FiGithub size={40} />
                                    </Link>
                                    <Link href={siteConfig.links.email} className="border-2 border-gray-400 rounded-xl ">
                                    <CgMail  size={40} />
                                    </Link>

                                    </div>
                                    
                                    </div>                                    
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}