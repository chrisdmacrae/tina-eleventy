import React from "react";
import ReactDOM from "react-dom";
import { CmsProvider } from "./CmsProvider";

let el = document.querySelector("#tina");

ReactDOM.render(<CmsProvider editMode={true} /> as any, el);