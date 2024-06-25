import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gsap } from 'gsap';

const ImageSliderComponent: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { id: 1, path: "/images/main-banner-01.jpg", alt: "1", title: "영림 인테리어스", text: "영림 인테리어스 디자이너가 제안하는 스타일컬렉션부터 다양한 사람들의 리모델링 스토리까지, 나에게 영감을 불어넣어줄 다채로운 공간을 만나보세요" },
        { id: 2, path: "/images/main-banner-02.jpg", alt: "2", title: "하이엔드 라이프, 아펠", text: "현재의 우리 그리고 미래의 모두를 위한 공간과 문화를 만드는 브랜드, 오랜 시간 쌓아온 기술력과 깊이 있는 디자인으로 만들어낸 아펠 시리즈를 만나보세요." },
        { id: 3, path: "/images/main-banner-03.jpg", alt: "3", title: "영림키친바스", text: "365일, 당신의 라이프스타일을 고민합니다.  나와 우리 가족의 이야기가 담긴 집, 영림키친바스와 함께 만들어보세요." },
        { id: 4, path: "/images/main-banner-04.jpg", alt: "4", title: "영림 인테리어스", text: "영림 인테리어스 디자이너가 제안하는 스타일컬렉션부터 다양한 사람들의 리모델링 스토리까지, 나에게 영감을 불어넣어줄 다채로운 공간을 만나보세요" },
        { id: 5, path: "/images/main-banner-05.jpg", alt: "5", title: "영림창호", text: "뛰어난 단열과 기밀성으로 더 포근하고 아늑한 창 영림프라임창호 좋은 창호의 기준이 됩니다." },
    ];


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        afterChange: (index: number) => {
            setCurrentSlide(index);
        }
    };


    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        console.error(`Failed to load image: ${event.currentTarget.src}`);
        event.currentTarget.alt = "Image not available";
    };

    return (
        <div className='mainBanner'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={image.id}>
                        <img src={image.path} alt={image.alt} onError={handleImageError} />
                        <div className='slider-desc' data-aos="fade-up">
                            <div className='slider-desc__title'>{image.title}</div>
                            <div className='slider-desc__text'>{image.text}</div>
                            <button type='button' className='link-btn'>MORE</button>
                        </div>
                        <div className="scroll-indicator">
                            <div className="scroll-line"></div>
                            <span>Scroll</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSliderComponent;