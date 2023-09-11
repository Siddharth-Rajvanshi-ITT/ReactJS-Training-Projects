import React, { useEffect } from "react";
import * as echarts from "echarts";

function PieChart() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("pieChart"));

    const options = {
      title: {
        text: "Skills and Scores",
        subtext: "Fake Data",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      },
      series: [
        {
          name: "Skill Score",
          type: "pie",
          radius: "50%",
          data: [
            { value: 90, name: "HTML" },
            { value: 85, name: "CSS" },
            { value: 95, name: "JavaScript" },
            { value: 80, name: "React" },
            { value: 75, name: "Node.js" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
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
      id="pieChart"
      style={{ width: "100%", height: "400px", padding: "1rem" }}
    ></div>
  );
}

export default PieChart;
