import { useState } from "react";
import { makeStyles, Field, Input, InfoLabel, LabelProps, Button, Subtitle2Stronger } from "@fluentui/react-components";

const useStyles = makeStyles({
    box: {
        padding: "12px",
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
            <Field label="Name">
                <Input
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    placeholder="MovieOnline"
                />
            </Field>

            <Field label="URL">
                <Input
                    value={url}
                    onChange={(e) => setUrl(e.currentTarget.value)}
                    placeholder="https://example.com"
                />
            </Field>

            <Button>Save</Button>

        </div>
    );
};