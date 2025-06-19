import { useState } from "react";
import { makeStyles, Field, Input, Button } from "@fluentui/react-components";
import { saveBookmark } from "../../utils/storage";

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

            <Button onClick={() => {
                if (name && url) {
                    saveBookmark(name, url).then(() => {
                        setName("");
                        setUrl("");
                    });
                }
            }}>
                Save
            </Button>
        </div>
    );
};