import axios from "axios";
import { BASE_URL } from "../redux/constants/sinhvienConstants";

export const getAllSVService = () => {
  return axios.get(BASE_URL);
};

export const getSVService = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

export const addSVService = (sv) => {
  return axios.post(BASE_URL, sv);
};

export const deleteSVService = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

export const updateSVService = (sv) => {
  return axios.put(`${BASE_URL}/${sv.id}`, sv);
};
