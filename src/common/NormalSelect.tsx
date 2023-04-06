import { Select } from "antd";
import React from "react";
interface NormalSelectPropsType {
  showSearch?: boolean;
  width?: number;
  placeholder?: string;
  onChange?: (value: { label?: string; value?: number } | null) => void;
  onSearch?: (value: string) => void;
  label?: string;
  filterOption?: boolean | ((inputValue?: string, option?: any) => boolean);
  options?: { label?: string; value?: number }[] | [];
}

const NormalSelect: React.FC = ({
  showSearch = false,
  width = 350,
  placeholder = "",
  onChange = () => {},
  onSearch = () => {},
  filterOption = () => false,
  options = [],
  label = "",
}: NormalSelectPropsType) => {
  return (
    <>
      {label ? <label>{label}</label> : <></>}
      <Select
        showSearch={showSearch}
        style={{ width }}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={options}
      />
    </>
  );
};

export default NormalSelect;
