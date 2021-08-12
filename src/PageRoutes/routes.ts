import { Home, } from "../components/pages";
import { RouteI } from "../interfaces";
enum routePaths {
  Home = "/",
}

const routes: Array<RouteI> = [
  {
    path: routePaths.Home,
    component: Home,
  },
];

export { routePaths, routes };
