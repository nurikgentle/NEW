import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 98, zIndex: "1000" }} size="small">
      <InputLabel id="demo-select-small">L</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
        sx={{ zIndex: "1000" }}
      >
        <MenuItem sx={{ zIndex: "1000" }} value={10}>
          S
        </MenuItem>
        <MenuItem value={20}>M</MenuItem>
        <MenuItem value={30}>L</MenuItem>
      </Select>
    </FormControl>
  );
}
