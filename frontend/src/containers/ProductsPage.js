import React, {Component} from 'react';

import { getProducts } from '../API';
import ProductList from '../components/ProductList'

class ProductsPage extends Component {
    state = {
        products: null
    };

    componentDidMount = async () => {
        const products = await getProducts().catch(error => {
            console.log(error);
        });        
        this.setState({
            products
        });
    }

    render(){
        const {products} = this.state;
        return products ? 
        <ProductList products={products}></ProductList> :
        <h1>Loading...</h1>;
    }
}

export default ProductsPage;