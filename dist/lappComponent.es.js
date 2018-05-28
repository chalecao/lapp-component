import { l, app } from 'lapp';

function filter(props, ctlProps) {
    var newProp = Object.assign({}, props);
    ctlProps && ctlProps.map(function (k) {
        delete newProp[k];
    });
    return newProp;
}

function getCtlCls(props, ctlProps, prefix) {
    return props && ctlProps.map(function (prop) {
        return props[prop] ? " " + prefix + "--" + prop : "";
    }).join('');
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

var css = ".mdl-badge{position:relative;white-space:nowrap;margin-right:24px}.mdl-badge:not([data-badge]){margin-right:auto}.mdl-badge[data-badge]:after{content:attr(data-badge);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:-11px;right:-24px;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:600;font-size:12px;width:22px;height:22px;border-radius:50%;background:#ff4081;color:#fff}.mdl-button .mdl-badge[data-badge]:after{top:-10px;right:-5px}.mdl-badge.mdl-badge--no-background[data-badge]:after{color:#ff4081;background:hsla(0,0%,100%,.2);-webkit-box-shadow:0 0 1px gray;box-shadow:0 0 1px gray}.mdl-badge.mdl-badge--overlap{margin-right:10px}.mdl-badge.mdl-badge--overlap:after{right:-10px}";
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var ctlProps = ['class'];

var actions = {
    getCls: function getCls(props) {
        return "mdl-badge" + (props.noBack ? " mdl-badge--no-background" : "") + (props.icon ? " material-icons" : "") + (props.overlap ? " mdl-badge--overlap" : "") + (props['class'] ? ' ' + props['class'] : "");
    }
    /**
     *
     * @param {*} data
     * @param {*} noBack
     */
};var Badge = function Badge(_ref) {
    var _ref$props = _ref.props,
        props = _ref$props === undefined ? {} : _ref$props,
        children = _ref.children;

    props = props || {};
    return l(
        'span',
        _extends({ 'class': actions.getCls(props), 'data-badge': props.data }, filter(props, ctlProps)),
        children
    );
};

var css$1 = "@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format(\"woff2\")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}";
styleInject(css$1);

var actions$1 = {
    getCls: function getCls(props) {
        return "material-icons" + (props.class ? ' ' + props.class : "");
    }
    /**
     *
     * @param {*} data
     * @param {*} noBack
     */
};var Icon = function Icon(_ref) {
    var props = _ref.props,
        children = _ref.children;

    props = props || {};
    return l(
        'i',
        _extends({ 'class': actions$1.getCls(props) }, filter(props, ['class'])),
        children
    );
};

var css$2 = ".mdl-button{background:transparent;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;line-height:1;letter-spacing:0;overflow:hidden;will-change:box-shadow;-webkit-transition:background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .2s cubic-bezier(.4,0,1,1);transition:background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .2s cubic-bezier(.4,0,1,1);transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .2s cubic-bezier(.4,0,1,1);outline:none;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:hsla(0,0%,62%,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:hsla(0,0%,62%,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}input.mdl-button[type=submit]{-webkit-appearance:none}.mdl-button--raised{background:hsla(0,0%,62%,.2);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-button--raised:active{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised:focus:not(:active){-webkit-box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised.mdl-button--colored{background:#3f51b5;color:#fff}.mdl-button--raised.mdl-button--colored:active,.mdl-button--raised.mdl-button--colored:focus:not(:active),.mdl-button--raised.mdl-button--colored:hover{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--fab{border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:hsla(0,0%,62%,.2);-webkit-box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal}.mdl-button--fab .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--fab.mdl-button--mini-fab{height:40px;min-width:40px;width:40px}.mdl-button--fab .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button--fab:active{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab:focus:not(:active){-webkit-box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab.mdl-button--colored{background:#ff4081;color:#fff}.mdl-button--fab.mdl-button--colored:active,.mdl-button--fab.mdl-button--colored:focus:not(:active),.mdl-button--fab.mdl-button--colored:hover{background-color:#ff4081}.mdl-button--fab.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--icon{border-radius:50%;font-size:24px;height:32px;margin-left:0;margin-right:0;min-width:32px;width:32px;padding:0;overflow:hidden;color:inherit;line-height:normal}.mdl-button--icon .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon{height:24px;min-width:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon .material-icons{top:0;left:0}.mdl-button--icon .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button__ripple-container{display:block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:0;overflow:hidden}.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple,.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple{background-color:transparent}.mdl-button--primary.mdl-button--primary{color:#3f51b5}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:#fff}.mdl-button--primary.mdl-button--primary.mdl-button--fab,.mdl-button--primary.mdl-button--primary.mdl-button--raised{color:#fff;background-color:#3f51b5}.mdl-button--accent.mdl-button--accent{color:#ff4081}.mdl-button--accent.mdl-button--accent .mdl-ripple{background:#fff}.mdl-button--accent.mdl-button--accent.mdl-button--fab,.mdl-button--accent.mdl-button--accent.mdl-button--raised{color:#fff;background-color:#ff4081}.mdl-button.mdl-button--disabled.mdl-button--disabled,.mdl-button[disabled][disabled]{color:rgba(0,0,0,.26);cursor:default;background-color:transparent}.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,.mdl-button--fab[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-button--raised.mdl-button--disabled.mdl-button--disabled,.mdl-button--raised[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26);-webkit-box-shadow:none;box-shadow:none}.mdl-button--colored.mdl-button--disabled.mdl-button--disabled,.mdl-button--colored[disabled][disabled]{color:rgba(0,0,0,.26)}.mdl-button .material-icons{vertical-align:middle}";
styleInject(css$2);

var ctlProps$1 = ['fab', 'raised', 'primary', 'accent', 'icon', 'class'];

var actions$2 = {
    getCls: function getCls(props) {
        return "mdl-button mdl-js-button" + (props.ripple ? " mdl-js-ripple-effect" : "") + getCtlCls(props, ctlProps$1.slice(0, 5), 'mdl-button') + (props.class ? ' ' + props.class : "");
    }
    /**
     *
     * @param {*} props
     * @param {*} children
     */
};var Button = function Button(_ref) {
    var props = _ref.props,
        children = _ref.children;

    props = props || {};
    return l(
        'button',
        _extends({ 'class': actions$2.getCls(props) }, filter(props, ctlProps$1)),
        children
    );
};

var css$3 = ".mdl-card{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:16px;font-weight:400;overflow:hidden;width:330px;z-index:1;position:relative;background:#fff;border-radius:2px}.mdl-card,.mdl-card__media{-webkit-box-sizing:border-box;box-sizing:border-box}.mdl-card__media{background-color:#ff4081;background-repeat:repeat;background-position:50% 50%;background-size:cover;background-origin:padding-box;background-attachment:scroll}.mdl-card__title{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#000;display:block;display:-webkit-box;display:-ms-flexbox;display:flex;line-height:normal;padding:16px;-webkit-perspective-origin:165px 56px;perspective-origin:165px 56px;-webkit-transform-origin:165px 56px;transform-origin:165px 56px;-webkit-box-sizing:border-box;box-sizing:border-box}.mdl-card__title.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__title-text{-ms-flex-item-align:end;align-self:flex-end;color:inherit;display:block;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:24px;font-weight:300;line-height:normal;overflow:hidden;-webkit-transform-origin:149px 48px;transform-origin:149px 48px;margin:0}.mdl-card__subtitle-text{font-size:14px;color:rgba(0,0,0,.54);margin:0}.mdl-card__supporting-text{color:rgba(0,0,0,.54);font-size:16px;font-size:1rem;line-height:18px;overflow:hidden;padding:16px;width:90%}.mdl-card__supporting-text.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__actions{font-size:16px;line-height:normal;width:100%;background-color:transparent;padding:8px;-webkit-box-sizing:border-box;box-sizing:border-box}.mdl-card__actions.mdl-card--border{border-top:1px solid rgba(0,0,0,.1)}.mdl-card--expand{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.mdl-card__menu{position:absolute;right:16px;top:16px}";
styleInject(css$3);

var ctlProps$2 = ['title', 'desc', 'class'];

var actions$3 = {
    getCls: function getCls(props) {
        return "mdl-card" + (props.shadow ? " mdl-shadow--2dp" : "") + (props['class'] ? ' ' + props['class'] : "");
    }
    /**
     *
     * @param {*} props
     * @param {*} children
     */
};var Card = function Card(_ref) {
    var props = _ref.props,
        children = _ref.children;

    props = props || {};
    return l(
        'div',
        _extends({ 'class': actions$3.getCls(props) }, filter(props, ctlProps$2)),
        l(
            'div',
            { 'class': 'mdl-card__title' },
            l(
                'h2',
                { 'class': 'mdl-card__title-text' },
                props.title
            )
        ),
        props.desc ? l(
            'div',
            { 'class': 'mdl-card__supporting-text' },
            props.desc
        ) : "",
        children.length ? l(
            'div',
            { 'class': 'mdl-card__actions mdl-card--border' },
            children
        ) : ""
    );
};

var css$4 = ".mdl-chip{height:32px;font-family:Roboto,Helvetica,Arial,sans-serif;line-height:32px;padding:0 12px;border:0;border-radius:16px;background-color:#dedede;display:inline-block;color:rgba(0,0,0,.87);margin:2px 0;font-size:0;white-space:nowrap}.mdl-chip__action,.mdl-chip__text{font-size:13px;vertical-align:middle;display:inline-block}.mdl-chip__action{height:24px;width:24px;background:transparent;opacity:.54;cursor:pointer;text-align:center;padding:0;margin:0 0 0 4px;text-decoration:none;color:rgba(0,0,0,.87);border:none;outline:none;overflow:hidden}.mdl-chip__contact{height:32px;width:32px;border-radius:16px;display:inline-block;vertical-align:middle;margin-right:8px;overflow:hidden;text-align:center;font-size:18px;line-height:32px}.mdl-chip:focus{outline:0;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-chip:active{background-color:#d6d6d6}.mdl-chip--deletable{padding-right:4px}.mdl-chip--deletable>:last-child{height:24px;width:24px;background:transparent;opacity:.54;display:inline-block;cursor:pointer;text-align:center;vertical-align:middle;padding:0;margin:0 0 0 4px;font-size:13px;text-decoration:none;color:rgba(0,0,0,.87);border:none;outline:none;overflow:hidden}.mdl-chip--contact{padding-left:0}.mdl-chip--contact>:first-child{height:32px;width:32px;border-radius:16px;display:inline-block;vertical-align:middle;margin-right:8px;overflow:hidden;text-align:center;font-size:18px;line-height:32px}";
styleInject(css$4);

var ctlProps$3 = ['contact', 'deletable', 'class'];

var actions$4 = {
    getCls: function getCls(props) {
        return "mdl-chip" + getCtlCls(props, ctlProps$3.slice(0, 3), 'mdl-chip') + (props.class ? ' ' + props.class : "");
    }
    /**
     *
     * @param {*} props
     * @param {*} children
     */
};var Chip = function Chip(_ref) {
    var props = _ref.props,
        children = _ref.children;

    props = props || {};
    return l(
        'span',
        _extends({ 'class': actions$4.getCls(props) }, filter(props, ctlProps$3)),
        children
    );
};

var css$5 = ".mdl-navigation{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box}.mdl-navigation__link{color:#424242;text-decoration:none;margin:0;font-size:14px;font-weight:400;line-height:24px;letter-spacing:0;opacity:.87}.mdl-navigation__link .material-icons{vertical-align:middle}.mdl-layout{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow-y:auto;overflow-x:hidden;position:relative;-webkit-overflow-scrolling:touch}.mdl-layout.is-small-screen .mdl-layout--large-screen-only,.mdl-layout:not(.is-small-screen) .mdl-layout--small-screen-only{display:none}.mdl-layout__container{position:absolute;width:100%;height:100%}.mdl-layout-title,.mdl-layout__title{display:block;position:relative;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;line-height:1;letter-spacing:.02em;font-weight:400;-webkit-box-sizing:border-box;box-sizing:border-box}.mdl-layout-spacer{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.mdl-layout__drawer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;width:240px;height:100%;max-height:100%;position:absolute;top:0;left:0;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);-webkit-box-sizing:border-box;box-sizing:border-box;border-right:1px solid #e0e0e0;background:#fafafa;-webkit-transform:translateX(-250px);transform:translateX(-250px);-webkit-transform-style:preserve-3d;transform-style:preserve-3d;will-change:transform;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;color:#424242;overflow:visible;overflow-y:auto;z-index:5}.mdl-layout__drawer.is-visible{-webkit-transform:translateX(0);transform:translateX(0)}.mdl-layout__drawer.is-visible~.mdl-layout__content.mdl-layout__content{overflow:hidden}.mdl-layout__drawer>*{-ms-flex-negative:0;flex-shrink:0}.mdl-layout__drawer>.mdl-layout-title,.mdl-layout__drawer>.mdl-layout__title{line-height:64px;padding-left:40px}@media screen and (max-width:1024px){.mdl-layout__drawer>.mdl-layout-title,.mdl-layout__drawer>.mdl-layout__title{line-height:56px;padding-left:16px}}.mdl-layout__drawer .mdl-navigation{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding-top:16px}.mdl-layout__drawer .mdl-navigation .mdl-navigation__link{display:block;-ms-flex-negative:0;flex-shrink:0;padding:16px 40px;margin:0;color:#757575}@media screen and (max-width:1024px){.mdl-layout__drawer .mdl-navigation .mdl-navigation__link{padding:16px}}.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:hover{background-color:#e0e0e0}.mdl-layout__drawer .mdl-navigation .mdl-navigation__link--current{background-color:#e0e0e0;color:#000}@media screen and (min-width:1025px){.mdl-layout--fixed-drawer>.mdl-layout__drawer{-webkit-transform:translateX(0);transform:translateX(0)}}.mdl-layout__drawer-button{display:block;position:absolute;height:48px;width:48px;border:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden;text-align:center;cursor:pointer;font-size:26px;line-height:56px;font-family:Helvetica,Arial,sans-serif;margin:8px 12px;top:0;left:0;color:#fff;z-index:4}.mdl-layout__header .mdl-layout__drawer-button{position:absolute;color:#fff;background-color:inherit}@media screen and (max-width:1024px){.mdl-layout__header .mdl-layout__drawer-button{margin:4px}}@media screen and (max-width:1024px){.mdl-layout__drawer-button{margin:4px;color:rgba(0,0,0,.5)}}@media screen and (min-width:1025px){.mdl-layout__drawer-button{line-height:54px}.mdl-layout--fixed-drawer>.mdl-layout__drawer-button,.mdl-layout--no-desktop-drawer-button .mdl-layout__drawer-button,.mdl-layout--no-drawer-button .mdl-layout__drawer-button{display:none}}.mdl-layout__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;width:100%;margin:0;padding:0;border:none;min-height:64px;max-height:1000px;z-index:3;background-color:#3f51b5;color:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-property:max-height,-webkit-box-shadow;transition-property:max-height,-webkit-box-shadow;transition-property:max-height,box-shadow;transition-property:max-height,box-shadow,-webkit-box-shadow}@media screen and (max-width:1024px){.mdl-layout__header{min-height:56px}}.mdl-layout--fixed-drawer.is-upgraded:not(.is-small-screen)>.mdl-layout__header{margin-left:240px;width:calc(100% - 240px)}@media screen and (min-width:1025px){.mdl-layout--fixed-drawer>.mdl-layout__header .mdl-layout__header-row{padding-left:40px}}.mdl-layout__header>.mdl-layout-icon{position:absolute;left:40px;top:16px;height:32px;width:32px;overflow:hidden;z-index:3;display:block}@media screen and (max-width:1024px){.mdl-layout__header>.mdl-layout-icon{left:16px;top:12px}}.mdl-layout.has-drawer .mdl-layout__header>.mdl-layout-icon{display:none}.mdl-layout__header.is-compact{max-height:64px}@media screen and (max-width:1024px){.mdl-layout__header.is-compact{max-height:56px}}.mdl-layout__header.is-compact.has-tabs{height:112px}@media screen and (max-width:1024px){.mdl-layout__header.is-compact.has-tabs{min-height:104px}}@media screen and (max-width:1024px){.mdl-layout__header{display:none}.mdl-layout--fixed-header>.mdl-layout__header{display:-webkit-box;display:-ms-flexbox;display:flex}}.mdl-layout__header--transparent.mdl-layout__header--transparent{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.mdl-layout__header--scroll,.mdl-layout__header--seamed,.mdl-layout__header--waterfall{-webkit-box-shadow:none;box-shadow:none}.mdl-layout__header--waterfall{overflow:hidden}.mdl-layout__header--waterfall.is-casting-shadow{-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-layout__header--waterfall.mdl-layout__header--waterfall-hide-top{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.mdl-layout__header-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:64px;margin:0;padding:0 40px 0 80px}.mdl-layout--no-drawer-button .mdl-layout__header-row{padding-left:40px}@media screen and (min-width:1025px){.mdl-layout--no-desktop-drawer-button .mdl-layout__header-row{padding-left:40px}}@media screen and (max-width:1024px){.mdl-layout__header-row{height:56px;padding:0 16px 0 72px}.mdl-layout--no-drawer-button .mdl-layout__header-row{padding-left:16px}}.mdl-layout__header-row>*{-ms-flex-negative:0;flex-shrink:0}.mdl-layout__header--scroll .mdl-layout__header-row{width:100%}.mdl-layout__header-row .mdl-navigation{margin:0;padding:0;height:64px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media screen and (max-width:1024px){.mdl-layout__header-row .mdl-navigation{height:56px}}.mdl-layout__header-row .mdl-navigation__link{display:block;color:#fff;line-height:64px;padding:0 24px}@media screen and (max-width:1024px){.mdl-layout__header-row .mdl-navigation__link{line-height:56px;padding:0 16px}}.mdl-layout__obfuscator{background-color:transparent;position:absolute;top:0;left:0;height:100%;width:100%;z-index:4;visibility:hidden;-webkit-transition-property:background-color;transition-property:background-color;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-layout__obfuscator.is-visible{background-color:rgba(0,0,0,.5);visibility:visible}@supports (pointer-events:auto){.mdl-layout__obfuscator{background-color:rgba(0,0,0,.5);opacity:0;-webkit-transition-property:opacity;transition-property:opacity;visibility:visible;pointer-events:none}.mdl-layout__obfuscator.is-visible{pointer-events:auto;opacity:1}}.mdl-layout__content{-ms-flex:0 1 auto;position:relative;display:inline-block;overflow-y:auto;overflow-x:hidden;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;z-index:1;-webkit-overflow-scrolling:touch}.mdl-layout--fixed-drawer>.mdl-layout__content{margin-left:240px}.mdl-layout__container.has-scrolling-header .mdl-layout__content{overflow:visible}@media screen and (max-width:1024px){.mdl-layout--fixed-drawer>.mdl-layout__content{margin-left:0}.mdl-layout__container.has-scrolling-header .mdl-layout__content{overflow-y:auto;overflow-x:hidden}}.mdl-layout__tab-bar{height:48px;margin:0;width:calc(100% - 112px);padding:0 0 0 56px;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#3f51b5;overflow-y:hidden;overflow-x:scroll}.mdl-layout__tab-bar::-webkit-scrollbar{display:none}.mdl-layout--no-drawer-button .mdl-layout__tab-bar{padding-left:16px;width:calc(100% - 32px)}@media screen and (min-width:1025px){.mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar{padding-left:16px;width:calc(100% - 32px)}}@media screen and (max-width:1024px){.mdl-layout__tab-bar{width:calc(100% - 60px);padding:0 0 0 60px}.mdl-layout--no-drawer-button .mdl-layout__tab-bar{width:calc(100% - 8px);padding-left:4px}}.mdl-layout--fixed-tabs .mdl-layout__tab-bar{padding:0;overflow:hidden;width:100%}.mdl-layout__tab-bar-container{position:relative;height:48px;width:100%;border:none;margin:0;z-index:2;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.mdl-layout__container>.mdl-layout__tab-bar-container{position:absolute;top:0;left:0}.mdl-layout__tab-bar-button{display:inline-block;position:absolute;top:0;height:48px;width:56px;z-index:4;text-align:center;background-color:#3f51b5;color:transparent;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar-button,.mdl-layout--no-drawer-button .mdl-layout__tab-bar-button{width:16px}.mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar-button .material-icons,.mdl-layout--no-drawer-button .mdl-layout__tab-bar-button .material-icons{position:relative;left:-4px}@media screen and (max-width:1024px){.mdl-layout__tab-bar-button{width:60px}}.mdl-layout--fixed-tabs .mdl-layout__tab-bar-button{display:none}.mdl-layout__tab-bar-button .material-icons{line-height:48px}.mdl-layout__tab-bar-button.is-active{color:#fff}.mdl-layout__tab-bar-left-button{left:0}.mdl-layout__tab-bar-right-button{right:0}.mdl-layout__tab{margin:0;border:none;padding:0 24px;float:left;position:relative;display:block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;text-decoration:none;height:48px;line-height:48px;text-align:center;font-weight:500;font-size:14px;text-transform:uppercase;color:hsla(0,0%,100%,.6);overflow:hidden}@media screen and (max-width:1024px){.mdl-layout__tab{padding:0 12px}}.mdl-layout--fixed-tabs .mdl-layout__tab{float:none;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:0}.mdl-layout.is-upgraded .mdl-layout__tab.is-active{color:#fff}.mdl-layout.is-upgraded .mdl-layout__tab.is-active:after{height:2px;width:100%;display:block;content:\" \";bottom:0;left:0;position:absolute;background:#ff4081;-webkit-animation:border-expand .2s cubic-bezier(.4,0,.4,1) alternate forwards;animation:border-expand .2s cubic-bezier(.4,0,.4,1) alternate forwards;-webkit-transition:all 1s cubic-bezier(.4,0,1,1);transition:all 1s cubic-bezier(.4,0,1,1)}.mdl-layout__tab .mdl-layout__tab-ripple-container{display:block;position:absolute;height:100%;width:100%;left:0;top:0;z-index:1;overflow:hidden}.mdl-layout__tab .mdl-layout__tab-ripple-container .mdl-ripple{background-color:#fff}.mdl-layout__tab-panel{display:block}.mdl-layout.is-upgraded .mdl-layout__tab-panel{display:none}.mdl-layout.is-upgraded .mdl-layout__tab-panel.is-active{display:block}";
styleInject(css$5);

var ctlProps$4 = ['title', 'nav', 'drawer', 'fixed-drawer', 'class'];

var state = {
    drawerCls: ""
};

var actions$5 = {
    getCls: function getCls(props) {
        return "mdl-layout mdl-js-layout" + (props['fixed-drawer'] ? ' mdl-layout--fixed-drawer' : '') + (props['class'] ? ' ' + props['class'] : "");
    },
    showDrawer: function showDrawer() {
        state.drawerCls = !state.drawerCls ? " is-visible" : "";
        Layout.$update();
    },
    getNav: function getNav(nav) {
        return nav.map(function (k) {
            return l(
                'a',
                { 'class': 'mdl-navigation__link', href: k.url },
                k.val
            );
        });
    },

    getDrawerContent: function getDrawerContent(props) {
        return props.drawer ? l(
            'div',
            null,
            l(
                'div',
                { 'class': 'mdl-layout__drawer-button', onClick: actions$5.showDrawer },
                l(
                    'i',
                    { 'class': 'material-icons' },
                    'menu'
                )
            ),
            l('div', { 'class': "mdl-layout__obfuscator" + state.drawerCls, onClick: actions$5.showDrawer }),
            l(
                'div',
                { 'class': "mdl-layout__drawer" + state.drawerCls },
                l(
                    'span',
                    { 'class': 'mdl-layout-title' },
                    props.title
                ),
                l(
                    'nav',
                    { 'class': 'mdl-navigation' },
                    actions$5.getNav(props.nav)
                )
            )
        ) : "";
    }
    /**
     *
     * @param {*} props
     * @param {*} children
     */
};var Layout = function Layout(_ref) {
    var props = _ref.props,
        children = _ref.children;

    props = props || {};
    return l(
        'div',
        _extends({ 'class': actions$5.getCls(props) }, filter(props, ctlProps$4)),
        l(
            'header',
            { 'class': "mdl-layout__header mdl-layout__header--transparent" + (props.drawer ? '' : ' mdl-layout--no-drawer-button') },
            l(
                'div',
                { 'class': 'mdl-layout__header-row' },
                l(
                    'span',
                    { 'class': 'mdl-layout-title' },
                    props.title
                ),
                l('div', { 'class': 'mdl-layout-spacer' }),
                l(
                    'nav',
                    { 'class': 'mdl-navigation' },
                    actions$5.getNav(props.nav)
                )
            )
        ),
        actions$5.getDrawerContent(props),
        l(
            'div',
            { 'class': 'mdl-layout__content' },
            children
        )
    );
};

var ctlProps$5 = ['title', 'tabs', 'class', 'onChange', 'fixed'];

var state$1 = {
    tabs: []
    /**
     *
     * @augments props.onChange
     *
     */

};var actions$6 = {
    getCls: function getCls(props) {
        return "mdl-layout mdl-js-layout is-upgraded" + (props['fixed'] ? ' mdl-layout--fixed-tabs' : '') + (props['class'] ? ' ' + props['class'] : "");
    },
    switchTab: function switchTab(props, t) {
        return function (e) {
            props.onChange && props.onChange(e, t);
            state$1.tabs.forEach(function (tab) {
                return tab.cls = "";
            });
            t.cls = "is-active";
            state$1.hasActive = true;
            TabPanel.$update();
        };
    },
    getTab: function getTab(props) {
        props.tabs.forEach(function (tab, i) {

            state$1.tabs[i] = state$1.tabs[i] || Object.assign({}, tab);
        });
        return state$1.tabs.map(function (t, i) {
            return l(
                'a',
                { href: "#fixed-tab-" + i, 'class': "mdl-layout__tab " + (t.cls || ""), onClick: actions$6.switchTab(props, t) },
                t.val
            );
        });
    },

    getTabContent: function getTabContent(tabs, children) {
        tabs.forEach(function (tab, i) {

            state$1.tabs[i] = state$1.tabs[i] || Object.assign({}, tab);
        });
        return state$1.tabs.map(function (t, i) {
            return l(
                'section',
                { 'class': "mdl-layout__tab-panel " + (t.cls || ""), id: "fixed-tab-" + i },
                children[i]
            );
        });
    }
    /**
     *
     * @param {*} props
     * @param {*} children
     */
};var TabPanel = function TabPanel(_ref) {
    var props = _ref.props,
        children = _ref.children;

    props = props || {};
    return l(
        'div',
        _extends({ 'class': actions$6.getCls(props) }, filter(props, ctlProps$5)),
        l(
            'header',
            { 'class': 'mdl-layout__header' },
            l(
                'div',
                { 'class': 'mdl-layout__header-row' },
                l(
                    'span',
                    { 'class': 'mdl-layout-title' },
                    props.title
                )
            ),
            l(
                'div',
                { 'class': 'mdl-layout__tab-bar mdl-js-ripple-effect' },
                actions$6.getTab(props)
            )
        ),
        l(
            'div',
            { 'class': 'mdl-layout__content' },
            actions$6.getTabContent(props.tabs, children)
        )
    );
};

var css$6 = ".mdl-checkbox{position:relative;z-index:1;vertical-align:middle;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:24px;margin:0;padding:0}.mdl-checkbox.is-upgraded{padding-left:24px}.mdl-checkbox__input{line-height:24px}.mdl-checkbox.is-upgraded .mdl-checkbox__input{position:absolute;width:0;height:0;margin:0;padding:0;opacity:0;-ms-appearance:none;-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none}.mdl-checkbox__box-outline{position:absolute;top:3px;left:0;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:16px;height:16px;margin:0;cursor:pointer;overflow:hidden;border:2px solid rgba(0,0,0,.54);border-radius:2px;z-index:2}.mdl-checkbox.is-checked .mdl-checkbox__box-outline{border:2px solid #3f51b5}.mdl-checkbox.is-disabled .mdl-checkbox__box-outline,fieldset[disabled] .mdl-checkbox .mdl-checkbox__box-outline{border:2px solid rgba(0,0,0,.26);cursor:auto}.mdl-checkbox__focus-helper{position:absolute;top:3px;left:0;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:16px;height:16px;border-radius:50%;background-color:transparent}.mdl-checkbox.is-focused .mdl-checkbox__focus-helper{-webkit-box-shadow:0 0 0 8px rgba(0,0,0,.1);box-shadow:0 0 0 8px rgba(0,0,0,.1);background-color:rgba(0,0,0,.1)}.mdl-checkbox.is-focused.is-checked .mdl-checkbox__focus-helper{-webkit-box-shadow:0 0 0 8px rgba(63,81,181,.26);box-shadow:0 0 0 8px rgba(63,81,181,.26);background-color:rgba(63,81,181,.26)}.mdl-checkbox__tick-outline{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-mask:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==\");mask:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==\");background:transparent;-webkit-transition-duration:.28s;transition-duration:.28s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-property:background-image;transition-property:background-image}.mdl-checkbox.is-checked .mdl-checkbox__tick-outline{background-color:#3f51b5;background-image:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K\")}.mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline,fieldset[disabled] .mdl-checkbox.is-checked .mdl-checkbox__tick-outline{background-color:rgba(0,0,0,.26)}.mdl-checkbox__label{position:relative;cursor:pointer;font-size:16px;line-height:24px;margin:0}.mdl-checkbox.is-disabled .mdl-checkbox__label,fieldset[disabled] .mdl-checkbox .mdl-checkbox__label{color:rgba(0,0,0,.26);cursor:auto}.mdl-checkbox__ripple-container{position:absolute;z-index:2;top:-6px;left:-10px;-webkit-box-sizing:border-box;box-sizing:border-box;width:36px;height:36px;border-radius:50%;cursor:pointer;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-checkbox__ripple-container .mdl-ripple{background:#3f51b5}.mdl-checkbox.is-disabled .mdl-checkbox__ripple-container,fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container{cursor:auto}.mdl-checkbox.is-disabled .mdl-checkbox__ripple-container .mdl-ripple,fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container .mdl-ripple{background:transparent}";
styleInject(css$6);

var ctlProps$6 = ['class', 'label', 'checked', 'name', 'onChange'];
var state$2 = {
    check: null
};
var actions$7 = {
    init: function init(checked) {
        if (state$2.check == null) state$2.check = checked ? "is-checked" : "";
    },
    getCls: function getCls(cls, props) {
        actions$7.init(props.checked);
        return cls + (' ' + state$2.check) + (props.class ? ' ' + props.class : "");
    },
    handleClk: function handleClk(props) {
        return function (e) {
            actions$7.init(props.checked);
            state$2.check = !state$2.check ? "is-checked" : "";
            props.onChange && props.onChange(e, state$2.check);
            Checkbox.$update();
            e.stopPropagation();
        };
    }
    /**
     *
     * @param {*} props
     * @param {*} children
     */
};var Checkbox = function Checkbox(_ref) {
    var props = _ref.props,
        children = _ref.children;

    return l(
        'label',
        _extends({ 'class': actions$7.getCls('mdl-checkbox mdl-js-checkbox is-upgraded', props) }, filter(props, ctlProps$6)),
        l('input', { type: 'checkbox', 'class': 'mdl-checkbox__input', name: props.name, checked: !!state$2.check, onClick: actions$7.handleClk(props) }),
        l('span', { 'class': 'mdl-checkbox__focus-helper' }),
        l(
            'span',
            { 'class': 'mdl-checkbox__box-outline' },
            l('span', { 'class': 'mdl-checkbox__tick-outline' })
        ),
        l(
            'span',
            { 'class': 'mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center' },
            l('span', { 'class': 'mdl-ripple is-animating' })
        ),
        l(
            'span',
            null,
            props.label
        )
    );
};

var css$7 = ".mdl-radio{position:relative;font-size:16px;line-height:24px;display:inline-block;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;height:24px;margin:0;padding-left:0}.mdl-radio.is-upgraded{padding-left:24px}.mdl-radio__button{line-height:24px}.mdl-radio.is-upgraded .mdl-radio__button{position:absolute;width:0;height:0;margin:0;padding:0;opacity:0;-ms-appearance:none;-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none}.mdl-radio__outer-circle{position:absolute;top:4px;left:0;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:16px;height:16px;margin:0;cursor:pointer;border:2px solid rgba(0,0,0,.54);border-radius:50%;z-index:2}.mdl-radio.is-checked .mdl-radio__outer-circle{border:2px solid #3f51b5}.mdl-radio.is-disabled .mdl-radio__outer-circle,.mdl-radio__outer-circle fieldset[disabled] .mdl-radio{border:2px solid rgba(0,0,0,.26);cursor:auto}.mdl-radio__inner-circle{position:absolute;z-index:1;margin:0;top:8px;left:4px;-webkit-box-sizing:border-box;box-sizing:border-box;width:8px;height:8px;cursor:pointer;-webkit-transition-duration:.28s;transition-duration:.28s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transform:scale(0);transform:scale(0);border-radius:50%;background:#3f51b5}.mdl-radio.is-checked .mdl-radio__inner-circle{-webkit-transform:scale(1);transform:scale(1)}.mdl-radio.is-disabled .mdl-radio__inner-circle,fieldset[disabled] .mdl-radio .mdl-radio__inner-circle{background:rgba(0,0,0,.26);cursor:auto}.mdl-radio.is-focused .mdl-radio__inner-circle{-webkit-box-shadow:0 0 0 10px rgba(0,0,0,.1);box-shadow:0 0 0 10px rgba(0,0,0,.1)}.mdl-radio__label{cursor:pointer}.mdl-radio.is-disabled .mdl-radio__label,fieldset[disabled] .mdl-radio .mdl-radio__label{color:rgba(0,0,0,.26);cursor:auto}.mdl-radio__ripple-container{position:absolute;z-index:2;top:-9px;left:-13px;-webkit-box-sizing:border-box;box-sizing:border-box;width:42px;height:42px;border-radius:50%;cursor:pointer;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-radio__ripple-container .mdl-ripple{background:#3f51b5}.mdl-radio.is-disabled .mdl-radio__ripple-container,fieldset[disabled] .mdl-radio .mdl-radio__ripple-container{cursor:auto}.mdl-radio.is-disabled .mdl-radio__ripple-container .mdl-ripple,fieldset[disabled] .mdl-radio .mdl-radio__ripple-container .mdl-ripple{background:transparent}";
styleInject(css$7);

var ctlProps$7 = ['class', 'label', 'checked', 'name'];
var state$3 = {
    check: null
};
var actions$8 = {
    init: function init(checked) {
        if (state$3.check == null) state$3.check = checked ? "is-checked" : "";
    },
    getCls: function getCls(cls, props) {
        actions$8.init(props.checked);
        return cls + (" " + state$3.check) + (props.class ? " " + props.class : "");
    },
    handleClk: function handleClk(props) {
        return function (e) {
            actions$8.init(props.checked);
            state$3.check = !state$3.check ? "is-checked" : "";
            props.onChange && props.onChange(e, state$3.check);
            Radio.$update();
            e.stopPropagation();
        };
    }
    /**
     *
     * @param {*} props
     * @param {*} children
     */
};var Radio = function Radio(_ref) {
    var props = _ref.props,
        children = _ref.children;

    return l(
        "label",
        _extends({ "class": actions$8.getCls('mdl-radio mdl-js-radio is-upgraded', props) }, filter(props, ctlProps$7)),
        l("input", { type: "radio", "class": "mdl-radio__button", name: props.name, checked: !!state$3.check, onClick: actions$8.handleClk(props) }),
        l("span", { "class": "mdl-radio__outer-circle" }),
        l("span", { "class": "mdl-radio__inner-circle" }),
        l(
            "span",
            { "class": "mdl-radio__ripple-container mdl-js-ripple-effect mdl-ripple--center" },
            l("span", { "class": "mdl-ripple is-animating" })
        ),
        l(
            "span",
            { "class": "mdl-radio__label" },
            props.label
        )
    );
};

var css$8 = ".mdl-switch{position:relative;z-index:1;vertical-align:middle;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:24px;margin:0;padding:0;overflow:visible;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdl-switch.is-upgraded{padding-left:28px}.mdl-switch__input{line-height:24px}.mdl-switch.is-upgraded .mdl-switch__input{position:absolute;width:0;height:0;margin:0;padding:0;opacity:0;-ms-appearance:none;-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none}.mdl-switch__track{background:rgba(0,0,0,.26);position:absolute;left:0;top:5px;height:14px;width:36px;border-radius:14px;cursor:pointer}.mdl-switch.is-checked .mdl-switch__track{background:rgba(63,81,181,.5)}.mdl-switch.is-disabled .mdl-switch__track,.mdl-switch__track fieldset[disabled] .mdl-switch{background:rgba(0,0,0,.12);cursor:auto}.mdl-switch__thumb{background:#fafafa;position:absolute;left:0;top:2px;height:20px;width:20px;border-radius:50%;cursor:pointer;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition-duration:.28s;transition-duration:.28s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-property:left;transition-property:left}.mdl-switch.is-checked .mdl-switch__thumb{background:#3f51b5;left:16px;-webkit-box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.mdl-switch.is-disabled .mdl-switch__thumb,.mdl-switch__thumb fieldset[disabled] .mdl-switch{background:#bdbdbd;cursor:auto}.mdl-switch__focus-helper{position:absolute;top:50%;left:50%;-webkit-transform:translate(-4px,-4px);transform:translate(-4px,-4px);display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:8px;height:8px;border-radius:50%;background-color:transparent}.mdl-switch.is-focused .mdl-switch__focus-helper{-webkit-box-shadow:0 0 0 20px rgba(0,0,0,.1);box-shadow:0 0 0 20px rgba(0,0,0,.1);background-color:rgba(0,0,0,.1)}.mdl-switch.is-focused.is-checked .mdl-switch__focus-helper{-webkit-box-shadow:0 0 0 20px rgba(63,81,181,.26);box-shadow:0 0 0 20px rgba(63,81,181,.26);background-color:rgba(63,81,181,.26)}.mdl-switch__label{position:relative;cursor:pointer;font-size:16px;line-height:24px;margin:0;left:24px}.mdl-switch.is-disabled .mdl-switch__label,.mdl-switch__label fieldset[disabled] .mdl-switch{color:#bdbdbd;cursor:auto}.mdl-switch__ripple-container{position:absolute;z-index:2;top:-12px;left:-14px;-webkit-box-sizing:border-box;box-sizing:border-box;width:48px;height:48px;border-radius:50%;cursor:pointer;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000);-webkit-transition-duration:.4s;transition-duration:.4s;-webkit-transition-timing-function:step-end;transition-timing-function:step-end;-webkit-transition-property:left;transition-property:left}.mdl-switch__ripple-container .mdl-ripple{background:#3f51b5}.mdl-switch.is-disabled .mdl-switch__ripple-container,.mdl-switch__ripple-container fieldset[disabled] .mdl-switch{cursor:auto}.mdl-switch.is-disabled .mdl-switch__ripple-container .mdl-ripple,fieldset[disabled] .mdl-switch .mdl-switch__ripple-container .mdl-ripple{background:transparent}.mdl-switch.is-checked .mdl-switch__ripple-container{left:2px}";
styleInject(css$8);

var ctlProps$8 = ['class', 'label', 'checked', 'name'];
var state$4 = {
    check: null
};

var actions$9 = {
    init: function init(checked) {
        if (state$4.check == null) state$4.check = checked ? "is-checked" : "";
    },
    getCls: function getCls(cls, props) {
        actions$9.init(props.checked);
        return cls + (" " + state$4.check) + (props.class ? " " + props.class : "");
    },

    handleClk: function handleClk(props) {
        return function (e) {
            actions$9.init(props.checked);
            state$4.check = !state$4.check ? "is-checked" : "";
            props.onChange && props.onChange(e, state$4.check);
            Switch.$update();
            e.stopPropagation();
        };
    }
    /**
     *
     * @param {*} props
     * @param {*} children
     */
};var Switch = function Switch(_ref) {
    var props = _ref.props,
        children = _ref.children;

    return l(
        "label",
        _extends({ "class": actions$9.getCls('mdl-switch mdl-js-switch mdl-js-ripple-effect is-upgraded', props) }, filter(props, ctlProps$8)),
        l("input", { type: "checkbox", "class": "mdl-switch__input", name: props.name, checked: !!state$4.check, onClick: actions$9.handleClk(props) }),
        l("div", { "class": "mdl-switch__track" }),
        l(
            "div",
            { "class": "mdl-switch__thumb" },
            l("span", { "class": "mdl-switch__focus-helper" })
        ),
        l(
            "span",
            { "class": "mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" },
            l("span", { "class": "mdl-ripple is-animating" })
        ),
        l(
            "span",
            { "class": "mdl-switch__label" },
            props.label
        )
    );
};

var css$9 = ".mdl-progress{display:block;position:relative;height:4px;width:500px;max-width:100%}.mdl-progress>.bar{display:block;position:absolute;top:0;bottom:0;width:0;-webkit-transition:width .2s cubic-bezier(.4,0,.2,1);transition:width .2s cubic-bezier(.4,0,.2,1)}.mdl-progress>.progressbar{background-color:#3f51b5;z-index:1;left:0}.mdl-progress>.bufferbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.7)),to(hsla(0,0%,100%,.7))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);z-index:0;left:0}.mdl-progress>.auxbar{right:0}@supports (-webkit-appearance:none){.mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.7)),to(hsla(0,0%,100%,.7))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);-webkit-mask:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");mask:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\")}}.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.9)),to(hsla(0,0%,100%,.9))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:linear-gradient(90deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),linear-gradient(90deg,#3f51b5,#3f51b5)}.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1{background-color:#3f51b5;-webkit-animation-name:a;animation-name:a;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3{background-image:none;background-color:#3f51b5;-webkit-animation-name:b;animation-name:b;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes a{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@keyframes a{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@-webkit-keyframes b{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}@keyframes b{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}";
styleInject(css$9);

