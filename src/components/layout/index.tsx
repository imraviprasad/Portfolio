import S from "./layout.styled";
import AboutMe from "../about-me";
import Header from "../header";
import MyRecentWorks from "../my-rececnt-works";
import Contact from "../contact";

const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <AboutMe />
      <MyRecentWorks />
      <Contact/>
    </S.LayoutContainer>
  );
};

export default Layout;
