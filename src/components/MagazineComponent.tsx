import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


interface MagazineComponentContent{
    maImg: string;
    maImgAlt: string;
    text: string;
    strongText: string;
}

interface MagazineComponentProps{
    contents: MagazineComponentContent[];
}

const MagazineComponent: React.FC<MagazineComponentProps> = ({ contents }) => {
  return (
    <>
        <Container>
            <div className='magazine-wrap'>
                <div className="magazine-head">
                    <p className='title'>매거진.Y</p>
                    {/* <Link to={/}></Link> */}
                </div>
                <div className="magazine-content">
                    {contents.map((content, index) => (
                        <div className="magazine-box" key={index}>
                            <img src={content.maImg} alt={content.maImgAlt} />
                            <p className='magazine-text'> <span>{content.strongText}</span> {content.text}</p>
                        </div>
                    ))}
                </div>
            </div>  
        </Container>
    </>
  );
};

export default MagazineComponent;