import { ReactChild, ReactChildren } from "react";

export interface ContainerFluidInterface {
  customClass?: string;
  children: ReactChild | ReactChildren;
  flexDirection?: "row" | "col";
}
