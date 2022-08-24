import React, { ReactNode } from "react";
import logo from "../logo.svg";

type ComponentProps = {
    children: ReactNode
}

export class BaseComponent extends React.Component<ComponentProps> {
  render() {
    return (
      <>
       {this.props.children}
      </>
    );
  }
}
