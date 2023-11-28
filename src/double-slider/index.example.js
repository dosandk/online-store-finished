function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var DoubleSlider=function(){function a(){var s=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.min,n=void 0===t?100:t,r=e.max,i=void 0===r?200:r,o=e.formatValue,t=void 0===o?function(e){return e}:o,r=e.selected,o=void 0===r?{from:n,to:i}:r,r=e.precision,r=void 0===r?0:r,e=e.filterName,e=void 0===e?"":e;_classCallCheck(this,a),_defineProperty(this,"element",void 0),_defineProperty(this,"subElements",{}),_defineProperty(this,"onThumbPointerMove",function(e){e.preventDefault();var t=s.subElements.inner.getBoundingClientRect(),n=t.left,r=t.right,i=t.width;s.dragging===s.subElements.thumbLeft&&((t=(e.clientX-n+s.shiftX)/i)<0&&(t=0),t*=100,n=parseFloat(s.subElements.thumbRight.style.right),s.dragging.style.left=s.subElements.progress.style.left=(t=100<t+n?100-n:t)+"%",s.subElements.from.innerHTML=s.formatValue(s.getValue().from)),s.dragging===s.subElements.thumbRight&&((e=(r-e.clientX-s.shiftX)/i)<0&&(e=0),e*=100,i=parseFloat(s.subElements.thumbLeft.style.left),s.dragging.style.right=s.subElements.progress.style.right=(e=100<i+e?100-i:e)+"%",s.subElements.to.innerHTML=s.formatValue(s.getValue().to))}),_defineProperty(this,"onThumbPointerUp",function(){s.element.classList.remove("range-slider_dragging"),document.removeEventListener("pointermove",s.onThumbPointerMove),document.removeEventListener("pointerup",s.onThumbPointerUp),s.element.dispatchEvent(new CustomEvent("range-selected",{bubbles:!0,detail:{filterName:s.filterName,value:s.getValue()}}))}),this.min=n,this.max=i,this.formatValue=t,this.selected=o,this.precision=Math.pow(10,r),this.filterName=e,this.render()}return _createClass(a,[{key:"template",get:function(){var e=this.selected,t=e.from,e=e.to;return'<div class="range-slider">\n      <span data-element="from">'.concat(this.formatValue(t),'</span>\n      <div data-element="inner" class="range-slider__inner">\n        <span data-element="progress" class="range-slider__progress"></span>\n        <span data-element="thumbLeft" class="range-slider__thumb-left"></span>\n        <span data-element="thumbRight" class="range-slider__thumb-right"></span>\n      </div>\n      <span data-element="to">').concat(this.formatValue(e),"</span>\n    </div>")}},{key:"render",value:function(){var e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,this.element.ondragstart=function(){return!1},this.subElements=this.getSubElements(e),this.initEventListeners(),this.update()}},{key:"initEventListeners",value:function(){var t=this,e=this.subElements,n=e.thumbLeft,e=e.thumbRight;n.addEventListener("pointerdown",function(e){return t.onThumbPointerDown(e)}),e.addEventListener("pointerdown",function(e){return t.onThumbPointerDown(e)})}},{key:"getSubElements",value:function(e){var t,n={},r=_createForOfIteratorHelper(e.querySelectorAll("[data-element]"));try{for(r.s();!(t=r.n()).done;){var i=t.value;n[i.dataset.element]=i}}catch(e){r.e(e)}finally{r.f()}return n}},{key:"remove",value:function(){this.element.remove()}},{key:"destroy",value:function(){this.remove(),document.removeEventListener("pointermove",this.onThumbPointerMove),document.removeEventListener("pointerup",this.onThumbPointerUp)}},{key:"update",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.selected.from,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.selected.to,n=this.max-this.min,r=Math.floor((e-this.min)/n*100)+"%",n=Math.floor((this.max-t)/n*100)+"%";this.subElements.progress.style.left=r,this.subElements.progress.style.right=n,this.subElements.thumbLeft.style.left=r,this.subElements.thumbRight.style.right=n,this.subElements.from.innerText=this.formatValue(e),this.subElements.to.innerText=this.formatValue(t)}},{key:"onThumbPointerDown",value:function(e){var t=e.target;e.preventDefault();var n=t.getBoundingClientRect(),r=n.left,n=n.right;t===this.subElements.thumbLeft?this.shiftX=n-e.clientX:this.shiftX=r-e.clientX,this.dragging=t,this.element.classList.add("range-slider_dragging"),document.addEventListener("pointermove",this.onThumbPointerMove),document.addEventListener("pointerup",this.onThumbPointerUp)}},{key:"getValue",value:function(){var e=this.max-this.min,t=this.subElements.thumbLeft.style.left,n=this.subElements.thumbRight.style.right,t=parseFloat(t)*e/100,e=parseFloat(n)*e/100;return{from:Math.round((this.min+t)*this.precision)/this.precision,to:Math.round((this.max-e)*this.precision)/this.precision}}},{key:"reset",value:function(){this.selected={from:this.min,to:this.max},this.update()}}]),a}();export{DoubleSlider as default};