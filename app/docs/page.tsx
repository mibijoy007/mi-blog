// import PostItem from "@/components/PostItem";
import getAllBlogsData from "@/lib/getAllBlog"
import dynamic from "next/dynamic"

 
const AllBlogsList = dynamic(() => import("../../components/AllBlogsList"))

export default async function Page() {

  // only published posts
  const data = (await getAllBlogsData()).filter((post) => post.published)


  
  
  return (
    <div className="container max-w-4xl py-6 lg:py-10 min-h-dvh">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Welcome to my blog.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-8">


        <AllBlogsList data={data}/>
        {/* <AllBlogsList allBlogsData={allBlogsData}/> */}



        {/* <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((tag) => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card> */}


      </div>
    </div> 
  )
}

 

