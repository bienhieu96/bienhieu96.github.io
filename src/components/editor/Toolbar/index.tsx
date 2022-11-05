import { useEditor } from '@craftjs/core';
import React from 'react';

export * from './ToolbarItem';
export * from './ToolbarSection';
export * from './ToolbarTextInput';
export * from './ToolbarDropdown';

export const Toolbar = () => {
  const { active, related } = useEditor((state, query) => {
    // TODO: handle multiple selected elements
    const currentlySelectedNodeId = query.getEvent('selected').first();
    return {
      active: currentlySelectedNodeId,
      related:
        currentlySelectedNodeId && state.nodes[currentlySelectedNodeId].related,
    };
  });

  return (
    <div className="toolbar-container ">
      {active && related.toolbar && React.createElement(related.toolbar)}
      {!active && (
        <div
          className="toolbar"
          style={{
            color: 'rgba(0, 0, 0, 0.5607843137254902)',
            fontSize: '11px',
          }}
        >
          <h2 style={{paddingBottom: 1}}>Chọn một thành phần để chỉnh sửa.</h2>
          <h2>
            Hoặc click đúp vào một lớp bên dưới để chỉnh sửa
          </h2>
        </div>
      )}
    </div>
  );
};
