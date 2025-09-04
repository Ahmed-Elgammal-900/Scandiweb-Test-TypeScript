import type { JSX } from "react";
import "../css/Loading.css";

const Loading = (): JSX.Element => {
  return (
    <div className="Loading-background">
      <div className="spinner-grow spinner-grow-loading" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
