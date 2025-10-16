import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import DashboardPage from "./pages/Dashboard/DashboardPage.jsx";
import LogSessionPage from "./pages/LogSession/LogSessionPage.jsx";
import MembershipPage from "./pages/Membership/MembershipPage.jsx";
import DailyLogPage from "./pages/DailyLog/DailyLogPage.jsx";
import InventoryPage from "./pages/Inventory/InventoryPage.jsx";
import RevenuePage from "./pages/Revenue/RevenuePage.jsx";
import EditMemberPage from "./pages/Membership/EditMemberPage.jsx";
import AddMemberPage from "./pages/Membership/AddMemberPage.jsx";
import EditItemPage from "./pages/Inventory/EditItemPage.jsx";

const [loggedIn, setLoggedIn] = "admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "log session",
        element: <LogSessionPage />,
      },
      {
        path: "membership",
        element: <MembershipPage />,
      },
      {
        path: "membership/:memberName",
        element: <EditMemberPage />,
      },
      {
        path: "membership/add member",
        element: <AddMemberPage />,
      },
      {
        path: "daily log",
        element: <DailyLogPage />,
      },
      {
        path: "inventory",
        element: <InventoryPage />,
      },
      {
        path: "inventory/edit/:itemId",
        element: <EditItemPage />,
      },
      {
        path: "revenue",
        element: <RevenuePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
