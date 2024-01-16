import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Typography, styled } from "@mui/material";

namespace S {
  export const HeaderContainer = styled("nav")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "25px 40px 25px 50px",
    background: "linear-gradient(to right, #ecf0f1, #ffffff)",
    boxShadow: "0 0 10px rgba(0,0,0,0.09)",
    height: "auto",
    left: "0",
    position: "fixed",
    top: "0",
    zIndex: "200",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 40px 15px 50px",
    },
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

  export const FloatMenu = styled(Box, {
    shouldForwardProp: (prop) => prop !== "view",
  })(({ view }: { view: boolean }) => ({ theme }) => ({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "300px",
    backgroundColor: "#fff",
    transition: "transform 0.5s ease-out",
    transform: view ? "translateY(0)" : "translateY(-50vh)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "0 0 20px 20px",
    boxShadow: "0 0 12px rgba(0,0,0,0.09)",
  }));

  export const CloseContainer = styled(Typography)(({ theme }) => ({
    padding: "15px 40px 15px 50px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  }));

  export const VerticalMenuContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    listStyle: "none",
  }));

  export const VerticalMenu = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    fontSize: "17px",
    a: {
      color: "#2d2e32",
      textDecoration: "none",
      fontWeight: "600",
    },
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
