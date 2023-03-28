import { faker } from "@faker-js/faker";

export enum ComponentType {
  SIDEBAR_ITEM = "sidebaritem",
  ROW = "row",
  COLUMN = "column",
  COMPONENT = "component",
}

export interface ISideBarItems {
  id: string;
  type: ComponentType;
  component: {
    type: string;
    content: string;
  };
}

export const SIDEBAR_ITEMS = [
  {
    id: "label-0",
    type: ComponentType.SIDEBAR_ITEM,
    component: {
      type: "Label",
      content: "some label",
    },
  },
  // {
  //   id: faker.datatype.uuid(),
  //   type: ComponentType.SIDEBAR_ITEM,
  //   component: {
  //     type: "maskedLabel",
  //     content: "some masked label",
  //   },
  // },
  {
    id: "separator-0",
    type: ComponentType.SIDEBAR_ITEM,
    component: {
      type: "Separator",
      content: "some separator",
    },
  },
  // {
  //   id: faker.datatype.uuid(),
  //   type: ComponentType.SIDEBAR_ITEM,
  //   component: {
  //     type: "spacer",
  //     content: "some spacer",
  //   },
  // },
];
