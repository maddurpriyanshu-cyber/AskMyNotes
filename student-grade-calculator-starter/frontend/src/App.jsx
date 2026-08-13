import { useState } from "react";

function App() {
  const [name,setName]=useState("");
  const [marks,setMarks]=useState("");
  const [student,setStudent]=useState(null);

  async function calculate(){

    // TODO 1: Call POST http://localhost:8000/calculate using fetch()
    const response = await fetch("http://localhost:8000/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, marks })
    });

    // TODO 2: Convert the response into JSON
    const data = await response.json();

    // TODO 3: Store the response using setStudent()
    setStudent(data);
  }

  return (
    <div>
      <h1>Student Grade Calculator</h1>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e)=>setMarks(e.target.value)}
      />

      <br/><br/>

      <button onClick={calculate}>Calculate Grade</button>

      <br/><br/>

      {student && (
        <>
          <p>Name: {student.name}</p>
          <p>Marks: {student.marks}</p>
          <p>Grade: {student.grade}</p>
          <p>Result: {student.result}</p>
        </>
      )}
    </div>
  );
}
export default App;
