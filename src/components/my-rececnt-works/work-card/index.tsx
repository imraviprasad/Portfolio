import { FC, useState } from "react";
import S from "./work-card.styled";
import YearntogetherDashboard from "../../../assets/images/yearntogether-dashboard.png";
import YearnLogo from "../../../assets/logo/yearn-logo.jpg";
import AnimatedButton from "../../../utils/widgets/animated-button";

type WorKCardProps = {
  cardInfo: {
    id: string;
    logo: string;
    projectName: string;
    subName?: string;
    description: string;
    websiteUrl?: string;
    background?: string;
    overlayColor?: string;
  };
};

const WorkCard: FC<WorKCardProps> = ({ cardInfo }) => {
  const { id, logo, projectName, subName, description, websiteUrl, background, overlayColor } = cardInfo;

  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <S.FlipCardContainer>
      <S.FlipCard isFlipped={isFlipped} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
        {/* <S.FlipCardFront sx={{ backgroundImage: `url(${YearntogetherDashboard})` }}> */}
        <S.FlipCardFront sx={{ backgroundImage: `url(${background})` }}>
          <S.FlipCardFrontOverlay
            sx={{
              backgroundColor: overlayColor,
            }}
          />
          <S.LogoContainer>
            <S.Logo src={logo} alt="yearn-logo" />
            <S.Title>{projectName}</S.Title>
          </S.LogoContainer>
          <S.SubText>{subName}</S.SubText>
        </S.FlipCardFront>
        <S.FlipCardBack>
          <S.DescriptionText>{description}</S.DescriptionText>
          <AnimatedButton
            handleClick={() => {
              window.open(websiteUrl);
            }}
          />
        </S.FlipCardBack>
      </S.FlipCard>
    </S.FlipCardContainer>
  );
};

export default WorkCard;
