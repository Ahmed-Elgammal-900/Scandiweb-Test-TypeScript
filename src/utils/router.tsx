import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import ProductsShow from "../components/ProductsList/ProductsShow";
import ProductPage from "../components/ProductPage/ProductPage";
import ErrorPage from "../components/ErrorPage";
import Redirect from "../components/Redirect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Redirect />,
      },
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
]);
