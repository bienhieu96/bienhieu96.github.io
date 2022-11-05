// //@ts-nocheck

// import React from "react";

// import Interactable from "../../components/Interactable";
// import { ButtonComponent } from "../../components/ButtonComponent";
// import TopMenu from "../../components/TopMenu";
// import SideMenu from "../../components/SideMenu";

// export default class Editor extends React.Component {
//   constructor(props) {
//     super(props);

//     // this.handleDrop = this.handleDrop.bind(this)

//     this.handleDrop = this.handleDrop.bind(this);
//     this.onDragComponent = this.onDragComponent.bind(this);
//     this.state = {
//       droppedItems: [],
//       attributes: [
//         {
//           width: "100px",
//         },
//         {
//           width: "100px",
//         },
//       ],
//     };
//     this._ref = React.createRef();
//   }

//   callback(name: string | undefined) {
//     console.log("DROP", name);
//   }

//   handleDrop(e) {
//     console.log(this.state.attributes);
//   }

//   handleChange(e, i) {
//     const { attributes } = this.state;

//     const obj = { ...attributes };
//     console.log(e);

//     switch (e.target.id) {
//       case "bg-color":
//         Object.assign(obj, { backgroundColor: e.target.value });
//         break;
//       case "width":
//         Object.assign(obj, { width: `${e.target.value}px` });
//         break;
//       case "height":
//         Object.assign(obj, { height: `${e.target.value}px` });
//         break;
//       default:
//         break;
//     }

//     this.setState({ attributes: obj });
//     console.log(attributes);
//   }
//   onDragComponent() {
//     const { attributes } = this.state;
//     let arrComponent = attributes;
//     arrComponent.push({ width: "100px" });
//     this.setState({attributes: arrComponent})
//     console.log(attributes)
//   }
//   render() {
//     const that = this;
//     const { attributes } = this.state;

//     return (
//       <div className="App w-full relative">
//         <div className="flex flex-col w-5/6 absolute">
//           <TopMenu />
//           <div className="w-full">
//             <Interactable
//               dropzone={true}
//               dropzoneOptions={{
//                 accept: ".drag-item",
//                 overlap: 0.75,
//                 ondropactivate: function (event) {
//                   event.target.classList.add("drop-active");
//                 },

//                 ondragenter: function (event) {
//                   const draggableElement = event.relatedTarget,
//                     dropzoneElement = event.target;
//                   dropzoneElement.classList.add("drop-target");
//                   draggableElement.classList.add("can-drop");
//                   draggableElement.textContent = "Dragged in";
//                 },

//                 ondragleave: function (event) {
//                   event.target.classList.remove("drop-target");
//                   event.relatedTarget.classList.remove("can-drop");
//                   event.relatedTarget.textContent = "Dragged out";
//                 },

//                 ondrop: function (event) {
//                   that.handleDrop(event);
//                   event.relatedTarget.textContent = "Dropped";
//                 },

//                 ondropdeactivate: function (event) {
//                   event.target.classList.remove("drop-active");
//                   event.target.classList.remove("drop-target");
//                 },
//               }}
//             >
//               <div className="dropzone" id="outer-dropzone">
//                 #outer-dropzone
//                 {attributes.map((item) => {
//                   return (
//                     <ButtonComponent
//                       ref1={this._ref}
//                       style={item}
//                       onDrop={(event) => {
//                         this.handleDrop();
//                       }}
//                     >
//                       <a>Drag Item 1</a>
//                     </ButtonComponent>
//                   );
//                 })}
//               </div>
//             </Interactable>
//           </div>
//         </div>
//         <div className="">
//           <SideMenu
//             handleChange={(e) => this.handleChange(e)}
//             onDragEnd={this.onDragComponent}
//           />
//         </div>
//       </div>
//     );
//   }
// }
// pages/index.js
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
import { createTheme } from "@material-ui/core";
import StyledFrame from "react-styled-frame";
import { createPortal } from "react-dom";

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
                height="auto"
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                padding={["40", "40", "40", "40"]}
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
