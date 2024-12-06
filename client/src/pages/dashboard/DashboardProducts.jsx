import React from 'react';
import Sidebar from '../../components/Sidebar';
import data from '../../../data';
import ProductCard from '../../components/ProductCard';

function DashboardProducts() {
  return (
    <div className="grid grid-cols-[1fr_3fr]">
      <div>
        <Sidebar />
      </div>

      <div className='p-5'>
          <h2 className="text-2xl font-bold mb-4">আপনার সকল পণ্যে </h2>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
          {data.map(item => (
            <ProductCard productData={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardProducts;
