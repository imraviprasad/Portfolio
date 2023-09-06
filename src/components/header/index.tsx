import { useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import CloseIcon from "@mui/icons-material/Close";
import S from "./header.styled";

// import ThemeToggleSwitch from "../../utils/widgets/theme-toggle-switch";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

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
        <S.CustomIconButton
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <S.CustomMenuIcon />
        </S.CustomIconButton>
      </S.MenuContainer>

      {/* Float menu */}
      <S.FloatMenu view={showMenu}>
        <S.CloseContainer>
          <S.CustomIconButton
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <CloseIcon />
          </S.CustomIconButton>
        </S.CloseContainer>
        <S.VerticalMenuContainer>
          <S.VerticalMenu>
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-160}
              duration={500}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              Home
            </Link>
          </S.VerticalMenu>
          <S.VerticalMenu>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              About
            </Link>
          </S.VerticalMenu>
          <S.VerticalMenu>
            <Link
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              Projects
            </Link>
          </S.VerticalMenu>
          <S.VerticalMenu>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              Contact
            </Link>
          </S.VerticalMenu>
        </S.VerticalMenuContainer>
      </S.FloatMenu>
    </S.HeaderContainer>
  );
};

export default Header;
