import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSingleProduct } from '../API';
import Product from '../components/Product';

export class ProductPage extends Component{
    state = {
        product: null
    };

   static propTypes = {
       match: PropTypes.shape({
           params: PropTypes.shape({
               id: PropTypes.string.isRequired
           }).isRequired
       }).isRequired
   };

    componentDidMount = async () => {
        const {id} = this.props.match.params;
        const product = await getSingleProduct(id).catch(error => {
            console.log(error);
        });        
        this.setState({
            product
        })
    }

    render(){
        const { product } = this.state;
        return product
        ? <Product product={product} /> 
        : <h1>Loading...</h1>;
    }
}

export default ProductPage;