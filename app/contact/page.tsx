'use client'


import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

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
                                    <p>
                                     <br /><br />
                                    Email: mymail@mail.com
                                    <br />
                                    Phone: xxx - xxx - xxx
                                    <br /><br />
                                    Socials: <br /><br />
                                    {/* <div className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp">                                     */}
                                    <div className="flex gap-10"> 
                                    <Link href={'https://facebook.com'} passHref={true}>
                                    {/* <a href="https://facebook.com" rel={"noreferrer"} target={"_blank"}><TfiFacebook size={40} /></a> */}
                                        <TfiFacebook size={40} />
                                    </Link> 
                                    <Link href={'https://twitter.com'}>
                                    <FaXTwitter  size={40} />
                                    </Link>    
                                    <Link href={'https://linkedin.com'}>                              
                                    <FaLinkedinIn size={40} />
                                    </Link>
                                    <Link href={'https://github.com'}>
                                    <FiGithub size={40} />
                                    </Link>
                                    </div>
                                    
                                    </p>                                    
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