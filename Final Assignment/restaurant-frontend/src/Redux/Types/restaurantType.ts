import { restaurant } from "../../Views/Home/Types/restaurantTypes";

export type restaurantType = {
  restaurants: restaurant[];
  loading: boolean;
  error: Error | null;
};
