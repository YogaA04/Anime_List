"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if (!keyword.trim() || /^[^\w\s]+$/.test(keyword)) {
            return 0
        }

        if (event.key === 'Enter' || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
            <input placeholder="cari anime..." className="w-full p-2 pr-9 rounded-sm" ref={searchRef} onKeyDown={handleSearch} />
            <button className="absolute top-2 end-2 opacity-65 click hover:opacity-100" onClick={handleSearch} >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
            </button>
        </div>
    )
}

export default InputSearch