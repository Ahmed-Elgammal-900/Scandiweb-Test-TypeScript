import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import ProductsShow from "../components/ProductsList/ProductsShow";
import ProductPage from "../components/ProductPage/ProductPage";
import NotFound from "../components/NotFound";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":category",
        element: <ProductsShow />,
      },
      {
        path: ":category/:productId",
        element: <ProductPage />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
