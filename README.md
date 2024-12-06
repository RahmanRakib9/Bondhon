# Bondhon - Technical Details
Bondhon is a monorepo project that contains both the frontend and backend in a single repository. The frontend is built with React.js and TypeScript, while the backend is built with Node.js, Express.js, and TypeScript. The project aims to connect farmers directly with urban buyers to reduce middlemen and food wastage.

## Technology Stack
* Frontend:
  * React.js, TypeScript
* Backend
  * Node.js, Express.js, TypeScript
  * MongoDB (Mongoose)
  * JWT Authentication, bcrypt.js for password hashing
  * WeatherAPI integration for weather notifications

* Deployment:

  * FrontEnd[live url](https://lively-kataifi-005380.netlify.app/)
  * Backend[live url](https://bondhon-eight.vercel.app/)

# API Details
1. User Authentication
* Endpoint: `POST /api/auth/register`
* Endpoint: `POST /api/auth/login`
* Endpoint : `POST /api/products`
* Endpoint : `GET /api/products`
* Endpoint: `GET /api/products/seller/:sellerId`

# Seller (Farmer) Dashboard
The Seller Dashboard is a dedicated interface for farmers to manage their product listings. Farmers must register as a SELLER to access this dashboard.
## How to Access the Seller Dashboard:
* Register as a SELLER: During the registration process, ensure that you select `কৃষক` as your role.
* Login: After registering, login to your account and access the Seller Dashboard to manage your products.



