import { Box, Typography, styled } from "@mui/material";

namespace S {
  export const AboutMeMainContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 40px",
    maxWidth: "1030px",
    height: "calc(100vh - 80px)",
  }));

  export const AboutMeContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    width: "100%",
    padding: "30px 0",
    textAlign: "center",
  }));

  export const Heading = styled(Typography)(() => ({
    color: "#147efb",
    fontSize: "1.0625rem",
    fontWeight: "700",
  }));

  export const SubHeading = styled(Typography)(() => ({
    color: "#2d2e32",
    fontSize: "1.5625rem",
    fontWeight: "700",
  }));

  export const ContentText = styled(Typography)(() => ({
    color: "#767676",
    fontSize: "1.0625rem",
  }));
}

export default S;
