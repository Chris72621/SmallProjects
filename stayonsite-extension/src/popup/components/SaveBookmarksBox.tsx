// src/components/SaveBookmarksBox.tsx
import { useState } from "react";
import { makeStyles, Field, Input, Button } from "@fluentui/react-components";
import { saveBookmark } from "../../utils/storage";  // expects { name, url }

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

    const handleSave = async () => {
        if (!name || !url) return;
        await saveBookmark({ name, url });               // ← pass object
        setName("");
        setUrl("");
    };

    return (
        <div className={styles.box}>
            <Field label="Name">
                <Input value={name} onChange={e => setName(e.currentTarget.value)} placeholder="MovieOnline" />
            </Field>
            <Field label="URL">
                <Input value={url} onChange={e => setUrl(e.currentTarget.value)} placeholder="https://example.com" />
            </Field>
            <Button onClick={handleSave}>Save</Button>
        </div>
    );
};
