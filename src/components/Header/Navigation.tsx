import { useContext, useEffect, type JSX } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router";
import { NavContext } from "../../utils/NavContext";

const Navigation = (): JSX.Element => {
  const categories = useContext(NavContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { category: currentPath } = useParams();

  useEffect(() => {
    if (location.pathname.endsWith("/") && location.pathname !== "/") {
      const cleanPath = location.pathname.replace(/\/$/, "");
      navigate(cleanPath, { replace: true });
    }
  }, [categories, location.pathname, navigate]);

  if (currentPath && !categories.includes(currentPath)) {
    throw new Response("Not Found", { status: 404 });
  }

  return (
    <ul className="list-unstyled d-flex gap-4 mb-0">
      {categories.map((name) => (
        <li key={name}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#5ECE7B" : "black",
              borderColor: isActive ? "#5ECE7B" : "transparent",
            })}
            to={name}
            data-testid={
              name === currentPath ? "active-category-link" : "category-link"
            }
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
