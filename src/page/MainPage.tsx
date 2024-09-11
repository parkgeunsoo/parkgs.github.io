import "../../src/App.scss";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop, DragSourceMonitor } from "react-dnd";
import Draggable from "react-draggable";

const ItemTypes = {
  CARD: "card",
};

interface Player {
  number: number;
  name: string;
  position: string;
  dominant_foot: string;
  nationality: string;
  nationalityImg: string;
  playerImg: string;
  height: number;
  weight: number;
  date_of_birth: string;
  honors: {
    PremierLeagueTitles: number[];
    UEFAChampionsLeagueTitles: number[];
    FACupTitles: number[];
    FootballLeagueCupTitles: number[];
    FIFAClubWorldCup: number;
    IntercontinentalCup: number;
  };
  current_team: string;
  previous_team: string;
}

const playersData: Player[] = [
  {
    number: 10,
    name: "웨인 루니",
    position: "ST",
    dominant_foot: "Right",
    nationality: "England",
    nationalityImg: `${process.env.PUBLIC_URL}/images/England.png`,
    playerImg: `${process.env.PUBLIC_URL}/images/profile_icon_01.png`,
    date_of_birth: "October 24, 1985",
    height: 176, // cm
    weight: 83, // kg
    honors: {
      PremierLeagueTitles: [2007, 2008, 2009, 2011, 2013],
      UEFAChampionsLeagueTitles: [2008],
      FACupTitles: [2016],
      FootballLeagueCupTitles: [2006, 2010],
      FIFAClubWorldCup: 2008,
      IntercontinentalCup: 0,
    },
    current_team: "Manchester United",
    previous_team: "Everton",
  },
  {
    number: 11,
    name: "라이언 긱스",
    position: "LM",
    dominant_foot: "Left",
    nationality: "Wales",
    nationalityImg: `${process.env.PUBLIC_URL}/images/Wales.png`,
    playerImg: `${process.env.PUBLIC_URL}/images/profile_icon_02.png`,
    date_of_birth: "November 29, 1973",
    height: 180, // cm
    weight: 72, // kg
    honors: {
      PremierLeagueTitles: [
        1993, 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011,
        2013,
      ],
      UEFAChampionsLeagueTitles: [1999, 2008],
      FACupTitles: [1994, 1996, 1999, 2004],
      FootballLeagueCupTitles: [1992, 2006, 2009, 2010],
      FIFAClubWorldCup: 2008,
      IntercontinentalCup: 1999,
    },
    current_team: "Manchester United",
    previous_team: "Manchester United",
  },
  {
    number: 32,
    name: "카를로스 테베즈",
    position: "ST",
    dominant_foot: "Right",
    nationality: "Argentina",
    nationalityImg: `${process.env.PUBLIC_URL}/images/Argentina.png`,
    playerImg: `${process.env.PUBLIC_URL}/images/profile_icon_03.png`,
    date_of_birth: "February 5, 1984",
    height: 173, // cm
    weight: 77, // kg
    honors: {
      PremierLeagueTitles: [2008, 2009],
      UEFAChampionsLeagueTitles: [2008],
      FACupTitles: [2011],
      FootballLeagueCupTitles: [2009],
      FIFAClubWorldCup: 2008,
      IntercontinentalCup: 0,
    },
    current_team: "Boca Juniors",
    previous_team: "Manchester United",
  },
  {
    number: 3,
    name: "파트리스 에브라",
    position: "LB",
    dominant_foot: "Left",
    nationality: "France",
    nationalityImg: `${process.env.PUBLIC_URL}/images/France.png`,
    playerImg: `${process.env.PUBLIC_URL}/images/profile_icon_04.png`,
    date_of_birth: "May 15, 1981",
    height: 174, // cm
    weight: 72, // kg
    honors: {
      PremierLeagueTitles: [2007, 2008, 2009, 2011, 2013],
      UEFAChampionsLeagueTitles: [2008],
      FACupTitles: [2016],
      FootballLeagueCupTitles: [2006, 2010],
      FIFAClubWorldCup: 2008,
      IntercontinentalCup: 0,
    },
    current_team: "Retired",
    previous_team: "Juventus",
  },
  {
    number: 7,
    name: "크리스티아누 호날두",
    position: "LW",
    dominant_foot: "Right",
    nationality: "Portugal",
    nationalityImg: `${process.env.PUBLIC_URL}/images/Portugal.png`,
    playerImg: `${process.env.PUBLIC_URL}/images/profile_icon_05.png`,
    date_of_birth: "February 5, 1985",
    height: 187, // cm
    weight: 83, // kg
    honors: {
      PremierLeagueTitles: [2007, 2008, 2009],
      UEFAChampionsLeagueTitles: [2008, 2014, 2016, 2017, 2018],
      FACupTitles: [2004],
      FootballLeagueCupTitles: [2006, 2009],
      FIFAClubWorldCup: 2008,
      IntercontinentalCup: 0,
    },
    current_team: "Al-Nassr",
    previous_team: "Juventus",
  },
  {
    number: 15,
    name: "네마냐 비디치",
    position: "CB",
    dominant_foot: "Right",
    nationality: "Serbia",
    nationalityImg: `${process.env.PUBLIC_URL}/images/Serbia.png`,
    playerImg: `${process.env.PUBLIC_URL}/images/profile_icon_06.png`,
    date_of_birth: "October 21, 1981",
    height: 190, // cm
    weight: 84, // kg
    honors: {
      PremierLeagueTitles: [2007, 2008, 2009, 2011, 2013],
      UEFAChampionsLeagueTitles: [2008],
      FACupTitles: [2016],
      FootballLeagueCupTitles: [2006, 2010],
      FIFAClubWorldCup: 2008,
      IntercontinentalCup: 0,
    },
    current_team: "Retired",
    previous_team: "Inter Milan",
  },
  {
    number: 5,
    name: "리오 퍼디난드",
    position: "CB",
    dominant_foot: "Right",
    nationality: "England",
    nationalityImg: `${process.env.PUBLIC_URL}/images/England.png`,
    playerImg: `${process.env.PUBLIC_URL}/images/profile_icon_07.png`,
    date_of_birth: "November 7, 1978",
    height: 189, // cm
    weight: 82, // kg
    honors: {
      PremierLeagueTitles: [2003, 2007, 2008, 2009, 2011, 2013],
      UEFAChampionsLeagueTitles: [2008],
      FACupTitles: [2016],
      FootballLeagueCupTitles: [2006, 2010],
      FIFAClubWorldCup: 2008,
      IntercontinentalCup: 0,
    },
    current_team: "Retired",
    previous_team: "Queens Park Rangers",
  },
  {
    number: 13,
    name: "박지성",
    position: "LM",
    dominant_foot: "Right",
    nationality: "South Korea",
    nationalityImg: `${process.env.PUBLIC_URL}/images/Korea.png`,
    playerImg: `${process.env.PUBLIC_URL}/images/profile_icon_08.png`,
    date_of_birth: "February 25, 1981",
    height: 175, // cm
    weight: 73, // kg
    honors: {
      PremierLeagueTitles: [2007, 2008, 2009, 2011, 2013],
      UEFAChampionsLeagueTitles: [2008],
      FACupTitles: [2004],
      FootballLeagueCupTitles: [2006, 2010],
      FIFAClubWorldCup: 2008,
      IntercontinentalCup: 0,
    },
    current_team: "Retired",
    previous_team: "PSV Eindhoven",
  },
  {
    number: 18,
    name: "폴 스콜스",
    position: "CM",
    dominant_foot: "Right",
    nationality: "England",
    nationalityImg: `${process.env.PUBLIC_URL}/images/England.png`,
    playerImg: `${process.env.PUBLIC_URL}/images/profile_icon_09.png`,
    date_of_birth: "November 16, 1974",
    height: 170, // cm
    weight: 72, // kg
    honors: {
      PremierLeagueTitles: [
        1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011,
      ],
      UEFAChampionsLeagueTitles: [1999, 2008],
      FACupTitles: [1996, 1999, 2004],
      FootballLeagueCupTitles: [2006, 2010],
      FIFAClubWorldCup: 2008,
      IntercontinentalCup: 1999,
    },
    current_team: "Retired",
    previous_team: "Manchester United",
  },
  {
    number: 2,
    name: "개리 네빌",
    position: "RB",
    dominant_foot: "Right",
    nationality: "England",
    nationalityImg: `${process.env.PUBLIC_URL}/images/England.png`,
    playerImg: `${process.env.PUBLIC_URL}/images/profile_icon_10.png`,
    date_of_birth: "February 18, 1975",
    height: 180, // cm
    weight: 79, // kg
    honors: {
      PremierLeagueTitles: [1995, 1996, 1998, 1999, 2000, 2002, 2006, 2008],
      UEFAChampionsLeagueTitles: [1999, 2008],
      FACupTitles: [1996, 1999, 2004],
      FootballLeagueCupTitles: [2006, 2010],
      FIFAClubWorldCup: 2008,
      IntercontinentalCup: 1999,
    },
    current_team: "Manchester Unitied",
    previous_team: "Atletico Madrid",
  },
  {
    number: 1,
    name: "에드윈 반 데르 사르",
    position: "GK",
    dominant_foot: "Right",
    nationality: "Netherlands",
    nationalityImg: `${process.env.PUBLIC_URL}/images/Netherlands.png`,
    playerImg: `${process.env.PUBLIC_URL}/images/profile_icon_11.png`,
    date_of_birth: "October 29, 1970",
    height: 197, // cm
    weight: 84, // kg
    honors: {
      PremierLeagueTitles: [2007, 2008, 2009, 2011],
      UEFAChampionsLeagueTitles: [1995, 2008],
      FACupTitles: [1999, 2004],
      FootballLeagueCupTitles: [2006, 2010],
      FIFAClubWorldCup: 2008,
      IntercontinentalCup: 1999,
    },
    current_team: "Retired",
    previous_team: "Ajax",
  },
];

