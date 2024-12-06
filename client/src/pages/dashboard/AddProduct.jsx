import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const [error, setError] = useState(null);

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      // For file input
      setFormData({ ...formData, image: files[0] });
    } else {
      // For text inputs
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('description', formData.description);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const res = await fetch('https://example.com/api/products', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!res.ok) {
        throw new Error(`Failed to add product: ${res.statusText}`);
      }

      const data = await res.json();
      console.log('Product added successfully:', data);

      // Reset form on successful submission
      setFormData({ name: '', price: '', description: '', image: null });
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

      <div>
        {' '}
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Product Name */}
            <div>
              <label htmlFor="name" className="block font-medium">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Product Price */}
            <div>
              <label htmlFor="price" className="block font-medium">
                Price (USD)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Product Description */}
            <div>
              <label htmlFor="description" className="block font-medium">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter product description"
                className="textarea textarea-bordered w-full"
                required
              />
            </div>

            {/* Product Image */}
            <div>
              <label htmlFor="image" className="block font-medium">
                Upload Image
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
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
