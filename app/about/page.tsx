import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/lib/siteConfig"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our journey, background, and technical expertise in web development."
}

const AboutPage = () => {
  return (
    <section className="space-y-12 pb-8 md:pb-12 md:mt-10">
      <div className="container flex flex-col gap-8">
        
        {/* Main Header */}
        <div className="flex flex-col justify-center md:mt-5 mt-10 items-center text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            About Us
          </h1>
          <p className="mt-2 text-muted-foreground sm:text-lg max-w-xl">
            Passionate software developers crafting modern, high-performance web solutions.
          </p>
          <div className="dark:bg-gray-700 bg-gray-300 my-4 md:my-6 h-[1px] w-1/2" />
        </div>

        {/* Profiles Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* ==================== PORTION 1: BROTHER'S PROFILE ==================== */}
          <div className="flex flex-col justify-between p-6 md:p-8 rounded-2xl border bg-card text-card-foreground shadow-sm h-full">
            <div className="flex flex-col flex-1 space-y-6">
              
              {/* Profile Header */}
              <div className="flex flex-col items-center text-center">
                <Image
                  width={600}
                  height={80}
                  alt="Brother's Avatar"
                  src="/my-avatar.jpg"
                  className="rounded-full w-[8rem] md:w-[10rem] h-[8rem] md:h-[10rem] object-cover mb-4 border-2 border-primary"
                />
                <h2 className="text-2xl md:text-3xl font-bold">Maksudul</h2>
                <h2 className="text-xl md:text-2xl font-bold">Full-Stack Developer</h2>
                <span className="text-sm text-muted-foreground font-medium">3+ Years Experience</span>
              </div>

              {/* Bio & Skills */}
              <div className="flex-1 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  A passionate Full-Stack Web Developer with over 3 years of hands-on experience, specializing in the MERN stack.
                </p>

                <div className="space-y-2 pt-2">
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-wider">Technical Skills</h3>
                  <ul className="space-y-1 list-disc list-inside text-sm">
                    <li><strong className="text-foreground">Languages:</strong> JavaScript, TypeScript, Python</li>
                    <li><strong className="text-foreground">Frontend:</strong> React, Next.js, Tailwind CSS, Redux (ReduxToolkit & RTKQuery)</li>
                    <li><strong className="text-foreground">Backend:</strong> Node.js, Express.js, FastAPI, Flask</li>
                    <li><strong className="text-foreground">Databases:</strong> PostgreSQL, MongoDB, Prisma</li>
                    <li><strong className="text-foreground">DevOps & Tools:</strong> GitHub, Monorepo, GraphQL, Docker, Kubernetes, CI/CD, AWS</li>
                  </ul>
                </div>

                <p>
                  My journey in web development equips me to build dynamic, high-performance solutions. Before full-stack development, I taught high school Math and Physics, which sharpened my analytical thinking and methodical problem-solving skills.
                </p>
                <p>
                  Recently, I&apos;ve been exploring AI and Python integration to create smarter applications and continuously push technical boundaries.
                </p>
              </div>
            </div>

            {/* Links Section - Balanced with empty placeholder for mailto link height */}
            <div className="mt-6 pt-4 border-t flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={siteConfig.links.linkedIn}
                  className={cn(buttonVariants({ size: "sm" }), "flex-1 text-center")}
                >
                  LinkedIn
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={siteConfig.links.github}
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "flex-1 text-center")}
                >
                  GitHub
                </Link>
              </div>
              <div className="h-9 hidden md:block" aria-hidden="true" />
            </div>
          </div>

          {/* ==================== PORTION 2: Durjoy ==================== */}
          <div className="flex flex-col justify-between p-6 md:p-8 rounded-2xl border bg-card text-card-foreground shadow-sm h-full">
            <div className="flex flex-col flex-1 space-y-6">
              
              {/* Profile Header */}
              <div className="flex flex-col items-center text-center">
                <Image
                  width={600}
                  height={600}
                  alt="Mohaiminul Islam Durjoy"
                  src="/durjoy-avatar.jpg"
                  className="rounded-full w-[8rem] md:w-[10rem] h-[8rem] md:h-[10rem] object-cover mb-4 border-2 border-primary"
                />
                <h2 className="text-2xl md:text-3xl font-bold">Mohaiminul</h2>
                <h2 className="text-xl md:text-2xl font-bold">Front-End Developer</h2>
                {/* Spacer to align sub-titles when experience badge isn't present */}
                <span className="text-sm font-medium opacity-0 select-none hidden md:inline-block">Spacer</span>
              </div>

              {/* Bio & Skills */}
              <div className="flex-1 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a Front-End Developer focused on building responsive, functional, and user-centered web interfaces. I specialize in crafting clean code and intuitive experiences within the modern React ecosystem.
                </p>

                <div className="space-y-2 pt-2">
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-wider">Technical Skills & Tools</h3>
                  <ul className="space-y-1 list-disc list-inside text-sm">
                    <li><strong className="text-foreground">Core Tech:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
                    <li><strong className="text-foreground">Frameworks:</strong> React, Next.js</li>
                    <li><strong className="text-foreground">Styling:</strong> Tailwind CSS</li>
                    <li><strong className="text-foreground">Design & Tools:</strong> UI/UX Principles, Figma, Node.js, Git, GitHub</li>
                  </ul>
                </div>

                <p>
                  I use TypeScript for writing predictable code and Tailwind CSS for rapid, utility-first styling. I maintain a strong understanding of UI/UX workflows, leveraging Figma to seamlessly convert designs into clean frontend UI components.
                </p>
                <p>
                  Located in Joypurhat, Rajshahi Division, Bangladesh — always open to collaborating on innovative frontend projects and building impactful digital experiences.
                </p>
              </div>
            </div>

            {/* Links Section */}
            <div className="mt-6 pt-4 border-t flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  // href="https://mohaiminul-durjoy.vercel.app/"
                  href="https://www.linkedin.com/in/mohaiminul-islam-3a17652b7/"
                  className={cn(buttonVariants({ size: "sm" }), "flex-1 text-center")}
                >
                  LinkedIn
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Mohaiminul007"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "flex-1 text-center")}
                >
                  GitHub
                </Link>
              </div>
              <a
                href="mailto:mohaimin.durjoy@gmail.com"
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "w-full text-center")}
              >
                mohaimin.durjoy@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutPage