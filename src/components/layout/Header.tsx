import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from '../MenuButton';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const [headerClass, setHeaderClass] = useState('');

    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setScrollPosition(currentPosition);

        if (currentPosition > prevScrollPosition) {
            setHeaderClass('scroll-down');
        } else if (currentPosition < prevScrollPosition) {
            setHeaderClass('scroll-up');
        }

        if (currentPosition === 0) {
            setHeaderClass('top');
        }

        setPrevScrollPosition(currentPosition);
    }

    useEffect(() => {
        console.log("Header component mounted");
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [prevScrollPosition]);

    return (
        <>
            <header className={`header ${headerClass}`}>
                <div className="header-inner">
                    <Link to="/">
                        <div className='logo'></div>
                   </Link>
                    
                    <ul className='gnb'>
                        <li>브랜드</li>
                        <li>제품</li>
                        <li>인테리어 솔루션</li>
                    </ul>

                    <MenuButton size="large">Large Button</MenuButton>
                    <MenuButton size="medium">Medium Button</MenuButton>
                    <MenuButton size="small">Small Button</MenuButton>
                </div>
            </header>
        </>
    );
};

export default Header;