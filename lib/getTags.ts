
// this is how the tags data sturucture would look like
// const allTags = [
//     {
//         tagName:"reactjs",
//         slugs:[]
//     },
//     ....
// ]
// // this will be more complicated. let's just go with simple object

import getAllBlogsData from "./getAllBlog";

// const allTags ={
//     "reactjs" : ['slug1','slug2']
// }

export interface allTagsType {
    [key:string] : string[]
}

// Record<string, string[]> // also works

export default async function getTags(){
    const allBlogsData =  (await getAllBlogsData()).filter((post) => post.published)
    // console.log("allBlogsData >> ",allBlogsData);
    const allTags:allTagsType = {};

    allBlogsData.forEach((eachBlogData) =>{
        if(eachBlogData.tags){
            eachBlogData.tags.forEach((tag:string) =>{
                // 'rehype pretty' to rehype-pretty
                tag= tag.toString().replace(" ",'-')
                if(!allTags[tag]){
                    allTags[tag] = []
                }
                allTags[tag].push(eachBlogData.slug)
                // allTags.tag.push(eachBlogData.slug) 
                // this will give literally alltags.tag not the actuall vatiable !!!
            })
        }
    })
    
    const sortedAllTags = Object.keys(allTags).sort().reduce((newObj:{[key:string]:string[]},key) =>{
        newObj[key] = allTags[key]
        return newObj
    },{})

    // return allTags
    return sortedAllTags
}
