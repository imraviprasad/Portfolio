import S from "./my-recent-works.styled";
import Creatverse from "../../assets/images/creatverse.png";
import Nerkathir from "../../assets/images/nerkathir-chitta.png";
import YearnDashboard from "../../assets/images/yearntogether-dashboard.png";
import YearnPoolmanagement from "../../assets/images/yearntogether-poolmanagement.png";
import CreatverseLogo from "../../assets/logo/creatverse-logo.jpg";
import YearnLogo from "../../assets/logo/yearn-logo.jpg";
import WorkCard from "./work-card";

const workCard = [
  {
    id: "1",
    logo: YearnLogo,
    projectName: "YearnTogether",
    subName: "Dashboard",
    description: "The World's first-ever Gaming-Enabled IDO platform",
    websiteUrl: "https://app.yearntogether.com/",
    background: YearnDashboard,
    overlayColor: "rgba(30, 54, 94, 0.75)",
  },
  {
    id: "2",
    logo: CreatverseLogo,
    projectName: "Creatverse",
    description:
      "CREATVERSE is the decentralized invite-only creators' professional network that unites top creators, carefully curated by mentors in the respective fields.",
    websiteUrl: "https://network.creatverse.com/",
    background: Creatverse,
    overlayColor: "rgba(199, 83, 68, 0.75)",
  },
  {
    id: "3",
    logo: YearnLogo,
    projectName: "YearnTogether",
    subName: "Pool Management",
    description: "The World's first-ever Gaming-Enabled IDO platform",
    websiteUrl: "https://pool.yearntogether.com/",
    background: YearnPoolmanagement,
    overlayColor: "rgba(43, 94, 56, 0.75)",
  },
];

const MyRecentWorks = () => {
  return (
    <S.MyRecentWorkContainer>
      <S.Heading>
        <S.MainText>My Recent Work</S.MainText>
        <S.SubText>Here are a few past projects I've worked on.</S.SubText>
      </S.Heading>
      <S.WorkContent>
        {workCard.map((item) => (
          <WorkCard cardInfo={item} key={item.id} />
        ))}
      </S.WorkContent>
    </S.MyRecentWorkContainer>
  );
};

export default MyRecentWorks;
