import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '02743fc6e6aa4d78bb11c73a56396f91'
    }
})