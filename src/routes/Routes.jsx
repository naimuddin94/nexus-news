import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddArticle from "../pages/addArticle/AddArticle";
import PrivateRoute from "./PrivateRoute";
import AllArticles from "../pages/allArticles.jsx/AllArticles";
import PremiumArticle from "../pages/premiumArticle/PremiumArticle";
import Subscription from "../pages/subscription/Subscription";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-article",
        element: (
          <PrivateRoute>
            <AddArticle />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-articles",
        element: <AllArticles />,
      },
      {
        path: "/premium-articles",
        element: <PremiumArticle />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
