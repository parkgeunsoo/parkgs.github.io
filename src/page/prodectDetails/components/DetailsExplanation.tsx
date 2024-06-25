import React from 'react';
import { Container } from 'react-bootstrap';


interface ExplanationContent {
    imgSrc: string;
    alt: string;
    title: string;
    desc: string;
}

interface DetailsExplanationProps {
    contents: ExplanationContent[];
}

const DetailsExplanation: React.FC<DetailsExplanationProps> = ({ contents }) => {
    return (
      <div className="slide-sub__01">
        <Container>
            <div className="explanation-row">
                {contents.map((content, index) => (
                    <div className={`explanation-content ${index === contents.length - 1 ? 'last' : ''}`} key={index}>
                        <img src={content.imgSrc} alt={content.alt} />
                        <p className="title">{content.title}</p>
                        <p className="desc">{content.desc}</p>
                    </div>
                ))}
            </div>
        </Container>
      </div>
    );
};

export default DetailsExplanation;