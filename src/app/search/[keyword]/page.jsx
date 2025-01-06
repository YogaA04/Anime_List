import { getAnimeResponse } from "@/libs/api_libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {

    let keyword = decodeURIComponent(params.keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${keyword}`)

    if (!searchAnime.data[0]) keyword = keyword + " tidak ditemukan"
    
    return (
        <div className="p-4">
            <Header title={`Pencarian untuk ${keyword}`} />
            <AnimeList api={searchAnime} />
        </div>
    );
}

export default Page