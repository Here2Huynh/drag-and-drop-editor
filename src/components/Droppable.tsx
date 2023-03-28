import { useDroppable } from "@dnd-kit/core";
import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

interface IDroppable {
  id: string;
  style?: React.CSSProperties | undefined;
}

export const Droppable = (props: PropsWithChildren<IDroppable>) => {
  const { id, children, style } = props;
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: {},
  });
  const boxStyle = {
    backgroundColor: isOver ? "green" : undefined,
    // height: 50,
    ...style,
  };

  // console.log("children", children);

  return (
    <Box ref={setNodeRef} style={boxStyle}>
      {children}
    </Box>
  );
};
