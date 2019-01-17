import React from "react";

const TableTh = ({ titles }) => {
  if (!titles.cartTitles) return null;
  return (
    <tr>
      {titles.cartTitles.map((title, index) => (
        <th key={`th-${index}`}>{title}</th>
      ))}
    </tr>
  );
};

export default TableTh;
