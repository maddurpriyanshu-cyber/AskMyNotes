
function StudentCard({ employees }) {
  return (
    <div className="student-card">
      <h1>Employee Profile Cards</h1>

      {employees.map((employee) => (
        <div
          key={employee.id}
          style={{
            background: "black",
            color: "teal",
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h2>{employee.name}</h2>
          <p>Employee ID: {employee.id}</p>
          <p>Department: {employee.department}</p>
          <p>Salary: {employee.salary}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentCard;
