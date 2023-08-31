import S from "./about-me.styled";

const AboutMe = () => {
  return (
    <S.AboutMeMainContainer id="About">
      <S.AboutMeContainer>
        <S.Heading>ABOUT ME</S.Heading>
        <S.SubHeading>Hi, I'm Ravi, A mechie turned techie.</S.SubHeading>
        <S.ContentText>
          As a experienced software developer specializing in front-end development. I have
          successfully designed and developed a multitude of top-notch digital products that
          showcase my skills and expertise. With a strong foundation in the MERN (MongoDB,
          Express.js, React, Node.js) technology stack, I have created innovative and efficient
          solutions that bridge the gap between software and the physical world. My portfolio
          proudly demonstrates my ability to conceptualize, implement, and deliver robust
          applications that cater to real-world needs. Explore my projects to witness firsthand how
          I blend cutting-edge technology with creativity to bring impactful ideas to life.
        </S.ContentText>
      </S.AboutMeContainer>
    </S.AboutMeMainContainer>
  );
};

export default AboutMe;
