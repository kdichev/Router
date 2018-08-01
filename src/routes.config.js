import Home from "./components/Home";
import Booking from "./components/Booking";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import Confirmation from "./components/Confirmation";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home"
  },
  {
    path: "/booking",
    component: Booking,
    name: "Booking"
  },
  {
    path: "/booking/products",
    component: Products,
    name: "Products"
  },
  {
    path: "/booking/confirmation",
    component: Confirmation,
    name: "Confirmation"
  },
  { component: NotFound }
];

export default routes;
