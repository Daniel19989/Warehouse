import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 0.5,
    },
    footer: {
        marginTop: theme.spacing(90.5),
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="relative" className={classes.footer}>
            <Toolbar className="components"></Toolbar>
        </AppBar>
    );
};

export default Header;
