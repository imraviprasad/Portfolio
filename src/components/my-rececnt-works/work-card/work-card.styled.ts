import { Box, Typography, styled } from "@mui/material";

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

  export const FlipCardFront = styled("div")({
    boxShadow: "0 8px 14px 0 rgba(0,0,0,0.2)",
    position: "absolute",
    display: "flex",
    gap: "0.1rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    borderRadius: "1rem",
    backgroundSize: "160%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  });

  export const FlipCardFrontOverlay = styled("div")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(30, 54, 94, 0.8)",
    // backgroundColor: "rgba(76, 169, 181,0.8)",
    // background: "linear-gradient(175.31deg, #EEECFF 30.62%, #FDE7F1 99.66%)",
    borderRadius: "1rem",
  });

  export const FlipCardBack = styled("div")({
    boxShadow: "0 8px 14px 0 rgba(0,0,0,0.2)",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    width: "100%",
    height: "100%",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    borderRadius: "1rem",
    transform: "rotateY(180deg)",
    backgroundColor: "#141C3A",
  });

  export const LogoContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: "1rem",
  }));

  export const Logo = styled("img")(({ theme }) => ({
    zIndex: "0",
    width: "35px",
    height: "35px",
    borderRadius: "50%",
  }));

  export const Title = styled(Typography)(({ theme }) => ({
    color: "white",
    zIndex: "0",
    fontSize: "22px",
    fontWeight: "600",
  }));

  export const SubText = styled(Typography)(({ theme }) => ({
    zIndex: "0",
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
  }));

  export const DescriptionText = styled(Typography)(({ theme }) => ({
    color: "white",
    zIndex: "0",
    fontSize: "16px",
    // fontWeight: "600",
  }));
}

export default S;
