import { ComponentType } from "./constants";

export interface IComponent {
  id: string;
  type: string;
  content: string;
}

export interface ISideBarComponents {
  component0: IComponent;
  component1: IComponent;
}

export interface ILayoutCell {
  type: string;
  id: string;
  children?: ILayoutCell[] | IComponent[];
}

export const InitialData = {
  layout: [
    {
      type: ComponentType.ROW,
      id: "row0",
      children: [
        {
          type: ComponentType.COLUMN,
          id: "column0",
          children: [
            {
              type: ComponentType.COMPONENT,
              id: "component0",
            },
            // {
            //   type: ComponentType.COMPONENT,
            //   id: "component1",
            // },
          ],
        },
      ],
    },
  ],
  components: {
    component0: { id: "component0", type: "label", content: "some label" },
    component1: {
      id: "component1",
      type: "separator",
      content: "some separator",
    },
  },
};
