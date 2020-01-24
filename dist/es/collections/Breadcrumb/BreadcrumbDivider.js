import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _isNil from "lodash/isNil";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { childrenUtils, createShorthandFactory, customPropTypes, getUnhandledProps, getElementType } from '../../lib';
import Icon from '../../elements/Icon';
/**
 * A divider sub-component for Breadcrumb component.
 */

function BreadcrumbDivider(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;
  var classes = cx('divider', className);
  var rest = getUnhandledProps(BreadcrumbDivider, props);
  var ElementType = getElementType(BreadcrumbDivider, props);

  if (!_isNil(icon)) {
    return Icon.create(icon, {
      defaultProps: _objectSpread({}, rest, {
        className: classes
      }),
      autoGenerateKey: false
    });
  }

  if (!_isNil(content)) {
    return React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), content);
  }

  return React.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), childrenUtils.isNil(children) ? '/' : children);
}

BreadcrumbDivider.handledProps = ["as", "children", "className", "content", "icon"];
BreadcrumbDivider.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon: customPropTypes.itemShorthand
} : {};
BreadcrumbDivider.create = createShorthandFactory(BreadcrumbDivider, function (icon) {
  return {
    icon: icon
  };
});
export default BreadcrumbDivider;