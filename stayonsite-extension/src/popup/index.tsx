import React from "react";
import ReactDOM from "react-dom/client";
import { FluentProvider } from "@fluentui/react-components";
import { darkTheme } from "../theme/customTheme";
import { QuickTargetBox } from "./components/QuickTargetBox";
import { SaveBookmarksBox } from "./components/SaveBookmarksBox";
import "./popup.css";
import { BookmarksBox } from "./components/BookmarksBox";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FluentProvider theme={darkTheme}>
      <div className="popup">
        <QuickTargetBox/>
        <SaveBookmarksBox/>
        <BookmarksBox/>
      </div>
    </FluentProvider>
  </React.StrictMode>
);
