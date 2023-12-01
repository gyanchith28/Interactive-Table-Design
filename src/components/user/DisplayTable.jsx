import React, { useState } from "react";
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
  Box,
} from "@chakra-ui/react";
import {
  CheckIcon,
  CloseIcon,
  TimeIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@chakra-ui/icons";

export default function DisplayTable({ users, search }) {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (field) => {
    const sortOrder = field === sortField && order === "asc" ? "desc" : "asc";
    setSortField(field);
    setOrder(sortOrder);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
      case "Active":
        return "green";
      case "Rejected":
        return "red";
      default:
        return "orange";
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    const comparison = order === "asc" ? 1 : -1;

    const aStatus = a[sortField] || "";
    const bStatus = b[sortField] || ""; 

    if (sortField === "loan_start_date") {
      return (
        new Date(a[sortField]).getTime() -
        new Date(b[sortField]).getTime()
      ) * comparison;
    } else {
      return aStatus.localeCompare(bStatus) * comparison;
    }
  });

  const filteredUsers = sortedUsers.filter(
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

        .sort-icon {
          margin-left: 0.5rem;
        }
      `}</style>
      <Table variant="striped" className="custom-table">
        <Thead>
          <Tr>
            <Th onClick={() => handleSortingChange("fname")}>
              Borrower{" "}
              {sortField === "fname" && (
                <Icon as={order === "asc" ? ArrowUpIcon : ArrowDownIcon} className="sort-icon" />
              )}
            </Th>
            <Th onClick={() => handleSortingChange("loan_acc_num")}>
              Loan Reference Num{" "}
              {sortField === "loan_acc_num" && (
                <Icon as={order === "asc" ? ArrowUpIcon : ArrowDownIcon} className="sort-icon" />
              )}
            </Th>
            <Th onClick={() => handleSortingChange("loan_start_date")}>
              Origination Date{" "}
              {sortField === "loan_start_date" && (
                <Icon as={order === "asc" ? ArrowUpIcon : ArrowDownIcon} className="sort-icon" />
              )}
            </Th>
            <Th onClick={() => handleSortingChange("loan_status")}>
              Status{" "}
              {sortField === "loan_status" && (
                <Icon as={order === "asc" ? ArrowUpIcon : ArrowDownIcon} className="sort-icon" />
              )}
            </Th>
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
