import { useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
import cx from "classnames";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import copy from "copy-to-clipboard";
import lz from "lzutf8";
import {
  UndoOutlined,
  RedoOutlined,
  ExportOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Input, Modal } from "antd";

const HeaderDiv = styled.div`
  width: 100%;
  height: 45px;
  z-index: 99999;
  position: relative;
  padding: 0px 10px;
  background: #d4d4d4;
  display: flex;
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: #fff;
    opacity: 0.9;
  }
`;

const Item = styled.a<{ disabled?: boolean }>`
  margin-right: 10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity:0.5;
    cursor: not-allowed;
  `}
`;

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scripts, setScripts] = useState([]);
  const { enabled, canUndo, canRedo, actions, query } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <HeaderDiv className="transition header-container">
      <div className="header">
        {enabled && (
          <div style={{ display: "flex" }}>
            <Tooltip title="Undo" placement="bottom">
              <Item disabled={!canUndo} onClick={() => actions.history.undo()}>
                {/* <UndoSvg /> */}
                <UndoOutlined style={{color: `${canUndo ? 'white' : 'wheat'}`}}/>
              </Item>
            </Tooltip>
            <Tooltip title="Redo" placement="bottom">
              <Item disabled={!canRedo} onClick={() => actions.history.redo()}>
                {/* <RedoSvg /> */}
                <RedoOutlined style={{color: `${canRedo ? 'white' : 'wheat'}`}}/>
              </Item>
            </Tooltip>
            <Tooltip title="Export" placement="bottom">
              <Item
                onClick={() => {
                  const json = query.serialize();
                  copy(json);
                }}
              >
                <ExportOutlined />
              </Item>
            </Tooltip>
            <Tooltip title="Load" placement="bottom">
              <Item
                onClick={() => {
                  const json = query.serialize();
                  copy(lz.encodeBase64(lz.compress(json)));
                }}
              >
                <UploadOutlined />
              </Item>
            </Tooltip>
            <Tooltip title="Link" placement="bottom">
              <Item onClick={showModal}>
                <UploadOutlined />
              </Item>
            </Tooltip>
          </div>
        )}
        <div className="logo">Page Builder</div>
        <div style={{ display: "flex" }}>
          <Btn
            className={`transition button ${enabled ? 'button--enable' : 'button--disable'}`}
            onClick={() => {
              actions.setOptions((options) => (options.enabled = !enabled));
            }}
          >
            {/* {enabled ? <Checkmark /> : <Customize />} */}
            {enabled ? "Hoàn thành" : "Chỉnh sửa"}
          </Btn>
        </div>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input placeholder="" />
      </Modal>
    </HeaderDiv>
  );
};
