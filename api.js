import axios from 'axios';
const ENDPOINT = process.env.REACT_APP_API_URL;

class ItemListApi {
    static getAllItems(query) {
        return axios.get(`${ENDPOINT}/editor`,{
                params: query
            })
            .then(response => response.data);
    }
}

export default ItemListApi;
