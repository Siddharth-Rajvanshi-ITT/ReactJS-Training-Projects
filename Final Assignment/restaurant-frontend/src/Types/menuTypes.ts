export type MenuItems = {
  card: {
    info: {
      id: number;
      name: string;
      category: string;
      description: string;
      imageId: string;
      isVeg: number;
      price: number;
      addons: {
        choices: {
          id: number;
          name: string;
          price: number;
          isVeg: number;
        }[];
      };
    };
  };
};

export const isMenuItems = (data: any): boolean => {
  return "card" in data && "info" in data.card && "id" in data.card.info;
};
