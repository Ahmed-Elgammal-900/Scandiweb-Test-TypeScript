import type { JSX } from "react";

const InfoPlaceHolder = (): JSX.Element => {
  return (
    <div className="info placeholder-wave">
      <div
        className="placeholder"
        style={{ width: "200px", height: "25px" }}
      ></div>
      <div
        className="placeholder attr-name"
        style={{ marginTop: "50px" }}
      ></div>
      <div className="placeholder attributes"></div>
      <div
        className="placeholder attr-name"
        style={{ marginTop: "30px" }}
      ></div>
      <div className="placeholder attributes"></div>
      <div className="placeholder price"></div>
      <div className="placeholder amount"></div>
      <div className="button placeholder"></div>
      <div className="description mt-4">
        <span className="placeholder col-7"></span>
        <span
          className="placeholder col-3"
          style={{ marginLeft: "13px" }}
        ></span>
        <div className="margin" style={{ margin: "7px 0" }}></div>
        <span className="placeholder col-5"></span>
        <span
          className="placeholder col-5"
          style={{ marginLeft: "7px" }}
        ></span>
        <div className="margin" style={{ margin: "7px 0" }}></div>
        <span className="placeholder col-3"></span>
        <span
          className="placeholder col-7"
          style={{ marginLeft: "5px" }}
        ></span>
      </div>
    </div>
  );
};

export default InfoPlaceHolder;
