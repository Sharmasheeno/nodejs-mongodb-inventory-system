# Inventory Management System

A Node.js RESTful API for managing inventory, featuring MongoDB integration and JWT Authentication.

## Features
- **Authentication**: User registration and login with JWT.
- **Inventory CRUD**: Create, Read, Update, Delete inventory items.
- **Secure**: Password hashing (bcrypt) and protected routes.

## Tech Stack
- Node.js & Express
- MongoDB & Mongoose
- JSON Web Token (JWT)

## Setup

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Configuration**
    - Ensure MongoDB is running on `mongodb://localhost:27017`
    - Create a `.env` file (if not exists) with:
      ```
      PORT=5000
      MONGO_URI=mongodb://localhost:27017/inventory_db
      JWT_SECRET=your_jwt_secret
      ```

3.  **Run API**
    ```bash
    npm run dev
    ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user (`username`, `password`)
- `POST /api/auth/login` - Login and get token (`username`, `password`)

### Inventory (Requires Token for Write Ops)
- `GET /api/inventory` - List all items
- `GET /api/inventory/:id` - Get item details
- `POST /api/inventory` - Add item (Header: `x-auth-token: <token>`)
- `PUT /api/inventory/:id` - Update item
- `DELETE /api/inventory/:id` - Delete item
