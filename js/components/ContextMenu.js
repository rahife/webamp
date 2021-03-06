import React from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../../css/context-menu.css";

class Portal extends React.Component {
  componentWillMount() {
    this._node = document.createElement("div");
    this._node.id = "webamp-context-menu";
    this._node.style.position = "absolute";
    this._node.style.top = 0;
    this._node.style.left = 0;
    this._node.style.zIndex = this.props.zIndex + 1;
    document.body.appendChild(this._node);
  }

  componentWillUnmount() {
    document.body.removeChild(this._node);
  }

  render() {
    const style = {
      position: "absolute",
      top: this.props.top,
      left: this.props.left
    };
    return createPortal(
      <div style={style}>{this.props.children}</div>,
      this._node
    );
  }
}

export const Hr = () => (
  <li className="hr">
    <hr />
  </li>
);

export const Parent = ({ children, label }) => (
  <li className="parent">
    <ul>{children}</ul>
    {label}
  </li>
);

export const LinkNode = props => (
  <li>
    <a {...props}>{props.label}</a>
  </li>
);

LinkNode.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export const Node = props => {
  const { label, checked, className = "", ...passThroughProps } = props;
  return (
    <li className={classnames(className, { checked })} {...passThroughProps}>
      {label}
    </li>
  );
};

Node.propTypes = {
  label: PropTypes.string.isRequired,
  hotkey: PropTypes.string
};

class ContextMenu extends React.Component {
  render() {
    const {
      children,
      offsetTop,
      offsetLeft,
      top,
      bottom,
      selected,
      zIndex
    } = this.props;
    return (
      selected && (
        <Portal top={offsetTop} left={offsetLeft} zIndex={zIndex}>
          <ul className={classnames("context-menu", { top, bottom })}>
            {children}
          </ul>
        </Portal>
      )
    );
  }
}

const mapStateToProps = state => ({
  zIndex: state.display.zIndex
});

export default connect(mapStateToProps)(ContextMenu);
