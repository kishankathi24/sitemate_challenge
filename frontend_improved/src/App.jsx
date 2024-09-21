import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001";

const App = () => {
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState({ title: "", description: "" });
  const [editIssue, setEditIssue] = useState(null);

  // Fetch all issues on load
  const fetchIssues = async () => {
    try {
      const response = await axios.get(`${API_URL}/issues`);
      setIssues(response.data);
    } catch (err) {
      console.error("Error fetching issues:", err);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  const createIssue = async () => {
    try {
      await axios.post(`${API_URL}/createissues`, newIssue);
      setNewIssue({ title: "", description: "" });
      fetchIssues();
    } catch (err) {
      console.error("Error creating issue:", err);
    }
  };

  const updateIssue = async () => {
    try {
      await axios.put(`${API_URL}/issues/${editIssue.id}`, editIssue);
      setEditIssue(null);
      fetchIssues();
    } catch (err) {
      console.error("Error updating issue:", err);
    }
  };

  const deleteIssue = async (id) => {
    try {
      await axios.delete(`${API_URL}/issues/${id}`);
      fetchIssues();
    } catch (err) {
      console.error("Error deleting issue:", err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Issue Tracker</h1>

      {/* Form to create or edit an issue */}
      <div className="bg-gray-100 p-4 rounded shadow-md mb-8">
        <h2 className="text-2xl mb-4">
          {editIssue ? "Edit Issue" : "Create Issue"}
        </h2>
        <input
          type="text"
          placeholder="Title"
          className="border p-2 mb-4 w-full"
          value={editIssue ? editIssue.title : newIssue.title}
          onChange={(e) =>
            editIssue
              ? setEditIssue({ ...editIssue, title: e.target.value })
              : setNewIssue({ ...newIssue, title: e.target.value })
          }
        />
        <textarea
          placeholder="Description"
          className="border p-2 mb-4 w-full"
          value={editIssue ? editIssue.description : newIssue.description}
          onChange={(e) =>
            editIssue
              ? setEditIssue({ ...editIssue, description: e.target.value })
              : setNewIssue({ ...newIssue, description: e.target.value })
          }
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={editIssue ? updateIssue : createIssue}
        >
          {editIssue ? "Update Issue" : "Create Issue"}
        </button>
      </div>

      {/* Display issues */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {issues.map((issue) => (
          <div key={issue.id} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">{issue.title}</h3>
            <p className="mb-4">{issue.description}</p>
            <div className="flex justify-between">
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded"
                onClick={() => setEditIssue(issue)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => deleteIssue(issue.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
