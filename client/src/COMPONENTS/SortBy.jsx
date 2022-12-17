import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default React.memo(function SelectSmall({
  sortByExpensive,
  sortByAlphabet,
  sortBySize,
}) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 165 }} size="small">
      <InputLabel id="demo-select-small">Сортировать по</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10} onClick={() => sortBySize("title")}>
          Размеру
        </MenuItem>
        <MenuItem value={20} onClick={() => sortByExpensive()}>
          Цене
        </MenuItem>
        <MenuItem value={30} onClick={() => sortByAlphabet("title")}>
          Алфавиту
        </MenuItem>
      </Select>
    </FormControl>
  );
});
