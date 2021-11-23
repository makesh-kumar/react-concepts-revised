import { render, screen, act } from "@testing-library/react";
import TestComp from "../TestComp";
import { shallow } from "enzyme";
import { configure, mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-17";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

let counter;

function fetchMock(url, suffix = "") {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        json: () =>
          Promise.resolve({
            data: url + suffix,
          }),
      });
    }, 200 + Math.random() * 300)
  );
}
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        name: "KKKK",
      }),
  })
);
beforeEach(() => {
  //   counter = shallow(<TestComp />);
  //   jest.spyOn(global, "fetch").mockImplementation(fetchMock);
});

afterAll(() => {
  global.fetch.mockClear();
});

// it("calls incCounter function when button is clicked", () => {
//   expect(counter.find("p").text()).toBe("Counter value is: 0");
//   const incButton = counter.find("button");
//   incButton.simulate("click");
//   expect(counter.find("p").text()).toBe("Counter value is: 1");
//   expect(counter.find("h2").text()).toBe("Counter value is: 1");
// });

it("shld make api call", async () => {
  await act(async () => render(<TestComp />));

  expect(screen.getByText("KKKK")).toBeInTheDocument();
  //   expect(counter.find("h2").text()).toBe("Counter value is: 1");
});

// beforeEach(() => {
//   component = shallow(<TestComp />);
// });
// it("ss", () => {
//   render(<TestComp />);
//   expect(true).toBe(true);
// });

// it("should check get method ", () => {
//   //   const instance = component.instance();
//   const instance = mount(<TestComp />);
//   expect(instance.addVal()).toEqual("hh");
// });
