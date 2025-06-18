import {
    makeStyles,
    Subtitle2Stronger,
    Menu,
    MenuTrigger,
    MenuPopover,
    MenuList,
    MenuItem,
    SplitButton,
    MenuButtonProps,
} from "@fluentui/react-components";

const useStyles = makeStyles({
    box: {
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        borderRadius: "8px",
        marginBottom: "16px",
    },
    splitBtn: {
        width: "100%",
    },
});

export const BookmarksBox = () => {
    const styles = useStyles();

    return (
        <div className={styles.box}>
            <Subtitle2Stronger>BOOKMARKS</Subtitle2Stronger>

            <Menu>
                <MenuTrigger disableButtonEnhancement>
                    {(triggerProps: MenuButtonProps) => (
                        <SplitButton
                            menuButton={triggerProps}
                            onClick={() => console.log("Main clicked")}
                            className={styles.splitBtn}
                            primaryActionButton={{ className: styles.splitBtn }}
                        >
                            Example
                        </SplitButton>
                    )}
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <MenuItem onClick={() => console.log("Delete clicked")}>Delete</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
        </div>
    );
};
