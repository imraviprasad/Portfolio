import S from "./about-me.styled";

const Intro = () => {
  return (
    <S.AboutMeContainer id="Home">
      <S.Profile>
        <S.AboutData>
          <S.Title>
            MERN Stack <br /> Developer
          </S.Title>
          <S.SubTitle>
            Hi, I'm Raviprasad. A passionate Developer <br /> based in Chennai, India.{" "}
          </S.SubTitle>
          <S.LinkIcons>
            <S.CustomIconButton>
              <S.Linkedin />
            </S.CustomIconButton>
            <S.CustomIconButton>
              <S.Github />
            </S.CustomIconButton>
            <S.CustomIconButton>
              <S.Instagram />
            </S.CustomIconButton>
          </S.LinkIcons>
        </S.AboutData>
        <S.PersonalImg></S.PersonalImg>
      </S.Profile>
      <S.TechStack>
        <S.TechText>Tech Stack</S.TechText>
        <S.SkillBar>
          <S.Skill>React JS </S.Skill>
          <S.Skill>Next JS</S.Skill>
          <S.Skill>Node JS</S.Skill>
          <S.Skill>Express JS</S.Skill>
          <S.Skill>Mongo DB</S.Skill>
          <S.Skill>Javascript</S.Skill>
          <S.Skill>HTML</S.Skill>
          <S.Skill>CSS</S.Skill>
        </S.SkillBar>
      </S.TechStack>
    </S.AboutMeContainer>
  );
};

export default Intro;
