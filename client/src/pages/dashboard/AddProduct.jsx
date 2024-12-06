import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import apiClient from '../../config/axiosConfig';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    location: '',
    image: null,
    expected_quantity: '',
    expected_produce_month: '',
    description: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('expected_quantity', formData.expected_quantity);
      formDataToSend.append('expected_produce_month', formData.expected_produce_month);
      formDataToSend.append('description', formData.description);

      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const res = await apiClient.post('/add-products',formDataToSend);

      if (!res.ok) {
        throw new Error(`Failed to add product: ${res.statusText}`);
      }

      const data = await res.json();
      console.log('Product added successfully:', data);

      // Reset form on successful submission
      setFormData({
        name: '',
        price: '',
        location: '',
        image: null,
        expected_quantity: '',
        expected_produce_month: '',
        description: ''
      });
      alert('Product added successfully!');
    } catch (err) {
      console.error('Error adding product:', err);
      setError(err.message || 'Something went wrong!');
    }
  };

  return (
    <div className="grid grid-cols-[1fr_3fr]">
      <div>
        <Sidebar />
      </div>

      <div className='p-5'>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">পণ্যে যোগ করুন</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Product Name */}
            <div>
              <label htmlFor="name" className="block font-medium">
                পণ্যের নাম
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="পণ্যের নাম লিখুন"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Product Price */}
            <div>
              <label htmlFor="price" className="block font-medium">
                মূল্য 
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="মূল্য লিখুন"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Product Location */}
            <div>
              <label htmlFor="location" className="block font-medium">
                অবস্থান
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="অবস্থান লিখুন"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Expected Quantity */}
            <div>
              <label htmlFor="expected_quantity" className="block font-medium">
                প্রত্যাশিত পরিমাণ
              </label>
              <input
                type="number"
                id="expected_quantity"
                name="expected_quantity"
                value={formData.expected_quantity}
                onChange={handleChange}
                placeholder="প্রত্যাশিত পরিমাণ লিখুন"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Expected Produce Month */}
            <div>
              <label htmlFor="expected_produce_month" className="block font-medium">
                প্রত্যাশিত উৎপাদন মাস
              </label>
              <input
                type="month"
                id="expected_produce_month"
                name="expected_produce_month"
                value={formData.expected_produce_month}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Product Description */}
            <div>
              <label htmlFor="description" className="block font-medium">
                বর্ণনা
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="পণ্যের বর্ণনা লিখুন"
                className="textarea textarea-bordered w-full"
                required
              />
            </div>

            {/* Product Image */}
            <div>
              <label htmlFor="image" className="block font-medium">
                ছবি আপলোড করুন
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="file-input file-input-bordered w-full"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full">
              পণ্য যোগ করুন
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
