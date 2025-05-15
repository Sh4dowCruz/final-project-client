/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const { allCampuses } = props;

  if (!allCampuses.length) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>There are no campuses.</h2>
        <Link to="/">
          <button>Add New Campus</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#dbeaf1", padding: "30px" }}>
      <h1 style={{ color: "#1c2372", textAlign: "center" }}>All Campuses</h1>

      {allCampuses.map((campus) => (
        <div
          key={campus.id}
          style={{
            backgroundColor: "white",
            padding: "20px",
            margin: "20px auto",
            borderRadius: "10px",
            width: "500px",
            textAlign: "center",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>
            <Link to={`/campus/${campus.id}`} style={{ color: "#2e087b", textDecoration: "underline" }}>
              {campus.name}
            </Link>
          </h2>

          <h4>Campus ID: {campus.id}</h4>

          {campus.imageUrl && (
            <img
              src={campus.imageUrl}
              alt="campus"
              width="300"
              height="180"
              style={{ borderRadius: "6px", margin: "10px 0" }}
            />
          )}

          <hr />
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/newcampus">
          <button>Add New Campus</button>
        </Link>
      </div>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;