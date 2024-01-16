import { Tooltip } from "@mui/material";
import S from "./about-me.styled";
import raviImage from "../../assets/images/ravi-portfolio-removebg-preview.jpg";

const Intro = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <S.AboutMeContainer id="Home">
      <S.Profile>
        <S.AboutData>
          <S.Title>
            MERN Stack <br /> Developer
          </S.Title>
          <S.SubTitle>
            Hi, I'm Raviprasad. A passionate Developer <br /> based in Chennai, India.
            <S.Location />
          </S.SubTitle>
          <S.LinkIcons>
            <Tooltip title="LinkedIn">
              <S.CustomIconButton
                disableRipple
                onClick={() => openInNewTab("https://www.linkedin.com/in/raviprasad-elamaran/")}
              >
                <S.Linkedin />
              </S.CustomIconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <S.CustomIconButton
                disableRipple
                onClick={() => openInNewTab("https://github.com/imraviprasad")}
              >
                <S.Github />
              </S.CustomIconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <S.CustomIconButton
                disableRipple
                onClick={() => openInNewTab("https://www.instagram.com/im_ravii/")}
              >
                <S.Instagram />
              </S.CustomIconButton>
            </Tooltip>

            <Tooltip title="Resume">
              <S.CustomIconButton
                disableRipple
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/13AB6im8KgTdKQSOwWvjJN36hwtPN2sQ9/view?usp=sharing",
                  )
                }
              >
                <S.Download />
              </S.CustomIconButton>
            </Tooltip>
          </S.LinkIcons>
        </S.AboutData>
        <S.PersonalImgContainer>
          <S.PersonalImg src={raviImage} alt="raviImage" />
        </S.PersonalImgContainer>
      </S.Profile>
      <S.TechStack>
        <S.TechText>Tech Stack</S.TechText>
        <S.SkillBar>
          <S.Skill>React JS </S.Skill>
          <S.Skill>Next JS</S.Skill>
          <S.Skill>Node JS</S.Skill>
          <S.Skill>Typescript</S.Skill>
          <S.Skill>Javascript</S.Skill>
          <S.Skill>Express JS</S.Skill>
          <S.Skill>HTML</S.Skill>
          <S.Skill>CSS</S.Skill>
        </S.SkillBar>
      </S.TechStack>
    </S.AboutMeContainer>
  );
};

export default Intro;
