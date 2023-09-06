import { Box, Typography, styled } from "@mui/material";

namespace S {
  export const MyRecentWorkContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1030px",
    padding: "0 40px",
    height: "calc(100vh - 80px)",
    gap: "5rem",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      padding: "20px 40px",
      gap: "2.5rem",
    },
  }));

  export const Heading = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  }));

  export const MainText = styled(Typography)(({ theme }) => ({
    fontSize: "32px",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
    },
  }));

  export const SubText = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  }));

  export const WorkContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItem: "center",
    justifyContent: "center",
    width: "100%",
  }));
}
export default S;
