import { Box, styled, TextField } from "@mui/material";

namespace S {
  export const ContactContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "4rem",
    gap: "2rem",
    maxWidth: "1030px",
    padding: "0 40px",
    height: "calc(100vh - 160px)",
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
  }));

  export const FormContainer = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "800px",
    padding: "0 20px",
    gap: "2rem",
  }));

  export const Name = styled(TextField)(({ theme }) => ({
    width: "50%",
    height: "44px !important",
  }));

  export const Email = styled(TextField)(({ theme }) => ({
    width: "50%",
  }));

  export const Message = styled(TextField)(({ theme }) => ({
    width: "100%",
    // height: "200px",
    // div: {
    //   height: "200px",
    //   input: {
    //     height: "200px",
    //   },
    // },
  }));

  export const TopSection = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",

    gap: "2rem",
  }));
}
export default S;
