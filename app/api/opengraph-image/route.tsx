
import { siteConfig } from "@/lib/siteConfig";
import { ImageResponse } from "next/og";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const orbitronBold = fetch(
    // /assets/Orbitron-Bold.ttf
    // new URL("../../../assets/Orbitron-Bold.ttf", import.meta.url)
    new URL("/public/Orbitron-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interBold = fetch(
    // /assets/Orbitron-Bold.ttf
    // new URL("../../../assets/Orbitron-Bold.ttf", import.meta.url)
    new URL("/public/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export  async function GET(req: NextRequest) {
    try {
        const orbitronBoldFont = await orbitronBold;
        const interBoldFont = await interBold;

        const { searchParams } = req.nextUrl;
        const title = searchParams.get("title");
        // console.log("title  >> ",title,orbitronBoldFont);
        
        if (!title) {
            return new NextResponse("Failed to get title", { status: 500 }) // same as above but it's exclusively for nextjs
        }

        // limit the  title not more than 120 charachers
        const headingForOGImage = title.length > 120 ? `${title.substring(0, 120)} ...` : title

        return new ImageResponse(
            (
                <div tw="flex relative flex-col p-8 w-full h-full items-start text-black bg-white">
                    <div tw="flex items-center">

                        <img src='https://avatars.githubusercontent.com/u/72588333?s=400&u=5b731bc6416ab96314892311e04ec9fe4de0a7e9&v=4'
                            alt="icon-image"
                            tw='border-[1.5px] rounded-full p-0.5 border-black  w-[50px] h-[50px]'
                        />

                        <p tw="ml-4 font-semibold text-2xl font-sans" >Mi&apos;s Blog</p>
                    </div>
                    <div tw="flex flex-col flex-1 pb-10 pt-2">

                        <div tw="flex font-bold text-[25px] sm:text-[35px] lg:text-[45px] text-gray-500" style={{ fontFamily: 'Orbitron' }}> {headingForOGImage}</div>
                    </div>
                    <div tw="flex flex-col sm:flex-row  sm:items-center w-full sm:justify-between  text-lg md:text-xl font-mono">
                        <div tw="flex mb-2 sm:mb-0">{siteConfig.url}</div>
                        <div tw="flex ">{siteConfig.links.github}</div>
                    </div>
                </div>

            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    // upper one get's the priority
                    {
                        name: "Inter",
                        data: interBoldFont,
                        style: "normal",
                        weight: 700,
                    },
                    {
                        name: "Orbitron",
                        data: orbitronBoldFont,
                        style: "normal",
                        weight: 900,
                    },
                    
                ],
            }
        )
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        // return new Response("Failed to generate Ograph image",{status:500})  //returns simple error message and status code
        return new NextResponse("Failed to generate Ograph image", { status: 500 }) // same as above but it's exclusively for nextjs
        // return  NextResponse.json({message: "Failed to generate Ograph image" + error}, {status:500})  // returns a json
    }
}