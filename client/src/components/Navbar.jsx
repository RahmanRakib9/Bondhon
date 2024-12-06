import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Navbar() {
  const { authData } = useContext(AuthContext);
  const router = useNavigate();
  return (
    <div className="navbar  space-x-10 bg-[#80a573]">
      <div className="flex-1">
        <img
          className="h-14 object-contain"
          src="https://www.freeiconspng.com/thumbs/agriculture-icon-png/agricultural-sciences-icon-10.png"
          alt=""
        />
        <Link to={'/'} className="btn btn-ghost text-3xl text-textSecondary ">
          বন্ধন
        </Link>
      </div>
      <div className="mx-4">
        <Link to="/" className="text-textPrimary">
          হোম
        </Link>
      </div>
      <div className="mx-4">
        <Link to="/products" className="text-textPrimary">
          পণ্য দেখুন
        </Link>
      </div>
      <div className="mx-4">
        <Link to="/" className="text-textPrimary">
          আমাদের সর্ম্পকে জানুন
        </Link>
      </div>

      <div className="mx-4">
        <Link
          to="/signup"
          className="bg-[#97d139e7] text-green-900 py-1 px-4 rounded-full ring-2 ring-[#9dda3c]
        hover:bg-[#a0e2358e]"
        >
          একাউন্ট খুলুন
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator text-textPrimary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item bg-green-800 text-textPrimary">0</span>
            </div>
          </div>
          <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">0 Items</span>
              <span className="text-info">Subtotal: $0</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}

        {authData.user && (
          <div className="mx-4px">
            <div>{authData?.user?.name}</div>

            {authData.user.role === 'FARMER' && (
              <div>
                <button onClick={()=> router('/dashboard/products') } className="btn-primary">Dashboard</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
