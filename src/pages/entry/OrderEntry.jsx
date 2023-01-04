import { useState } from "react";
import { useOrderDetails } from "../../contexts/OrderDetails";
import Options from "./Options";
import { formatCurrency } from "../../utilities";
export default function OrderEntry() {
  const { totals } = useOrderDetails();
  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toopings" />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
    </div>
  );
}
