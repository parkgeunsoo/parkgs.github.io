import "../../src/App.scss";
// import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { gsap } from "gsap";

// Swiper 모듈을 swiper/modules에서 가져오기
import { Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainPage: React.FC = () => {
  return (
    <>
      <Swiper
        modules={[EffectFade, Navigation]} // Swiper 모듈 설정
        slidesPerView="auto" // 한 번에 보이는 슬라이드 수
        centeredSlides={true} // 슬라이드를 가운데 정렬
        spaceBetween={30} // 슬라이드 간 간격
        navigation
      >
        <SwiperSlide>
          <div className="card-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/images/card_bg.png`}
              alt="card"
              className="bg"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/toty_icon.png`}
              alt="card"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`${process.env.PUBLIC_URL}/images/img-2.jpg`}
            alt="이미지 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`${process.env.PUBLIC_URL}/images/img-3.jpg`}
            alt="이미지 3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainPage;
