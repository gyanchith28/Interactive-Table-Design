import React from "react";
import UserDataComponent from "./UserData";

export default function DisplayTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Borrower</th>
            <th>Loan Reference Num</th>
            <th>Origination Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <UserDataComponent />
        </tbody>
      </table>
    </div>
  );
}
