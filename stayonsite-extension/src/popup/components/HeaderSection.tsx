import {
    makeStyles,
    Image,
    Switch,
    Text,
} from "@fluentui/react-components";
import { useState, useEffect } from "react";
import { setActivate, getActivate, getCurrentUrl } from "../../utils/storage";

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "12px",
    },
    topRow: {
        display: "flex",
        alignItems: "center",
        gap: "30px",
    },
});


export const HeaderSection = () => {
    const styles = useStyles();
    const [isActive, setIsActive] = useState<boolean | null>(null);
    const [showSaved, setShowSaved] = useState(false);
    const [savedUrl, setSavedUrl] = useState<string | null>(null);

    useEffect(() => {
        getActivate().then(setIsActive);
    }, []);

    const handleActivateChange = (_e: unknown, data: { checked: boolean }) => {
        setIsActive(data.checked);
        setActivate(data.checked);
    };

    const handleCurrentSiteToggle = async (
        _e: unknown,
        data: { checked: boolean }
    ) => {
        setShowSaved(data.checked);

        if (data.checked) {
            const saved = await getCurrentUrl();
            setSavedUrl(saved);
        } else {
            setSavedUrl(null);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.topRow}>
                <Image alt="StayOnSite Logo" src="/target.png" height={50} width={50} />
                {isActive !== null && (
                    <Switch
                        label="Activate"
                        checked={isActive}
                        onChange={handleActivateChange}
                    />
                )}
                <Switch
                    label="Current Site"
                    checked={showSaved}
                    onChange={handleCurrentSiteToggle}
                />
            </div>
            {showSaved && savedUrl && <Text>{savedUrl}</Text>}
        </div>
    );

};
