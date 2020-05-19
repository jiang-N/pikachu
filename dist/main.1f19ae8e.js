// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/*\n**\u5927\u5BB6\u597D\n**\u4ECA\u5929\u7ED9\u5927\u5BB6\u53D8\u4E2A\u9B54\u672F\n*/\n.skin {\n    position: relative;\n    background: #ffe600;\n    height: 50vh;\n}\n\n/*\n**\u9996\u5148\n**\u6211\u6765\u7EC4\u6210\u9F3B\u5B50\n*/\n.nose {\n    border: 10px solid #000;\n    border-color: #000 transparent transparent;\n    border-bottom: none;\n    width: 0;\n    height: 0;\n    position: relative;\n    top: 135px;\n    left: 50%;\n    margin-left: -10px;\n}\n\n.yuan {\n    position: absolute;\n    top: -16px;\n    left: -10px;\n    border-top-left-radius: 10px 5px;\n    border-top-right-radius: 10px 5px;\n    width: 20px;\n    height: 6px;\n    background: #000;\n}\n\n/*\n**\u6211\u6765\u7EC4\u6210\u773C\u775B\n*/\n.eye {\n    width: 64px;\n    height: 64px;\n    border: 3px solid #000;\n    border-radius: 50%;\n    position: absolute;\n    top: 90px;\n    left: 50%;\n    margin-left: -32px;\n    background: #2e2e2e;\n}\n\n/*\n**\u6211\u6765\u7EC4\u6210\u773C\u73E0\u5B50\n*/\n.eye::before {\n    content: \"\";\n    display: block;\n    width: 32px;\n    height: 32px;\n    border: 3px solid #000;\n    border-radius: 50%;\n    background: #fff;\n    position: relative;\n    top: -1px;\n    left: 6px;\n}\n\n/*\n**\u628A\u6211\u653E\u5DE6\u8FB9\n*/\n.eye.left {\n    transform: translateX(120px);\n}\n\n/*\n**\u628A\u6211\u653E\u53F3\u8FB9\n*/\n.eye.right {\n    transform: translateX(-120px);\n}\n\n/*\n**\u6211\u6765\u7EC4\u6210\u5634\u5DF4\n*/\n.mouth {\n    width: 170px;\n    height: 170px;\n    position: absolute;\n    top: 170px;\n    left: 50%;\n    margin-left: -85px;\n}\n\n.mouth .up {\n    position: relative;\n    top: 0;\n    left: 0;\n    z-index: 1;\n}\n\n/*\n**\u6211\u662F\u5634\u5507\n*/\n.mouth .up .lip {\n    width: 82px;\n    height: 30px;\n    border: 3px solid #000;\n    position: absolute;\n    top: -10px;\n    left: 50%;\n    margin-left: -41px;\n    background: #ffe600;\n}\n\n/*\n**\u6211\u662F\u5DE6\u5634\u5507\n*/\n.mouth .up .lip.left {\n    border-bottom-left-radius: 60px 30px;\n    border-top: none;\n    border-right: none;\n    transform: translateX(-42px) rotate(-25deg);\n}\n\n/*\n**\u6211\u662F\u53F3\u5634\u5507\n*/\n.mouth .up .lip.right {\n    border-bottom-right-radius: 60px 30px;\n    border-top: none;\n    border-left: none;\n    transform: translateX(42px) rotate(25deg);\n}\n\n.mouth .down {\n    width: 100%;\n    height: 170px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n}\n\n.mouth .down .yuan1 {\n    border: 3px solid #000;\n    width: 170px;\n    height: 1000px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -85px;\n    border-bottom-left-radius: 100px 500px;\n    border-bottom-right-radius: 100px 500px;\n    background: #9b000a;\n    overflow: hidden;\n}\n\n/*\n**\u6211\u6765\u7EC4\u6210\u5C0F\u820C\u5934\n*/\n.mouth .down .yuan1 .yuan2 {\n    width: 100%;\n    height: 135px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    background: #ff485f;\n}\n\n/*\n**\u6211\u6765\u7EC4\u6210\u816E\u5E2E\u5B50\n*/\n.face {\n    width: 88px;\n    height: 88px;\n    position: absolute;\n    top: 210px;\n    left: 50%;\n    margin-left: -44px;\n    border: 3px solid #000;\n    border-radius: 50%;\n    background: #f00;\n}\n\n.face.left {\n    transform: translateX(-170px);\n}\n\n.face.right {\n    transform: translateX(170px);\n}\n\n/*\n**\u6211\u9EC4\u76AE\u8017\u5B50\u4E0D\u8BF7\u81EA\u6765!\n*/\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 50,
  n: 0,
  demoString: '',
  ui: {
    demo: document.querySelector('#demo'),
    style: document.querySelector('#style')
  },
  init: function init() {
    player.ui.style.innerHTML = _css.default.substring(0, player.n);
    player.ui.demo.innerText = _css.default.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    if (_css.default[player.n] === '\n') {
      player.demoString += '<br>';
    } else if (_css.default[player.n] === ' ') {
      player.demoString += '&nbsp;';
    } else {
      player.demoString += _css.default[player.n];
    }

    if (player.n > _css.default.length - 1) {
      player.pause;
      return;
    }

    player.ui.style.innerHTML = _css.default.substring(0, player.n);
    player.ui.demo.innerHTML = player.demoString;
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    player.n += 1;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "10037" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map