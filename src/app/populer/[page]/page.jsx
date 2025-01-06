'use client'

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api_libs"
import { useRouter } from "next/navigation"

const Page = ({params}) => {
    const route = useRouter()
    const pageDestination = parseInt(params.page)

    
    const [page, setPage] = useState(pageDestination)
    const [topAnime, setTopAnime] = useState([])
    
    const fetchData = async() => {
        const data = await getAnimeResponse("top/anime", `page=${pageDestination}`)
        setTopAnime(data)
    }
    
    useEffect(() => {
        route.push(`/populer/${page}`)
        fetchData()
    }, [page, route])

    return (
        <div className="p-4">
            <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
            <AnimeList api={topAnime} />
            <Pagination page={pageDestination} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </div>
    )
}

export default Page