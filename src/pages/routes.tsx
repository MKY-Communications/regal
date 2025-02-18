import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./HomePage";
import ShadyPage from "./ShadyPage/ShadyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path:"/shady",
    element: <ShadyPage />
  }
]);



export default router;