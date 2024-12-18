// for the getting responsese form Ai models we have to write them (app > api) 
// so we'll try that later

"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Prescription() {
    // const [image, setImage] = useState<File | null>(null);
    const [imageBase64, setImageBase64] = useState<string >('');
    const [preview,setPreview] = useState<string>('');

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const imageFile = e.target.files[0]
            const imageTempUrl : string = URL.createObjectURL(imageFile)
            setPreview(imageTempUrl)

            // convert to base64
            const imageReader = new FileReader()
            imageReader.onload = () =>{
                setImageBase64(imageReader.result as string)
            }
            imageReader.readAsDataURL(imageFile)           
        }
    }

    const handleImageSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (imageBase64) {
            
            console.log("Image Submitted", imageBase64);
            toast.success("Image Submitted!")
        } else {
            console.log("Please Upload an image");
        }
    }

    return (
        <div className="min-h-dvh flex flex-col items-center ">
            <Toaster/>
            <h1 className="text-xl md:text-4xl font-bold text-center my-3 md:my-4 font-mono">
                Presription Analysis With Ai (Comming Soon!)
            </h1>

            <hr  className="h-[2px] w-[25rem] md:w-[40rem] bg-slate-600 my-2"/>

            <h2 className="text-center text-lg md:text-2xl">
                Enter a image of your prescribtion to analyze <br /> 
                <span className="text-sm">(wait for some time after submitting)</span> :
            </h2>

            <form onSubmit={handleImageSubmit} className="flex flex-col justify-center items-center mt-8">
                <input type="file"
                    id="imageInput"
                    onChange={handleChangeImage}
                    className="block"
                />

                {/* preview image */}
                {
                 preview && 
                     <Image src={preview} 
                     width={300} 
                     height={60} 
                     alt="Prescription Image"
                     className="flex justify-center my-6 w-[25rem] md:w-[40rem] border border-gray-500 rounded-lg p-2"
                     />
            }

                <Button type="submit" className="my-4 w-52" variant='default'>
                    Submit to Analyze
                </Button>

            </form>

            
        </div>
    )
}



// ======================================

// give me code to upload an image to  cloud vision api and get back the ocr text
// ChatGPT said:
// ChatGPT
// To upload an image to the Google Cloud Vision API and retrieve OCR text, you can use the following example in a Next.js environment with TypeScript. First, make sure you have a Google Cloud account and the Vision API enabled.

// Prerequisites
// Install the Google Cloud client library:
// bash
// Copy code
// npm install @google-cloud/vision
// Set up authentication by downloading your Google Cloud service account key and setting the GOOGLE_APPLICATION_CREDENTIALS environment variable:
// bash
// Copy code
// export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your-service-account-key.json"
// Example Code
// API Route (app/api/upload/route.ts)
// This will handle uploading the image and calling the Vision API.

// typescript
// Copy code
// import { NextRequest, NextResponse } from 'next/server';
// import vision from '@google-cloud/vision';

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   const { base64Image } = body;

//   if (!base64Image) {
//     return NextResponse.json({ error: 'Image is required' }, { status: 400 });
//   }

//   // Create a client
//   const client = new vision.ImageAnnotatorClient();

//   try {
//     // Call Vision API
//     const [result] = await client.textDetection({
//       image: { content: base64Image },
//     });

//     const detections = result.textAnnotations?.[0]?.description || 'No text detected';
//     return NextResponse.json({ text: detections });
//   } catch (error: any) {
//     console.error('Error calling Vision API:', error);
//     return NextResponse.json({ error: 'Failed to process image' }, { status: 500 });
//   }
// }
// Frontend Component (components/ImageUpload.tsx)
// This will allow the user to upload an image, convert it to Base64, and send it to the API.

// tsx
// Copy code
// 'use client';

// import React, { useState } from 'react';

// export default function ImageUpload() {
//   const [image, setImage] = useState<string | null>(null);
//   const [ocrText, setOcrText] = useState<string | null>(null);

//   const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     // Convert to Base64
//     const reader = new FileReader();
//     reader.onload = async () => {
//       const base64Image = (reader.result as string).split(',')[1]; // Remove "data:image/*;base64," prefix
//       setImage(reader.result as string);

//       // Send to API
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ base64Image }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setOcrText(data.text);
//       } else {
//         console.error('Error:', data.error);
//         setOcrText('Failed to extract text');
//       }
//     };

//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="space-y-4">
//       <input type="file" accept="image/*" onChange={handleImageChange} />
//       {image && <img src={image} alt="Uploaded preview" className="max-w-xs" />}
//       {ocrText && (
//         <div>
//           <h3 className="font-semibold">OCR Text:</h3>
//           <p>{ocrText}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// Key Points
// Backend API:

// Uses Google Cloud Vision to detect text in an image.
// Processes a Base64 image sent from the client.
// Frontend:

// Uploads the image and previews it.
// Sends the Base64 string to the backend and displays the detected text.
// This setup will allow you to upload an image, call the Vision API for OCR, and display the extracted text on the client side.












// =======================================