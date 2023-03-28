import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { useCallback, useState } from "react";
import { Droppable } from "../components/Droppable";
import { Row } from "../components/Row";
import { SideBarItem } from "../components/SideBarItem";
import { SIDEBAR_ITEMS, ComponentType } from "../constants/constants";
import { ILayoutCell, InitialData } from "../constants/initialData";
import { DndContext } from "@dnd-kit/core";
import { faker } from "@faker-js/faker";
import { insert } from "../helpers/helpers";

export const UxmPage = () => {
  const [layout, setLayout] = useState(InitialData.layout);
  const [components, setComponents] = useState(InitialData.components);

  const renderRow = (row: ILayoutCell, currentPath: string) => (
    <Row
      key={row.id}
      row={row}
      currentPath={currentPath}
      components={components}
    />
  );

  const handleDragEnd = (e: any) => {
    const { over } = e;

    console.log("e", e);
    console.log("over", over);
    console.log("layout", layout);

    if (over) {
      const pathCount = over.id.split("-");

      setLayout((prevState) => {
        const idx = parseInt(over.id);
        const sideBarItem = SIDEBAR_ITEMS.find((i) => i.id === e.active.id);
        console.log("pathCount", pathCount);

        if (sideBarItem) {
          // 1. move sidebar item into editor
          const newComponent = {
            id: faker.random.alphaNumeric(5),
            ...sideBarItem.component,
          };
          const newItem = {
            id: newComponent.id,
            type: ComponentType.COMPONENT,
            children: [],
          };
          let newLayoutStruct;
          switch (pathCount.length) {
            case 1:
              // adding new row
              newLayoutStruct = {
                type: ComponentType.ROW,
                id: faker.random.alphaNumeric(5),
                children: [
                  {
                    type: ComponentType.COLUMN,
                    id: faker.random.alphaNumeric(5),
                    children: [newItem],
                  },
                ],
              };
              break;
            case 2:
              // adding new column under existing row
              newLayoutStruct = {
                type: ComponentType.COLUMN,
                id: faker.random.alphaNumeric(5),
                children: [newItem],
              };
              break;
            default:
              // adding new component under existing column
              newLayoutStruct = newItem;
          }

          // for adding columns, need to update the specific child node of the parent row

          // update component cache
          setComponents({
            ...components,
            [newComponent.id]: newComponent,
          });

          return insert(prevState, idx, newLayoutStruct);

          // return [
          //   ...prevState.slice(0, idx),
          //   newLayoutStruct,
          //   ...prevState.slice(idx),
          // ];
        }

        return prevState;
      });
      console.log("layout -2", layout);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Container sx={{ padding: 2 }}>
        <Stack direction="row" spacing={1}>
          <Box
            sx={{
              width: "25%",
              height: "100%",
              border: "1px solid",
              padding: 2,
            }}
          >
            <p>side bar</p>
            {Object.values(SIDEBAR_ITEMS).map(({ id, type, component }) => (
              <SideBarItem id={id} type={type} component={component} key={id} />
            ))}
          </Box>
          <Box sx={{ width: "75%", border: "1px solid" }}>
            <p>editor</p>
            <Box sx={{ padding: 2 }}>
              {layout.map((row, idx) => {
                const currentPath = `${idx}`;
                // console.log("currentPath - editor", currentPath);
                return (
                  <Box key={idx * Math.random()}>
                    <Droppable id={currentPath} style={{ height: 25 }} />
                    {renderRow(row, currentPath)}
                  </Box>
                );
              })}
              <Droppable id={layout.length.toString()} style={{ height: 25 }} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </DndContext>
  );
};

// TODO: handle the layout state update when drag happens
// 1. redo pathing logic
// 2. add insert logic then add sidebar to editor logic
// 3. seems like the path logic needs to be refined to track where the drag into columns
