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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/player.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/player.js":
/*!**********************!*\
  !*** ./js/player.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar VideoPlayer =\n/*#__PURE__*/\nfunction () {\n  function VideoPlayer(settings) {\n    _classCallCheck(this, VideoPlayer);\n\n    this._settings = Object.assign(VideoPlayer.DefaultSettings, settings);\n  }\n\n  _createClass(VideoPlayer, [{\n    key: \"init\",\n    value: function init() {\n      if (!this._settings.videoUrl) return console.error('Provide video Url');\n      if (!this._settings.videoPlayerContainer) return console.error('Please provide video player container'); // Создаем разметку для video\n\n      this._addTemplate(); // Найти все элементы управления\n\n\n      this._setElements(); // Установить обработчики событий\n\n\n      this._setEvents();\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      var method = this._video.paused ? 'play' : 'pause';\n      this._toggleBtn.textContent = this._video.paused ? '❚ ❚' : '►';\n\n      this._video[method]();\n    }\n  }, {\n    key: \"_videoProgressHandler\",\n    value: function _videoProgressHandler() {\n      var percent = this._video.currentTime / this._video.duration * 100;\n      this._progress.style.flexBasis = \"\".concat(percent, \"%\");\n    } // добавил методы: _volumeChange(),  _playbackRateChange(), _rewindPrev(),\n    // _rewindNext(), \n\n  }, {\n    key: \"_volumeChange\",\n    value: function _volumeChange() {\n      var volumeValue = this._volume.value;\n\n      this._volume.setAttribute('value', \"\".concat(volumeValue));\n\n      this._video.volume = this._volume.getAttribute('value');\n    }\n  }, {\n    key: \"_playbackRateChange\",\n    value: function _playbackRateChange() {\n      var playbackRateValue = this._playbackRate.value;\n\n      this._playbackRate.setAttribute('value', \"\".concat(playbackRateValue));\n\n      this._video.playbackRate = this._playbackRate.getAttribute('value');\n    }\n  }, {\n    key: \"_rewindPrev\",\n    value: function _rewindPrev() {\n      this._video.currentTime += parseInt(this._rewindBtnPrev.dataset.skip);\n    }\n  }, {\n    key: \"_rewindNext\",\n    value: function _rewindNext() {\n      this._video.currentTime += parseInt(this._rewindBtnNext.dataset.skip);\n    }\n  }, {\n    key: \"_runBack\",\n    value: function _runBack(event) {\n      this._video.currentTime = event.offsetX / this._progressContainer.offsetWidth * this._video.duration;\n    }\n  }, {\n    key: \"_addTemplate\",\n    value: function _addTemplate() {\n      var template = this._createVideoTemplate();\n\n      var container = document.querySelector(this._settings.videoPlayerContainer);\n      container ? container.insertAdjacentHTML('afterbegin', template) : console.error('Video container was not found');\n    } // добавил элементы: _volume, _playbackRate, _rewindBtnPrev, _rewindBtnNext\n\n  }, {\n    key: \"_setElements\",\n    value: function _setElements() {\n      this._videoContainer = document.querySelector(this._settings.videoPlayerContainer);\n      this._video = this._videoContainer.querySelector('video');\n      this._toggleBtn = this._videoContainer.querySelector('.toggle');\n      this._progress = this._videoContainer.querySelector('.progress__filled');\n      this._progressContainer = this._videoContainer.querySelector('.progress');\n      this._volume = document.getElementsByName('volume')[0];\n      this._playbackRate = document.getElementsByName('playbackRate')[0];\n      this._rewindBtnPrev = this._videoContainer.querySelectorAll('button')[1];\n      this._rewindBtnNext = this._videoContainer.querySelectorAll('button')[2];\n    } // добавил события: _volume, _playbackRate, _rewindBtnPrev, _rewindBtnNext, \n    // _video(двойное нажатие для перемотки на левой и правой части плеера)\n\n  }, {\n    key: \"_setEvents\",\n    value: function _setEvents() {\n      var _this = this;\n\n      this._video.addEventListener('click', function () {\n        return _this.toggle();\n      });\n\n      this._toggleBtn.addEventListener('click', function () {\n        return _this.toggle();\n      });\n\n      this._video.addEventListener('timeupdate', function () {\n        return _this._videoProgressHandler();\n      });\n\n      this._progressContainer.addEventListener('click', function (e) {\n        return _this._runBack(e);\n      });\n\n      this._volume.addEventListener('input', function () {\n        return _this._volumeChange();\n      });\n\n      this._playbackRate.addEventListener('input', function () {\n        return _this._playbackRateChange();\n      });\n\n      this._rewindBtnPrev.addEventListener('click', function () {\n        return _this._rewindPrev();\n      });\n\n      this._rewindBtnNext.addEventListener('click', function () {\n        return _this._rewindNext();\n      });\n\n      this._video.addEventListener('dblclick', function (e) {\n        return e.clientX - _this._video.getBoundingClientRect().left < _this._video.videoWidth / 2 ? _this._rewindPrev() : _this._rewindNext();\n      });\n    }\n  }, {\n    key: \"_createVideoTemplate\",\n    value: function _createVideoTemplate() {\n      return \"\\n        <div class=\\\"player\\\">\\n            <video class=\\\"player__video viewer\\\" src=\\\"\".concat(this._settings.videoUrl, \"\\\"> </video>\\n            <div class=\\\"player__controls\\\">\\n              <div class=\\\"progress\\\">\\n              <div class=\\\"progress__filled\\\"></div>\\n              </div>\\n              <button class=\\\"player__button toggle\\\" title=\\\"Toggle Play\\\">\\u25BA</button>\\n              <input type=\\\"range\\\" name=\\\"volume\\\" class=\\\"player__slider\\\" min=0 max=\\\"1\\\" step=\\\"0.05\\\" value=\\\"\").concat(this._settings.volume, \"\\\">\\n              <input type=\\\"range\\\" name=\\\"playbackRate\\\" class=\\\"player__slider\\\" min=\\\"0.5\\\" max=\\\"2\\\" step=\\\"0.1\\\" value=\\\"\").concat(this._settings.playbackRate, \"\\\">\\n              <button data-skip=\\\"-\").concat(this._settings.rewindPrev, \"\\\" class=\\\"player__button\\\">\\xAB \").concat(this._settings.rewindPrev, \"s</button>\\n              <button data-skip=\\\"\").concat(this._settings.rewindNext, \"\\\" class=\\\"player__button\\\">\").concat(this._settings.rewindNext, \"s \\xBB</button>\\n            </div>\\n        </div>\\n        \");\n    } // добавил св-ва: playbackRate, rewindPrev, rewindNext\n\n  }], [{\n    key: \"DefaultSettings\",\n    get: function get() {\n      return {\n        videoUrl: '',\n        videoPlayerContainer: 'body',\n        volume: 1,\n        playbackRate: 1,\n        rewindPrev: 1,\n        rewindNext: 1\n      };\n    }\n  }]);\n\n  return VideoPlayer;\n}();\n\nvar playerInstance = new VideoPlayer({\n  videoUrl: 'video/mov_bbb.mp4'\n});\nplayerInstance.init();\n\n//# sourceURL=webpack:///./js/player.js?");

/***/ })

/******/ });