import React, { useState } from "react";
import { makeStyles, Field, Input, InfoLabel, LabelProps, Button, Subtitle2Stronger, Switch, Accordion, AccordionHeader, AccordionItem, AccordionPanel, Divider } from "@fluentui/react-components";
import { QuickTargetBox } from "./QuickTargetBox";
import { BookmarksBox } from "./BookmarksBox";
import { SaveBookmarksBox } from "./SaveBookmarksBox";

const useStyles = makeStyles({
    box: {
        backgroundColor: "var(--colorNeutralBackground2)",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },
});

export const TargetOptionsSection = () => {
    const styles = useStyles();


    return (
        <div className={styles.box}>
            <Accordion collapsible multiple>
                <AccordionItem value="1">
                    <AccordionHeader>QUICK TARGET</AccordionHeader>
                    <AccordionPanel>
                        <QuickTargetBox />
                    </AccordionPanel>
                </AccordionItem>
                <Divider/>
                <AccordionItem value="2">
                    <AccordionHeader>BOOKMARK URL</AccordionHeader>
                    <AccordionPanel>
                        <SaveBookmarksBox />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

        </div>
    );
};
