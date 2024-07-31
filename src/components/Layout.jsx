import React, { Suspense, useMemo, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { publicRoutes, privateRoutes } from "../routes/Approutes";
import Apploading from "./shared/loaders/Apploading";
import PrivateRoute from "../routes/PrivateRoute";

function Layout() {
  const { isUserAuthenticated, Registerd_User_info } = useSelector(
    (state) => state.user
  );

  const Userid = useMemo(() => Registerd_User_info?._id, [Registerd_User_info]);

  return (
    <Suspense fallback={<Apploading />}>
      <Routes>
        {isUserAuthenticated ? (
          <Route
            path="/"
            element={<Navigate to={`/chat/${Userid}`} replace />}
          />
        ) : (
          <Route path="/" element={<Navigate to="/auth" replace />} />
        )}

        {publicRoutes.map(({ path, element, children }) => (
          <Route key={path} path={path} element={element}>
            {children &&
              children.map(({ path: childPath, element: childElement }) => (
                <Route
                  key={childPath}
                  path={childPath}
                  element={childElement}
                  index
                />
              ))}
          </Route>
        ))}

        {privateRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PrivateRoute element={element} />}
          />
        ))}

        {/* Catch-all route */}
        <Route
          path="*"
          element={
            <Navigate
              to={isUserAuthenticated ? `/chat/${Userid}` : "/auth"}
              replace
            />
          }
        />
      </Routes>
    </Suspense>
  );
}

export default Layout;

// {/* Error page route */}
// <Route path="/error" element={<Errorpage />} />

// {/* Catch-all route */}
// <Route path="*" element={<Navigate to="/error" replace />} />
