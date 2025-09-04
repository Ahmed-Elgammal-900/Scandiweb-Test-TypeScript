import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;

const GET_PRODUCT = gql`
  query GetProduct($id: String!) {
    product(id: $id) {
      id
      name
      gallery
      description
      instock
      attributes {
        id
        items {
          id
          value
          displayValue
        }
        name
        type
      }
      prices {
        amount
        currency {
          symbol
          label
        }
      }
      category
    }
  }
`;

const GET_PRODUCTS = gql`
  query GetProducts($category: String!) {
    products(category: $category) {
      id
      name
      gallery
      instock
      attributes {
        id
        items {
          id
          value
          displayValue
        }
        name
        type
      }
      prices {
        amount
        currency {
          symbol
          label
        }
      }
      category
    }
  }
`;

const SEND_PRODUCTS = gql`
  mutation CreateOrders($ItemInput: [ItemInput]!) {
    createOrders(items: $ItemInput)
  }
`;

export { GET_CATEGORIES, GET_PRODUCTS, GET_PRODUCT, SEND_PRODUCTS };
