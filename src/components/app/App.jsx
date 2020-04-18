import React, {useState} from 'react';
import './App.sass';
import SearchBar from "../searchBar/SearchBar";
import {AxiosRequests} from "../utils";
import RepositoryCard from "../repositoryCard/RepositoryCard";
import Pagination from "../pagination/Pagination";
import moment from "moment";
import "./App.sass";

const axiosRequests = new AxiosRequests();

const App = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

     const searchRepos = (page) => {
         setSearchResult(null);
         if (window.sessionStorage.getItem(`${searchValue}-${page}`)) {
             setSearchResult(JSON.parse(window.sessionStorage.getItem(`${searchValue}-${page}`)));
         } else {
             axiosRequests.getReposRequest(searchValue, page, 30).then((response) => {
                 setSearchResult(response.data);
                 window.sessionStorage.setItem(`${searchValue}-${page}`, JSON.stringify(response.data));
             }).catch((error) => {
                 console.log(error);
             });
         }
     };

    const onPageChange = (page) => {
        searchRepos(page);
        setCurrentPage(page);
    };

    return (
      <div>
          <SearchBar
              value={searchValue}
              placeholder="Search..."
              onChange={(e) => setSearchValue(e.target.value)}
              onSubmit={() => onPageChange(1)}
              onIconClick={() => axiosRequests.getReposRequestAbort()}
          />
          <div className="repository-list">
              {searchResult && <h3>{`${Math.min(searchResult.total_count, 1000)} repository results`}</h3>}
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
          <div className="pagination-wrapper">
              {searchResult && searchResult.total_count ?
                  <Pagination
                      activePage={currentPage}
                      onChange={onPageChange}
                      totalItems={Math.min(searchResult.total_count, 1000)}
                  /> : null
              }
          </div>
      </div>
    );
};

export default App;
