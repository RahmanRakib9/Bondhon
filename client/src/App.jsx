import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Signup from './pages/Signup';
function App() {
  return (
    <main className="mx-auto rounded-md">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* Protected Routes */}
          {/* <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            > */}
          {/* Nested Dashboard Routes */}
          {/* <Route path="overview" element={<Overview />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route> */}
          {/* Catch-all Route for 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </main>
  );
}

export default App;
