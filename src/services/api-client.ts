import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '12a00fa08c4447efa276d487e9b81513'
    }
})