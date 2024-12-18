
export interface appsDetailsType {
  title: string;
  link: string;
  target?: string;
  rel?: string;
  description?: string;
}
export const appsDetails: appsDetailsType[] = [
  {
    title: "Prescribtion Analyzer",
    link: "https://huggingface.co/spaces/Maksudul/prescribtion-reader",
    target: "_blank",
    rel: "noreferrer",
    description: "Upload your prescription image and an Ai will analyze and provide feedback on the medications."
  },
  {
    title: "Hadith Chat",
    link: "https://huggingface.co/spaces/Maksudul/hadith-strmlit",
    target: "_blank",
    rel: "noreferrer",
    description: "Ask your islamic questions and an Ai trained in Hadith will answer along with references."
  },
  // {title : "Google", link:"https://google.com", target:"_blank",rel:"noreferrer"},
  {
    title: "Blog",
    link: "/docs",
    description: "A personal blog where I share my personal experiences, Solutions of the problems I face and lots more "
  },

]
