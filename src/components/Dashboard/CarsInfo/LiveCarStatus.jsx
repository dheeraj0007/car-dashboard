import { Card, Table } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { columns, data } from "./LiveCarStatusData.js";

const LiveCarStatus = () => {
  return (
    <Card
      title="Live Car Status"
      bordered={false}
      extra={
        <p className="text-lg text-gray-400 space-x-2">
          <FilterOutlined />
          <span>Filter</span>
        </p>
      }
      className="mx-10 my-10 shadow-lg border-[1px] border-gray-100"
    >
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};

export default LiveCarStatus;
