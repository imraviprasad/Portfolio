import S from "./footer.styled";

const Footer = () => {
  const date = new Date();

  return (
    <S.FooterContainer>
      <S.AlignmentContainer>
        <S.LeftContainer>Copyright © {date.getFullYear()}. All rights are reserved</S.LeftContainer>
        <S.RightContainer>
          <S.CustomIconButton>
            <S.Linkedin />
          </S.CustomIconButton>
          <S.CustomIconButton>
            <S.Github />
          </S.CustomIconButton>

          <S.CustomIconButton>
            <S.Instagram />
          </S.CustomIconButton>
        </S.RightContainer>
      </S.AlignmentContainer>
    </S.FooterContainer>
  );
};

export default Footer;
