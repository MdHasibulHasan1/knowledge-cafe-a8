import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toastify({ isExist }) {
  //   // remove
  //   const [isClicked, setIsClicked] = useState(isExist);

  useEffect(() => {
    if (isExist) {
      toast.warning("Already BookMarked!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      //   setIsClicked(false);
    }
  }, [isExist]);

  if (isExist) {
    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
}
export default Toastify;
