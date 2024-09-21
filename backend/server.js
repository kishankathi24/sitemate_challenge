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
    console.error("Error while connecting to Mysql", err);
    return;
  }
});

// CRUD
// print out all issues

app.get("/issues", (req, res) => {
  database.query("SELECT * from issues", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

app.post("/createissues", (req, res) => {
  const { title, description } = req.body;
  const query = `INSERT INTO issues (title, description) VALUES (?,?)`;
  database.query(query, [title, description], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    console.log("Successfully added data : ", {
      id: result.id,
      title,
      description,
    });

    res.status(201).json({
      id: result.id,
      title: title,
      description: description,
    });
  });
});

app.put("/issues/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const query = "UPDATE issues SET title = ?, description = ? WHERE id = ?";
  database.query(query, [title, description, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Issue not found" });
    }
    console.log("Updated issue:", { id, title, description });
    res.json({ id, title, description });
  });
});

app.delete("/issues/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM issues WHERE id = ?";

  database.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Issue not found" });
    }
    console.log("Deleted issue:", { id });
    res.json({ id });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${3001}`);
});
