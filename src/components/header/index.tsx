import S from "./header.styled";

// import ThemeToggleSwitch from "../../utils/widgets/theme-toggle-switch";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>Ravi.dev</S.LogoContainer>
      <S.MenuContainer>
        <S.Menu>
          <a href="#Home">Home</a>
        </S.Menu>
        <S.Menu>
          <a href="#About">About</a>
        </S.Menu>
        <S.Menu>
          <a href="#Projects">Projects</a>
        </S.Menu>
        <S.Menu>
          <a href="#contact">Contact</a>
        </S.Menu>
      </S.MenuContainer>
    </S.HeaderContainer>
  );
};

export default Header;
