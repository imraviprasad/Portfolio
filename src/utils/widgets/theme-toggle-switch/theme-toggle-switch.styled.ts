import { Box, keyframes, styled } from "@mui/material";

namespace S {
  export const ThemeToggleSwitchContainer = styled("label")(({ theme }) => ({
    fontSize: "17px",
    position: "relative",
    display: "inline-block",
    width: "64px",
    height: "34px",
  }));

  export const SwitchInput = styled("input")(({ theme }) => ({
    opacity: "0",
    width: "0",
    height: "0",
  }));

  export const Slider = styled("span")(({ theme }) => ({
    position: "absolute",
    cursor: "pointer",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#73C0FC",
    transition: ".4s",
    borderRadius: "30px",
    "&::before": {
      position: "absolute",
      content: "''",
      height: "30px",
      width: "30px",
      borderRadius: "20px",
      left: "2px",
      bottom: "2px",
      zIndex: "2",
      backgroundColor: "#e8e8e8",
      transition: ".4s",
    },
  }));

  export const Sun = styled("span")(({ theme }) => ({
    svg: {
      position: "absolute",
      top: "6px",
      left: "36px",
      zIndex: " 1",
      width: "24px",
      height: "24px",
    },
  }));

  export const Moon = styled("span")(({ theme }) => ({
    svg: {
      fill: "#73C0FC",
      position: "absolute",
      top: "5px",
      left: "5px",
      zIndex: "1",
      width: "24px",
      height: "24px",
    },
  }));

  const rotate = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

  const tilt = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-10deg);
  }

  75% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;
}
export default S;
