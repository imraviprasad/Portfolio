import S from "./about-me.styled";

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
            Hi, I'm Raviprasad. A passionate Developer <br /> based in Chennai, India.{" "}
          </S.SubTitle>
          <S.LinkIcons>
            <S.CustomIconButton
              onClick={() => openInNewTab("https://www.linkedin.com/in/raviprasad-elamaran/")}
            >
              <S.Linkedin />
            </S.CustomIconButton>
            <S.CustomIconButton onClick={() => openInNewTab("https://github.com/imraviprasad")}>
              <S.Github />
            </S.CustomIconButton>
            <S.CustomIconButton onClick={() => openInNewTab("https://www.instagram.com/im_ravii/")}>
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
