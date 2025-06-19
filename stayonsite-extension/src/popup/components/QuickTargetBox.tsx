import { useState } from "react";
import { makeStyles, Field, Input, Button } from "@fluentui/react-components";
import { saveCurrentUrl } from "../../utils/storage";
import { isValidUrl } from "../../utils/validation";


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

  const handleSave = async () => {
    try {
      await saveCurrentUrl(url);
      console.log("URL saved:", url);
    } catch (err) {
      console.error("Failed to save URL:", err);
    }
  };

  return (
    <div className={styles.box}>
      <Field label="URL">
        <Input
          value={url}
          onChange={(e) => setUrl(e.currentTarget.value)}
          placeholder="https://example.com"
        />
      </Field>
      <Button
        onClick={() => {
          if (!isValidUrl(url)) return;
          saveCurrentUrl(url);
          setUrl(""); // optional: reset input
        }}
      >
        Save
      </Button>

    </div>
  );
};
