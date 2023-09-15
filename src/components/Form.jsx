import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addSVAction,
  resetUpdateAction,
  resetUpdateBtnAction,
  showPasswordAction,
  updateSVAction,
} from "../redux/action/sinhvienActions";
import { validation } from "../util/validation";

class Form extends Component {
  state = {
    sinhVien: {
      maSV: "",
      tenSV: "",
      email: "",
      password: "",
      toan: "",
      ly: "",
      hoa: "",
    },
    err: "",
  };

  bindingInput = () => {
    if (this.props.isUpdate) {
      this.setState({
        sinhVien: {
          maSV: this.props.selectedSV.maSV,
          tenSV: this.props.selectedSV.tenSV,
          email: this.props.selectedSV.email,
          password: this.props.selectedSV.password,
          toan: this.props.selectedSV.toan,
          ly: this.props.selectedSV.ly,
          hoa: this.props.selectedSV.hoa,
        },
        err: "",
      });
      this.props.resetUpdate();
    }
  };

  handleChangeInput = (event) => {
    this.setState({
      sinhVien: {
        ...this.state.sinhVien,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const sinhVien = this.state.sinhVien;

    // validation
    const { isPass, mess } = validation(sinhVien);

    if (!isPass) {
      this.setState({ err: mess });
      return null;
    }

    // validation accpeted
    this.setState({ err: mess });
    this.props.addSV(sinhVien);
    this.resetInput();
  };

  handleUpdate = () => {
    const sinhVien = { ...this.state.sinhVien, id: this.props.selectedSV.id };

    // validation
    const { isPass, mess } = validation(sinhVien, true);

    if (!isPass) {
      this.setState({ err: mess });
      return null;
    }

    // validation accpeted
    this.setState({ err: mess });
    this.props.updateSV(sinhVien);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      sinhVien: {
        maSV: "",
        tenSV: "",
        email: "",
        password: "",
        toan: "",
        ly: "",
        hoa: "",
      },
      err: "",
    });
    this.props.resetUpdateBtn();
  };

  componentDidUpdate = () => {
    if (this.props.isUpdate) {
      this.bindingInput();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="formQLSV">
        <div className="row">
          <div className="col-6 form-group">
            <label>Mã Sinh Viên : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.sinhVien.maSV}
              id="txtMaSV"
              name="maSV"
              disabled={this.props.showUpdateBtn ? true : false}
              onChange={this.handleChangeInput}
            />
            <span id="spanMaSV" className="text-danger" />
          </div>
          <div className="col-6 form-group">
            <label>Tên Sinh Viên : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.sinhVien.tenSV}
              id="txtTenSV"
              name="tenSV"
              onChange={this.handleChangeInput}
            />
            <span id="spanTenSV" className="text-danger" />
          </div>
        </div>
        <div className="row">
          <div className="col-6 form-group">
            <label>Email : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.sinhVien.email}
              id="txtEmail"
              name="email"
              onChange={this.handleChangeInput}
            />
            <span id="spanEmailSV" className="text-danger" />
          </div>
          <div className="col-6 form-group position-relative">
            <label>Mật khẩu: </label>
            <input
              type={this.props.showPassword ? "text" : "password"}
              className="form-control"
              id="txtPass"
              autoComplete="off"
              name="password"
              value={this.state.sinhVien.password}
              onChange={this.handleChangeInput}
            />
            <div
              className="position-absolute"
              style={{ bottom: 12, right: 30, zIndex: 100 }}
              onClick={this.props.showPasswordFuction}
            >
              <i
                className={
                  this.props.showPassword ? "fa fa-eye d-none" : "fa fa-eye"
                }
              />
              <i
                className={
                  this.props.showPassword
                    ? "fa fa-eye-slash"
                    : "fa fa-eye-slash d-none"
                }
              />
            </div>
            <span id="spanMatKhau" className="text-danger" />
          </div>
        </div>
        <div className="row">
          <div className="col-4 form-group">
            <label>Điểm toán : </label>
            <input
              type="number"
              min={0}
              max={10}
              className="form-control"
              id="txtDiemToan"
              name="toan"
              value={this.state.sinhVien.toan}
              onChange={this.handleChangeInput}
            />
            <span id="spanToan" className="text-danger" />
          </div>
          <div className="col-4 form-group">
            <label>Điểm lý : </label>
            <input
              type="number"
              className="form-control"
              id="txtDiemLy"
              min={0}
              max={10}
              name="ly"
              value={this.state.sinhVien.ly}
              onChange={this.handleChangeInput}
            />
            <span id="spanLy" className="text-danger" />
          </div>
          <div className="col-4 form-group">
            <label>Điểm hóa : </label>
            <input
              type="number"
              className="form-control"
              id="txtDiemHoa"
              name="hoa"
              min={0}
              max={10}
              value={this.state.sinhVien.hoa}
              onChange={this.handleChangeInput}
            />
            <span id="spanHoa" className="text-danger" />
          </div>
        </div>

        <p className="text-danger" style={{ height: "20px" }}>
          {this.state.err && <i>*{this.state.err}</i>}
        </p>
        <div className="form-group text-center mb-5">
          <button
            type="submit"
            id="themSv"
            className="btn btn-success mr-1"
            disabled={this.props.showUpdateBtn ? true : false}
          >
            Thêm Sinh Viên
          </button>
          <button
            type="button"
            onClick={this.resetInput}
            className="btn btn-dark mr-1"
          >
            Reset
          </button>
          <button
            type="button"
            id="updateSv"
            className="btn btn-info"
            disabled={this.props.showUpdateBtn ? false : true}
            onClick={this.handleUpdate}
          >
            Cập Nhật
          </button>
        </div>
      </form>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    showPassword: state.sinhVienReducer.showPassword,
    isUpdate: state.sinhVienReducer.isUpdate,
    selectedSV: state.sinhVienReducer.selectedSV,
    showUpdateBtn: state.sinhVienReducer.showUpdateBtn,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    showPasswordFuction: () => {
      dispatch(showPasswordAction());
    },
    addSV: (sv) => {
      dispatch(addSVAction(sv));
    },

    resetUpdate: () => {
      dispatch(resetUpdateAction());
    },
    resetUpdateBtn: () => {
      dispatch(resetUpdateBtnAction());
    },
    updateSV: (sv) => {
      dispatch(updateSVAction(sv));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
