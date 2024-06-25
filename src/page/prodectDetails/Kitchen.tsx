import React from 'react';
import { Container } from 'react-bootstrap';
import DetailsMainSlider from './components/DetailsMainSlider';
import DetailsExplanation from './components/DetailsExplanation';
import DetailsStyleSlider from './components/DetailsStyleSlider';
import DetailsGrade from './components/DetailsGrade';
import OnlyDesign from './components/OnlyDesign';

const MainContentsSlider = [
    { 
        id: 1, 
        mainImgSrc: "/images/index-1-kitchen-img-01.jpg", 
        mainImgAlt: "키친" , 
        title:"Lifestyle", 
        text: "365일 당신의 라이프스타일을 고민합니다."
    },
    { 
        id: 2, 
        mainImgSrc: "/images/index-1-kitchen-img-02.jpg", 
        mainImgAlt: "키친", title:"Timeless", 
        text: "시간이 지나도 변하지 않을 가치를 담기 위해 노력합니다." 
    },
    { 
        id: 3, 
        mainImgSrc: "/images/index-1-kitchen-img-03.jpg", 
        mainImgAlt: "키친", 
        title:"Originality",  
        text:"브랜드가 가진 자부심으로 항상 새롭고 신선한 아이디어를 생각합니다." 
    },
    { 
        id: 4, 
        mainImgSrc: "/images/index-1-kitchen-img-04.jpg", 
        mainImgAlt: "키친", 
        title:"Tailored to your needs", 
        text: "당신의 공간과 삶의 방식에 꼭 맞는 특별한 키친을 만나보세요."
    },
];

const ContentsImg = [
    {
      imgSrc: '/images/index-1-kitchen-img-05.jpg',
      alt: '부엌',
      title: '요리가 취미인 당신을 위한 주방',
      desc: '취미가 일상 속에서 더 빛을 발하는 순간. 잘 짜여진 수납 시스템과 고품질의 가전제품, 그리고 관리하기 쉬운 조리대 상판은 요리하는 내내 즐거움을 선사합니다.',
    },
    {
      imgSrc: '/images/index-1-kitchen-img-06.jpg',
      alt: '부엌',
      title: '다양한 취향을 담은 디자인',
      desc: '간결한 형태의 미니멀 디자인부터 디테일이 매력적인 디자인까지. 편안하고 내추럴한 컬러부터 톡톡 튀는 개성만점 컬러까지. 다양한 취향에 한걸음 더 다가가기 위해 다채로운 라인업을 선보입니다.',
    },
    {
      imgSrc: '/images/index-1-kitchen-img-07.jpg',
      alt: '부엌',
      title: '스마트한 키친 시스템',
      desc: '다양한 형태와 기능을 가진 약 300여 가지의 키친 유닛으로 나의 사용 패턴에 꼭 맞는 키친을 설계할 수 있습니다. 효율적인 동선과 똑똑한 수납 시스템을 제안하는 영림의 키친 전문가들을 만나보세요.',
    },
];

const ContentsSlider = [
    { 
        id: 1, 
        slideImgSrc: "/images/detail-slider-01.jpg", 
        slideImgAlt: "키친" , 
        title:"Soff Cashmere", 
        text: "지문에 강한 슈퍼매트 소재와 이음매를 최소화한 제로조인트 마감 공법으로 더욱 깔끔하고 완성도 높은 키친을 완성합니다."
    },
    { 
        id: 2, 
        slideImgSrc: "/images/detail-slider-02.jpg", 
        slideImgAlt: "키친", 
        title:"Bella Milo", 
        text: "8mm의 초슬림 프레임 디자인이 돋보이는 미니멀한 디자인에 따뜻한 우드결을 입힌 벨라의 새로운 컬러를 만나보세요." 
    },
    { 
        id: 3, 
        slideImgSrc: "/images/detail-slider-03.jpg", 
        slideImgAlt: "키친", 
        title:"Atelier",  
        text:"매끄럽고 부드러운 도장 질감과 무광 골드 핸들이 조화로운 프리미엄 키친입니다. 조각처럼 정교하게 가공된 몰딩과 이탈리아산 세라믹 상판이 더해져 시간이 흘러도 변치 않는 품격 있는 클래식 키친을 완성합니다." 
    },
    { 
        id: 4, 
        slideImgSrc: "/images/detail-slider-04.jpg", 
        slideImgAlt: "키친", 
        title:"Iris", 
        text: "마음 한구석에 로망으로 존재하는 컬러 주방 아이리스. 자연의 색감과 개개인의 개성을 담아 나만의 특별한 키친을 만들어보세요."
    },
];

const GradeLink = [
    { 
        gradeImg: "/images/index-1-kitchen-img-08.jpg", 
        gradeSrc: "프리미엄 관련 이미지" , 
        title:"Premium", 
        text: "프리미엄 키친"
    },
    { 
        gradeImg: "/images/index-1-kitchen-img-09.jpg", 
        gradeSrc: "스탠다드 관련 이미지", 
        title:"Standard", 
        text: "스탠다드 키친" 
    }
];

const OnlyDesignContents = [
    { 
        designImg: "/images/product-img14.jpg", 
        designImgAlt: "One & Only Design" , 
        title:"One & Only Design", 
        text: "빌트인가전, 후드, 수전, 상판소재 등 다양한 자재와 기기를 직접 하나하나 골라 나만의 키친을 완성해보세요."
    }
];

const kitchen: React.FC = () => {
  return (
    <div className='sub-wrap'>
        <div className='main-visual'>
            <img src="/images/kitchen-main-visual.jpg" alt="" />
            <div className="visual-desc" data-aos="fade-up" data-aos-delay="100">
                <Container>
                    <div className="visual-desc__title">키친 알아보기</div>
                    <div className="visual-desc__text">
                        단순한 요리 공간을 넘어 나를 위한 공간으로<br />
                        시작하세요, 나만의 키친 라이프
                    </div>
                </Container>
            </div>
            <div className="scroll-indicator">
                <div className="scroll-line"></div>
                <span>Scroll</span>
            </div>
        </div>
        <section>
            <DetailsMainSlider contents={MainContentsSlider} />
        </section>
        <section>
            <DetailsExplanation contents={ContentsImg} />
        </section>
        <section>
            <DetailsStyleSlider contents={ContentsSlider} />
        </section>
        <section>
            <DetailsGrade contents={GradeLink} />
        </section>
        <section>
            <OnlyDesign contents={OnlyDesignContents} />
        </section>
    </div>
  );
};

export default kitchen;