import { getMenu } from './menus.service';

// routes
export default [
  {
    path: "/restaurants/:id/menu",
    method: "get",
    handler: getMenu
  }
];
