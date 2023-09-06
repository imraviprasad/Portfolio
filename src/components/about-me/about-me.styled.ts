import { Box, Typography, styled } from "@mui/material";

namespace S {
  export const AboutMeMainContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 40px",
    maxWidth: "1030px",
    height: "calc(100vh - 80px)",

    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 80px)",
      height: "auto",
      padding: "80px 40px",
    },
  }));

  export const AboutMeContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    width: "100%",
    padding: "30px 0",
    textAlign: "center",
  }));

  export const Heading = styled(Typography)(({ theme }) => ({
    color: "#147efb",
    fontSize: "1.0625rem",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      fontWeight: "600",
    },
  }));

  export const SubHeading = styled(Typography)(({ theme }) => ({
    color: "#2d2e32",
    fontSize: "1.5625rem",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.375rem",
      marginBottom: "1rem",
    },
  }));

  export const ContentText = styled(Typography)(({ theme }) => ({
    color: "#767676",
    fontSize: "1.0625rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  }));
}

export default S;
