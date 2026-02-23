import { createBrowserRouter } from "react-router";
import Home from "@/pages/home/page";
import { getData } from "@/service";

const router = createBrowserRouter([
  {
    path: "/",
    loader: getData,
    element: <Home />,
  },
]);

export default router;
