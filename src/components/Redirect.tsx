import { Navigate, useOutletContext } from "react-router";
import type { Categories } from "../utils/Types";

const Redirect = () => {
  const {
    categories: [{ name }],
  } = useOutletContext<Categories>();

  const firstCategory = name.toLowerCase();

  return <Navigate to={`/${firstCategory}`} replace />;
};

export default Redirect;