var ctlProps$9 = ['class', 'indeterminate', 'pend'];

var actions$10 = {
    getCls: function getCls(props) {
        return "mdl-progress mdl-js-progress is-upgraded" + (props['indeterminate'] ? ' mdl-progress__indeterminate' : "") + (props['class'] ? ' ' + props['class'] : "");
    }
    /**
     *
     * @param {*} data
     * @param {*} noBack
     */
};var Progress = function Progress(_ref) {
    var _ref$props = _ref.props,
        props = _ref$props === undefined ? {} : _ref$props,
        children = _ref.children;

    props = props || {};
    return l(
        'div',
        _extends({ 'class': actions$10.getCls(props) }, filter(props, ctlProps$9)),
        l('div', { 'class': 'progressbar bar bar1', style: "width:" + (props.percent || 10) + "%;" }),
        l('div', { 'class': 'bufferbar bar bar2', style: "width: " + (100 - (props.pend || 0)) + "%;" }),
        l('div', { 'class': 'auxbar bar bar3', style: "width: " + (props.pend || 0) + "%;" })
    );
};

var css$10 = ".mdl-tooltip{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:top center;transform-origin:top center;z-index:1;background:rgba(97,97,97,.9);border-radius:2px;color:#fff;display:inline-block;font-size:10px;font-weight:500;line-height:14px;max-width:170px;position:fixed;top:-500px;left:-500px;padding:8px;text-align:center}.mdl-tooltip.is-active{-webkit-animation:a .2s cubic-bezier(0,0,.2,1) forwards;animation:a .2s cubic-bezier(0,0,.2,1) forwards}.mdl-tooltip--large{line-height:14px;font-size:14px;padding:16px}@-webkit-keyframes a{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(.99);transform:scale(.99)}to{-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}}@keyframes a{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}50%{-webkit-transform:scale(.99);transform:scale(.99)}to{-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}}";
styleInject(css$10);

