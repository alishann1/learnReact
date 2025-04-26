import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import About from "./components/pages/about/About";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Clients from "./components/pages/clients/Clients";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/Clients",
    element: <Clients />,
  },
]);

export default router;
