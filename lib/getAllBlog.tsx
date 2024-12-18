
import fs from 'node:fs';
import path from 'path';
import compileMDXFunc from './compileMDX';
// import { data } from './data';

const CONTENT_DIR = './content/docs';

// export function getMdxLinks() {

export function getAllBlogLinks() {
  const links: string[] = [];

  function walkDir(currentPath: string) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const fullPath = path.join(currentPath, file);
      const stats = fs.statSync(fullPath);


      if (stats.isDirectory()) {
        walkDir(fullPath);
      } else if (file.endsWith('.mdx')) {
        // const relativePath = fullPath.replace(CONTENT_DIR, '').replace(/page\.mdx$/, '');
        const relativePath = fullPath.replace(/page\.mdx$/, '').replace('content', '')
        links.push(relativePath);
      }
    }
  }

  walkDir(CONTENT_DIR);

  const finalLinks: string[] = links.map((link) => link.replace(/\\/g, '/'));
  //   console.log('finalLinks >>>',finalLinks);

  return finalLinks// Normalize for all OS

  // return makeNestedLinks(finalLinks);
}


// interface AllBlogDataType {
//   slug: string;
//   date?: string;
//   title?: string;
//   description?: string;
//   tags?: string[];
// }

// // interface AllBlogDataType {
// //   slug: string;
// //   frontmatter: {
// //     global_id?: number;
// //     title: string;
// //     date?: string
// //     description?: string;
// //     published?: boolean;
// //   }
// // }

// export default async function getAllBlogsData() {

//   // const allBlogData : AllBlogDataType[]  = []
//   const allBlogData: AllBlogDataType[] = []

//   const links: string[] = getAllBlogLinks()
//   links.map(async (link: string) => {
//     const fileLink: string = process.cwd() + "/content" + link + 'page.mdx'
//     // console.log("fileLink >> ",fileLink);
//     // console.log("fileLink >> ",path.normalize(fileLink).replace(/\\/g,"/"));
//     const finalFileLink: string = path.normalize(fileLink).replace(/\\/g, "/")

//     const fileContent = await fs.promises.readFile(finalFileLink, "utf-8");
//     const compiledMDX = await compileMDXFunc(fileContent)
//     if (compiledMDX.frontmatter) {
//       console.log("frontmatter >> ",compiledMDX.frontmatter.date);
//       console.log("frontmatter type>> ",typeof(compiledMDX.frontmatter.date));

//       const slug = link
//       // const frontmatter = compiledMDX.frontmatter
//       const date = compiledMDX.frontmatter.date || ''
//       const title = compiledMDX.frontmatter.title || ''
//       const tags = compiledMDX.frontmatter.tags
//       const description = compiledMDX.frontmatter.description

//       const item : AllBlogDataType = { slug, date, title, description, tags}
//       allBlogData.push( item )
//       // allBlogData.push({ slug, frontmatter })
//     }
//   })

//   console.log("allBlogData  >> ",allBlogData);

//   return allBlogData;
// }


export interface AllBlogDataType {
  slug: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  published: boolean;
}

// const dataLocal :AllBlogDataType[] = data;
const dataLocal :AllBlogDataType[] = [];

export default async function getAllBlogsData() {
  let allBlogData: AllBlogDataType[] = [];

  if (dataLocal.length > 0 ) {
    allBlogData = dataLocal
    return allBlogData
  }

  console.log("MDX is processing...");
  
  const links: string[] = getAllBlogLinks();

  for (const link of links) {
    const fileLink: string = process.cwd() + "/content" + link + 'page.mdx';
    const finalFileLink: string = path.normalize(fileLink).replace(/\\/g, "/");

    try {
      // await   
      const fileContent = await fs.promises.readFile(finalFileLink, "utf-8");
      const compiledMDX = await compileMDXFunc(fileContent);

      if (compiledMDX.frontmatter && link) {
        // console.log("frontmatter >> ", compiledMDX.frontmatter.date);
        // console.log("frontmatter typeof >> ", typeof(compiledMDX.frontmatter.tags));
        // console.log("frontmatter type tag >> ", typeof compiledMDX.frontmatter.tags);

        const slug = link;
        // const frontmatter : Frontmatter  = compiledMDX.frontmatter
        const date = typeof compiledMDX.frontmatter.date === 'string' ? compiledMDX.frontmatter.date : '' 
        const title = typeof compiledMDX.frontmatter.title === 'string' ? compiledMDX.frontmatter.title : 'Add Blog Title Here'
        const description = typeof compiledMDX.frontmatter.description === 'string' ? compiledMDX.frontmatter.description : ''
        const published = typeof compiledMDX.frontmatter.published === 'boolean' ? compiledMDX.frontmatter.published : false
        // const tags =  typeof compiledMDX.frontmatter.tags === ''? compiledMDX.frontmatter.tags : []
        // const tags =   compiledMDX.frontmatter.tags || []
        const tags = Array.isArray(compiledMDX.frontmatter.tags) ? compiledMDX.frontmatter.tags
          : typeof compiledMDX.frontmatter.tags === 'string'
            ? [compiledMDX.frontmatter.tags] 
            : [];

        const item: AllBlogDataType = { slug, date, title, description, tags, published };
        allBlogData.push(item);
      }
    } catch (error) {
      console.error('Error reading file:', error);
    }
  }

  // console.log("allBlogData  >> ", allBlogData);
  return allBlogData;
}




export function getNestedTreeBlogLinks() {
  const flatLinksFrom: string[] = getAllBlogLinks()
  return makeNestedLinks(flatLinksFrom)
}

export interface NodeType {
  name: string;
  path: string;
  children: NodeType[]
}

function makeNestedLinks(flatLinks: string[]) {

  // console.log("flatLinks >>> ",flatLinks);
  const root: NodeType[] = [];

  flatLinks.forEach((link) => {
    const segments = link.split('/').filter(Boolean); // Break into segments and remove empty entries
    let currentLevel = root;

    segments.forEach((segment, index) => {
      const existing = currentLevel.find((item) => item.name === segment);

      if (existing) {
        currentLevel = existing.children; // Move deeper if segment exists
      } else {
        const newNode = {
          name: segment,
          path: '/' + segments.slice(0, index + 1).join('/'),
          children: []
        };
        currentLevel.push(newNode);
        currentLevel = newNode.children; // Move deeper
      }
    });
  });

  // console.log("root >> ",root);

  // root.map((item) => {
  //     item.children.map((nItem) => {
  //         console.log("nested item >>",nItem);   
  //     })
  // })
  return root;
}

