import { UserComponent, useNode } from "@craftjs/core";
import cx from "classnames";
import React from "react";
import styled from "styled-components";
import { Resizer } from "../Resizer";
import { EmbededSettings } from "./EmbededSettings";

// import { ImageSettings } from "./ImageSettings";

type EmbededProps = {
  margin?: any[];
  src?: string;
  width?: string;
  height?: string;
};

const StyledIframe = styled.iframe<EmbededProps>`
  margin: ${({ margin }) =>
    `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  src: ${({ src }) => `${src}`};
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
`;

export const Embeded: UserComponent<EmbededProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { width, height, src, ...otherProps } = props;
  return (
    <Resizer propKey={{ width: "width", height: "height" }}>
      <StyledIframe
        ref={connect}
        frameborder="0"
        loading="lazy"
        className={cx(["rounded w-full px-4 py-2"])}
        src={src}
        {...otherProps}
      ></StyledIframe>
    </Resizer>
  );
};
Embeded.craft = {
  displayName: "Embed",
  props: {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.966044955202!2d105.79410635089918!3d21.034044585926782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab47a1066d77%3A0x399a50acbeb6dd78!2zMjQ3IMSQLiBD4bqndSBHaeG6pXksIEThu4tjaCBW4buNbmcsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1668499255848!5m2!1sen!2s",
    width: `100%`,
    height: `100%`,
    margin: ["5", "0", "5", "0"],
  },
  related: {
    toolbar: EmbededSettings,
  },
};