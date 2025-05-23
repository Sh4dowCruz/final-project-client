/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  console.log("StudentView received:", props.student);
  const { student } = props;

  // Render a single Student view 
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <img
        src={student.imageUrl}
        alt="student"
        width="150"
        height="150"
        style={{ borderRadius: "50%" }}
      />
      <p><strong>First Name:</strong> {student.firstname}</p>
      <p><strong>Last Name:</strong> {student.lastname}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>GPA:</strong> {student.gpa}</p>
      <p><strong>Attends:</strong></p>
      {student.campus ? (
        <p><strong>Attends: <a href={`/campus/${student.campus.id}`}>{student.campus.name}</a></strong></p>
      ) : (
        <p><strong>Attends:</strong> Not enrolled in any campus</p>
    )}

      <button onClick={() => window.location.href = `/editstudent/${student.id}`}
        style={{
      padding: "10px 20px",
      marginRight: "15px",
      fontSize: "14px",
      backgroundColor: "#eee",
      border: "1px solid black",
      borderRadius: "6px",
      cursor: "pointer",
    }}
      >
        Edit Student Information
      </button>
      <button onClick={() => props.deleteStudent(student.id)}
        style={{
          padding: "10px 20px",
          fontSize: "14px",
          backgroundColor: "#444",
          color: "white",
          border: "1px solid #444",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Delete Student
      </button>
    </div>
  );
};

export default StudentView;