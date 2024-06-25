import React, {useState, useRef, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ModernProps {
    title: String;
}
gsap.registerPlugin(ScrollTrigger);

const Modern: React.FC<ModernProps> = ({ title }) => {
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
      const element1 = box1.current;
      const element2 = box2.current;
      const element3 = box3.current;
      const element4 = textRef.current;
       // 초기 애니메이션 설정
       gsap.fromTo(
        element1,
        { opacity: 0 },
        { y: -50, opacity: 1, duration: 2 }
      );
  
      gsap.fromTo(
        element2,
        {  opacity: 0 },
        { y: -50, opacity: 1, duration: 2, delay: 0.5 }
      );
  
      gsap.fromTo(
        element3,
        {  opacity: 0 },
        { y: -50, opacity: 1, duration: 2, delay: 0.5 }
      );

      // ScrollTrigger 애니메이션 설정
      gsap.to(element1, {
        y: -100,
        scrollTrigger: {
          trigger: element1,
          start: "top 50%", 
          end: "top 30%",
          scrub: true,
        }
      });
  
      gsap.to(element2, {
        y: -120,
        scrollTrigger: {
          trigger: element2,
          start: "top 50%", 
          end: "top 30%",
          scrub: true,
        }
      });

      gsap.to(element3, {
        y: -80,
        scrollTrigger: {
          trigger: element3,
          start: "top 80%", 
          end: "top 30%",
          scrub: true,
        }
      });

      gsap.to(element4, {
        duration: 2,
        y: '-100%',
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element4,
          start: "top 80%", // 트리거 시작 지점
          end: "top 20%", // 트리거 종료 지점
          toggleActions: "play none none reset", // 트리거 동작 설정
        }
      });

    }, []);

  return (
    <div className='interior-content'>
        <Container>
            <div className='interior-image'>
                <div className='interior-image__left'
                        ref={box1}
                        style={{}}
                    >
                    <img src="/images/interior-natural-01.jpg" alt="Monochrome Photograph Livingroom" />
                    <p className='side-txt'><span>Monochrome Photograph</span>Livingroom</p>
                </div>
                <div className='interior-image__right'
                    ref={box2}
                    style={{}}
                >
                    <img src="/images/interior-natural-02.jpg" alt="" />
                    <p className='side-txt'><span>Monochrome Photograph</span>Enterance</p>
                </div>
            </div>
            <div className="asd">
                <div className="text" ref={textRef}>natural</div>
            </div>
            <div className='interior-image center'>
                <div className='interior-image__center'
                   ref={box3}
                   style={{}}
                >
                    <img src="/images/interior-natural-03.jpg" alt="" />
                    <p className='side-txt'><span>Monochrome Photograph</span>Livingroom</p>
                    <p className='desc'>원룸부터 고급주택까지 다양한 형태의 주거공간에 모두 잘 어울리는 모던 스타일을 만나보세요. 꼭 필요한 물건들만 채워 공간에 여백을 주고 간결한 선과 면으로 다듬어진 깔끔한 인테리어를 선보입니다.</p>
                    <p className='subtopic'>{title}</p>

                    <div className='more-btn'>
                        인테리어 스타일 제안
                    </div>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default Modern;