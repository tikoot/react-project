import React from "react";
import Link from "next/link";

const Cart = ({ selectedNumber, isClient }: any) => {
  return (
    <Link href={"/checkout"}>
      <div className="cart-container">
        <img src="/img/grocery-store.png" alt="" className="w-4 h-4" />
        <span className="quantity">{isClient ? selectedNumber : 0}</span>
      </div>
    </Link>
  );
};

export default Cart;
