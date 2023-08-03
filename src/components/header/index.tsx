import S from "./header.styled";

// import ThemeToggleSwitch from "../../utils/widgets/theme-toggle-switch";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>Ravi.dev</S.LogoContainer>
      <S.MenuContainer>
        <S.Menu>Home</S.Menu>
        <S.Menu>About</S.Menu>
        <S.Menu>Projects</S.Menu>
        <S.Menu>Contact</S.Menu>
      </S.MenuContainer>
    </S.HeaderContainer>
  );
};

export default Header;
