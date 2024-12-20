"use client"


import {
    Pagination,
    PaginationContent,
    // PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils";

import { usePathname, useSearchParams } from "next/navigation";



interface PaginationQueryType {
    className?: string;
    totalPages: number;
}

export default function PaginationQuery({ className, totalPages }: PaginationQueryType) {
    // const [pageSelected,setPageSelected] = useState<boolean>(false)

    //url= .../dashboard?v=2  pathName+	'/dashboard' so we gonna need that
    const pathName = usePathname()
    const searchParams = useSearchParams()

    const currentPage = Number(searchParams.get('page')) || 1

    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1

    // make the page URL
    const createPageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams)
        // console.log("params  >> ",params.toString());
        params.set('page', pageNumber.toString())
        // console.log("params changed >> ",params.toString());

        const finalPageUrl = `${pathName}?${params.toString()}`
        // console.log("finalPageUrl  >> ",finalPageUrl);
        return finalPageUrl
    }
    createPageUrl(2)

    return (
        <Pagination className={`mt-4  ${className}`}>
            <PaginationContent>
                {
                    prevPage >= 1 ? (
                        <PaginationItem>
                            <PaginationPrevious href={createPageUrl(prevPage)} />
                        </PaginationItem>)
                        : null
                }

                {
                    Array.from({ length: totalPages as number }, (_, index) => (
                        <PaginationItem key={`pageNo-${index}`} >
                            {/* <PaginationLink href={createPageUrl(currentPage)}>{currentPage}</PaginationLink> */}
                            <PaginationLink href={createPageUrl(index + 1)} 
                            className={cn(currentPage == index+1 ? " bg-sky-500 text-white" : "", 
                                            " p-0 w-6 h-8  text-xs")}
                            // isActive={currentPage == index+1 }
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))
                }


                {/* elipsis is just ( ... ) */}
                {/* <PaginationItem className={totalPages > 4 ? "hidden" : ""}>
                    <PaginationEllipsis />
                </PaginationItem> */}


                {
                    nextPage <= totalPages ? (
                        <PaginationItem>
                            <PaginationNext href={createPageUrl(nextPage)} />
                        </PaginationItem>)
                        : null
                }


            </PaginationContent>
        </Pagination>

    )
}