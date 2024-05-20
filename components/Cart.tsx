import React from "react";
import Link from "next/link";

const Cart = ({ selectedNumber, isClient }: any) => {
  return (
    <Link href={"/checkout"}>
      <div className="">
        <img src="/img/grocery-store.png" alt="" className="w-4 h-4" />
        <span className="">{isClient ? selectedNumber : 0}</span>
      </div>
    </Link>
  );
};

export default Cart;
