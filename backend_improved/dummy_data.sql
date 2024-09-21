-- Drop table if it already exists
DROP TABLE IF EXISTS issues;

-- Create the issues table
CREATE TABLE issues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert dummy data into issues table
INSERT INTO issues (title, description) VALUES
('Issue with login', 'User cannot log in with correct credentials.'),
('UI Bug on Dashboard', 'The dashboard is misaligned on mobile devices.'),
('Performance issue', 'The website takes more than 5 seconds to load the homepage.'),
('Database connection error', 'The backend server sometimes fails to connect to the MySQL database.'),
('API Timeout', 'Fetching data from the API results in a timeout after 30 seconds.'),
('File upload issue', 'Users report that large files fail to upload.'),
('Broken links on homepage', 'Several links on the homepage lead to 404 pages.'),
('Error in payment gateway', 'The payment gateway returns an error when processing transactions.'),
('Missing user avatars', 'User avatars are not displayed in the user profile section.'),
('Search functionality broken', 'The search bar does not return any results, even for existing items.');

-- Query the data to check
SELECT * FROM issues;