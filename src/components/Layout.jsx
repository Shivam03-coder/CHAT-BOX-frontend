import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "../routes/Approutes";
import Apploading from "./shared/loaders/Apploading";


function Layout() {
  return (
    <Suspense fallback={<Apploading />}>
    
      <Routes>
        <Route>
          {publicRoutes.map(({ path, element, children }) => (
            <Route key={path} path={path} element={element}>
              {children &&
                children.map(({ path: childPath, element: childElement }) => {
                  return (
                    <Route
                      index
                      key={childPath}
                      path={childPath}
                      element={childElement}
                    />
                  );
                })}
            </Route>
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Layout;
