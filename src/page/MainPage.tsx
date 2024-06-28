// import React from 'react';
// import '../../src/App.scss'
// import ImageSliderComponent from "../components/sliders/ImageSliderComponent";
// import CategorySliderBanner from '../components/sliders/CategorySliderBanner';
// import InteriorStyles from '../components/content/interiorStyles/InteriorStyles';
// import ContainerBanner from '../components/content/ContainerBanner/ContainerBanner';
// import MagazineComponent from '../components/MagazineComponent';

// const magazineData = [
//     {
//         maImg: `${process.env.PUBLIC_URL}/images/magazine-img-1.jpg`,
//         maImgAlt: "",
//         strongText: "TV CF 속 그 공간, 그 제품 ",
//         text: "2021 영림의 다양한 신제품들을 담은 현장 속 인테리어 살펴보기",
//     },
//     {
//         maImg: `${process.env.PUBLIC_URL}/images/magazine-img-2.jpg`,
//         maImgAlt: "설계된 집 이미지",
//         strongText: "새로운 꿈을 꾸며 내일을 설계하는 집",
//         text: "눈이 펑펑 오던 어느 겨울, 고요하게 눈이 쌓인 전원주택 마을을 방문했다",
//     },
//     {
//         maImg: `${process.env.PUBLIC_URL}/images/magazine-img-3.jpg`,
//         maImgAlt: "CF관련 이미지",
//         strongText: "2021 영림 TV CF 광고 촬영 비하인드",
//         text: "토탈인테리어 브랜드 ‘영림’의 첫 TV CF 촬영 비하인드 스토리, 지금 공개합니다.",
//     },
// ]

// const MainPage = () => {
//     return (
//         <>
//             <ImageSliderComponent />
//             <CategorySliderBanner />
//             <InteriorStyles />
//             <ContainerBanner />
//             <MagazineComponent contents={magazineData} />
//         </>
//     );
// };

// export default MainPage;



//  **** todoList ****

import React, { useRef, useState } from 'react';
import TodoForm from './todo/TodoForm';
import TodoList from './todo/TodoList';
import '../../src/App.scss'


interface TodoItemType {
    id: number;
    text: string;
    isChk: boolean;
}

const MainPage = () => {

    const [data, setData] = useState([
        {id:1, text:'저녁먹기', isChk: false},
        {id:2, text:'게임하기', isChk: false}
    ])

    const no = useRef(data.length + 1);
   
    // 삭제 기능
    const onDel = (id:number) => {
        setData(data.filter(item => item.id !== id));
    };

    // 추가 기능
    const onAdd = (text:string) => {
        setData([
            ...data,
            {
                id: no.current++,
                text: text,
                isChk: false
            }
        ]);
    };

    // 수정 기능
    const onMod = (id: number) => {
        setData(data.map(item => item.id === id ? {...item, isChk: !item.isChk } : item));
    };

    return (
        <div>
            <div className='todolist'>
                <TodoForm onAdd={onAdd} />
                <TodoList data={data} onMod={onMod} onDel={onDel} />
            </div>
        </div>
    );
};

export default MainPage;
