import React from "react";
import ReactDOM from "react-dom/client";
import { Divider, FluentProvider, makeStyles } from "@fluentui/react-components";
import { darkTheme } from "../theme/customTheme";
import { HeaderSection } from "./components/HeaderSection";
import { TargetOptionsSection } from "./components/TargetOptionsSection";
import { BookmarksBox } from "./components/BookmarksBox";

const useStyles = makeStyles({
  popup: {
    width: "430px",
    padding: "16px",
    backgroundColor: "var(--colorNeutralBackground1)",
    display: "flex",
    flexDirection: "column",
  },
  divider: {
    minHeight: "30px",
  }
});

const App = () => {
  const styles = useStyles();

  return (
    <FluentProvider theme={darkTheme}>
      <div className={styles.popup}>
        <HeaderSection />
        <Divider className={styles.divider} />
        <TargetOptionsSection />
        <BookmarksBox />
        <a
          href="rdzlabs.co@gmail.com?subject=StayOnSite Feedback&body=Hi, I wanted to share some feedback about the extension."
          target="_blank"
          rel="noopener noreferrer"
          style={{ textAlign: "center", color: "#0078d4", fontSize: "13px" }}
        >
          Send Feedback
        </a>
      </div>
    </FluentProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
