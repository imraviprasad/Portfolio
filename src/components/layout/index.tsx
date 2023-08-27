import S from "./layout.styled";
import AboutMe from "../about-me";
import Contact from "../contact";
import Footer from "../footer";
import Header from "../header";
import Intro from "../intro";
import MyRecentWorks from "../my-rececnt-works";

const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Intro />
      <AboutMe />
      <MyRecentWorks />
      <Contact />
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;
