import { getAnimeResponse } from "@/libs/api_libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSession } from "@/libs/auth_libs"
import prisma from "@/libs/prisma"
import CommentInput from "@/components/AnimeList/CommentInput"
import CommentBox from "@/components/AnimeList/CommentBox"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id}
    })

    return (
        <div className="p-2">
            <div className="w-full flex md:flex-row flex-col gap-2 justifi-center">
                <Image src={anime.data.images.webp.large_image_url} width={300} height={300} className="md:w-[80%] w-full rounded object-cover" />
                <div className="w-full bg-white p-4 rounded">
                    <h1 className="font-bold pb-3 text-xl">{anime.data.title}</h1>
                    <div className=" w-full">
                        <p>Trailer:</p>
                        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
                    </div>

                    {
                        user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.large_image_url} anime_title={anime.data.title} infoCollection={collection}/>
                    }

                    <p className="text-sm pt-1 font-semibold">Score: {anime.data.score}/{anime.data.scored_by}</p>
                    <p className="text-sm pt-1 font-semibold">Popularity: {anime.data.popularity}</p>
                    <p className="text-sm pt-1 font-semibold">Members: {anime.data.members}</p>
                    <p className="text-sm pt-1 font-semibold">Favorites: {anime.data.favorites}</p>
                    <p className="text-sm pt-1 font-semibold">Episodes: {anime.data.episodes}</p>
                    <p className="text-sm pt-1 font-semibold">Rank: {anime.data.rank}</p>
                    <p className="text-sm pt-1 font-semibold">Rating: {anime.data.rating}</p>
                    <p className="text-sm pt-1 font-semibold">Duration: {anime.data.duration}</p>
                    <p className="text-sm pt-1 font-semibold">Year: {anime.data.year}</p>
                    <p className="text-sm pt-1 font-semibold">Season: {anime.data.season}</p>
                    <p className="text-sm p-2 indent-8">{anime.data.synopsis}</p>

                </div>
            </div>
                    <div className="mt-5">
                        <h2 className="font-bold">Comment :</h2>
                        <CommentBox anime_mal_id={id}/>
                        {user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title}/>}
                    </div>
        </div>
    )
}

export default Page