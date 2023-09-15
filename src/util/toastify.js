import Toastify from "toastify-js";

export const showSuccess = () => {
  Toastify({
    text: "Thêm sinh viên thành công",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

export const showError = () => {
  Toastify({
    text: "Xoá sinh viên thành công",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, red, orange)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

export const showUpdateSuccess = () => {
  Toastify({
    text: "Cập nhật sinh viên thành công",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to blue, green)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};
