import type { ChangeEvent } from "react";

interface Category {
  name: string;
}

interface Categories {
  categories: Category[];
}

interface ErrorResponse extends Error {
  status: number;
  message: string;
}

interface GalleryProps {
  gallery: string[];
}

interface AttributeInfo {
  id: string;
  name: string;
  items: Item[];
  type: string;
}

interface Item {
  id: string;
  displayValue: string;
  value: string;
}

interface Product {
  id: string;
  name: string;
  instock: string;
  description: string;
  gallery: string[];
  category: string;
  attributes: AttributeInfo[];
  prices: Price;
}

interface Price {
  amount: number;
  currency: Currency;
}

interface Currency {
  label: string;
  symbol: string;
}

interface SelectedOptions {
  [key: string]: string;
}

interface GalleryContextType {
  image: number;
  instock: string;
  handleImageIndicators: (index: number) => void;
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
}

interface PdpContextType {
  handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => void;
  areAllFieldsSelected: () => boolean;
  handleSubmittedData: () => void;
  selectedOptions: SelectedOptions;
  amount: number;
  symbol: string;
  instock: string;
}

interface ProductItem extends Product {
  count: number;
}

interface ProductCart {
  product: ProductItem;
  selectedOptions: SelectedOptions;
}

export type {
  Categories,
  ErrorResponse,
  GalleryProps,
  AttributeInfo,
  Product,
  SelectedOptions,
  GalleryContextType,
  Item,
  PdpContextType,
  ProductCart,
};
