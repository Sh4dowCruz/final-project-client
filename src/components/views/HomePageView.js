/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { Link } from "react-router-dom";

const HomePageView = () => {
  return (
    <div style={{ backgroundColor: "#dbeaf1", padding: "30px" }}>
      <h1 style={{ textAlign: "center", color: "#1c2372" }}>Home Page</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        {/* View Campuses Section */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "400px",
            textAlign: "center",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ color: "#1c2372" }}>View Campuses</h2>
          <Link to="/campuses">
            <button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#444",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              Click Here!
            </button>
          </Link>
          <img
            src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Campus"
            width="300"
            height="180"
            style={{ borderRadius: "6px", marginTop: "15px" }}
          />
        </div>

        {/* View Students Section */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "400px",
            textAlign: "center",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ color: "#1c2372" }}>View Students</h2>
          <Link to="/students">
            <button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#444",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              Click Here!
            </button>
          </Link>
          <img
            src="https://www.insidehighered.com/sites/default/files/2024-02/GettyImages-1072191138.jpg"
            alt="Students"
            width="300"
            height="180"
            style={{ borderRadius: "6px", marginTop: "15px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageView;