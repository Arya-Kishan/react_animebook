import axios from "axios"

axios.defaults.baseURL = "https://api.jikan.moe/v4"

export const getTop = async (filter) => {
    console.log(filter);
    if (filter) {
        let { data } = await axios(`/top/anime?filter=${filter}`)
        console.log(data);
        return data;
    } else {
        let { data } = await axios("/top/anime")
        console.log(data);
        return data;
    }
}