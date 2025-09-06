import { Outlet } from "react-router";
import Header from "./Header/Header";
import { useQuery } from "@apollo/client/react";
import { GET_CATEGORIES } from "../utils/queries";
import { NavContext } from "../utils/NavContext";
import Loading from "./Loading";
import { useEffect, type JSX } from "react";
import type { Categories } from "../utils/Types";
import { loadFromLocalStorage } from "../utils/LoadFromLocalStorage";
import { useAppDispatch } from "../app/hooks";
import { setProducts } from "../features/shoppingcartSlice";

const Layout = (): JSX.Element => {
  const { data, loading, error } = useQuery<Categories>(GET_CATEGORIES);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedProducts = loadFromLocalStorage();
    if (savedProducts.length) {
      dispatch(setProducts(savedProducts));
    }
  }, []);

  if (error) {
    throw error;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <NavContext value={data!}>
        <Header />
      </NavContext>
      <Outlet />
    </>
  );
};

export default Layout;
