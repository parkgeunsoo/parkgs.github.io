import React from 'react';
import { Container } from 'react-bootstrap';

interface DetailsGradeContent{
  gradeImg: string;
  gradeSrc: string;
  title: string;
  text: string;
}

interface DetailsGradeProps{
  contents: DetailsGradeContent[];
}

const DetailsGrade: React.FC<DetailsGradeProps> = ({ contents }) => {
  return (
    <>
    <Container>
        <div className="grade-wrap">
            {contents.map((content, index) =>(
                <div className="grade-content" key={index}>
                    <img src={content.gradeImg} alt={content.gradeSrc} />
                    <div className="desc">
                        <p className="title">{content.title}</p>
                        <p className="text">{content.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </Container>
    </>
  );
};

export default DetailsGrade;