import S from "./footer.styled";

const Footer = () => {
  const date = new Date();

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <S.FooterContainer>
      <S.AlignmentContainer>
        <S.LeftContainer>Copyright © {date.getFullYear()}. All rights are reserved</S.LeftContainer>
        <S.RightContainer>
          <S.CustomIconButton
            onClick={() => openInNewTab("https://www.linkedin.com/in/raviprasad-elamaran/")}
          >
            <S.Linkedin />
          </S.CustomIconButton>
          <S.CustomIconButton onClick={() => openInNewTab("https://github.com/imraviprasad")}>
            <S.Github />
          </S.CustomIconButton>

          <S.CustomIconButton onClick={() => openInNewTab("https://www.instagram.com/im_ravii/")}>
            <S.Instagram />
          </S.CustomIconButton>
        </S.RightContainer>
      </S.AlignmentContainer>
    </S.FooterContainer>
  );
};

export default Footer;
