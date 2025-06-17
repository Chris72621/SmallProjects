import React, { useState } from "react";
import { makeStyles, Field, Input, InfoLabel, LabelProps, Button, Subtitle2Stronger, Switch } from "@fluentui/react-components";

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

export const QuickTargetBox = () => {
    const styles = useStyles();
    const [url, setUrl] = useState("");

    return (
        <div className={styles.box}>
            <InfoLabel
                info={
                    <>
                        This is example information for an InfoLabel.{" "}
                    </>
                }
            >
                <Subtitle2Stronger>QUICK TARGET</Subtitle2Stronger>
            </InfoLabel>

            <br />

            <Field label="URL">
                <Input
                    value={url}
                    onChange={(e) => setUrl(e.currentTarget.value)}
                    placeholder="https://example.com"
                />
            </Field>
            <br />
            <Switch label="Activate" />

        </div>
    );
};
