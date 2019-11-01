import React from "react";

import { ITitleProps } from "./Title.interface";

const PageTitle = ({ title = "" }: ITitleProps) => <h1> {title} </h1>;

export default PageTitle;
