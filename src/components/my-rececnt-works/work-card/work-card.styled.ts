import { styled } from "@mui/material";

namespace S {
  export const FlipCardContainer = styled("div")({
    perspective: "1000px",
    width: "33.3333%",
    height: "200px",
    padding: "10px",
  });

  export const FlipCard = styled("div", {
    shouldForwardProp: (prop) => prop !== "isFlipped",
  })(({ isFlipped }: { isFlipped: boolean }) => ({ theme }) => ({
    backgroundColor: "transparent",
    // width: "190px",
    // height: "254px",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 0.8s",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
  }));

  export const Title = styled("p")({
    fontSize: "1.5em",
    fontWeight: 900,
    textAlign: "center",
    margin: 0,
  });

  export const FlipCardFront = styled("div")({
    boxShadow: "0 8px 14px 0 rgba(0,0,0,0.2)",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    border: "1px solid coral",
    borderRadius: "1rem",
    background: "linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%, rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%)",
    color: "coral",
  });

  export const FlipCardBack = styled("div")({
    boxShadow: "0 8px 14px 0 rgba(0,0,0,0.2)",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    border: "1px solid coral",
    borderRadius: "1rem",
    background: "linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%, bisque 40%, rgb(255, 185, 160) 78%)",
    color: "white",
    transform: "rotateY(180deg)",
  });
}

export default S;
