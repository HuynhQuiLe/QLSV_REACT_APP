import React, { Component } from "react";
import { connect } from "react-redux";
import SinhVien from "./SinhVien";
import { getAllSinhVienAction } from "../redux/action/sinhvienActions";

class SinhVienList extends Component {
  componentDidMount = () => {
    this.props.getAllUser();
  };
  renderSinhVien = () => {
    if (this.props.sinhVienArray.length === 0) {
      return (
        <tr>
          <td colSpan={5} className="text-center">
            Không có dữ liệu sinh viên.
          </td>
        </tr>
      );
    }

    return this.props.sinhVienArray.map((sv, index) => {
      return <SinhVien key={index} sv={sv} />;
    });
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã Sinh Viên</th>
            <th>Tên Sinh Viên</th>
            <th>Email</th>
            <th>Điểm Trung Bình</th>
            <th />
          </tr>
        </thead>
        <tbody id="tbodySinhVien">{this.renderSinhVien()}</tbody>
      </table>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getAllUser: () => {
      dispatch(getAllSinhVienAction());
    },
  };
};

let mapStateToProps = (state) => {
  return {
    sinhVienArray: state.sinhVienReducer.sinhVienArray,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinhVienList);
