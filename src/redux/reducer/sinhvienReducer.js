import {
  GET_ALL_USER,
  RESET_UPDATE,
  RESET_UPDATE_BTN,
  SEARCH,
  SELECTED_SV,
  SHOW_PASSWORD,
} from "../constants/sinhvienConstants";

const initialState = {
  showPassword: false,
  sinhVienArray: [],
  isUpdate: false,
  showUpdateBtn: false,
  selectedSV: {},
  sinhVienArrayForSearch: [],
};

export const sinhVienReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USER:
      localStorage.setItem("SVArray", JSON.stringify(payload));
      return {
        ...state,
        sinhVienArray: payload,
        sinhVienArrayForSearch: payload,
      };

    case SHOW_PASSWORD:
      return { ...state, showPassword: !state.showPassword };

    case SELECTED_SV:
      return {
        ...state,
        isUpdate: true,
        showUpdateBtn: true,
        selectedSV: payload,
      };

    case RESET_UPDATE:
      state.isUpdate = false;
      return { ...state };

    case RESET_UPDATE_BTN:
      return { ...state, showUpdateBtn: false };

    case SEARCH:
      const cloneAr = [...state.sinhVienArrayForSearch];
      const key = payload.replaceAll(" ", "").toUpperCase();
      const fillter = cloneAr.filter((sv) =>
        sv.tenSV.replaceAll(" ", "").toUpperCase().includes(key)
      );

      return { ...state, sinhVienArray: fillter };

    default:
      return { ...state };
  }
};
