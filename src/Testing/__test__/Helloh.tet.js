import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Helloh from "../Helloh";
jest.mock("axios");

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

xit("renders with or without a name", () => {
  act(() => {
    render(<Helloh />, container);
  });
  expect(container.textContent).toContain("Hey, stranger");

  act(() => {
    render(<Helloh name="Jenny" />, container);
  });
  expect(container.textContent).toContain("Hello, Jenny!");

  act(() => {
    render(<Helloh name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});

xit("renders user data", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue",
    title: "myCustomTitle",
  };

  // axios.get.mockResolvedValueOnce(() => Promise.resolve({ data: fakeUser }));

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );
  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Helloh id="123" />, container);
  });
  expect(container.textContent).toContain("myCustomTitle");
  global.fetch.mockRestore();
});

xit("test btn click", () => {
  act(() => {
    render(<Helloh />, container);
  });
  const button = document.querySelector(".myBtn");
  expect(button.innerHTML).toBe("ToggleIt");
  expect(container.textContent).toContain("Yes");

  act(() => {
    fireEvent(button, new MouseEvent("click", { bubbles: true }));
    // button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(container.textContent).toContain("No");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(container.textContent).toContain("Yes");
});

// it("to test screen", () => {
//   act(() => {
//     render(<Helloh />, container);
//   });
//   // console.log();
//   // expect(screen.getByRole("button").innerHTML).toBe("ToggleIt");
// });

it("shld fetch data from axios", async () => {
  act(() => {
    render(<Helloh />, container);
  });
  // axios.get.mockResolvedValueOnce(() => Promise.resolve({ data: "ss" }));

  jest.spyOn(axios, "get").mockResolvedValue({
    title: "TTII",

    data: "qwerty",
  });

  const button = document.querySelector(".myFetch");
  act(() => {
    fireEvent(button, new MouseEvent("click", { bubbles: true }));
  });

  await waitFor(() => {
    expect(container.textContent).toContain("qwerty");
  });
});

xit("should check useEffect with axios", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue",
    title: "myCustomTitle",
  };
  jest.spyOn(axios, "get").mockResolvedValue({
    title: "TTII",
    data: "qwerty",
  });
  await act(async () => {
    render(<Helloh id="123" />, container);
  });
  await waitFor(() => {
    expect(container.textContent).toContain("TTII");
  });
});
