import axios from 'axios';

export default class ProductService {

    getProductsSmall() {
        //let api_url = `http://test.newca.vn/api/account/affiliate/7/orders`;
        //return axios.get('data/product2.json').then(res => res.data.data);
        let api_url = `http://test.newca.vn/api/v2/orders`;
        return axios.get(api_url).then(res => res.data.data);
    }

    getProducts() {
        return axios.get('data/products.json').then(res => res.data.data);
    }

    getProductsWithOrdersSmall() {
        return axios.get('data/products-orders-small.json').then(res => res.data.data);
    }
}