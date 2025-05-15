/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div style={{ backgroundColor: "#dbeaf1", padding: "30px" }}>
      <h1 style={{ color: "#1c2372", textAlign: "center" }}>All Students</h1>

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            backgroundColor: "white",
            padding: "20px",
            margin: "20px auto",
            borderRadius: "10px",
            width: "500px",
            textAlign: "center",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"
          }}
        >
          <h2>
            <Link to={`/student/${student.id}`} style={{ color: "#2e087b", textDecoration: "underline" }}>
              {student.firstname} {student.lastname}
            </Link>
          </h2>

          <img
            src={student.imageUrl}
            alt="student"
            width="120"
            height="120"
            style={{ borderRadius: "50%", margin: "10px 0" }}
          />
          <p>
            <strong>Attends:</strong>{" "}
            <Link to={`/campus/${student.campusId}`}>
              {student.campus?.name}
            </Link>
          </p>
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/newstudent">
                    <button
            style={{
              backgroundColor: "#444",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              border: "none",
              borderRadius: "6px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              cursor: "pointer"
            }}
          >
            Add New Student
          </button>
        </Link>
      </div>
    </div>
  );
};


export default AllStudentsView;