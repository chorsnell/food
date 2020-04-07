import { getRestaurants, getRestaurant, insertRestaurant, updateRestaurant } from './restaurants.service';

// routes
export default [
  {
    path: "/restaurants",
    method: "get",
    handler: getRestaurants
  },
  {
    path: "/restaurants/:id",
    method: "get",
    handler: getRestaurant
  },
  {
    path: "/restaurants",
    method: "post",
    handler: insertRestaurant
  },
  {
    path: "/restaurants/:id",
    method: "put",
    handler: updateRestaurant
  }
];
