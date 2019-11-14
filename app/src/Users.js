import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./Utils/AxiosWithAuth";

const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/users")
      .then(res => {
        console.log(`success > `, res);
        setUser(res.data);
      })
      .catch(err => console.log(`fail > `, err.message));
  }, []);

  return (
    <div>
      {user.map(user => {
        return (
          <div key={user.id}>
            <div>{user.username}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
