import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [ListOfIssues, setListOfIssues] = useState([]);

  const [Title, setTitle] = useState(null);
  const [Description, setDescription] = useState(null);


  async function GetListOfIssues() {
    try {
      const response = await axios.get("http://localhost:3001/issues");
      console.log("List of Issues: ", response.data);
      setListOfIssues(response.data);
    } catch (error) {
      console.error("Error fetching issues: ", error);
    }
  }

  async function SubmitNewIssue () {
    try {
      const response = axios.post('http://localhost:3001/createissues', {

      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    GetListOfIssues();
  }, []);

  return (
    <div className="flex flex-col w-full p-4">
      <div className="w-full bg-yellow-200">
        <p className="font-bold">List of Issues</p>
        {ListOfIssues.length > 0 ? (
          <div>
            {ListOfIssues.map((issue) => (
              <div>
                <p key={issue.id}>Title: {issue.title}</p>
                <p key={issue.id}>Title: {issue.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No Issues</p>
        )}
      </div>
      <div className="w-full bg-green-200">
        <p className="font-bold">Create Issue</p>
        <div>
          <label htmlFor="title">New Issue Title</label>
          <input name="title" id="title" type="text"></input>
          <label htmlFor="Description">New Issue Description</label>
          <textarea name="Description" id="Description"></textarea>
          <button onClick={}>Submit Issue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
