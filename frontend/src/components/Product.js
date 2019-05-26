import React from 'react';

const Product = ({ Product }) => (
    <section className="Product-listing">
        <h3 className="name">{Product.title}</h3>
        <section>
            <figure>
                <img src={Product.url} alt={Product.title} />
            </figure>
            <p>{Product.price}</p>
        </section>
    </section>
);

export default Product;