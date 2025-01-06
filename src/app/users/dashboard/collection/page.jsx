import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth_libs";

const Page = async () => {

    const user = await authUserSession
    const collection = await prisma.collection.findMany({
        where: {user_email: user.email}
    })

    return (
        <section className="m-4">
            <Header title="My Collection"/>
            
            <div className="grid md:grid-cols-7 sm:grid-cols-4 grid-cols-3 gap-4">
                {collection.map((collect, index) => {
                    return (
                        <Link href={`/anime/${collect.anime_mal_id}`} className="click relative my-2"  key={index}>
                            <Image src={collect.anime_image} alt="..." width={350} height={350} className="w-full max-h-[400px] object-cover rounded" />
                            {/* <div className="absolute top-0 px-1 bg-gray-200/50 rounded-br rounded-tl backdrop-blur-sm">
                                {anime.episodes && <p className="font-semibold md:text-md text-[12px]">Eps: {anime.episodes}</p>}
                            </div> */}
                            <p className="font-bold md:text-md text-sm ">{collect.anime_title}</p>
                        </Link>
                    )
                })}
            </div>

            {collection.length == 0 && <div className="h-screen flex flex-col justify-center items-center">
                <icon className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-bookmark-dash" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                </svg>
                </icon>
                <p>Kamu belum punya koleksi Anime</p>
                <p>Coba cari Anime faforitmu</p>
                <Link href="/" className="click bg-sky-300 py-1 px-2 m-1 rounded">Cari Anime</Link>
            </div>}
        </section>
    )
}

export default Page