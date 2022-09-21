import React from "react";
import "../../App.css";
// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   Resize,
//   Sort,
//   ContextMenu,
//   Filter,
//   Page,
//   ExcelExport,
//   PdfExport,
//   Edit,
//   Inject,
// } from "@syncfusion/ej2-react-grids";
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort, Search, Toolbar } from "@syncfusion/ej2-react-grids";

import {employeesData, employeesGrid } from "../../data/dummy";
import { Header } from "../../components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp"
        className="border"
        dataSource={employeesData}
        allowPaging
        pageSettings={{ pageSize: 10 }}
        allowSorting={true}
        sortSettings={{ columns: [{ field: "OrderID", direction: "Ascending" }] }}
        width='auto'
        toolbar={['Search']}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => {
            const { field, width, textAlign, headerText, editType } = item;
            return (
              <ColumnDirective
                key={index}
                field={field}
                width={width}
                textAlign={textAlign}
                headerText={headerText}
                editType={editType}
                className="border"
              />
            );
          })}
        </ColumnsDirective>
        <Inject services={[Page, Sort,Search,Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
