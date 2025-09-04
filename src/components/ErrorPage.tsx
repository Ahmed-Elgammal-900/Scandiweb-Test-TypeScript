import { useRouteError, useNavigate } from "react-router";
import "../css/ErrorPage.css";
import type { JSX } from "react";
import type { ErrorResponse } from "../utils/Types";

const ErrorPage = (): JSX.Element => {
  const error = useRouteError() as ErrorResponse;
  const navigate = useNavigate();

  const getErrorInfo = () => {
    if (error?.status === 404) {
      return {
        title: "Page Not Found",
        message: "The page you're looking for doesn't exist.",
        statusCode: "404",
      };
    }

    if (error?.status >= 500) {
      return {
        title: "Server Error",
        message: "Something went wrong on our end.",
        statusCode: error.status,
      };
    }

    if (error?.message) {
      return {
        title: "Something went wrong",
        message: error.message,
        statusCode: error.status,
      };
    }

    return {
      title: "Unexpected Error",
      message: "An unexpected error occurred.",
      statusCode: "Error",
    };
  };

  const { title, statusCode, message } = getErrorInfo();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="error-container">
      <h1 className="error-code">{statusCode}</h1>

      <h2 className="error-title">{title}</h2>

      <p className="error-massege">{message}</p>

      <div className="Redir-buttons">
        <button onClick={handleGoBack}>← Go Back</button>

        <button onClick={handleGoHome}>🏠 Go Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;
