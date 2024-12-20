"use client"

import { AllBlogDataType } from "@/lib/getAllBlog";
import PostItem from "./PostItem";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {  useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

//ascendingDescending
const sortBlogs = (data: AllBlogDataType[], ascending?: boolean) => {
    return [...data].sort((a, b) => {

        const aDate = a.date ? new Date(a.date).getTime() : 0  //if date doesn't exit go to last!!
        const bDate = b.date ? new Date(b.date).getTime() : 0
        // console.log("for item a date is :",a.date,' and ',aDate);
        // console.log("for item b date is :",b.date,' and ',bDate);

        if (ascending) return aDate - bDate;
        else return bDate - aDate; //Descending (newest first) by default
    })
}




// export default function AllBlogsList({allBlogsData}:{allBlogsData:AllBlogDataType[]}) {
export default function AllBlogsList({ data }: { data: AllBlogDataType[] }) {

    const [sortBy,setSortBy]=useState<string>("New to Old")
    const [allBlogsData,setAllBlogsData]=useState<AllBlogDataType[]>([])

    // let allBlogsData: AllBlogDataType[] = []
    // console.log("data >> ", data);
    // console.log("data sorted>> ", data.sort());
    
    useEffect(() => {
        // console.log("sortBy  >> ",sortBy);
        
        if(sortBy === "New to Old") {
            setAllBlogsData(sortBlogs(data, false))
        }
        else if((sortBy === "Old to New")) {
            setAllBlogsData(sortBlogs(data, true))
        }
        else {
            // this sort is besed on slug not title
            setAllBlogsData(data.sort())
        }
        
    }, [sortBy,data])

    // const allBlogsData = sortBlogs(data)
   
    // console.log("allBlogsData >>  ", allBlogsData);

    return (
        <div className="col-span-12 col-start-1 sm:col-span-8">
            
            <div className=" flex justify-end text-xs font-semibold">
                <DropdownMenu >
                    <DropdownMenuTrigger asChild  > 
                        <div> <span>Sort by :</span>
                        <Button variant="outline" className="h-auto px-2 py-1 m-2 dark:border-white border-black">
                            <span className="text-xs"> {sortBy}</span>
                            <ChevronDown />
                            {/* <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span> */}
                        </Button>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" >
                        <DropdownMenuItem onClick={() => setSortBy("New to Old")}>
                            {/* descending */}
                            New to Old
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSortBy("Old to New")}>
                           {/* asccending */}
                           Old to New
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSortBy("Name")}>
                            {/* aplha neumaric */}
                            Name
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <hr className="mb-2"/>
            {allBlogsData?.length > 0 ? (
                <ul className="flex flex-col">
                    {allBlogsData.map((post) => {
                        const { slug, date, title, description, tags,readingTime } = post;
                        return (
                            <li key={slug}>
                                <PostItem
                                    slug={slug}
                                    date={date}
                                    title={title}
                                    description={description}
                                    tags={tags}
                                    readingTime={readingTime}
                                />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                // If there's no article then
                <p>Nothing to see here yet ...</p>
            )}

            {/* <QueryPagination
            totalPages={totalPages}
            className="justify-end mt-4"
          /> */}

        </div>
    )
}