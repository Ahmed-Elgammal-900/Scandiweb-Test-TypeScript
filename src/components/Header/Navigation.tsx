import { useContext, useEffect, type JSX } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router";
import { NavContext } from "../../utils/NavContext";

const Navigation = (): JSX.Element => {
  const categories = useContext(NavContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { category: currentPath } = useParams();

  useEffect(() => {
    if (!categories.length) return;

    if (location.pathname.endsWith("/") && location.pathname !== "/") {
      const cleanPath = location.pathname.replace(/\/$/, "");
      navigate(cleanPath, { replace: true });
      return;
    }

    if (currentPath && !categories.includes(currentPath.toLowerCase())) {
      throw new Response("Not Found", { status: 404 });
    }
  }, [categories, location.pathname, navigate, currentPath]);

  const updatedCategories = categories.map((name) => {
    return {
      name,
      path: name,
      active: currentPath === name,
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
