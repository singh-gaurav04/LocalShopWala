import React from 'react'

const ProductCategory = ({params}) => {
const products = [
    { id: 1, name: 'Product A', category: 'electronics' },
    { id: 2, name: 'Product B', category: 'fashion' },
    { id: 3, name: 'Product C', category: 'electronics' },
    { id: 4, name: 'Product D', category: 'fashion' },
];

const filteredProducts = products.filter(
    (product) => product.category === params['category-name']
);

return (
    <div>
        <h1>Products in Category: {params['category-name']}</h1>
        <ul>
            {filteredProducts.map((product) => (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    </div>
);
}

export default ProductCategory