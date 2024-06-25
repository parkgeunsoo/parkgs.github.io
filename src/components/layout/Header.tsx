import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {

    // 스크롤 값 넣을곳
    const [scrollPosition, setScrollPosition] = useState(0);
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);

    // 헤더 클래스 변동할곳 (클래스 입력이라 문자열)
    const [headerClass, setHeaderClass] = useState('');

    
    const handleScroll = () => {
        // 스크롤 값 받아오고
        const currentPosition = window.pageYOffset;
        //setScrollPosition을 사용해서 scrollPosition 상태를 position 스크롤 위치로 업데이트
        setScrollPosition(currentPosition);
  
        if (currentPosition > prevScrollPosition) {
            // 스크롤 내림
            setHeaderClass('scroll-down');
            
        } else if (currentPosition < prevScrollPosition) {
            // 스크롤 올림
            setHeaderClass('scroll-up');
        }
    
        if (currentPosition === 0) {
            setHeaderClass('top');
        }
        // setState가 비ㅣ동기로 동작하기 때문에 같은 currentPosition 값일 지라도 상태변수 선언 순서로 값이 달라짐
        setPrevScrollPosition(currentPosition);

    }

    // 컴포넌트 마운트/언마운트 될때
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () =>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[prevScrollPosition])

  

    return (
        <>
            <header className={`header ${headerClass}`}>
                <div className="header-inner">
                    <div className='logo'>
                    </div>
                    <ul className='gnb'>
                        <li>
                            브랜드
                        </li>
                        <li>
                            제품
                        </li>
                        <li>
                            인테리어 솔루션
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;