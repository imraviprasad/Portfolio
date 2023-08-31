import { FC } from "react";
import { GlobalStyles } from "@mui/material";
import "./App.css";
import AppRouters from "./routes/AppRouters";
import CustomProvider from "./utils/providers";

const App: FC = () => {
  return (
    <CustomProvider>
      <GlobalStyles
        styles={(theme) => ({
          "*": {
            "&::-webkit-scrollbar": {
              width: "5px", // for vertical scroll
              height: "5px", // for horizontal scroll
              backgroundColor: "transparent",
              // borderRadius: "10px",
            },

            "&::-webkit-scrollbar-thumb": {
              borderRadius: "10px",
              backgroundColor: "#2d2e32",
              height: "20px",
            },

            "&::-webkit-scrollbar-track-piece:start": {
              backgroundColor: "transparent",
              marginTop: "80px",
            },

            "&::-webkit-scrollbar-track-piece:end": {
              backgroundColor: "transparent",
              // marginBottom: "70px",
            },
            // color: "#2D2E32",
          },
          ".MuiPopover-root .MuiPopover-paper": {
            backgroundColor: "#2D2C31",
          },
          ".MuiLinearProgress-root .css-19c4lqn-MuiLinearProgress-root": {
            backgroundColor: `#595959 !important`,
          },
        })}
      />
      <AppRouters />
    </CustomProvider>
  );
};

export default App;
