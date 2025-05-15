/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus, deleteCampus, unenrollStudent } = props;
  
  // Render a single Campus view with list of its students
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1 style={{ color: "#11153e", fontSize: "36px", marginBottom: "20px" }}>
        {campus.name}
      </h1>

      {campus.imageUrl && (
        <img
          src={campus.imageUrl}
          alt={campus.name}
          style={{ width: "300px", height: "180px", borderRadius: "8px" }}
        />
      )}

      <p style={{ fontSize: "18px", marginTop: "20px" }}>
        <strong>Address:</strong> {campus.address}
      </p>
      <p style={{ fontSize: "18px" }}>
        <strong>Description:</strong> {campus.description}
      </p>

      <div style={{ margin: "25px" }}>
        <button
          onClick={() => (window.location.href = `/editcampus/${campus.id}`)}
          style={{
            padding: "10px 20px",
            marginRight: "15px",
            fontSize: "14px",
            border: "1px solid black",
          }}
        >
          Edit Campus Information
        </button>

        <button
          onClick={() => deleteCampus(campus.id)}
          style={{
            padding: "10px 20px",
            fontSize: "14px",
            backgroundColor: "#444",
            color: "white",
            border: "none",
          }}
        >
          Delete Campus
        </button>
      </div>

      {campus.students.length === 0 ? (
        <p>There are no students enrolled currently.</p>
      ) : (
        <div>
          <h3>Students Enrolled:</h3>
          <table style={{ margin: "0 auto", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}>Student Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {campus.students.map((student) => (
                <tr key={student.id}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    <Link to={`/student/${student.id}`}>{student.firstname} {student.lastname}</Link>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      onClick={() => unenrollStudent(student.id)}
                      style={{
                        backgroundColor: "#ccc",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        fontWeight: "bold",
                        cursor: "pointer"
                      }}
                    >
                      Unenroll
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/newstudent">
          <button
            style={{
              backgroundColor: "#ddd",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Enroll New Student
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CampusView;