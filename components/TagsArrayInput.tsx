import Link from "next/link";
// import { badgeVariants } from "./ui/badge";

export default function TagsArrayInput({tags}:{tags:string[]}) {

    return (
        <div className="flex gap-0 flex-wrap">
        {tags?.map((tag,index) => (
            <div key={tag+index}>
              <Link href={`/tags/${tag.toString().replace(/ /g,'-')}`}
              // <Link href={`/tags/${tag=tag.toString().replace(" ",'-')}`}
              //  className={badgeVariants({
              //   // variant: current ? "default" : "secondary",
              //   variant: "secondary",
              //   className: "no-underline rounded-lg text-[10px] md:text-sm m-[2px] md:m-1 s md:my-1.5 text-center px-2 hover:bg-gray-400/65 dark:hover:bg-gray-600",
              // })}
              // className="no-underline rounded-lg text-[10px] md:text-sm m-[2px] md:m-1 s md:my-1.5 text-center px-2 hover:bg-gray-400/65 dark:hover:bg-gray-600 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full border pl-2.5 py-1 text-base font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              className="no-underline rounded-lg text-[10px] md:text-sm m-[2px] md:m-1 s md:my-1.5 text-center  hover:bg-gray-400/65 dark:hover:bg-gray-600 border-transparent bg-secondary text-secondary-foreground  flex items-center  border px-1 md:px-2 md:py-1 text-base font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {tag}
              </Link>
            </div>
            // <Tags  key={`tags-${index}`}/>
        //   <Tag tag={tag} key={tag} />
        ))}
      </div>
    )
}