var ctlProps$10 = ['bottom', 'left', 'top', 'left', 'for', 'class'];
var state$5 = {
    target: "",
    ele: "",
    IS_ACTIVE: "is-active"
};

var actions$11 = {
    getCls: function getCls(props) {
        return "mdl-tooltip" + getCtlCls(props, ctlProps$10.slice(0, 4), 'mdl-tooltip') + (props.class ? ' ' + props.class : "");
    },
    onShow: function onShow(props) {
        return function (dom) {
            document.addEventListener("DOMContentLoaded", function () {
                var selector = props.for;
                if (selector && (selector[0] == '.' || selector[0] == '#')) {
                    state$5.target = document.querySelector(selector);
                } else if (selector) {
                    state$5.target = document.querySelector("#" + selector);
                }
                if (state$5.target) {
                    state$5.target.addEventListener('mouseenter', actions$11.handleMouseEnter(props, dom), false);
                    state$5.target.addEventListener('touchend', actions$11.handleMouseEnter(props, dom), false);
                    state$5.target.addEventListener('mouseleave', actions$11.handleMouseLeave(props, dom), false);
                    window.addEventListener('scroll', actions$11.handleMouseLeave(props, dom), true);
                    window.addEventListener('touchstart', actions$11.handleMouseLeave(props, dom));
                }
            });
        };
    },
    handleMouseEnter: function handleMouseEnter(elprops, dom) {
        return function (event) {
            var props = event.target.getBoundingClientRect();
            var left = props.left + props.width / 2;
            var top = props.top + props.height / 2;
            var marginLeft = -1 * (dom.offsetWidth / 2);
            var marginTop = -1 * (dom.offsetHeight / 2);

            if (elprops['left'] || elprops['right']) {
                left = props.width / 2;
                if (top + marginTop < 0) {
                    dom.style.top = '0';
                    dom.style.marginTop = '0';
                } else {
                    dom.style.top = top + 'px';
                    dom.style.marginTop = marginTop + 'px';
                }
            } else {
                if (left + marginLeft < 0) {
                    dom.style.left = '0';
                    dom.style.marginLeft = '0';
                } else {
                    dom.style.left = left + 'px';
                    dom.style.marginLeft = marginLeft + 'px';
                }
            }

            if (elprops['top']) {
                dom.style.top = props.top - dom.offsetHeight - 10 + 'px';
            } else if (elprops['right']) {
                dom.style.left = props.left + props.width + 10 + 'px';
            } else if (elprops['left']) {
                dom.style.left = props.left - dom.offsetWidth - 10 + 'px';
            } else {
                dom.style.top = props.top + props.height + 10 + 'px';
            }

            dom.classList.add(state$5.IS_ACTIVE);
        };
    },
    handleMouseLeave: function handleMouseLeave(elprops, dom) {
        return function (event) {
            dom.classList.remove(state$5.IS_ACTIVE);
        };
    }
    /**
     *
     * @param {*} props
     * @param {*} children
     */
};var Tooltip = function Tooltip(_ref) {
    var props = _ref.props,
        children = _ref.children;
    return l(
        'span',
        _extends({ 'class': actions$11.getCls(props), onShow: actions$11.onShow(props) }, filter(props, ctlProps$10)),
        children
    );
};

