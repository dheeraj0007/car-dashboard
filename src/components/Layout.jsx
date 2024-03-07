import { Outlet } from "react-router-dom";
import Sidebar from "./common/Sidebar";
import { Layout } from "antd";

const MyLayout = () => {
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sidebar />
        <div className="no-scrollbar bg-white w-[100%] overflow-y-clip">
          <Outlet />
        </div>
      </Layout>
    </>
  );
};

export default MyLayout;
