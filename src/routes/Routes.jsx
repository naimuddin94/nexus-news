import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddArticle from "../pages/addArticle/AddArticle";
import PrivateRoute from "./PrivateRoute";
import AllArticles from "../pages/allArticles.jsx/AllArticles";
import Subscription from "../pages/subscription/Subscription";
import Dashboard from "../pages/dashboard/Dashboard";
import AllUsers from "../pages/dashboard/AllUsers";
import AllPublisher from "../pages/dashboard/AllPublisher";
import AdminAllArticle from "../pages/dashboard/AdminAllArticle";
import DashboardLayout from "../layout/DashboardLayout";
import MyArticle from "../pages/myArticles/MyArticle";
import PremiumArticles from "../pages/premiumArticles/PremiumArticles";
import AdminRoute from "./AdminRoute";
import ArticleDetails from "../pages/articleDetails/ArticleDetails";
import PremiumRoute from "./PremiumRoute";
import { axiosBase } from "../hooks/useAxiosSecure";
import PublisherRoute from "./PublisherRoute";
import NotFound from "../pages/notFound/NotFound";
import PaymentElement from "../payment/PaymentElement";
import SearchResult from "../pages/searchResult/SearchResult";
import ManageArticles from "../pages/manageArticle/ManageArticles";
import UpdateArticle from "../pages/updateArticle/UpdateArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-article",
        element: (
          <PrivateRoute>
            <PublisherRoute>
              <AddArticle />
            </PublisherRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-articles",
        element: <AllArticles />,
      },
      {
        path: "/premium-articles",
        element: (
          <PremiumRoute>
            <PremiumArticles />
          </PremiumRoute>
        ),
      },
      {
        path: "/subscription",
        element: (
          <PrivateRoute>
            <Subscription />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-articles",
        element: (
          <PrivateRoute>
            <MyArticle />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-articles",
        element: (
          <PublisherRoute>
            <ManageArticles />
          </PublisherRoute>
        ),
      },
      {
        path: "/articles/:id",
        element: (
          <PrivateRoute>
            <ArticleDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await axiosBase(`/articles/${params.id}`);
          return res.data;
        },
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <PaymentElement />
          </PrivateRoute>
        ),
      },
      {
        path: "/search",
        element: <SearchResult />,
      },
      {
        path: "/update-article/:id",
        element: (
          <PublisherRoute>
            <UpdateArticle />
          </PublisherRoute>
        ),
        loader: async ({ params }) => {
          const res = await axiosBase(`/articles/${params.id}`);
          return res.data;
        },
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
    path: "dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "all-user",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "add-publisher",
        element: (
          <AdminRoute>
            <AllPublisher />
          </AdminRoute>
        ),
      },
      {
        path: "admin-all-articles",
        element: (
          <AdminRoute>
            <AdminAllArticle />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
