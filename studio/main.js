/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = Studio;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ResourcesProperties = __webpack_require__(2);

var _ResourcesProperties2 = _interopRequireDefault(_ResourcesProperties);

var _jsreportStudio = __webpack_require__(0);

var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jsreportStudio2.default.addApiSpec({
  options: {
    language: 'en'
  }
});

_jsreportStudio2.default.addPropertiesComponent(_ResourcesProperties2.default.title, _ResourcesProperties2.default, function (entity) {
  return entity.__entitySet === 'templates';
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _jsreportStudio = __webpack_require__(0);

var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EntityRefSelect = _jsreportStudio2.default.EntityRefSelect;

var selectValues = function selectValues(selected) {
  return selected.map(function (e) {
    return { shortid: e.shortid, entitySet: 'data' };
  });
};

var ResourcesProperties = function (_Component) {
  _inherits(ResourcesProperties, _Component);

  function ResourcesProperties() {
    _classCallCheck(this, ResourcesProperties);

    return _possibleConstructorReturn(this, (ResourcesProperties.__proto__ || Object.getPrototypeOf(ResourcesProperties)).apply(this, arguments));
  }

  _createClass(ResourcesProperties, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.removeInvalidDataReferences();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.removeInvalidDataReferences();
    }
  }, {
    key: 'removeInvalidDataReferences',
    value: function removeInvalidDataReferences() {
      var _props = this.props,
          entity = _props.entity,
          entities = _props.entities,
          onChange = _props.onChange;


      if (!entity.resources || !entity.resources.items.length) {
        return;
      }

      var updatedResources = entity.resources.items.filter(function (s) {
        return Object.keys(entities).filter(function (k) {
          return entities[k].__entitySet === 'data' && entities[k].shortid === s.shortid;
        }).length;
      });

      if (updatedResources.length !== entity.resources.items.length) {
        onChange({ _id: entity._id, resources: { defaultLanguage: entity.resources.defaultLanguage, items: updatedResources } });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          entity = _props2.entity,
          _onChange = _props2.onChange;

      var items = (entity.resources || {}).items || [];
      var defaultLanguage = (entity.resources || {}).defaultLanguage;

      return _react2.default.createElement(
        'div',
        { className: 'properties-section' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Default language ',
            _react2.default.createElement(
              'a',
              { href: 'http://jsreport.net/learn/resources', target: '_blank' },
              _react2.default.createElement('i', { className: 'fa fa-question' }),
              ' '
            )
          ),
          _react2.default.createElement('input', {
            type: 'text', placeholder: 'en', value: defaultLanguage || '',
            onChange: function onChange(v) {
              return _onChange({ _id: entity._id, resources: { defaultLanguage: v.target.value, items: items } });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(EntityRefSelect, {
            headingLabel: 'Select data',
            filter: function filter(references) {
              return { data: references.data };
            },
            value: items.map(function (s) {
              return s.shortid;
            }),
            onChange: function onChange(selected) {
              return _onChange({ _id: entity._id, resources: { items: selectValues(selected), defaultLanguage: defaultLanguage } });
            },
            multiple: true
          })
        )
      );
    }
  }], [{
    key: 'getSelectedResources',
    value: function getSelectedResources(entity, entities) {
      var getName = function getName(s) {
        var foundData = Object.keys(entities).map(function (k) {
          return entities[k];
        }).filter(function (sc) {
          return sc.shortid === s.shortid;
        });

        return foundData.length ? foundData[0].name : '';
      };

      return ((entity.resources || {}).items || []).map(function (d) {
        return _extends({}, d, {
          name: getName(d)
        });
      });
    }
  }, {
    key: 'title',
    value: function title(entity, entities) {
      if (!entity.resources) {
        return 'resources';
      }

      return 'resources: ' + (entity.resources.defaultLanguage || '') + ' ' + ResourcesProperties.getSelectedResources(entity, entities).map(function (s) {
        return s.name;
      }).join(', ');
    }
  }]);

  return ResourcesProperties;
}(_react.Component);

exports.default = ResourcesProperties;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = Studio.libraries['react'];

/***/ })
/******/ ]);