import { Image } from "antd";
import React from "react";
import Select from "react-select";

const dot = () => ({
  color: "transparent",
  display: "flex",
  width: "100%",
});

const DropdownIndicator = () => {
  return null;
};

const IndicatorSeparator = () => {
  return null;
};

const customStyles = {
  menuList: (base) => ({
    ...base,
    height: "200px",
    fontSize: "0.7rem",
    borderBottomRightRadius: "40px",
    "::-webkit-scrollbar": {
      width: "7px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#fbcbe6",
      borderRadius: "40px",
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: "40px",
      backgroundColor: "#ff237a",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),

  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "black" : "#ff237a",
    backgroundColor: state.isSelected ? "#fbcbe6" : "red",
    backgroundColor: state.isFocused ? "#fbcbe6" : "white",
    textAlign: "right",
    padding: 20,
  }),

  control: (provided, state) => ({
    ...provided,
    height: "40px",
    width: "100%",
    backgroundColor: "white",
    border: state.isSelected ? "1px solid #ff237a" : "1px solid #ff237a",
    borderBottomRightRadius: state.isFocused ? "0" : "40px",
    borderTopRightRadius: state.isFocused ? "20px" : "40px",
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition, textAlign: "right" };
  },

  menu: (provided) => ({
    ...provided,
    width: "100%",
    borderBottomRightRadius: "40px",
    marginTop: 0,
  }),

  input: (styles) => ({
    ...styles,
    ...dot(),
  }),
};

const Search = ({ languages, onChange }) => {
  const options = languages?.map((x) => {
    const container = {};
    container.id = x.id;
    container.value = x.english_name;
    container.label = x.persian_name;
    container.label = (
      <div>
        <Image src={`${x?.flag_image}`} alt={""} height={35} width={35} />{" "}
        {x.persian_name}
      </div>
    );
    return container;
  });

  return (
    <Select
      placeholder={
        <div
          style={{
            overflow: "hidden",
            textOverflow: "clip",
            whiteSpace: "nowrap",
          }}
        >
          زبان، استاد یا دوره مورد نظرت رو جست و جو کن
        </div>
      }
      options={options}
      styles={customStyles}
      noOptionsMessage={() => null}
      closeMenuOnSelect={false}
      onChange={(e) => onChange(e.value)}
      components={{
        DropdownIndicator,
        IndicatorSeparator,
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,

        colors: {
          ...theme.colors,
          primary25: "#ff237a",
          primary: "none",
        },
      })}
    />
  );
};

export default Search;
