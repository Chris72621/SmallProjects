import React, { useState } from "react";
import { makeStyles, Field, Input, InfoLabel, LabelProps, Button, Subtitle2Stronger } from "@fluentui/react-components";

const useStyles = makeStyles({
    box: {
        backgroundColor: "var(--colorNeutralBackground2)",
        padding: "12px",
        borderRadius: "8px",
        borderBlockStyle: "none",
        marginBottom: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },
});

export const BookmarksBox = () => {
    const styles = useStyles();

    return (
        <div className={styles.box}>
      
        </div>
    );
};