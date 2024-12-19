import Link from "next/link";
import { badgeVariants } from "./ui/badge";

export default function TagsArrayInput({tags}:{tags:string[]}) {

    return (
        <div className="flex gap-0.5">
        {tags?.map((tag,index) => (
            <div key={tag+index}>
              <Link href={`/tags/${tag.toString().replace(/ /g,'-')}`}
              // <Link href={`/tags/${tag=tag.toString().replace(" ",'-')}`}
               className={badgeVariants({
                // variant: current ? "default" : "secondary",
                variant: "secondary",
                className: "no-underline rounded-lg text-sm md:text-base m-1 my-1.5 text-center px-2 hover:bg-gray-400/65 dark:hover:bg-gray-600",
              })}
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