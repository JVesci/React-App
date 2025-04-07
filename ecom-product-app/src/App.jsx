import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: '$999', description: 'A high-performance laptop for all your computing needs.' },
    { id: 2, name: 'Phone', price: '$499', description: 'A smartphone with the latest features and technology.' },
    { id: 3, name: 'Headphones', price: '$199', description: 'Noise-cancelling headphones for an immersive audio experience.' },
  ]);

  return (
    <>
    <ProductList products={products}/>
    </>
  )
}

export default App