import React from 'react';
import { Container } from 'react-bootstrap';

interface OnlyDesignContent{
    designImg: string;
    designImgAlt: string;
    title:string;
    text:string;
}

interface OnlyDesignProps{
    contents: OnlyDesignContent[];
}

const OnlyDesign: React.FC<OnlyDesignProps> = ({ contents }) => {
  return (
    <>
        {contents.map((content, index) =>(
        <div className='only-design-wrap' key={index}>
            <img src={content.designImg} alt={content.designImgAlt} />
            <Container>
                <div className="desc">
                    <p className='design-title'>{content.title}</p>
                    <p className='design-text'>{content.text}</p>
                    <div className="btn-group">
                        <button type='button' className='btn'>구성 옵션 보기</button>
                        <button type='button' className='btn'>키친 소재 보기</button>
                    </div>
                </div>
            </Container>
        </div>
        ))}
    </>
  );
};

export default OnlyDesign;