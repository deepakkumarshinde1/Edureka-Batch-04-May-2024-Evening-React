import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Alters() {
  let [userSaveDone] = useState(false);
  let [errorMessage] = useState(null);
  let [removeUserMessage] = useState(false);

  let dispatch = () => {};
  let getUserListFormServer = () => {};
  let setErrorMessage = () => {};
  let userAddedToServer = () => {};
  let userRemoveSuccessMessage = () => {};

  let navigate = useNavigate();

  // updating of react life cycle
  useEffect(() => {
    if (userSaveDone === true) {
      Swal.fire({
        title: "Success!",
        text: "User saved successfully",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        dispatch(userAddedToServer(false));
        navigate("/user-list");
      });
    }
  }, [userSaveDone]);

  useEffect(() => {
    if (removeUserMessage === true) {
      Swal.fire({
        title: "Success!",
        text: "User removed successfully",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        dispatch(getUserListFormServer());
        dispatch(userRemoveSuccessMessage(false));
      });
    }
  }, [removeUserMessage]);
  useEffect(() => {
    if (errorMessage) {
      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "Ok",
      }).then(() => {
        dispatch(setErrorMessage(null));
      });
    }
  }, [errorMessage]);

  return <></>;
}

export default Alters;