var css$11 = ".mdl-textfield{position:relative;font-size:16px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:300px;max-width:100%;margin:0;padding:20px 0}.mdl-textfield .mdl-button{position:absolute;bottom:20px}.mdl-textfield--align-right{text-align:right}.mdl-textfield--full-width{width:100%}.mdl-textfield--expandable{min-width:32px;width:auto;min-height:32px}.mdl-textfield--expandable .mdl-button--icon{top:16px}.mdl-textfield__input{border:none;border-bottom:1px solid rgba(0,0,0,.12);display:block;font-size:16px;font-family:Helvetica,Arial,sans-serif;margin:0;padding:4px 0;width:100%;background:none;text-align:left;color:inherit}.mdl-textfield__input[type=number]{-moz-appearance:textfield}.mdl-textfield__input[type=number]::-webkit-inner-spin-button,.mdl-textfield__input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.mdl-textfield.is-focused .mdl-textfield__input{outline:none}.mdl-textfield.is-invalid .mdl-textfield__input{border-color:#d50000;-webkit-box-shadow:none;box-shadow:none}.mdl-textfield.is-disabled .mdl-textfield__input,fieldset[disabled] .mdl-textfield .mdl-textfield__input{background-color:transparent;border-bottom:1px dotted rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-textfield textarea.mdl-textfield__input{display:block}.mdl-textfield__label{bottom:0;color:rgba(0,0,0,.26);font-size:16px;left:0;right:0;pointer-events:none;position:absolute;display:block;top:24px;width:100%;overflow:hidden;white-space:nowrap;text-align:left}.mdl-textfield.has-placeholder .mdl-textfield__label,.mdl-textfield.is-dirty .mdl-textfield__label{visibility:hidden}.mdl-textfield--floating-label .mdl-textfield__label{-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label{-webkit-transition:none;transition:none}.mdl-textfield.is-disabled.is-disabled .mdl-textfield__label,fieldset[disabled] .mdl-textfield .mdl-textfield__label{color:rgba(0,0,0,.26)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#3f51b5;font-size:12px;top:4px;visibility:visible}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label{top:-16px}.mdl-textfield--floating-label.is-invalid .mdl-textfield__label{color:#d50000;font-size:12px}.mdl-textfield__label:after{background-color:#3f51b5;bottom:20px;content:\"\";height:2px;left:45%;position:absolute;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;width:10px}.mdl-textfield.is-focused .mdl-textfield__label:after{left:0;visibility:visible;width:100%}.mdl-textfield.is-invalid .mdl-textfield__label:after{background-color:#d50000}.mdl-textfield__error{color:#d50000;position:absolute;font-size:12px;margin-top:3px;visibility:hidden;display:block}.mdl-textfield.is-invalid .mdl-textfield__error{visibility:visible}.mdl-textfield__expandable-holder{position:relative;margin-left:32px;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-block;max-width:.1px}.mdl-textfield.is-dirty .mdl-textfield__expandable-holder,.mdl-textfield.is-focused .mdl-textfield__expandable-holder{max-width:600px}.mdl-textfield__expandable-holder .mdl-textfield__label:after{bottom:0}";
styleInject(css$11);

var ctlProps$11 = ['expandable', 'floating-label', 'class', 'label', 'pattern', 'errorTips', 'textarea', 'rows', 'maxrows'];

var act = {
    getCls: function getCls(props) {

        return props.class ? '' + props.class : "";
    },
    onShow: function onShow(props, children) {
        return function (dom) {
            var state = {
                focusCls: "", //is-focused
                validCls: "", //is-invalid
                dirtyCls: "" //is-dirty
            };
            var actions = {
                getCls: function getCls(props, state) {

                    return "mdl-textfield mdl-js-textfield is-upgraded" + (state.focusCls || "") + (state.validCls || "") + (state.dirtyCls || "") + getCtlCls(props, ctlProps$11.slice(0, 2), 'mdl-textfield') + (props.class ? ' ' + props.class : "");
                },

                getType: function getType(props, state) {
                    if (props['textarea']) {
                        return l('textarea', { onInput: actions.handleInput(state), onFocus: actions.handleFocus(state), onBlur: actions.handleBlur(state), 'class': 'mdl-textfield__input', type: 'text', rows: props.rows || 3, maxrows: props.maxrows || 3 });
                    } else {
                        return l('input', { onClick: actions.handleClick(props, state), onInput: actions.handleInput(state), onFocus: actions.handleFocus(state), onBlur: actions.handleBlur(state), 'class': 'mdl-textfield__input', type: 'text', pattern: props.pattern });
                    }
                },
                handleFocus: function handleFocus(state) {
                    return function (e) {
                        state.focusCls = " is-focused";
                        TextfieldSub.$update();
                    };
                },
                handleBlur: function handleBlur(state) {
                    return function (e) {
                        state.focusCls = "";
                        TextfieldSub.$update();
                    };
                },
                handleClick: function handleClick(state) {
                    return function (e) {
                        props.onClick && props.onClick(e);
                        TextfieldSub.$update();
                    };
                },
                handleInput: function handleInput(state) {
                    return function (e) {
                        if (e.target.validity) {
                            if (e.target.validity.valid) {
                                state.validCls = "";
                            } else {
                                state.validCls = " is-invalid";
                            }
                        }
                        if (e.target.value && e.target.value.length > 0) {
                            state.dirtyCls = " is-dirty";
                        } else {
                            state.dirtyCls = "";
                        }
                        TextfieldSub.$update();
                    };
                },
                getExpand: function getExpand(props, children) {
                    if (props.expandable) {
                        return l(
                            'div',
                            { onClick: actions.handleFocus(state) },
                            children
                        );
                    } else {
                        return "";
                    }
                }
            };
            var TextfieldSub = function TextfieldSub() {
                return l(
                    'div',
                    _extends({ 'class': actions.getCls(props, state) }, filter(props, ctlProps$11)),
                    actions.getExpand(props, children),
                    l(
                        'div',
                        { 'class': props.expandable ? "mdl-textfield__expandable-holder" : "" },
                        l(
                            'label',
                            { 'class': 'mdl-textfield__label' },
                            props.label
                        ),
                        actions.getType(props, state),
                        l(
                            'span',
                            { 'class': 'mdl-textfield__error' },
                            props.errorTips || ""
                        )
                    )
                );
            };
            app(dom, TextfieldSub);
        };
    }
};

var Textfield = function Textfield(_ref) {
    var props = _ref.props,
        children = _ref.children;
    return l('span', { onShow: act.onShow(props, children), 'class': act.getCls(props) });
};

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    } else {
        var k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set$1 (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$2(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get$1(this, unit);
        }
    };
}

