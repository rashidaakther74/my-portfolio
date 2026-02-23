import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../home/Home";
import About from "../about/About";
import Service from "../services/Service";
import Experience from "../home/Experience";
import Contact from "../contact/Contact";
import Skills from "../home/Skills";
import AboutRead from "../about/AboutRead";



export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
        {
        path: "service",
        element: <Service />
      },
        {
        path: "skills",
        element: <Skills />
      },
      {
        path: "experience",
        element: <Experience />
      },
      {
        path: "AboutRead",
        element: <AboutRead />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ],
  },
]);