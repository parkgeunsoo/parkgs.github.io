import React, { useEffect } from 'react';
import './App.css';
import Router from "./routes/Router";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS 스타일시트 가져오기


const App: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // 애니메이션 지속 시간
            once: false, // 스크롤 할 때마다 애니메이션이 실행되도록 설정
            offset: 100, // 트리거 시점 오프셋
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    );
}

export default App;
