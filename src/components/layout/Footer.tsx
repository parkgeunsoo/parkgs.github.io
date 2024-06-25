import React from 'react';
import { Container } from 'react-bootstrap';



const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <div className='footer-link-content'>
                <p className='title'>영림 토탈 인테리어</p>
                <div className="footer-menu">
                    <ul className='category-list'>
                        <li>브랜드</li>
                        <li>제품</li>
                        <li>인테리어 솔루션</li>
                        <li>매거진.Y</li>
                        <li>쇼룸 안내</li>
                    </ul>
                    <ul className='category-list'>
                        <li>대리점 개설문의</li>
                        <li>제품</li>
                        <li>인테리어 솔루션</li>
                        <li>매거진.Y</li>
                        <li>쇼룸 안내</li>
                    </ul>
                    <ul className='category-list'>
                        <li>브랜드</li>
                        <li>제품</li>
                        <li>인테리어 솔루션</li>
                        <li>매거진.Y</li>
                        <li>쇼룸 안내</li>
                    </ul>
                </div>
            </div>
            <div></div>
        </Container>
    </div>
  );
};

export default Footer;