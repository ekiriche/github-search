import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import { createStyles, makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        appRoot: {
            backgroundColor: "#24292e"
        },
        searchContainer: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%'
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            fontSize: theme.typography.fontSize,
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '20ch',
                '&:focus': {
                    width: '26ch',
                },
            },
        },
        container: {
            display: "flex",
            alignItems: "center"
        },
        githubIcon: {
            cursor: "pointer",
            fontSize: '32px',
            marginRight: theme.spacing(2),
            '&:hover': {
                color: "hsla(0, 0%, 100%, .7)",
                textDecoration: "none"
            },
        }
    })
);

const SearchBar = (props) => {
    const classes = useStyles();

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit();
    };

    return (
        <AppBar
            position="static"
            classes={{
                root: classes.appRoot
            }}
        >
            <Toolbar>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className={classes.container}>
                        <GitHubIcon className={classes.githubIcon} onClick={props.onIconClick}/>
                        <div className={classes.searchContainer}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder={props.placeholder}
                                value={props.value}
                                onChange={props.onChange}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                    </div>
                </form>
            </Toolbar>
        </AppBar>
    );
};

export default SearchBar;