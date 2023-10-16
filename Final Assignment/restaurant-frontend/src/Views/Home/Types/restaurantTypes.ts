export type restaurant = {
  type: string;
  subtype: string;
  data: {
    id: number;
    name: string;
    area: string;
    totalRatingsString: string;
    cloudinaryImageId: string;
    cuisines: string[];
    address: string;
    deliveryTime: number;
    locality: string;
    veg: boolean;
    favorite: boolean;
    availability: {
      opened: boolean;
      nextOpenMessage: string;
      nextCloseMessage: string;
    };
    avgRating: string;
    totalRatings: number;
    new: boolean;
  };
};

export const isRestaurant = (data: any): boolean => {
  return "data" in data && "id" in data.data;
};
