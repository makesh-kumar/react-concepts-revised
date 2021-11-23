import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {
  screen,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import axios from "axios";
import Helloh from "../Helloh";
import Welcome from "../Welcome";
import { shallow, configure, mount, to } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });
jest.mock("axios");

let container = null;

describe("Scoped / Nested block", () => {
  beforeAll(() => {});

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    axios.get.mockImplementation((url) => {
      if (url === "https://jsonplaceholder.typicode.com/todos/1") {
        return Promise.resolve({ data: { title: "TTII" } });
      } else {
        return Promise.resolve({ data: { title: "QWERTY" } });
      }
    });

    axios.post.mockImplementation((url) => {
      return Promise.resolve({ data: { id: "99", title: "SOME" } });
    });

    // jest.spyOn(axios, "get").mockResolvedValue((url) => {
    //   console.log(url);
    //   return {
    //     title: "TTII",
    //     data: "qwerty",
    //   };
    // });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.clearAllMocks();
  });

  it("should check useEffect hook", async () => {
    await act(async () => {
      render(<Welcome />, container);
    });
    expect(container.textContent).toContain("QWERTY");
  });

  it("should fetch data", async () => {
    // act(() => {
    //   render(<Welcome />, container);
    // });
    await act(async () => {
      render(<Welcome />, container);
    });
    const button = document.querySelector(".myFetch");
    act(() => {
      fireEvent(button, new MouseEvent("click", { bubbles: true }));
    });
    await waitFor(() => {
      expect(container.textContent).toContain("TTII");
    });
  });

  it("should check form fields with Simulate - just event triger", async () => {
    // const utils = await act(async () => {
    //   render(<Welcome />, container);
    // });
    const container = shallow(<Welcome />);
    const userNameInput = container.find("#userName");
    userNameInput.first().simulate("change", {
      preventDefault: jest.fn,
      target: { value: "testUserName" },
    });

    const emailInput = container.find("#email");
    emailInput.simulate("change", {
      preventDefault: jest.fn,
      target: { value: "testEmail" },
    });
    // console.log("--------------", emailInput.prop.value);
    // const d = document.querySelector("#email");
    // console.log(d);
    // expect(screen.getByText("testEmail")).toBeInTheDocument();
    // expect(screen.get("button").innerHTML).toBe("ToggleIt");

    // expect(screen.getByTestId("te")).toHaveValue("test");
    // expect(emailInput.prop).toBe("testEmail");

    // const submitBtn = container.find("#submitBtn");
    // submitBtn.simulate("click");

    // emailInput.invoke("onChange", {
    //   preventDefault: jest.fn,
    //   target: { value: "testEmail" },
    // });

    // container
    //   .find("input")
    //   .first()
    //   .invoke("onChange", { target: { value: "A" } });

    // console.log(input);

    // const utils = render(<Welcome />, container);
    // console.log(utils);
    // const button = document.querySelector(".myFetch");
  });

  it("should check form fileds with Simulate - trying to asert", async () => {
    await act(async () => {
      render(<Welcome />, container);
    });

    const userNameInp = document.querySelector("#userName");
    act(() => {
      fireEvent.change(userNameInp, { target: { value: "testUserName" } });
    });
    expect(userNameInp.value).toBe("testUserName");

    const emailInp = document.querySelector("#email");
    act(() => {
      fireEvent.change(emailInp, { target: { value: "testEmail" } });
    });
    expect(emailInp.value).toBe("testEmail");
  });

  it("should check formSubmit event in normal way", async () => {
    await act(async () => {
      render(<Welcome />, container);
    });
    const submitBtm = document.querySelector("#submitBtn");
    act(() => {
      fireEvent(submitBtm, new MouseEvent("click", { bubbles: true }));
    });
    act(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/posts",
        { email: "", userName: "" }
      );
    });
  });

  it("should test useState value changes", async () => {
    await act(async () => {
      render(<Welcome />, container);
    });
    const submitBtm = document.querySelector("#submitBtn");
    await act(async () => {
      fireEvent.click(submitBtm);
    });
    act(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/posts",
        { email: "", userName: "" }
      );
    });
    const emailInp = document.querySelector("#email");
    const increment = getByTestId(container, "te");
    expect(emailInp.value).toBe("99");
    expect(increment.value).toBe("99");
  });

  it("Increment and decrement buttons work", async () => {
    // const { containers } = render(<Welcome />);
    await act(async () => {
      render(<Welcome />, container);
    });
    const countValue = getByTestId(container, "countvalue");
    const increment = getByTestId(container, "incrementButton");
    const decrement = getByTestId(container, "decrementButton");
    expect(countValue.textContent).toBe("0");
    fireEvent.click(increment);
    expect(countValue.textContent).toBe("1");
    fireEvent.click(decrement);
    expect(countValue.textContent).toBe("0");
  });

  it("UUUU", () => {});

  // it("should check with enzyme", async () => {
  //   // const component = mount(<Welcome />, container);
  //   // console.log(component);

  //   const wrapper = shallow(<Welcome />);
  //   console.log(wrapper.find(".myFetch"));
  //   // expect(wrapper.find(".myFetch")).have.lengthOf(1);

  //   // expect(wrapper.find(".foo")).to.have.lengthOf(1);

  //   // component.find(".myFetch").simulate("click");
  //   // console.log(component.textContent);
  //   // await waitFor(() => {
  //   //   expect(component.textContent).toContain("TTII");
  //   // });
  // });

  //   it("should directly test the function", () => {
  //     // const wrapper = shallow(<Welcome />);
  //     // const instance = wrapper.instance();
  //     // console.log("W ", wrapper);
  //     // // expect(wrapper.state("counter")).toBe(0);
  //     // instance.addName();
  //     // // expect(wrapper.state("counter")).toBe(1);
  //   });

  //   describe('directly invoking the "incrementCounter" method from component instance', () => {
  //     it('should update the count by 1 when invoked by default', () => {

  //     });
});

// it("should fetch data", async () => {
//   act(() => {
//     render(<Welcome />, container);
//   });
//   jest.spyOn(axios, "get").mockResolvedValue({
//     title: "TTII",
//     data: "qwerty",
//   });
//   const button = document.querySelector(".myFetch");
//   act(() => {
//     fireEvent(button, new MouseEvent("click", { bubbles: true }));
//   });
//   await waitFor(() => {
//     expect(container.textContent).toContain("TTII");
//   });
// });

// it("should fetch data", async () => {
//   act(() => {
//     render(<Welcome />, container);
//   });
//   const button = document.querySelector(".myFetch");
//   act(() => {
//     fireEvent(button, new MouseEvent("click", { bubbles: true }));
//   });
//   await waitFor(() => {
//     expect(container.textContent).toContain("TTII");
//   });
// });
