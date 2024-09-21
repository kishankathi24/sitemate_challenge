# Issue Tracker Backend

This is the backend server for the Issue Tracker application built using **Node.js**, **Express**, and **MySQL**. It provides RESTful API endpoints for performing CRUD (Create, Read, Update, Delete) operations on issues.

## Features

- Fetch all issues.
- Fetch a specific issue by ID.
- Create a new issue.
- Update an existing issue.
- Delete an issue.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for building APIs.
- **MySQL**: Relational database used for storing issue data.
- **CORS**: Middleware to allow cross-origin requests.
- **MySQL2**: MySQL client for Node.js to interact with the database.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14+)
- [MySQL](https://www.mysql.com/)

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/issue-tracker-backend.git
   cd issue-tracker-backend
   ```

2. **Install dependencies**:
   Run the following command to install all required Node.js packages:
   ```bash
   npm install
   ```

3. **Configure MySQL**:
   - Make sure MySQL is installed and running.
   - Create a database called `sitemate_challenge_db` (or modify the `database` property in the connection settings if you want to use a different database name).
   - Create the `issues` table and populate it with dummy data by running the provided SQL script (`dummy_data.sql`).

   **Example:**
   ```bash
   mysql -u root -p sitemate_challenge_db < dummy_data.sql
   ```

4. **Update Database Credentials**:
   If your MySQL credentials are different, update them in `index.js`:

   ```js
   const database = mysql.createConnection({
     host: "localhost",
     user: "your-username",  // e.g., 'root'
     password: "your-password",  // e.g., 'root'
     database: "sitemate_challenge_db",  // Ensure this matches your DB name
   });
   ```

5. **Start the server**:
   Run the following command to start the Express server:
   ```bash
   npm start
   ```

   The server will start on port 3001 by default (you can change the `PORT` constant in the code).

6. **Verify the server is running**:
   You should see the following message in the console:
   ```
   Server is running on port 3001
   ```

## API Endpoints

### 1. Get All Issues
- **URL**: `/issues`
- **Method**: `GET`
- **Description**: Fetches all the issues from the database.
- **Response**: Array of issue objects.

### 2. Get a Specific Issue by ID
- **URL**: `/issues/:id`
- **Method**: `GET`
- **Description**: Fetches a specific issue by its ID.
- **Response**: Issue object or `404` if the issue is not found.

### 3. Create a New Issue
- **URL**: `/issues`
- **Method**: `POST`
- **Body Parameters**:
  - `title` (string): Title of the issue.
  - `description` (string): Description of the issue.
- **Response**: Newly created issue object.

### 4. Update an Issue
- **URL**: `/issues/:id`
- **Method**: `PUT`
- **Body Parameters**:
  - `title` (string): Updated title of the issue.
  - `description` (string): Updated description of the issue.
- **Response**: Updated issue object or `404` if the issue is not found.

### 5. Delete an Issue
- **URL**: `/issues/:id`
- **Method**: `DELETE`
- **Description**: Deletes an issue by its ID.
- **Response**: ID of the deleted issue or `404` if the issue is not found.

## Database Schema

The `issues` table schema:

```sql
CREATE TABLE issues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Running the App with Docker (Optional)

If you'd like to run the application with Docker, here are the steps:

1. **Build the Docker image**:
   ```bash
   docker build -t issue-tracker-backend .
   ```

2. **Run the Docker container**:
   ```bash
   docker run --name sitemate_challenge_db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_PASSWORD=root -e MYSQL_DATABASE=sitemate_challenge_db -p 3306:3306 -d mysql:8.3.0 
   ```

### Key Sections:

- **Features**: Describes the capabilities of the backend.
- **Technologies Used**: Lists the main tools and libraries used.
- **Setup and Installation**: Step-by-step guide to set up and run the project.
- **API Endpoints**: Lists the available API endpoints and their usage.
- **Database Schema**: Describes the structure of the `issues` table.
- **Running with Docker**: Optional section for users familiar with Docker. You can add this if you want users to have the option of containerizing the app.

This `README.md` file is designed to be comprehensive and easy to follow for developers setting up the project for the first time.