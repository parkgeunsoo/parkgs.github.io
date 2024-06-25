import { Container } from 'react-bootstrap';
import DetailsMainSlider from './components/DetailsMainSlider';
import DetailsExplanation from './components/DetailsExplanation';
import DetailsStyleSlider from './components/DetailsStyleSlider';
import DetailsGrade from './components/DetailsGrade';


const MainContentsSlider = [
    { 
        id: 1, 
        mainImgSrc: "/images/index-2-bath-kv-01.jpg", 
        mainImgAlt: "키친" , 
        title:"Lifestyle", 
        text: "365일 당신의 라이프스타일을 고민합니다."
    },
    { 
        id: 2, 
        mainImgSrc: "/images/index-2-bath-kv-02.jpg", 
        mainImgAlt: "키친", title:"Timeless", 
        text: "시간이 지나도 변하지 않을 가치를 담기 위해 노력합니다." 
    },
    { 
        id: 3, 
        mainImgSrc: "/images/index-2-bath-kv-03.jpg", 
        mainImgAlt: "키친", 
        title:"Originality",  
        text:"브랜드가 가진 자부심으로 항상 새롭고 신선한 아이디어를 생각합니다." 
    },
    { 
        id: 4, 
        mainImgSrc: "/images/index-2-bath-kv-04.jpg", 
        mainImgAlt: "키친", 
        title:"Tailored to your needs", 
        text: "당신의 공간과 삶의 방식에 꼭 맞는 특별한 키친을 만나보세요."
    },
];


const ContentsImg = [
    {
      imgSrc: '/images/product-bath-img01.jpg',
      alt: '화장실',
      title: '고품격 욕실을 위한 최고의 파트너 브랜드',
      desc: '취미가 일상 속에서 더 빛을 발하는 순간. 잘 짜여진 수납 시스템과 고품질의 가전제품, 그리고 관리하기 쉬운 조리대 상판은 요리하는 내내 즐거움을 선사합니다.',
    },
    {
      imgSrc: '/images/product-bath-img02.jpg',
      alt: '화장실',
      title: '실측부터 AS까지, 안심하고 믿을 수 있는 영림 바스',
      desc: '간결한 형태의 미니멀 디자인부터 디테일이 매력적인 디자인까지. 편안하고 내추럴한 컬러부터 톡톡 튀는 개성만점 컬러까지. 다양한 취향에 한걸음 더 다가가기 위해 다채로운 라인업을 선보입니다.',
    },
    {
      imgSrc: '/images/index-6-wallmaterials-img-04.jpg',
      alt: 'Tile',
      title: '스마트한 키친 시스템',
      desc: '다양한 형태와 기능을 가진 약 300여 가지의 키친 유닛으로 나의 사용 패턴에 꼭 맞는 키친을 설계할 수 있습니다. 효율적인 동선과 똑똑한 수납 시스템을 제안하는 영림의 키친 전문가들을 만나보세요.',
    },
];



const ContentsSlider = [
    { 
        id: 1, 
        slideImgSrc: "/images/detail-bath-01.jpg", 
        slideImgAlt: "화장실" , 
        title:"Soif Marble", 
        text: "우아한 화이트 마블로 완성한 품격있는 욕실을 경험해보세요."
    },
    { 
        id: 2, 
        slideImgSrc: "/images/detail-bath-02.jpg", 
        slideImgAlt: "화장실", 
        title:"Siena", 
        text: "부드러운 베이지톤의 트라버틴 패턴으로 완성한 화사한 욕실을 만나보세요." 
    },
    { 
        id: 3, 
        slideImgSrc: "/images/detail-bath-03.jpg", 
        slideImgAlt: "화장실", 
        title:"Travertine Beige",  
        text:"트라버틴 패터늬 베이스 타일과 골드 모자이크 포인트 타일이 함께 장식된 럭셔리 욕실의 진수 트라버틴 베이지. 골드 수전과 액세서리가 더해져 이탈리아의 기품이 느껴지는 호텔식 욕실을 만날 수 있습니다." 
    },
    { 
        id: 4, 
        slideImgSrc: "/images/detail-bath-04.jpg", 
        slideImgAlt: "화장실", 
        title:"Forest Green", 
        text: "상쾌한 숲 속의 아침을 닮은 포레스트그린. 녹색 타일과 바닥의 패턴 타일이 어우러져 싱그럽고 감각적인 분위기를 연출하며, 취향에 맞는 타일 배치로 나만의 욕실을 만들 수 있습니다."
    },
];

const GradeLink = [
    { 
        gradeImg: "/images/product-bath-premium.jpg", 
        gradeSrc: "프리미엄 관련 이미지" , 
        title:"Premium", 
        text: "프리미엄 바스"
    },
    { 
        gradeImg: "/images/product-bath-standard.jpg", 
        gradeSrc: "스탠다드 관련 이미지", 
        title:"Standard", 
        text: "스탠다드 바스" 
    }
];

const Bath = () => {
  return (
    <div className='sub-wrap'>
        <div className='main-visual'>
            <img src="/images/bath-main-visual.jpg" alt="" />
            <div className="visual-desc" data-aos="fade-up" data-aos-delay="100">
                <Container>
                    <div className="visual-desc__title">바스 알아보기</div>
                    <div className="visual-desc__text">
                        가장 작은 공간에서 경험하는 가장 큰 행복<br />
                        시작하세요, 나만의 바스 라이프
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
    </div>
  );
};

export default Bath;