import prisma from "@/libs/prisma"

export async function POST(request) {
    const {anime_mal_id, comment, username, user_email, anime_title, rating} = await request.json()
    const data = {anime_mal_id, comment, username,  user_email, anime_title, rating}

    const createComment = await prisma.comment.create({data})

    if (!createComment) return Response.json({status: 500, isCreate: false}); else return Response.json({status: 200, isCreate: true})
}