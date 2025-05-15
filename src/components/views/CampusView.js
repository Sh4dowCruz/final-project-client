/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus, deleteCampus } = props;
  
  // Render a single Campus view with list of its students
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1 style={{ color: "#11153e", fontSize: "36px", marginBottom: "20px" }}>
        {campus.name}
      </h1>

      {campus.imageURL && (
        <img
          src={campus.imageURL}
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
        <p style={{ fontSize: "16px", marginTop: "30px" }}>
          There are no students enrolled currently.
        </p>
      ) : (
        <div style={{ marginTop: "30px" }}>
          <h3>Students Enrolled:</h3>
          {campus.students.map((student) => (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                {student.firstname} {student.lastname}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CampusView;