import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../../data/dummy";
import { Header } from "../../components";
const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        pageSettings={{ pageSize: 10 }}
        allowSorting={true}
        width="auto"
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => {
            const { field, width, textAlign, headerText, editType } = item;
            return (
              <ColumnDirective
                key={index}
                field={field}
                width={width}
                textAlign={textAlign}
                headerText={headerText}
                editType={editType}
              />
            );
          })}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Toolbar, Selection, Edit, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
