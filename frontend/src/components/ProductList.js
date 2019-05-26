import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Product from './Product';

const ProductList = ({products}) => (
    <ul className="products">
        {
            products.map(product => (
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <Product product={product} />
                    </Link>
                </li>
            ))
        }
    </ul>
);


ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })).isRequired
};


export default ProductList;