import { useState } from "react";
import styles from "../styles/settings.module.css";

// https://linguinecode.com/post/how-to-pass-parameter-values-to-onclick-react-function

const LightTheme = {
  background: "#eeeeee",
  //   navBackground:"transparent",
  navBackground: "#f5f6fa",
  textBackground: "#fff",
  //   h1: "#444",
  //   h2: "#404040",
  h1: "#d66161",
  //   h1: "#f0a590"
  h2: "#77aaff",
  text: "#333",
  primaryButton: "linear-gradient(45deg, #fe6b8b, #ff8e53)",
  secondaryButton: "linear-gradient(45deg, #2196f3, #21cbf3)",
};

const DarkTheme = {
  background: "#1d1f21",
  //   navBackground:"transparent",
  navBackground: "#282c2f",
  textBackground: "#202124",
  //   h1: "#444",
  //   h2: "#404040",
  h1: "#d66161",
  //   h1: "#f0a590"
  h2: "#77aaff",
  text: "#fff",
  primaryButton: "linear-gradient(45deg, #fe6b8b, #ff8e53)",
  secondaryButton: "linear-gradient(45deg, #2196f3, #21cbf3)",
};

const JupiterTheme = {
  background: "#fad089",
  navBackground: "rgba(0, 0, 0, 0.1)",
  textBackground: "#f6f3ea",
  h1: "#fe9c5b",
  h2: "#38a9ff",
  text: "#191919",
  primaryButton: "#ff5252",
  secondaryButton: "linear-gradient(45deg, #2196f3, #21cbf3)",
};

const NeptuneTheme = {
  background: "#001e3c",
  //   navBackground:"transparent",
  navBackground: "#395589",
  textBackground: "#072A6C",
  //   h1: "#444",
  //   h2: "#404040",
  h1: "#ff5252",
  //   h1: "#f0a590"
  h2: "#38a9ff",
  text: "#fff",
  primaryButton: "#ff5252",
  secondaryButton: "linear-gradient(45deg, #2196f3, #21cbf3)",
};

function Settings() {
  const [themeState, setThemeState] = useState([LightTheme]);

  function PickTheme(theme) {
    setThemeState(theme);
  }

  return (
    <div>
      <section>
        <div>
          <h2>Theme</h2>
          <p></p>
        </div>
        <div className={styles.grid}>
          <div>
            <div>
              <div className={styles.theme_grid}>
                <div
                  className={styles.theme_box}
                  style={{ background: "#202124" }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{ background: "#282C2F" }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{
                    background: "linear-gradient(45deg, #fe6b8b, #ff8e53)",
                  }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{
                    background: "linear-gradient(45deg, #2196f3, #21cbf3)",
                  }}
                ></div>
              </div>
              <p>Dark</p>
            </div>
            <div>
              <div className={styles.theme_grid}>
                <div
                  className={styles.theme_box}
                  style={{ background: "#fff" }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{ background: "#f6f3ea" }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{ background: "#eeeeee" }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{
                    background: "#d66161",
                  }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{
                    background: "linear-gradient(45deg, #2196f3, #21cbf3)",
                  }}
                ></div>
              </div>
              <p>Light</p>
            </div>
            <div>
              <div className={styles.theme_grid}>
                <div
                  className={styles.theme_box}
                  style={{ background: "#FOFOE1" }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{ background: "#eeeeee" }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{
                    background: "#F0A590",
                  }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{
                    background: "linear-gradient(45deg, #2196f3, #21cbf3)",
                  }}
                ></div>
              </div>
              <p>Jupiter</p>
            </div>
            <div>
              <div className={styles.theme_grid}>
                <div
                  className={styles.theme_box}
                  style={{ background: "#FOFOE1" }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{ background: "#eeeeee" }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{
                    background: "#F0A590",
                  }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{
                    background: "linear-gradient(45deg, #2196f3, #21cbf3)",
                  }}
                ></div>
              </div>
              <p>Neptune</p>
            </div>
            <div>
              <div className={styles.theme_grid}>
                <div
                  className={styles.theme_box}
                  style={{ background: "#F1F3F4" }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{ background: "#D6D6D7" }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{ background: "#f6f3ea" }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{
                    background: "#F0A590",
                  }}
                ></div>
                <div
                  className={styles.theme_box}
                  style={{
                    background: "#77aaff",
                  }}
                ></div>
              </div>
              <p>Pluto</p>
            </div>
          </div>
          <div className={styles.flex}>
            <div
              className={styles.theme_button}
              onClick={() => PickTheme(DarkTheme)}
            ></div>
            <p>Dark</p>
          </div>
          <div className={styles.flex}>
            <div
              className={styles.theme_button}
              onClick={() => PickTheme(LightTheme)}
            ></div>
            <p>Light</p>
          </div>
          <div className={styles.flex}>
            <div
              className={styles.theme_button}
              onClick={() => PickTheme(JupiterTheme)}
            ></div>
            <p>Jupiter</p>
          </div>
          <div className={styles.flex}>
            <div
              className={styles.theme_button}
              onClick={() => PickTheme(NeptuneTheme)}
            ></div>
            <p>Neptune</p>
          </div>
          <div className={styles.flex}>
            <div className={styles.theme_button}></div>
            <p>Pluto</p>
          </div>
        </div>
        <div
          style={{ background: themeState.background }}
          className={styles.example_background}
        >
          <div
            className={styles.example_nav}
            style={{ background: themeState.textBackground }}
          >
            <div
              className={styles.example_nav_inner}
              style={{ background: themeState.navBackground }}
            ></div>
          </div>
          <div
            style={{ background: themeState.textBackground }}
            className={styles.text_background}
          >
            <h1 style={{ color: themeState.h1, margin: "5px 0" }}>Title</h1>
            <h3 style={{ color: themeState.h2, margin: "5px 0" }}>Subtitle</h3>
            <p style={{ color: themeState.text, margin: "5px 0" }}>
              And this is some filler text
            </p>
            <div>
              <div
                className={styles.example_btn}
                style={{
                  background: themeState.primaryButton,
                }}
              >
                Primary
              </div>
              <div
                className={styles.example_btn}
                style={{
                  background: themeState.secondaryButton,
                }}
              >
                Secondary
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Settings;
