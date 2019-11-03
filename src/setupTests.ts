import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import M from "materialize-css";

configure({ adapter: new Adapter() });

// Spies for global methods
jest.spyOn(React, 'useEffect').mockImplementation(f => f());
jest.spyOn(React, 'useRef').mockImplementation(() =>({ current: "current"}));
jest.spyOn(M.Sidenav, 'init').mockImplementation( (els) => []);