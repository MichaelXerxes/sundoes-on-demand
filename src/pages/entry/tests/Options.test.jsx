import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("dispalys image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImages).toHaveLength(2);

  // confirm alt test of images

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilia scoop"]);
});

test("Dispalys image for each toppings option from server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  const images = await screen.findAllByRole("img", { name: /topping$/i });

  expect(images).toHaveLength(3);

  // confirm alt test of images

  const imageTitles = images.map((img) => img.alt);
  expect(imageTitles).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
