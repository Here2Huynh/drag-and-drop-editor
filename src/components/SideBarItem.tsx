import { Chip, Paper } from "@mui/material";
import { ISideBarItems } from "../constants/constants";
import { Draggable } from "./Draggable";

export const SideBarItem = ({ id, component }: ISideBarItems) => {
  return (
    <Draggable id={id}>
      <Paper elevation={3} sx={{ background: "lightgray", margin: 1 }}>
        {component.type}
      </Paper>
    </Draggable>
  );
};
