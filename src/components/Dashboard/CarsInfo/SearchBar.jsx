import { NotificationOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = () => {
  return (
    <div className="w-[100%] py-10 px-2 flex justify-end space-x-5">
      <img src="notifications.svg" width={30} height={30} alt="icon" />
      <Search
        placeholder="Search here"
        allowClear
        size="large"
        onSearch={onSearch}
        className="w-[60%]"
      />
    </div>
  );
};

export default SearchBar;
