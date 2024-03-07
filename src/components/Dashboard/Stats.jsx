import { Card } from "antd";
import moment from "moment";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Pie } from "@ant-design/charts";

const Stats = () => {
  const data = [
    { type: "Total Hired", value: 10 },
    { type: "Total Cancelled", value: 25 },
    { type: "Total Pending", value: 20 },
  ];

  const totalValue = data.reduce((sum, value) => sum + value.value, 0);

  const config = {
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.8,
    height: 260,
  };
  const date = moment().format("ddd, DD MMM YYYY, hh:mm A");
  return (
    <div className="bg-gray-300/10 p-5 space-y-5 ">
      <div>
        <h1 className="text-xl text-gray-800">Todays Statistics</h1>
        <p className="text-gray-500">{date}</p>
      </div>
      <Card
        title="Income"
        extra={
          <p className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md">
            Today
          </p>
        }
        style={{
          width: 300,
          height: 200,
        }}
      >
        <div className="flex items-end justify-between my-2">
          <h1 className="text-2xl font-semibold">$ 9460.00 </h1>
          <span className="text-red-500">
            <ArrowDownOutlined className="text-sm" />
            1.5%
          </span>
        </div>
        <p className="text-gray-500">Compared to $9940 yesterday</p>
        <p className="flex justify-between items-end my-2">
          <span>Last Week Income </span>
          <span>$22400</span>
        </p>
      </Card>
      <Card
        title="Expenses"
        extra={
          <p className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md">
            Today
          </p>
        }
        style={{
          width: 300,
          height: 200,
        }}
      >
        <div className="flex items-end justify-between my-2">
          <h1 className="text-2xl font-semibold">$ 5600.00 </h1>
          <span className="text-green-500">
            <ArrowUpOutlined className="text-sm" />
            2.5%
          </span>
        </div>
        <p className="text-gray-500">Compared to $5240 yesterday</p>
        <p className="flex justify-between items-end my-2">
          <span>Last Week Expenses </span>
          <span>$22658</span>
        </p>
      </Card>

      <div className="w-[18.5rem] mx-auto h-96 bg-white rounded-md ">
        <p className="relative top-4 left-4 bg-gray-200 text-gray-500 px-2 py-1 rounded-md w-fit">
          Today
        </p>
        <Pie {...config} />
        <div className="relative -top-[8rem]">
          {data.map((item, i) => {
            return (
              <p className="flex justify-between px-5 text-lg">
                <span>{item.type}</span>
                <span>{((item.value / totalValue) * 100).toFixed(1)}%</span>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
