import S from "./about-me.styled";

const AboutMe = () => {
  return (
    <S.AboutMeContainer>
      <S.Profile>
        <S.AboutData>
          <S.Title>
            MERN Stack <br /> Developer
          </S.Title>
          <S.SubTitle>
            Hi, I'm Raviprasad. A passionate Developer <br /> based in Chennai, India.{" "}
          </S.SubTitle>
          <S.LinkIcons>
            <S.Linkedin />
            <S.Github />
            <S.Instagram />
          </S.LinkIcons>
        </S.AboutData>
        <S.PersonalImg></S.PersonalImg>
      </S.Profile>
      <S.TechStack>
        <S.Skill>Tech Stack</S.Skill>|<S.Skill>React JS </S.Skill>
        <S.Skill>Next JS</S.Skill>
        <S.Skill>Node JS</S.Skill>
        <S.Skill>Express JS</S.Skill>
        <S.Skill>Mongo DB</S.Skill>
        <S.Skill>HTML</S.Skill>
        <S.Skill>CSS</S.Skill>
      </S.TechStack>
    </S.AboutMeContainer>
  );
};

export default AboutMe;
