import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <>
            <div className="grid md:grid-cols-7 sm:grid-cols-4 grid-cols-3 gap-4">
                {api.data?.map((anime) => {
                    return (
                        <Link href={`/anime/${anime.mal_id}`} className="click relative" key={anime.mal_id}>
                            <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-[400px] object-cover rounded" />
                            <div className="absolute top-0 px-1 bg-gray-200/50 rounded-br rounded-tl backdrop-blur-sm">
                                {anime.episodes && <p className="font-semibold md:text-md text-[12px]">Eps: {anime.episodes}</p>}
                            </div>
                            <p className="font-bold md:text-md text-sm ">{anime.title}</p>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default AnimeList