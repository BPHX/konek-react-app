import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import ConferenceSession from "./session";
import ConferenceLobby from "./lobby";
import { AuthProvider } from "../../hooks/use-auth";
import { AgoraProvider } from "../../hooks/use-agora";

function PageLayout() {
  return (
    <AuthProvider>
      <AgoraProvider>
        <Outlet />
      </AgoraProvider>
    </AuthProvider>
  );
}

const roomRoutes = [
  {
    path: "/room",
    element: <PageLayout />,
    children: [
      {
        path: "/room/",
        element: <Navigate to="/" />,
      },
      {
        path: "/room/:id",
        element: <ConferenceLobby />,
      },
      {
        path: "/room/:id/session",
        element: <ConferenceSession />,
      },
    ],
  },
];

export default roomRoutes;
