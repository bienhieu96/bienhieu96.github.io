import { UserComponent, useNode, Element } from "@craftjs/core";
import _ from "lodash";
import { Container } from "../Container";
import styled from "styled-components";
import { Tabs } from "antd";
import { TabsSettings } from "./TabsSettings";

type TabsProps = {
  numberOfTabs?: number;
  width?: string;
  height?: string;
  size?: string;
};
const TabDiv = styled.div<any>`
  width: auto;
  height: auto;
  > div {
    height: auto;
  }
`;
export const TabsComponent: UserComponent<TabsProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const onChange = (key: string) => {
    console.log(key);
  };

  const { numberOfTabs, width, height,size, ...otherProps } = props;
  return (
    <TabDiv ref={connect}>
      <Tabs
        defaultActiveKey="1"
        size={size}
        // tabBarStyle={{width: '100%'}}
        items={new Array(parseInt(numberOfTabs)).fill(0).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: (
              <div>
                <Element
                  id={`image${i + 1}`}
                  canvas
                  is={Container}
                  width="500px"
                  height="500px"
                />
              </div>
            ),
          };
        })}
        {...otherProps}
      />
    </TabDiv>
  );
};
TabsComponent.craft = {
  displayName: "Tabs",
  props: {
    numberOfTabs: 3,
    width: `auto`,
    height: `auto`,
    size: 'middle'
  },
  related: {
    toolbar: TabsSettings,
  },
};
