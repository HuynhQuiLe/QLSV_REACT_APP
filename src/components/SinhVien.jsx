import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAction, getSVAction } from "../redux/action/sinhvienActions";

class SinhVien extends Component {
  render() {
    const { maSV, tenSV, email, toan, ly, hoa, id } = this.props.sv;
    return (
      <tr>
        <td>
          <p
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "120px",
            }}
          >
            {maSV}
          </p>
        </td>
        <td>
          <p
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "180px",
            }}
          >
            {tenSV}
          </p>
        </td>
        <td>
          <p
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "200px",
            }}
          >
            {email}
          </p>
        </td>
        <td>{((toan * 1 + ly * 1 + hoa * 1) / 3).toFixed(2)}</td>
        <td>
          <button
            className="btn btn-warning text-white mr-2"
            onClick={() => this.props.selectedSV(id)}
          >
            Edit
          </button>
          <button
            className=" btn btn-danger"
            onClick={() => this.props.delete(id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => {
      dispatch(deleteAction(id));
    },
    selectedSV: (id) => {
      dispatch(getSVAction(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(SinhVien);
