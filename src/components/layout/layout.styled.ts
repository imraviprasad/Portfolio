import { Box, styled } from "@mui/material";

namespace S {
  export const LayoutContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100vw",
    height: "fit-content",
  }));
}
export default S;
