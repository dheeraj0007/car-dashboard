import CarAvailability from "./CarsInfo/CarAvailability";
import EarningSummary from "./CarsInfo/EarningSummary";
import LiveCarStatus from "./CarsInfo/LiveCarStatus";
import SearchBar from "./CarsInfo/SearchBar";

const CarsInfo = () => {
  return (
    <div className="bg-white w-[100%]">
      <SearchBar />
      <CarAvailability />
      <LiveCarStatus />
    </div>
  );
};

export default CarsInfo;
