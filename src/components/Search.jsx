import React, { Component } from "react";
import { connect } from "react-redux";
import { searchAction } from "../redux/action/sinhvienActions";

class Search extends Component {
  handleChange = (event) => {
    this.props.search(event.target.value);
  };
  render() {
    return (
      <div className="row">
        <div className="col-9 form-group">
          <input
            placeholder="Nhập tên sinh viên"
            type="text"
            className="form-control"
            id="txtSearch"
            onInput={this.handleChange}
          />
        </div>
        <div className="col-3 form-group">
          <button id="btnSearch" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    search: (key) => {
      dispatch(searchAction(key));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
