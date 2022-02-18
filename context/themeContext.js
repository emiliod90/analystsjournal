// https://www.youtube.com/watch?v=L6iIBkrMFUE&ab_channel=ReactNativeSchool
// https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/

import { createContext, useState } from "react";

export const themes = {
  LightTheme: {
    background: {
      shadeOne: "#f8f8f4",
      shadeTwo: "#f2f2f2",
      shadeThree: "#263238",
      shadeFour: "#fbfbf9",
    },
    text: {
      h1: "#d66161",
      h2: "#77aaff",
      h3: "#d66161",
      h4: "#404040",
      p: "#333",
    },
    button: {
      primary: "linear-gradient(45deg, #fe6b8b, #ff8e53)",
      secondary: "linear-gradient(45deg, #2196f3, #21cbf3)",
    },
  },
  DarkTheme: {
    background: "#1d1f21",
    background: {
      shadeOne: "#202124",
      shadTwo: "#282C2F",
      shadeThree: "#323639",
      shadeFour: "#D6D6D7",
    },
    text: {
      h1: "#e5e5e5",
      h2: "#77aaff",
      h3: "#d66161",
      h4: "#e5e5e5",
      p: "#e5e5e5",
    },
    button: {
      primary: "linear-gradient(45deg, #fe6b8b, #ff8e53)",
      secondary: "linear-gradient(45deg, #2196f3, #21cbf3)",
    },
  },
  BlueTheme: {
    background: {
      shadeOne: "#7BA2E8",
      shadeTwo: "#7BA2E8",
      shadeThree: "#7BA2E8",
      shadeFour: "#7BA2E8",
    },
    text: {
      h1: "#fff",
      h2: "#fff",
      h3: "#fff",
      h4: "#333",
      p: "#333",
    },
    button: {
      primary: "linear-gradient(45deg, #fe6b8b, #ff8e53)",
      secondary: "linear-gradient(45deg, #2196f3, #21cbf3)",
    },
  },
};

export const ThemeContext = createContext();
