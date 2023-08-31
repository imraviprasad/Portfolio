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
    marginTop: "3rem",
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
  }));

  export const SubText = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
  }));

  export const WorkContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "space-between",
    width: "100%",
  }));
}
export default S;
