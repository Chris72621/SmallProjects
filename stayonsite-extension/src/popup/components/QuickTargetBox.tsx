import { useState } from "react";
import { makeStyles, Field, Input, Button } from "@fluentui/react-components";

const useStyles = makeStyles({
    box: {
        padding: "12px",
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
