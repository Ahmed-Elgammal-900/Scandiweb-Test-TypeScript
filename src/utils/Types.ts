import type { ChangeEvent } from "react";

type Category = {
  name: string;
};

type Categories = {
  categories: Category[];
};

type GalleryProps = {
  gallery: string[];
};

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

type Price = {
  amount: number;
  currency: Currency;
};

type Currency = {
  label: string;
  symbol: string;
};

type SelectedOptions = {
  [key: string]: string;
};

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

type ProductCart = {
  product: ProductItem;
  selectedOptions: SelectedOptions;
};

type ProductData = {
  product: Product;
};

export type {
  Categories,
  GalleryProps,
  AttributeInfo,
  Product,
  SelectedOptions,
  GalleryContextType,
  Item,
  PdpContextType,
  ProductCart,
  ProductData
};
