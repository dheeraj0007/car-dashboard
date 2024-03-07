import { Button, Card, Select } from "antd";

const CarAvailability = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const currentDate = new Date();
  const currentDateTimeString = currentDate.toISOString().slice(0, 16);
  return (
    <Card
      title="Car Availability"
      bordered={false}
      className="mx-10 shadow-lg border-[1px] border-gray-100"
    >
      <div>
        <Select
          showSearch
          placeholder="Car Number"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          className="w-52 h-12"
          options={[
            {
              value: "HR01AT1465",
              label: "HR01AT1465",
            },
            {
              value: "PB65BP2565",
              label: "PB65BP2565",
            },
            {
              value: "HP04A0987",
              label: "HP04A0987",
            },
          ]}
        />

        <input
          type="datetime-local"
          defaultValue={currentDateTimeString}
          className="mx-4 border-[1px] border-gray-100 p-1 w-60 text-gray-600 h-12"
        />
        <button className="bg-[#006AFF]/80 text-white px-5 py-1 rounded-sm h-12">
          Check
        </button>
      </div>
    </Card>
  );
};

export default CarAvailability;
