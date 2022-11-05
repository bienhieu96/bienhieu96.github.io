import { UserComponent, useNode } from "@craftjs/core";
import cx from "classnames";
import React from "react";
import styled from "styled-components";
import { Resizer } from "../Resizer";

import { ImageSettings } from "./ImageSettings";

type ImageProps = {
  imageStyle?: string;
  margin?: any[];
  url?: string;
  width?: string;
  height?: string;
};

const StyledImage = styled.img<ImageProps>`
  margin: ${({ margin }) =>
    `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  url: ${({ url }) => `${url}`};
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
`;

export const Image: UserComponent<ImageProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { text, textComponent, width, height, ...otherProps } = props;
  return (
    <Resizer propKey={{ width: 'width', height: 'height' }}>
      <StyledImage
        ref={connect}
        className={cx(["rounded w-full px-4 py-2"])}
        src={props.url}
        {...otherProps}
      ></StyledImage>
    </Resizer>
  );
};
Image.craft = {
  displayName: "Image",
  props: {
    margin: ["5", "0", "5", "0"],
    url: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
    width: `100`,
    height: `100`,
  },
  related: {
    toolbar: ImageSettings,
  },
};
