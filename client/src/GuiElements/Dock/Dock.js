import React from "react";
import "./Dock.css";
import { FileExplorer, WebBrowser } from "../../Applications";

class Dock extends React.Component {
  state = {
    currentlyOpen: null
  };
  render() {
    return (
      <div className="dock">
        <ul className="apps">
          <li className="app"><i onClick={(e) => this.openApplication(e, <FileExplorer close={ this.closeApplication } />) } className="fas fa-folder"></i></li>
          <li className="app"><i onClick={(e) => this.openApplication(e, <WebBrowser close={ this.closeApplication } />) } className="fab fa-chrome"></i></li>
          <li className="app"><i onClick={() => this.openApplication()} className="fas fa-file-word"></i></li>
          <li className="app"><i onClick={() => this.openApplication()} className="fas fa-comments"></i></li>
          <li className="app"><i onClick={() => this.openApplication()} className="fas fa-trash-alt"></i></li>
        </ul>
      </div>
    );
  }
  openApplication = (component, app) => {
    component.target.className.includes("active") ?
      component.target.className += "" : component.target.className += " active";
    this.setState({ currentlyOpen: component.target });
    this.props.openApplication(app);
  }
  closeApplication = () => {
    this.state.currentlyOpen.className = this.state.currentlyOpen.className.replace("active", "");
    this.props.closeApplication();
    this.setState({ currentlyOpen: false });
  }
}

export default Dock;