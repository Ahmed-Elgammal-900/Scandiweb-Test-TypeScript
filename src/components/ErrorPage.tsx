import { useRouteError, useNavigate, isRouteErrorResponse } from "react-router";
import "../css/ErrorPage.css";
import type { JSX } from "react";

interface ErrorInfo {
  title: string;
  message: string;
  statusCode: string | number;
}

const ErrorPage = (): JSX.Element => {
  const error = useRouteError();
  const navigate = useNavigate();

  const getErrorInfo = (): ErrorInfo => {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return {
          title: "Page Not Found",
          message: "The page you're looking for doesn't exist.",
          statusCode: "404",
        };
      }

      if (error.status >= 500) {
        return {
          title: "Server Error",
          message: "Something went wrong on our end.",
          statusCode: error.status,
        };
      }

      return {
        title: "Request Error",
        message: error.statusText || "Something went wrong with your request.",
        statusCode: error.status,
      };
    }
    if (error instanceof Error) {
      return {
        title: "Something went wrong",
        message: error.message,
        statusCode: "Error",
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
