import React from 'react';

const Product = ({ product }) => (
    <section className="Product-listing">
        <h3 className="name">{product.title}</h3>
        <section>
            <figure>
                <img src={product.url} alt={product.title} />
            </figure>
            <p>R${product.price}</p>
        </section>
    </section>
);

export default Product;