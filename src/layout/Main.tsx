import React, { Component } from "react";

export default class Main extends Component<any, any> {
  render() {
    return (
      <div className="w-full">
        <div>{this.props.children}</div>
      </div>
    );
  }
}
