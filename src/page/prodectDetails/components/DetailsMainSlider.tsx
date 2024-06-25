import React, {useRef, useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay  } from 'swiper/modules';


interface DetailMainSliderContent{
    id: number;
    mainImgSrc: string;
    mainImgAlt: string;
    title: string;
    text: string;
} 

interface DetailMainSliderProps{
    contents: DetailMainSliderContent[];
}

const DetailsMainSlider: React.FC<DetailMainSliderProps> = ({ contents }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef<any>(null);
  
    const handleSlideChange = () => {
      if (swiperRef.current) {
        setCurrentIndex(swiperRef.current.swiper.realIndex);
      }
    };


    // 이미지 로딩이 안되면 에러 콘솔 띄우기
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      console.error(`Failed to load image: ${event.currentTarget.src}`);
      event.currentTarget.alt = "Image not available";  
    };


  return (
    <>
        <Container>
            <div className="slide-sub__01">
                <Swiper
                    onSlideChange={handleSlideChange}
                    ref={swiperRef}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Navigation, Autoplay]}
                >
                    {contents.map((content) => (
                    <SwiperSlide key={content.id}>
                        <img src={content.mainImgSrc} alt={content.mainImgAlt} onError={handleImageError} />
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
                <div className="counter">
                    {currentIndex + 1}/4
                </div>
            </div>
        </Container>
    </>
  );
};

export default DetailsMainSlider;