interface CardProps {
  player: Player;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

const DraggableCard: React.FC<CardProps> = ({ player, index, moveCard }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: { index: number }) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { index },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <Draggable nodeRef={ref} bounds="parent">
      <div ref={ref} className="card-wrap">
        <div className="season-mark">
          <img
            src={`${process.env.PUBLIC_URL}/images/ld_icon.png`}
            alt=""
            className="ld-icon"
          />
        </div>
        <div className="infoBox">
          <p className="number">{player.number}</p>
          <p className="position">{player.position}</p>
          <img
            src={player.nationalityImg}
            alt="Nationality"
            className="nationalityImg"
          />
        </div>
        <div className="playerImg">
          <img src={player.playerImg} alt={player.name} />
        </div>
        <div className="contents">
          <img
            src={`${process.env.PUBLIC_URL}/images/card_icon.png`}
            alt=""
            className="badge-icon"
          />
          <p className="name">{player.name}</p>
        </div>
      </div>
    </Draggable>
  );
};

const MainPage: React.FC = () => {
  const [players, setPlayers] = useState(playersData);
  const [selectedPlayer, setSelectPlayer] = useState<Player | null>(null);

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const newPlayers = [...players];
    const [draggedPlayer] = newPlayers.splice(dragIndex, 1);
    newPlayers.splice(hoverIndex, 0, draggedPlayer);
    setPlayers(newPlayers);
  };

  const handleSlideClick = (player: Player) => {
    setSelectPlayer(player);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="playerinfoBox">
        {selectedPlayer ? (
          <>
            <p className="name">이름: {selectedPlayer.name}</p>
            <p className="position">포지션: {selectedPlayer.position}</p>
            <p className="number">등번호: {selectedPlayer.number}</p>
            <p className="height">키: {selectedPlayer.height}</p>
            <p className="weight">몸무게: {selectedPlayer.weight}</p>
            <p className="nationality">
              국적:
              <img
                src={selectedPlayer.nationalityImg}
                alt="Nationality Flag"
                className="nationalityImg"
              />
            </p>
            <p className="birthDate">
              생년월일: {selectedPlayer.date_of_birth}
            </p>
            <p className="team">소속 팀: {selectedPlayer.current_team}</p>
          </>
        ) : (
          <p>선수를 선택하세요</p>
        )}
      </div>
      <div className="wrapper">
        <div className="map">
          {players.map((player, index) => (
            <DraggableCard
              key={index}
              index={index}
              player={player}
              moveCard={moveCard}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default MainPage;
