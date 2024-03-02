import React from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements());

export default function App() {
  return <RouterProvider router={router} />;
}
