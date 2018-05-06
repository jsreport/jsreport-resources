/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Properties = __webpack_require__(1);
	
	var _Properties2 = _interopRequireDefault(_Properties);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addApiSpec({
	  options: {
	    language: 'en'
	  }
	});
	
	_jsreportStudio2.default.addPropertiesComponent(_Properties2.default.title, _Properties2.default, function (entity) {
	  return entity.__entitySet === 'templates';
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MultiSelect = _jsreportStudio2.default.MultiSelect;
	
	var Properties = function (_Component) {
	  _inherits(Properties, _Component);
	
	  function Properties() {
	    _classCallCheck(this, Properties);
	
	    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
	  }
	
	  _createClass(Properties, [{
	    key: 'selectData',
	    value: function selectData(entities) {
	      return Object.keys(entities).filter(function (k) {
	        return entities[k].__entitySet === 'data';
	      }).map(function (k) {
	        return entities[k];
	      });
	    }
	  }, {
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
	          entities = _props2.entities,
	          _onChange = _props2.onChange;
	
	      var data = this.selectData(entities);
	
	      var selectValues = function selectValues(selectData) {
	        var selectedValue = selectData.value,
	            options = selectData.options;
	
	        var items = [];
	
	        for (var i = 0; i < options.length; i++) {
	          var optionIsSelected = selectedValue.indexOf(options[i].value) !== -1;
	
	          if (optionIsSelected) {
	            if (!items.filter(function (s) {
	              return s.shortid === options[i].value;
	            }).length) {
	              items.push({ shortid: options[i].value });
	            }
	          } else {
	            if (items.filter(function (s) {
	              return s.shortid === options[i].value;
	            }).length) {
	              items = items.filter(function (s) {
	                return s.shortid !== options[i].value;
	              });
	            }
	          }
	        }
	
	        return items.map(function (i) {
	          return _extends({}, i, { entitySet: 'data' });
	        });
	      };
	
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
	          _react2.default.createElement(MultiSelect, {
	            title: 'Use the checkboxes to select/deselect multiple options',
	            size: 7,
	            value: items.map(function (s) {
	              return s.shortid;
	            }),
	            onChange: function onChange(selectData) {
	              return _onChange({ _id: entity._id, resources: { items: selectValues(selectData), defaultLanguage: defaultLanguage } });
	            },
	            options: data.map(function (d) {
	              return { key: d.shortid, name: d.name, value: d.shortid };
	            })
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
	
	      return 'resources: ' + (entity.resources.defaultLanguage || '') + ' ' + Properties.getSelectedResources(entity, entities).map(function (s) {
	        return s.name;
	      }).join(', ');
	    }
	  }]);
	
	  return Properties;
	}(_react.Component);
	
	exports.default = Properties;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ }
/******/ ]);