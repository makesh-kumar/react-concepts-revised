import "./App.css";
import UseEffectHook from "./Components/UseEffectHook";
import UseStateHook from "./Components/UseStateHook.js";
import React, { useState } from "react";
import UseReducerHook from "./Components/UseReducerHook";
import UseCallBackHook from "./Components/UseCallBackHook";
import UseMemoHook from "./Components/UseMemoHook";
import UseRefHook from "./Components/UseRefHook";
import FancyButton from "./Others/FancyButton";
import RenderProps from "./RenderPropWithFunc/RenderProps";
import RpWithClass from "./RenderPropsWithClass/RpWithClass";
import HocPattern from "./HocPattern/HocPattern";
import ErrBoundTest from "./ErrorBoundaries/ErrBoundTest";
import RefTest from "./Refs/RefTest";
import CreateRefTest from "./Refs/CreateRefTest";
import PortalTest from "./Portals/PortalTest";
import ProfilerTest from "./Profiler/ProfilerTest";
import CustomHooksTest from "./CustomHooks/CustomHooksTest";
import ReduxBase from "./Redux/ReduxBase";
import ReduxThunkTest from "./Redux/ReduxThunk/ReduxThunkTest";
import RouterTest from "./Routing/RouterTest";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./Routing/Home";
import Profile from "./Routing/Profile";
import About from "./Routing/About";
import ButtonPage from "./Routing/ButtonPage";
import Welcome from "./Testing/Welcome";
import FormikTest from "./Formik/FormikTest";
import ReactRenderTest from "./React Render/ReactRenderTest";
import RenderPropsBase from "./RenderPropWithFunc/RenderPropsExm/RenderPropsBase";

const UiContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const ref = React.createRef();
  return (
    <UiContext.Provider value={theme}>
      <button
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
          } else setTheme("dark");

          console.log((ref.current.disabled = true));
        }}
      >
        Toggle Theme
      </button>
      <div className="App">
        {/* <UseStateHook /> */}
        {/* <UseEffectHook /> */}
        {/* <UseReducerHook /> */}
        {/* <UseCallBackHook /> */}
        {/* <UseMemoHook /> */}
        {/* <UseRefHook /> */}

        {/* <FancyButton ref={ref}>Click Me !</FancyButton> */}

        {/* <RenderProps /> */}
        {/* <RpWithClass /> */}

        {/* <HocPattern /> */}

        {/* <ErrBoundTest /> */}
        {/* <RefTest /> */}
        {/* <CreateRefTest /> */}

        {/* <PortalTest /> */}
        {/* <ProfilerTest /> */}

        {/* <CustomHooksTest /> */}

        {/* <ReduxBase /> */}
        {/* <ReduxThunkTest /> */}
        {/* <Welcome /> */}
        {/* <FormikTest /> */}
        {/* <ReactRenderTest/> */}

        <BrowserRouter>
          <RouterTest />
          <Route path="/" exact component={ReactRenderTest} />
          <Route path="/profile/:userName" exact component={Profile} />
          <Route path="/about" exact component={About} />
          <Route path="/button" exact component={ButtonPage} />
        </BrowserRouter>
      </div>
    </UiContext.Provider>
  );
}

export default App;
export { UiContext };
