import { styled, Typography } from "@mui/material";

namespace S {
  export const Button = styled("button")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#ffffff00",
    color: "#fff",
    padding: "0 10px",
    height: "2.5rem",
    border: "2px solid #3654ff ",
    borderRadius: "20px",
    transition: "all 0.5s ease",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#3654ff",
      svg: {
        transform: "translateX(5px)",
      },
    },

    svg: {
      display: "flex",
      transition: "all 0.5s ease",
    },
  });

  export const Text = styled(Typography)({
    fontSize: "12px",
  });
}

export default S;
