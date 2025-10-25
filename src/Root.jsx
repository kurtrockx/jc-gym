import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

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
import AuthContext from "./context/AuthContext.jsx";

export default function Root() {
  const [loggedIn, setLoggedIn] = useState(() => {
    // ✅ Load from localStorage (if available)
    return localStorage.getItem("loggedIn") || null;
  });

  // ✅ When loggedIn changes, save to localStorage
  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem("loggedIn", loggedIn);
    } else {
      localStorage.removeItem("loggedIn");
    }
  }, [loggedIn]);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login setLoggedIn={setLoggedIn} />,
    },
    {
      path: "/",
      element:
        loggedIn === "admin" ? <App /> : <Navigate to="/login" replace />,
      children: [
        { index: true, element: <Navigate to="dashboard" replace /> },
        { path: "dashboard", element: <DashboardPage /> },
        { path: "log session", element: <LogSessionPage /> },
        { path: "membership", element: <MembershipPage /> },
        { path: "membership/:memberName", element: <EditMemberPage /> },
        { path: "membership/add member", element: <AddMemberPage /> },
        { path: "daily log", element: <DailyLogPage /> },
        { path: "inventory", element: <InventoryPage /> },
        { path: "inventory/edit/:itemId", element: <EditItemPage /> },
        { path: "revenue", element: <RevenuePage /> },
      ],
    },
  ]);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}
