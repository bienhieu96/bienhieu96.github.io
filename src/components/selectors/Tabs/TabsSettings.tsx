import React from "react";

import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";

export const TabsSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Chung">
        <ToolbarItem
          full={true}
          propKey="numberOfTabs"
          type="number"
          label="Số tab"
        />
        <ToolbarItem full={true} propKey="size" type="radio" label="Kích cỡ">
          <ToolbarRadio value="small" label="Nhỏ" />
          <ToolbarRadio value="middle" label="Trung bình" />
          <ToolbarRadio value="large" label="Lớn" />
        </ToolbarItem>
      </ToolbarSection>
    </React.Fragment>
  );
};
