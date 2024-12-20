import AllBlogsList from "@/components/AllBlogsList";
import getAllBlogsData from "@/lib/getAllBlog";
import getTags from "@/lib/getTags";
import { Metadata } from "next";
import Link from "next/link";


export async function generateMetadata({params}: { params: { tags: string } }) : Promise<Metadata> {
    const tag = params?.tags
    
    return {
        title: tag,
        description: `Posts on related to the topic ${tag}`
    }
}

export const generateStaticParams = async() => {
    const tags = await getTags()
    // console.log("tags for static params >> ", tags);

    const paths = Object.keys(tags).map((tag) =>({tags : tag})) 
    // const paths = Object.keys(tags).map((tag) =>{{tags:tag}})  // undefined sepcial case for arrow function
    // console.log("paths for static params >> ", paths);
    return paths
}

export default async function SingleTags({ params }: { params: { tags: string } }) {
    // console.log(params);
    const tag = params?.tags
    const allTags = await getTags();

    // console.log(tag,allTags['js']);
    const slugsRelatdToTag = allTags[tag] || []
    // console.log(slugsRelatdToTag);

    const allBlogsRelatedToTag = (await getAllBlogsData()).filter((post) => slugsRelatdToTag.includes(post.slug))
    // console.log("allblogsdata",allBlogsRelatedToTag);

    return (
        <div className="flex flex-col  items-center my-4">
            {/* <div className="flex items-center justify-center gap-20 md:gap-36 lg:gap-60 "> */}
         

            
            <h1 className="text-3xl  md:text-4xl lg:text-5xl font-semibold mb-2">
                Tag : {tag}
            </h1>
  

            <Link href='/tags'
                className="  bg-sky-500/90 rounded-lg px-2 py-1 mt-4 md:mt-6 hover:cursor-pointer hover:bg-sky-600 text-sm text-white "
                
                >
                View All Tags
            </Link>
  
       
            <div className=" px-4">

                <AllBlogsList data={allBlogsRelatedToTag} />
            </div>

        </div>
    )
}