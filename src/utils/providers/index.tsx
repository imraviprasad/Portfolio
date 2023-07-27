import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../theme";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const CustomProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>{children}</Router>
    </ThemeProvider>
  );
};

export default CustomProvider;
