import React, { memo } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { SelectMenu } from "interfaces/index";

interface Props {
  menues: SelectMenu[];
  initialValue: number | string;
  handleChange: any;
  label?: string;
}

const CustomSelect: React.FC<Props> = memo(
  ({ menues, initialValue, handleChange, label }) => {
    const menuValueHandler = (e: any) => {
      handleChange(e.target.value);
    };

    return (
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select
            label={label}
            value={initialValue}
            onChange={menuValueHandler}
            sx={{ mb: 1.4 }}
          >
            {menues?.map((menu: SelectMenu, index) => {
              return <MenuItem key={index} value={menu.value}>{menu.label}</MenuItem>;
            })}
          </Select>
        </FormControl>
    );
  }
);

export default CustomSelect;
