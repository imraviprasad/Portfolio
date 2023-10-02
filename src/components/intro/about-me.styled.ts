import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, IconButton, Typography, styled } from "@mui/material";

namespace S {
  export const AboutMeContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1030px",
    gap: "40px",
    // marginTop: "80px",
    padding: "0 40px",
    height: "calc(100vh - 80px)",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      marginTop: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      padding: "0 20px",
      gap: "10px",
    },
  }));

  export const Profile = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    height: "350px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  }));

  export const AboutData = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));

  export const PersonalImgContainer = styled(Box)(({ theme }) => ({
    backgroundImage: "",
    height: "350px",
    width: "350px",
    overflow: "hidden",
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
    [theme.breakpoints.down("sm")]: {
      height: "250px",
      width: "250px",
    },
  }));

  export const PersonalImg = styled("img")(({ theme }) => ({
    width: "100%",
  }));

  export const Title = styled(Typography)(({ theme }) => ({
    fontSize: "55px",
    margin: "20px 0",
    lineHeight: "1.1",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      fontSize: "55px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
  }));

  export const SubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  }));

  export const LinkIcons = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "25px 0",
    gap: "0.5rem",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  }));

  export const CustomIconButton = styled(IconButton)(({ theme }) => ({}));

  export const Location = styled(LocationOnIcon)(({ theme }) => ({
    fontSize: "20px",
    color: "#2d2e32",
    marginBottom: "-2px",
  }));

  export const Download = styled(DownloadIcon)(({ theme }) => ({
    fontSize: "2.1875rem",
    color: "#2d2e32",
    "&:hover": {
      color: "#147EFB",
    },
  }));

  export const Github = styled(GitHubIcon)(({ theme }) => ({
    fontSize: "2.1875rem",
    color: "#2d2e32",
    "&:hover": {
      color: "#147EFB",
    },
  }));

  export const Instagram = styled(InstagramIcon)(({ theme }) => ({
    fontSize: "2.1875rem",
    color: "#2d2e32",
    "&:hover": {
      color: "#147EFB",
    },
  }));

  export const Linkedin = styled(LinkedInIcon)(({ theme }) => ({
    fontSize: "2.1875rem",
    color: "#2d2e32",
    "&:hover": {
      color: "#147EFB",
    },
  }));

  export const TechStack = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1.1rem",
    width: "100%",
    height: "6rem",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
    },
  }));

  export const SkillBar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1.1rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "40rem",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  }));

  export const Skill = styled(Typography)(({ theme }) => ({
    fontSize: "19px",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
  }));

  export const TechText = styled(Typography)(({ theme }) => ({
    borderRight: "2px solid rgba(45,46,50,.5)",
    fontWeight: "600",
    marginRight: "30px",
    paddingRight: "20px",
    color: "#2d2e32",
    [theme.breakpoints.down("md")]: {
      paddingRight: "0",
      borderRight: "none",
      borderBottom: "2px solid rgba(45,46,50,.5)",
    },
  }));
}

export default S;
