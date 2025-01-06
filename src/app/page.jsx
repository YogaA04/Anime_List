import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api_libs";
import SlideShow from "@/components/AnimeList/slideShow";

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=12")
  let recommendadAnime = await getNestedAnimeResponse("recommendations/anime", "entry")

  recommendadAnime = reproduce(recommendadAnime, 12)

  return (
    <>
      <section className="p-4">
        <Header link={'/populer/1'} linkTitile={'Lihat semua'} title={'Paling populer'} />
        <SlideShow api={topAnime} />
      </section>

      <section className="p-4">
        <Header link={'/rekomendasi'} linkTitile={'Lihat semua'} title={'Rekomendasi'} />
        <SlideShow api={recommendadAnime} />
      </section>
    </>
  );
}

export default Page
