import { Navigate, useOutletContext } from "react-router";

const Redirect = () => {
  const [firstCategory] = useOutletContext<string[]>();

  return <Navigate to={`/products/${firstCategory}`} replace={true} />;
};

export default Redirect;
