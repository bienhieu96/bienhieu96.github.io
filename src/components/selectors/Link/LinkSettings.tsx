import React from "react";

import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";

export const LinkSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Chung">
        <ToolbarItem
          full={true}
          propKey="href"
          type="text"
          label="Địa chỉ đường dẫn"
        />
        <ToolbarItem
          full={true}
          propKey="title"
          type="text"
          label="Tiêu đề"
        />
      </ToolbarSection>
      <ToolbarSection
        title="Margin"
        props={["margin"]}
        summary={({ margin }: any) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
      </ToolbarSection>
    </React.Fragment>
  );
};
