import axios from "axios";

class AxiosRequests {
    constructor() {
        this.source = axios.CancelToken.source();
    }

    getReposRequest = (value, page, perPage) => {
        return axios.get("https://api.github.com/search/repositories", {
            params: {
                q: value,
                sort: "stars",
                page,
                per_page: perPage
            },
            cancelToken: this.source.token
        });
    };

    getReposRequestAbort = () => {
        this.source.cancel();
        this.source = axios.CancelToken.source();
    };
}

export {
    AxiosRequests
};