import React from "react";

import { ITitleProps } from "./Title.interface";

const PageTitle: React.FC<ITitleProps> = ({ title = "" }) => <h1> {title} </h1>;

export default PageTitle;
