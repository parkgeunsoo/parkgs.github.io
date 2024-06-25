import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    nickname: string;
    level: number;
}

const UserSearch: React.FC = () => {
    const [nickName, setNickName] = useState("");
    const [infoResult, setInfoResult] = useState<User[]>([]);

    async function searchNickName(){
        try {
            const apiKey = 'test_6f0c197e84ae4404190434ef3d22e04a0139b68bdef6442e8a85239fe60add9b5adf99ffd0f50f3265899f1955b5c56e';
            const encodedNickName = encodeURIComponent(nickName);
            const response = await axios.get(`https://open.api.nexon.com/fconline/v1/id?nickname=${encodedNickName}`,{
                headers: {
                    'x-nxopen-api-key': `${apiKey}`,
                }
            });
            if (response.data) {
                const user: User = response.data;
                console.log("성공함", response);
                userInfo(response.data);
            } else {
                console.error("응답 데이터에 사용자 정보가 포함되어 있지 않습니다.");
            }
        } catch (error) {
            console.error("실패함", error);
        }
    }
    function handleInput(e: React.ChangeEvent<HTMLInputElement>){
        setNickName(e.target.value);
    } 

    async function userInfo(userOuid: { ouid: string }){
        try {
            console.log(userOuid.ouid);
            const apiKey = 'test_6f0c197e84ae4404190434ef3d22e04a0139b68bdef6442e8a85239fe60add9b5adf99ffd0f50f3265899f1955b5c56e';
            const response = await axios.get(`https://open.api.nexon.com/fconline/v1/user/basic?ouid=${userOuid.ouid}`,{
                headers: {
                    'x-nxopen-api-key': `${apiKey}`,
                }
            });
            if (response.data) {
                setInfoResult(infoArr => [...infoArr, response.data]); // 나온 데이터들을 열로 setInfoResult에 넣음 그럼 infoResult에 담김 hook으로
                console.log("성공함", response);
            } else {
                console.error("응답 데이터에 사용자 정보가 포함되어 있지 않습니다.");
            }
        } catch (error) {
            console.error("실패함", error);
            
        }
    }

    return (
        <div>
            <form action="">
                <label htmlFor="nickName"></label>
                <input type="text" id='nickName' onChange={e => {handleInput(e);}} />
                <button type='button' id='searchBtn' onClick={searchNickName}>유저조회</button>
            </form>

            <div>
                <h2>User List</h2>
                <ul>
                    {/* setInfoResult에서 받아 온 배열 값을 li에 뿌려줌 */}
                    {infoResult.map((user, index) => (
                       <li key={index}>
                            <p>Nickname: {user.nickname}</p>
                            <p>Level: {user.level}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
};

export default UserSearch;


