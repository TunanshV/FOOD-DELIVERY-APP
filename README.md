# Potato

Potato is a full-stack food ordering application with a customer-facing storefront, a shopping cart, secure auth, payment checkout, and an admin dashboard for managing food items and orders.

## Overview

This project is split into three parts:

- Frontend: the customer experience for browsing food, adding items to the cart, placing orders, and completing payment
- Admin: a management panel for adding, listing, and removing food items as well as viewing orders
- Backend: an Express + MongoDB API that handles authentication, cart operations, food management, and order processing

## Features

### Customer side

- Browse food items by category
- Add items to cart
- Register and log in securely
- Place orders with address details
- Complete payments through Stripe checkout
- Verify order status after payment

### Admin side

- Add new food items with image upload
- List all food items
- Remove food items from the menu
- View incoming orders

## Tech Stack

- React + Vite for the frontend and admin app
- React Router for navigation
- Axios for API calls
- Node.js + Express for the backend
- MongoDB + Mongoose for data storage
- JWT + bcrypt for authentication
- Multer for image uploads
- Stripe for checkout payments

## Project Structure

```text
backend/
  controllers/
  middleware/
  models/
  routes/
  uploads/
  server.js

frontend/
  src/
  package.json

admin/
  src/
  package.json
```

## Prerequisites

Make sure you have the following installed:

- Node.js (v18 or higher recommended)
- npm
- MongoDB database access

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repo-url>
cd POTATO
```

### 2. Install dependencies

Run this in each folder:

```bash
cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install
```

### 3. Configure environment variables

In the backend folder, create or update the .env file with:

```env
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

The backend is also configured to connect to MongoDB in [backend/config/db.js](backend/config/db.js). Update the connection string if needed for your database.

### 4. Start the applications

Start the backend:

```bash
cd backend
npm run server
```

Start the customer frontend:

```bash
cd frontend
npm run dev
```

Start the admin panel:

```bash
cd admin
npm run dev
```

### Default URLs

- Frontend: http://localhost:5173
- Admin: http://localhost:5174 (or the next available Vite port)
- Backend API: http://localhost:4000

## API Overview

The backend exposes these main routes:

- User auth
  - POST /api/user/register
  - POST /api/user/login
- Food items
  - GET /api/food/list
  - POST /api/food/add
  - POST /api/food/remove
- Cart
  - POST /api/cart/add
  - POST /api/cart/remove
  - POST /api/cart/get
- Orders
  - POST /api/order/place
  - POST /api/order/verify

## Notes

- Food images are stored in [backend/uploads](backend/uploads)
- The frontend expects the backend API to be available at http://localhost:4000
- For Stripe checkout to work, a valid Stripe secret key must be configured

## License

This project is for educational and development purposes.
