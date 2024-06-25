import React from 'react';

const ContainerBanner = () => {
  return (
    <div className='banner-container'>
        <div className='pc-img-banner'>
            <img src="/images/main-img-brand.jpg" alt="" />
            <div className='banner-desc'>
                <div className='banner-desc__title'>시간이 흘러도 변하지 않는 가치</div>
                <div className='banner-desc__text'>시간이 흐름에도 지속되는 삶의 가치를 담아 행복한 일상을 만들기 위해<br /> 영림의 디자이너들은 끊임없이 고민하고 연구합니다. </div>
                <button type='button' className='banner-link-btn'>더 보러가기</button>
            </div>
        </div>
        {/* <div className='mo-img-banner'></div> */}
    </div>
  );
};

export default ContainerBanner;