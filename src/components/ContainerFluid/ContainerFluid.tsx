import React from "react";
import style from "./container.module.scss";
import { ContainerFluidInterface } from "./ContainerFluidInterface";

function ContainerFluid({
  children,
  customClass = "",
  flexDirection = "col",
}: ContainerFluidInterface): JSX.Element {
  return (
    <div
      className={`${style.container} ${
        flexDirection === "col" && style.flexColumn
      } ${customClass} `}
    >
      {children}
    </div>
  );
}

export default ContainerFluid;
