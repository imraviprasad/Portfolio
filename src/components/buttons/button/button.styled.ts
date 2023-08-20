import { styled, Button, CircularProgress } from "@mui/material";
import { red } from "@mui/material/colors";

namespace S {
  export const CustomButton = styled(Button)(({ theme }) => ({
    fontSize: "1rem",
    minWidth: "91px",
    minHeight: "32px",
    borderRadius: "0.5rem",
    textTransform: "none",
    fontWeight: 500,
    backgroundSize: "200%",
    opacity: 1,
    backgroundPosition: "0%",
    svg: {
      path: {
        "&:disabled": {
          color: "#8B8B8B",
        },
      },
    },
    "&:disabled": {
      background: "#B1B0B066",
    //   color: theme.palette.mode === "dark" ? theme.palette.custom.text.primary[50] : theme.palette.custom.text.primary[400],
    },
  }));

  export const CircularLoader = styled(CircularProgress)(() => ({
    svg: {
      color: "#1967FC",
    },
  }));

  export const PrimaryButton = styled(CustomButton)(({ theme }) => ({
    backgroundColor: "red",
    color: "blue",
    "&:hover": {
      backgroundColor: red,
    },
  }));
}

export default S;
