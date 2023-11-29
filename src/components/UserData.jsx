import React, { useEffect, useState } from 'react';

const API = "/api/raw/dxysM2mc";

const UserDataComponent = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data && data.response) {
        setUsers(data.response);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  console.log(users);

  return (
    <>
      {users.map((curUser) => {
        const { loan_id,loan_acc_num, fname, mname, lname, loan_start_date, loan_status } = curUser;
        return (
          <tr key={loan_id}>
            <td>{fname + (mname ? ' ' + mname : '') + (lname ? ' ' + lname : '')}</td>
            <td>{loan_acc_num}</td>
            <td>{loan_start_date}</td>
            <td>{loan_status}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserDataComponent;
