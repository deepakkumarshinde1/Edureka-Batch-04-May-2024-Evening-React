import Input from "./Input";
import { useCallback, useEffect, useState } from "react";
import ResetButton from "./ResetButton";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../GraphQL/Mutation";
import { useNavigate } from "react-router-dom";
const UserRegistration = () => {
  let navigator = useNavigate();
  let [addUser, { error, data }] = useMutation(ADD_USER);

  let [userInput, setUserInput] = useState({
    userName: "",
    userEmail: "",
  });

  let inputChange = (event) => {
    let { name, value } = event.target;
    console.log(name, value);
    setUserInput({ ...userInput, [name]: value });
  };

  let saveUserData = () => {
    addUser({
      variables: {
        ...userInput,
      },
    });
  };

  useEffect(() => {
    if (error) {
      alert("Server Error");
    } else {
      if (data !== undefined) {
        alert("user saved successfully");
        navigator("/user-list");
      }
    }
  }, [error, data]);
  return (
    <>
      <section className="row justify-content-center">
        <section className="col-6 card mt-3 p-3">
          <form>
            <Input
              label="User Name"
              name="userName"
              placeholder="Enter User Name"
              type="text"
              inputChange={inputChange}
              value={userInput.userName}
              error={""}
            />

            <Input
              label="User Email"
              value={userInput.userEmail}
              name="userEmail"
              placeholder="Enter Email"
              inputChange={inputChange}
              type="email"
              error={""}
            />

            <div className="justify-content-center gap-3 d-flex">
              <button
                type="button"
                onClick={saveUserData}
                className="btn btn-success px-5 rounded-0"
              >
                <i className="fa fa-floppy-o" aria-hidden="true"></i> Save
              </button>
              <ResetButton />
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default UserRegistration;
