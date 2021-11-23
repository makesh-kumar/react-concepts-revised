import Hi from "../Hi";
import { render, screen, fireEvent, createEvent } from "@testing-library/react";

describe("Hi Component", () => {
  it("just random test", () => {
    render(<Hi />);
    const countValue = screen.getByTestId("countvalue");
    const btn = screen.getAllByRole("button");
    expect(countValue.textContent).toBe("0");
    fireEvent.click(btn[1]);
    expect(countValue.textContent).toBe("1");
    fireEvent.click(btn[0]);
    expect(countValue.textContent).toBe("0");

    //we can create new event and attach to fire event
    const myEvent = createEvent.click(btn[0]);
    fireEvent(btn[0], myEvent);
    expect(countValue.textContent).toBe("-1");
  });
});
