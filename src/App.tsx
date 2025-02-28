import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Cart } from "./pages/cart/cart";


const router = createBrowserRouter([
  {
    element: //layout,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  }
]);


export { router }