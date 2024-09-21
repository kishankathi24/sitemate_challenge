const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(cors());

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sitemate_challenge_db",
});

database.connect((err) => {
  if (err) {
    console.error("Error while connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

const executeQuery = (res, query, params = []) => {
  database.query(query, params, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

app.get("/issues", (req, res) => {
  executeQuery(res, "SELECT * FROM issues");
});

app.get("/issues/:id", (req, res) => {
  const { id } = req.params;
  executeQuery(res, "SELECT * FROM issues WHERE id = ?", [id]);
});

app.post("/issues", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  const query = "INSERT INTO issues (title, description) VALUES (?,?)";
  database.query(query, [title, description], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      id: result.insertId,
      title,
      description,
    });
  });
});

app.put("/issues/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  const query = "UPDATE issues SET title = ?, description = ? WHERE id = ?";
  database.query(query, [title, description, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Issue not found" });
    }
    res.json({ id, title, description });
  });
});

app.delete("/issues/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM issues WHERE id = ?";

  database.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Issue not found" });
    }
    res.json({ id });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});