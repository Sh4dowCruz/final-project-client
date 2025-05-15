import React from "react";

const EditCampusView = ({ campus, handleSubmit }) => {
  return (
    <div style={{ backgroundColor: "#dbeaf1", padding: "40px", textAlign: "center" }}>
      <h2 style={{ color: "#1c2372", fontSize: "32px" }}>Edit Campus</h2>
      <h3 style={{ color: "#1c2372" }}>{campus.name}</h3>

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
          <label>Name:</label><br />
          <input type="text" name="name" defaultValue={campus.name} required />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Address:</label><br />
          <input type="text" name="address" defaultValue={campus.address} required />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Description:</label><br />
          <textarea name="description" defaultValue={campus.description} rows="3" style={{ width: "100%" }} required/>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Image URL:</label><br />
          <input type="text" name="imageUrl" defaultValue={campus.imageUrl} required/>
        </div>

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

export default EditCampusView;