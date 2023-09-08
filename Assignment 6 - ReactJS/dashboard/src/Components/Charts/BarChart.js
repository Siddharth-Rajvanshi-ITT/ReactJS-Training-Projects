import React, { useEffect } from "react";
import * as echarts from "echarts";

function BarChart() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("barChart"));

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
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
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
      id="barChart"
      style={{ width: "45%", height: "400px", padding: "1rem" }}
    ></div>
  );
}

export default BarChart;
