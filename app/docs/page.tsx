// import PostItem from "@/components/PostItem";
import PaginationQuery from "@/components/PaginationQuery";
import getAllBlogsData from "@/lib/getAllBlog"

// import dynamic from "next/dynamic"
// const AllBlogsList = dynamic(() => import("../../components/AllBlogsList"))
import AllBlogsList from "../../components/AllBlogsList";
import Link from "next/link";

const postsPerPage : number = 5 


interface BlogPagePropsType{
  searchParams:{
    page?:string;
    // page?:number; //comes in string so...
  },
}

export default async function Page({searchParams}: BlogPagePropsType) {
  const currentPage = Number(searchParams?.page) || 1 ;
  // console.log("searchParams >> ",searchParams);
  

  // only published posts
  const dataWithoutPagination = (await getAllBlogsData()).filter((post) => post.published)

  //   "/docs?page=3" > current page=3 so .slice ( 2 * (2-1) , 2*2 ) gives (2,4) gives 2nd,3rd posts to show 
  const dataWithPagination = dataWithoutPagination.slice( postsPerPage * (currentPage-1), postsPerPage * currentPage )
  
  const totalPages = Math.ceil(dataWithoutPagination.length / postsPerPage)
  const data = dataWithPagination;

  
  
  return (
    <div className="container max-w-4xl py-4 min-h-dvh text-lg">
      <div className="flex items-center gap-4 md:flex-row justify-between  ">
        <div className="flex  justify-between space-y-4 ">
          <h1 className=" font-black text-4xl lg:text-5xl ">Blog</h1>
          {/* <p className="text-xl text-muted-foreground">
            Welcome to my blog.
          </p> */}
          
        </div>
        <Link href='/tags'
        className="  bg-sky-500/90 rounded-lg px-2 py-1 hover:cursor-pointer hover:bg-sky-600 text-sm text-white"

        >
            View All Tags
          </Link>
      </div>
            {/* grid grid-cols-12 */}
      <div className=" gap-3 mt-8">

        <AllBlogsList data={data}/>
        
        <PaginationQuery  totalPages={totalPages} className=""/>

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

 

