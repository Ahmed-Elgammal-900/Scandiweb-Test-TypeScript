import { Link } from "react-router";
import type { JSX } from "react";

const NotFound = (): JSX.Element => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default NotFound;
