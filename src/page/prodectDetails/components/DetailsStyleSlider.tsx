import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface DetailsStyleSliderContent {
    slideImgSrc: string;
    slideImgAlt: string;
    title: string;
    text: string;
    id: number;
}

interface DetailsStyleSliderProps {
    contents: DetailsStyleSliderContent[];
}


const DetailsStyleSlider: React.FC<DetailsStyleSliderProps> = ({ contents }) => {


// 이미지 로딩이 안되면 에러 콘솔 띄우기
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      console.error(`Failed to load image: ${event.currentTarget.src}`);
      event.currentTarget.alt = "Image not available";  
  };
 

  return (
    <>
        <div className="slide-sub__02">
            <div className="slide2-tab">

            </div>
            <Swiper
                spaceBetween={16}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
            >
                {contents.map((content) => (
                    <SwiperSlide key={content.id}>
                    <img src={content.slideImgSrc} alt={content.slideImgAlt} onError={handleImageError} />
                    <div className='slider-desc'>
                        <div className='slider-desc__title'>
                        {content.title}
                        </div>
                        <div className='slider-desc__text'>
                        {content.text}
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
  );
};

export default DetailsStyleSlider;