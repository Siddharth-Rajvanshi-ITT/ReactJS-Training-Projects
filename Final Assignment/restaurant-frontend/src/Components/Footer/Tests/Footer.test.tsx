import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import constants from "../../../Utilities/Constansts/lableConstancts.json";

describe("Footer", () => {
  test("it checks copyright text", () => {
    render(<Footer />);

    const copyright = screen.getByText(constants.footer.copyright);
    expect(copyright).toBeInTheDocument();

    const madeBy = screen.getByText(constants.footer.madeBy);
    expect(madeBy).toBeInTheDocument();
  });
});
