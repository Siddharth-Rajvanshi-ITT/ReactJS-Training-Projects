import React, { useEffect } from "react";
import * as echarts from "echarts";

function LineChart() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("lineChart"));

    const options = {
      xAxis: {
        type: "category",
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [85, 92, 78, 94, 88, 95, 90, 91, 89, 93, 86, 96],
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
