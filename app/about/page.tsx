import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/lib/siteConfig"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata:Metadata ={
  title:"About Me",
  description: "This page is about me(The auther) and my journey as a full stack web developer"
}

const AboutPage = () => {
  return (
    <>
      <section className="space-y-6 pb-8 md:pb-12 md:mt-10 lg:py-">
        <div className="container flex flex-col gap-4 ">

          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
              About Me
            </h1>
            <div className="dark:bg-gray-700 bg-gray-300 my-3 md:my-6 h-[1px] w-1/2 " />
            <Image
              width={600}
              height={80}
              alt="my-avatar"
              src={'/my-avatar.jpg'}
              className="rounded-full w-[8rem] md:w-[12em]"
            />
          </div>

          <div className=" mx-auto text-muted-foreground sm:text-xl p-4 md:p-8 lg:p-10">
            <p>
              A passionate Full-Stack Web Developer with over 3 years of hands-on experience, specializing in the MERN stack.

            </p>
            <br />
            <h2 className="font-bold">TECHNICAL SKILLS</h2>
            <div>

              ● Languages – JavaScript, Typescript, Python <br />
              ● Frontend - React, Next.js, Tailwind CSS, Redux (ReduxToolkit & RTKQuery)<br />
              ● Backend – Node.js, Express.js, FastAPI, Flask<br />
              ● Databases – PostgreSQL, MongoDB, Prisma<br />
              ● Tools & Technologies – GitHub, Monorepo, GraphQL, Docker, Kubernetes, CD/CI, AWS
            </div>
            <br />
            <p>

              My journey in web development has equipped me with a deep understanding of both frontend and backend technologies, enabling me to deliver dynamic, high-performance web solutions that prioritize seamless user experiences.
            </p>
            <br />
            I have worked with React and Next.js, utilizing Redux Toolkit and RTK Query for effective state management, ensuring that applications are both performant and maintainable. My expertise in Tailwind CSS has further allowed me to craft visually appealing and highly customizable frontends.
            <br /><br />
            On the backend, I have leveraged Node.js and Express.js, along with TypeScript, to create reliable and efficient server-side architectures, ensuring that applications are not only powerful but also secure.
            <br /><br />
            I&apos;ve integrated cloud computing and DevOps practices into my development workflow, utilizing AWS for scalable cloud solutions, Docker for containerization, and setting up CD/CI in GitHub to ensure seamless deployment in various environments.
            <br /><br />
            In addition to my technical skills, before diving into full-stack development, I spent time teaching high school Math and Physics. This experience was instrumental in developing my analytical thinking and problem-solving abilities. I enjoyed guiding students through complex problems, discussing different approaches, and finding the most effective solutions. This skill set has seamlessly transitioned into my work as a developer, particularly when it comes to debugging complex issues and optimizing applications for performance. I approach every challenge methodically, drawing from a diverse toolkit of programming languages, frameworks, and best practices to find the most effective solution.
            <br /><br />
            Recently, I&apos;ve been exploring the integration of AI and Python into web development, aiming to create smarter applications. This exploration is driven by my desire to stay at the forefront of technology and continuously improve the efficiency and impact of the solutions I develop.
            <br /><br />
            {/* I am actively seeking a full-time position where I can contribute my skills to innovative projects, collaborate with talented teams, and continue expanding my expertise in a fast-paced development environment. */}
            I open to work where I can contribute my skills to innovative projects, collaborate with talented teams, and continue expanding my expertise in a fast-paced development environment.
            <br /><br />
            Thanks for reading.
          </div>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.linkedIn}
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              LinkedIn
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

    </>

  )
}

export default AboutPage
