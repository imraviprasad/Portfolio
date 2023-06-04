import { CSSProperties, ReactNode } from "react";
import { CSSObject } from "@emotion/react";

declare module "@mui/material" {
  // createTheme uses ThemeOptions as argument type which uses PaletteOptions as type for palette property
  interface PaletteOptions {
    custom: {};
  }

  // The 'Theme' type which uses Palette as type for palette property
  // so we have to modify both PaletteOptions and Palette for better linting and code completion
  interface Palette {
    custom: {};
  }
}
