import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GET_USERS } from "../GraphQL/Query";

const UserTable = () => {
  let { data } = useQuery(GET_USERS);
  let [userList, setUserList] = useState([]);

  let removeUser = () => {};
  useEffect(() => {
    if (data !== undefined) {
      setUserList(data.getUsersList);
    }
  }, [data]);
  return (
    <>
      <section className="row mt-3  justify-content-center">
        <section className="col-8 ">
          <table className="table table-bordered">
            <thead className="table-primary text-center">
              <tr>
                <th width="10%">Sr No</th>
                <th width="40%">Name</th>
                <th width="40%">Email</th>
                <th width="10%">Action</th>
              </tr>
            </thead>
            <tbody>
              {userList.length === 0 ? (
                <tr>
                  <td colSpan={3} className="text-center fw-bold text-danger">
                    No data to display
                  </td>
                </tr>
              ) : null}
              {userList.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.userName}</td>
                    <td>{user.userEmail}</td>
                    <td>
                      <button
                        onClick={() => removeUser(user.id)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};

export default UserTable;
