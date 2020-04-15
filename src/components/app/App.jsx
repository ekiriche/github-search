import React, {useState} from 'react';
import './App.css';
import SearchBar from "../searchBar/SearchBar";
import {getReposRequest} from "../utils";
import axios from "axios";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const source = axios.CancelToken.source();

    const searchRepos = () => {
        getReposRequest(searchValue, source.token).then((response) => {
            setSearchResult(response);
        }).catch((error) => {
            if (axios.isCancel(error)) {
                console.log("was cancelled");
            }
            setSearchResult(null);
        });
    };

    return (
      <div>
        <SearchBar value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onSubmit={() => searchRepos()}/>
      </div>
    );
}

export default App;
