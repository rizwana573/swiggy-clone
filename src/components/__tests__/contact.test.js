import Contact from "../Contact";
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";

describe("Contact Page Test Cases", ()=> {
it("Should load Contact component", ()=> {
    render(<Contact/>);

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument();
})
it("Should have input with placeholder name", () => {
    render(<Contact/>)
    const namePlaceholder = screen.getByPlaceholderText(/name/i);
    expect(namePlaceholder).toBeInTheDocument();
})

it("Should load input fields", ()=> {
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox")

    expect(inputBoxes.length).toBe(2);
})

it("Should have button with submit text", ()=> {
    render(<Contact/>);

   // const submitBtn = screen.getByRole("button")
   const submitBtn = screen.getByText(/submit/i)

    //expect(submitBtn).toHaveTextContent();
    expect(submitBtn).toBeInTheDocument();
})

})

