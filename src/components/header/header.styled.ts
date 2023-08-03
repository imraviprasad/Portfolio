import { Box, Typography, styled } from "@mui/material";

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
    cursor: "pointer",
    color: "#2d2e32",
    fontSize: "20px",
  }));

  export const MenuContainer = styled("ul")(({ theme }) => ({
    display: "flex",
    gap: "2rem",
    listStyle: "none",
  }));

  export const Menu = styled("li")(({ theme }) => ({
    display: "flex",
    cursor: "pointer",
    fontSize: "17px",
  }));
}
export default S;
