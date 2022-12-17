import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectSmall = React.memo(
  ({ sortByExpensive, sortByCheap, sortByPopularity }) => {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Цена</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10} onClick={() => sortByCheap()}>
            Самые Дешёвые
          </MenuItem>
          <MenuItem value={20} onClick={() => sortByExpensive()}>
            Самые Дорогие
          </MenuItem>
          <MenuItem value={30} onClick={() => sortByPopularity()}>
            Популярные
          </MenuItem>
        </Select>
      </FormControl>
    );
  }
);

export default SelectSmall;
