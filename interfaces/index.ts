import { categories } from "../data/categories";

export type Group = typeof categories[number];

export type ScreenShotType = {
  file: string;
  group: Group;
};
