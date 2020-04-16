import axios from "axios";

const getReposRequest = (value, cancelToken, page, perPage) => {
    return axios.get("https://api.github.com/search/repositories", {
        params: {
            q: value,
            sort: "stars",
            page,
            per_page: perPage
        },
        cancelToken
    });
};

export {
    getReposRequest
};