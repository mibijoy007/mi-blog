
import Tags from "@/components/Tags";
import getTags, { allTagsType } from "@/lib/getTags";
// import Tags from "@/components/Tags"

export default async function AllTags() {

    const allTags :allTagsType = await getTags();
    console.log("allTags  >> ",allTags);
    
    return (
        <div className=" flex flex-col mx-6 md:mx-10 lg:mx-20 my-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl   font-semibold text-balance text-left">
                Tags
            </h1>
            <div className="dark:bg-gray-700 bg-gray-300 my-3 md:my-6 h-[1px] w-1/2 " />
            {/* <ul className="prose dark:prose-invert"> */}
            <Tags allTags={allTags}/>

        </div>
    )
}