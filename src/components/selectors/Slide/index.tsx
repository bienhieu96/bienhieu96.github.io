import { UserComponent, useNode } from "@craftjs/core";
import cx from "classnames";
import React from "react";
import styled from "styled-components";

// import { ImageSettings } from "./ImageSettings";

type SlideProps = {
  imageStyle?: string;
  margin?: any[];
  url?: string;
  width?: string;
  height?: string;
};

const StyledImage = styled.img<SlideProps>`
  margin: ${({ margin }) =>
    `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  url: ${({ url }) => `${url}`};
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
`;

export const Slide: UserComponent<SlideProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { text, textComponent, width, height, ...otherProps } = props;
  return (
    <StyledImage
      ref={connect}
      className={cx(["rounded w-full px-4 py-2"])}
      src={props.url}
      width={props.width}
      height={props.height}
      {...otherProps}
    ></StyledImage>
  );
};
Slide.craft = {
  displayName: "Image",
  props: {
    margin: ["5", "0", "5", "0"],
    url: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
    width: `100`,
    height: `100`,
  },
  related: {
    // toolbar: ImageSettings,
  },
};
