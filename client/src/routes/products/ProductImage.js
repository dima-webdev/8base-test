import React from 'react';
import '../../index.css';

export const ProductImage = ({ imageUrl, filename }) => {
    return <img src={imageUrl} alt={filename} className="product-image" />
}

export default ProductImage;