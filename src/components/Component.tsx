import { Box } from "@mui/system";
import {
  IComponent,
  ILayoutCell,
  ISideBarComponents,
} from "../constants/initialData";
import { Draggable } from "./Draggable";

interface IComponentProps {
  data: ILayoutCell | IComponent;
  components: ISideBarComponents;
  currentPath: string;
}

export const Component = ({
  data,
  components,
  currentPath,
}: IComponentProps) => {
  const { id, type } = data;
  const component = components[id as keyof ISideBarComponents];

  // console.log("components", components);
  // console.log("id", id);
  // console.log("component", component);

  return (
    <Draggable id={id}>
      <Box sx={{ border: "1px dotted" }}>
        <p>{id}</p>
        <p>{component.content}</p>
      </Box>
    </Draggable>
  );
};
