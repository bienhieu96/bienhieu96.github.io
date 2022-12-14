import React from "react";

import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";

export const SlideSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Chung">
        <ToolbarItem
          full={true}
          propKey="href"
          type="text"
          label="Địa chỉ đường dẫn"
        />
        <ToolbarItem full={true} propKey="title" type="text" label="Tiêu đề" />
      </ToolbarSection>
      <ToolbarSection
        title="Tự động"
        props={["autoplay"]}
        summary={({ autoplay }: any) => {
          return `${autoplay}s`;
        }}
      >
        <ToolbarItem
          full={true}
          propKey="autoplay"
          type="slider"
          label="Thời gian"
        ></ToolbarItem>
        <ToolbarItem
          full={true}
          propKey="slidesPerView"
          type="slider"
          label="Số lượng"
        ></ToolbarItem>
        <ToolbarItem
          full={true}
          propKey="numberOfslide"
          type="slider"
          label="Số lượng slide"
        />
      </ToolbarSection>
      <ToolbarSection
        title="Decorations"
        props={["effect"]}
      >
        <ToolbarItem full={true} propKey="effect" type="radio" label="Hiệu ứng">
          <ToolbarRadio value="fade" label="Làm mờ" />
          <ToolbarRadio value="cards" label="Thẻ" />
          <ToolbarRadio value="flip" label="Lật" />
        </ToolbarItem>
      </ToolbarSection>
    </React.Fragment>
  );
};
