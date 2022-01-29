'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(require('react-dom'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "#styles-index_toastr-root__lxyAG {\n  position: fixed;\n  bottom: 0;\n  z-index: 11;\n}\n\n.styles-index_toastr-container__VQl6U {\n  gap: 8px;\n  display: flex;\n  flex-flow: column-reverse;\n  margin: 8px;\n}\n";
styleInject(css_248z);

var CloseIcon = function CloseIcon(props) {
  return React.createElement("svg", Object.assign({
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    stroke: "none"
  }), React.createElement("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    stroke: "none"
  }));
};

var ErrorIcon = function ErrorIcon(props) {
  return React.createElement("svg", Object.assign({
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z",
    stroke: "none"
  }), React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
    stroke: "none"
  }));
};

var SuccessIcon = function SuccessIcon(props) {
  return React.createElement("svg", Object.assign({
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z",
    stroke: "none"
  }), React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    stroke: "none"
  }));
};

var WarningIcon = function WarningIcon(props) {
  return React.createElement("svg", Object.assign({
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    stroke: "none"
  }), React.createElement("path", {
    d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
    stroke: "none"
  }));
};

var lighten = function lighten(amount, color) {
  return '#' + color.replace(/^#/, '').replace(/../g, function (color) {
    return ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2);
  });
};
var genID = function genID() {
  return '_' + Math.random().toString(36).substr(2, 9);
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var colors;

(function (colors) {
  colors["error"] = "#f75d52";
  colors["success"] = "#51f083";
  colors["warning"] = "#f5b840";
})(colors || (colors = {}));

var lightenColor = function lightenColor(color) {
  return lighten(150, colors[color]);
};

var fadeIn = /*#__PURE__*/styled.keyframes(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var fadeOut = /*#__PURE__*/styled.keyframes(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"])));
var Container = /*#__PURE__*/styled__default.div(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-columns: 1fr 7fr;\n  grid-column-gap: 8px;\n\n  animation: ", " 0.2s;\n\n  &.removing {\n    animation: ", " 150ms ease;\n  }\n\n  color: #272727;\n  font-size: 14px;\n\n  background-color: ", ";\n\n  border-left: 8px solid\n    ", ";\n  border-radius: 4px;\n\n  position: relative;\n\n  width: 40%;\n  min-height: 35px;\n  max-width: 220px;\n  @media (max-width: 500px) {\n    max-width: 300px;\n  }\n  min-width: fit-content;\n\n  box-sizing: content-box;\n\n  padding: 8px;\n\n  font-family: Roboto, Arial, sans-serif;\n\n  & > svg {\n    height: inherit;\n    width: 28px;\n\n    color: ", ";\n\n    align-self: center;\n  }\n"])), fadeIn, fadeOut, function (props) {
  return lightenColor(props['aria-label']);
}, function (props) {
  return colors[props['aria-label']];
}, function (props) {
  return colors[props['aria-label']];
});
var Header = /*#__PURE__*/styled__default.header(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-weight: 500;\n  font-size: 15px;\n"])));
var Body = /*#__PURE__*/styled__default.div(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  display: flex;\n  width: auto;\n  flex-flow: column;\n"])));
var Message = /*#__PURE__*/styled__default.span(_templateObject6 || (_templateObject6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: auto;\n\n  font-size: 12px;\n"])));
var CloseButtonContainer = /*#__PURE__*/styled__default.div(_templateObject7 || (_templateObject7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 7px;\n  right: 10px;\n\n  cursor: pointer;\n"])));

var Toastr = function Toastr(_ref) {
  var id = _ref.id,
      timeout = _ref.timeout,
      title = _ref.title,
      message = _ref.message,
      type = _ref.type,
      onClose = _ref.onClose;

  var _useState = React.useState(false),
      hovering = _useState[0],
      setHovering = _useState[1];

  var _useState2 = React.useState(false),
      closing = _useState2[0],
      setClosing = _useState2[1];

  var handleClose = React.useCallback(function () {
    return onClose(id);
  }, [onClose, id]);

  var handleMouseOver = function handleMouseOver() {
    return setHovering(true);
  };

  var handleMouseOut = function handleMouseOut() {
    return setHovering(false);
  };

  React.useEffect(function () {
    if (closing) {
      if (!hovering) {
        setTimeout(function () {
          return handleClose();
        }, 150);
      }
    }
  }, [closing, hovering, handleClose]);
  React.useEffect(function () {
    setTimeout(function () {
      setClosing(true);
    }, timeout || 5 * 1000);
  }, [id, timeout, setClosing]);
  return React__default.createElement(Container, {
    "aria-label": type,
    id: id,
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseOut,
    className: closing && !hovering ? 'removing' : ''
  }, type === 'success' && React__default.createElement(SuccessIcon, null), type === 'error' && React__default.createElement(ErrorIcon, null), type === 'warning' && React__default.createElement(WarningIcon, null), React__default.createElement(Body, null, React__default.createElement(Header, null, title), React__default.createElement(Message, null, message)), React__default.createElement(CloseButtonContainer, {
    onClick: handleClose
  }, React__default.createElement(CloseIcon, null)));
};

var ToastrContext = /*#__PURE__*/React.createContext(null);
var ToastrProvider = function ToastrProvider(_ref) {
  var timeout = _ref.timeout,
      children = _ref.children;

  var _useState = React.useState([]),
      toastrs = _useState[0],
      setToastrs = _useState[1];

  React.useEffect(function () {
    var toastrRoot = document.getElementById('toastr-root');

    if (!toastrRoot) {
      var root = document.createElement('div');
      root.id = 'toastr-root';
      document.body.append(root);
      return;
    }

    ReactDOM.render(React__default.createElement("div", {
      className: "toastr-container"
    }, toastrs == null ? void 0 : toastrs.map(function (toastr) {
      return React__default.createElement(Toastr, {
        id: toastr.id,
        key: toastr.id,
        type: toastr.type,
        title: toastr.title,
        message: toastr.message,
        timeout: toastr.timeout || timeout || 5000,
        onClose: function onClose(id) {
          var _toastr$options, _toastr$options2;

          setToastrs(function (prevToastrs) {
            return prevToastrs.filter(function (el) {
              return el.id !== id;
            });
          });
          if ((_toastr$options = toastr.options) != null && _toastr$options.onClose) return (_toastr$options2 = toastr.options) == null ? void 0 : _toastr$options2.onClose();
        }
      });
    })), toastrRoot);
  }, [toastrs]);

  var createToastr = function createToastr(type, title, message, options) {
    if (options === void 0) {
      options = defaultOptions(timeout);
    }

    setToastrs(function (prevToastrs) {
      return [].concat(prevToastrs, [_extends({
        onClose: function onClose() {}
      }, options, {
        type: type,
        title: title,
        message: message,
        id: genID()
      })]);
    });
  };

  return React__default.createElement(ToastrContext.Provider, {
    value: {
      createToastr: createToastr
    }
  }, children);
};

var useToastr = function useToastr() {
  var toastrManager = React.useContext(ToastrContext);
  return {
    success: function success(title, message, options) {
      toastrManager == null ? void 0 : toastrManager.createToastr('success', title, message || '', options);
    },
    error: function error(title, message, options) {
      toastrManager == null ? void 0 : toastrManager.createToastr('error', title, message || '', options);
    },
    warning: function warning(title, message, options) {
      toastrManager == null ? void 0 : toastrManager.createToastr('warning', title, message || '', options);
    }
  };
};

(function (ToastrTypes) {
  ToastrTypes[ToastrTypes["success"] = 0] = "success";
  ToastrTypes[ToastrTypes["error"] = 1] = "error";
  ToastrTypes[ToastrTypes["warning"] = 2] = "warning";
})(exports.ToastrTypes || (exports.ToastrTypes = {}));

var defaultOptions = function defaultOptions(timeout) {
  return {
    timeout: timeout || 5000,
    onClose: function onClose() {}
  };
};

exports.Body = Body;
exports.CloseButtonContainer = CloseButtonContainer;
exports.Container = Container;
exports.Header = Header;
exports.Message = Message;
exports.Toastr = Toastr;
exports.ToastrContext = ToastrContext;
exports.ToastrProvider = ToastrProvider;
exports.defaultOptions = defaultOptions;
exports.useToastr = useToastr;
//# sourceMappingURL=mococa-toastr.cjs.development.js.map
