import { Outlet } from "react-router";
import Header from "./Header/Header";
import { useQuery } from "@apollo/client/react";
import { GET_CATEGORIES } from "../utils/queries";
import { NavContext } from "../utils/NavContext";
import Loading from "./Loading";
import { type JSX } from "react";
import type { Categories } from "../utils/Types";

const Layout = (): JSX.Element => {
  const { data, loading, error } = useQuery<Categories>(GET_CATEGORIES);

  if (error) {
    throw error;
  }

  if (loading) {
    return <Loading />;
  }

  const categories = data!.categories.map(({ name }) => name.toLowerCase());

  return (
    <>
      <NavContext value={categories!}>
        <Header />
      </NavContext>
      <Outlet context={categories} />
    </>
  );
};

export default Layout;
