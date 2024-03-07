import React, { useState } from "react";
import {
  AppstoreOutlined,
  CarOutlined,
  BoldOutlined,
  NotificationOutlined,
  SettingOutlined,
  WalletOutlined,
  TransactionOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, ConfigProvider } from "antd";
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "1", <AppstoreOutlined style={{ fontSize: "20px" }} />),
  getItem("Drivers", "2", <CarOutlined style={{ fontSize: "20px" }} />),
  getItem("Bookings", "3", <BoldOutlined style={{ fontSize: "20px" }} />),
  getItem(
    "Notifications",
    "4",
    <NotificationOutlined style={{ fontSize: "20px" }} />
  ),
  getItem("Settings", "5", <SettingOutlined style={{ fontSize: "20px" }} />),
  getItem(
    "Payment Details",
    "6",
    <WalletOutlined
      style={{
        fontSize: "20px",
      }}
    />
  ),
  getItem(
    "Transactions",
    "7",
    <TransactionOutlined style={{ fontSize: "20px" }} />
  ),
  getItem("Car report", "8", <FileTextOutlined style={{ fontSize: "20px" }} />),
];
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1677ff",
          borderRadius: 2,
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={280}
        style={{ paddingTop: "20px", backgroundColor: "black", color: "white" }}
      >
        {/* <div className="demo-logo-vertical" /> */}
        <div className="flex justify-center items-center">
          <img src="carlogo.png" alt="car" width={50} height={50} />
          <span
            className={`text-2xl uppercase font-semibold ${
              collapsed ? "hidden" : "block"
            }`}
          >
            Car Rent
          </span>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          className="text-base p-5 mt-3 bg-black"
        />
      </Sider>
    </ConfigProvider>
  );
};
export default Sidebar;
