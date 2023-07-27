import { Box, styled } from "@mui/material";

namespace S {
  export const HeaderContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "82px",
    [theme.breakpoints.down("sm")]: {
      height: "74px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "66px",
    },
  }));

  export const LogoContainer = styled(Box)(({ theme }) => ({}));

  export const MenuContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    
  }));
}
export default S;
