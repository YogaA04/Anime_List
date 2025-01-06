"use client"

import { getLabelText } from "@/libs/getLabelText"
import { Rating } from "@mui/material"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

const CommentInput = ({anime_mal_id, user_email, username, anime_title}) => {
    const commentRef = useRef()
    const [isCreated, setIsCreated] = useState(false)
    const [value, setValue] = useState(0)
    const labelText = getLabelText(value)

    const router = useRouter()
    
    const handleComment = async (event) => {
        event.preventDefault()
        
        const comment = commentRef.current.value
        
        const data = {anime_mal_id, comment, username, user_email, anime_title, rating : value}
        
            if (!comment.trim() || comment.length < 3 || comment.length > 500) {
                alert("Minimal 3 karakter dan Maksimal 500 karakter")
            } else {
                const response = await fetch("/api/v1/comment", {
                    method: "POST",
                    body: JSON.stringify(data)
                })
        
                const postComment = await response.json()
                if (postComment.isCreate) {
                    setIsCreated(true)
                    setValue(0)
                    commentRef.current.value = ""
                    router.refresh()
                }
            }
    }

    return (
        <div className="bg-gray-200 p-2 rounded">
            <p>Rating: </p>
            <div className="flex gap-2 py-2 items-center">
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                        event.preventDefault()
                        setValue(newValue);
                    }}
                />
                <p className="text-sm">{labelText}</p>
            </div>

            <div className="flex gap-2">
                <textarea className="rounded w-full p-2" ref={commentRef} />
                <button className="rounded click p-2 bg-sky-500" onClick={handleComment}>Comment</button>
            </div>
            {isCreated && <p className="bg-green-500 rounded p-1 text-sm">Commnet terkirim...</p>}
        </div>
    )
}

export default CommentInput