import S from "./layout.styled";
import AboutMe from "../about-me";
import Header from "../header";
import MyRecentWorks from "../my-rececnt-works";

const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <AboutMe />
      <MyRecentWorks />
    </S.LayoutContainer>
  );
};

export default Layout;
