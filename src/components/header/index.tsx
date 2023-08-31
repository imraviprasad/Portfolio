import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import S from "./header.styled";

// import ThemeToggleSwitch from "../../utils/widgets/theme-toggle-switch";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-160} duration={500}>
          Ravi.dev
        </Link>
      </S.LogoContainer>
      <S.MenuContainer>
        <S.Menu>
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-160}
            duration={500}
          >
            Home
          </Link>
        </S.Menu>
        <S.Menu>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            About
          </Link>
        </S.Menu>
        <S.Menu>
          <Link
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Projects
          </Link>
        </S.Menu>
        <S.Menu>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            Contact
          </Link>
        </S.Menu>
        <S.CustomIconButton>
          <S.CustomMenuIcon />
        </S.CustomIconButton>
      </S.MenuContainer>
    </S.HeaderContainer>
  );
};

export default Header;
