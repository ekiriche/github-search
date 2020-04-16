import React, {useState} from 'react';
import './App.sass';
import SearchBar from "../searchBar/SearchBar";
import {getReposRequest} from "../utils";
import axios from "axios";
import RepositoryCard from "../repositoryCard/RepositoryCard";
import Pagination from "../pagination/Pagination";
import moment from "moment";
import "./App.sass";

const App = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const source = axios.CancelToken.source();

    const searchRepos = (page) => {
        if (window.sessionStorage.getItem(`${searchValue}-${page}`)) {
            setSearchResult(JSON.parse(window.sessionStorage.getItem(`${searchValue}-${page}`)));
        } else {
            setSearchResult(null);
            getReposRequest(searchValue, source.token, page, 30).then((response) => {
                setSearchResult(response.data);
                window.sessionStorage.setItem(`${searchValue}-${page}`, JSON.stringify(response.data));
            }).catch((error) => {

            });
        }
    };

    const onPageChange = (page) => {
        searchRepos(page);
        setCurrentPage(page);
    };

    return (
      <div>
          <SearchBar value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onSubmit={() => onPageChange(1)}/>
          <div className="repository-list">
              {searchResult && searchResult.items.map((item, index) => (
                  <RepositoryCard
                      key={index}
                      name={item.full_name}
                      nameLink={item.html_url}
                      description={item.description}
                      stars={item.stargazers_count}
                      language={item.language}
                      license={item.license && item.license.name}
                      updatedAt={moment(item.updated_at).fromNow()}
                  />
              ))}
          </div>
          {searchResult &&
              <Pagination activePage={currentPage} onChange={onPageChange} totalItems={Math.min(searchResult.total_count, 1000)} />
          }
      </div>
    );
};

export default App;
