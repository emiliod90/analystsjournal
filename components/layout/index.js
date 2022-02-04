import { useEffect, useState, useContext, useMemo } from "react";
import styles from "../../styles/layout.module.css";
import { ThemeContext, themes } from "../../context/themeContext";
import Header from "./header";
import Footer from "./footer";

//https://www.color-name.com/creamy-white.color
// https://www.freecodecamp.org/news/state-management-with-react-hooks/


export default function Layout({ children }) {
  //theme = light, dark, blue
  const [theme, setTheme] = useState(themes.LightTheme);
  const toggleTheme = () => {
    if (theme === themes.LightTheme) {
      setTheme(themes.DarkTheme);
    } else if (theme == themes.DarkTheme) {
      setTheme(themes.BlueTheme);
    } else {
      setTheme(themes.LightTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
      <style global jsx>{`
        body {
          background: ${theme.background.shadeOne};
        }
        h1 {
          color: ${theme.text.h1};
        }
        h2 {
          color: ${theme.text.h2};
        }
        h3 {
          color: ${theme.text.h3};
        }
        h4 {
          color: ${theme.text.h4};
        }
        p {
          color: ${theme.text.p};
        }
      `}</style>
    </ThemeContext.Provider>
  );
}
