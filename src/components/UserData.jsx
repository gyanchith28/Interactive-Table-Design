import React, { useEffect, useState } from 'react';
import { Tr, Td } from "@chakra-ui/react";

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
      {users.map((curUser, index) => {
        const { loan_id, loan_acc_num, fname, mname, lname, loan_start_date, loan_status } = curUser;
        const isOdd = index % 2 === 0; // Check if the index is odd

        return (
          <Tr key={loan_id}>
            <Td _odd={{ bg: isOdd ? "#e0f4ff" : "" }} _even={{ bg: isOdd ? "" : "#aedefc" }}>
              {fname + (mname ? ' ' + mname : '') + (lname ? ' ' + lname : '')}
            </Td>
            <Td _odd={{ bg: isOdd ? "#e0f4ff" : "" }} _even={{ bg: isOdd ? "" : "#aedefc" }}>
              {loan_acc_num}
            </Td>
            <Td _odd={{ bg: isOdd ? "#e0f4ff" : "" }} _even={{ bg: isOdd ? "" : "#aedefc" }}>
              {loan_start_date}
            </Td>
            <Td _odd={{ bg: isOdd ? "#e0f4ff" : "" }} _even={{ bg: isOdd ? "" : "#aedefc" }}>
              {loan_status}
            </Td>
          </Tr>
        );
      })}
    </>
  );
};

export default UserDataComponent;
