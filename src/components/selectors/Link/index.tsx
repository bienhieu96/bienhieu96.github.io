import { UserComponent, useNode } from "@craftjs/core";
import cx from "classnames";
import React from "react";
import styled from "styled-components";
import { LinkSettings } from "./LinkSettings";

// import { ImageSettings } from "./ImageSettings";

type LinkProps = {
  margin?: any[];
  href?: string;
  title?: string;
  color?: Record<"r" | "g" | "b" | "a", number>;
};

const StyledLink = styled.a<LinkProps>`
  margin: ${({ margin }) =>
    `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  href: ${({ href }) => `${href}`};
  title: "link";
  color: ${({ color }) => `rgba(${Object.values(color)})`};
`;

export const Link: UserComponent<LinkProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { text, textComponent, width, height, color, ...otherProps } = props;
  return (
    <StyledLink
      ref={connect}
      className={cx(["rounded w-full px-4 py-2"])}
      href={props.href}
      color={`rgba(${Object.values(color)})`}
      {...otherProps}
    >
      <span style={{ color: `rgba(${Object.values(color)})` }}>
        {props.title}
      </span>
    </StyledLink>
  );
};
Link.craft = {
  displayName: "Link",
  props: {
    margin: ["5", "0", "5", "0"],
    href: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
    title: `link`,
    color: { r: 95, g: 132, b: 235, a: 1 },
  },
  related: {
    toolbar: LinkSettings,
  },
};
