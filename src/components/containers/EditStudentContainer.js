import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk } from "../../store/thunks";
import EditStudentView from "../views/EditStudentView";
import { Redirect } from "react-router-dom";

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      redirectId: null,
    };
  }

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const updatedStudent = {
      id: this.props.student.id,
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      imageUrl: event.target.imageUrl.value,
      gpa: event.target.gpa.value,
      campusId: event.target.campusId.value
    };

    await this.props.editStudent(updatedStudent);

    this.setState({ redirect: true, redirectId: updatedStudent.id });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    return (
      <EditStudentView
        student={this.props.student}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapState = (state) => ({
  student: state.student,
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  editStudent: (student) => dispatch(editStudentThunk(student)),
});

export default connect(mapState, mapDispatch)(EditStudentContainer);
