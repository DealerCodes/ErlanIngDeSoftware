import React from "react";
import DataTable from "react-data-table-component";
import { Content } from "./styled";
const Table = ({ columns, date,loading }) => {
  
  return (
    <Content>
      <DataTable
        progressPending={loading}
        columns={columns}
        data={date}
        striped
        pagination
        highlightOnHover
        defaultSortAsc={false}
      />
    </Content>
  );
};

export default Table;
