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
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort } from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../../data/dummy";
import { Header } from "../../components";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        className="border"
        dataSource={ordersData}
        allowPaging
        pageSettings={{ pageSize: 10 }}
        allowSorting={true}
        sortSettings={{ columns: [ {field: 'OrderID', direction: 'Ascending' }] }}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => {
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
        <Inject services={[Page, Sort]} />
      </GridComponent>
    </div>
  );
};

export default Orders;
