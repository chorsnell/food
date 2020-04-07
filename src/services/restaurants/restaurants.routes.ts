import { getRestaurants, insertRestaurant } from './restaurants.service';

// routes
export default [
  {
    path: "/",
    method: "get",
    handler: getRestaurants
  },
  {
    path: "/add",
    method: "get",
    handler: insertRestaurant
  }
];
