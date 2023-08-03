import { useState } from "react";
import S from "./work-card.styled";

const WorkCard = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <S.FlipCardContainer>
      <S.FlipCard isFlipped={isFlipped} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
        <S.FlipCardFront>
          <S.Title>FLIP CARD</S.Title>
          <p>Hover Me</p>
        </S.FlipCardFront>
        <S.FlipCardBack>
          <S.Title>BACK</S.Title>
          <p>Leave Me</p>
        </S.FlipCardBack>
      </S.FlipCard>
    </S.FlipCardContainer>
  );
};

export default WorkCard;
