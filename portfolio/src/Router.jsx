import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import About from "./components/pages/about/About";
import Services from "./components/pages/services/Services";
import WorkSkills from "./components/pages/workskills/WorkSkills";
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
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/WorkSkills",
    element: <WorkSkills />,
  },
]);

export default router;
