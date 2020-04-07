import { getMenu, insertMenu } from './menus.service';

// routes
export default [
  {
    path: "/restaurants/:id/menu",
    method: "get",
    handler: getMenu
  },
  {
    path: "/restaurants/:id/menu",
    method: "post",
    handler: insertMenu
  }
];
