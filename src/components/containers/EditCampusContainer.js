import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";
import EditCampusView from "../views/EditCampusView";
import { Redirect } from "react-router-dom";

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      redirectId: null,
    };
  }

  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const updatedCampus = {
      id: this.props.campus.id,
      name: event.target.name.value,
      address: event.target.address.value,
      description: event.target.description.value,
      imageUrl: event.target.imageUrl.value
    };

    await this.props.editCampus(updatedCampus);

    this.setState({ redirect: true, redirectId: updatedCampus.id });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/campus/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <Header />
        <EditCampusView
          campus={this.props.campus}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapState = (state) => ({
  campus: state.campus,
});

const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  editCampus: (campus) => dispatch(editCampusThunk(campus)),
});

export default connect(mapState, mapDispatch)(EditCampusContainer);