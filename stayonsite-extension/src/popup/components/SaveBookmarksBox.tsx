import React, { useState } from "react";
import { makeStyles, Field, Input, InfoLabel, LabelProps, Button, Subtitle2Stronger } from "@fluentui/react-components";

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

export const SaveBookmarksBox = () => {
    const styles = useStyles();
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");

    return (
        <div className={styles.box}>

            <InfoLabel
                info={
                    <>
                        This is example information for an InfoLabel.{" "}
                    </>
                }
            >
                <Subtitle2Stronger>BOOKMARK URL</Subtitle2Stronger>
            </InfoLabel>

            <br />
            <div>
                <Field label="Name">
                    <Input
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="MovieOnline"
                    />
                </Field>
                <br/>
                <Field label="URL">
                    <Input
                        value={url}
                        onChange={(e) => setUrl(e.currentTarget.value)}
                        placeholder="https://example.com"
                    />
                </Field>
            </div>

            <br/>
            <Button>Save</Button>

        </div>
    );
};