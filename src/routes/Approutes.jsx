import { lazy } from "react";

const Homepage = lazy(() => import("../components/pages/Homepage"));
const Authpage = lazy(() => import("../components/pages/Authpage"));
const Publicprofilepage = lazy(() =>
  import("../components/pages/Publicprofilepage")
);
const Chatpage = lazy(() => import("../components/pages/Chatpage"));

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
