import { useDraggable } from "@dnd-kit/core";
import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

interface IDraggable {
  id: string;
}

export const Draggable = (props: PropsWithChildren<IDraggable>) => {
  const { id } = props;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Box ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </Box>
  );
};
