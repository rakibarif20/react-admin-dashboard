import React from "react";
import {
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  Category,
} from "@syncfusion/ej2-react-charts";

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from "../../data/dummy";
const LineChart = () => {
  return (
    <ChartComponent
      id="charts"
      LinePrimaryXAxis={LinePrimaryXAxis}
      LinePrimaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ visible: true }}
    >
      <Inject services={[ColumnSeries, DataLabel, Tooltip, Legend, LineSeries, Category]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => {
          const { dataSource, xName, yName, marker, name } = item;
          return (
            <SeriesDirective
              key={index}
              dataSource={dataSource}
              xName={xName}
              yName={yName}
              name={name}
              marker={marker}
            />
          );
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
