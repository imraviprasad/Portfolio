import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography, styled } from "@mui/material";

namespace S {
  export const AboutMeContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    // height: "65rem",
    width: "100%",
    maxWidth: "950px",
    gap: "60px",
    marginTop: "5rem",
    marginBottom: "2rem",
    height: "calc(100vh - 192px)",
  }));

  export const Profile = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    height: "350px",
    width: "100%",
  }));

  export const AboutData = styled(Box)(({ theme }) => ({}));

  export const PersonalImg = styled(Box)(({ theme }) => ({
    backgroundImage: "",
    height: "21.875rem",
    width: "21.875rem",
    backgroundPosition: "50%",
    backgroundRepeat: "50%",
    backgroundSize: "no-repeat",
    border: "3px solid #2d2e32",
    borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
    position: "relative",
    transition: "all 1s ease-in-out",
    animation: "borderdance 8s ease-in-out infinite",
    "@keyframes borderdance": {
      "0%": {
        borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
      },
      "50%": {
        borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
      },
      "100%": {
        borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
      },
    },
  }));

  export const Title = styled(Typography)(({ theme }) => ({
    fontSize: "3.4375rem",
    margin: "20px 0",
    lineHeight: "1.1",
    fontWeight: "bold",
  }));

  export const SubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.125rem",
  }));

  export const LinkIcons = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "25px 0",
    gap: "0.5rem",
  }));

  export const Github = styled(GitHubIcon)(({ theme }) => ({
    fontSize: "2.1875rem",
  }));

  export const Instagram = styled(InstagramIcon)(({ theme }) => ({
    fontSize: "2.1875rem",
  }));

  export const Linkedin = styled(LinkedInIcon)(({ theme }) => ({
    fontSize: "2.1875rem",
  }));

  export const TechStack = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1.1rem",
    width: "100%",
    height: "6rem",
  }));

  export const Skill = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    fontWeight: 600,
  }));

  export const TechText = styled(Typography)(() => ({
    borderRight: "2px solid rgba(45,46,50,.5)",
    fontWeight: "600",
    marginRight: "30px",
    paddingRight: "20px",
    color: "#2d2e32",
  }));
}

export default S;
