//@ts-nocheck

import React from "react";
import ReactDOM from "react-dom";

import Interactable from "./components/Interactable";

import "./App.css";
import { BaseComponent } from "./components/BaseComponent";

const draggableOptions = {
  onmove: (event) => {
    const target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px, " + y + "px)";

    // update the posiion attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // this.handleDrop = this.handleDrop.bind(this)

    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      droppedItems: [],
    };
  }

  handleDrop(event) {
    console.log("DROP", event);
  }

  render() {
    return (
      <div className="App">
        <Interactable draggable={true} draggableOptions={draggableOptions}>
          <BaseComponent>
            <div className="draggable drag-item">
              <p>Drag Item 1</p>
            </div>
          </BaseComponent>
        </Interactable>

        <hr />

        <Interactable
          dropzone={true}
          dropzoneOptions={{
            accept: ".drag-item",
            overlap: 0.75,

            ondropactivate: function (event) {
              event.target.classList.add("drop-active");
            },

            ondragenter: function (event) {
              var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
              dropzoneElement.classList.add("drop-target");
              draggableElement.classList.add("can-drop");
              draggableElement.textContent = "Dragged in";
            },

            ondragleave: function (event) {
              event.target.classList.remove("drop-target");
              event.relatedTarget.classList.remove("can-drop");
              event.relatedTarget.textContent = "Dragged out";
            },

            ondrop: function (event) {
              this.handleDrop(event);
              event.relatedTarget.textContent = "Dropped";
            },

            ondropdeactivate: function (event) {
              event.target.classList.remove("drop-active");
              event.target.classList.remove("drop-target");
            },
          }}
        >
          <div className="dropzone" id="outer-dropzone">
            #outer-dropzone
          </div>
        </Interactable>
      </div>
    );
  }
}