function get$1 (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$2 (mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        }
        else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function mod(n, x) {
    return ((n % x) + x) % x;
}

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get$1(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour they want. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return globalLocale;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = require;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {}
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
        else {
            if ((typeof console !==  'undefined') && console.warn) {
                //warn user if arguments are passed but the locale could not be set
                console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
            }
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var locale, parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                locale = loadLocale(config.parentLocale);
                if (locale != null) {
                    parentConfig = locale._config;
                } else {
                    if (!localeFamilies[config.parentLocale]) {
                        localeFamilies[config.parentLocale] = [];
                    }
                    localeFamilies[config.parentLocale].push({
                        name: name,
                        config: config
                    });
                    return null;
                }
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, tmpLocale, parentConfig = baseConfig;
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// Pick the first defined of two or three arguments.
function defaults$1(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults$1(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults$1(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults$1(w.W, 1);
        weekday = defaults$1(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults$1(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults$1(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l$$1,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l$$1 = isoDates.length; i < l$$1; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l$$1 = isoTimes.length; i < l$$1; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100, h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        setMonth(mom, get$1(mom, 'Month') + months * isAdding);
    }
    if (days) {
        set$2(mom, 'Date', get$1(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
        case 'year': output = monthDiff(this, that) / 12; break;
        case 'month': output = monthDiff(this, that); break;
        case 'quarter': output = monthDiff(this, that) / 3; break;
        case 'second': output = (this - that) / 1e3; break; // 1000
        case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
        case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
        case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
        case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default: output = this - that;
    }

    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
    }
    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray$1 () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIORITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray$1;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;
proto.quarter = proto.quarters = getSetQuarter;
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;
proto.hour = proto.hours = getSetHour;
proto.minute = proto.minutes = getSetMinute;
proto.second = proto.seconds = getSetSecond;
proto.millisecond = proto.milliseconds = getSetMillisecond;
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set$1;

proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$2 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$2(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$2(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$2(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$2(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports

hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function clone$1 () {
    return createDuration(this);
}

function get$3 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function sign(x) {
    return ((x > 0) - (x < 0)) || +x;
}

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return totalSign + 'P' +
        (Y ? ymSign + Y + 'Y' : '') +
        (M ? ymSign + M + 'M' : '') +
        (D ? daysSign + D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? hmsSign + h + 'H' : '') +
        (m ? hmsSign + m + 'M' : '') +
        (s ? hmsSign + s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.clone          = clone$1;
proto$2.get            = get$3;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports

//! moment.js

hooks.version = '2.22.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

// currently HTML5 input type only supports 24-hour formats
hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',                             // <input type="date" />
    TIME: 'HH:mm',                                  // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
    WEEK: 'YYYY-[W]WW',                             // <input type="week" />
    MONTH: 'YYYY-MM'                                // <input type="month" />
};

var popupTemplate = (function () {
  return "\n<div class=\"c-datepicker\">\n  <a class=\"c-datepicker__toggle c-datepicker__toggle--right c-datepicker--show-time js-show-clock\" title=\"show time picker\">\n  </a>\n\n  <a class=\"c-datepicker__toggle c-datepicker__toggle--left c-datepicker--show-calendar is-selected js-show-calendar\" title=\"show date picker\">\n  </a>\n\n  <div class=\"c-datepicker__header\">\n    <div class=\"c-datepicker__header-day\">\n      <span class=\"js-day\">Monday</span>\n    </div>\n    <div class=\"c-datepicker__header-date\">\n      <span class=\"c-datepicker__header-date__month js-date-month\"></span>\n      <span class=\"c-datepicker__header-date__day js-date-day\"></span>\n      <span class=\"c-datepicker__header-date__time js-date-time\">\n        <span class=\"c-datepicker__header-date__hours js-date-hours active\">09</span>:<span class=\"c-datepicker__header-date__minutes js-date-minutes\">00</span>\n      </span>\n    </div>\n  </div>\n\n  <div class=\"c-datepicker__calendar\"></div>\n  <div class=\"c-datepicker__clock\">\n    <div class=\"c-datepicker__clock__am-pm-toggle\">\n      <label class=\"c-datepicker__toggle--checked\">\n        <input checked=\"checked\" class=\"c-datepicker__toggle c-datepicker__toggle--right c-datepicker__clock--am\" type=\"radio\" name=\"time-date-toggle\" value=\"AM\" />\n        AM\n      </label>\n\n      <label>\n        <input class=\"c-datepicker__toggle c-datepicker__toggle--right c-datepicker__clock--pm\" type=\"radio\" name=\"time-date-toggle\" value=\"PM\" />\n        PM\n      </label>\n    </div>\n    <div class=\"c-datepicker__mask\"></div>\n    <div class=\"c-datepicker__clock__hours js-clock-hours active\">\n      <div class=\"c-datepicker__clock__num\" data-number=\"3\">3</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"4\">4</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"5\">5</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"6\">6</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"7\">7</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"8\">8</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"9\">9</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"10\">10</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"11\">11</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"0\">12</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"1\">1</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"2\">2</div>\n      <div class=\"c-datepicker__clock-hands\">\n        <div class=\"c-datepicker__hour-hand\"></div>\n      </div>\n    </div>\n    <div class=\"c-datepicker__clock__minutes js-clock-minutes\">\n      <div class=\"c-datepicker__clock__num\" data-number=\"15\">15</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"20\">20</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"25\">25</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"30\">30</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"35\">35</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"40\">40</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"45\">45</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"50\">50</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"55\">55</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"0\">0</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"5\">5</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"10\">10</div>\n      <div class=\"c-datepicker__clock-hands\">\n        <div class=\"c-datepicker__hour-hand\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-btns\">\n    <a class=\"c-btn c-btn--flat js-cancel\">Cancel</a>\n    <a class=\"c-btn c-btn--flat js-ok\">OK</a>\n  </div>\n</div>\n";
});

var scrimTemplate = (function (_ref) {
  var styles = _ref.styles;
  return "\n<div class=\"" + styles.scrim + "\"></div>\n";
});

//
// basic event triggering and listening
//
var Events = function () {
  function Events() {
    classCallCheck(this, Events);

    this._events = {
      '*': []
    };
  }

  createClass(Events, [{
    key: 'trigger',
    value: function trigger(eventName, evtData) {
      var _this = this;

      eventName.split(' ').forEach(function (evtName) {
        // trigger a global event event
        _this._events['*'].forEach(function (evt) {
          return evt.fn.call(evt.scope, evtName, evtData);
        });
        // if there are any listeners to this event
        // then fire their handlers
        if (_this._events[evtName]) {
          _this._events[evtName].forEach(function (evt) {
            evt.fn.call(evt.scope, evtData);
          });
        }
      });
      return this;
    }
  }, {
    key: 'on',
    value: function on(eventName, fn, scope) {
      if (!this._events[eventName]) this._events[eventName] = [];
      this._events[eventName].push({
        eventName: eventName,
        fn: fn,
        scope: scope || this
      });
      return this;
    }
  }, {
    key: 'off',
    value: function off(eventName, fn) {
      if (!this._events[eventName]) return this;
      if (!fn) {
        this._events[eventName] = [];
      }
      this._events[eventName] = this._events[eventName].filter(function (evt) {
        return evt.fn !== fn;
      });
      return this;
    }
  }, {
    key: 'once',
    value: function once(eventName, fn, scope) {
      var _this2 = this;

      var func = function func() {
        fn.call(scope, eventName, fn, scope);
        _this2.off(eventName, func);
      };
      return this.on(eventName, func, scope);
    }
  }]);
  return Events;
}();

var css$12 = ".c-scrim{position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.541176);opacity:0;-webkit-transition:opacity .2s ease;transition:opacity .2s ease;will-change:opacity}.c-scrim--shown{opacity:1}.c-datepicker{min-height:610px;position:fixed;left:50%;top:45%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#fff;border:0;width:300px;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-box-shadow:0 14px 45px rgba(0,0,0,.25),0 10px 18px rgba(0,0,0,.22);box-shadow:0 14px 45px rgba(0,0,0,.25),0 10px 18px rgba(0,0,0,.22);border-radius:2px;opacity:0;will-change:opacity;-webkit-transition:opacity .2s ease-in-out,top .2s ease-in-out;transition:opacity .2s ease-in-out,top .2s ease-in-out}.c-datepicker--open{opacity:1;top:50%}.c-datepicker__header{position:relative}.c-datepicker__header-day{height:32px;background:#0097a7;color:#fff;line-height:32px;font-size:12px;font-weight:200;letter-spacing:.3px}.c-datepicker__header:after{content:\"\";display:table;clear:both}.c-datepicker__header-date{background:#00bcd4;height:150px;padding:16px 0}.rd-month-label{height:56px;line-height:56px;font-size:14px;font-weight:800}.c-datepicker__back,.c-datepicker__next,.c-datepicker__toggle{position:absolute;border:0;background:#fff;font-family:Material Icons;text-rendering:optimizeLegibility;-webkit-font-feature-settings:\"liga\" 1;font-feature-settings:\"liga\" 1;font-style:normal;text-transform:none;line-height:1;font-size:24px;width:56px;height:56px;display:inline-block;overflow:hidden;-webkit-font-smoothing:antialiased;cursor:pointer}.c-datepicker__back:focus,.c-datepicker__next:focus,.c-datepicker__toggle:focus{outline:0}.c-datepicker__back{left:0}.c-datepicker__next{right:0}.c-datepicker__back:before{content:\"chevron_left\"}.c-datepicker__next:after{content:\"chevron_right\"}.c-datepicker--show-time:after{content:\"access_time\";color:#fff;visibility:visible}.c-datepicker--show-calendar:after{content:\"grid_on\";color:#fff;visibility:visible}.c-datepicker__header-date span{display:block;color:#fff;margin:0;-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out}.c-datepicker__header-date__month{cursor:pointer;font-size:24px;opacity:.6}.c-datepicker__header-date__day{cursor:pointer;font-size:64px;opacity:.6}.c-datepicker__header-date__time{font-size:25px;opacity:.6}.c-datepicker__header-date__time>span{display:inline-block}.c-datepicker__header-date__hours,.c-datepicker__header-date__minutes{cursor:pointer}.c-datepicker--show-time.is-selected~.c-datepicker__header .c-datepicker__header-date__time{opacity:1}.c-datepicker--show-time.is-selected~.c-datepicker__header .c-datepicker__header-date__time .c-datepicker__header-date__hours,.c-datepicker--show-time.is-selected~.c-datepicker__header .c-datepicker__header-date__time .c-datepicker__header-date__minutes{opacity:.6}.c-datepicker--show-calendar.is-selected~.c-datepicker__header .c-datepicker__header-date__day,.c-datepicker--show-calendar.is-selected~.c-datepicker__header .c-datepicker__header-date__month,.c-datepicker--show-time.is-selected~.c-datepicker__header .c-datepicker__header-date__time .c-datepicker__header-date__hours.active,.c-datepicker--show-time.is-selected~.c-datepicker__header .c-datepicker__header-date__time .c-datepicker__header-date__minutes.active{opacity:1}.modal-btns{padding:20px;position:absolute;bottom:0;right:0}.c-datepicker__day-body{font-size:12px;color:rgba(0,0,0,.8);width:36px;height:36px;cursor:pointer;position:relative}.c-datepicker__day--selected:after{content:\"\";position:absolute;left:50%;top:50%;width:35px;height:35px;border-radius:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:rgba(0,0,0,.05)}.c-datepicker__day-head{color:rgba(0,0,0,.54);font-size:12px;height:36px}.c-datepicker__day-head,c-datepicker__day-body{-webkit-tap-highlight-color:rgba(0,0,0,0)}.modal-btns{float:right}.c-btn{display:inline-block;min-width:56px;cursor:pointer}.rd-day-next-month,.rd-day-prev-month{opacity:.1;pointer-events:none}.c-datepicker__calendar{height:300px}.c-datepicker__date{position:absolute;left:0;right:0}.c-datepicker__days{margin:10px 20px}.c-datepicker__header-toggle{position:absolute;top:50%;color:#fff;cursor:pointer}.c-datepicker__header-toggle i{font-size:26px}.c-datepicker__header-toggle--left{left:20px}.c-datepicker__header-toggle--right{right:20px}.c-datepicker__header-toggle--inactive{opacity:.2}.c-datepicker__toggle{top:170px;width:36px;height:30px;visibility:hidden;opacity:.5;z-index:1;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.c-datepicker__toggle--right{right:10px}.c-datepicker__toggle--left{left:10px}.c-datepicker__toggle.is-selected{opacity:1}.c-datepicker--show-calendar.is-selected~.c-datepicker__clock,.c-datepicker--show-time.is-selected~.c-datepicker__calendar{display:none}.c-datepicker__clock{position:relative;width:200px;height:200px;padding:0;border-radius:50%;list-style:none;font-size:14px;line-height:50px;padding:160px 0 20px;margin:0 auto}.c-datepicker__clock .c-datepicker__clock__num{display:block;position:absolute;top:50%;left:50%;width:50px;height:50px;margin:-25px;z-index:98}.c-datepicker__clock .c-datepicker__clock__num:first-of-type{-webkit-transform:rotate(0deg) translate(100px) rotate(0deg);transform:rotate(0deg) translate(100px) rotate(0deg)}.c-datepicker__clock .c-datepicker__clock__num:first-of-type.c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(270deg);transform:translate(-50%,-50%) rotate(270deg)}.c-datepicker__clock .c-datepicker__clock__num:first-of-type.c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:first-of-type:hover ~ .c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(270deg);transform:translate(-50%,-50%) rotate(270deg)}.c-datepicker__clock .c-datepicker__clock__num:first-of-type:hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(2){-webkit-transform:rotate(30deg) translate(100px) rotate(-30deg);transform:rotate(30deg) translate(100px) rotate(-30deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(2).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(300deg);transform:translate(-50%,-50%) rotate(300deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(2).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(2):hover~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(300deg);transform:translate(-50%,-50%) rotate(300deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(2):hover~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(3){-webkit-transform:rotate(60deg) translate(100px) rotate(-60deg);transform:rotate(60deg) translate(100px) rotate(-60deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(3).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(330deg);transform:translate(-50%,-50%) rotate(330deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(3).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(3):hover~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(330deg);transform:translate(-50%,-50%) rotate(330deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(3):hover~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(4){-webkit-transform:rotate(90deg) translate(100px) rotate(-90deg);transform:rotate(90deg) translate(100px) rotate(-90deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(4).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(1turn);transform:translate(-50%,-50%) rotate(1turn)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(4).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(4):hover~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(1turn);transform:translate(-50%,-50%) rotate(1turn)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(4):hover~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(5){-webkit-transform:rotate(120deg) translate(100px) rotate(-120deg);transform:rotate(120deg) translate(100px) rotate(-120deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(5).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(390deg);transform:translate(-50%,-50%) rotate(390deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(5).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(5):hover~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(390deg);transform:translate(-50%,-50%) rotate(390deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(5):hover~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(6){-webkit-transform:rotate(150deg) translate(100px) rotate(-150deg);transform:rotate(150deg) translate(100px) rotate(-150deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(6).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(420deg);transform:translate(-50%,-50%) rotate(420deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(6).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(6):hover~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(420deg);transform:translate(-50%,-50%) rotate(420deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(6):hover~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(7){-webkit-transform:rotate(180deg) translate(100px) rotate(-180deg);transform:rotate(180deg) translate(100px) rotate(-180deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(7).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(450deg);transform:translate(-50%,-50%) rotate(450deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(7).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(7):hover~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(450deg);transform:translate(-50%,-50%) rotate(450deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(7):hover~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(8){-webkit-transform:rotate(210deg) translate(100px) rotate(-210deg);transform:rotate(210deg) translate(100px) rotate(-210deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(8).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(480deg);transform:translate(-50%,-50%) rotate(480deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(8).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(8):hover~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(480deg);transform:translate(-50%,-50%) rotate(480deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(8):hover~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(9){-webkit-transform:rotate(240deg) translate(100px) rotate(-240deg);transform:rotate(240deg) translate(100px) rotate(-240deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(9).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(510deg);transform:translate(-50%,-50%) rotate(510deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(9).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(9):hover~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(510deg);transform:translate(-50%,-50%) rotate(510deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(9):hover~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(10){-webkit-transform:rotate(270deg) translate(100px) rotate(-270deg);transform:rotate(270deg) translate(100px) rotate(-270deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(10).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(540deg);transform:translate(-50%,-50%) rotate(540deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(10).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(10):hover~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(540deg);transform:translate(-50%,-50%) rotate(540deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(10):hover~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(11){-webkit-transform:rotate(300deg) translate(100px) rotate(-300deg);transform:rotate(300deg) translate(100px) rotate(-300deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(11).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(570deg);transform:translate(-50%,-50%) rotate(570deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(11).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(11):hover~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(570deg);transform:translate(-50%,-50%) rotate(570deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(11):hover~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(12){-webkit-transform:rotate(330deg) translate(100px) rotate(-330deg);transform:rotate(330deg) translate(100px) rotate(-330deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(12).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(600deg);transform:translate(-50%,-50%) rotate(600deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(12).c-datepicker__clock__num--active:not(.hide-hand)~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(12):hover~.c-datepicker__clock-hands{-webkit-transform:translate(-50%,-50%) rotate(600deg);transform:translate(-50%,-50%) rotate(600deg)}.c-datepicker__clock .c-datepicker__clock__num:nth-of-type(12):hover~.c-datepicker__clock-hands .c-datepicker__hour-hand{opacity:1;background:#00bcd4}.c-datepicker__clock:before{content:\"\";position:absolute;top:70px;left:-20px;width:240px;height:240px;background:rgba(0,0,0,.05);border-radius:50%}.c-datepicker__clock__am-pm-toggle label,.c-datepicker__clock__num,.c-datepicker__day-body,.u-hover-ball-effect{position:relative;cursor:pointer}.c-datepicker__clock__am-pm-toggle label:before,.c-datepicker__clock__num:before,.c-datepicker__day-body:before,.u-hover-ball-effect:before{content:\"\";position:absolute;left:50%;top:50%;width:0;height:0%;border-radius:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:width .1s ease-in-out,height .1s ease-in-out;transition:width .1s ease-in-out,height .1s ease-in-out}.c-datepicker__clock__am-pm-toggle label:hover,.c-datepicker__clock__num:hover,.c-datepicker__day-body:hover,.u-hover-ball-effect:hover{color:#fff}.c-datepicker__clock__am-pm-toggle label:hover:before,.c-datepicker__clock__num:hover:before,.c-datepicker__day-body:hover:before,.u-hover-ball-effect:hover:before{background:#00bcd4;width:35px;height:35px;z-index:-1}.c-datepicker__clock__num--active:not(.hide-hand),.c-datepicker__day-body--active:not(.hide-hand){color:#fff}.c-datepicker__clock__num--active:not(.hide-hand):before,.c-datepicker__day-body--active:not(.hide-hand):before{background:#00bcd4;width:35px;height:35px;z-index:-1}.c-datepicker__clock-hands{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg);width:10px;height:10px;border-radius:50%;background:#0097a7}.c-datepicker__hour-hand{position:absolute;opacity:0;height:78px;width:2px;background:#00bcd4;left:4px;top:10px}.c-datepicker__clock__minutes{height:200px;margin:-69px 0 0;width:200px;display:none}.c-datepicker__clock__minutes.active{display:block}.c-datepicker__clock__hours{height:200px;margin:-69px 0 0;width:200px;display:none}.c-datepicker__clock__hours.active{display:block}.c-datepicker__mask{width:127px;height:132px;position:absolute;top:122px;left:37px;z-index:99}.c-datepicker__mask:after{content:\" \";width:156px;height:70px;display:block;position:absolute;top:32px;left:0;margin-left:-13px}.c-datepicker__mask:before{content:\" \";width:75px;height:158px;display:block;position:absolute;top:6px;left:28px;margin-top:-18px}.c-datepicker__clock--show-minutes .c-datepicker__clock__minutes{visibility:visible}.c-datepicker__clock--show-hours .c-datepicker__clock__minutes,.c-datepicker__clock--show-minutes .c-datepicker__clock__hours{visibility:hidden}.c-datepicker__clock--show-hours .c-datepicker__clock__hours{visibility:visible}.c-datepicker__clock__am-pm-toggle{position:absolute;top:0;left:10px;right:10px;height:40px;padding:20px;line-height:40px}.c-datepicker__clock__am-pm-toggle label{width:40px;position:absolute}.c-datepicker__clock__am-pm-toggle label:first-child{left:0}.c-datepicker__clock__am-pm-toggle label:nth-child(2){right:0}.c-datepicker__clock__am-pm-toggle label.c-datepicker__toggle--checked:after{content:\"\";position:absolute;left:50%;top:50%;width:0;height:0%;border-radius:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:36px;height:36px;z-index:-1;background:rgba(0,0,0,.05)}";
styleInject(css$12);

var ESC_KEY = 27;

var prefix = 'c-datepicker';
var defaults$2 = function defaults$$1() {
  return {
    default: hooks().startOf('hour'),
    // allow the user to override all the classes
    // used for styling the calendar
    styles: {
      scrim: 'c-scrim',
      back: prefix + '__back',
      container: prefix + '__calendar',
      date: prefix + '__date',
      dayBody: prefix + '__days-body',
      dayBodyElem: prefix + '__day-body',
      dayConcealed: prefix + '__day--concealed',
      dayDisabled: prefix + '__day--disabled',
      dayHead: prefix + '__days-head',
      dayHeadElem: prefix + '__day-head',
      dayRow: prefix + '__days-row',
      dayTable: prefix + '__days',
      month: prefix + '__month',
      next: prefix + '__next',
      positioned: prefix + '--fixed',
      selectedDay: prefix + '__day--selected',
      selectedTime: prefix + '__time--selected',
      time: prefix + '__time',
      timeList: prefix + '__time-list',
      timeOption: prefix + '__time-option',
      clockNum: prefix + '__clock__num'
    },
    // format to display in the input, or set on the element
    format: 'DD/MM/YY',
    // the container to append the picker
    container: document.body,
    // allow any dates
    dateValidator: undefined
  };
};

var DateTimePicker = function (_Events) {
  inherits(DateTimePicker, _Events);

  function DateTimePicker() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, DateTimePicker);

    var _this = possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this));

    var styles = Object.assign(defaults$2().styles, options.styles);
    _this.options = Object.assign(defaults$2(), options);
    _this.options.styles = styles;

    // listen to any event
    _this.on('*', function (evtName, evtData) {
      if (_this.options.el) {
        // if there is a custom element, fire a real dom
        // event on that now
        var event = new CustomEvent(evtName, _this, evtData);
        _this.options.el.dispatchEvent(event);
      }
    });
    return _this;
  }

  // intialize the rom calendar with our default date and
  // style options


  createClass(DateTimePicker, [{
    key: 'initializeRome',
    value: function initializeRome(container, validator) {
      var onData = this.onChangeDate.bind(this);

      return rome(container, {
        styles: this.options.styles,
        time: false,
        dateValidator: validator,
        initialValue: this.value
      }).on('data', onData);
    }

    // called to open the picker

  }, {
    key: 'open',
    value: function open() {
      var scrimEl = scrimTemplate(this.options);
      _appendTemplate(document.body, scrimEl);
      _appendTemplate(this.options.container, popupTemplate());
      this.pickerEl = this.options.container.querySelector('.' + prefix);
      this.scrimEl = document.body.querySelector('.' + this.options.styles.scrim);
      this.amToggleEl = this.$('.c-datepicker__clock--am');
      this.pmToggleEl = this.$('.c-datepicker__clock--pm');

      if (!this.value) {
        // TODO hack
        // set/setDate/setTime need refactoring to have single concerns
        // (set: set the value; setDate/setTime rename to renderDate/renderTime
        //  and deal with updating the view only).
        // For now this allows us to set the default time using the same quantize
        // rules as setting the date explicitly. Setting this.value meets setTime|Date's
        // expectation that we have a value, and `0` guarantees that we will detect
        this.value = hooks(0);
        this.setDate(this.options.default);
        this.setTime(this.options.default);
      } else {
        this.setDate(this.value);
        this.setTime(this.value);
      }

      // this.initializeRome(this.$(`.${this.options.styles.container}`), this.options.dateValidator);
      this._listenForCloseEvents();

      this._show();
    }
  }, {
    key: 'close',
    value: function close() {
      this._stopListeningForCloseEvents();
      this._hide();
    }
  }, {
    key: '_hide',
    value: function _hide() {
      var _this2 = this;

      this.pickerEl.classList.remove('open');
      window.setTimeout(function () {
        _this2.options.container.removeChild(_this2.pickerEl);
        document.body.removeChild(_this2.scrimEl);
        _this2.trigger('close');
      }, 200);
      return this;
    }
  }, {
    key: '_show',
    value: function _show() {
      var _this3 = this;

      this.delegateEvents();
      // add the animation classes on the next animation tick
      // so that they actually work
      window.requestAnimationFrame(function () {
        _this3.scrimEl.classList.add(_this3.options.styles.scrim + '--shown');
        _this3.pickerEl.classList.add(prefix + '--open');
        _this3.trigger('open');
      });
      return this;
    }
  }, {
    key: '_listenForCloseEvents',
    value: function _listenForCloseEvents() {
      var _this4 = this;

      this._onWindowKeypress = function (e) {
        if (e.which === ESC_KEY) {
          _this4.close();
        }
      };

      window.addEventListener('keydown', this._onWindowKeypress);
    }
  }, {
    key: '_stopListeningForCloseEvents',
    value: function _stopListeningForCloseEvents() {
      window.removeEventListener('keydown', this._onWindowKeypress);
      this._closeHandler = null;
    }
  }, {
    key: 'delegateEvents',
    value: function delegateEvents() {
      var _this5 = this;

      this.$('.js-cancel').addEventListener('click', function () {
        return _this5.clickCancel();
      }, false);
      this.$('.js-ok').addEventListener('click', function () {
        return _this5.clickSubmit();
      }, false);

      this.$('.js-date-hours').addEventListener('click', function (e) {
        return _this5.showHourClock(e);
      }, false);
      this.$('.js-date-minutes').addEventListener('click', function (e) {
        return _this5.showMinuteClock(e);
      }, false);

      this.$('.js-clock-hours').addEventListener('mouseleave', function (e) {
        return _this5.mouseOutHourClock(e);
      }, false);
      this.$('.js-clock-hours .' + this.options.styles.clockNum).forEach(function (el) {
        el.addEventListener('click', function (e) {
          return _this5.clickClickHour(e).showMinuteClock();
        }, false);
        el.addEventListener('mouseenter', function (e) {
          return _this5.mouseInHourClock(e);
        }, false);
      });

      this.$('.js-clock-minutes').addEventListener('mouseleave', function (e) {
        return _this5.mouseOutMinuteClock(e);
      }, false);
      this.$('.js-clock-minutes .' + this.options.styles.clockNum).forEach(function (el) {
        el.addEventListener('click', function (e) {
          return _this5.clickClockMinute(e);
        }, false);
        el.addEventListener('mouseenter', function (e) {
          return _this5.mouseInMinuteClock(e);
        }, false);
      });

      this.$('.c-datepicker__clock--am').addEventListener('click', function (e) {
        return _this5.clickAm(e);
      }, false);
      this.$('.c-datepicker__clock--pm').addEventListener('click', function (e) {
        return _this5.clickPm(e);
      }, false);

      this.$('.js-show-calendar').addEventListener('click', function (e) {
        return _this5.clickShowCalendar(e);
      }, false);
      this.$('.js-date-day').addEventListener('click', function (e) {
        return _this5.clickShowCalendar(e);
      }, false);
      this.$('.js-date-month').addEventListener('click', function (e) {
        return _this5.clickShowCalendar(e);
      }, false);

      this.$('.js-show-clock').addEventListener('click', function (e) {
        return _this5.clickShowClock(e);
      }, false);

      this.scrimEl.addEventListener('click', function () {
        return _this5.close();
      }, false);

      return this;
    }
  }, {
    key: 'clickSubmit',
    value: function clickSubmit() {
      this.close();
      this.trigger('submit', this.value, this);
      return this;
    }
  }, {
    key: 'clickCancel',
    value: function clickCancel() {
      this.close();
      this.trigger('cancel', this.value, this);
      return this;
    }
  }, {
    key: 'clickClickHour',
    value: function clickClickHour(e) {
      var newValue = hooks(this.value);
      var number = parseInt(e.currentTarget.getAttribute('data-number'), 10);
      if (number === 0 && this.meridiem === 'pm') {
        number = 12;
      } else if (this.meridiem === 'pm') {
        number += 12;
      }

      newValue.hour(number);
      this.set(newValue);
      return this;
    }
  }, {
    key: 'clickClockMinute',
    value: function clickClockMinute(e) {
      var newValue = hooks(this.value);
      var number = parseInt(e.currentTarget.getAttribute('data-number'), 10);

      newValue.minute(number);
      this.set(newValue);
      return this;
    }
  }, {
    key: 'onChangeDate',
    value: function onChangeDate(dateString) {
      var newValue = hooks(this.value);

      var _dateString$split = dateString.split('-'),
          _dateString$split2 = slicedToArray(_dateString$split, 3),
          year = _dateString$split2[0],
          month = _dateString$split2[1],
          date = _dateString$split2[2];

      newValue.set({ year: year, month: month - 1, date: date });

      this.set(newValue);
      return this;
    }
  }, {
    key: 'mouseInHourClock',
    value: function mouseInHourClock() {
      var active = this.$('.js-clock-hours .' + this.options.styles.clockNum + '--active');

      if (active) {
        active.classList.add('hide-hand');
      }
    }
  }, {
    key: 'mouseInMinuteClock',
    value: function mouseInMinuteClock() {
      var active = this.$('.js-clock-minutes .' + this.options.styles.clockNum + '--active');

      if (active) {
        active.classList.add('hide-hand');
      }
    }
  }, {
    key: 'mouseOutHourClock',
    value: function mouseOutHourClock() {
      var hideHand = this.$('.js-clock-hours .' + this.options.styles.clockNum + '--active.hide-hand');

      if (hideHand) {
        hideHand.classList.remove('hide-hand');
      }
    }
  }, {
    key: 'mouseOutMinuteClock',
    value: function mouseOutMinuteClock() {
      var hideHand = this.$('.js-clock-minutes .' + this.options.styles.clockNum + '--active.hide-hand');

      if (hideHand) {
        hideHand.classList.remove('hide-hand');
      }
    }
  }, {
    key: 'clickAm',
    value: function clickAm() {
      var newValue = hooks(this.value);
      if (this.meridiem === 'pm') {
        this.meridiem = 'am';
        newValue.hour(newValue.hour() - 12);
      }
      this.set(newValue);
      return this;
    }
  }, {
    key: 'clickPm',
    value: function clickPm() {
      var newValue = hooks(this.value);
      if (this.meridiem === 'am') {
        this.meridiem = 'pm';
        newValue.hour(newValue.hour() + 12);
      }
      this.set(newValue);
      return this;
    }
  }, {
    key: 'showHourClock',
    value: function showHourClock() {
      this.clickShowClock();
      this.$('.js-clock-hours').classList.add('active');
      this.$('.js-clock-minutes').classList.remove('active');
      this.$('.js-date-hours').classList.add('active');
      this.$('.js-date-minutes').classList.remove('active');
    }
  }, {
    key: 'showMinuteClock',
    value: function showMinuteClock() {
      this.clickShowClock();
      this.$('.js-clock-hours').classList.remove('active');
      this.$('.js-clock-minutes').classList.add('active');
      this.$('.js-date-hours').classList.remove('active');
      this.$('.js-date-minutes').classList.add('active');
    }
  }, {
    key: 'clickShowCalendar',
    value: function clickShowCalendar() {
      this.$('.js-show-calendar').classList.add('is-selected');
      this.$('.js-show-clock').classList.remove('is-selected');
    }
  }, {
    key: 'clickShowClock',
    value: function clickShowClock() {
      this.$('.js-show-clock').classList.add('is-selected');
      this.$('.js-show-calendar').classList.remove('is-selected');
    }
  }, {
    key: 'data',
    value: function data(val) {
      console.warn('MaterialDatetimePicker#data is deprecated and will be removed in a future release. Please use get or set.');
      return val ? this.set(val) : this.value;
    }
  }, {
    key: 'get',
    value: function get$$1() {
      return hooks(this.value);
    }

    // update the picker's date/time value
    // value: moment
    // silent: if true, do not fire any events on change

  }, {
    key: 'set',
    value: function set$$1(value) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$silent = _ref.silent,
          silent = _ref$silent === undefined ? false : _ref$silent;

      var m = hooks(value);

      // maintain a list of change events to fire all at once later
      var evts = [];
      if (m.date() !== this.value.date() || m.month() !== this.value.month() || m.year() !== this.value.year()) {
        this.setDate(m);
        evts.push('change:date');
      }

      if (m.hour() !== this.value.hour() || m.minutes() !== this.value.minutes()) {
        this.setTime(m);
        evts.push('change:time');
      }

      if (this.options.el) {
        // if there is an element to fire events on
        if (this.options.el.tagName === 'INPUT') {
          // and it is an input element then set the value
          this.options.el.value = m.format(this.options.format);
        } else {
          // or any other element set a data-value attribute
          this.options.el.setAttribute('data-value', m.format(this.options.format));
        }
      }
      if (evts.length > 0 && !silent) {
        // fire all the events we've collected
        this.trigger(['change'].concat(evts).join(' '), this.value, this);
      }
    }

    // set the value and header elements to `date`
    // the calendar will be updated automatically
    // by rome when clicked

  }, {
    key: 'setDate',
    value: function setDate(date) {
      var m = hooks(date);
      var month = m.format('MMM');
      var day = m.format('Do');
      var dayOfWeek = m.format('dddd');
      var year = m.format('YYYY');

      this.$('.js-day').innerText = dayOfWeek;
      this.$('.js-date-month').innerText = month + ' ' + year;
      this.$('.js-date-day').innerText = day;
      this.value.year(m.year());
      this.value.month(m.month());
      this.value.date(m.date());
      return this;
    }

    // set the value and header elements to `time`
    // also update the hands of the clock

  }, {
    key: 'setTime',
    value: function setTime(time) {
      var m = hooks(time);
      var minuteAsInt = Math.round(parseInt(m.format('mm'), 10) / 5) * 5;
      m.minutes(minuteAsInt);

      var hour = m.format('HH');
      var minutes = m.format('mm');
      var hourAsInt = parseInt(hour, 10) % 12;

      var oldActiveHours = this.$('.js-clock-hours .' + this.options.styles.clockNum + '--active');
      var oldActiveMinutes = this.$('.js-clock-minutes .' + this.options.styles.clockNum + '--active');

      this.$('.js-date-hours').innerText = hour;
      this.$('.js-date-minutes').innerText = minutes;

      if (oldActiveHours) {
        oldActiveHours.classList.remove(this.options.styles.clockNum + '--active');
      }

      if (oldActiveMinutes) {
        oldActiveMinutes.classList.remove(this.options.styles.clockNum + '--active');
      }

      this.$('.js-clock-hours .' + this.options.styles.clockNum + '[data-number="' + hourAsInt + '"]').classList.add(this.options.styles.clockNum + '--active');
      this.$('.js-clock-minutes .' + this.options.styles.clockNum + '[data-number="' + minuteAsInt + '"]').classList.add(this.options.styles.clockNum + '--active');

      this.value.hours(m.hours());
      this.value.minutes(m.minutes());
      this.meridiem = this.value.format('a');

      if (this.meridiem === 'pm') {
        this.amToggleEl.removeAttribute('checked');
        this.pmToggleEl.setAttribute('checked', 'checked');
        this.amToggleEl.parentElement.classList.remove('c-datepicker__toggle--checked');
        this.pmToggleEl.parentElement.classList.add('c-datepicker__toggle--checked');
      } else {
        this.pmToggleEl.removeAttribute('checked');
        this.amToggleEl.setAttribute('checked', 'checked');
        this.pmToggleEl.parentElement.classList.remove('c-datepicker__toggle--checked');
        this.amToggleEl.parentElement.classList.add('c-datepicker__toggle--checked');
      }
      return this;
    }
  }, {
    key: '$',
    value: function $(selector) {
      var els = this.pickerEl.querySelectorAll(selector);
      return els.length > 1 ? [].concat(toConsumableArray(els)) : els[0];
    }
  }]);
  return DateTimePicker;
}(Events);

function _appendTemplate(parent, template) {
  var tempEl = document.createElement('div');
  tempEl.innerHTML = template.trim();
  parent.appendChild(tempEl.firstChild);
  return this;
}

var picker = new DateTimePicker();

var actions$12 = {
    getCls: function getCls(props) {
        return "mdl-textfield__input" + (props.class ? ' ' + props.class : "");
    },
    handleClick: function handleClick(props) {
        return function (e) {
            picker.open();
            picker.on('submit', function (val) {
                e.target.value = val;
                props.onChange && props.onChange(val);
                console.log('data: ' + val);
            });
        };
    }
    /**
     *
     * @param {*} props
     * @param {*} children
     */
};var DatetimePicker = function DatetimePicker(_ref) {
    var props = _ref.props,
        children = _ref.children;

    return l(
        Textfield,
        _extends({ onClick: actions$12.handleClick(props) }, props),
        children
    );
};

var css$13 = ".mdl-shadow--2dp{-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-shadow--3dp{-webkit-box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.mdl-shadow--4dp{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-shadow--6dp{-webkit-box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)}.mdl-shadow--8dp{-webkit-box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.mdl-shadow--16dp{-webkit-box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.mdl-shadow--24dp{-webkit-box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2);box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)}";
styleInject(css$13);

var css$14 = ".mdl-color-text--red{color:#f44336!important}.mdl-color--red{background-color:#f44336!important}.mdl-color-text--red-50{color:#ffebee!important}.mdl-color--red-50{background-color:#ffebee!important}.mdl-color-text--red-100{color:#ffcdd2!important}.mdl-color--red-100{background-color:#ffcdd2!important}.mdl-color-text--red-200{color:#ef9a9a!important}.mdl-color--red-200{background-color:#ef9a9a!important}.mdl-color-text--red-300{color:#e57373!important}.mdl-color--red-300{background-color:#e57373!important}.mdl-color-text--red-400{color:#ef5350!important}.mdl-color--red-400{background-color:#ef5350!important}.mdl-color-text--red-500{color:#f44336!important}.mdl-color--red-500{background-color:#f44336!important}.mdl-color-text--red-600{color:#e53935!important}.mdl-color--red-600{background-color:#e53935!important}.mdl-color-text--red-700{color:#d32f2f!important}.mdl-color--red-700{background-color:#d32f2f!important}.mdl-color-text--red-800{color:#c62828!important}.mdl-color--red-800{background-color:#c62828!important}.mdl-color-text--red-900{color:#b71c1c!important}.mdl-color--red-900{background-color:#b71c1c!important}.mdl-color-text--red-A100{color:#ff8a80!important}.mdl-color--red-A100{background-color:#ff8a80!important}.mdl-color-text--red-A200{color:#ff5252!important}.mdl-color--red-A200{background-color:#ff5252!important}.mdl-color-text--red-A400{color:#ff1744!important}.mdl-color--red-A400{background-color:#ff1744!important}.mdl-color-text--red-A700{color:#d50000!important}.mdl-color--red-A700{background-color:#d50000!important}.mdl-color-text--pink{color:#e91e63!important}.mdl-color--pink{background-color:#e91e63!important}.mdl-color-text--pink-50{color:#fce4ec!important}.mdl-color--pink-50{background-color:#fce4ec!important}.mdl-color-text--pink-100{color:#f8bbd0!important}.mdl-color--pink-100{background-color:#f8bbd0!important}.mdl-color-text--pink-200{color:#f48fb1!important}.mdl-color--pink-200{background-color:#f48fb1!important}.mdl-color-text--pink-300{color:#f06292!important}.mdl-color--pink-300{background-color:#f06292!important}.mdl-color-text--pink-400{color:#ec407a!important}.mdl-color--pink-400{background-color:#ec407a!important}.mdl-color-text--pink-500{color:#e91e63!important}.mdl-color--pink-500{background-color:#e91e63!important}.mdl-color-text--pink-600{color:#d81b60!important}.mdl-color--pink-600{background-color:#d81b60!important}.mdl-color-text--pink-700{color:#c2185b!important}.mdl-color--pink-700{background-color:#c2185b!important}.mdl-color-text--pink-800{color:#ad1457!important}.mdl-color--pink-800{background-color:#ad1457!important}.mdl-color-text--pink-900{color:#880e4f!important}.mdl-color--pink-900{background-color:#880e4f!important}.mdl-color-text--pink-A100{color:#ff80ab!important}.mdl-color--pink-A100{background-color:#ff80ab!important}.mdl-color-text--pink-A200{color:#ff4081!important}.mdl-color--pink-A200{background-color:#ff4081!important}.mdl-color-text--pink-A400{color:#f50057!important}.mdl-color--pink-A400{background-color:#f50057!important}.mdl-color-text--pink-A700{color:#c51162!important}.mdl-color--pink-A700{background-color:#c51162!important}.mdl-color-text--purple{color:#9c27b0!important}.mdl-color--purple{background-color:#9c27b0!important}.mdl-color-text--purple-50{color:#f3e5f5!important}.mdl-color--purple-50{background-color:#f3e5f5!important}.mdl-color-text--purple-100{color:#e1bee7!important}.mdl-color--purple-100{background-color:#e1bee7!important}.mdl-color-text--purple-200{color:#ce93d8!important}.mdl-color--purple-200{background-color:#ce93d8!important}.mdl-color-text--purple-300{color:#ba68c8!important}.mdl-color--purple-300{background-color:#ba68c8!important}.mdl-color-text--purple-400{color:#ab47bc!important}.mdl-color--purple-400{background-color:#ab47bc!important}.mdl-color-text--purple-500{color:#9c27b0!important}.mdl-color--purple-500{background-color:#9c27b0!important}.mdl-color-text--purple-600{color:#8e24aa!important}.mdl-color--purple-600{background-color:#8e24aa!important}.mdl-color-text--purple-700{color:#7b1fa2!important}.mdl-color--purple-700{background-color:#7b1fa2!important}.mdl-color-text--purple-800{color:#6a1b9a!important}.mdl-color--purple-800{background-color:#6a1b9a!important}.mdl-color-text--purple-900{color:#4a148c!important}.mdl-color--purple-900{background-color:#4a148c!important}.mdl-color-text--purple-A100{color:#ea80fc!important}.mdl-color--purple-A100{background-color:#ea80fc!important}.mdl-color-text--purple-A200{color:#e040fb!important}.mdl-color--purple-A200{background-color:#e040fb!important}.mdl-color-text--purple-A400{color:#d500f9!important}.mdl-color--purple-A400{background-color:#d500f9!important}.mdl-color-text--purple-A700{color:#a0f!important}.mdl-color--purple-A700{background-color:#a0f!important}.mdl-color-text--deep-purple{color:#673ab7!important}.mdl-color--deep-purple{background-color:#673ab7!important}.mdl-color-text--deep-purple-50{color:#ede7f6!important}.mdl-color--deep-purple-50{background-color:#ede7f6!important}.mdl-color-text--deep-purple-100{color:#d1c4e9!important}.mdl-color--deep-purple-100{background-color:#d1c4e9!important}.mdl-color-text--deep-purple-200{color:#b39ddb!important}.mdl-color--deep-purple-200{background-color:#b39ddb!important}.mdl-color-text--deep-purple-300{color:#9575cd!important}.mdl-color--deep-purple-300{background-color:#9575cd!important}.mdl-color-text--deep-purple-400{color:#7e57c2!important}.mdl-color--deep-purple-400{background-color:#7e57c2!important}.mdl-color-text--deep-purple-500{color:#673ab7!important}.mdl-color--deep-purple-500{background-color:#673ab7!important}.mdl-color-text--deep-purple-600{color:#5e35b1!important}.mdl-color--deep-purple-600{background-color:#5e35b1!important}.mdl-color-text--deep-purple-700{color:#512da8!important}.mdl-color--deep-purple-700{background-color:#512da8!important}.mdl-color-text--deep-purple-800{color:#4527a0!important}.mdl-color--deep-purple-800{background-color:#4527a0!important}.mdl-color-text--deep-purple-900{color:#311b92!important}.mdl-color--deep-purple-900{background-color:#311b92!important}.mdl-color-text--deep-purple-A100{color:#b388ff!important}.mdl-color--deep-purple-A100{background-color:#b388ff!important}.mdl-color-text--deep-purple-A200{color:#7c4dff!important}.mdl-color--deep-purple-A200{background-color:#7c4dff!important}.mdl-color-text--deep-purple-A400{color:#651fff!important}.mdl-color--deep-purple-A400{background-color:#651fff!important}.mdl-color-text--deep-purple-A700{color:#6200ea!important}.mdl-color--deep-purple-A700{background-color:#6200ea!important}.mdl-color-text--indigo{color:#3f51b5!important}.mdl-color--indigo{background-color:#3f51b5!important}.mdl-color-text--indigo-50{color:#e8eaf6!important}.mdl-color--indigo-50{background-color:#e8eaf6!important}.mdl-color-text--indigo-100{color:#c5cae9!important}.mdl-color--indigo-100{background-color:#c5cae9!important}.mdl-color-text--indigo-200{color:#9fa8da!important}.mdl-color--indigo-200{background-color:#9fa8da!important}.mdl-color-text--indigo-300{color:#7986cb!important}.mdl-color--indigo-300{background-color:#7986cb!important}.mdl-color-text--indigo-400{color:#5c6bc0!important}.mdl-color--indigo-400{background-color:#5c6bc0!important}.mdl-color-text--indigo-500{color:#3f51b5!important}.mdl-color--indigo-500{background-color:#3f51b5!important}.mdl-color-text--indigo-600{color:#3949ab!important}.mdl-color--indigo-600{background-color:#3949ab!important}.mdl-color-text--indigo-700{color:#303f9f!important}.mdl-color--indigo-700{background-color:#303f9f!important}.mdl-color-text--indigo-800{color:#283593!important}.mdl-color--indigo-800{background-color:#283593!important}.mdl-color-text--indigo-900{color:#1a237e!important}.mdl-color--indigo-900{background-color:#1a237e!important}.mdl-color-text--indigo-A100{color:#8c9eff!important}.mdl-color--indigo-A100{background-color:#8c9eff!important}.mdl-color-text--indigo-A200{color:#536dfe!important}.mdl-color--indigo-A200{background-color:#536dfe!important}.mdl-color-text--indigo-A400{color:#3d5afe!important}.mdl-color--indigo-A400{background-color:#3d5afe!important}.mdl-color-text--indigo-A700{color:#304ffe!important}.mdl-color--indigo-A700{background-color:#304ffe!important}.mdl-color-text--blue{color:#2196f3!important}.mdl-color--blue{background-color:#2196f3!important}.mdl-color-text--blue-50{color:#e3f2fd!important}.mdl-color--blue-50{background-color:#e3f2fd!important}.mdl-color-text--blue-100{color:#bbdefb!important}.mdl-color--blue-100{background-color:#bbdefb!important}.mdl-color-text--blue-200{color:#90caf9!important}.mdl-color--blue-200{background-color:#90caf9!important}.mdl-color-text--blue-300{color:#64b5f6!important}.mdl-color--blue-300{background-color:#64b5f6!important}.mdl-color-text--blue-400{color:#42a5f5!important}.mdl-color--blue-400{background-color:#42a5f5!important}.mdl-color-text--blue-500{color:#2196f3!important}.mdl-color--blue-500{background-color:#2196f3!important}.mdl-color-text--blue-600{color:#1e88e5!important}.mdl-color--blue-600{background-color:#1e88e5!important}.mdl-color-text--blue-700{color:#1976d2!important}.mdl-color--blue-700{background-color:#1976d2!important}.mdl-color-text--blue-800{color:#1565c0!important}.mdl-color--blue-800{background-color:#1565c0!important}.mdl-color-text--blue-900{color:#0d47a1!important}.mdl-color--blue-900{background-color:#0d47a1!important}.mdl-color-text--blue-A100{color:#82b1ff!important}.mdl-color--blue-A100{background-color:#82b1ff!important}.mdl-color-text--blue-A200{color:#448aff!important}.mdl-color--blue-A200{background-color:#448aff!important}.mdl-color-text--blue-A400{color:#2979ff!important}.mdl-color--blue-A400{background-color:#2979ff!important}.mdl-color-text--blue-A700{color:#2962ff!important}.mdl-color--blue-A700{background-color:#2962ff!important}.mdl-color-text--light-blue{color:#03a9f4!important}.mdl-color--light-blue{background-color:#03a9f4!important}.mdl-color-text--light-blue-50{color:#e1f5fe!important}.mdl-color--light-blue-50{background-color:#e1f5fe!important}.mdl-color-text--light-blue-100{color:#b3e5fc!important}.mdl-color--light-blue-100{background-color:#b3e5fc!important}.mdl-color-text--light-blue-200{color:#81d4fa!important}.mdl-color--light-blue-200{background-color:#81d4fa!important}.mdl-color-text--light-blue-300{color:#4fc3f7!important}.mdl-color--light-blue-300{background-color:#4fc3f7!important}.mdl-color-text--light-blue-400{color:#29b6f6!important}.mdl-color--light-blue-400{background-color:#29b6f6!important}.mdl-color-text--light-blue-500{color:#03a9f4!important}.mdl-color--light-blue-500{background-color:#03a9f4!important}.mdl-color-text--light-blue-600{color:#039be5!important}.mdl-color--light-blue-600{background-color:#039be5!important}.mdl-color-text--light-blue-700{color:#0288d1!important}.mdl-color--light-blue-700{background-color:#0288d1!important}.mdl-color-text--light-blue-800{color:#0277bd!important}.mdl-color--light-blue-800{background-color:#0277bd!important}.mdl-color-text--light-blue-900{color:#01579b!important}.mdl-color--light-blue-900{background-color:#01579b!important}.mdl-color-text--light-blue-A100{color:#80d8ff!important}.mdl-color--light-blue-A100{background-color:#80d8ff!important}.mdl-color-text--light-blue-A200{color:#40c4ff!important}.mdl-color--light-blue-A200{background-color:#40c4ff!important}.mdl-color-text--light-blue-A400{color:#00b0ff!important}.mdl-color--light-blue-A400{background-color:#00b0ff!important}.mdl-color-text--light-blue-A700{color:#0091ea!important}.mdl-color--light-blue-A700{background-color:#0091ea!important}.mdl-color-text--cyan{color:#00bcd4!important}.mdl-color--cyan{background-color:#00bcd4!important}.mdl-color-text--cyan-50{color:#e0f7fa!important}.mdl-color--cyan-50{background-color:#e0f7fa!important}.mdl-color-text--cyan-100{color:#b2ebf2!important}.mdl-color--cyan-100{background-color:#b2ebf2!important}.mdl-color-text--cyan-200{color:#80deea!important}.mdl-color--cyan-200{background-color:#80deea!important}.mdl-color-text--cyan-300{color:#4dd0e1!important}.mdl-color--cyan-300{background-color:#4dd0e1!important}.mdl-color-text--cyan-400{color:#26c6da!important}.mdl-color--cyan-400{background-color:#26c6da!important}.mdl-color-text--cyan-500{color:#00bcd4!important}.mdl-color--cyan-500{background-color:#00bcd4!important}.mdl-color-text--cyan-600{color:#00acc1!important}.mdl-color--cyan-600{background-color:#00acc1!important}.mdl-color-text--cyan-700{color:#0097a7!important}.mdl-color--cyan-700{background-color:#0097a7!important}.mdl-color-text--cyan-800{color:#00838f!important}.mdl-color--cyan-800{background-color:#00838f!important}.mdl-color-text--cyan-900{color:#006064!important}.mdl-color--cyan-900{background-color:#006064!important}.mdl-color-text--cyan-A100{color:#84ffff!important}.mdl-color--cyan-A100{background-color:#84ffff!important}.mdl-color-text--cyan-A200{color:#18ffff!important}.mdl-color--cyan-A200{background-color:#18ffff!important}.mdl-color-text--cyan-A400{color:#00e5ff!important}.mdl-color--cyan-A400{background-color:#00e5ff!important}.mdl-color-text--cyan-A700{color:#00b8d4!important}.mdl-color--cyan-A700{background-color:#00b8d4!important}.mdl-color-text--teal{color:#009688!important}.mdl-color--teal{background-color:#009688!important}.mdl-color-text--teal-50{color:#e0f2f1!important}.mdl-color--teal-50{background-color:#e0f2f1!important}.mdl-color-text--teal-100{color:#b2dfdb!important}.mdl-color--teal-100{background-color:#b2dfdb!important}.mdl-color-text--teal-200{color:#80cbc4!important}.mdl-color--teal-200{background-color:#80cbc4!important}.mdl-color-text--teal-300{color:#4db6ac!important}.mdl-color--teal-300{background-color:#4db6ac!important}.mdl-color-text--teal-400{color:#26a69a!important}.mdl-color--teal-400{background-color:#26a69a!important}.mdl-color-text--teal-500{color:#009688!important}.mdl-color--teal-500{background-color:#009688!important}.mdl-color-text--teal-600{color:#00897b!important}.mdl-color--teal-600{background-color:#00897b!important}.mdl-color-text--teal-700{color:#00796b!important}.mdl-color--teal-700{background-color:#00796b!important}.mdl-color-text--teal-800{color:#00695c!important}.mdl-color--teal-800{background-color:#00695c!important}.mdl-color-text--teal-900{color:#004d40!important}.mdl-color--teal-900{background-color:#004d40!important}.mdl-color-text--teal-A100{color:#a7ffeb!important}.mdl-color--teal-A100{background-color:#a7ffeb!important}.mdl-color-text--teal-A200{color:#64ffda!important}.mdl-color--teal-A200{background-color:#64ffda!important}.mdl-color-text--teal-A400{color:#1de9b6!important}.mdl-color--teal-A400{background-color:#1de9b6!important}.mdl-color-text--teal-A700{color:#00bfa5!important}.mdl-color--teal-A700{background-color:#00bfa5!important}.mdl-color-text--green{color:#4caf50!important}.mdl-color--green{background-color:#4caf50!important}.mdl-color-text--green-50{color:#e8f5e9!important}.mdl-color--green-50{background-color:#e8f5e9!important}.mdl-color-text--green-100{color:#c8e6c9!important}.mdl-color--green-100{background-color:#c8e6c9!important}.mdl-color-text--green-200{color:#a5d6a7!important}.mdl-color--green-200{background-color:#a5d6a7!important}.mdl-color-text--green-300{color:#81c784!important}.mdl-color--green-300{background-color:#81c784!important}.mdl-color-text--green-400{color:#66bb6a!important}.mdl-color--green-400{background-color:#66bb6a!important}.mdl-color-text--green-500{color:#4caf50!important}.mdl-color--green-500{background-color:#4caf50!important}.mdl-color-text--green-600{color:#43a047!important}.mdl-color--green-600{background-color:#43a047!important}.mdl-color-text--green-700{color:#388e3c!important}.mdl-color--green-700{background-color:#388e3c!important}.mdl-color-text--green-800{color:#2e7d32!important}.mdl-color--green-800{background-color:#2e7d32!important}.mdl-color-text--green-900{color:#1b5e20!important}.mdl-color--green-900{background-color:#1b5e20!important}.mdl-color-text--green-A100{color:#b9f6ca!important}.mdl-color--green-A100{background-color:#b9f6ca!important}.mdl-color-text--green-A200{color:#69f0ae!important}.mdl-color--green-A200{background-color:#69f0ae!important}.mdl-color-text--green-A400{color:#00e676!important}.mdl-color--green-A400{background-color:#00e676!important}.mdl-color-text--green-A700{color:#00c853!important}.mdl-color--green-A700{background-color:#00c853!important}.mdl-color-text--light-green{color:#8bc34a!important}.mdl-color--light-green{background-color:#8bc34a!important}.mdl-color-text--light-green-50{color:#f1f8e9!important}.mdl-color--light-green-50{background-color:#f1f8e9!important}.mdl-color-text--light-green-100{color:#dcedc8!important}.mdl-color--light-green-100{background-color:#dcedc8!important}.mdl-color-text--light-green-200{color:#c5e1a5!important}.mdl-color--light-green-200{background-color:#c5e1a5!important}.mdl-color-text--light-green-300{color:#aed581!important}.mdl-color--light-green-300{background-color:#aed581!important}.mdl-color-text--light-green-400{color:#9ccc65!important}.mdl-color--light-green-400{background-color:#9ccc65!important}.mdl-color-text--light-green-500{color:#8bc34a!important}.mdl-color--light-green-500{background-color:#8bc34a!important}.mdl-color-text--light-green-600{color:#7cb342!important}.mdl-color--light-green-600{background-color:#7cb342!important}.mdl-color-text--light-green-700{color:#689f38!important}.mdl-color--light-green-700{background-color:#689f38!important}.mdl-color-text--light-green-800{color:#558b2f!important}.mdl-color--light-green-800{background-color:#558b2f!important}.mdl-color-text--light-green-900{color:#33691e!important}.mdl-color--light-green-900{background-color:#33691e!important}.mdl-color-text--light-green-A100{color:#ccff90!important}.mdl-color--light-green-A100{background-color:#ccff90!important}.mdl-color-text--light-green-A200{color:#b2ff59!important}.mdl-color--light-green-A200{background-color:#b2ff59!important}.mdl-color-text--light-green-A400{color:#76ff03!important}.mdl-color--light-green-A400{background-color:#76ff03!important}.mdl-color-text--light-green-A700{color:#64dd17!important}.mdl-color--light-green-A700{background-color:#64dd17!important}.mdl-color-text--lime{color:#cddc39!important}.mdl-color--lime{background-color:#cddc39!important}.mdl-color-text--lime-50{color:#f9fbe7!important}.mdl-color--lime-50{background-color:#f9fbe7!important}.mdl-color-text--lime-100{color:#f0f4c3!important}.mdl-color--lime-100{background-color:#f0f4c3!important}.mdl-color-text--lime-200{color:#e6ee9c!important}.mdl-color--lime-200{background-color:#e6ee9c!important}.mdl-color-text--lime-300{color:#dce775!important}.mdl-color--lime-300{background-color:#dce775!important}.mdl-color-text--lime-400{color:#d4e157!important}.mdl-color--lime-400{background-color:#d4e157!important}.mdl-color-text--lime-500{color:#cddc39!important}.mdl-color--lime-500{background-color:#cddc39!important}.mdl-color-text--lime-600{color:#c0ca33!important}.mdl-color--lime-600{background-color:#c0ca33!important}.mdl-color-text--lime-700{color:#afb42b!important}.mdl-color--lime-700{background-color:#afb42b!important}.mdl-color-text--lime-800{color:#9e9d24!important}.mdl-color--lime-800{background-color:#9e9d24!important}.mdl-color-text--lime-900{color:#827717!important}.mdl-color--lime-900{background-color:#827717!important}.mdl-color-text--lime-A100{color:#f4ff81!important}.mdl-color--lime-A100{background-color:#f4ff81!important}.mdl-color-text--lime-A200{color:#eeff41!important}.mdl-color--lime-A200{background-color:#eeff41!important}.mdl-color-text--lime-A400{color:#c6ff00!important}.mdl-color--lime-A400{background-color:#c6ff00!important}.mdl-color-text--lime-A700{color:#aeea00!important}.mdl-color--lime-A700{background-color:#aeea00!important}.mdl-color-text--yellow{color:#ffeb3b!important}.mdl-color--yellow{background-color:#ffeb3b!important}.mdl-color-text--yellow-50{color:#fffde7!important}.mdl-color--yellow-50{background-color:#fffde7!important}.mdl-color-text--yellow-100{color:#fff9c4!important}.mdl-color--yellow-100{background-color:#fff9c4!important}.mdl-color-text--yellow-200{color:#fff59d!important}.mdl-color--yellow-200{background-color:#fff59d!important}.mdl-color-text--yellow-300{color:#fff176!important}.mdl-color--yellow-300{background-color:#fff176!important}.mdl-color-text--yellow-400{color:#ffee58!important}.mdl-color--yellow-400{background-color:#ffee58!important}.mdl-color-text--yellow-500{color:#ffeb3b!important}.mdl-color--yellow-500{background-color:#ffeb3b!important}.mdl-color-text--yellow-600{color:#fdd835!important}.mdl-color--yellow-600{background-color:#fdd835!important}.mdl-color-text--yellow-700{color:#fbc02d!important}.mdl-color--yellow-700{background-color:#fbc02d!important}.mdl-color-text--yellow-800{color:#f9a825!important}.mdl-color--yellow-800{background-color:#f9a825!important}.mdl-color-text--yellow-900{color:#f57f17!important}.mdl-color--yellow-900{background-color:#f57f17!important}.mdl-color-text--yellow-A100{color:#ffff8d!important}.mdl-color--yellow-A100{background-color:#ffff8d!important}.mdl-color-text--yellow-A200{color:#ff0!important}.mdl-color--yellow-A200{background-color:#ff0!important}.mdl-color-text--yellow-A400{color:#ffea00!important}.mdl-color--yellow-A400{background-color:#ffea00!important}.mdl-color-text--yellow-A700{color:#ffd600!important}.mdl-color--yellow-A700{background-color:#ffd600!important}.mdl-color-text--amber{color:#ffc107!important}.mdl-color--amber{background-color:#ffc107!important}.mdl-color-text--amber-50{color:#fff8e1!important}.mdl-color--amber-50{background-color:#fff8e1!important}.mdl-color-text--amber-100{color:#ffecb3!important}.mdl-color--amber-100{background-color:#ffecb3!important}.mdl-color-text--amber-200{color:#ffe082!important}.mdl-color--amber-200{background-color:#ffe082!important}.mdl-color-text--amber-300{color:#ffd54f!important}.mdl-color--amber-300{background-color:#ffd54f!important}.mdl-color-text--amber-400{color:#ffca28!important}.mdl-color--amber-400{background-color:#ffca28!important}.mdl-color-text--amber-500{color:#ffc107!important}.mdl-color--amber-500{background-color:#ffc107!important}.mdl-color-text--amber-600{color:#ffb300!important}.mdl-color--amber-600{background-color:#ffb300!important}.mdl-color-text--amber-700{color:#ffa000!important}.mdl-color--amber-700{background-color:#ffa000!important}.mdl-color-text--amber-800{color:#ff8f00!important}.mdl-color--amber-800{background-color:#ff8f00!important}.mdl-color-text--amber-900{color:#ff6f00!important}.mdl-color--amber-900{background-color:#ff6f00!important}.mdl-color-text--amber-A100{color:#ffe57f!important}.mdl-color--amber-A100{background-color:#ffe57f!important}.mdl-color-text--amber-A200{color:#ffd740!important}.mdl-color--amber-A200{background-color:#ffd740!important}.mdl-color-text--amber-A400{color:#ffc400!important}.mdl-color--amber-A400{background-color:#ffc400!important}.mdl-color-text--amber-A700{color:#ffab00!important}.mdl-color--amber-A700{background-color:#ffab00!important}.mdl-color-text--orange{color:#ff9800!important}.mdl-color--orange{background-color:#ff9800!important}.mdl-color-text--orange-50{color:#fff3e0!important}.mdl-color--orange-50{background-color:#fff3e0!important}.mdl-color-text--orange-100{color:#ffe0b2!important}.mdl-color--orange-100{background-color:#ffe0b2!important}.mdl-color-text--orange-200{color:#ffcc80!important}.mdl-color--orange-200{background-color:#ffcc80!important}.mdl-color-text--orange-300{color:#ffb74d!important}.mdl-color--orange-300{background-color:#ffb74d!important}.mdl-color-text--orange-400{color:#ffa726!important}.mdl-color--orange-400{background-color:#ffa726!important}.mdl-color-text--orange-500{color:#ff9800!important}.mdl-color--orange-500{background-color:#ff9800!important}.mdl-color-text--orange-600{color:#fb8c00!important}.mdl-color--orange-600{background-color:#fb8c00!important}.mdl-color-text--orange-700{color:#f57c00!important}.mdl-color--orange-700{background-color:#f57c00!important}.mdl-color-text--orange-800{color:#ef6c00!important}.mdl-color--orange-800{background-color:#ef6c00!important}.mdl-color-text--orange-900{color:#e65100!important}.mdl-color--orange-900{background-color:#e65100!important}.mdl-color-text--orange-A100{color:#ffd180!important}.mdl-color--orange-A100{background-color:#ffd180!important}.mdl-color-text--orange-A200{color:#ffab40!important}.mdl-color--orange-A200{background-color:#ffab40!important}.mdl-color-text--orange-A400{color:#ff9100!important}.mdl-color--orange-A400{background-color:#ff9100!important}.mdl-color-text--orange-A700{color:#ff6d00!important}.mdl-color--orange-A700{background-color:#ff6d00!important}.mdl-color-text--deep-orange{color:#ff5722!important}.mdl-color--deep-orange{background-color:#ff5722!important}.mdl-color-text--deep-orange-50{color:#fbe9e7!important}.mdl-color--deep-orange-50{background-color:#fbe9e7!important}.mdl-color-text--deep-orange-100{color:#ffccbc!important}.mdl-color--deep-orange-100{background-color:#ffccbc!important}.mdl-color-text--deep-orange-200{color:#ffab91!important}.mdl-color--deep-orange-200{background-color:#ffab91!important}.mdl-color-text--deep-orange-300{color:#ff8a65!important}.mdl-color--deep-orange-300{background-color:#ff8a65!important}.mdl-color-text--deep-orange-400{color:#ff7043!important}.mdl-color--deep-orange-400{background-color:#ff7043!important}.mdl-color-text--deep-orange-500{color:#ff5722!important}.mdl-color--deep-orange-500{background-color:#ff5722!important}.mdl-color-text--deep-orange-600{color:#f4511e!important}.mdl-color--deep-orange-600{background-color:#f4511e!important}.mdl-color-text--deep-orange-700{color:#e64a19!important}.mdl-color--deep-orange-700{background-color:#e64a19!important}.mdl-color-text--deep-orange-800{color:#d84315!important}.mdl-color--deep-orange-800{background-color:#d84315!important}.mdl-color-text--deep-orange-900{color:#bf360c!important}.mdl-color--deep-orange-900{background-color:#bf360c!important}.mdl-color-text--deep-orange-A100{color:#ff9e80!important}.mdl-color--deep-orange-A100{background-color:#ff9e80!important}.mdl-color-text--deep-orange-A200{color:#ff6e40!important}.mdl-color--deep-orange-A200{background-color:#ff6e40!important}.mdl-color-text--deep-orange-A400{color:#ff3d00!important}.mdl-color--deep-orange-A400{background-color:#ff3d00!important}.mdl-color-text--deep-orange-A700{color:#dd2c00!important}.mdl-color--deep-orange-A700{background-color:#dd2c00!important}.mdl-color-text--brown{color:#795548!important}.mdl-color--brown{background-color:#795548!important}.mdl-color-text--brown-50{color:#efebe9!important}.mdl-color--brown-50{background-color:#efebe9!important}.mdl-color-text--brown-100{color:#d7ccc8!important}.mdl-color--brown-100{background-color:#d7ccc8!important}.mdl-color-text--brown-200{color:#bcaaa4!important}.mdl-color--brown-200{background-color:#bcaaa4!important}.mdl-color-text--brown-300{color:#a1887f!important}.mdl-color--brown-300{background-color:#a1887f!important}.mdl-color-text--brown-400{color:#8d6e63!important}.mdl-color--brown-400{background-color:#8d6e63!important}.mdl-color-text--brown-500{color:#795548!important}.mdl-color--brown-500{background-color:#795548!important}.mdl-color-text--brown-600{color:#6d4c41!important}.mdl-color--brown-600{background-color:#6d4c41!important}.mdl-color-text--brown-700{color:#5d4037!important}.mdl-color--brown-700{background-color:#5d4037!important}.mdl-color-text--brown-800{color:#4e342e!important}.mdl-color--brown-800{background-color:#4e342e!important}.mdl-color-text--brown-900{color:#3e2723!important}.mdl-color--brown-900{background-color:#3e2723!important}.mdl-color-text--grey{color:#9e9e9e!important}.mdl-color--grey{background-color:#9e9e9e!important}.mdl-color-text--grey-50{color:#fafafa!important}.mdl-color--grey-50{background-color:#fafafa!important}.mdl-color-text--grey-100{color:#f5f5f5!important}.mdl-color--grey-100{background-color:#f5f5f5!important}.mdl-color-text--grey-200{color:#eee!important}.mdl-color--grey-200{background-color:#eee!important}.mdl-color-text--grey-300{color:#e0e0e0!important}.mdl-color--grey-300{background-color:#e0e0e0!important}.mdl-color-text--grey-400{color:#bdbdbd!important}.mdl-color--grey-400{background-color:#bdbdbd!important}.mdl-color-text--grey-500{color:#9e9e9e!important}.mdl-color--grey-500{background-color:#9e9e9e!important}.mdl-color-text--grey-600{color:#757575!important}.mdl-color--grey-600{background-color:#757575!important}.mdl-color-text--grey-700{color:#616161!important}.mdl-color--grey-700{background-color:#616161!important}.mdl-color-text--grey-800{color:#424242!important}.mdl-color--grey-800{background-color:#424242!important}.mdl-color-text--grey-900{color:#212121!important}.mdl-color--grey-900{background-color:#212121!important}.mdl-color-text--blue-grey{color:#607d8b!important}.mdl-color--blue-grey{background-color:#607d8b!important}.mdl-color-text--blue-grey-50{color:#eceff1!important}.mdl-color--blue-grey-50{background-color:#eceff1!important}.mdl-color-text--blue-grey-100{color:#cfd8dc!important}.mdl-color--blue-grey-100{background-color:#cfd8dc!important}.mdl-color-text--blue-grey-200{color:#b0bec5!important}.mdl-color--blue-grey-200{background-color:#b0bec5!important}.mdl-color-text--blue-grey-300{color:#90a4ae!important}.mdl-color--blue-grey-300{background-color:#90a4ae!important}.mdl-color-text--blue-grey-400{color:#78909c!important}.mdl-color--blue-grey-400{background-color:#78909c!important}.mdl-color-text--blue-grey-500{color:#607d8b!important}.mdl-color--blue-grey-500{background-color:#607d8b!important}.mdl-color-text--blue-grey-600{color:#546e7a!important}.mdl-color--blue-grey-600{background-color:#546e7a!important}.mdl-color-text--blue-grey-700{color:#455a64!important}.mdl-color--blue-grey-700{background-color:#455a64!important}.mdl-color-text--blue-grey-800{color:#37474f!important}.mdl-color--blue-grey-800{background-color:#37474f!important}.mdl-color-text--blue-grey-900{color:#263238!important}.mdl-color--blue-grey-900{background-color:#263238!important}.mdl-color--black{background-color:#000!important}.mdl-color-text--black{color:#000!important}.mdl-color--white{background-color:#fff!important}.mdl-color-text--white{color:#fff!important}.mdl-color--primary{background-color:#3f51b5!important}.mdl-color--primary-contrast{background-color:#fff!important}.mdl-color--primary-dark{background-color:#303f9f!important}.mdl-color--accent{background-color:#ff4081!important}.mdl-color--accent-contrast{background-color:#fff!important}.mdl-color-text--primary{color:#3f51b5!important}.mdl-color-text--primary-contrast{color:#fff!important}.mdl-color-text--primary-dark{color:#303f9f!important}.mdl-color-text--accent{color:#ff4081!important}.mdl-color-text--accent-contrast{color:#fff!important}";
styleInject(css$14);

var lappComponent = { Badge: Badge, Icon: Icon, Button: Button, Card: Card, Chip: Chip, Layout: Layout, TabPanel: TabPanel, Checkbox: Checkbox, Radio: Radio, Switch: Switch, Loading: Progress, Tooltip: Tooltip, Textfield: Textfield, DatetimePicker: DatetimePicker };

export default lappComponent;
