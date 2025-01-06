import { getLabelText } from "@/libs/getLabelText"
import prisma from "@/libs/prisma"
import { Rating } from "@mui/material"

const CommentBox = async ({anime_mal_id}) => {

    const comments = await prisma.comment.findMany({where: {anime_mal_id}})
    
    return (
        <div className="my-2 flex flex-col gap-2">
            {comments.map(comment => {
                const labelText = getLabelText(comment.rating)

                return (
                    <div key={comment.id} className="bg-gray-200 rounded-b-3xl rounded-r-3xl px-4 py-2">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-sm font-semibold">{comment.username}</p>
                                <p>{comment.comment}</p>
                            </div>
                            <div className="flex gap-2 items-center justify-center">
                                <Rating name="read-only" value={comment.rating} readOnly precision={0.5} />
                                <p className="text-sm">{labelText}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
} 

export default CommentBox