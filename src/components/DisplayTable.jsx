import React from "react";
import UserDataComponent from "./UserData";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function DisplayTable() {
  return (
    <TableContainer
    css= 'padding:60'>
      <style jsx>{`
        .custom-table tr:nth-child(odd) {
          background-color: #3081D0;
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
          <UserDataComponent />
        </Tbody>
      </Table>
    </TableContainer>
  );
}
