import { getRestaurants } from './restaurants.service';

// routes
export default [
  {
    path: "/",
    method: "get",
    handler: getRestaurants
  }
];