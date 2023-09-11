import React, { useEffect } from "react";
import * as echarts from "echarts";

function BarChart() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("barChart"));

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
