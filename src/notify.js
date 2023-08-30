import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const alert = (suceess) => {
  if (suceess) {
    return toast.success("😎 Color is copied to the clipboard!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    return toast.error("⚠️ Please enter a valid hex value!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

export default alert;
