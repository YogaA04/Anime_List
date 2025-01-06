'use client'

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import { useEffect, useState } from "react"
import { getNestedAnimeResponse } from "@/libs/api_libs"

const Page = () => {
    const [rekomendasiAnime, setRekomendasiAnime] = useState([])

    const fetchData = async() => {
        const data = await getNestedAnimeResponse(`recommendations/anime`, "entry")
        setRekomendasiAnime({data: data})
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="p-4">
            <HeaderMenu title={`REKOMENDASI ANIME`}/>
            <AnimeList api={rekomendasiAnime} />
        </div>
    )
}

export default Page