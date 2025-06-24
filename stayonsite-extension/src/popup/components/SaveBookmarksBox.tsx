// src/components/SaveBookmarksBox.tsx
import { useState } from "react";
import { makeStyles, Field, Input, Button } from "@fluentui/react-components";
import { saveBookmark } from "../../utils/storage";
import { isValidUrl } from "../../utils/validation";

const useStyles = makeStyles({
  box: { padding: "12px", display: "flex", flexDirection: "column", gap: "12px" },
  textGap: { gap: "6px" },
});

export const SaveBookmarksBox = () => {
  const styles = useStyles();
  const [url, setUrl]       = useState("");
  const [name, setName]     = useState("");
  const [saved, setSaved]   = useState(false);
  const [error, setError]   = useState<string | null>(null);

  const handleSave = async () => {
    // clear previous messages
    setError(null);
    setSaved(false);

    if (!name) {
      setError("Please enter a name.");
      return;
    }
    if (!url || !isValidUrl(url)) {
      setError("Please enter a valid URL (including https://).");
      return;
    }

    await saveBookmark({ name, url });
    setSaved(true);
    setName("");
    setUrl("");
    // clear success after 2s
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className={styles.box}>
      <Field
        label="Name"
        validationState={error && !name ? "error" : undefined}
        validationMessage={error && !name ? error : undefined}
      >
        <Input
          value={name}
          onChange={e => {
            setName(e.currentTarget.value);
            setError(null);
          }}
          placeholder="MovieOnline"
        />
      </Field>

      <Field
        label="URL"
        hint="Base URL—everything under this path is allowed (e.g. https://netflix.com/)"
        validationState={error && !!url ? "error" : saved ? "success" : undefined}
        validationMessage={
          error && !!url
            ? error
            : saved
            ? "Bookmark saved!"
            : undefined
        }
        className={styles.textGap}
      >
        <Input
          value={url}
          onChange={e => {
            setUrl(e.currentTarget.value);
            setError(null);
          }}
          placeholder="https://example.com/"
        />
      </Field>

      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};
