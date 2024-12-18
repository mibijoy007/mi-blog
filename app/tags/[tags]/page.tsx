import AllBlogsList from "@/components/AllBlogsList";
import getAllBlogsData from "@/lib/getAllBlog";
import getTags from "@/lib/getTags";
// import Link from "next/link";


export default async function SingleTags({params}:{params:{tags:string}}) {
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
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
                 Tag : {tag}
            </h1>
        <div className="mt-2 p-4">

            <AllBlogsList data={allBlogsRelatedToTag} />
        </div>

        </div>
    )
}