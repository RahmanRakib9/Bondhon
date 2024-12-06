import { IoLocationSharp } from 'react-icons/io5';

function ProductCard(props) {
  const { name, img, price, location, description } = props.productData;

  return (
    <div className="card card-compact w-full p-3 shadow-md text-white border-2 border-gray-200 cursor-pointer">
      <figure className="">
        <img src={img} alt={name} className="w-2/3 h-52 object-contain !rounded-md overflow-hidden" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-textAccent">{name}</h2>
        <p className="text-lg font-semibold text-textSecondary">
          ৳ {price} <span className="text-sm">প্রতি কেজি</span>
        </p>
        <p className="text-sm flex items-center text-textSecondary">
          <IoLocationSharp />
          {'  ' + location}
        </p>
        <p className="text-textSecondary">{description.length > 90 ? description.slice(0, 95) + '...' : description}</p>

        <div className="card-actions justify-end my-2">
          <button className="btn-primary">আরো দেখুন</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
