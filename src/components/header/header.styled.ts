import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Typography, styled } from "@mui/material";

namespace S {
  export const HeaderContainer = styled("nav")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "25px 40px 25px 50px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.09)",
    height: "auto",
    left: "0",
    position: "fixed",
    top: "0",
    zIndex: "200",
  }));

  export const LogoContainer = styled(Typography)(({ theme }) => ({
    a: {
      textDecoration: "none",
      cursor: "pointer",
      color: "#2d2e32",
      fontSize: "20px",
      fontWeight: "700",
    },
  }));

  export const MenuContainer = styled("ul")(({ theme }) => ({
    display: "flex",
    gap: "1.8rem",
    listStyle: "none",
  }));

  export const Menu = styled("li")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "17px",

    a: {
      color: "#2d2e32",
      textDecoration: "none",
      fontWeight: "600",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  export const CustomIconButton = styled(IconButton)(({ theme }) => ({
    display: "none",
    height: "44px",
    width: "44px",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  export const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({}));
}
export default S;
