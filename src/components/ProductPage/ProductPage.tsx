import { useState, useLayoutEffect, type ChangeEvent, type JSX } from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client/react";
import "../../css/ProductPage.css";
import "bootstrap/dist/css/bootstrap.css";
import Gallery from "./Gallery";
import Info from "./Info";
import { PdpContext } from "../../utils/PdpContext";
import PDPPlaceholder from "../Placeholders/PDPPlaceholder";
import { GET_PRODUCT } from "../../utils/queries";
import type { Product, SelectedOptions } from "../../utils/Types";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../features/shoppingcartSlice";

type Options = {
  [key: string]: string;
};

const ProductPage = (): JSX.Element => {
  const { productId } = useParams();
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const dispatch = useAppDispatch();

  const {
    data: data,
    loading: loading,
    error: error,
  } = useQuery<{ product: Product }>(GET_PRODUCT, {
    variables: { id: productId },
  });

  useLayoutEffect(() => {
    if (data?.product) {
      const options: Options = {};
      data.product.attributes.forEach(({ id }) => {
        options[id] = "";
      });
      setSelectedOptions(options);
    }
  }, [data]);

  if (loading) {
    return <PDPPlaceholder />;
  }

  if (error) {
    throw error;
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [fieldName]: event.target.value,
    }));
  };

  const areAllFieldsSelected = () => {
    return Object.values(selectedOptions).every((option) => option !== "");
  };

  const handleSubmittedData = () => {
    const payload = {
      product: { ...data!.product, count: 1 },
      selectedOptions: selectedOptions,
      fromProductPage: true,
    };

    dispatch(addToCart(payload));

    const options: Options = {};
    data?.product.attributes.forEach(({ id }) => {
      options[id] = "";
    });
    setSelectedOptions(options);
  };

  const {
    product: {
      gallery,
      name,
      attributes,
      description,
      instock,
      prices: {
        amount,
        currency: { symbol },
      },
    },
  } = data!;
  return (
    <div className="container product-page">
      <div className="product-info d-flex justify-content-between">
        <Gallery gallery={gallery} instock={instock} />
        <PdpContext
          value={{
            handleChange,
            areAllFieldsSelected,
            handleSubmittedData,
            selectedOptions,
            amount,
            symbol,
            instock,
          }}
        >
          <Info name={name} attributes={attributes} description={description} />
        </PdpContext>
      </div>
    </div>
  );
};

export default ProductPage;
