import { render, screen } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import App from "../App";

test("order phases for happy path", () => {
  render(<App />);

  //add ice cream scoops and toppings

  //fond and click order button

  //check summary information based on order

  //accept terms and conditions and click button to confirm order

  //confirm order number on confirmation page

  //click 'new order' button on confirmation page

  // do we need to await anything to avoid test errors?
});
