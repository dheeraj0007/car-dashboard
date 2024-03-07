import { Line } from "@ant-design/charts";

const EarningSummary = () => {
  const data = [
    { date: "May", value: 120000, category: "Last 6 months" },
    { date: "May", value: 80000, category: "Same period last year" },
  ];

  const config = {
    data,
    xField: "date",
    yField: "value",
    seriesField: "category",
    yAxis: {
      label: {
        formatter: (v) => `$${(v / 1000).toFixed(0)}k`,
      },
    },
    color: ["#1979C9", "#D3D3D3"],
    lineStyle: ({ category }) => {
      if (category === "Last 6 months") {
        return { lineWidth: 2 };
      }
      return { lineWidth: 2, lineDash: [4, 4] };
    },
    areaStyle: ({ category }) => {
      if (category === "Last 6 months") {
        return { fill: "l(270) 0:#1979C9 1:#ffffff" };
      }
    },
  };
  return <Line {...config} />;
};

export default EarningSummary;
