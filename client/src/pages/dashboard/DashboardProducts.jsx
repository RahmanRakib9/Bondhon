import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import data from '../../../data';
import ProductCard from '../../components/ProductCard';
import { AuthContext } from '../../contexts/AuthContext';
import apiClient from '../../config/axiosConfig';

function DashboardProducts() {
  const {authData} = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get(`/products/${authData._id}`);
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
    <div className="grid grid-cols-[1fr_3fr]">
      <div>
        <Sidebar />
      </div>

      <div className='p-5'>
          <h2 className="text-2xl font-bold mb-4">আপনার সকল পণ্যে </h2>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
          {products.map(item => (
            <ProductCard productData={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardProducts;
