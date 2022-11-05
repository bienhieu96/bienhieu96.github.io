import { useEditor } from "@craftjs/core";
import { Layers } from "@craftjs/layers";
import React, { useState } from "react";
import styled from "styled-components";

import { SidebarItem } from "./SidebarItem";
import { Toolbar } from "../../Toolbar";
import {EditFilled, BorderOutlined, } from '@ant-design/icons'

export const SidebarDiv = styled.div<{ enabled: boolean }>`
  width: 280px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  background: #fff;
  margin-right: ${(props) => (props.enabled ? 0 : -280)}px;
`;

export const Sidebar = () => {
  const [layersVisible, setLayerVisible] = useState(true);
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const Layer = (node) => {
    console.log(node)
    return (
      <div>
        <div />
      </div>
    )
  }
  return (
    <SidebarDiv
      enabled={enabled}
      className="transition sidebar-container"
    >
      <div className="sidebar">
        <SidebarItem
          icon={EditFilled}
          title="Tuỳ Chỉnh"
          height={!layersVisible ? "full" : "40%"}
          visible={toolbarVisible}
          onChange={(val) => setToolbarVisible(val)}
        >
          <Toolbar />
        </SidebarItem>
        <SidebarItem
          icon={BorderOutlined}
          title="Layers"
          height={!toolbarVisible ? "full" : "30%"}
          visible={layersVisible}
          onChange={(val) => setLayerVisible(val)}
        >
          <div className="bg-white">
            <Layers expandRootOnLoad={true}/>
          </div>
        </SidebarItem>
      </div>
    </SidebarDiv>
  );
};
