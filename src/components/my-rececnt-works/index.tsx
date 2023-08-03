import S from "./my-recent-works.styled";
import WorkCard from "./work-card";

const MyRecentWorks = () => {
  return (
    <S.MyRecentWorkContainer>
      <S.Heading>
        <S.MainText>My Recent Work</S.MainText>
        <S.SubText>Here are a few past projects I've worked on.</S.SubText>
      </S.Heading>
      <S.WorkContent>
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
        <WorkCard></WorkCard>
      </S.WorkContent>
    </S.MyRecentWorkContainer>
  );
};

export default MyRecentWorks;
