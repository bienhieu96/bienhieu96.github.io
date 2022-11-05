import { useEditor } from "@craftjs/core";
import cx from "classnames";
import React, { useEffect } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Toolbox } from "./Toolbox";

export const Viewport: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    enabled,
    connectors,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        "*"
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);

  return (
    <div className="viewport-container">  
      <Toolbox />
      <div className="page-container viewport">
        <Header />
        <div
          className={`craftjs-renderer content ${!enabled ? 'content--enable' : ''}`}
          ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
        >
          <div className="childrend">
            {children}
          </div>
          {/* <div
              className={
                "flex items-center justify-center w-full pt-6 text-xs text-light-gray-2"
              }
            >
              <a href="https://www.netlify.com">
                This site is powered by Netlify
              </a>
            </div> */}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};
