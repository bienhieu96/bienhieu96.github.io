import { Element, useNode } from "@craftjs/core";
import React from "react";
import { Container } from "../Container";

export const Custom3BtnDrop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={connect} className="w-full h-full">
      {children}
    </div>
  );
};

export const TwoColumns = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return (
    <Container {...props} ref={connect}>
      <Element
        canvas
        id="wow"
        is={Container}
        flexDirection={"row"}
        width={"1024px"}
        height={"500px"}
      >
        <Element id={`1`} canvas is={Container} width="30%" height="500px" />
        <Element id={`2`} canvas is={Container} width="30%" height="500px" />
      </Element>
    </Container>
  );
};

TwoColumns.craft = {
  displayName: "Two Columns",
};