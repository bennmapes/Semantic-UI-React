import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _invoke from "lodash/invoke";
import _get from "lodash/get";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createShorthandFactory, customPropTypes, getUnhandledProps } from '../../lib';
/**
 * A search item sub-component for Dropdown component.
 */

var DropdownSearchInput =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownSearchInput, _Component);

  function DropdownSearchInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownSearchInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownSearchInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var value = _get(e, 'target.value');

      _invoke(_this.props, 'onChange', e, _objectSpread({}, _this.props, {
        value: value
      }));
    });

    return _this;
  }

  _createClass(DropdownSearchInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoComplete = _this$props.autoComplete,
          className = _this$props.className,
          tabIndex = _this$props.tabIndex,
          type = _this$props.type,
          value = _this$props.value;
      var classes = cx('search', className);
      var rest = getUnhandledProps(DropdownSearchInput, this.props);
      return React.createElement("input", _extends({}, rest, {
        "aria-autocomplete": "list",
        autoComplete: autoComplete,
        className: classes,
        onChange: this.handleChange,
        tabIndex: tabIndex,
        type: type,
        value: value
      }));
    }
  }]);

  return DropdownSearchInput;
}(Component);

_defineProperty(DropdownSearchInput, "defaultProps", {
  autoComplete: 'off',
  type: 'text'
});

_defineProperty(DropdownSearchInput, "handledProps", ["as", "autoComplete", "className", "tabIndex", "type", "value"]);

DropdownSearchInput.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** An input can have the auto complete. */
  autoComplete: PropTypes.string,

  /** Additional classes. */
  className: PropTypes.string,

  /** An input can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The HTML input type. */
  type: PropTypes.string,

  /** Stored value. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
} : {};
DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput, function (type) {
  return {
    type: type
  };
});
export default DropdownSearchInput;