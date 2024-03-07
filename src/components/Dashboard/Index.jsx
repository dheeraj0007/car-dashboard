import CarsInfo from "./CarsInfo";
import Stats from "./Stats";

const Dashboard = () => {
  return (
    <div className="flex">
      <Stats />
      <CarsInfo />
    </div>
  );
};

export default Dashboard;
