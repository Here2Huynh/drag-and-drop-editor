export const insert = (arr: any[], idx: number, newItem: any) => [
  // chunk before idx
  ...arr.slice(0, idx),
  newItem,
  // chunk after idx
  ...arr.slice(idx),
];
