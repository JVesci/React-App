import ProductItem from './ProductItem.jsx';

function ProductList ({products}) {
  return (
    <div className="products-container">
      <h1>Product List</h1>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;