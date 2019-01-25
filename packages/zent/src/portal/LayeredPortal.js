import React, { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';

// eslint-disable-next-line
import PurePortal from './PurePortal';

import {
  getNodeFromSelector,
  createContainerNode,
  removeNodeFromDOMTree,
  isDescendant,
} from './util';

/*
  Portal的核心，只负责管理child。index.js实际export的不是这个component.
*/
export default class LayeredPortal extends PureComponent {
  static propTypes = {
    // visible
    visible: PropTypes.bool,
    onMount: PropTypes.func,
    onUnmount: PropTypes.func,

    // children
    children: PropTypes.node,
    render: PropTypes.func,

    // parent node
    selector: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    // layer
    layer: PropTypes.string, // the layer tag
    useLayerForClickAway: PropTypes.bool,
    onClickAway: PropTypes.func,
    onLayerReady: PropTypes.func,

    // layer style
    className: PropTypes.string,
    style: PropTypes.object,
    css: PropTypes.object, // deprecated
  };

  static defaultProps = {
    selector: 'body',
    layer: 'div',
    className: '',
    visible: true,
  };

  // DOM node, the container of the portal content
  layerNode = null;

  // DOM node, the parent node of portal content
  parentNode = null;

  state = {
    key: 0,
  };

  static getDerivedStateFromProps(props, state) {
    // 如果selector变了的话，删除再重新打开
    if (state.prevSelector !== props.selector) {
      return {
        prevSelector: props.selector,
        key: ++state.key,
      };
    }
    return state;
  }

  getLayer = () => this.layerNode;

  onClickAway = event => {
    if (
      event.defaultPrevented ||
      !this.props.onClickAway ||
      !this.props.visible
    ) {
      return;
    }

    const layerNode = this.layerNode;
    if (
      !(event.target instanceof Node) ||
      (event.target !== layerNode && event.target === window) ||
      (document.documentElement.contains(event.target) &&
        !isDescendant(layerNode, event.target))
    ) {
      this.props.onClickAway(event);
    }
  };

  onUmount = () => {
    this.unrenderLayer();
    const layerNode = this.layerNode;
    if (layerNode) {
      isFunction(this.props.onUnmount) && this.props.onUnmount();
    }
  };

  undecorateLayer = layerNode => {
    if (this.props.useLayerForClickAway) {
      layerNode.style.position = 'relative';
      layerNode.removeEventListener('touchstart', this.onClickAway);
      layerNode.removeEventListener('click', this.onClickAway);
    } else {
      window.removeEventListener('touchstart', this.onClickAway);
      window.removeEventListener('click', this.onClickAway);
    }
  };

  decorateLayer = (layerNode, props = this.props) => {
    const { onLayerReady, className, css, style } = props;

    // 1, Customize the className and style for layer node.
    layerNode.className = className || '';
    let cssKeys = Object.keys(css || {});
    if (css && cssKeys.length) {
      // Setting css is only for compatibility
      layerNode.style.cssText = cssKeys.map(k => `${k}: ${css[k]}`).join('; ');
    }
    Object.keys(style || {}).forEach(k => {
      layerNode.style[k] = style[k];
    });

    // 2, Predefined layer decorations
    if (this.props.useLayerForClickAway) {
      layerNode.addEventListener('touchstart', this.onClickAway);
      layerNode.addEventListener('click', this.onClickAway);
      layerNode.style.position =
        this.parentNode === document.body ? 'fixed' : 'absolute';
      layerNode.style.top = 0;
      layerNode.style.bottom = 0;
      layerNode.style.left = 0;
      layerNode.style.right = 0;
    } else if (this.props.onClickAway) {
      setTimeout(() => {
        window.addEventListener('touchstart', this.onClickAway);
        window.addEventListener('click', this.onClickAway);
      }, 0);
    }

    // 3, Callback when layer node is ready
    onLayerReady && onLayerReady(this.layerNode);
  };

  unrenderLayer = () => {
    const layerNode = this.layerNode;
    if (layerNode) {
      this.undecorateLayer(layerNode);

      removeNodeFromDOMTree(layerNode);

      // Reset
      this.layerNode = null;
      this.parentNode = null;

      isFunction(this.props.onUnmount) && this.props.onUnmount();
    }
  };

  renderLayer = (props = this.props) => {
    if (props.visible) {
      // Cache the parentNode
      if (!this.parentNode) {
        const { selector } = props;
        this.parentNode = getNodeFromSelector(selector);
      }

      // Create the layer DOM node for portal content
      const { layer } = props;
      if (!layer || (layer && typeof layer === 'string')) {
        if (!this.layerNode) {
          this.layerNode = createContainerNode(this.parentNode, layer);
        }
      }

      // customize the container, e.g. style, event listener
      this.decorateLayer(this.layerNode);
    }
  };

  render() {
    this.renderLayer();

    // Render the portal content to container node or parent node
    const { children, render, visible } = this.props;
    const content = render ? render() : Children.only(children);

    return visible ? (
      <PurePortal
        key={this.state.key}
        selector={this.layerNode}
        onMount={this.props.onMount}
        onUnmount={this.onUmount}
      >
        {content}
      </PurePortal>
    ) : null;
  }
}
