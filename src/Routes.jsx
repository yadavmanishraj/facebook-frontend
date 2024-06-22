import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MarketPlacePage from "./pages/MarketPlacePage";
import App from "./App";

const facebookRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/marketplace",
    element: <MarketPlacePage />,
  },
]);

export default facebookRouter;
