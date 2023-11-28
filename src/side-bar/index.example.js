function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}import FiltersList from"../../filters-list/solution/index.js";import DoubleSlider from"../../../09-javascript-04/double-slider/solution/index.js";var SideBar=function(){function n(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];_classCallCheck(this,n),_defineProperty(this,"element",void 0),_defineProperty(this,"subElements",{}),_defineProperty(this,"components",{}),this.categoriesFilter=e,this.brandFilter=t,this.initializeComponents(),this.render(),this.getSubElements(),this.renderComponents(),this.addEventListeners()}return _createClass(n,[{key:"update",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];this.components.categoriesFilter.update(e),this.components.brandFilter.update(t)}},{key:"template",get:function(){return'\n      <aside>\n        <form class="os-filters-panel-content">\n          <div class="os-form-group">\n            <h3 class="os-form-title">Price</h3>\n             <div data-element="priceSlider">\n              \x3c!-- Double Slider price --\x3e\n            </div>\n          </div>\n\n          <div data-element="categoriesFilter">\n            \x3c!-- Category --\x3e\n          </div>\n          <div data-element="brandFilter">\n            \x3c!-- Brand --\x3e\n          </div>\n\n          <div class="os-form-group">\n            <h3 class="os-form-title">Rating</h3>\n            <div data-element="ratingSlider">\n              \x3c!-- Double Slider rating --\x3e\n            </div>\n          </div>\n\n        </form>\n\n        <button data-element="clearFilters" class="os-btn-primary clear-filters" type="button">CLEAR ALL FILTERS</button>\n      </aside>\n    '}},{key:"initializeComponents",value:function(){var e=new DoubleSlider({min:0,max:85e3,filterName:"price",formatValue:function(e){return"".concat(e," UAH")}}),t=new FiltersList({title:"Category",name:"categories",list:this.categoriesFilter}),n=new FiltersList({title:"Brand",name:"brands",list:this.brandFilter}),r=new DoubleSlider({min:0,max:5,precision:2,filterName:"rating"});this.components={priceSlider:e,categoriesFilter:t,brandFilter:n,ratingSlider:r}}},{key:"renderComponents",value:function(){var n=this;Object.keys(this.components).forEach(function(e){var t=n.subElements[e],e=n.components[e].element;e&&t.append(e)})}},{key:"render",value:function(){var e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild}},{key:"getSubElements",value:function(){var e,t={},n=_createForOfIteratorHelper(this.element.querySelectorAll("[data-element]"));try{for(n.s();!(e=n.n()).done;){var r=e.value;t[r.dataset.element]=r}}catch(e){n.e(e)}finally{n.f()}this.subElements=t}},{key:"addEventListeners",value:function(){var n=this;this.subElements.clearFilters.addEventListener("pointerdown",function(){for(var e=0,t=Object.values(n.components);e<t.length;e++)t[e].reset();n.element.dispatchEvent(new CustomEvent("clear-filters",{bubbles:!0}))})}},{key:"remove",value:function(){this.element&&this.element.remove()}},{key:"destroy",value:function(){this.remove(),this.element=null,this.subElements={},this.components={}}}]),n}();export{SideBar as default};