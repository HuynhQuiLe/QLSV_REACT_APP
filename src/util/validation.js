export const validation = (
  { maSV, tenSV, password, email, toan, ly, hoa },
  isUpdate = false
) => {
  const sinhvienArray = JSON.parse(localStorage.getItem("SVArray"));
  let isPass = true;
  let mess = "";
  //  check empty
  if (
    !maSV.trim() ||
    !tenSV.trim() ||
    !password.trim() ||
    !email.trim() ||
    !toan.trim() ||
    !ly.trim() ||
    !hoa.trim()
  ) {
    isPass = false;
    mess = "Tất cả các trường là bắt buộc.";
    return { isPass, mess };
  }

  //check duplicate
  if (!isUpdate) {
    const index = sinhvienArray.findIndex((sv) => sv.maSV === maSV);
    if (index !== -1) {
      isPass = false;
      mess = "Mã sinh viên không được trùng.";
      return { isPass, mess };
    }
  }

  return { isPass, mess };
};
