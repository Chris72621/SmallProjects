import { makeStyles, Image, Switch } from "@fluentui/react-components";

const useStyles = makeStyles({
    box: {
        display: "flex",
        alignItems: "center",
        padding: "12px",
        gap: "30px"
    },
});

export const HeaderSection = () => {
    const styles = useStyles();

    return (
        <div className={styles.box}>
            <Image
                alt="StayOnSite Logo"
                src="/target.png"
                height={50}
                width={50}
            />
            <Switch label="Activate" />
            <Switch label="Current Site" />
        </div>
    );
};