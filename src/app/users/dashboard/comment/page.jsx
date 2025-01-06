import Link from "next/link";
import Header from "../Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth_libs";
import { getLabelText } from "@/libs/getLabelText";
import { Rating } from "@mui/material";

const Page = async () => {

    const user = await authUserSession()
    const comments = await prisma.comment.findMany({where: {user_email: user.email}})

    return (
        <section className="m-4">
            <Header title="My Comment"/>

            <div className="pt-4 flex flex-col gap-2">
                {comments.map(comment => {
                    const labelText = getLabelText(comment.rating)

                    return (
                        <Link key={comment.id} href={`/anime/${comment.anime_mal_id}`} className="bg-white rounded-b-3xl rounded-r-3xl click px-4 py-2 flex justify-between">
                            <div>
                                <p className="text-sm font-semibold">{comment.anime_title}</p>
                                <p>{comment.comment}</p>
                            </div>

                            <div className="flex gap-2 items-center justify-center">
                                <Rating name="read-only" value={comment.rating} readOnly precision={0.5} />
                                <p className="text-sm">{labelText}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
            
            {comments.length == 0 && <div className="h-screen flex flex-col justify-center items-center">
                <icon className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </icon>
                <p>Kamu belum pernah berkomentar</p>
                <p>Coba kasih komentar pada anime faforitmu</p>
                <Link href="/users/dashboard/collection" className="click bg-sky-300 py-1 px-2 m-1 rounded">Koleksi Anime</Link>
            </div>}
        </section>
    )
}

export default Page