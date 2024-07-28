import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("../components/pages/Homepage"));
const Authpage = lazy(() => import("../components/pages/Authpage"));
const Publicprofilepage = lazy(
  () => import("../components/pages/Publicprofilepage")
);
const Chatpage = lazy(() => import("../components/pages/Chatpage"));
const Passwordchangepage = lazy(
  () => import("../components/pages/Passwordchangepage")
);
const Errorpage = lazy(() => import("../components/pages/Errorpage"));
const Notfoundpage = lazy(() => import("../components/pages/Notfoundpage"));
const Emailverifypage = lazy(
  () => import("../components/pages/Emailverifypage")
);

export const publicRoutes = [
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "auth",
        element: <Authpage />,
      },
      {
        path: "email-verify",
        element: <Emailverifypage />,
      },
      {
        path: "change-password",
        element: <Passwordchangepage />,
      },
    ],
  },
  {
    path: "/error",
    element: <Errorpage />,
  },
  {
    path: "*",
    element: <Notfoundpage />,
  },
];

export const privateRoutes = [
  {
    path: "/profile/:id",
    element: <Publicprofilepage />,
  },
  {
    path: "/chat/:id",
    element: <Chatpage />,
  },
];