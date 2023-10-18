export type item = {
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
  isBestseller: boolean;
  ratings: {
    aggregatedRating: {
      rating: string;
      ratingCount: string;
      ratingCountV2: string;
    };
  };
};
