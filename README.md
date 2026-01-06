# Node.js Express & MySQL2 MVC CRUD

A robust RESTful API building a Product Management System. Implemented using Node.js, Express, and MySQL2, featuring a strict MVC architecture, connection pooling, and secure prepared statements.

## Requirements
- Node.js installed
- MySQL Server installed and running

## Setup

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Database Configuration**
    - Create a database named `crud_db` in your MySQL server.
    - Run the SQL commands in `schema.sql` to create the `products` table.
    - **IMPORTANT**: Open the `.env` file and update `DB_PASSWORD` (and other fields if necessary) with your MySQL credentials.

3.  **Run the Application**
    - For development (with auto-restart):
      ```bash
      npm run dev
      ```
    - For production:
      ```bash
      npm start
      ```

## API Endpoints (`/api/products`)

| Method | Endpoint | Description | Body Params |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Get all products | None |
| `GET` | `/:id` | Get product by ID | None |
| `POST` | `/` | Create a new product | `name`, `price`, `description` (optional) |
| `PUT` | `/:id` | Update a product | `name`, `price`, `description` |
| `DELETE` | `/:id` | Delete a product | None |
