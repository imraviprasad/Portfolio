import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, styled } from "@mui/material";

namespace S {
  export const FooterContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "50px 40px",
    background: "#2d2e32",
  }));

  export const AlignmentContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "950px",
  }));

  export const LeftContainer = styled(Box)(() => ({
    color: "#fff",
    fontSize: "18px",
    fontWeight: "700",
  }));

  export const RightContainer = styled(Box)(() => ({
    display: "flex",
    gap: "0.4rem",
  }));

  export const Github = styled(GitHubIcon)(({ theme }) => ({
    fontSize: "1.5625rem",
    color: "#fff",
  }));

  export const Instagram = styled(InstagramIcon)(({ theme }) => ({
    fontSize: "1.5625rem",
    color: "#fff",
  }));

  export const Linkedin = styled(LinkedInIcon)(({ theme }) => ({
    fontSize: "1.5625rem",
    color: "#fff",
  }));
}

export default S;
