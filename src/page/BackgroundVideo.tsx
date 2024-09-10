import '../../src/App.scss'

import React, { useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, Container } from "tsparticles-engine"; // 타입 추가

const MainPage: React.FC = () => {
    const particlesInit = async (main: Engine): Promise<void> => {
        await loadFull(main);
    };

    const particlesLoaded = async (container: Container | undefined): Promise<void> => {
        console.log(container);
    };

    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        document.documentElement.className = isDarkMode ? 'dark-mode' : 'normal-mode';
    }, [isDarkMode]);

    return (
        <div className='container'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: isDarkMode ? "#000000" : '#ffffff', // 배경색 설정
                        },
                    },
                    fpsLimit: 60, // 프레임 제한
                    particles: {
                        number: {
                            value: 100, // 입자 수 설정
                            density: {
                                enable: true,
                                value_area: 800, // 입자가 퍼질 영역 설정
                            },
                        },
                        color: {
                            value: isDarkMode ? "#ffffff" : "#000000", // 입자 색상
                        },
                        shape: {
                            type: "circle", // 입자 모양
                        },
                        opacity: {
                            value: 0.5, // 입자 불투명도
                            random: false, // 불투명도 랜덤 설정
                        },
                        size: {
                            value: 3, // 입자 크기
                            random: true, // 크기 랜덤 설정
                        },
                        links: {
                            enable: true, // 입자 간의 연결선 활성화
                            distance: 150, // 연결선 최대 거리
                            color: isDarkMode ? "#ffffff" : "#000000", // 연결선 색상
                            opacity: 0.4, // 연결선 불투명도
                            width: 1, // 연결선 두께
                        },
                        move: {
                            enable: true, // 입자 움직임 활성화
                            speed: 1.5, // 입자 이동 속도
                            direction: "none", // 이동 방향
                            random: false, // 무작위 이동 활성화
                            straight: false, // 직선 이동 설정
                            out_mode: "bounce", // 경계에서 튕김
                            bounce: false, // 입자 간의 튕김 비활성화
                        },
                    },
                    interactivity: {
                        detect_on: "canvas", // 상호작용이 canvas에서 발생
                        events: {
                            onhover: {
                                enable: true, // 호버 상호작용 활성화
                                mode: "grab", // 호버 시 입자 연결
                            },
                            onclick: {
                                enable: true, // 클릭 상호작용 활성화
                                mode: "push", // 클릭 시 입자 추가
                            },
                            resize: true, // 창 크기 조정 시 반응
                        },
                        modes: {
                            grab: {
                                distance: 140, // grab 모드 거리 설정
                                line_linked: {
                                    opacity: 1, // grab 모드 선 불투명도 설정
                                },
                            },
                            push: {
                                quantity: 4, // 클릭 시 추가될 입자 수
                            },
                        },
                    },
                    retina_detect: true, // 레티나 디스플레이에서 선명도 향상
                }}
            />
            <div className="textBox">
                <h1 className='title' data-aos="fade-up">Web </h1>
                <p className='desc' data-aos="fade-up" data-aos-delay="300">ParkGeunSoo</p>
            </div>
                <button className='modeChange' onClick={toggleDarkMode}  >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
        </div>
    );
};

export default MainPage;
