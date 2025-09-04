import { useAppSelector } from "../../app/hooks";
import { selectResponse } from "../../features/shoppingcartSlice";

const ResponseMassege = () => {
  const  responseData = useAppSelector(selectResponse);
  return (
    <p
      style={{
        height: "350px",
        display: responseData ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {responseData}
    </p>
  );
};

export default ResponseMassege;
