import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
// import memoize from 'memoize-one';

import { getNodeFromSelector } from './util';

/**
 * Pure portal, render the content (from render prop or from the only children) into the container
 */
export default class PurePortal extends Component {
  static propTypes = {
    onMount: PropTypes.func,
    onUnmount: PropTypes.func,

    // render
    children: PropTypes.node,
    render: PropTypes.func, // prior to children

    // parent node
    selector: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,

    // behavior
    append: PropTypes.bool,
  };

  static defaultProps = {
    append: false,
  };

  componentDidMount() {
    const { onMount, selector } = this.props;

    if (typeof selector === 'string') {
      Promise.resolve().then(() => {
        this.forceUpdate();
        onMount && onMount();
      });
    } else {
      onMount && onMount();
    }
  }

  componentWillUnmount() {
    const { onUnmount } = this.props;

    onUnmount && onUnmount();
  }

  getContainer = getNodeFromSelector;

  render() {
    const { selector, append } = this.props;

    // Render the portal content to container node or parent node
    const { children, render } = this.props;
    const content = render ? render() : Children.only(children);
    const container = this.getContainer(selector);

    if (!append && container) {
      container.innerHTML = '';
    }

    return ReactDOM.createPortal(content, container);
  }
}
