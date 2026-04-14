import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Nav from "./Components/Navigation/Nav.jsx";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Timeline from "./Components/Timeline/Timeline.jsx";
import Status from "./Components/Status/Status.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/home",
        loader: async ({ params }) => await fetch("/fridens.json"),
        Component: Home,
      },
      {
        path: "timeline", // This will show at http://localhost:5173/timeline
        Component: Timeline,
      },
      {
        path: "status",
        Component: Status,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
