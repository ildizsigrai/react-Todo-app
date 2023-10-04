import { ListItem, TextField } from "@mui/material";
import Create from "@mui/icons-material/Create"
import DrawIcon from '@mui/icons-material/Draw';
import {InputAdornment} from "@mui/material";
import {IconButton} from "@mui/material";
import { useState } from "react";

export default function TodoForm({addTodo}) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="outlined-basic" 
          label="Add ToDo" 
          variant="outlined" 
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" aria-label="toggle password visibility" edge="end">
                 <DrawIcon/>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
