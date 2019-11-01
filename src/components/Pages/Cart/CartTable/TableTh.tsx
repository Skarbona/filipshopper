import React from "react";

import { ITableThProps } from "./TableTh.interface"

const TableTh = ({ headers = [] }: ITableThProps) => (
  <tr>
    {headers.map((header, index) => (
      <th key={`th-${index}`}>{header}</th>
    ))}
  </tr>
);

export default TableTh;
