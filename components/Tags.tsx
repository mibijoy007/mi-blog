import Link from "next/link";
import { badgeVariants } from "./ui/badge";
import { allTagsType } from "@/lib/getTags";

export default  function Tags({allTags}:{allTags:allTagsType}) {

    return (
        <ul className="">
                {
                    // tags.map((tag,index)=>( //as this is no more an array but an object
                    Object.keys(allTags).map((tag:string,index)=>(
                        <li key={`tags-${index}`} className="">
                            <Link href={`tags/${tag}`}
                            className={badgeVariants({
                                // variant: current ? "default" : "secondary",
                                variant: "secondary",
                                className: "no-underline rounded-md text-sm md:text-base m-1 my-1.5 hover:bg-gray-400/65 dark:hover:bg-gray-600",
                              })}
                            >
                              {tag} 
                              <span className="bg-sky-600 mx-2 rounded-full w-5 md:w-6 text-center  text-white" >
                              { allTags[tag].length }
                              </span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
    )
    
}