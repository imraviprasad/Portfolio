import { Box, styled, TextField, Typography } from "@mui/material";

namespace S {
  export const ContactContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: "2rem",
    maxWidth: "1030px",
    padding: "0 40px",
    height: "calc(100vh - 165px)",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      padding: "50px 40px",
    },
  }));

  export const ContactHeader = styled(Box)(({ theme }) => ({
    width: "100%",
  }));

  export const MainText = styled(Box)(({ theme }) => ({
    fontSize: "17px",
    color: "#147efb",
    fontWeight: "600",
    textTransform: "uppercase",
  }));

  export const SubText = styled(Box)(({ theme }) => ({
    fontSize: "25px",
    color: "#2d2e32",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "23px",
    },
  }));

  export const FormContainer = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "700px",
    padding: "0 20px",
    gap: "2rem",
  }));

  export const Name = styled(TextField)(({ theme }) => ({
    width: "50%",
  }));

  export const Email = styled(TextField)(({ theme }) => ({
    width: "50%",
  }));

  export const Message = styled(TextField)(({ theme }) => ({
    width: "100%",
  }));

  export const NameErrorText = styled(Typography)(({ theme }) => ({
    position: "absolute",
    top: "57px",
    left: "55.5%",
    fontSize: "10px",
    fontWeight: "500",
    color: "red",
  }));

  export const EmailErrorText = styled(Typography)(({ theme }) => ({
    position: "absolute",
    top: "57px",
    left: "3%",
    fontSize: "10px",
    fontWeight: "500",
    color: "red",
  }));

  export const MessageErrorText = styled(Typography)(({ theme }) => ({
    position: "absolute",
    top: "240px",
    left: "3%",
    fontSize: "10px",
    fontWeight: "500",
    color: "red",
  }));

  export const TopSection = styled(Box)(({ theme }) => ({
    position: "relative",
    display: "flex",
    width: "100%",
    gap: "2rem",
  }));
}
export default S;
