import { Editor, Frame, Element } from "@craftjs/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect } from "react";

import { Viewport, RenderNode } from "../../components/editor";
import { Container, Text } from "../../components/selectors";
import { Button } from "../../components/selectors/Button";
import { Custom1, OnlyButtons } from "../../components/selectors/Custom1";
import { Custom2, Custom2VideoDrop } from "../../components/selectors/Custom2";
import { Custom3, Custom3BtnDrop } from "../../components/selectors/Custom3";
import { Video } from "../../components/selectors/Video";
import { Image } from "src/components/selectors/Image";
import { Link } from "src/components/selectors/Link";
import { TabsComponent } from "src/components/selectors/Tabs";
import { createTheme } from "@material-ui/core";
import { Slide } from "src/components/selectors/Slide";
import { Embeded } from "src/components/selectors/Embeded";
import { CustomHTML } from "src/components/selectors/CustomHTML";

const theme = createTheme({
  typography: {
    fontFamily: [
      "acumin-pro",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function PageEditor() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);
  }, []);
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
    link.rel = "stylesheet";
    link.integrity =
      "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen">
        <Editor
          resolver={{
            Container,
            Text,
            Custom1,
            Custom2,
            Custom2VideoDrop,
            Custom3,
            Custom3BtnDrop,
            OnlyButtons,
            Button,
            Video,
            Image,
            Link,
            Slide,
            TabsComponent,
            Embeded,
            CustomHTML
          }}
          enabled={false}
          onRender={RenderNode}
        >
          <Viewport>
            <Frame> 
              <Element
                canvas
                is={Container}
                width="1024px"
                height="1960px"
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                padding={["5", "5", "5", "5"]}
                custom={{ displayName: "App", links: [], scripts: [] }}
              />
            </Frame>
          </Viewport>
        </Editor>
      </div>
    </ThemeProvider>
  );
}
export default PageEditor;
