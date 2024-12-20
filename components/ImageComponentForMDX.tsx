"use client"

import Image, { ImageProps } from "next/image"


// interface ImagePropsTypes  {
//     alt:string;
//     width:number;
//     height:number;
//     src:string;
//     className:string;
// }

export const ImageComponentForMDX = ({ alt, width, height, src, ...props }:ImageProps) => {
    // can't do the following as for Image the alt, width, height, src are mendatory
// export const ImageComponentForMDX = ({...props}:ImagePropsTypes) => {

    return (
        <Image alt={alt} width={width} height={height} src={src} {...props}/>
    )
}