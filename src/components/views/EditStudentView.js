import React from "react";

const EditStudentView = ({ student, handleSubmit }) => {
  return (
    <div style={{ backgroundColor: "#dbeaf1", padding: "40px", textAlign: "center" }}>
      <h2 style={{ color: "#1c2372", fontSize: "32px" }}>Edit Student</h2>
      <h3 style={{ color: "#1c2372" }}>{student.firstname} {student.lastname}</h3>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#d3d3d3",
          padding: "30px",
          maxWidth: "500px",
          margin: "30px auto",
          borderRadius: "6px",
          fontWeight: "bold",
          color: "#11153e",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label>First Name:</label><br />
          <input type="text" name="firstname" defaultValue={student.firstname} required />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Last Name:</label><br />
          <input type="text" name="lastname" defaultValue={student.lastname} required />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label><br />
          <input type="email" name="email" defaultValue={student.email} required />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Image URL:</label><br />
          <input type="text" name="imageUrl" defaultValue={student.imageUrl} required/>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>GPA:</label><br />
          <input type="number" step="0.1" min="0" max="4" name="gpa" defaultValue={student.gpa} required/>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Campus ID:</label><br />
            <input
                type="number"
                name="campusId"
                defaultValue={student.campusId} 
            />
        </div>

        <p style={{ fontSize: "13px", color: "#555", marginTop: "4px" }}>
        Refer to the <a href="/campuses" style={{ color: "#1c2372", textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">All Campuses</a> tab to find Campus IDs.
        </p>

        <button
          type="submit"
          style={{
            backgroundColor: "#444",
            color: "white",
            border: "none",
            padding: "10px 25px",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default EditStudentView;
