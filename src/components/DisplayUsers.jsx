import React, { useState } from "react";
import DisplayTable from "./DisplayTable";
import SearchUser from "./SearchUser";
import useFetchData from "./FetchData";

export default function DisplayUsers() {
  const [search, setSearch] = useState("");
  const users = useFetchData();

  const handleSearchChange = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (
    <div>
      <SearchUser onSearch={handleSearchChange} />
      <DisplayTable users={users} search={search} />
    </div>
  );
}
