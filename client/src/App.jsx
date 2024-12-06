import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import DashboardProducts from './pages/dashboard/DashboardProducts';
import AddProduct from './pages/dashboard/AddProduct';
import About from './pages/About';
import Footer from './components/Footer';
function App() {
  return (
    <main className="mx-auto rounded-md">
      <div className="max-w-screen-3xl mx-auto">
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/dashboard/products" element={<DashboardProducts />} />
          <Route path="/dashboard/add-product" element={<AddProduct />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* Protected Routes  */}

          {/* <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route> */}
          {/* Nested Dashboard Routes */}
          {/* <Route path="overview" element={<Overview />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route> */}
          {/* Catch-all Route for 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer/>
      </div>
    </main>
  );
}

export default App;
