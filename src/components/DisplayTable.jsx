import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import useFetchData from "./FetchData"; // Adjust the path based on your project structure

export default function DisplayTable() {
  const users = useFetchData();

  return (
    <TableContainer css="padding:60">
      <style jsx>{`
        .custom-table tr:nth-child(odd) {
          background-color: #3081d0;
        }

        .custom-table tr:nth-child(even) {
          background-color: #aedefc;
        }
      `}</style>
      <Table variant="striped" className="custom-table">
        <Thead>
          <Tr>
            <Th>Borrower</Th>
            <Th>Loan Reference Num</Th>
            <Th>Origination Date</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => {
            const {
              loan_id,
              loan_acc_num,
              fname,
              mname,
              lname,
              loan_start_date,
              loan_status,
            } = user;
            const borrowerName = `${fname} ${mname ? mname + " " : ""}${
              lname || ""
            }`;

            return (
              <Tr key={loan_id}>
                <Td>{borrowerName}</Td>
                <Td>{loan_acc_num}</Td>
                <Td>{loan_start_date}</Td>
                <Td>{loan_status}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
