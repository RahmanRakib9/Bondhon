import data from '../../data';
import ProductCard from '../components/ProductCard';

function Products() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-3 gap-5 bg-white my-11">
      {data.map(item => (
        <ProductCard productData={item} key={item.id} />
      ))}
    </div>
  );
}

export default Products;
