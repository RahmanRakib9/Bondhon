import Home from './pages/Home';
import { Route, Router, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}

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
      </Router>
    </>
  );
}

export default App;
