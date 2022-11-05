import { Element, useEditor } from '@craftjs/core';
import { Tooltip } from '@material-ui/core';
import styled from 'styled-components';

import { Button } from '../../selectors/Button';
import { Container } from '../../selectors/Container';
import { Text } from '../../selectors/Text';
import { Video } from '../../selectors/Video';
import {YoutubeFilled, BorderOutlined, FileImageFilled, LinkOutlined} from '@ant-design/icons'
import { Image } from 'src/components/selectors/Image';
import { Link } from 'src/components/selectors/Link';


const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : '')}
  ${(props) => (!props.enabled ? `opacity: 0;` : '')}
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
              {/* <SquareSvg /> */}<BorderOutlined style={{color: '#fff'}}/>
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
              {/* <TypeSvg /> */}T
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Button />)}>
          <Tooltip title="Button" placement="right">
            <Item className="toolbox-item" move>
              {/* <ButtonSvg /> */} Button
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Video />)}>
          <Tooltip title="Video" placement="right">
            <Item className="toolbox-item" move>
              {/* <YoutubeSvg /> */}<YoutubeFilled className='text-white'/>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Image />)}>
          <Tooltip title="Image" placement="right">
            <Item className="toolbox-item" move>
              {/* <YoutubeSvg /> */}<FileImageFilled />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Link />)}>
          <Tooltip title="Link" placement="right">
            <Item className="toolbox-item" move>
              {/* <YoutubeSvg /> */}<LinkOutlined />
            </Item>
          </Tooltip>
        </div>
      </div>
    </ToolboxDiv>
  );
};
