import { Button, Space, Tag } from "antd";

export const columns = [
    {
        title: "No.",
        dataIndex: "no",
        key: "no",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Car No.",
        dataIndex: "carNo",
        key: "carNo",
    },
    {
        title: "Driver",
        dataIndex: "driver",
        key: "driver",
    },
    {
        title: 'Status',
        dataIndex: "status",
        key: 'status',
    },
    {
        title: "Earning",
        dataIndex: 'earning',
        key: 'earning',
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <Button>Details</Button>
            </Space>
        ),
    },
];

export const data = [
    {
        key: "1",
        no: "01",
        carNo: 3256,
        driver: "Alex Noman",
        status: 'Completed',
        earning: '$ 35.44',
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        no: "02",
        carNo: 4209,
        driver: "Razib Rahman",
        status: 'Pending',
        earning: '$ 0.00',
        tags: ["loser"],
    },
    {
        key: "3",
        no: "03",
        carNo: 8756,
        driver: "Luke Norton",
        status: 'In route',
        earning: '$ 23.50',
        tags: ["cool", "teacher"],
    },
];