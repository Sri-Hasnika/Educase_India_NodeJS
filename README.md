# School Management API

This project implements a Node.js API using Express.js and MySQL to manage school data. It provides endpoints to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

## Prerequisites

- Node.js (v14 or higher)
- MySQL server
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd school-management-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root with the following variables:
   ```
   DB_HOST=localhost
   DB_USER=your_mysql_user
   DB_PASS=your_mysql_password
   DB_NAME=school_db
   PORT=3000
   ```

4. Set up the MySQL database:
   - Create a database named `school_db`.
   - Run the following SQL command to create the `schools` table:
     ```sql
     CREATE TABLE schools (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       address VARCHAR(255) NOT NULL,
       latitude FLOAT NOT NULL,
       longitude FLOAT NOT NULL
     );
     ```

## Running the Application

Start the server:
```bash
node app.js
```

Or, if you have nodemon installed:
```bash
npx nodemon app.js
```

The server will run on the port specified in your `.env` file (default: 3000).

## API Endpoints

### Add School
- **Endpoint:** `POST /addSchool`
- **Payload:**
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 40.7128,
    "longitude": -74.0060
  }
  ```
- **Response:** Returns the newly created school object with an `id`.

### List Schools
- **Endpoint:** `GET /listSchools`
- **Query Parameters:**
  - `latitude`: User's latitude (e.g., `40.7128`)
  - `longitude`: User's longitude (e.g., `-74.0060`)
- **Response:** Returns a list of schools sorted by proximity to the user's location.

## Postman Collection

A Postman collection is provided for testing the APIs. Import the collection into Postman and use the example requests to test the endpoints.

## Deployment

Deploy the application to a hosting service like Render, Railway, or a VPS. Ensure your MySQL database is accessible from your hosting environment.

## License

This project is licensed under the MIT License. 