import axios from "axios";

export type Params = {
    query: String,
    page: String,
    num_pages: String
}
export const fetchJobs = (params: Params) => {
    const options = {
        params: { ...params },
        headers: {
            'X-RapidAPI-Key': 'b7e2a320f7mshe4472e36a81eddbp1a3358jsn5c26891bbc4b',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    const url = 'https://jsearch.p.rapidapi.com/search'
    return axios.get(url, options).then(response => response.data.data)
}