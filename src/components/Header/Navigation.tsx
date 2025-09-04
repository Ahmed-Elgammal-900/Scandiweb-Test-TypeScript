import { useContext, useLayoutEffect, type JSX } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router";
import { NavContext } from "../../utils/NavContext";
import type { ErrorResponse } from "../../utils/Types";

const Navigation = (): JSX.Element => {
  const { categories } = useContext(NavContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { category: currentPath } = useParams();

  useLayoutEffect(() => {
    if (!categories.length) return;

    const [{ name }] = categories;

    if (location.pathname.endsWith("/") && location.pathname !== "/") {
      const cleanPath = location.pathname.replace(/\/$/, "");
      navigate(cleanPath, { replace: true });
      return;
    }

    if (location.pathname === "/" || !currentPath) {
      const firstCategoryPath = name.toLowerCase();
      navigate(`/${firstCategoryPath}`, { replace: true });
      return;
    }

    const validCategories = categories.map(({ name }) => name.toLowerCase());
    if (!validCategories.includes(currentPath)) {
      const error = new Error() as ErrorResponse;
      error.status = 404;
      throw Error;
    }
  }, [categories, location.pathname, navigate]);

  const updatedCategories = categories.map(({ name }) => {
    const path = name.toLowerCase();
    return {
      name,
      path,
      active: currentPath === path,
    };
  });

  return (
    <ul className="list-unstyled d-flex gap-4 mb-0">
      {updatedCategories.map(({ name, path, active }) => (
        <li key={name}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#5ECE7B" : "black",
              borderColor: isActive ? "#5ECE7B" : "transparent",
            })}
            to={path}
            data-testid={active ? "active-category-link" : "category-link"}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
