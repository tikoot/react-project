import React, { useEffect, useState, useReducer } from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../hooks";
import Cart from "./Cart";

export interface Product {
  id: number;
  title: string;
  price: string;
  thumbnail: string;
  description: string;
}

interface Props {
  products: Product[];
}

const ProductsGrid = ({ products }: Props) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState<string>("");
  const [sorted, setSorted] = useState<boolean>(false);

  const allProducts: Product[] = products.filter((product) => {
    return search.toLowerCase() === ""
      ? product
      : product.title.toLowerCase().includes(search.toLowerCase());
  });

  const sortedProducts: Product[] = sorted
    ? [...allProducts].sort((a, b) => a.title.localeCompare(b.title))
    : allProducts;

  const toggleSort = () => {
    setSorted(!sorted);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("Search term:", search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  // const [value, setValue] = useLocalStorage("cart", []);

  // const handleClick = (productId: number) => {};
  interface SelectedProduct {
    id: number;
    product: Product;
    count: number;
  }

  const initialState: SelectedProduct[] = [];

  type Action =
    | { type: "INCREMENT"; payload: number }
    | { type: "DECREMENT"; payload: number }
    | { type: "RESET" }
    | { type: "UPDATE"; payload: SelectedProduct[] };

  function reducer(
    state: SelectedProduct[],
    action: Action
  ): SelectedProduct[] {
    switch (action.type) {
      case "INCREMENT": {
        const selectedProductIdx = state.findIndex(
          (p) => p.id === action.payload
        );
        if (selectedProductIdx === -1) {
          return [
            ...state,
            {
              id: action.payload,
              product: products.find((p) => p.id === action.payload)!,
              count: 1,
            },
          ];
        }
        const clone = [...state];
        const selectedProduct = clone[selectedProductIdx];
        const updatedSelectedProduct = {
          ...selectedProduct,
          count: selectedProduct.count + 1,
        };
        clone[selectedProductIdx] = updatedSelectedProduct;
        return clone;
      }
      case "DECREMENT": {
        const selectedProductIdx = state.findIndex(
          (p) => p.id === action.payload
        );
        if (selectedProductIdx === -1) {
          return state;
        }
        const clone = [...state];
        const selectedProduct = clone[selectedProductIdx];
        if (selectedProduct.count === 1) {
          clone.splice(selectedProductIdx, 1);
        } else {
          const updatedSelectedProduct = {
            ...selectedProduct,
            count: selectedProduct.count - 1,
          };
          clone[selectedProductIdx] = updatedSelectedProduct;
        }
        return clone;
      }
      case "RESET":
        return initialState;
      case "UPDATE":
        return action.payload;
      default:
        return state;
    }
  }

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [value, setCachedValue] = useLocalStorage(
    "selectedProducts",
    initialState
  );
  const [selectedProducts, dispatch] = useReducer<
    React.Reducer<SelectedProduct[], Action>
  >(reducer, value);

  useEffect(() => {
    setCachedValue(selectedProducts);
  }, [selectedProducts, setCachedValue]);

  const handleClick = (product: Product) => {
    dispatch({ type: "INCREMENT", payload: product.id });
  };

  const selectedNumber = selectedProducts.reduce(
    (acc: number, curr: SelectedProduct) => {
      return acc + curr.count;
    },
    0
  );

  return (
    <>
      <div>
        <Cart selectedNumber={selectedNumber} isClient={isClient} />
      </div>
      <div className="py-4">
        <div className="max-w-[790px] m-auto bg-[#f4edf2] py-[10px] pl-[32px] pr-[30px] text-lg text-[#666] rounded-[34px] flex items-center h-[60px]">
          <input
            className="text-[16px] text-[#333] bg-transparent border-transparent max-w-[790px] w-full outline-none"
            type="text"
            placeholder={t("search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="">
            <button type="button" onClick={toggleSort}>
              {t("sort")}
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-20">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
          {sortedProducts.map((product) => {
            return (
              <div key={product.id}>
                <Card
                  product={product}
                  handleClick={handleClick}
                  // id={product.id}
                  // name={product.title}
                  // description={product.description}
                  // image={product.thumbnail}
                  // price={product.price}
                  // btnText={t("addToCart")}
                  // handleClick={handleClick}
                />
              </div>
              // <Link href={`/products/${product.id}`} key={product.id}>

              // </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsGrid;
