import React from "react";
import ReactDOM from "react-dom/client";
import { Divider, FluentProvider } from "@fluentui/react-components";
import { darkTheme } from "../theme/customTheme";
import { QuickTargetBox } from "./components/QuickTargetBox";
import { SaveBookmarksBox } from "./components/SaveBookmarksBox";
import "./popup.css";
import { BookmarksBox } from "./components/BookmarksBox";
import { HeaderSection } from "./components/HeaderSection";
import { TargetOptionsSection } from "./components/TargetOptionsSection";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FluentProvider theme={darkTheme}>
      <div className="popup">
        <HeaderSection/>
        <Divider appearance="brand"/>
        <br/>
        <TargetOptionsSection/>
        <BookmarksBox/>
      </div>
    </FluentProvider>
  </React.StrictMode>
);
