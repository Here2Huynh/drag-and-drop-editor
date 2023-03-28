import { Box } from "@mui/material";
import {
  IComponent,
  ILayoutCell,
  ISideBarComponents,
} from "../constants/initialData";
import { Component } from "./Component";
import { Droppable } from "./Droppable";

interface IColumn {
  currentPath: string;
  components: ISideBarComponents;
  column: ILayoutCell;
}

export const Column = (props: IColumn) => {
  const { components, currentPath, column } = props;
  const { id, type, children } = column;
  const renderComponent = (
    component: ILayoutCell | IComponent,
    currentPath: string
  ) => (
    <Component
      key={currentPath}
      data={component}
      components={components}
      currentPath={currentPath}
    />
  );

  return (
    <>
      <p>{id}</p>
      <Box sx={{ minHeight: 100 }}>
        {children?.map((component, idx) => {
          const currentPath = `${props.currentPath}-${idx}`;
          // console.log("currentPath - column", currentPath);
          return (
            <Box key={currentPath} sx={{ paddingX: 2 }}>
              <Droppable id={currentPath} style={{ height: 25 }} />
              {renderComponent(component, currentPath)}
            </Box>
          );
        })}
        <Droppable id={id} style={{ height: 25 }} />
      </Box>
    </>
  );
};
