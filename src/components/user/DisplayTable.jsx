import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Icon,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, TimeIcon } from "@chakra-ui/icons";

export default function DisplayTable({ users, search }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "green";
      case "Active":
        return "green";
      case "Rejected":
        return "red";
      default:
        return "orange";
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.fname.toLowerCase().includes(search.toLowerCase()) ||
      user.lname.toLowerCase().includes(search.toLowerCase()) ||
      user.loan_acc_num.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TableContainer css="padding: 60">
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
          {filteredUsers.map((user) => {
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
                <Td>
                  <Icon
                    as={
                      loan_status === "Approved" || loan_status === "Active"
                        ? CheckIcon
                        : loan_status === "Rejected"
                        ? CloseIcon
                        : TimeIcon
                    }
                    color={getStatusColor(loan_status)}
                  />
                  <Text
                    display="inline"
                    ml={2}
                    color={getStatusColor(loan_status)}
                  >
                    {loan_status.charAt(0).toUpperCase() + loan_status.slice(1)}
                  </Text>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
