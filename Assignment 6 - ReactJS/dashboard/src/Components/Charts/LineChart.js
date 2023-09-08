import React, { useEffect } from "react";
import * as echarts from "echarts";

function LineChart() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("lineChart"));

    const options = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div
      id="lineChart"
      style={{ width: "45%", height: "400px", padding: "1rem" }}
    ></div>
  );
}

export default LineChart;
