import { lazy } from "react";

const Homepage = lazy(() => import("../components/pages/Homepage"));
const Authpage = lazy(() => import("../components/pages/Authpage"));
const Publicprofilepage = lazy(() =>
  import("../components/pages/Publicprofilepage")
);
const Chatpage = lazy(() => import("../components/pages/Chatpage"));
const Errorpage = lazy(() => import("../components/pages/Errorpage"));
const Notfoundpage = lazy(() => import("../components/pages/Notfoundpage"));

export const publicRoutes = [
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "auth",
        element: <Authpage />,
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
    element: Publicprofilepage,
  },
  {
    path: "/chat/:userid",
    element: Chatpage,
  },
];
