import { IconButton } from "@mui/material";
import S from "./footer.styled";

const Footer = () => {
  const date = new Date();

  return (
    <S.FooterContainer>
      <S.AlignmentContainer>
        <S.LeftContainer>Copyright © {date.getFullYear()}. All rights are reserved</S.LeftContainer>
        <S.RightContainer>
          <IconButton>
            <S.Linkedin />
          </IconButton>
          <IconButton>
            <S.Github />
          </IconButton>
          <IconButton>
            <S.Instagram />
          </IconButton>
        </S.RightContainer>
      </S.AlignmentContainer>
    </S.FooterContainer>
  );
};

export default Footer;
