import { Element, useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
import styled from "styled-components";

import { Button } from "../../selectors/Button";
import { Container } from "../../selectors/Container";
import { Text } from "../../selectors/Text";
import { Video } from "../../selectors/Video";
import {
  YoutubeFilled,
  BorderOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Image } from "src/components/selectors/Image";
import { Link } from "src/components/selectors/Link";
import { Slide } from "src/components/selectors/Slide";
import { TabsComponent } from "src/components/selectors/Tabs";
import { Embeded } from "src/components/selectors/Embeded";

import TabIcon from '@mui/icons-material/Tab';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import HtmlIcon from '@mui/icons-material/Html';

import ImageIcon from '@mui/icons-material/Image';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { CustomHTML } from "src/components/selectors/CustomHTML";
import { TwoColumns } from "src/components/selectors/TwoColumns";


const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : "")}
  ${(props) => (!props.enabled ? `opacity: 0;` : "")}
`;

const Item = styled.a<{ move?: boolean }>`
  svg {
    width: 22px;
    height: 22px;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      className="toolbox-container transition"
    >
      <div className="toolbox">
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Container}
                background={{ r: 78, g: 78, b: 78, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="300px"
                width="300px"
              ></Element>
            )
          }
        >
          <Tooltip title="Container" placement="right">
            <Item className="toolbox-item" move>
              {/* <SquareSvg /> */}
              <BorderOutlined style={{ color: "#fff" }} />
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) =>
            create(ref, <Text fontSize="12" textAlign="left" text="Hi there" />)
          }
        >
          <Tooltip title="Text" placement="right">
            <Item className="toolbox-item" move>
              <TextFieldsIcon />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Button />)}>
          <Tooltip title="Button" placement="right">
            <Item className="toolbox-item" move>
              <SmartButtonIcon />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Video />)}>
          <Tooltip title="Video" placement="right">
            <Item className="toolbox-item" move>
              <YoutubeFilled className="text-white" />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Image />)}>
          <Tooltip title="Image" placement="right">
            <Item className="toolbox-item" move>
              <ImageIcon />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Link />)}>
          <Tooltip title="Link" placement="right">
            <Item className="toolbox-item" move>
              <LinkOutlined />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Slide />)}>
          <Tooltip title="Slide" placement="right">
            <Item className="toolbox-item" move>
              <SlideshowIcon />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <TabsComponent />)}>
          <Tooltip title="Tabs" placement="right">
            <Item className="toolbox-item" move>
              <TabIcon />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Embeded />)}>
          <Tooltip title="Embed" placement="right">
            <Item className="toolbox-item" move>
              <IntegrationInstructionsIcon />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <CustomHTML />)}>
          <Tooltip title="Custom Code" placement="right">
            <Item className="toolbox-item" move>
              <HtmlIcon />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <TwoColumns />)}>
          <Tooltip title="Two Columns" placement="right">
            <Item className="toolbox-item" move>
              <HtmlIcon />
            </Item>
          </Tooltip>
        </div>
      </div>
    </ToolboxDiv>
  );
};
