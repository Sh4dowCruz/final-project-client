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
            backgroundColor: "#f4f4f4",
            color: "#111",
            border: "1px solid #444",
            borderRadius: "6px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            cursor: "pointer",
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
            border: "1px solid #444",
            borderRadius: "6px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            cursor: "pointer",
          }}
        >
          Delete Campus
        </button>
      </div>

      {campus.students.length === 0 ? (
        <p>There are no students enrolled currently.</p>
      ) : (
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
            Students Enrolled: {campus.students?.length || 0}
          </h2>
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
                        backgroundColor: "#999",
                        padding: "10px 20px",
                        marginLeft: "15px",
                        borderRadius: "8px",
                        border: "2px solid black",
                        fontWeight: "bold",
                        cursor: "pointer",
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
        <button
          onClick={() => (window.location.href = `/newstudent`)}
          style={{
            backgroundColor: "#ccc",
            padding: "15px 30px",
            marginTop: "30px",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Enroll New Student
        </button>
      </div>
    </div>
  );
};

export default CampusView;