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
import AllUsers from "../pages/dashboard/AllUsers";
import AllPublisher from "../pages/dashboard/AllPublisher";
import AdminAllArticle from "../pages/dashboard/AdminAllArticle";
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
        path: "/dashboard/chart",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/all-user",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/add-publisher",
        element: <AllPublisher />,
      },
      {
        path: "/dashboard/admin-all-articles",
        element: <AdminAllArticle />,
      },
    ],
  },
]);

export default router;
