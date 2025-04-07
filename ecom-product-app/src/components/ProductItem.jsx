function ProductItem ({product}) {
    return (
      <div className="product-item" key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    );
  }
  
  export default ProductItem;