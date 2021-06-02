"use strict";
const e = React.createElement;

class ShowButton extends React.Component {
  render() {
    return e(
      "button",
      { onClick: () => alert("Hello there!") },
      "Show"
    );
  }
}

const domContainer = document.querySelector("#show_button_container");
ReactDOM.render(e(ShowButton), domContainer);
