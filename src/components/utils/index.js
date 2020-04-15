import axios from "axios";

const getReposRequest = (value, cancelToken, sort = "stars") => {
    return axios.get("https://api.github.com/search/repositories", {
        params: {
            q: value,
            sort
        },
        cancelToken
    });
};

export {
    getReposRequest
};