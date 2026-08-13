function StudentCard({ students }) {
  return (
    <div className="student-card">
      {students.map((student) => (
        <div
          key={student.name}
          style={{
            border: "1px solid red",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h2>{student.name}</h2>
          <p>Course: {student.course}</p>
          <p>Year: {student.year}</p>
          <p>Skill: {student.skill}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentCard;
