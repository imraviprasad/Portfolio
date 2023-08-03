import { Box, styled } from "@mui/material";

namespace S {
  export const LayoutContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f9f9f9",
    width: "100%",
    height: "fit-content",
    overflow: "none",
    paddingTop: "80px",
  }));
}
export default S;
