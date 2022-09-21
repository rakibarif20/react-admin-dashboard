import React from "react";
import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts";

const SparkLine = ({ color, currentColor, id, type, width, height, data }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      fill={color}
      border={{color:currentColor, width:1}}
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}",
      }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
