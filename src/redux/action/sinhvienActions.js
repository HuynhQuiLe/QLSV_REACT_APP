import {
  addSVService,
  deleteSVService,
  getAllSVService,
  getSVService,
  updateSVService,
} from "../../service/svServices";
import { showError, showSuccess, showUpdateSuccess } from "../../util/toastify";
import {
  GET_ALL_USER,
  RESET_UPDATE,
  RESET_UPDATE_BTN,
  SHOW_PASSWORD,
  SELECTED_SV,
  SEARCH,
} from "../constants/sinhvienConstants";

export const getAllSinhVienAction = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await getAllSVService();
      dispatch({
        type: GET_ALL_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSVAction = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data: sv } = await getSVService(id);
      dispatch({
        type: SELECTED_SV,
        payload: sv,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addSVAction = (sinhVien) => {
  return async (dispatch, getState) => {
    try {
      await addSVService(sinhVien);
      dispatch(getAllSinhVienAction());
      showSuccess();
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAction = (id) => {
  return async (dispatch, getState) => {
    try {
      await deleteSVService(id);
      dispatch(getAllSinhVienAction());
      showError();
    } catch (error) {
      console.log(error);
    }
  };
};

export const showPasswordAction = () => ({
  type: SHOW_PASSWORD,
});

export const updateSVAction = (sv) => {
  return async (dispatch, getState) => {
    try {
      await updateSVService(sv);
      dispatch(getAllSinhVienAction());
      showUpdateSuccess();
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetUpdateAction = () => ({
  type: RESET_UPDATE,
});

export const resetUpdateBtnAction = () => ({
  type: RESET_UPDATE_BTN,
});

export const searchAction = (key) => ({
  type: SEARCH,
  payload: key,
});
