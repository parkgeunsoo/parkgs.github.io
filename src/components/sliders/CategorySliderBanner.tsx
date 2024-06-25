import React, {useRef, useEffect} from 'react';
import { Container } from 'react-bootstrap';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const CategorySliderBanner = () => {
    const box1 = useRef(null);

    useEffect(() => {
        const element1 = box1.current;
    
        gsap.fromTo(
          element1,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
              trigger: element1,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reset",
            },
          }
        );
      }, []);


    
  
    // 이미지 로딩이 안되면 에러 콘솔 띄우기
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        console.error(`Failed to load image: ${event.currentTarget.src}`);
        event.currentTarget.alt = "Image not available";  
    };
     const images = [
        { id: 1, path: "/images/img-kitchen.jpg", alt: "키친" , title:"키친"},
        { id: 2, path: "/images/img-bath.jpg", alt: "바스", title:"바스" },
        { id: 3, path: "/images/img-door.jpg", alt: "도어", title:"도어" },
        { id: 4, path: "/images/img-interlockingDoor.jpg", alt: "중문", title:"중문"},
        { id: 5, path: "/images/img-window.jpg", alt: "창호", title:"창호" },
        { id: 6, path: "/images/img-wallFinish.jpg", alt: "몰딩/월/마루", title:"몰딩/월/마루"},
        { id: 7, path: "/images/img-film.jpg", alt: "인테리어 필름", title:"인테리어 필름" },
        { id: 8, path: "/images/img-built-in-closet.jpg", alt: "붙박이장", title:"붙박이장" },
    ];
    return (
        <div ref={box1}>
            <Container>
            {/* <Link to="/Kitchen">Kitchen</Link> */}
                <div className='section design-textbox'>
                    <div className="design-textbox__title">
                        다양한 라이프스타일 속에서 최적화된 
                        당신의 주거 공간을 디자인합니다.<br />
                        가치 있는 당신의 일상을 위한 취향에
                        딱 맞는 인테리어 디자인을 만나보세요.
                    </div>
                    <div className="design-textbox__desc">
                        Lifestyle design beyond material
                    </div>
                </div>
            </Container>
           <div className="section-design">
            <Swiper
                spaceBetween={32}
                slidesPerView={4.5}
                navigation
            >
                {images.map((image) => (
                <SwiperSlide key={image.id}>
                    <img src={image.path} alt={image.alt} onError={handleImageError} />
                    <div className='slider-desc'>
                        <div className='slider-desc__title'>
                            {image.title}
                         
                        </div>
                    </div>
                    {image.id === 1 && <Link to="/kitchen"></Link>}
                    {image.id === 2 && <Link to="/bath"></Link>}
                    {image.id === 3 && <Link to="/door"></Link>}
                    {image.id === 4 && <Link to="/interlockingDoor"></Link>}
                    {image.id === 5 && <Link to="/window"></Link>}
                    {image.id === 6 && <Link to="/wallFinish"></Link>}
                    {image.id === 7 && <Link to="/film"></Link>}
                    {image.id === 8 && <Link to="/builtInCloset"></Link>}
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
};

export default CategorySliderBanner;