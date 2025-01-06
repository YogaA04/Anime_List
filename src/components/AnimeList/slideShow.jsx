'use client'

import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"

const SlideShow = ({ api }) => {

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "gray", paddingTop: "1px", borderRadius: "50px" }}
                onClick={onClick}
            />
        );
    }

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "gray", paddingTop: "1px", borderRadius: "50px" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <div className="slider-container p-4 bg-white rounded">
            <Slider {...settings}>
                {api.data?.map((anime) => {
                    return (
                        <Link href={`/anime/${anime.mal_id}`} className="click relative p-1" key={anime.mal_id}>
                            <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full 2xl:h-[500px] md:h-[300px] h-[170px] object-cover rounded" />
                            <div className="absolute top-1 px-1 bg-gray-200/50 rounded-br rounded-tl backdrop-blur-sm">
                                {anime.episodes && <p className="font-semibold md:text-md text-[12px]">Eps: {anime.episodes}</p>}
                            </div>
                            {/* <p className="font-bold md:text-md text-sm ">{anime.title}</p> */}
                        </Link>
                    )
                })}
            </Slider>
        </div>
    )
}

export default SlideShow