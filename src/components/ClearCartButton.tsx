"use client";
import { clearCartAction } from "../app/actions";
import { useTransition } from "react";

const ClearCartButton = ({
  addOptimistic,
}: {
  addOptimistic: (action: CartWithProducts) => void;
}) => {
  const [, startTransition] = useTransition();

  const handleClearCart = async () => {
    startTransition(() => addOptimistic({ count: 0, price: 0, products: [] }));
    await clearCartAction();
  };

  return <button onClick={handleClearCart}>Clear Cart</button>;
};

export default ClearCartButton;
