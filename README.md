# Node.js MongoDB Inventory System

A robust, secure Inventory Management API built with **Node.js**, **Express**, and **MongoDB**. This system features **JWT Authentication** to protect sensitive operations and implements full **CRUD** functionality for managing inventory items.

## 🚀 Features

-   **User Authentication**: Secure Registration and Login using BCrypt password hashing and JSON Web Tokens (JWT).
-   **Inventory Management**: Full Create, Read, Update, Delete (CRUD) operations for inventory items.
-   **Protected Routes**: Middleware ensures only authenticated users can modify inventory data.
-   **Database**: NoSQL data modeling with Mongoose (MongoDB).
-   **MVC Architecture**: Clean separation of concerns (Models, Controllers, Routes).

## 🛠️ Tech Stack

-   **Runtime**: Node.js
-   **Framework**: Express.js
-   **Database**: MongoDB (Mongoose ODM)
-   **Authentication**: JSON Web Token (JWT) & BCrypt.js

## ⚙️ Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Sharmasheeno/nodejs-mongodb-inventory-system.git
    cd nodejs-mongodb-inventory-system
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Configuration**
    Create a `.env` file in the root directory:
    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/inventory_db
    JWT_SECRET=your_super_secret_key_change_this
    ```

4.  **Run the Application**
    ```bash
    # Development (Auto-restart)
    npm run dev

    # Production
    npm start
    ```

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description | Body |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user | `{ "username": "...", "password": "..." }` |
| `POST` | `/api/auth/login` | Login & receive Token | `{ "username": "...", "password": "..." }` |

### Inventory Actions
*Note: Write operations require `Authorization` header: `<token>`*

| Method | Endpoint | Description | Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/inventory` | List all items | - |
| `GET` | `/api/inventory/:id` | Get single item | - |
| `POST` | `/api/inventory` | **(Auth)** Add item | `{ "name": "...", "quantity": 10, "price": 99.99, "category": "..." }` |
| `PUT` | `/api/inventory/:id` | **(Auth)** Update item | `{ "quantity": 15 ... }` |
| `DELETE` | `/api/inventory/:id` | **(Auth)** Delete item | - |

## 🤝 Contributing
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
