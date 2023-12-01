import React, { useState } from "react";
import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import DisplayTable from "./DisplayTable";
import SearchUser from "./SearchUser";
import useFetchData from "../../services/FetchData";
import FilterUser from "./FilterUser";

export default function DisplayUsers() {
  const [search, setSearch] = useState("");
  const users = useFetchData();

  const handleSearchChange = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (
    <Box px='3'>
      <Grid templateColumns="repeat(20, 1fr)" gap={4}>
        <GridItem colSpan={8} >
          <SearchUser onSearch={handleSearchChange} />
        </GridItem>
        <GridItem colStart={10} colSpan={3}>
          <Box align='center' pt='6'>
            <Text fontWeight="bold" mb={4}>
              Total Disbursed
            </Text>
            <Text>₹4,07,338</Text>
          </Box>
        </GridItem>
        <GridItem colStart={13} colSpan={3}>
        <Box align='center' pt='6'>
            <Text fontWeight="bold" mb={4}>
              Active Loans
            </Text>
            <Text>19</Text>
          </Box>
        </GridItem>
        <GridItem colStart={16} colSpan={4}>
        <Box align='center' pt='6'>
            <Text fontWeight="bold" mb={4}>
              Accounts Opened Today
            </Text>
            <Text>0</Text>
          </Box>
        </GridItem>
        <GridItem colStart={20} pt='7'>
          <FilterUser />
        </GridItem>
      </Grid>
      <DisplayTable users={users} search={search} />
    </Box>
  );
}
