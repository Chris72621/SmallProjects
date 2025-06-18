import { makeStyles, Field, Input, InfoLabel, LabelProps, Button, Subtitle2Stronger, SplitButton, Menu, MenuButtonProps, MenuItem, MenuList, MenuPopover, MenuTrigger } from "@fluentui/react-components";

const useStyles = makeStyles({
    box: {
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        
        gap: "px",
        backgroundColor: "var(--colorNeutralBackground2)",
    },
    splitBtn: {
        width: "300px"
    }
});


export const BookmarksBox = () => {
    const styles = useStyles();

    return (
        <div className={styles.box}>
            <Subtitle2Stronger>BOOKMARKS</Subtitle2Stronger>

            <Menu>
                <MenuTrigger disableButtonEnhancement>
                    {(triggerProps: MenuButtonProps) => (
                        <div className={styles.splitBtn}>
                            <SplitButton
                                menuButton={triggerProps}
                            >
                                Example
                            </SplitButton>
                        </div>

                    )}
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <MenuItem>Delete</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
        </div>
    );
};