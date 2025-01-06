"use client"

import { useState } from "react"
import Link from "next/link";

const CollectionButton = ({anime_mal_id, user_email, anime_image, anime_title, infoCollection}) => {

    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async (event) => {
        event.preventDefault()

        const data = {anime_mal_id, user_email, anime_image,anime_title}

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const collection = await response.json()
        if (collection.isCreate) {
            setIsCreated(true)
        }
    }

    return (
        <div className="my-2">
        {isCreated || infoCollection ? <Link href="/users/dashboard/collection" className="px-2 py-1 bg-green-500 rounded">Sudah di tambahkan ke collection</Link> : 
        <button onClick={handleCollection} className="px-2 py-1 bg-orange-500 click rounded">Add To Collection</button>}
        </div>
    )
}

export default CollectionButton