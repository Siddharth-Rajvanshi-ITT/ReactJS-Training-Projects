import { item } from "./item";

export type MenuItems = {
  card: {
    info: item;
  };
};

export const isMenuItems = (data: any): boolean => {
  return "card" in data && "info" in data.card && "id" in data.card.info;
};
