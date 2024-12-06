import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import apiClient from '../config/axiosConfig';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get('/products');
        console.log(response)
        setProducts(response.data.products);  
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-white my-11">
      {products?.map(item => (
        <ProductCard productData={item} key={item.id} />
      ))}
    </div>
  );
}

export default Products;
