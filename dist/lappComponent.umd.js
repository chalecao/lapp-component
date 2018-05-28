(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lapp'), require('rome'), require('moment')) :
    typeof define === 'function' && define.amd ? define(['lapp', 'rome', 'moment'], factory) :
    (global.lappComponent = factory(global.lapp,global.rome,global.moment));
}(this, (function (lapp,rome,moment) { 'use strict';

    rome = rome && rome.hasOwnProperty('default') ? rome['default'] : rome;
    moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

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

    var css = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-badge {\n  position: relative;\n  white-space: nowrap;\n  margin-right: 24px; }\n  .mdl-badge:not([data-badge]) {\n    margin-right: auto; }\n  .mdl-badge[data-badge]:after {\n    content: attr(data-badge);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: absolute;\n    top: -11px;\n    right: -24px;\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-weight: 600;\n    font-size: 12px;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    background: rgb(255, 64, 129);\n    color: rgb(255, 255, 255); }\n    .mdl-button .mdl-badge[data-badge]:after {\n      top: -10px;\n      right: -5px; }\n  .mdl-badge.mdl-badge--no-background[data-badge]:after {\n    color: rgb(255, 64, 129);\n    background: rgba(255, 255, 255, .2);\n    -webkit-box-shadow: 0 0 1px gray;\n            box-shadow: 0 0 1px gray; }\n  .mdl-badge.mdl-badge--overlap {\n    margin-right: 10px; }\n    .mdl-badge.mdl-badge--overlap:after {\n      right: -10px; }\n";
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
        return lapp.l(
            'span',
            _extends({ 'class': actions.getCls(props), 'data-badge': props.data }, filter(props, ctlProps)),
            children
        );
    };

    var css$1 = "/* fallback */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format(\"woff2\"); }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n";
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
        return lapp.l(
            'i',
            _extends({ 'class': actions$1.getCls(props) }, filter(props, ['class'])),
            children
        );
    };

    var css$2 = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-button {\n  background: transparent;\n  border: none;\n  border-radius: 2px;\n  color: rgb(0, 0, 0);\n  position: relative;\n  height: 36px;\n  margin: 0;\n  min-width: 64px;\n  padding: 0 16px;\n  display: inline-block;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  line-height: 1;\n  letter-spacing: 0;\n  overflow: hidden;\n  will-change: box-shadow;\n  -webkit-transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);\n  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  line-height: 36px;\n  vertical-align: middle; }\n  .mdl-button::-moz-focus-inner {\n    border: 0; }\n  .mdl-button:hover {\n    background-color: rgba(158, 158, 158, .20); }\n  .mdl-button:focus:not(:active) {\n    background-color: rgba(0, 0, 0, .12); }\n  .mdl-button:active {\n    background-color: rgba(158, 158, 158, .40); }\n  .mdl-button.mdl-button--colored {\n    color: rgb(63, 81, 181); }\n    .mdl-button.mdl-button--colored:focus:not(:active) {\n      background-color: rgba(0, 0, 0, .12); }\n\ninput.mdl-button[type=\"submit\"] {\n  -webkit-appearance: none; }\n\n.mdl-button--raised {\n  background: rgba(158, 158, 158, .20);\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12); }\n  .mdl-button--raised:active {\n    -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);\n            box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);\n    background-color: rgba(158, 158, 158, .40); }\n  .mdl-button--raised:focus:not(:active) {\n    -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .18), 0 8px 16px rgba(0, 0, 0, .36);\n            box-shadow: 0 0 8px rgba(0, 0, 0, .18), 0 8px 16px rgba(0, 0, 0, .36);\n    background-color: rgba(158, 158, 158, .40); }\n  .mdl-button--raised.mdl-button--colored {\n    background: rgb(63, 81, 181);\n    color: rgb(255, 255, 255); }\n    .mdl-button--raised.mdl-button--colored:hover {\n      background-color: rgb(63, 81, 181); }\n    .mdl-button--raised.mdl-button--colored:active {\n      background-color: rgb(63, 81, 181); }\n    .mdl-button--raised.mdl-button--colored:focus:not(:active) {\n      background-color: rgb(63, 81, 181); }\n    .mdl-button--raised.mdl-button--colored .mdl-ripple {\n      background: rgb(255, 255, 255); }\n\n.mdl-button--fab {\n  border-radius: 50%;\n  font-size: 24px;\n  height: 56px;\n  margin: auto;\n  min-width: 56px;\n  width: 56px;\n  padding: 0;\n  overflow: hidden;\n  background: rgba(158, 158, 158, .20);\n  -webkit-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, .12), 0 1px 1px 0 rgba(0, 0, 0, .24);\n          box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, .12), 0 1px 1px 0 rgba(0, 0, 0, .24);\n  position: relative;\n  line-height: normal; }\n  .mdl-button--fab .material-icons {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-12px, -12px);\n            transform: translate(-12px, -12px);\n    line-height: 24px;\n    width: 24px; }\n  .mdl-button--fab.mdl-button--mini-fab {\n    height: 40px;\n    min-width: 40px;\n    width: 40px; }\n  .mdl-button--fab .mdl-button__ripple-container {\n    border-radius: 50%;\n    -webkit-mask-image: -webkit-radial-gradient(circle, white, black); }\n  .mdl-button--fab:active {\n    -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);\n            box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);\n    background-color: rgba(158, 158, 158, .40); }\n  .mdl-button--fab:focus:not(:active) {\n    -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .18), 0 8px 16px rgba(0, 0, 0, .36);\n            box-shadow: 0 0 8px rgba(0, 0, 0, .18), 0 8px 16px rgba(0, 0, 0, .36);\n    background-color: rgba(158, 158, 158, .40); }\n  .mdl-button--fab.mdl-button--colored {\n    background: rgb(255, 64, 129);\n    color: rgb(255, 255, 255); }\n    .mdl-button--fab.mdl-button--colored:hover {\n      background-color: rgb(255, 64, 129); }\n    .mdl-button--fab.mdl-button--colored:focus:not(:active) {\n      background-color: rgb(255, 64, 129); }\n    .mdl-button--fab.mdl-button--colored:active {\n      background-color: rgb(255, 64, 129); }\n    .mdl-button--fab.mdl-button--colored .mdl-ripple {\n      background: rgb(255, 255, 255); }\n\n.mdl-button--icon {\n  border-radius: 50%;\n  font-size: 24px;\n  height: 32px;\n  margin-left: 0;\n  margin-right: 0;\n  min-width: 32px;\n  width: 32px;\n  padding: 0;\n  overflow: hidden;\n  color: inherit;\n  line-height: normal; }\n  .mdl-button--icon .material-icons {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-12px, -12px);\n            transform: translate(-12px, -12px);\n    line-height: 24px;\n    width: 24px; }\n  .mdl-button--icon.mdl-button--mini-icon {\n    height: 24px;\n    min-width: 24px;\n    width: 24px; }\n    .mdl-button--icon.mdl-button--mini-icon .material-icons {\n      top: 0px;\n      left: 0px; }\n  .mdl-button--icon .mdl-button__ripple-container {\n    border-radius: 50%;\n    -webkit-mask-image: -webkit-radial-gradient(circle, white, black); }\n\n.mdl-button__ripple-container {\n  display: block;\n  height: 100%;\n  left: 0px;\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  z-index: 0;\n  overflow: hidden; }\n  .mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple,\n  .mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple {\n    background-color: transparent; }\n\n.mdl-button--primary.mdl-button--primary {\n  color: rgb(63, 81, 181); }\n  .mdl-button--primary.mdl-button--primary .mdl-ripple {\n    background: rgb(255, 255, 255); }\n  .mdl-button--primary.mdl-button--primary.mdl-button--raised, .mdl-button--primary.mdl-button--primary.mdl-button--fab {\n    color: rgb(255, 255, 255);\n    background-color: rgb(63, 81, 181); }\n\n.mdl-button--accent.mdl-button--accent {\n  color: rgb(255, 64, 129); }\n  .mdl-button--accent.mdl-button--accent .mdl-ripple {\n    background: rgb(255, 255, 255); }\n  .mdl-button--accent.mdl-button--accent.mdl-button--raised, .mdl-button--accent.mdl-button--accent.mdl-button--fab {\n    color: rgb(255, 255, 255);\n    background-color: rgb(255, 64, 129); }\n\n.mdl-button[disabled][disabled], .mdl-button.mdl-button--disabled.mdl-button--disabled {\n  color: rgba(0, 0, 0, .26);\n  cursor: default;\n  background-color: transparent; }\n\n.mdl-button--fab[disabled][disabled], .mdl-button--fab.mdl-button--disabled.mdl-button--disabled {\n  background-color: rgba(0, 0, 0, .12);\n  color: rgba(0, 0, 0, .26); }\n\n.mdl-button--raised[disabled][disabled], .mdl-button--raised.mdl-button--disabled.mdl-button--disabled {\n  background-color: rgba(0, 0, 0, .12);\n  color: rgba(0, 0, 0, .26);\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.mdl-button--colored[disabled][disabled], .mdl-button--colored.mdl-button--disabled.mdl-button--disabled {\n  color: rgba(0, 0, 0, .26); }\n\n.mdl-button .material-icons {\n  vertical-align: middle; }\n";
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
        return lapp.l(
            'button',
            _extends({ 'class': actions$2.getCls(props) }, filter(props, ctlProps$1)),
            children
        );
    };

    var css$3 = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-size: 16px;\n  font-weight: 400;\n  overflow: hidden;\n  width: 330px;\n  z-index: 1;\n  position: relative;\n  background: rgb(255, 255, 255);\n  border-radius: 2px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.mdl-card__media {\n  background-color: rgb(255, 64, 129);\n  background-repeat: repeat;\n  background-position: 50% 50%;\n  background-size: cover;\n  background-origin: padding-box;\n  background-attachment: scroll;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.mdl-card__title {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: rgb(0, 0, 0);\n  display: block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  line-height: normal;\n  padding: 16px 16px;\n  -webkit-perspective-origin: 165px 56px;\n          perspective-origin: 165px 56px;\n  -webkit-transform-origin: 165px 56px;\n          transform-origin: 165px 56px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n  .mdl-card__title.mdl-card--border {\n    border-bottom: 1px solid rgba(0, 0, 0, .1); }\n\n.mdl-card__title-text {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  color: inherit;\n  display: block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: normal;\n  overflow: hidden;\n  -webkit-transform-origin: 149px 48px;\n          transform-origin: 149px 48px;\n  margin: 0; }\n\n.mdl-card__subtitle-text {\n  font-size: 14px;\n  color: rgba(0, 0, 0, .54);\n  margin: 0; }\n\n.mdl-card__supporting-text {\n  color: rgba(0, 0, 0, .54);\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 18px;\n  overflow: hidden;\n  padding: 16px 16px;\n  width: 90%; }\n  .mdl-card__supporting-text.mdl-card--border {\n    border-bottom: 1px solid rgba(0, 0, 0, .1); }\n\n.mdl-card__actions {\n  font-size: 16px;\n  line-height: normal;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0);\n  padding: 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n  .mdl-card__actions.mdl-card--border {\n    border-top: 1px solid rgba(0, 0, 0, .1); }\n\n.mdl-card--expand {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.mdl-card__menu {\n  position: absolute;\n  right: 16px;\n  top: 16px; }\n";
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
        return lapp.l(
            'div',
            _extends({ 'class': actions$3.getCls(props) }, filter(props, ctlProps$2)),
            lapp.l(
                'div',
                { 'class': 'mdl-card__title' },
                lapp.l(
                    'h2',
                    { 'class': 'mdl-card__title-text' },
                    props.title
                )
            ),
            props.desc ? lapp.l(
                'div',
                { 'class': 'mdl-card__supporting-text' },
                props.desc
            ) : "",
            children.length ? lapp.l(
                'div',
                { 'class': 'mdl-card__actions mdl-card--border' },
                children
            ) : ""
        );
    };

    var css$4 = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-chip {\n  height: 32px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  line-height: 32px;\n  padding: 0 12px;\n  border: 0;\n  border-radius: 16px;\n  background-color: #dedede;\n  display: inline-block;\n  color: rgba(0, 0, 0, .87);\n  margin: 2px 0;\n  font-size: 0;\n  white-space: nowrap; }\n  .mdl-chip__text {\n    font-size: 13px;\n    vertical-align: middle;\n    display: inline-block; }\n  .mdl-chip__action {\n    height: 24px;\n    width: 24px;\n    background: transparent;\n    opacity: 0.54;\n    display: inline-block;\n    cursor: pointer;\n    text-align: center;\n    vertical-align: middle;\n    padding: 0;\n    margin: 0 0 0 4px;\n    font-size: 13px;\n    text-decoration: none;\n    color: rgba(0, 0, 0, .87);\n    border: none;\n    outline: none;\n    overflow: hidden; }\n  .mdl-chip__contact {\n    height: 32px;\n    width: 32px;\n    border-radius: 16px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 8px;\n    overflow: hidden;\n    text-align: center;\n    font-size: 18px;\n    line-height: 32px; }\n  .mdl-chip:focus {\n    outline: 0;\n    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12); }\n  .mdl-chip:active {\n    background-color: #d6d6d6; }\n  .mdl-chip--deletable {\n    padding-right: 4px; }\n    .mdl-chip--deletable > :last-child {\n      height: 24px;\n      width: 24px;\n      background: transparent;\n      opacity: 0.54;\n      display: inline-block;\n      cursor: pointer;\n      text-align: center;\n      vertical-align: middle;\n      padding: 0;\n      margin: 0 0 0 4px;\n      font-size: 13px;\n      text-decoration: none;\n      color: rgba(0, 0, 0, .87);\n      border: none;\n      outline: none;\n      overflow: hidden; }\n  .mdl-chip--contact {\n    padding-left: 0; }\n    .mdl-chip--contact > :first-child {\n      height: 32px;\n      width: 32px;\n      border-radius: 16px;\n      display: inline-block;\n      vertical-align: middle;\n      margin-right: 8px;\n      overflow: hidden;\n      text-align: center;\n      font-size: 18px;\n      line-height: 32px; }\n";
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
        return lapp.l(
            'span',
            _extends({ 'class': actions$4.getCls(props) }, filter(props, ctlProps$3)),
            children
        );
    };

    var css$5 = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-navigation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.mdl-navigation__link {\n  color: rgb(66, 66, 66);\n  text-decoration: none;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  opacity: 0.87; }\n  .mdl-navigation__link .material-icons {\n    vertical-align: middle; }\n\n.mdl-layout {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  -webkit-overflow-scrolling: touch; }\n\n.mdl-layout.is-small-screen .mdl-layout--large-screen-only {\n  display: none; }\n\n.mdl-layout:not(.is-small-screen) .mdl-layout--small-screen-only {\n  display: none; }\n\n.mdl-layout__container {\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\n.mdl-layout__title,\n.mdl-layout-title {\n  display: block;\n  position: relative;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0.02em;\n  font-weight: 400;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.mdl-layout-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.mdl-layout__drawer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  width: 240px;\n  height: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-right: 1px solid rgb(224, 224, 224);\n  background: rgb(250, 250, 250);\n  -webkit-transform: translateX(-250px);\n          transform: translateX(-250px);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  will-change: transform;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  color: rgb(66, 66, 66);\n  overflow: visible;\n  overflow-y: auto;\n  z-index: 5; }\n  .mdl-layout__drawer.is-visible {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n    .mdl-layout__drawer.is-visible ~ .mdl-layout__content.mdl-layout__content {\n      overflow: hidden; }\n  .mdl-layout__drawer > * {\n    -ms-flex-negative: 0;\n        flex-shrink: 0; }\n  .mdl-layout__drawer > .mdl-layout__title,\n  .mdl-layout__drawer > .mdl-layout-title {\n    line-height: 64px;\n    padding-left: 40px; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__drawer > .mdl-layout__title,\n      .mdl-layout__drawer > .mdl-layout-title {\n        line-height: 56px;\n        padding-left: 16px; } }\n  .mdl-layout__drawer .mdl-navigation {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    padding-top: 16px; }\n    .mdl-layout__drawer .mdl-navigation .mdl-navigation__link {\n      display: block;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      padding: 16px 40px;\n      margin: 0;\n      color: #757575; }\n      @media screen and (max-width: 1024px) {\n        .mdl-layout__drawer .mdl-navigation .mdl-navigation__link {\n          padding: 16px 16px; } }\n      .mdl-layout__drawer .mdl-navigation .mdl-navigation__link:hover {\n        background-color: rgb(224, 224, 224); }\n      .mdl-layout__drawer .mdl-navigation .mdl-navigation__link--current {\n        background-color: rgb(224, 224, 224);\n        color: rgb(0, 0, 0); }\n  @media screen and (min-width: 1025px) {\n    .mdl-layout--fixed-drawer > .mdl-layout__drawer {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n\n.mdl-layout__drawer-button {\n  display: block;\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  border: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  overflow: hidden;\n  text-align: center;\n  cursor: pointer;\n  font-size: 26px;\n  line-height: 56px;\n  font-family: Helvetica, Arial, sans-serif;\n  margin: 8px 12px;\n  top: 0;\n  left: 0;\n  color: rgb(255, 255, 255);\n  z-index: 4; }\n  .mdl-layout__header .mdl-layout__drawer-button {\n    position: absolute;\n    color: rgb(255, 255, 255);\n    background-color: inherit; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__header .mdl-layout__drawer-button {\n        margin: 4px; } }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__drawer-button {\n      margin: 4px;\n      color: rgba(0, 0, 0, .5); } }\n  @media screen and (min-width: 1025px) {\n    .mdl-layout__drawer-button {\n      line-height: 54px; }\n      .mdl-layout--no-desktop-drawer-button .mdl-layout__drawer-button,\n      .mdl-layout--fixed-drawer > .mdl-layout__drawer-button,\n      .mdl-layout--no-drawer-button .mdl-layout__drawer-button {\n        display: none; } }\n\n.mdl-layout__header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: none;\n  min-height: 64px;\n  max-height: 1000px;\n  z-index: 3;\n  background-color: rgb(63, 81, 181);\n  color: rgb(255, 255, 255);\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-property: max-height, -webkit-box-shadow;\n  transition-property: max-height, -webkit-box-shadow;\n  transition-property: max-height, box-shadow;\n  transition-property: max-height, box-shadow, -webkit-box-shadow; }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__header {\n      min-height: 56px; } }\n  .mdl-layout--fixed-drawer.is-upgraded:not(.is-small-screen) > .mdl-layout__header {\n    margin-left: 240px;\n    width: calc(100% - 240px); }\n  @media screen and (min-width: 1025px) {\n    .mdl-layout--fixed-drawer > .mdl-layout__header .mdl-layout__header-row {\n      padding-left: 40px; } }\n  .mdl-layout__header > .mdl-layout-icon {\n    position: absolute;\n    left: 40px;\n    top: 16px;\n    height: 32px;\n    width: 32px;\n    overflow: hidden;\n    z-index: 3;\n    display: block; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__header > .mdl-layout-icon {\n        left: 16px;\n        top: 12px; } }\n  .mdl-layout.has-drawer .mdl-layout__header > .mdl-layout-icon {\n    display: none; }\n  .mdl-layout__header.is-compact {\n    max-height: 64px; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__header.is-compact {\n        max-height: 56px; } }\n  .mdl-layout__header.is-compact.has-tabs {\n    height: 112px; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__header.is-compact.has-tabs {\n        min-height: 104px; } }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__header {\n      display: none; }\n    .mdl-layout--fixed-header > .mdl-layout__header {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; } }\n\n.mdl-layout__header--transparent.mdl-layout__header--transparent {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.mdl-layout__header--seamed {\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.mdl-layout__header--scroll {\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.mdl-layout__header--waterfall {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  overflow: hidden; }\n  .mdl-layout__header--waterfall.is-casting-shadow {\n    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12); }\n  .mdl-layout__header--waterfall.mdl-layout__header--waterfall-hide-top {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n\n.mdl-layout__header-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 64px;\n  margin: 0;\n  padding: 0 40px 0 80px; }\n  .mdl-layout--no-drawer-button .mdl-layout__header-row {\n    padding-left: 40px; }\n  @media screen and (min-width: 1025px) {\n    .mdl-layout--no-desktop-drawer-button .mdl-layout__header-row {\n      padding-left: 40px; } }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__header-row {\n      height: 56px;\n      padding: 0 16px 0 72px; }\n      .mdl-layout--no-drawer-button .mdl-layout__header-row {\n        padding-left: 16px; } }\n  .mdl-layout__header-row > * {\n    -ms-flex-negative: 0;\n        flex-shrink: 0; }\n  .mdl-layout__header--scroll .mdl-layout__header-row {\n    width: 100%; }\n  .mdl-layout__header-row .mdl-navigation {\n    margin: 0;\n    padding: 0;\n    height: 64px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__header-row .mdl-navigation {\n        height: 56px; } }\n  .mdl-layout__header-row .mdl-navigation__link {\n    display: block;\n    color: rgb(255, 255, 255);\n    line-height: 64px;\n    padding: 0 24px; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__header-row .mdl-navigation__link {\n        line-height: 56px;\n        padding: 0 16px; } }\n\n.mdl-layout__obfuscator {\n  background-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 4;\n  visibility: hidden;\n  -webkit-transition-property: background-color;\n  transition-property: background-color;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  .mdl-layout__obfuscator.is-visible {\n    background-color: rgba(0, 0, 0, .5);\n    visibility: visible; }\n  @supports (pointer-events: auto) {\n    .mdl-layout__obfuscator {\n      background-color: rgba(0, 0, 0, .5);\n      opacity: 0;\n      -webkit-transition-property: opacity;\n      transition-property: opacity;\n      visibility: visible;\n      pointer-events: none; }\n      .mdl-layout__obfuscator.is-visible {\n        pointer-events: auto;\n        opacity: 1; } }\n\n.mdl-layout__content {\n  -ms-flex: 0 1 auto;\n  position: relative;\n  display: inline-block;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  z-index: 1;\n  -webkit-overflow-scrolling: touch; }\n  .mdl-layout--fixed-drawer > .mdl-layout__content {\n    margin-left: 240px; }\n  .mdl-layout__container.has-scrolling-header .mdl-layout__content {\n    overflow: visible; }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout--fixed-drawer > .mdl-layout__content {\n      margin-left: 0; }\n    .mdl-layout__container.has-scrolling-header .mdl-layout__content {\n      overflow-y: auto;\n      overflow-x: hidden; } }\n\n.mdl-layout__tab-bar {\n  height: 48px;\n  margin: 0;\n  width: calc(100% - 112px);\n  padding: 0 0 0 56px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: rgb(63, 81, 181);\n  overflow-y: hidden;\n  overflow-x: scroll; }\n  .mdl-layout__tab-bar::-webkit-scrollbar {\n    display: none; }\n  .mdl-layout--no-drawer-button .mdl-layout__tab-bar {\n    padding-left: 16px;\n    width: calc(100% - 32px); }\n  @media screen and (min-width: 1025px) {\n    .mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar {\n      padding-left: 16px;\n      width: calc(100% - 32px); } }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__tab-bar {\n      width: calc(100% - 60px);\n      padding: 0 0 0 60px; }\n      .mdl-layout--no-drawer-button .mdl-layout__tab-bar {\n        width: calc(100% - 8px);\n        padding-left: 4px; } }\n  .mdl-layout--fixed-tabs .mdl-layout__tab-bar {\n    padding: 0;\n    overflow: hidden;\n    width: 100%; }\n\n.mdl-layout__tab-bar-container {\n  position: relative;\n  height: 48px;\n  width: 100%;\n  border: none;\n  margin: 0;\n  z-index: 2;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  overflow: hidden; }\n  .mdl-layout__container > .mdl-layout__tab-bar-container {\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.mdl-layout__tab-bar-button {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  height: 48px;\n  width: 56px;\n  z-index: 4;\n  text-align: center;\n  background-color: rgb(63, 81, 181);\n  color: transparent;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar-button,\n  .mdl-layout--no-drawer-button .mdl-layout__tab-bar-button {\n    width: 16px; }\n    .mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar-button .material-icons,\n    .mdl-layout--no-drawer-button .mdl-layout__tab-bar-button .material-icons {\n      position: relative;\n      left: -4px; }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__tab-bar-button {\n      width: 60px; } }\n  .mdl-layout--fixed-tabs .mdl-layout__tab-bar-button {\n    display: none; }\n  .mdl-layout__tab-bar-button .material-icons {\n    line-height: 48px; }\n  .mdl-layout__tab-bar-button.is-active {\n    color: rgb(255, 255, 255); }\n\n.mdl-layout__tab-bar-left-button {\n  left: 0; }\n\n.mdl-layout__tab-bar-right-button {\n  right: 0; }\n\n.mdl-layout__tab {\n  margin: 0;\n  border: none;\n  padding: 0 24px 0 24px;\n  float: left;\n  position: relative;\n  display: block;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  text-decoration: none;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, .6);\n  overflow: hidden; }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__tab {\n      padding: 0 12px 0 12px; } }\n  .mdl-layout--fixed-tabs .mdl-layout__tab {\n    float: none;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    padding: 0; }\n  .mdl-layout.is-upgraded .mdl-layout__tab.is-active {\n    color: rgb(255, 255, 255); }\n  .mdl-layout.is-upgraded .mdl-layout__tab.is-active::after {\n    height: 2px;\n    width: 100%;\n    display: block;\n    content: \" \";\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    background: rgb(255, 64, 129);\n    -webkit-animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) alternate forwards;\n            animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) alternate forwards;\n    -webkit-transition: all 1s cubic-bezier(0.4, 0, 1, 1);\n    transition: all 1s cubic-bezier(0.4, 0, 1, 1); }\n  .mdl-layout__tab .mdl-layout__tab-ripple-container {\n    display: block;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    overflow: hidden; }\n    .mdl-layout__tab .mdl-layout__tab-ripple-container .mdl-ripple {\n      background-color: rgb(255, 255, 255); }\n\n.mdl-layout__tab-panel {\n  display: block; }\n  .mdl-layout.is-upgraded .mdl-layout__tab-panel {\n    display: none; }\n  .mdl-layout.is-upgraded .mdl-layout__tab-panel.is-active {\n    display: block; }\n";
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
                return lapp.l(
                    'a',
                    { 'class': 'mdl-navigation__link', href: k.url },
                    k.val
                );
            });
        },

        getDrawerContent: function getDrawerContent(props) {
            return props.drawer ? lapp.l(
                'div',
                null,
                lapp.l(
                    'div',
                    { 'class': 'mdl-layout__drawer-button', onClick: actions$5.showDrawer },
                    lapp.l(
                        'i',
                        { 'class': 'material-icons' },
                        'menu'
                    )
                ),
                lapp.l('div', { 'class': "mdl-layout__obfuscator" + state.drawerCls, onClick: actions$5.showDrawer }),
                lapp.l(
                    'div',
                    { 'class': "mdl-layout__drawer" + state.drawerCls },
                    lapp.l(
                        'span',
                        { 'class': 'mdl-layout-title' },
                        props.title
                    ),
                    lapp.l(
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
        return lapp.l(
            'div',
            _extends({ 'class': actions$5.getCls(props) }, filter(props, ctlProps$4)),
            lapp.l(
                'header',
                { 'class': "mdl-layout__header mdl-layout__header--transparent" + (props.drawer ? '' : ' mdl-layout--no-drawer-button') },
                lapp.l(
                    'div',
                    { 'class': 'mdl-layout__header-row' },
                    lapp.l(
                        'span',
                        { 'class': 'mdl-layout-title' },
                        props.title
                    ),
                    lapp.l('div', { 'class': 'mdl-layout-spacer' }),
                    lapp.l(
                        'nav',
                        { 'class': 'mdl-navigation' },
                        actions$5.getNav(props.nav)
                    )
                )
            ),
            actions$5.getDrawerContent(props),
            lapp.l(
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
                return lapp.l(
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
                return lapp.l(
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
        return lapp.l(
            'div',
            _extends({ 'class': actions$6.getCls(props) }, filter(props, ctlProps$5)),
            lapp.l(
                'header',
                { 'class': 'mdl-layout__header' },
                lapp.l(
                    'div',
                    { 'class': 'mdl-layout__header-row' },
                    lapp.l(
                        'span',
                        { 'class': 'mdl-layout-title' },
                        props.title
                    )
                ),
                lapp.l(
                    'div',
                    { 'class': 'mdl-layout__tab-bar mdl-js-ripple-effect' },
                    actions$6.getTab(props)
                )
            ),
            lapp.l(
                'div',
                { 'class': 'mdl-layout__content' },
                actions$6.getTabContent(props.tabs, children)
            )
        );
    };

    var css$6 = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-checkbox {\n  position: relative;\n  z-index: 1;\n  vertical-align: middle;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  height: 24px;\n  margin: 0;\n  padding: 0; }\n  .mdl-checkbox.is-upgraded {\n    padding-left: 24px; }\n\n.mdl-checkbox__input {\n  line-height: 24px; }\n  .mdl-checkbox.is-upgraded .mdl-checkbox__input {\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none; }\n\n.mdl-checkbox__box-outline {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  margin: 0;\n  cursor: pointer;\n  overflow: hidden;\n  border: 2px solid rgba(0, 0, 0, .54);\n  border-radius: 2px;\n  z-index: 2; }\n  .mdl-checkbox.is-checked .mdl-checkbox__box-outline {\n    border: 2px solid rgb(63, 81, 181); }\n  fieldset[disabled] .mdl-checkbox .mdl-checkbox__box-outline,\n  .mdl-checkbox.is-disabled .mdl-checkbox__box-outline {\n    border: 2px solid rgba(0, 0, 0, .26);\n    cursor: auto; }\n\n.mdl-checkbox__focus-helper {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: transparent; }\n  .mdl-checkbox.is-focused .mdl-checkbox__focus-helper {\n    -webkit-box-shadow: 0 0 0px 8px rgba(0, 0, 0, .1);\n            box-shadow: 0 0 0px 8px rgba(0, 0, 0, .1);\n    background-color: rgba(0, 0, 0, .1); }\n  .mdl-checkbox.is-focused.is-checked .mdl-checkbox__focus-helper {\n    -webkit-box-shadow: 0 0 0px 8px rgba(63, 81, 181, .26);\n            box-shadow: 0 0 0px 8px rgba(63, 81, 181, .26);\n    background-color: rgba(63, 81, 181, .26); }\n\n.mdl-checkbox__tick-outline {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==\");\n          mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==\");\n  background: transparent;\n  -webkit-transition-duration: 0.28s;\n          transition-duration: 0.28s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-property: background-image;\n  transition-property: background-image; }\n  .mdl-checkbox.is-checked .mdl-checkbox__tick-outline {\n    background-color: rgb(63, 81, 181);\n    background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K\"); }\n  fieldset[disabled] .mdl-checkbox.is-checked .mdl-checkbox__tick-outline,\n  .mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline {\n    background-color: rgba(0, 0, 0, .26); }\n\n.mdl-checkbox__label {\n  position: relative;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0; }\n  fieldset[disabled] .mdl-checkbox .mdl-checkbox__label,\n  .mdl-checkbox.is-disabled .mdl-checkbox__label {\n    color: rgba(0, 0, 0, .26);\n    cursor: auto; }\n\n.mdl-checkbox__ripple-container {\n  position: absolute;\n  z-index: 2;\n  top: -6px;\n  left: -10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(circle, white, black); }\n  .mdl-checkbox__ripple-container .mdl-ripple {\n    background: rgb(63, 81, 181); }\n  fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container,\n  .mdl-checkbox.is-disabled .mdl-checkbox__ripple-container {\n    cursor: auto; }\n  fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container .mdl-ripple,\n  .mdl-checkbox.is-disabled .mdl-checkbox__ripple-container .mdl-ripple {\n    background: transparent; }\n";
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

        return lapp.l(
            'label',
            _extends({ 'class': actions$7.getCls('mdl-checkbox mdl-js-checkbox is-upgraded', props) }, filter(props, ctlProps$6)),
            lapp.l('input', { type: 'checkbox', 'class': 'mdl-checkbox__input', name: props.name, checked: !!state$2.check, onClick: actions$7.handleClk(props) }),
            lapp.l('span', { 'class': 'mdl-checkbox__focus-helper' }),
            lapp.l(
                'span',
                { 'class': 'mdl-checkbox__box-outline' },
                lapp.l('span', { 'class': 'mdl-checkbox__tick-outline' })
            ),
            lapp.l(
                'span',
                { 'class': 'mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center' },
                lapp.l('span', { 'class': 'mdl-ripple is-animating' })
            ),
            lapp.l(
                'span',
                null,
                props.label
            )
        );
    };

    var css$7 = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-radio {\n  position: relative;\n  font-size: 16px;\n  line-height: 24px;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 24px;\n  margin: 0;\n  padding-left: 0; }\n  .mdl-radio.is-upgraded {\n    padding-left: 24px; }\n\n.mdl-radio__button {\n  line-height: 24px; }\n  .mdl-radio.is-upgraded .mdl-radio__button {\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none; }\n\n.mdl-radio__outer-circle {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  margin: 0;\n  cursor: pointer;\n  border: 2px solid rgba(0, 0, 0, .54);\n  border-radius: 50%;\n  z-index: 2; }\n  .mdl-radio.is-checked .mdl-radio__outer-circle {\n    border: 2px solid rgb(63, 81, 181); }\n  .mdl-radio__outer-circle fieldset[disabled] .mdl-radio,\n  .mdl-radio.is-disabled .mdl-radio__outer-circle {\n    border: 2px solid rgba(0, 0, 0, .26);\n    cursor: auto; }\n\n.mdl-radio__inner-circle {\n  position: absolute;\n  z-index: 1;\n  margin: 0;\n  top: 8px;\n  left: 4px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 8px;\n  height: 8px;\n  cursor: pointer;\n  -webkit-transition-duration: 0.28s;\n          transition-duration: 0.28s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  border-radius: 50%;\n  background: rgb(63, 81, 181); }\n  .mdl-radio.is-checked .mdl-radio__inner-circle {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  fieldset[disabled] .mdl-radio .mdl-radio__inner-circle,\n  .mdl-radio.is-disabled .mdl-radio__inner-circle {\n    background: rgba(0, 0, 0, .26);\n    cursor: auto; }\n  .mdl-radio.is-focused .mdl-radio__inner-circle {\n    -webkit-box-shadow: 0 0 0px 10px rgba(0, 0, 0, .1);\n            box-shadow: 0 0 0px 10px rgba(0, 0, 0, .1); }\n\n.mdl-radio__label {\n  cursor: pointer; }\n  fieldset[disabled] .mdl-radio .mdl-radio__label,\n  .mdl-radio.is-disabled .mdl-radio__label {\n    color: rgba(0, 0, 0, .26);\n    cursor: auto; }\n\n.mdl-radio__ripple-container {\n  position: absolute;\n  z-index: 2;\n  top: -9px;\n  left: -13px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(circle, white, black); }\n  .mdl-radio__ripple-container .mdl-ripple {\n    background: rgb(63, 81, 181); }\n  fieldset[disabled] .mdl-radio .mdl-radio__ripple-container,\n  .mdl-radio.is-disabled .mdl-radio__ripple-container {\n    cursor: auto; }\n  fieldset[disabled] .mdl-radio .mdl-radio__ripple-container .mdl-ripple,\n  .mdl-radio.is-disabled .mdl-radio__ripple-container .mdl-ripple {\n    background: transparent; }\n";
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

        return lapp.l(
            "label",
            _extends({ "class": actions$8.getCls('mdl-radio mdl-js-radio is-upgraded', props) }, filter(props, ctlProps$7)),
            lapp.l("input", { type: "radio", "class": "mdl-radio__button", name: props.name, checked: !!state$3.check, onClick: actions$8.handleClk(props) }),
            lapp.l("span", { "class": "mdl-radio__outer-circle" }),
            lapp.l("span", { "class": "mdl-radio__inner-circle" }),
            lapp.l(
                "span",
                { "class": "mdl-radio__ripple-container mdl-js-ripple-effect mdl-ripple--center" },
                lapp.l("span", { "class": "mdl-ripple is-animating" })
            ),
            lapp.l(
                "span",
                { "class": "mdl-radio__label" },
                props.label
            )
        );
    };

    var css$8 = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-switch {\n  position: relative;\n  z-index: 1;\n  vertical-align: middle;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  height: 24px;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .mdl-switch.is-upgraded {\n    padding-left: 28px; }\n\n.mdl-switch__input {\n  line-height: 24px; }\n  .mdl-switch.is-upgraded .mdl-switch__input {\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none; }\n\n.mdl-switch__track {\n  background: rgba(0, 0, 0, .26);\n  position: absolute;\n  left: 0;\n  top: 5px;\n  height: 14px;\n  width: 36px;\n  border-radius: 14px;\n  cursor: pointer; }\n  .mdl-switch.is-checked .mdl-switch__track {\n    background: rgba(63, 81, 181, .5); }\n  .mdl-switch__track fieldset[disabled] .mdl-switch,\n  .mdl-switch.is-disabled .mdl-switch__track {\n    background: rgba(0, 0, 0, .12);\n    cursor: auto; }\n\n.mdl-switch__thumb {\n  background: rgb(250, 250, 250);\n  position: absolute;\n  left: 0;\n  top: 2px;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n  -webkit-transition-duration: 0.28s;\n          transition-duration: 0.28s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-property: left;\n  transition-property: left; }\n  .mdl-switch.is-checked .mdl-switch__thumb {\n    background: rgb(63, 81, 181);\n    left: 16px;\n    -webkit-box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);\n            box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12); }\n  .mdl-switch__thumb fieldset[disabled] .mdl-switch,\n  .mdl-switch.is-disabled .mdl-switch__thumb {\n    background: rgb(189, 189, 189);\n    cursor: auto; }\n\n.mdl-switch__focus-helper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-4px, -4px);\n          transform: translate(-4px, -4px);\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: transparent; }\n  .mdl-switch.is-focused .mdl-switch__focus-helper {\n    -webkit-box-shadow: 0 0 0px 20px rgba(0, 0, 0, .1);\n            box-shadow: 0 0 0px 20px rgba(0, 0, 0, .1);\n    background-color: rgba(0, 0, 0, .1); }\n  .mdl-switch.is-focused.is-checked .mdl-switch__focus-helper {\n    -webkit-box-shadow: 0 0 0px 20px rgba(63, 81, 181, .26);\n            box-shadow: 0 0 0px 20px rgba(63, 81, 181, .26);\n    background-color: rgba(63, 81, 181, .26); }\n\n.mdl-switch__label {\n  position: relative;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0;\n  left: 24px; }\n  .mdl-switch__label fieldset[disabled] .mdl-switch,\n  .mdl-switch.is-disabled .mdl-switch__label {\n    color: rgb(189, 189, 189);\n    cursor: auto; }\n\n.mdl-switch__ripple-container {\n  position: absolute;\n  z-index: 2;\n  top: -12px;\n  left: -14px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(circle, white, black);\n  -webkit-transition-duration: 0.40s;\n          transition-duration: 0.40s;\n  -webkit-transition-timing-function: step-end;\n          transition-timing-function: step-end;\n  -webkit-transition-property: left;\n  transition-property: left; }\n  .mdl-switch__ripple-container .mdl-ripple {\n    background: rgb(63, 81, 181); }\n  .mdl-switch__ripple-container fieldset[disabled] .mdl-switch,\n  .mdl-switch.is-disabled .mdl-switch__ripple-container {\n    cursor: auto; }\n  fieldset[disabled] .mdl-switch .mdl-switch__ripple-container .mdl-ripple,\n  .mdl-switch.is-disabled .mdl-switch__ripple-container .mdl-ripple {\n    background: transparent; }\n  .mdl-switch.is-checked .mdl-switch__ripple-container {\n    left: 2px; }\n";
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

        return lapp.l(
            "label",
            _extends({ "class": actions$9.getCls('mdl-switch mdl-js-switch mdl-js-ripple-effect is-upgraded', props) }, filter(props, ctlProps$8)),
            lapp.l("input", { type: "checkbox", "class": "mdl-switch__input", name: props.name, checked: !!state$4.check, onClick: actions$9.handleClk(props) }),
            lapp.l("div", { "class": "mdl-switch__track" }),
            lapp.l(
                "div",
                { "class": "mdl-switch__thumb" },
                lapp.l("span", { "class": "mdl-switch__focus-helper" })
            ),
            lapp.l(
                "span",
                { "class": "mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" },
                lapp.l("span", { "class": "mdl-ripple is-animating" })
            ),
            lapp.l(
                "span",
                { "class": "mdl-switch__label" },
                props.label
            )
        );
    };

    var css$9 = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-progress {\n  display: block;\n  position: relative;\n  height: 4px;\n  width: 500px;\n  max-width: 100%; }\n\n.mdl-progress > .bar {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 0%;\n  -webkit-transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1); }\n\n.mdl-progress > .progressbar {\n  background-color: rgb(63, 81, 181);\n  z-index: 1;\n  left: 0; }\n\n.mdl-progress > .bufferbar {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, .7)), to(rgba(255, 255, 255, .7))), -webkit-gradient(linear, left top, right top, from(rgb(63, 81, 181)), to(rgb(63, 81, 181)));\n  background-image: linear-gradient(to right, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), linear-gradient(to right, rgb(63, 81, 181), rgb(63, 81, 181));\n  z-index: 0;\n  left: 0; }\n\n.mdl-progress > .auxbar {\n  right: 0; }\n\n@supports (-webkit-appearance: none) {\n  .mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate) > .auxbar,\n  .mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate) > .auxbar {\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, .7)), to(rgba(255, 255, 255, .7))), -webkit-gradient(linear, left top, right top, from(rgb(63, 81, 181)), to(rgb(63, 81, 181)));\n    background-image: linear-gradient(to right, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), linear-gradient(to right, rgb(63, 81, 181), rgb(63, 81, 181));\n    -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");\n            mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\"); } }\n\n.mdl-progress:not(.mdl-progress--indeterminate) > .auxbar,\n.mdl-progress:not(.mdl-progress__indeterminate) > .auxbar {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, .9)), to(rgba(255, 255, 255, .9))), -webkit-gradient(linear, left top, right top, from(rgb(63, 81, 181)), to(rgb(63, 81, 181)));\n  background-image: linear-gradient(to right, rgba(255, 255, 255, .9), rgba(255, 255, 255, .9)), linear-gradient(to right, rgb(63, 81, 181), rgb(63, 81, 181)); }\n\n.mdl-progress.mdl-progress--indeterminate > .bar1,\n.mdl-progress.mdl-progress__indeterminate > .bar1 {\n  background-color: rgb(63, 81, 181);\n  -webkit-animation-name: indeterminate1;\n          animation-name: indeterminate1;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n.mdl-progress.mdl-progress--indeterminate > .bar3,\n.mdl-progress.mdl-progress__indeterminate > .bar3 {\n  background-image: none;\n  background-color: rgb(63, 81, 181);\n  -webkit-animation-name: indeterminate2;\n          animation-name: indeterminate2;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n@-webkit-keyframes indeterminate1 {\n  0% {\n    left: 0%;\n    width: 0%; }\n  50% {\n    left: 25%;\n    width: 75%; }\n  75% {\n    left: 100%;\n    width: 0%; } }\n\n@keyframes indeterminate1 {\n  0% {\n    left: 0%;\n    width: 0%; }\n  50% {\n    left: 25%;\n    width: 75%; }\n  75% {\n    left: 100%;\n    width: 0%; } }\n\n@-webkit-keyframes indeterminate2 {\n  0% {\n    left: 0%;\n    width: 0%; }\n  50% {\n    left: 0%;\n    width: 0%; }\n  75% {\n    left: 0%;\n    width: 25%; }\n  100% {\n    left: 100%;\n    width: 0%; } }\n\n@keyframes indeterminate2 {\n  0% {\n    left: 0%;\n    width: 0%; }\n  50% {\n    left: 0%;\n    width: 0%; }\n  75% {\n    left: 0%;\n    width: 25%; }\n  100% {\n    left: 100%;\n    width: 0%; } }\n";
    styleInject(css$9);

    var ctlProps$9 = ['class', 'indeterminate', 'pend'];

    var actions$10 = {
        getCls: function getCls(props) {
            return "mdl-progress mdl-js-progress is-upgraded" + (props['indeterminate'] ? ' mdl-progress--indeterminate' : "") + (props['class'] ? ' ' + props['class'] : "");
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
        return lapp.l(
            'div',
            _extends({ 'class': actions$10.getCls(props) }, filter(props, ctlProps$9)),
            lapp.l('div', { 'class': 'progressbar bar bar1', style: "width:" + (props.percent || 10) + "%;" }),
            lapp.l('div', { 'class': 'bufferbar bar bar2', style: "width: " + (100 - (props.pend || 0)) + "%;" }),
            lapp.l('div', { 'class': 'auxbar bar bar3', style: "width: " + (props.pend || 0) + "%;" })
        );
    };

    var css$10 = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-tooltip {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: top center;\n          transform-origin: top center;\n  z-index: 999;\n  background: rgba(97, 97, 97, .9);\n  border-radius: 2px;\n  color: rgb(255, 255, 255);\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 14px;\n  max-width: 170px;\n  position: fixed;\n  top: -500px;\n  left: -500px;\n  padding: 8px;\n  text-align: center; }\n\n.mdl-tooltip.is-active {\n  -webkit-animation: pulse 200ms cubic-bezier(0, 0, 0.2, 1) forwards;\n          animation: pulse 200ms cubic-bezier(0, 0, 0.2, 1) forwards; }\n\n.mdl-tooltip--large {\n  line-height: 14px;\n  font-size: 14px;\n  padding: 16px; }\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.99);\n            transform: scale(0.99); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.99);\n            transform: scale(0.99); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n    visibility: visible; } }\n";
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
        return lapp.l(
            'span',
            _extends({ 'class': actions$11.getCls(props), onShow: actions$11.onShow(props) }, filter(props, ctlProps$10)),
            children
        );
    };

    var css$11 = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-textfield {\n  position: relative;\n  font-size: 16px;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 300px;\n  max-width: 100%;\n  margin: 0;\n  padding: 20px 0; }\n  .mdl-textfield .mdl-button {\n    position: absolute;\n    bottom: 20px; }\n\n.mdl-textfield--align-right {\n  text-align: right; }\n\n.mdl-textfield--full-width {\n  width: 100%; }\n\n.mdl-textfield--expandable {\n  min-width: 32px;\n  width: auto;\n  min-height: 32px; }\n  .mdl-textfield--expandable .mdl-button--icon {\n    top: 16px; }\n\n.mdl-textfield__input {\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, .12);\n  display: block;\n  font-size: 16px;\n  font-family: \"Helvetica\", \"Arial\", sans-serif;\n  margin: 0;\n  padding: 4px 0;\n  width: 100%;\n  background: none;\n  text-align: left;\n  color: inherit; }\n  .mdl-textfield__input[type=\"number\"] {\n    -moz-appearance: textfield; }\n  .mdl-textfield__input[type=\"number\"]::-webkit-inner-spin-button, .mdl-textfield__input[type=\"number\"]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0; }\n  .mdl-textfield.is-focused .mdl-textfield__input {\n    outline: none; }\n  .mdl-textfield.is-invalid .mdl-textfield__input {\n    border-color: rgb(213, 0, 0);\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n  fieldset[disabled] .mdl-textfield .mdl-textfield__input,\n  .mdl-textfield.is-disabled .mdl-textfield__input {\n    background-color: transparent;\n    border-bottom: 1px dotted rgba(0, 0, 0, .12);\n    color: rgba(0, 0, 0, .26); }\n\n.mdl-textfield textarea.mdl-textfield__input {\n  display: block; }\n\n.mdl-textfield__label {\n  bottom: 0;\n  color: rgba(0, 0, 0, .26);\n  font-size: 16px;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  position: absolute;\n  display: block;\n  top: 24px;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left; }\n  .mdl-textfield.is-dirty .mdl-textfield__label,\n  .mdl-textfield.has-placeholder .mdl-textfield__label {\n    visibility: hidden; }\n  .mdl-textfield--floating-label .mdl-textfield__label {\n    -webkit-transition-duration: 0.2s;\n            transition-duration: 0.2s;\n    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  .mdl-textfield--floating-label.has-placeholder .mdl-textfield__label {\n    -webkit-transition: none;\n    transition: none; }\n  fieldset[disabled] .mdl-textfield .mdl-textfield__label,\n  .mdl-textfield.is-disabled.is-disabled .mdl-textfield__label {\n    color: rgba(0, 0, 0, .26); }\n  .mdl-textfield--floating-label.is-focused .mdl-textfield__label,\n  .mdl-textfield--floating-label.is-dirty .mdl-textfield__label,\n  .mdl-textfield--floating-label.has-placeholder .mdl-textfield__label {\n    color: rgb(63, 81, 181);\n    font-size: 12px;\n    top: 4px;\n    visibility: visible; }\n  .mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label,\n  .mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,\n  .mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label {\n    top: -16px; }\n  .mdl-textfield--floating-label.is-invalid .mdl-textfield__label {\n    color: rgb(213, 0, 0);\n    font-size: 12px; }\n  .mdl-textfield__label:after {\n    background-color: rgb(63, 81, 181);\n    bottom: 20px;\n    content: '';\n    height: 2px;\n    left: 45%;\n    position: absolute;\n    -webkit-transition-duration: 0.2s;\n            transition-duration: 0.2s;\n    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    visibility: hidden;\n    width: 10px; }\n  .mdl-textfield.is-focused .mdl-textfield__label:after {\n    left: 0;\n    visibility: visible;\n    width: 100%; }\n  .mdl-textfield.is-invalid .mdl-textfield__label:after {\n    background-color: rgb(213, 0, 0); }\n\n.mdl-textfield__error {\n  color: rgb(213, 0, 0);\n  position: absolute;\n  font-size: 12px;\n  margin-top: 3px;\n  visibility: hidden;\n  display: block; }\n  .mdl-textfield.is-invalid .mdl-textfield__error {\n    visibility: visible; }\n\n.mdl-textfield__expandable-holder {\n  display: inline-block;\n  position: relative;\n  margin-left: 32px;\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-block;\n  max-width: 0.1px; }\n  .mdl-textfield.is-focused .mdl-textfield__expandable-holder, .mdl-textfield.is-dirty .mdl-textfield__expandable-holder {\n    max-width: 600px; }\n  .mdl-textfield__expandable-holder .mdl-textfield__label:after {\n    bottom: 0; }\n";
    styleInject(css$11);

    var ctlProps$11 = ['expandable', 'floating-label', 'class', 'label', 'pattern', 'errorTips', 'textarea', 'rows', 'maxrows', 'noBlur'];

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
                            return lapp.l('textarea', { onInput: actions.handleInput(state), onFocus: actions.handleFocus(state), onBlur: actions.handleBlur(props, state), 'class': 'mdl-textfield__input', type: 'text', rows: props.rows || 3, maxrows: props.maxrows || 3 });
                        } else {
                            return lapp.l('input', { onClick: actions.handleClick(props), onInput: actions.handleInput(state), onFocus: actions.handleFocus(state), onBlur: actions.handleBlur(props, state), 'class': 'mdl-textfield__input', type: 'text', pattern: props.pattern });
                        }
                    },
                    handleFocus: function handleFocus(state) {
                        return function (e) {
                            state.focusCls = " is-focused";
                            TextfieldSub.$update();
                        };
                    },
                    handleBlur: function handleBlur(props, state) {
                        return function (e) {
                            if (!props.noBlur) {
                                state.focusCls = "";
                                TextfieldSub.$update();
                            }
                        };
                    },
                    handleClick: function handleClick(props) {
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
                            return lapp.l(
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
                    return lapp.l(
                        'div',
                        _extends({ 'class': actions.getCls(props, state) }, filter(props, ctlProps$11)),
                        actions.getExpand(props, children),
                        lapp.l(
                            'div',
                            { 'class': props.expandable ? "mdl-textfield__expandable-holder" : "" },
                            lapp.l(
                                'label',
                                { 'class': 'mdl-textfield__label' },
                                props.label
                            ),
                            actions.getType(props, state),
                            lapp.l(
                                'span',
                                { 'class': 'mdl-textfield__error' },
                                props.errorTips || ""
                            )
                        )
                    );
                };
                lapp.app(dom, TextfieldSub);
            };
        }
    };

    var Textfield = function Textfield(_ref) {
        var props = _ref.props,
            children = _ref.children;
        return lapp.l('span', { onShow: act.onShow(props, children), 'class': act.getCls(props) });
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

    var css$12 = ".c-scrim {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, .541176);\n  opacity: 0;\n  -webkit-transition: 200ms ease opacity;\n  transition: 200ms ease opacity;\n  will-change: opacity; }\n  .c-scrim--shown {\n    opacity: 1; }\n\n.c-datepicker {\n  z-index: 999;\n  min-height: 610px;\n  position: fixed;\n  left: 50%;\n  top: 45%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: white;\n  border: 0;\n  width: 300px;\n  text-align: center;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-box-shadow: 0 14px 45px rgba(0, 0, 0, .25), 0 10px 18px rgba(0, 0, 0, .22);\n          box-shadow: 0 14px 45px rgba(0, 0, 0, .25), 0 10px 18px rgba(0, 0, 0, .22);\n  border-radius: 2px;\n  will-change: opacity;\n  -webkit-transition: 200ms ease-in-out opacity, 200ms ease-in-out top;\n  transition: 200ms ease-in-out opacity, 200ms ease-in-out top; }\n  .c-datepicker--open {\n    opacity: 1;\n    top: 50%; }\n\n.c-datepicker__header {\n  position: relative; }\n\n.c-datepicker__header-day {\n  height: 32px;\n  background: #0097a7;\n  color: white;\n  line-height: 32px;\n  font-size: 12px;\n  font-weight: 200;\n  letter-spacing: 0.3px; }\n\n.c-datepicker__header::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.c-datepicker__header-date {\n  background: #00bcd4;\n  height: 150px;\n  padding: 16px 0; }\n\n.rd-month-label {\n  height: 56px;\n  line-height: 56px;\n  font-size: 14px;\n  font-weight: 800; }\n\n.c-datepicker__back,\n.c-datepicker__next,\n.c-datepicker__toggle {\n  position: absolute;\n  border: 0;\n  background: white;\n  font-family: 'Material Icons';\n  text-rendering: optimizeLegibility;\n  -webkit-font-feature-settings: \"liga\" 1;\n          font-feature-settings: \"liga\" 1;\n  font-style: normal;\n  text-transform: none;\n  line-height: 1;\n  font-size: 24px;\n  width: 56px;\n  height: 56px;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  cursor: pointer; }\n  .c-datepicker__back:focus,\n  .c-datepicker__next:focus,\n  .c-datepicker__toggle:focus {\n    outline: 0; }\n\n.c-datepicker__back {\n  left: 0; }\n\n.c-datepicker__next {\n  right: 0; }\n\n.c-datepicker__back:before {\n  content: 'chevron_left'; }\n\n.c-datepicker__next:after {\n  content: 'chevron_right'; }\n\n.c-datepicker--show-time:after {\n  content: 'access_time';\n  color: white;\n  visibility: visible; }\n\n.c-datepicker--show-calendar:after {\n  content: 'grid_on';\n  color: white;\n  visibility: visible; }\n\n.c-datepicker__header-date span {\n  display: block;\n  color: white;\n  margin: 0;\n  -webkit-transition: opacity 100ms ease-in-out;\n  transition: opacity 100ms ease-in-out; }\n\n.c-datepicker__header-date__month {\n  cursor: pointer;\n  font-size: 24px;\n  opacity: 0.6; }\n\n.c-datepicker__header-date__day {\n  cursor: pointer;\n  font-size: 64px;\n  opacity: 0.6; }\n\n.c-datepicker__header-date__time {\n  font-size: 25px;\n  opacity: 0.6; }\n  .c-datepicker__header-date__time > span {\n    display: inline-block; }\n\n.c-datepicker__header-date__hours,\n.c-datepicker__header-date__minutes {\n  cursor: pointer; }\n\n.c-datepicker--show-time.is-selected ~ .c-datepicker__header .c-datepicker__header-date__time {\n  opacity: 1; }\n  .c-datepicker--show-time.is-selected ~ .c-datepicker__header .c-datepicker__header-date__time .c-datepicker__header-date__hours,\n  .c-datepicker--show-time.is-selected ~ .c-datepicker__header .c-datepicker__header-date__time .c-datepicker__header-date__minutes {\n    opacity: .6; }\n    .c-datepicker--show-time.is-selected ~ .c-datepicker__header .c-datepicker__header-date__time .c-datepicker__header-date__hours.active,\n    .c-datepicker--show-time.is-selected ~ .c-datepicker__header .c-datepicker__header-date__time .c-datepicker__header-date__minutes.active {\n      opacity: 1; }\n\n.c-datepicker--show-calendar.is-selected ~ .c-datepicker__header .c-datepicker__header-date__month,\n.c-datepicker--show-calendar.is-selected ~ .c-datepicker__header .c-datepicker__header-date__day {\n  opacity: 1; }\n\n.modal-btns {\n  padding: 20px;\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n\n.c-datepicker__day-body {\n  font-size: 12px;\n  color: rgba(0, 0, 0, .8);\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n  position: relative; }\n  .c-datepicker__day-body:hover {\n    /* color: white; */ }\n\n.c-datepicker__day--selected::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: rgba(0, 0, 0, .05); }\n\n.c-datepicker__day-head {\n  color: rgba(0, 0, 0, .54);\n  font-size: 12px;\n  height: 36px; }\n\n.c-datepicker__day-head,\nc-datepicker__day-body {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n.modal-btns {\n  float: right; }\n\n.c-btn {\n  display: inline-block;\n  min-width: 56px;\n  cursor: pointer; }\n\n.rd-day-prev-month {\n  opacity: 0.1;\n  pointer-events: none; }\n\n.rd-day-next-month {\n  opacity: 0.1;\n  pointer-events: none; }\n\n.c-datepicker__calendar {\n  height: 300px; }\n\n.c-datepicker__date {\n  position: absolute;\n  left: 0;\n  right: 0; }\n\n.c-datepicker__days {\n  margin: 10px 20px; }\n\n.c-datepicker__header-toggle {\n  position: absolute;\n  top: 50%;\n  color: white;\n  cursor: pointer; }\n  .c-datepicker__header-toggle i {\n    font-size: 26px; }\n\n.c-datepicker__header-toggle--left {\n  left: 20px; }\n\n.c-datepicker__header-toggle--right {\n  right: 20px; }\n\n.c-datepicker__header-toggle--inactive {\n  opacity: 0.2; }\n\n.c-datepicker__toggle {\n  top: 170px;\n  width: 36px;\n  height: 30px;\n  visibility: hidden;\n  opacity: 0.5;\n  z-index: 1;\n  -webkit-transition: opacity 200ms ease-in-out;\n  transition: opacity 200ms ease-in-out; }\n\n.c-datepicker__toggle--right {\n  right: 10px; }\n\n.c-datepicker__toggle--left {\n  left: 10px; }\n\n.c-datepicker__toggle.is-selected {\n  opacity: 1; }\n\n.c-datepicker--show-time.is-selected ~ .c-datepicker__calendar {\n  display: none; }\n\n.c-datepicker--show-calendar.is-selected ~ .c-datepicker__clock {\n  display: none; }\n\n.c-datepicker__clock {\n  position: relative;\n  /* [1] */\n  width: 200px;\n  height: 200px;\n  padding: 0;\n  border-radius: 50%;\n  list-style: none;\n  /* [2] */\n  font-size: 14px;\n  line-height: 50px;\n  padding: 160px 0 20px 0;\n  margin: 0 auto; }\n  .c-datepicker__clock .c-datepicker__clock__num {\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 50px;\n    height: 50px;\n    margin: -25px;\n    z-index: 98; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(1) {\n      -webkit-transform: rotate(0deg) translate(100px) rotate(-0deg);\n              transform: rotate(0deg) translate(100px) rotate(-0deg); }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(1).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(270deg);\n              transform: translate(-50%, -50%) rotate(270deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(1).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(1):hover ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(270deg);\n              transform: translate(-50%, -50%) rotate(270deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(1):hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(2) {\n      -webkit-transform: rotate(30deg) translate(100px) rotate(-30deg);\n              transform: rotate(30deg) translate(100px) rotate(-30deg); }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(2).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(300deg);\n              transform: translate(-50%, -50%) rotate(300deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(2).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(2):hover ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(300deg);\n              transform: translate(-50%, -50%) rotate(300deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(2):hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(3) {\n      -webkit-transform: rotate(60deg) translate(100px) rotate(-60deg);\n              transform: rotate(60deg) translate(100px) rotate(-60deg); }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(3).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(330deg);\n              transform: translate(-50%, -50%) rotate(330deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(3).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(3):hover ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(330deg);\n              transform: translate(-50%, -50%) rotate(330deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(3):hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(4) {\n      -webkit-transform: rotate(90deg) translate(100px) rotate(-90deg);\n              transform: rotate(90deg) translate(100px) rotate(-90deg); }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(4).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(360deg);\n              transform: translate(-50%, -50%) rotate(360deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(4).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(4):hover ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(360deg);\n              transform: translate(-50%, -50%) rotate(360deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(4):hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(5) {\n      -webkit-transform: rotate(120deg) translate(100px) rotate(-120deg);\n              transform: rotate(120deg) translate(100px) rotate(-120deg); }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(5).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(390deg);\n              transform: translate(-50%, -50%) rotate(390deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(5).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(5):hover ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(390deg);\n              transform: translate(-50%, -50%) rotate(390deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(5):hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(6) {\n      -webkit-transform: rotate(150deg) translate(100px) rotate(-150deg);\n              transform: rotate(150deg) translate(100px) rotate(-150deg); }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(6).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(420deg);\n              transform: translate(-50%, -50%) rotate(420deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(6).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(6):hover ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(420deg);\n              transform: translate(-50%, -50%) rotate(420deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(6):hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(7) {\n      -webkit-transform: rotate(180deg) translate(100px) rotate(-180deg);\n              transform: rotate(180deg) translate(100px) rotate(-180deg); }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(7).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(450deg);\n              transform: translate(-50%, -50%) rotate(450deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(7).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(7):hover ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(450deg);\n              transform: translate(-50%, -50%) rotate(450deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(7):hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(8) {\n      -webkit-transform: rotate(210deg) translate(100px) rotate(-210deg);\n              transform: rotate(210deg) translate(100px) rotate(-210deg); }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(8).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(480deg);\n              transform: translate(-50%, -50%) rotate(480deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(8).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(8):hover ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(480deg);\n              transform: translate(-50%, -50%) rotate(480deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(8):hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(9) {\n      -webkit-transform: rotate(240deg) translate(100px) rotate(-240deg);\n              transform: rotate(240deg) translate(100px) rotate(-240deg); }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(9).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(510deg);\n              transform: translate(-50%, -50%) rotate(510deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(9).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(9):hover ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(510deg);\n              transform: translate(-50%, -50%) rotate(510deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(9):hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(10) {\n      -webkit-transform: rotate(270deg) translate(100px) rotate(-270deg);\n              transform: rotate(270deg) translate(100px) rotate(-270deg); }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(10).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(540deg);\n              transform: translate(-50%, -50%) rotate(540deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(10).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(10):hover ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(540deg);\n              transform: translate(-50%, -50%) rotate(540deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(10):hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(11) {\n      -webkit-transform: rotate(300deg) translate(100px) rotate(-300deg);\n              transform: rotate(300deg) translate(100px) rotate(-300deg); }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(11).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(570deg);\n              transform: translate(-50%, -50%) rotate(570deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(11).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(11):hover ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(570deg);\n              transform: translate(-50%, -50%) rotate(570deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(11):hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(12) {\n      -webkit-transform: rotate(330deg) translate(100px) rotate(-330deg);\n              transform: rotate(330deg) translate(100px) rotate(-330deg); }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(12).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(600deg);\n              transform: translate(-50%, -50%) rotate(600deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(12).c-datepicker__clock__num--active:not(.hide-hand) ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n    .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(12):hover ~ .c-datepicker__clock-hands {\n      -webkit-transform: translate(-50%, -50%) rotate(600deg);\n              transform: translate(-50%, -50%) rotate(600deg); }\n      .c-datepicker__clock .c-datepicker__clock__num:nth-of-type(12):hover ~ .c-datepicker__clock-hands .c-datepicker__hour-hand {\n        opacity: 1;\n        background: #00bcd4; }\n  .c-datepicker__clock::before {\n    content: \"\";\n    position: absolute;\n    top: 70px;\n    left: -20px;\n    width: 240px;\n    height: 240px;\n    background: rgba(0, 0, 0, .05);\n    border-radius: 50%; }\n\n.u-hover-ball-effect, .c-datepicker__day-body,\n.c-datepicker__clock__num, .c-datepicker__clock__am-pm-toggle label {\n  position: relative;\n  cursor: pointer; }\n  .u-hover-ball-effect:before, .c-datepicker__day-body:before,\n  .c-datepicker__clock__num:before, .c-datepicker__clock__am-pm-toggle label:before {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 0%;\n    height: 0%;\n    border-radius: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -webkit-transition: width 100ms ease-in-out, height 100ms ease-in-out;\n    transition: width 100ms ease-in-out, height 100ms ease-in-out; }\n  .u-hover-ball-effect:hover, .c-datepicker__day-body:hover,\n  .c-datepicker__clock__num:hover, .c-datepicker__clock__am-pm-toggle label:hover {\n    color: white; }\n    .u-hover-ball-effect:hover:before, .c-datepicker__day-body:hover:before,\n    .c-datepicker__clock__num:hover:before, .c-datepicker__clock__am-pm-toggle label:hover:before {\n      background: #00bcd4;\n      width: 35px;\n      height: 35px;\n      z-index: -1; }\n\n.c-datepicker__day-body--active:not(.hide-hand),\n.c-datepicker__clock__num--active:not(.hide-hand) {\n  color: white; }\n  .c-datepicker__day-body--active:not(.hide-hand):before,\n  .c-datepicker__clock__num--active:not(.hide-hand):before {\n    background: #00bcd4;\n    width: 35px;\n    height: 35px;\n    z-index: -1; }\n\n.c-datepicker__clock-hands {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%) rotate(180deg);\n          transform: translate(-50%, -50%) rotate(180deg);\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #0097a7; }\n\n.c-datepicker__hour-hand {\n  position: absolute;\n  opacity: 0;\n  height: 78px;\n  width: 2px;\n  background: #00bcd4;\n  left: 4px;\n  top: 10px; }\n\n.c-datepicker__clock__minutes {\n  display: none;\n  height: 200px;\n  margin: -69px 0 0 0;\n  width: 200px;\n  display: none; }\n  .c-datepicker__clock__minutes.active {\n    display: block; }\n\n.c-datepicker__clock__hours {\n  height: 200px;\n  margin: -69px 0 0 0;\n  width: 200px;\n  display: none; }\n  .c-datepicker__clock__hours.active {\n    display: block; }\n\n.c-datepicker__mask {\n  width: 127px;\n  height: 132px;\n  position: absolute;\n  top: 122px;\n  left: 37px;\n  z-index: 99; }\n  .c-datepicker__mask:after {\n    content: ' ';\n    width: 156px;\n    height: 70px;\n    display: block;\n    position: absolute;\n    top: 32px;\n    left: 0;\n    margin-left: -13px; }\n  .c-datepicker__mask:before {\n    content: ' ';\n    width: 75px;\n    height: 158px;\n    display: block;\n    position: absolute;\n    top: 6px;\n    left: 28px;\n    margin-top: -18px; }\n\n.c-datepicker__clock--show-minutes .c-datepicker__clock__minutes {\n  visibility: visible; }\n\n.c-datepicker__clock--show-minutes .c-datepicker__clock__hours {\n  visibility: hidden; }\n\n.c-datepicker__clock--show-hours .c-datepicker__clock__minutes {\n  visibility: hidden; }\n\n.c-datepicker__clock--show-hours .c-datepicker__clock__hours {\n  visibility: visible; }\n\n.c-datepicker__clock__am-pm-toggle {\n  position: absolute;\n  top: 0;\n  left: 10px;\n  right: 10px;\n  height: 40px;\n  padding: 20px;\n  line-height: 40px; }\n  .c-datepicker__clock__am-pm-toggle label {\n    width: 40px;\n    position: absolute; }\n    .c-datepicker__clock__am-pm-toggle label:nth-child(1) {\n      left: 0; }\n    .c-datepicker__clock__am-pm-toggle label:nth-child(2) {\n      right: 0; }\n    .c-datepicker__clock__am-pm-toggle label.c-datepicker__toggle--checked::after {\n      content: \"\";\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 0%;\n      height: 0%;\n      border-radius: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      width: 36px;\n      height: 36px;\n      z-index: -1;\n      background: rgba(0, 0, 0, .05); }\n";
    styleInject(css$12);

    var ESC_KEY = 27;

    var prefix = 'c-datepicker';
    var defaults$1 = function defaults$$1() {
        return {
            default: moment().startOf('hour'),
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
            format: 'YYYY-MM-DD',
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

            var styles = Object.assign(defaults$1().styles, options.styles);
            _this.options = Object.assign(defaults$1(), options);
            _this.options.styles = styles;

            // listen to any event
            _this.on('click', function (evtName, evtData) {
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
                if (Array.isArray(container)) container = container[0];
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
                if (!this.scrimEl) {
                    var scrimEl = scrimTemplate(this.options);
                    _appendTemplate(document.body, scrimEl);
                    _appendTemplate(this.options.container, popupTemplate());
                }
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
                    this.value = moment(0);
                    this.setDate(this.options.default);
                    this.setTime(this.options.default);
                } else {
                    this.setDate(this.value);
                    this.setTime(this.value);
                }

                this.initializeRome(this.$('.' + this.options.styles.container), this.options.dateValidator);
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
                    _this2.pickerEl.remove();
                    _this2.scrimEl.remove();
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
                var newValue = moment(this.value);
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
                var newValue = moment(this.value);
                var number = parseInt(e.currentTarget.getAttribute('data-number'), 10);

                newValue.minute(number);
                this.set(newValue);
                return this;
            }
        }, {
            key: 'onChangeDate',
            value: function onChangeDate(dateString) {
                var newValue = moment(this.value);

                var _dateString$split = dateString.split('-'),
                    _dateString$split2 = slicedToArray(_dateString$split, 3),
                    year = _dateString$split2[0],
                    month = _dateString$split2[1],
                    date = _dateString$split2[2];

                newValue.set({
                    year: year,
                    month: month - 1,
                    date: date
                });

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
                var newValue = moment(this.value);
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
                var newValue = moment(this.value);
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
                return moment(this.value);
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

                var m = moment(value);

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
                var m = moment(date);
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
                var m = moment(time);
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

    // .on('submit', (val) => console.log(`data: ${val}`))
    // .on('open', () => console.log('opened'))
    // .on('close', () => console.log('closed'));

    var ctlProps$12 = ['class', 'format'];
    var acts = {
        getCls: function getCls(props) {
            return props.class ? '' + props.class : "";
        },
        onShow: function onShow(props, children) {
            return function (dom) {
                var picker = new DateTimePicker();

                var actions = {
                    handleClick: function handleClick(props) {
                        return function (e) {
                            picker.open();

                            picker.on('submit', function (val) {
                                e.target.value = moment(val).format(props.format || 'YYYY-MM-DD HH:mm:ss');
                                props.onChange && props.onChange(val);
                            });
                            DatePicker.$update();
                        };
                    }
                };
                var DatePicker = function DatePicker() {
                    return lapp.l(
                        Textfield,
                        _extends({ onClick: actions.handleClick(props), noBlur: true }, filter(props, ctlProps$12)),
                        children
                    );
                };
                lapp.app(dom, DatePicker);
            };
        }
    };

    var DatetimePicker = function DatetimePicker(_ref) {
        var props = _ref.props,
            children = _ref.children;
        return lapp.l('span', { onShow: acts.onShow(props, children), 'class': acts.getCls(props) });
    };

    var css$13 = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-shadow--2dp {\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12); }\n\n.mdl-shadow--3dp {\n  -webkit-box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);\n          box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12); }\n\n.mdl-shadow--4dp {\n  -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);\n          box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2); }\n\n.mdl-shadow--6dp {\n  -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .2);\n          box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .2); }\n\n.mdl-shadow--8dp {\n  -webkit-box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2);\n          box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2); }\n\n.mdl-shadow--16dp {\n  -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);\n          box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2); }\n\n.mdl-shadow--24dp {\n  -webkit-box-shadow: 0 9px 46px 8px rgba(0, 0, 0, .14), 0 11px 15px -7px rgba(0, 0, 0, .12), 0 24px 38px 3px rgba(0, 0, 0, .2);\n          box-shadow: 0 9px 46px 8px rgba(0, 0, 0, .14), 0 11px 15px -7px rgba(0, 0, 0, .12), 0 24px 38px 3px rgba(0, 0, 0, .2); }\n";
    styleInject(css$13);

    var css$14 = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent on one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-color-text--red {\n  color: rgb(244, 67, 54) !important; }\n\n.mdl-color--red {\n  background-color: rgb(244, 67, 54) !important; }\n\n.mdl-color-text--red-50 {\n  color: rgb(255, 235, 238) !important; }\n\n.mdl-color--red-50 {\n  background-color: rgb(255, 235, 238) !important; }\n\n.mdl-color-text--red-100 {\n  color: rgb(255, 205, 210) !important; }\n\n.mdl-color--red-100 {\n  background-color: rgb(255, 205, 210) !important; }\n\n.mdl-color-text--red-200 {\n  color: rgb(239, 154, 154) !important; }\n\n.mdl-color--red-200 {\n  background-color: rgb(239, 154, 154) !important; }\n\n.mdl-color-text--red-300 {\n  color: rgb(229, 115, 115) !important; }\n\n.mdl-color--red-300 {\n  background-color: rgb(229, 115, 115) !important; }\n\n.mdl-color-text--red-400 {\n  color: rgb(239, 83, 80) !important; }\n\n.mdl-color--red-400 {\n  background-color: rgb(239, 83, 80) !important; }\n\n.mdl-color-text--red-500 {\n  color: rgb(244, 67, 54) !important; }\n\n.mdl-color--red-500 {\n  background-color: rgb(244, 67, 54) !important; }\n\n.mdl-color-text--red-600 {\n  color: rgb(229, 57, 53) !important; }\n\n.mdl-color--red-600 {\n  background-color: rgb(229, 57, 53) !important; }\n\n.mdl-color-text--red-700 {\n  color: rgb(211, 47, 47) !important; }\n\n.mdl-color--red-700 {\n  background-color: rgb(211, 47, 47) !important; }\n\n.mdl-color-text--red-800 {\n  color: rgb(198, 40, 40) !important; }\n\n.mdl-color--red-800 {\n  background-color: rgb(198, 40, 40) !important; }\n\n.mdl-color-text--red-900 {\n  color: rgb(183, 28, 28) !important; }\n\n.mdl-color--red-900 {\n  background-color: rgb(183, 28, 28) !important; }\n\n.mdl-color-text--red-A100 {\n  color: rgb(255, 138, 128) !important; }\n\n.mdl-color--red-A100 {\n  background-color: rgb(255, 138, 128) !important; }\n\n.mdl-color-text--red-A200 {\n  color: rgb(255, 82, 82) !important; }\n\n.mdl-color--red-A200 {\n  background-color: rgb(255, 82, 82) !important; }\n\n.mdl-color-text--red-A400 {\n  color: rgb(255, 23, 68) !important; }\n\n.mdl-color--red-A400 {\n  background-color: rgb(255, 23, 68) !important; }\n\n.mdl-color-text--red-A700 {\n  color: rgb(213, 0, 0) !important; }\n\n.mdl-color--red-A700 {\n  background-color: rgb(213, 0, 0) !important; }\n\n.mdl-color-text--pink {\n  color: rgb(233, 30, 99) !important; }\n\n.mdl-color--pink {\n  background-color: rgb(233, 30, 99) !important; }\n\n.mdl-color-text--pink-50 {\n  color: rgb(252, 228, 236) !important; }\n\n.mdl-color--pink-50 {\n  background-color: rgb(252, 228, 236) !important; }\n\n.mdl-color-text--pink-100 {\n  color: rgb(248, 187, 208) !important; }\n\n.mdl-color--pink-100 {\n  background-color: rgb(248, 187, 208) !important; }\n\n.mdl-color-text--pink-200 {\n  color: rgb(244, 143, 177) !important; }\n\n.mdl-color--pink-200 {\n  background-color: rgb(244, 143, 177) !important; }\n\n.mdl-color-text--pink-300 {\n  color: rgb(240, 98, 146) !important; }\n\n.mdl-color--pink-300 {\n  background-color: rgb(240, 98, 146) !important; }\n\n.mdl-color-text--pink-400 {\n  color: rgb(236, 64, 122) !important; }\n\n.mdl-color--pink-400 {\n  background-color: rgb(236, 64, 122) !important; }\n\n.mdl-color-text--pink-500 {\n  color: rgb(233, 30, 99) !important; }\n\n.mdl-color--pink-500 {\n  background-color: rgb(233, 30, 99) !important; }\n\n.mdl-color-text--pink-600 {\n  color: rgb(216, 27, 96) !important; }\n\n.mdl-color--pink-600 {\n  background-color: rgb(216, 27, 96) !important; }\n\n.mdl-color-text--pink-700 {\n  color: rgb(194, 24, 91) !important; }\n\n.mdl-color--pink-700 {\n  background-color: rgb(194, 24, 91) !important; }\n\n.mdl-color-text--pink-800 {\n  color: rgb(173, 20, 87) !important; }\n\n.mdl-color--pink-800 {\n  background-color: rgb(173, 20, 87) !important; }\n\n.mdl-color-text--pink-900 {\n  color: rgb(136, 14, 79) !important; }\n\n.mdl-color--pink-900 {\n  background-color: rgb(136, 14, 79) !important; }\n\n.mdl-color-text--pink-A100 {\n  color: rgb(255, 128, 171) !important; }\n\n.mdl-color--pink-A100 {\n  background-color: rgb(255, 128, 171) !important; }\n\n.mdl-color-text--pink-A200 {\n  color: rgb(255, 64, 129) !important; }\n\n.mdl-color--pink-A200 {\n  background-color: rgb(255, 64, 129) !important; }\n\n.mdl-color-text--pink-A400 {\n  color: rgb(245, 0, 87) !important; }\n\n.mdl-color--pink-A400 {\n  background-color: rgb(245, 0, 87) !important; }\n\n.mdl-color-text--pink-A700 {\n  color: rgb(197, 17, 98) !important; }\n\n.mdl-color--pink-A700 {\n  background-color: rgb(197, 17, 98) !important; }\n\n.mdl-color-text--purple {\n  color: rgb(156, 39, 176) !important; }\n\n.mdl-color--purple {\n  background-color: rgb(156, 39, 176) !important; }\n\n.mdl-color-text--purple-50 {\n  color: rgb(243, 229, 245) !important; }\n\n.mdl-color--purple-50 {\n  background-color: rgb(243, 229, 245) !important; }\n\n.mdl-color-text--purple-100 {\n  color: rgb(225, 190, 231) !important; }\n\n.mdl-color--purple-100 {\n  background-color: rgb(225, 190, 231) !important; }\n\n.mdl-color-text--purple-200 {\n  color: rgb(206, 147, 216) !important; }\n\n.mdl-color--purple-200 {\n  background-color: rgb(206, 147, 216) !important; }\n\n.mdl-color-text--purple-300 {\n  color: rgb(186, 104, 200) !important; }\n\n.mdl-color--purple-300 {\n  background-color: rgb(186, 104, 200) !important; }\n\n.mdl-color-text--purple-400 {\n  color: rgb(171, 71, 188) !important; }\n\n.mdl-color--purple-400 {\n  background-color: rgb(171, 71, 188) !important; }\n\n.mdl-color-text--purple-500 {\n  color: rgb(156, 39, 176) !important; }\n\n.mdl-color--purple-500 {\n  background-color: rgb(156, 39, 176) !important; }\n\n.mdl-color-text--purple-600 {\n  color: rgb(142, 36, 170) !important; }\n\n.mdl-color--purple-600 {\n  background-color: rgb(142, 36, 170) !important; }\n\n.mdl-color-text--purple-700 {\n  color: rgb(123, 31, 162) !important; }\n\n.mdl-color--purple-700 {\n  background-color: rgb(123, 31, 162) !important; }\n\n.mdl-color-text--purple-800 {\n  color: rgb(106, 27, 154) !important; }\n\n.mdl-color--purple-800 {\n  background-color: rgb(106, 27, 154) !important; }\n\n.mdl-color-text--purple-900 {\n  color: rgb(74, 20, 140) !important; }\n\n.mdl-color--purple-900 {\n  background-color: rgb(74, 20, 140) !important; }\n\n.mdl-color-text--purple-A100 {\n  color: rgb(234, 128, 252) !important; }\n\n.mdl-color--purple-A100 {\n  background-color: rgb(234, 128, 252) !important; }\n\n.mdl-color-text--purple-A200 {\n  color: rgb(224, 64, 251) !important; }\n\n.mdl-color--purple-A200 {\n  background-color: rgb(224, 64, 251) !important; }\n\n.mdl-color-text--purple-A400 {\n  color: rgb(213, 0, 249) !important; }\n\n.mdl-color--purple-A400 {\n  background-color: rgb(213, 0, 249) !important; }\n\n.mdl-color-text--purple-A700 {\n  color: rgb(170, 0, 255) !important; }\n\n.mdl-color--purple-A700 {\n  background-color: rgb(170, 0, 255) !important; }\n\n.mdl-color-text--deep-purple {\n  color: rgb(103, 58, 183) !important; }\n\n.mdl-color--deep-purple {\n  background-color: rgb(103, 58, 183) !important; }\n\n.mdl-color-text--deep-purple-50 {\n  color: rgb(237, 231, 246) !important; }\n\n.mdl-color--deep-purple-50 {\n  background-color: rgb(237, 231, 246) !important; }\n\n.mdl-color-text--deep-purple-100 {\n  color: rgb(209, 196, 233) !important; }\n\n.mdl-color--deep-purple-100 {\n  background-color: rgb(209, 196, 233) !important; }\n\n.mdl-color-text--deep-purple-200 {\n  color: rgb(179, 157, 219) !important; }\n\n.mdl-color--deep-purple-200 {\n  background-color: rgb(179, 157, 219) !important; }\n\n.mdl-color-text--deep-purple-300 {\n  color: rgb(149, 117, 205) !important; }\n\n.mdl-color--deep-purple-300 {\n  background-color: rgb(149, 117, 205) !important; }\n\n.mdl-color-text--deep-purple-400 {\n  color: rgb(126, 87, 194) !important; }\n\n.mdl-color--deep-purple-400 {\n  background-color: rgb(126, 87, 194) !important; }\n\n.mdl-color-text--deep-purple-500 {\n  color: rgb(103, 58, 183) !important; }\n\n.mdl-color--deep-purple-500 {\n  background-color: rgb(103, 58, 183) !important; }\n\n.mdl-color-text--deep-purple-600 {\n  color: rgb(94, 53, 177) !important; }\n\n.mdl-color--deep-purple-600 {\n  background-color: rgb(94, 53, 177) !important; }\n\n.mdl-color-text--deep-purple-700 {\n  color: rgb(81, 45, 168) !important; }\n\n.mdl-color--deep-purple-700 {\n  background-color: rgb(81, 45, 168) !important; }\n\n.mdl-color-text--deep-purple-800 {\n  color: rgb(69, 39, 160) !important; }\n\n.mdl-color--deep-purple-800 {\n  background-color: rgb(69, 39, 160) !important; }\n\n.mdl-color-text--deep-purple-900 {\n  color: rgb(49, 27, 146) !important; }\n\n.mdl-color--deep-purple-900 {\n  background-color: rgb(49, 27, 146) !important; }\n\n.mdl-color-text--deep-purple-A100 {\n  color: rgb(179, 136, 255) !important; }\n\n.mdl-color--deep-purple-A100 {\n  background-color: rgb(179, 136, 255) !important; }\n\n.mdl-color-text--deep-purple-A200 {\n  color: rgb(124, 77, 255) !important; }\n\n.mdl-color--deep-purple-A200 {\n  background-color: rgb(124, 77, 255) !important; }\n\n.mdl-color-text--deep-purple-A400 {\n  color: rgb(101, 31, 255) !important; }\n\n.mdl-color--deep-purple-A400 {\n  background-color: rgb(101, 31, 255) !important; }\n\n.mdl-color-text--deep-purple-A700 {\n  color: rgb(98, 0, 234) !important; }\n\n.mdl-color--deep-purple-A700 {\n  background-color: rgb(98, 0, 234) !important; }\n\n.mdl-color-text--indigo {\n  color: rgb(63, 81, 181) !important; }\n\n.mdl-color--indigo {\n  background-color: rgb(63, 81, 181) !important; }\n\n.mdl-color-text--indigo-50 {\n  color: rgb(232, 234, 246) !important; }\n\n.mdl-color--indigo-50 {\n  background-color: rgb(232, 234, 246) !important; }\n\n.mdl-color-text--indigo-100 {\n  color: rgb(197, 202, 233) !important; }\n\n.mdl-color--indigo-100 {\n  background-color: rgb(197, 202, 233) !important; }\n\n.mdl-color-text--indigo-200 {\n  color: rgb(159, 168, 218) !important; }\n\n.mdl-color--indigo-200 {\n  background-color: rgb(159, 168, 218) !important; }\n\n.mdl-color-text--indigo-300 {\n  color: rgb(121, 134, 203) !important; }\n\n.mdl-color--indigo-300 {\n  background-color: rgb(121, 134, 203) !important; }\n\n.mdl-color-text--indigo-400 {\n  color: rgb(92, 107, 192) !important; }\n\n.mdl-color--indigo-400 {\n  background-color: rgb(92, 107, 192) !important; }\n\n.mdl-color-text--indigo-500 {\n  color: rgb(63, 81, 181) !important; }\n\n.mdl-color--indigo-500 {\n  background-color: rgb(63, 81, 181) !important; }\n\n.mdl-color-text--indigo-600 {\n  color: rgb(57, 73, 171) !important; }\n\n.mdl-color--indigo-600 {\n  background-color: rgb(57, 73, 171) !important; }\n\n.mdl-color-text--indigo-700 {\n  color: rgb(48, 63, 159) !important; }\n\n.mdl-color--indigo-700 {\n  background-color: rgb(48, 63, 159) !important; }\n\n.mdl-color-text--indigo-800 {\n  color: rgb(40, 53, 147) !important; }\n\n.mdl-color--indigo-800 {\n  background-color: rgb(40, 53, 147) !important; }\n\n.mdl-color-text--indigo-900 {\n  color: rgb(26, 35, 126) !important; }\n\n.mdl-color--indigo-900 {\n  background-color: rgb(26, 35, 126) !important; }\n\n.mdl-color-text--indigo-A100 {\n  color: rgb(140, 158, 255) !important; }\n\n.mdl-color--indigo-A100 {\n  background-color: rgb(140, 158, 255) !important; }\n\n.mdl-color-text--indigo-A200 {\n  color: rgb(83, 109, 254) !important; }\n\n.mdl-color--indigo-A200 {\n  background-color: rgb(83, 109, 254) !important; }\n\n.mdl-color-text--indigo-A400 {\n  color: rgb(61, 90, 254) !important; }\n\n.mdl-color--indigo-A400 {\n  background-color: rgb(61, 90, 254) !important; }\n\n.mdl-color-text--indigo-A700 {\n  color: rgb(48, 79, 254) !important; }\n\n.mdl-color--indigo-A700 {\n  background-color: rgb(48, 79, 254) !important; }\n\n.mdl-color-text--blue {\n  color: rgb(33, 150, 243) !important; }\n\n.mdl-color--blue {\n  background-color: rgb(33, 150, 243) !important; }\n\n.mdl-color-text--blue-50 {\n  color: rgb(227, 242, 253) !important; }\n\n.mdl-color--blue-50 {\n  background-color: rgb(227, 242, 253) !important; }\n\n.mdl-color-text--blue-100 {\n  color: rgb(187, 222, 251) !important; }\n\n.mdl-color--blue-100 {\n  background-color: rgb(187, 222, 251) !important; }\n\n.mdl-color-text--blue-200 {\n  color: rgb(144, 202, 249) !important; }\n\n.mdl-color--blue-200 {\n  background-color: rgb(144, 202, 249) !important; }\n\n.mdl-color-text--blue-300 {\n  color: rgb(100, 181, 246) !important; }\n\n.mdl-color--blue-300 {\n  background-color: rgb(100, 181, 246) !important; }\n\n.mdl-color-text--blue-400 {\n  color: rgb(66, 165, 245) !important; }\n\n.mdl-color--blue-400 {\n  background-color: rgb(66, 165, 245) !important; }\n\n.mdl-color-text--blue-500 {\n  color: rgb(33, 150, 243) !important; }\n\n.mdl-color--blue-500 {\n  background-color: rgb(33, 150, 243) !important; }\n\n.mdl-color-text--blue-600 {\n  color: rgb(30, 136, 229) !important; }\n\n.mdl-color--blue-600 {\n  background-color: rgb(30, 136, 229) !important; }\n\n.mdl-color-text--blue-700 {\n  color: rgb(25, 118, 210) !important; }\n\n.mdl-color--blue-700 {\n  background-color: rgb(25, 118, 210) !important; }\n\n.mdl-color-text--blue-800 {\n  color: rgb(21, 101, 192) !important; }\n\n.mdl-color--blue-800 {\n  background-color: rgb(21, 101, 192) !important; }\n\n.mdl-color-text--blue-900 {\n  color: rgb(13, 71, 161) !important; }\n\n.mdl-color--blue-900 {\n  background-color: rgb(13, 71, 161) !important; }\n\n.mdl-color-text--blue-A100 {\n  color: rgb(130, 177, 255) !important; }\n\n.mdl-color--blue-A100 {\n  background-color: rgb(130, 177, 255) !important; }\n\n.mdl-color-text--blue-A200 {\n  color: rgb(68, 138, 255) !important; }\n\n.mdl-color--blue-A200 {\n  background-color: rgb(68, 138, 255) !important; }\n\n.mdl-color-text--blue-A400 {\n  color: rgb(41, 121, 255) !important; }\n\n.mdl-color--blue-A400 {\n  background-color: rgb(41, 121, 255) !important; }\n\n.mdl-color-text--blue-A700 {\n  color: rgb(41, 98, 255) !important; }\n\n.mdl-color--blue-A700 {\n  background-color: rgb(41, 98, 255) !important; }\n\n.mdl-color-text--light-blue {\n  color: rgb(3, 169, 244) !important; }\n\n.mdl-color--light-blue {\n  background-color: rgb(3, 169, 244) !important; }\n\n.mdl-color-text--light-blue-50 {\n  color: rgb(225, 245, 254) !important; }\n\n.mdl-color--light-blue-50 {\n  background-color: rgb(225, 245, 254) !important; }\n\n.mdl-color-text--light-blue-100 {\n  color: rgb(179, 229, 252) !important; }\n\n.mdl-color--light-blue-100 {\n  background-color: rgb(179, 229, 252) !important; }\n\n.mdl-color-text--light-blue-200 {\n  color: rgb(129, 212, 250) !important; }\n\n.mdl-color--light-blue-200 {\n  background-color: rgb(129, 212, 250) !important; }\n\n.mdl-color-text--light-blue-300 {\n  color: rgb(79, 195, 247) !important; }\n\n.mdl-color--light-blue-300 {\n  background-color: rgb(79, 195, 247) !important; }\n\n.mdl-color-text--light-blue-400 {\n  color: rgb(41, 182, 246) !important; }\n\n.mdl-color--light-blue-400 {\n  background-color: rgb(41, 182, 246) !important; }\n\n.mdl-color-text--light-blue-500 {\n  color: rgb(3, 169, 244) !important; }\n\n.mdl-color--light-blue-500 {\n  background-color: rgb(3, 169, 244) !important; }\n\n.mdl-color-text--light-blue-600 {\n  color: rgb(3, 155, 229) !important; }\n\n.mdl-color--light-blue-600 {\n  background-color: rgb(3, 155, 229) !important; }\n\n.mdl-color-text--light-blue-700 {\n  color: rgb(2, 136, 209) !important; }\n\n.mdl-color--light-blue-700 {\n  background-color: rgb(2, 136, 209) !important; }\n\n.mdl-color-text--light-blue-800 {\n  color: rgb(2, 119, 189) !important; }\n\n.mdl-color--light-blue-800 {\n  background-color: rgb(2, 119, 189) !important; }\n\n.mdl-color-text--light-blue-900 {\n  color: rgb(1, 87, 155) !important; }\n\n.mdl-color--light-blue-900 {\n  background-color: rgb(1, 87, 155) !important; }\n\n.mdl-color-text--light-blue-A100 {\n  color: rgb(128, 216, 255) !important; }\n\n.mdl-color--light-blue-A100 {\n  background-color: rgb(128, 216, 255) !important; }\n\n.mdl-color-text--light-blue-A200 {\n  color: rgb(64, 196, 255) !important; }\n\n.mdl-color--light-blue-A200 {\n  background-color: rgb(64, 196, 255) !important; }\n\n.mdl-color-text--light-blue-A400 {\n  color: rgb(0, 176, 255) !important; }\n\n.mdl-color--light-blue-A400 {\n  background-color: rgb(0, 176, 255) !important; }\n\n.mdl-color-text--light-blue-A700 {\n  color: rgb(0, 145, 234) !important; }\n\n.mdl-color--light-blue-A700 {\n  background-color: rgb(0, 145, 234) !important; }\n\n.mdl-color-text--cyan {\n  color: rgb(0, 188, 212) !important; }\n\n.mdl-color--cyan {\n  background-color: rgb(0, 188, 212) !important; }\n\n.mdl-color-text--cyan-50 {\n  color: rgb(224, 247, 250) !important; }\n\n.mdl-color--cyan-50 {\n  background-color: rgb(224, 247, 250) !important; }\n\n.mdl-color-text--cyan-100 {\n  color: rgb(178, 235, 242) !important; }\n\n.mdl-color--cyan-100 {\n  background-color: rgb(178, 235, 242) !important; }\n\n.mdl-color-text--cyan-200 {\n  color: rgb(128, 222, 234) !important; }\n\n.mdl-color--cyan-200 {\n  background-color: rgb(128, 222, 234) !important; }\n\n.mdl-color-text--cyan-300 {\n  color: rgb(77, 208, 225) !important; }\n\n.mdl-color--cyan-300 {\n  background-color: rgb(77, 208, 225) !important; }\n\n.mdl-color-text--cyan-400 {\n  color: rgb(38, 198, 218) !important; }\n\n.mdl-color--cyan-400 {\n  background-color: rgb(38, 198, 218) !important; }\n\n.mdl-color-text--cyan-500 {\n  color: rgb(0, 188, 212) !important; }\n\n.mdl-color--cyan-500 {\n  background-color: rgb(0, 188, 212) !important; }\n\n.mdl-color-text--cyan-600 {\n  color: rgb(0, 172, 193) !important; }\n\n.mdl-color--cyan-600 {\n  background-color: rgb(0, 172, 193) !important; }\n\n.mdl-color-text--cyan-700 {\n  color: rgb(0, 151, 167) !important; }\n\n.mdl-color--cyan-700 {\n  background-color: rgb(0, 151, 167) !important; }\n\n.mdl-color-text--cyan-800 {\n  color: rgb(0, 131, 143) !important; }\n\n.mdl-color--cyan-800 {\n  background-color: rgb(0, 131, 143) !important; }\n\n.mdl-color-text--cyan-900 {\n  color: rgb(0, 96, 100) !important; }\n\n.mdl-color--cyan-900 {\n  background-color: rgb(0, 96, 100) !important; }\n\n.mdl-color-text--cyan-A100 {\n  color: rgb(132, 255, 255) !important; }\n\n.mdl-color--cyan-A100 {\n  background-color: rgb(132, 255, 255) !important; }\n\n.mdl-color-text--cyan-A200 {\n  color: rgb(24, 255, 255) !important; }\n\n.mdl-color--cyan-A200 {\n  background-color: rgb(24, 255, 255) !important; }\n\n.mdl-color-text--cyan-A400 {\n  color: rgb(0, 229, 255) !important; }\n\n.mdl-color--cyan-A400 {\n  background-color: rgb(0, 229, 255) !important; }\n\n.mdl-color-text--cyan-A700 {\n  color: rgb(0, 184, 212) !important; }\n\n.mdl-color--cyan-A700 {\n  background-color: rgb(0, 184, 212) !important; }\n\n.mdl-color-text--teal {\n  color: rgb(0, 150, 136) !important; }\n\n.mdl-color--teal {\n  background-color: rgb(0, 150, 136) !important; }\n\n.mdl-color-text--teal-50 {\n  color: rgb(224, 242, 241) !important; }\n\n.mdl-color--teal-50 {\n  background-color: rgb(224, 242, 241) !important; }\n\n.mdl-color-text--teal-100 {\n  color: rgb(178, 223, 219) !important; }\n\n.mdl-color--teal-100 {\n  background-color: rgb(178, 223, 219) !important; }\n\n.mdl-color-text--teal-200 {\n  color: rgb(128, 203, 196) !important; }\n\n.mdl-color--teal-200 {\n  background-color: rgb(128, 203, 196) !important; }\n\n.mdl-color-text--teal-300 {\n  color: rgb(77, 182, 172) !important; }\n\n.mdl-color--teal-300 {\n  background-color: rgb(77, 182, 172) !important; }\n\n.mdl-color-text--teal-400 {\n  color: rgb(38, 166, 154) !important; }\n\n.mdl-color--teal-400 {\n  background-color: rgb(38, 166, 154) !important; }\n\n.mdl-color-text--teal-500 {\n  color: rgb(0, 150, 136) !important; }\n\n.mdl-color--teal-500 {\n  background-color: rgb(0, 150, 136) !important; }\n\n.mdl-color-text--teal-600 {\n  color: rgb(0, 137, 123) !important; }\n\n.mdl-color--teal-600 {\n  background-color: rgb(0, 137, 123) !important; }\n\n.mdl-color-text--teal-700 {\n  color: rgb(0, 121, 107) !important; }\n\n.mdl-color--teal-700 {\n  background-color: rgb(0, 121, 107) !important; }\n\n.mdl-color-text--teal-800 {\n  color: rgb(0, 105, 92) !important; }\n\n.mdl-color--teal-800 {\n  background-color: rgb(0, 105, 92) !important; }\n\n.mdl-color-text--teal-900 {\n  color: rgb(0, 77, 64) !important; }\n\n.mdl-color--teal-900 {\n  background-color: rgb(0, 77, 64) !important; }\n\n.mdl-color-text--teal-A100 {\n  color: rgb(167, 255, 235) !important; }\n\n.mdl-color--teal-A100 {\n  background-color: rgb(167, 255, 235) !important; }\n\n.mdl-color-text--teal-A200 {\n  color: rgb(100, 255, 218) !important; }\n\n.mdl-color--teal-A200 {\n  background-color: rgb(100, 255, 218) !important; }\n\n.mdl-color-text--teal-A400 {\n  color: rgb(29, 233, 182) !important; }\n\n.mdl-color--teal-A400 {\n  background-color: rgb(29, 233, 182) !important; }\n\n.mdl-color-text--teal-A700 {\n  color: rgb(0, 191, 165) !important; }\n\n.mdl-color--teal-A700 {\n  background-color: rgb(0, 191, 165) !important; }\n\n.mdl-color-text--green {\n  color: rgb(76, 175, 80) !important; }\n\n.mdl-color--green {\n  background-color: rgb(76, 175, 80) !important; }\n\n.mdl-color-text--green-50 {\n  color: rgb(232, 245, 233) !important; }\n\n.mdl-color--green-50 {\n  background-color: rgb(232, 245, 233) !important; }\n\n.mdl-color-text--green-100 {\n  color: rgb(200, 230, 201) !important; }\n\n.mdl-color--green-100 {\n  background-color: rgb(200, 230, 201) !important; }\n\n.mdl-color-text--green-200 {\n  color: rgb(165, 214, 167) !important; }\n\n.mdl-color--green-200 {\n  background-color: rgb(165, 214, 167) !important; }\n\n.mdl-color-text--green-300 {\n  color: rgb(129, 199, 132) !important; }\n\n.mdl-color--green-300 {\n  background-color: rgb(129, 199, 132) !important; }\n\n.mdl-color-text--green-400 {\n  color: rgb(102, 187, 106) !important; }\n\n.mdl-color--green-400 {\n  background-color: rgb(102, 187, 106) !important; }\n\n.mdl-color-text--green-500 {\n  color: rgb(76, 175, 80) !important; }\n\n.mdl-color--green-500 {\n  background-color: rgb(76, 175, 80) !important; }\n\n.mdl-color-text--green-600 {\n  color: rgb(67, 160, 71) !important; }\n\n.mdl-color--green-600 {\n  background-color: rgb(67, 160, 71) !important; }\n\n.mdl-color-text--green-700 {\n  color: rgb(56, 142, 60) !important; }\n\n.mdl-color--green-700 {\n  background-color: rgb(56, 142, 60) !important; }\n\n.mdl-color-text--green-800 {\n  color: rgb(46, 125, 50) !important; }\n\n.mdl-color--green-800 {\n  background-color: rgb(46, 125, 50) !important; }\n\n.mdl-color-text--green-900 {\n  color: rgb(27, 94, 32) !important; }\n\n.mdl-color--green-900 {\n  background-color: rgb(27, 94, 32) !important; }\n\n.mdl-color-text--green-A100 {\n  color: rgb(185, 246, 202) !important; }\n\n.mdl-color--green-A100 {\n  background-color: rgb(185, 246, 202) !important; }\n\n.mdl-color-text--green-A200 {\n  color: rgb(105, 240, 174) !important; }\n\n.mdl-color--green-A200 {\n  background-color: rgb(105, 240, 174) !important; }\n\n.mdl-color-text--green-A400 {\n  color: rgb(0, 230, 118) !important; }\n\n.mdl-color--green-A400 {\n  background-color: rgb(0, 230, 118) !important; }\n\n.mdl-color-text--green-A700 {\n  color: rgb(0, 200, 83) !important; }\n\n.mdl-color--green-A700 {\n  background-color: rgb(0, 200, 83) !important; }\n\n.mdl-color-text--light-green {\n  color: rgb(139, 195, 74) !important; }\n\n.mdl-color--light-green {\n  background-color: rgb(139, 195, 74) !important; }\n\n.mdl-color-text--light-green-50 {\n  color: rgb(241, 248, 233) !important; }\n\n.mdl-color--light-green-50 {\n  background-color: rgb(241, 248, 233) !important; }\n\n.mdl-color-text--light-green-100 {\n  color: rgb(220, 237, 200) !important; }\n\n.mdl-color--light-green-100 {\n  background-color: rgb(220, 237, 200) !important; }\n\n.mdl-color-text--light-green-200 {\n  color: rgb(197, 225, 165) !important; }\n\n.mdl-color--light-green-200 {\n  background-color: rgb(197, 225, 165) !important; }\n\n.mdl-color-text--light-green-300 {\n  color: rgb(174, 213, 129) !important; }\n\n.mdl-color--light-green-300 {\n  background-color: rgb(174, 213, 129) !important; }\n\n.mdl-color-text--light-green-400 {\n  color: rgb(156, 204, 101) !important; }\n\n.mdl-color--light-green-400 {\n  background-color: rgb(156, 204, 101) !important; }\n\n.mdl-color-text--light-green-500 {\n  color: rgb(139, 195, 74) !important; }\n\n.mdl-color--light-green-500 {\n  background-color: rgb(139, 195, 74) !important; }\n\n.mdl-color-text--light-green-600 {\n  color: rgb(124, 179, 66) !important; }\n\n.mdl-color--light-green-600 {\n  background-color: rgb(124, 179, 66) !important; }\n\n.mdl-color-text--light-green-700 {\n  color: rgb(104, 159, 56) !important; }\n\n.mdl-color--light-green-700 {\n  background-color: rgb(104, 159, 56) !important; }\n\n.mdl-color-text--light-green-800 {\n  color: rgb(85, 139, 47) !important; }\n\n.mdl-color--light-green-800 {\n  background-color: rgb(85, 139, 47) !important; }\n\n.mdl-color-text--light-green-900 {\n  color: rgb(51, 105, 30) !important; }\n\n.mdl-color--light-green-900 {\n  background-color: rgb(51, 105, 30) !important; }\n\n.mdl-color-text--light-green-A100 {\n  color: rgb(204, 255, 144) !important; }\n\n.mdl-color--light-green-A100 {\n  background-color: rgb(204, 255, 144) !important; }\n\n.mdl-color-text--light-green-A200 {\n  color: rgb(178, 255, 89) !important; }\n\n.mdl-color--light-green-A200 {\n  background-color: rgb(178, 255, 89) !important; }\n\n.mdl-color-text--light-green-A400 {\n  color: rgb(118, 255, 3) !important; }\n\n.mdl-color--light-green-A400 {\n  background-color: rgb(118, 255, 3) !important; }\n\n.mdl-color-text--light-green-A700 {\n  color: rgb(100, 221, 23) !important; }\n\n.mdl-color--light-green-A700 {\n  background-color: rgb(100, 221, 23) !important; }\n\n.mdl-color-text--lime {\n  color: rgb(205, 220, 57) !important; }\n\n.mdl-color--lime {\n  background-color: rgb(205, 220, 57) !important; }\n\n.mdl-color-text--lime-50 {\n  color: rgb(249, 251, 231) !important; }\n\n.mdl-color--lime-50 {\n  background-color: rgb(249, 251, 231) !important; }\n\n.mdl-color-text--lime-100 {\n  color: rgb(240, 244, 195) !important; }\n\n.mdl-color--lime-100 {\n  background-color: rgb(240, 244, 195) !important; }\n\n.mdl-color-text--lime-200 {\n  color: rgb(230, 238, 156) !important; }\n\n.mdl-color--lime-200 {\n  background-color: rgb(230, 238, 156) !important; }\n\n.mdl-color-text--lime-300 {\n  color: rgb(220, 231, 117) !important; }\n\n.mdl-color--lime-300 {\n  background-color: rgb(220, 231, 117) !important; }\n\n.mdl-color-text--lime-400 {\n  color: rgb(212, 225, 87) !important; }\n\n.mdl-color--lime-400 {\n  background-color: rgb(212, 225, 87) !important; }\n\n.mdl-color-text--lime-500 {\n  color: rgb(205, 220, 57) !important; }\n\n.mdl-color--lime-500 {\n  background-color: rgb(205, 220, 57) !important; }\n\n.mdl-color-text--lime-600 {\n  color: rgb(192, 202, 51) !important; }\n\n.mdl-color--lime-600 {\n  background-color: rgb(192, 202, 51) !important; }\n\n.mdl-color-text--lime-700 {\n  color: rgb(175, 180, 43) !important; }\n\n.mdl-color--lime-700 {\n  background-color: rgb(175, 180, 43) !important; }\n\n.mdl-color-text--lime-800 {\n  color: rgb(158, 157, 36) !important; }\n\n.mdl-color--lime-800 {\n  background-color: rgb(158, 157, 36) !important; }\n\n.mdl-color-text--lime-900 {\n  color: rgb(130, 119, 23) !important; }\n\n.mdl-color--lime-900 {\n  background-color: rgb(130, 119, 23) !important; }\n\n.mdl-color-text--lime-A100 {\n  color: rgb(244, 255, 129) !important; }\n\n.mdl-color--lime-A100 {\n  background-color: rgb(244, 255, 129) !important; }\n\n.mdl-color-text--lime-A200 {\n  color: rgb(238, 255, 65) !important; }\n\n.mdl-color--lime-A200 {\n  background-color: rgb(238, 255, 65) !important; }\n\n.mdl-color-text--lime-A400 {\n  color: rgb(198, 255, 0) !important; }\n\n.mdl-color--lime-A400 {\n  background-color: rgb(198, 255, 0) !important; }\n\n.mdl-color-text--lime-A700 {\n  color: rgb(174, 234, 0) !important; }\n\n.mdl-color--lime-A700 {\n  background-color: rgb(174, 234, 0) !important; }\n\n.mdl-color-text--yellow {\n  color: rgb(255, 235, 59) !important; }\n\n.mdl-color--yellow {\n  background-color: rgb(255, 235, 59) !important; }\n\n.mdl-color-text--yellow-50 {\n  color: rgb(255, 253, 231) !important; }\n\n.mdl-color--yellow-50 {\n  background-color: rgb(255, 253, 231) !important; }\n\n.mdl-color-text--yellow-100 {\n  color: rgb(255, 249, 196) !important; }\n\n.mdl-color--yellow-100 {\n  background-color: rgb(255, 249, 196) !important; }\n\n.mdl-color-text--yellow-200 {\n  color: rgb(255, 245, 157) !important; }\n\n.mdl-color--yellow-200 {\n  background-color: rgb(255, 245, 157) !important; }\n\n.mdl-color-text--yellow-300 {\n  color: rgb(255, 241, 118) !important; }\n\n.mdl-color--yellow-300 {\n  background-color: rgb(255, 241, 118) !important; }\n\n.mdl-color-text--yellow-400 {\n  color: rgb(255, 238, 88) !important; }\n\n.mdl-color--yellow-400 {\n  background-color: rgb(255, 238, 88) !important; }\n\n.mdl-color-text--yellow-500 {\n  color: rgb(255, 235, 59) !important; }\n\n.mdl-color--yellow-500 {\n  background-color: rgb(255, 235, 59) !important; }\n\n.mdl-color-text--yellow-600 {\n  color: rgb(253, 216, 53) !important; }\n\n.mdl-color--yellow-600 {\n  background-color: rgb(253, 216, 53) !important; }\n\n.mdl-color-text--yellow-700 {\n  color: rgb(251, 192, 45) !important; }\n\n.mdl-color--yellow-700 {\n  background-color: rgb(251, 192, 45) !important; }\n\n.mdl-color-text--yellow-800 {\n  color: rgb(249, 168, 37) !important; }\n\n.mdl-color--yellow-800 {\n  background-color: rgb(249, 168, 37) !important; }\n\n.mdl-color-text--yellow-900 {\n  color: rgb(245, 127, 23) !important; }\n\n.mdl-color--yellow-900 {\n  background-color: rgb(245, 127, 23) !important; }\n\n.mdl-color-text--yellow-A100 {\n  color: rgb(255, 255, 141) !important; }\n\n.mdl-color--yellow-A100 {\n  background-color: rgb(255, 255, 141) !important; }\n\n.mdl-color-text--yellow-A200 {\n  color: rgb(255, 255, 0) !important; }\n\n.mdl-color--yellow-A200 {\n  background-color: rgb(255, 255, 0) !important; }\n\n.mdl-color-text--yellow-A400 {\n  color: rgb(255, 234, 0) !important; }\n\n.mdl-color--yellow-A400 {\n  background-color: rgb(255, 234, 0) !important; }\n\n.mdl-color-text--yellow-A700 {\n  color: rgb(255, 214, 0) !important; }\n\n.mdl-color--yellow-A700 {\n  background-color: rgb(255, 214, 0) !important; }\n\n.mdl-color-text--amber {\n  color: rgb(255, 193, 7) !important; }\n\n.mdl-color--amber {\n  background-color: rgb(255, 193, 7) !important; }\n\n.mdl-color-text--amber-50 {\n  color: rgb(255, 248, 225) !important; }\n\n.mdl-color--amber-50 {\n  background-color: rgb(255, 248, 225) !important; }\n\n.mdl-color-text--amber-100 {\n  color: rgb(255, 236, 179) !important; }\n\n.mdl-color--amber-100 {\n  background-color: rgb(255, 236, 179) !important; }\n\n.mdl-color-text--amber-200 {\n  color: rgb(255, 224, 130) !important; }\n\n.mdl-color--amber-200 {\n  background-color: rgb(255, 224, 130) !important; }\n\n.mdl-color-text--amber-300 {\n  color: rgb(255, 213, 79) !important; }\n\n.mdl-color--amber-300 {\n  background-color: rgb(255, 213, 79) !important; }\n\n.mdl-color-text--amber-400 {\n  color: rgb(255, 202, 40) !important; }\n\n.mdl-color--amber-400 {\n  background-color: rgb(255, 202, 40) !important; }\n\n.mdl-color-text--amber-500 {\n  color: rgb(255, 193, 7) !important; }\n\n.mdl-color--amber-500 {\n  background-color: rgb(255, 193, 7) !important; }\n\n.mdl-color-text--amber-600 {\n  color: rgb(255, 179, 0) !important; }\n\n.mdl-color--amber-600 {\n  background-color: rgb(255, 179, 0) !important; }\n\n.mdl-color-text--amber-700 {\n  color: rgb(255, 160, 0) !important; }\n\n.mdl-color--amber-700 {\n  background-color: rgb(255, 160, 0) !important; }\n\n.mdl-color-text--amber-800 {\n  color: rgb(255, 143, 0) !important; }\n\n.mdl-color--amber-800 {\n  background-color: rgb(255, 143, 0) !important; }\n\n.mdl-color-text--amber-900 {\n  color: rgb(255, 111, 0) !important; }\n\n.mdl-color--amber-900 {\n  background-color: rgb(255, 111, 0) !important; }\n\n.mdl-color-text--amber-A100 {\n  color: rgb(255, 229, 127) !important; }\n\n.mdl-color--amber-A100 {\n  background-color: rgb(255, 229, 127) !important; }\n\n.mdl-color-text--amber-A200 {\n  color: rgb(255, 215, 64) !important; }\n\n.mdl-color--amber-A200 {\n  background-color: rgb(255, 215, 64) !important; }\n\n.mdl-color-text--amber-A400 {\n  color: rgb(255, 196, 0) !important; }\n\n.mdl-color--amber-A400 {\n  background-color: rgb(255, 196, 0) !important; }\n\n.mdl-color-text--amber-A700 {\n  color: rgb(255, 171, 0) !important; }\n\n.mdl-color--amber-A700 {\n  background-color: rgb(255, 171, 0) !important; }\n\n.mdl-color-text--orange {\n  color: rgb(255, 152, 0) !important; }\n\n.mdl-color--orange {\n  background-color: rgb(255, 152, 0) !important; }\n\n.mdl-color-text--orange-50 {\n  color: rgb(255, 243, 224) !important; }\n\n.mdl-color--orange-50 {\n  background-color: rgb(255, 243, 224) !important; }\n\n.mdl-color-text--orange-100 {\n  color: rgb(255, 224, 178) !important; }\n\n.mdl-color--orange-100 {\n  background-color: rgb(255, 224, 178) !important; }\n\n.mdl-color-text--orange-200 {\n  color: rgb(255, 204, 128) !important; }\n\n.mdl-color--orange-200 {\n  background-color: rgb(255, 204, 128) !important; }\n\n.mdl-color-text--orange-300 {\n  color: rgb(255, 183, 77) !important; }\n\n.mdl-color--orange-300 {\n  background-color: rgb(255, 183, 77) !important; }\n\n.mdl-color-text--orange-400 {\n  color: rgb(255, 167, 38) !important; }\n\n.mdl-color--orange-400 {\n  background-color: rgb(255, 167, 38) !important; }\n\n.mdl-color-text--orange-500 {\n  color: rgb(255, 152, 0) !important; }\n\n.mdl-color--orange-500 {\n  background-color: rgb(255, 152, 0) !important; }\n\n.mdl-color-text--orange-600 {\n  color: rgb(251, 140, 0) !important; }\n\n.mdl-color--orange-600 {\n  background-color: rgb(251, 140, 0) !important; }\n\n.mdl-color-text--orange-700 {\n  color: rgb(245, 124, 0) !important; }\n\n.mdl-color--orange-700 {\n  background-color: rgb(245, 124, 0) !important; }\n\n.mdl-color-text--orange-800 {\n  color: rgb(239, 108, 0) !important; }\n\n.mdl-color--orange-800 {\n  background-color: rgb(239, 108, 0) !important; }\n\n.mdl-color-text--orange-900 {\n  color: rgb(230, 81, 0) !important; }\n\n.mdl-color--orange-900 {\n  background-color: rgb(230, 81, 0) !important; }\n\n.mdl-color-text--orange-A100 {\n  color: rgb(255, 209, 128) !important; }\n\n.mdl-color--orange-A100 {\n  background-color: rgb(255, 209, 128) !important; }\n\n.mdl-color-text--orange-A200 {\n  color: rgb(255, 171, 64) !important; }\n\n.mdl-color--orange-A200 {\n  background-color: rgb(255, 171, 64) !important; }\n\n.mdl-color-text--orange-A400 {\n  color: rgb(255, 145, 0) !important; }\n\n.mdl-color--orange-A400 {\n  background-color: rgb(255, 145, 0) !important; }\n\n.mdl-color-text--orange-A700 {\n  color: rgb(255, 109, 0) !important; }\n\n.mdl-color--orange-A700 {\n  background-color: rgb(255, 109, 0) !important; }\n\n.mdl-color-text--deep-orange {\n  color: rgb(255, 87, 34) !important; }\n\n.mdl-color--deep-orange {\n  background-color: rgb(255, 87, 34) !important; }\n\n.mdl-color-text--deep-orange-50 {\n  color: rgb(251, 233, 231) !important; }\n\n.mdl-color--deep-orange-50 {\n  background-color: rgb(251, 233, 231) !important; }\n\n.mdl-color-text--deep-orange-100 {\n  color: rgb(255, 204, 188) !important; }\n\n.mdl-color--deep-orange-100 {\n  background-color: rgb(255, 204, 188) !important; }\n\n.mdl-color-text--deep-orange-200 {\n  color: rgb(255, 171, 145) !important; }\n\n.mdl-color--deep-orange-200 {\n  background-color: rgb(255, 171, 145) !important; }\n\n.mdl-color-text--deep-orange-300 {\n  color: rgb(255, 138, 101) !important; }\n\n.mdl-color--deep-orange-300 {\n  background-color: rgb(255, 138, 101) !important; }\n\n.mdl-color-text--deep-orange-400 {\n  color: rgb(255, 112, 67) !important; }\n\n.mdl-color--deep-orange-400 {\n  background-color: rgb(255, 112, 67) !important; }\n\n.mdl-color-text--deep-orange-500 {\n  color: rgb(255, 87, 34) !important; }\n\n.mdl-color--deep-orange-500 {\n  background-color: rgb(255, 87, 34) !important; }\n\n.mdl-color-text--deep-orange-600 {\n  color: rgb(244, 81, 30) !important; }\n\n.mdl-color--deep-orange-600 {\n  background-color: rgb(244, 81, 30) !important; }\n\n.mdl-color-text--deep-orange-700 {\n  color: rgb(230, 74, 25) !important; }\n\n.mdl-color--deep-orange-700 {\n  background-color: rgb(230, 74, 25) !important; }\n\n.mdl-color-text--deep-orange-800 {\n  color: rgb(216, 67, 21) !important; }\n\n.mdl-color--deep-orange-800 {\n  background-color: rgb(216, 67, 21) !important; }\n\n.mdl-color-text--deep-orange-900 {\n  color: rgb(191, 54, 12) !important; }\n\n.mdl-color--deep-orange-900 {\n  background-color: rgb(191, 54, 12) !important; }\n\n.mdl-color-text--deep-orange-A100 {\n  color: rgb(255, 158, 128) !important; }\n\n.mdl-color--deep-orange-A100 {\n  background-color: rgb(255, 158, 128) !important; }\n\n.mdl-color-text--deep-orange-A200 {\n  color: rgb(255, 110, 64) !important; }\n\n.mdl-color--deep-orange-A200 {\n  background-color: rgb(255, 110, 64) !important; }\n\n.mdl-color-text--deep-orange-A400 {\n  color: rgb(255, 61, 0) !important; }\n\n.mdl-color--deep-orange-A400 {\n  background-color: rgb(255, 61, 0) !important; }\n\n.mdl-color-text--deep-orange-A700 {\n  color: rgb(221, 44, 0) !important; }\n\n.mdl-color--deep-orange-A700 {\n  background-color: rgb(221, 44, 0) !important; }\n\n.mdl-color-text--brown {\n  color: rgb(121, 85, 72) !important; }\n\n.mdl-color--brown {\n  background-color: rgb(121, 85, 72) !important; }\n\n.mdl-color-text--brown-50 {\n  color: rgb(239, 235, 233) !important; }\n\n.mdl-color--brown-50 {\n  background-color: rgb(239, 235, 233) !important; }\n\n.mdl-color-text--brown-100 {\n  color: rgb(215, 204, 200) !important; }\n\n.mdl-color--brown-100 {\n  background-color: rgb(215, 204, 200) !important; }\n\n.mdl-color-text--brown-200 {\n  color: rgb(188, 170, 164) !important; }\n\n.mdl-color--brown-200 {\n  background-color: rgb(188, 170, 164) !important; }\n\n.mdl-color-text--brown-300 {\n  color: rgb(161, 136, 127) !important; }\n\n.mdl-color--brown-300 {\n  background-color: rgb(161, 136, 127) !important; }\n\n.mdl-color-text--brown-400 {\n  color: rgb(141, 110, 99) !important; }\n\n.mdl-color--brown-400 {\n  background-color: rgb(141, 110, 99) !important; }\n\n.mdl-color-text--brown-500 {\n  color: rgb(121, 85, 72) !important; }\n\n.mdl-color--brown-500 {\n  background-color: rgb(121, 85, 72) !important; }\n\n.mdl-color-text--brown-600 {\n  color: rgb(109, 76, 65) !important; }\n\n.mdl-color--brown-600 {\n  background-color: rgb(109, 76, 65) !important; }\n\n.mdl-color-text--brown-700 {\n  color: rgb(93, 64, 55) !important; }\n\n.mdl-color--brown-700 {\n  background-color: rgb(93, 64, 55) !important; }\n\n.mdl-color-text--brown-800 {\n  color: rgb(78, 52, 46) !important; }\n\n.mdl-color--brown-800 {\n  background-color: rgb(78, 52, 46) !important; }\n\n.mdl-color-text--brown-900 {\n  color: rgb(62, 39, 35) !important; }\n\n.mdl-color--brown-900 {\n  background-color: rgb(62, 39, 35) !important; }\n\n.mdl-color-text--grey {\n  color: rgb(158, 158, 158) !important; }\n\n.mdl-color--grey {\n  background-color: rgb(158, 158, 158) !important; }\n\n.mdl-color-text--grey-50 {\n  color: rgb(250, 250, 250) !important; }\n\n.mdl-color--grey-50 {\n  background-color: rgb(250, 250, 250) !important; }\n\n.mdl-color-text--grey-100 {\n  color: rgb(245, 245, 245) !important; }\n\n.mdl-color--grey-100 {\n  background-color: rgb(245, 245, 245) !important; }\n\n.mdl-color-text--grey-200 {\n  color: rgb(238, 238, 238) !important; }\n\n.mdl-color--grey-200 {\n  background-color: rgb(238, 238, 238) !important; }\n\n.mdl-color-text--grey-300 {\n  color: rgb(224, 224, 224) !important; }\n\n.mdl-color--grey-300 {\n  background-color: rgb(224, 224, 224) !important; }\n\n.mdl-color-text--grey-400 {\n  color: rgb(189, 189, 189) !important; }\n\n.mdl-color--grey-400 {\n  background-color: rgb(189, 189, 189) !important; }\n\n.mdl-color-text--grey-500 {\n  color: rgb(158, 158, 158) !important; }\n\n.mdl-color--grey-500 {\n  background-color: rgb(158, 158, 158) !important; }\n\n.mdl-color-text--grey-600 {\n  color: rgb(117, 117, 117) !important; }\n\n.mdl-color--grey-600 {\n  background-color: rgb(117, 117, 117) !important; }\n\n.mdl-color-text--grey-700 {\n  color: rgb(97, 97, 97) !important; }\n\n.mdl-color--grey-700 {\n  background-color: rgb(97, 97, 97) !important; }\n\n.mdl-color-text--grey-800 {\n  color: rgb(66, 66, 66) !important; }\n\n.mdl-color--grey-800 {\n  background-color: rgb(66, 66, 66) !important; }\n\n.mdl-color-text--grey-900 {\n  color: rgb(33, 33, 33) !important; }\n\n.mdl-color--grey-900 {\n  background-color: rgb(33, 33, 33) !important; }\n\n.mdl-color-text--blue-grey {\n  color: rgb(96, 125, 139) !important; }\n\n.mdl-color--blue-grey {\n  background-color: rgb(96, 125, 139) !important; }\n\n.mdl-color-text--blue-grey-50 {\n  color: rgb(236, 239, 241) !important; }\n\n.mdl-color--blue-grey-50 {\n  background-color: rgb(236, 239, 241) !important; }\n\n.mdl-color-text--blue-grey-100 {\n  color: rgb(207, 216, 220) !important; }\n\n.mdl-color--blue-grey-100 {\n  background-color: rgb(207, 216, 220) !important; }\n\n.mdl-color-text--blue-grey-200 {\n  color: rgb(176, 190, 197) !important; }\n\n.mdl-color--blue-grey-200 {\n  background-color: rgb(176, 190, 197) !important; }\n\n.mdl-color-text--blue-grey-300 {\n  color: rgb(144, 164, 174) !important; }\n\n.mdl-color--blue-grey-300 {\n  background-color: rgb(144, 164, 174) !important; }\n\n.mdl-color-text--blue-grey-400 {\n  color: rgb(120, 144, 156) !important; }\n\n.mdl-color--blue-grey-400 {\n  background-color: rgb(120, 144, 156) !important; }\n\n.mdl-color-text--blue-grey-500 {\n  color: rgb(96, 125, 139) !important; }\n\n.mdl-color--blue-grey-500 {\n  background-color: rgb(96, 125, 139) !important; }\n\n.mdl-color-text--blue-grey-600 {\n  color: rgb(84, 110, 122) !important; }\n\n.mdl-color--blue-grey-600 {\n  background-color: rgb(84, 110, 122) !important; }\n\n.mdl-color-text--blue-grey-700 {\n  color: rgb(69, 90, 100) !important; }\n\n.mdl-color--blue-grey-700 {\n  background-color: rgb(69, 90, 100) !important; }\n\n.mdl-color-text--blue-grey-800 {\n  color: rgb(55, 71, 79) !important; }\n\n.mdl-color--blue-grey-800 {\n  background-color: rgb(55, 71, 79) !important; }\n\n.mdl-color-text--blue-grey-900 {\n  color: rgb(38, 50, 56) !important; }\n\n.mdl-color--blue-grey-900 {\n  background-color: rgb(38, 50, 56) !important; }\n\n.mdl-color--black {\n  background-color: rgb(0, 0, 0) !important; }\n\n.mdl-color-text--black {\n  color: rgb(0, 0, 0) !important; }\n\n.mdl-color--white {\n  background-color: rgb(255, 255, 255) !important; }\n\n.mdl-color-text--white {\n  color: rgb(255, 255, 255) !important; }\n\n.mdl-color--primary {\n  background-color: rgb(63, 81, 181) !important; }\n\n.mdl-color--primary-contrast {\n  background-color: rgb(255, 255, 255) !important; }\n\n.mdl-color--primary-dark {\n  background-color: rgb(48, 63, 159) !important; }\n\n.mdl-color--accent {\n  background-color: rgb(255, 64, 129) !important; }\n\n.mdl-color--accent-contrast {\n  background-color: rgb(255, 255, 255) !important; }\n\n.mdl-color-text--primary {\n  color: rgb(63, 81, 181) !important; }\n\n.mdl-color-text--primary-contrast {\n  color: rgb(255, 255, 255) !important; }\n\n.mdl-color-text--primary-dark {\n  color: rgb(48, 63, 159) !important; }\n\n.mdl-color-text--accent {\n  color: rgb(255, 64, 129) !important; }\n\n.mdl-color-text--accent-contrast {\n  color: rgb(255, 255, 255) !important; }\n";
    styleInject(css$14);

    var lappComponent = { Badge: Badge, Icon: Icon, Button: Button, Card: Card, Chip: Chip, Layout: Layout, TabPanel: TabPanel, Checkbox: Checkbox, Radio: Radio, Switch: Switch, Loading: Progress, Tooltip: Tooltip, Textfield: Textfield, DatetimePicker: DatetimePicker };

    return lappComponent;

})));
