import React from "react";
import styled from "styled-components";

import Arrow from "../../../../assets/icons/arrow.svg";
import { DownOutlined } from "@ant-design/icons";

const SidebarItemDiv = styled.div<{ visible?: boolean; height?: string }>`
  height: ${(props) =>
    props.visible && props.height && props.height !== "full"
      ? `${props.height}`
      : "auto"};
  flex: ${(props) =>
    props.visible && props.height && props.height === "full" ? `1` : "unset"};
  color: #545454;
`;

const Chevron = styled.a<{ visible: boolean }>`
  transform: rotate(${(props) => (props.visible ? 180 : 0)}deg);
  svg {
    width: 8px;
    height: 8px;
  }
`;

export type SidebarItemProps = {
  title: string;
  height?: string;
  icon: any;
  visible?: boolean;
  onChange?: (bool: boolean) => void;
  children?: React.ReactNode;
};

const HeaderDiv = styled.div`
  color: #615c5c;
  height: 45px;
`;

export const SidebarItem: React.FC<SidebarItemProps> = ({
  visible,
  icon,
  title,
  children,
  height,
  onChange,
}) => {
  return (
    <SidebarItemDiv visible={visible} height={height} className="sidebar-item">
      <HeaderDiv
        onClick={() => {
          if (onChange) onChange(!visible);
        }}
        className={`header1 ${visible ? "shadow-sm" : ""}`}
      >
        <div className="title-container">
          {React.createElement(icon, { className: "w-4 h-4 mr-2 text-white" })}
          {/* {icon} */}
          <h2>{title}</h2>
        </div>
        <DownOutlined style={{color: 'white'}} rotate={visible ? 180 : 0} />
      </HeaderDiv>
      {visible ? (
        <div className="sidebar-child">{children}</div>
      ) : null}
    </SidebarItemDiv>
  );
};
