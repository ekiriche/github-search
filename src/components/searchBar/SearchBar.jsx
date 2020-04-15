import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar(props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <div className="search-container">
                    <InputBase
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                    />
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default SearchBar;