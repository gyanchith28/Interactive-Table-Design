import { useState, useEffect } from 'react';

const API = "https://corsproxy.io/?https://pastebin.com/raw/dxysM2mc";

const useFetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(API);
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
    fetchUsers();
  }, []);

  return users;
};

export default useFetchData;
