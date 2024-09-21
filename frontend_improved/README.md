
# Issue Tracker Frontend

This is the frontend for the Issue Tracker application, built using **React**, **Vite**, and **Tailwind CSS**. It provides a user interface to interact with the backend API to manage issues through CRUD (Create, Read, Update, Delete) operations.

## Features

- View all issues.
- Create a new issue.
- Edit an existing issue.
- Delete an issue.
- Responsive design using Tailwind CSS.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast development build tool for modern web projects.
- **Axios**: Promise-based HTTP client for interacting with the backend API.
- **Tailwind CSS**: Utility-first CSS framework for styling.
  
## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14+)
- [NPM](https://www.npmjs.com/) (Node Package Manager)

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/issue-tracker-frontend.git
   cd issue-tracker-frontend
   ```

2. **Install dependencies**:
   Run the following command to install all required Node.js packages:
   ```bash
   npm install
   ```

3. **Configure Backend API URL**:
   Make sure your backend is running on `http://localhost:3001` (or adjust accordingly if it runs on a different URL or port).
   
   If needed, you can update the backend API URL in `src/App.jsx`:

   ```js
   const API_URL = "http://localhost:3001";  // Replace with your backend URL if necessary
   ```

4. **Start the frontend development server**:
   Run the following command to start the Vite development server:
   ```bash
   npm run dev
   ```

   The application should now be running on `http://localhost:3000`.

5. **Building for Production**:
   To create an optimized build for production, run:
   ```bash
   npm run build
   ```

   This will generate a `dist/` directory with the optimized static files, which can be deployed to any static web hosting service.

## Folder Structure

```plaintext
.
├── public/                 # Public assets and index.html
├── src/                    # Source code folder
│   ├── App.jsx             # Main component with CRUD functionality
│   ├── index.jsx           # React DOM rendering
│   ├── main.jsx            # Main application entry point
│   └── styles/             # Tailwind and custom styles
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # Node.js project metadata and dependencies
└── vite.config.js          # Vite configuration
```

## Tailwind CSS Setup

This project is styled using **Tailwind CSS**. The configuration can be found in the `tailwind.config.js` file. The necessary Tailwind imports are added in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

For more information on customizing Tailwind, refer to the [Tailwind CSS documentation](https://tailwindcss.com/).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode using Vite. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `dist` folder. It bundles the React app into optimized static files.

### `npm run preview`

Serves the production build locally. This is useful for testing the production build before deployment.

## API Endpoints

The frontend interacts with the following backend API endpoints:

1. **Get All Issues**: `GET /issues`
2. **Get Issue by ID**: `GET /issues/:id`
3. **Create Issue**: `POST /issues`
4. **Update Issue**: `PUT /issues/:id`
5. **Delete Issue**: `DELETE /issues/:id`

Make sure the backend is running, and these endpoints are available to use the frontend properly.

## Running the App with Docker (Optional)

To run the frontend with Docker, you can build and run a Docker container:

1. **Build the Docker image**:
   ```bash
   docker build -t issue-tracker-frontend .
   ```

2. **Run the Docker container**:
   ```bash
   docker run -p 3000:3000 issue-tracker-frontend
   ```

The frontend will be accessible at `http://localhost:3000`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

### Key Sections:

- **Features**: Describes what the frontend can do.
- **Technologies Used**: Lists the main tools and libraries used.
- **Setup and Installation**: Step-by-step guide for setting up and running the frontend locally.
- **Folder Structure**: Describes the structure of the project for easier navigation.
- **Tailwind CSS Setup**: Explains where the Tailwind CSS configurations are set up.
- **Available Scripts**: Lists commands for development, production, and preview modes.
- **API Endpoints**: Lists the backend API endpoints used in the frontend.
- **Running with Docker**: Optional section for running the frontend in a Docker container.

This `README.md` provides clear instructions for setting up, running, and deploying the frontend application.