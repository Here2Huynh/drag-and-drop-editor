import { Box, Stack } from "@mui/material";
import {
  IComponent,
  ILayoutCell,
  ISideBarComponents,
} from "../constants/initialData";
import { Column } from "./Column";
import { Droppable } from "./Droppable";

interface IRow {
  row: ILayoutCell;
  currentPath: string;
  components: ISideBarComponents;
}

export const Row = (props: IRow) => {
  const { row, components } = props;
  const renderColumn = (
    column: ILayoutCell | IComponent,
    currentPath: string
  ) => (
    <Column column={column} currentPath={currentPath} components={components} />
  );

  return (
    <Box
      sx={{
        border: "1px solid red",
        minHeight: 100,
        paddingY: 4,
      }}
    >
      <p>{row.id}</p>
      <Box>
        <Stack
          direction="row"
          sx={{
            width: "100%",
          }}
        >
          <Droppable id={props.currentPath + "-0"} style={{ width: 25 }} />
          <Box sx={{ border: "1px solid blue", minHeight: 100, width: "100%" }}>
            {row.children?.map((column, idx) => {
              const currentPath = `${props.currentPath}-${idx}`;
              // console.log("currentPath - row", currentPath);
              return (
                <Box key={idx * Math.random()}>
                  {renderColumn(column, currentPath)}
                </Box>
              );
            })}
          </Box>
          <Droppable id={props.row.id} style={{ width: 25 }} />
        </Stack>
      </Box>
    </Box>
  );
};
