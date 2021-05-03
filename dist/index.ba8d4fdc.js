// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1zhwm":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "86173bd10064618545331cc9ba8d4fdc";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
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
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"6Zseh":[function(require,module,exports) {
var define;
/*! UIkit 3.0.3 | http://www.getuikit.com | (c) 2014 - 2018 YOOtheme | MIT License*/
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikit", e) : (t = t || self).UIkit = e();
})(this, function () {
  "use strict";
  function p(i, n) {
    return function (t) {
      var e = arguments.length;
      return e ? 1 < e ? i.apply(n, arguments) : i.call(n, t) : i.call(n);
    };
  }
  var e = Object.prototype, i = e.hasOwnProperty;
  function l(t, e) {
    return i.call(t, e);
  }
  var n = {}, r = /([a-z\d])([A-Z])/g;
  function m(t) {
    return ((t in n) || (n[t] = t.replace(r, "$1-$2").toLowerCase()), n[t]);
  }
  var o = /-(\w)/g;
  function g(t) {
    return t.replace(o, s);
  }
  function s(t, e) {
    return e ? e.toUpperCase() : "";
  }
  function a(t) {
    return t.length ? s(0, t.charAt(0)) + t.slice(1) : "";
  }
  var t = String.prototype, h = t.startsWith || (function (t) {
    return 0 === this.lastIndexOf(t, 0);
  });
  function v(t, e) {
    return h.call(t, e);
  }
  var c = t.endsWith || (function (t) {
    return this.substr(-t.length) === t;
  });
  function u(t, e) {
    return c.call(t, e);
  }
  var d = function (t) {
    return ~this.indexOf(t);
  }, f = t.includes || d, w = Array.prototype.includes || d;
  function b(t, e) {
    return t && (_(t) ? f : w).call(t, e);
  }
  var y = Array.isArray;
  function x(t) {
    return "function" == typeof t;
  }
  function k(t) {
    return null !== t && "object" == typeof t;
  }
  function $(t) {
    return k(t) && Object.getPrototypeOf(t) === e;
  }
  function I(t) {
    return k(t) && t === t.window;
  }
  function S(t) {
    return k(t) && 9 === t.nodeType;
  }
  function T(t) {
    return k(t) && !!t.jquery;
  }
  function E(t) {
    return t instanceof Node || k(t) && 1 <= t.nodeType;
  }
  var C = e.toString;
  function A(t) {
    return C.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/);
  }
  function N(t) {
    return "boolean" == typeof t;
  }
  function _(t) {
    return "string" == typeof t;
  }
  function M(t) {
    return "number" == typeof t;
  }
  function D(t) {
    return M(t) || _(t) && !isNaN(t - parseFloat(t));
  }
  function O(t) {
    return void 0 === t;
  }
  function B(t) {
    return N(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t;
  }
  function z(t) {
    var e = Number(t);
    return !isNaN(e) && e;
  }
  function P(t) {
    return parseFloat(t) || 0;
  }
  function H(t) {
    return E(t) || I(t) || S(t) ? t : A(t) || T(t) ? t[0] : y(t) ? H(t[0]) : null;
  }
  var F = Array.prototype;
  function L(t) {
    return E(t) ? [t] : A(t) ? F.slice.call(t) : y(t) ? t.map(H).filter(Boolean) : T(t) ? t.toArray() : [];
  }
  function j(t) {
    return y(t) ? t : _(t) ? t.split(/,(?![^(]*\))/).map(function (t) {
      return D(t) ? z(t) : B(t.trim());
    }) : [t];
  }
  function W(t) {
    return t ? u(t, "ms") ? P(t) : 1e3 * P(t) : 0;
  }
  function V(t, i) {
    return t === i || k(t) && k(i) && Object.keys(t).length === Object.keys(i).length && q(t, function (t, e) {
      return t === i[e];
    });
  }
  function Y(t, e, i) {
    return t.replace(new RegExp(e + "|" + i, "mg"), function (t) {
      return t === e ? i : e;
    });
  }
  var R = Object.assign || (function (t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; ) e[i] = arguments[i + 1];
    t = Object(t);
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      if (null !== r) for (var o in r) l(r, o) && (t[o] = r[o]);
    }
    return t;
  });
  function q(t, e) {
    for (var i in t) if (!1 === e(t[i], i)) return !1;
    return !0;
  }
  function U(t, r) {
    return t.sort(function (t, e) {
      var i = t[r];
      void 0 === i && (i = 0);
      var n = e[r];
      return (void 0 === n && (n = 0), n < i ? 1 : i < n ? -1 : 0);
    });
  }
  function X(t, e, i) {
    return (void 0 === e && (e = 0), void 0 === i && (i = 1), Math.min(Math.max(z(t) || 0, e), i));
  }
  function K() {}
  function G(t, e) {
    return t.left < e.right && t.right > e.left && t.top < e.bottom && t.bottom > e.top;
  }
  function J(t, e) {
    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
  }
  var Z = {
    ratio: function (t, e, i) {
      var n, r = "width" === e ? "height" : "width";
      return ((n = {})[r] = t[e] ? Math.round(i * t[r] / t[e]) : t[r], n[e] = i, n);
    },
    contain: function (i, n) {
      var r = this;
      return (q(i = R({}, i), function (t, e) {
        return i = i[e] > n[e] ? r.ratio(i, e, n[e]) : i;
      }), i);
    },
    cover: function (i, n) {
      var r = this;
      return (q(i = this.contain(i, n), function (t, e) {
        return i = i[e] < n[e] ? r.ratio(i, e, n[e]) : i;
      }), i);
    }
  };
  function Q(t, e, i) {
    if (k(e)) for (var n in e) Q(t, n, e[n]); else {
      if (O(i)) return (t = H(t)) && t.getAttribute(e);
      L(t).forEach(function (t) {
        (x(i) && (i = i.call(t, Q(t, e))), null === i ? et(t, e) : t.setAttribute(e, i));
      });
    }
  }
  function tt(t, e) {
    return L(t).some(function (t) {
      return t.hasAttribute(e);
    });
  }
  function et(t, e) {
    (t = L(t), e.split(" ").forEach(function (e) {
      return t.forEach(function (t) {
        return t.removeAttribute(e);
      });
    }));
  }
  function it(t, e) {
    for (var i = 0, n = [e, "data-" + e]; i < n.length; i++) if (tt(t, n[i])) return Q(t, n[i]);
  }
  function nt(t, e) {
    return H(t) || st(t, ot(t, e));
  }
  function rt(t, e) {
    var i = L(t);
    return i.length && i || at(t, ot(t, e));
  }
  function ot(t, e) {
    return (void 0 === e && (e = document), ut(t) || S(e) ? e : e.ownerDocument);
  }
  function st(t, e) {
    return H(ht(t, e, "querySelector"));
  }
  function at(t, e) {
    return L(ht(t, e, "querySelectorAll"));
  }
  function ht(t, s, e) {
    if ((void 0 === s && (s = document), !t || !_(t))) return null;
    var a;
    ut(t = t.replace(ct, "$1 *")) && (a = [], t = t.split(",").map(function (t, e) {
      var i = s;
      if ("!" === (t = t.trim())[0]) {
        var n = t.substr(1).trim().split(" ");
        (i = gt(s.parentNode, n[0]), t = n.slice(1).join(" ").trim());
      }
      if ("-" === t[0]) {
        var r = t.substr(1).trim().split(" "), o = (i || s).previousElementSibling;
        (i = pt(o, t.substr(1)) ? o : null, t = r.slice(1).join(" "));
      }
      return i ? (i.id || (i.id = "uk-" + Date.now() + e, a.push(function () {
        return et(i, "id");
      })), "#" + bt(i.id) + " " + t) : null;
    }).filter(Boolean).join(","), s = document);
    try {
      return s[e](t);
    } catch (t) {
      return null;
    } finally {
      a && a.forEach(function (t) {
        return t();
      });
    }
  }
  var lt = /(^|,)\s*[!>+~-]/, ct = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;
  function ut(t) {
    return _(t) && t.match(lt);
  }
  var dt = Element.prototype, ft = dt.matches || dt.webkitMatchesSelector || dt.msMatchesSelector;
  function pt(t, e) {
    return L(t).some(function (t) {
      return ft.call(t, e);
    });
  }
  var mt = dt.closest || (function (t) {
    var e = this;
    do {
      if (pt(e, t)) return e;
      e = e.parentNode;
    } while (e && 1 === e.nodeType);
  });
  function gt(t, e) {
    return (v(e, ">") && (e = e.slice(1)), E(t) ? t.parentNode && mt.call(t, e) : L(t).map(function (t) {
      return gt(t, e);
    }).filter(Boolean));
  }
  function vt(t, e) {
    for (var i = [], n = H(t).parentNode; n && 1 === n.nodeType; ) (pt(n, e) && i.push(n), n = n.parentNode);
    return i;
  }
  var wt = window.CSS && CSS.escape || (function (t) {
    return t.replace(/([^\x7f-\uFFFF\w-])/g, function (t) {
      return "\\" + t;
    });
  });
  function bt(t) {
    return _(t) ? wt.call(null, t) : "";
  }
  var yt = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    menuitem: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  };
  function xt(t) {
    return L(t).some(function (t) {
      return yt[t.tagName.toLowerCase()];
    });
  }
  function kt(t) {
    return L(t).some(function (t) {
      return t.offsetWidth || t.offsetHeight || t.getClientRects().length;
    });
  }
  var $t = "input,select,textarea,button";
  function It(t) {
    return L(t).some(function (t) {
      return pt(t, $t);
    });
  }
  function St(t, e) {
    return L(t).filter(function (t) {
      return pt(t, e);
    });
  }
  function Tt(t, e) {
    return _(e) ? pt(t, e) || gt(t, e) : t === e || (S(e) ? e.documentElement : H(e)).contains(H(t));
  }
  var Et = (/msie|trident/i).test(window.navigator.userAgent), Ct = "rtl" === Q(document.documentElement, "dir"), At = ("ontouchstart" in window), Nt = window.PointerEvent, _t = At || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints, Mt = Nt ? "pointerdown" : At ? "touchstart" : "mousedown", Dt = Nt ? "pointermove" : At ? "touchmove" : "mousemove", Ot = Nt ? "pointerup" : At ? "touchend" : "mouseup", Bt = Nt ? "pointerenter" : At ? "" : "mouseenter", zt = Nt ? "pointerleave" : At ? "" : "mouseleave", Pt = Nt ? "pointercancel" : "touchcancel";
  function Ht() {
    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
    var i, n = Vt(t), r = n[0], o = n[1], s = n[2], a = n[3], h = n[4];
    return (r = qt(r), s && (a = (function (t, n, r) {
      var o = this;
      return function (i) {
        t.forEach(function (t) {
          var e = ">" === n[0] ? at(n, t).reverse().filter(function (t) {
            return Tt(i.target, t);
          })[0] : gt(i.target, n);
          e && (i.delegate = t, i.current = e, r.call(o, i));
        });
      };
    })(r, s, a)), 1 < a.length && (i = a, a = function (t) {
      return y(t.detail) ? i.apply(void 0, [t].concat(t.detail)) : i(t);
    }), o.split(" ").forEach(function (e) {
      return r.forEach(function (t) {
        return t.addEventListener(e, a, h);
      });
    }), function () {
      return Ft(r, o, a, h);
    });
  }
  function Ft(t, e, i, n) {
    (void 0 === n && (n = !1), t = qt(t), e.split(" ").forEach(function (e) {
      return t.forEach(function (t) {
        return t.removeEventListener(e, i, n);
      });
    }));
  }
  function Lt() {
    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
    var i = Vt(t), n = i[0], r = i[1], o = i[2], s = i[3], a = i[4], h = i[5], l = Ht(n, r, o, function (t) {
      var e = !h || h(t);
      e && (l(), s(t, e));
    }, a);
    return l;
  }
  function jt(t, i, n) {
    return qt(t).reduce(function (t, e) {
      return t && e.dispatchEvent(Wt(i, !0, !0, n));
    }, !0);
  }
  function Wt(t, e, i, n) {
    if ((void 0 === e && (e = !0), void 0 === i && (i = !1), _(t))) {
      var r = document.createEvent("CustomEvent");
      (r.initCustomEvent(t, e, i, n), t = r);
    }
    return t;
  }
  function Vt(t) {
    return (x(t[2]) && t.splice(2, 0, !1), t);
  }
  function Yt(t) {
    return t && ("addEventListener" in t);
  }
  function Rt(t) {
    return Yt(t) ? t : H(t);
  }
  function qt(t) {
    return y(t) ? t.map(Rt).filter(Boolean) : _(t) ? at(t) : Yt(t) ? [t] : L(t);
  }
  function Ut() {
    var e = setTimeout(Lt(document, "click", function (t) {
      (t.preventDefault(), t.stopImmediatePropagation(), clearTimeout(e));
    }, !0));
    jt(document, Pt);
  }
  var Xt = ("Promise" in window) ? window.Promise : Zt, Kt = function () {
    var i = this;
    this.promise = new Xt(function (t, e) {
      (i.reject = e, i.resolve = t);
    });
  }, Gt = 2, Jt = ("setImmediate" in window) ? setImmediate : setTimeout;
  function Zt(t) {
    (this.state = Gt, this.value = void 0, this.deferred = []);
    var e = this;
    try {
      t(function (t) {
        e.resolve(t);
      }, function (t) {
        e.reject(t);
      });
    } catch (t) {
      e.reject(t);
    }
  }
  (Zt.reject = function (i) {
    return new Zt(function (t, e) {
      e(i);
    });
  }, Zt.resolve = function (i) {
    return new Zt(function (t, e) {
      t(i);
    });
  }, Zt.all = function (s) {
    return new Zt(function (i, t) {
      var n = [], r = 0;
      function e(e) {
        return function (t) {
          (n[e] = t, (r += 1) === s.length && i(n));
        };
      }
      0 === s.length && i(n);
      for (var o = 0; o < s.length; o += 1) Zt.resolve(s[o]).then(e(o), t);
    });
  }, Zt.race = function (n) {
    return new Zt(function (t, e) {
      for (var i = 0; i < n.length; i += 1) Zt.resolve(n[i]).then(t, e);
    });
  });
  var Qt = Zt.prototype;
  function te(s, a) {
    return new Xt(function (t, e) {
      var i = R({
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: K,
        responseType: ""
      }, a);
      i.beforeSend(i);
      var n = i.xhr;
      for (var r in i) if ((r in n)) try {
        n[r] = i[r];
      } catch (t) {}
      for (var o in (n.open(i.method.toUpperCase(), s), i.headers)) n.setRequestHeader(o, i.headers[o]);
      (Ht(n, "load", function () {
        0 === n.status || 200 <= n.status && n.status < 300 || 304 === n.status ? t(n) : e(R(Error(n.statusText), {
          xhr: n,
          status: n.status
        }));
      }), Ht(n, "error", function () {
        return e(R(Error("Network Error"), {
          xhr: n
        }));
      }), Ht(n, "timeout", function () {
        return e(R(Error("Network Timeout"), {
          xhr: n
        }));
      }), n.send(i.data));
    });
  }
  function ee(n, r, o) {
    return new Xt(function (t, e) {
      var i = new Image();
      (i.onerror = e, i.onload = function () {
        return t(i);
      }, o && (i.sizes = o), r && (i.srcset = r), i.src = n);
    });
  }
  function ie(t) {
    if ("loading" === document.readyState) var e = Ht(document, "DOMContentLoaded", function () {
      (e(), t());
    }); else t();
  }
  function ne(t, e) {
    return e ? L(t).indexOf(H(e)) : L((t = H(t)) && t.parentNode.children).indexOf(t);
  }
  function re(t, e, i, n) {
    (void 0 === i && (i = 0), void 0 === n && (n = !1));
    var r = (e = L(e)).length;
    return (t = D(t) ? z(t) : "next" === t ? i + 1 : "previous" === t ? i - 1 : ne(e, t), n ? X(t, 0, r - 1) : (t %= r) < 0 ? t + r : t);
  }
  function oe(t) {
    return ((t = be(t)).innerHTML = "", t);
  }
  function se(t, e) {
    return (t = be(t), O(e) ? t.innerHTML : ae(t.hasChildNodes() ? oe(t) : t, e));
  }
  function ae(e, t) {
    return (e = be(e), ce(t, function (t) {
      return e.appendChild(t);
    }));
  }
  function he(e, t) {
    return (e = be(e), ce(t, function (t) {
      return e.parentNode.insertBefore(t, e);
    }));
  }
  function le(e, t) {
    return (e = be(e), ce(t, function (t) {
      return e.nextSibling ? he(e.nextSibling, t) : ae(e.parentNode, t);
    }));
  }
  function ce(t, e) {
    return (t = _(t) ? ve(t) : t) ? ("length" in t) ? L(t).map(e) : e(t) : null;
  }
  function ue(t) {
    L(t).map(function (t) {
      return t.parentNode && t.parentNode.removeChild(t);
    });
  }
  function de(t, e) {
    for (e = H(he(t, e)); e.firstChild; ) e = e.firstChild;
    return (ae(e, t), e);
  }
  function fe(t, e) {
    return L(L(t).map(function (t) {
      return t.hasChildNodes ? de(L(t.childNodes), e) : ae(t, e);
    }));
  }
  function pe(t) {
    L(t).map(function (t) {
      return t.parentNode;
    }).filter(function (t, e, i) {
      return i.indexOf(t) === e;
    }).forEach(function (t) {
      (he(t, t.childNodes), ue(t));
    });
  }
  (Qt.resolve = function (t) {
    var e = this;
    if (e.state === Gt) {
      if (t === e) throw new TypeError("Promise settled with itself.");
      var i = !1;
      try {
        var n = t && t.then;
        if (null !== t && k(t) && x(n)) return void n.call(t, function (t) {
          (i || e.resolve(t), i = !0);
        }, function (t) {
          (i || e.reject(t), i = !0);
        });
      } catch (t) {
        return void (i || e.reject(t));
      }
      (e.state = 0, e.value = t, e.notify());
    }
  }, Qt.reject = function (t) {
    var e = this;
    if (e.state === Gt) {
      if (t === e) throw new TypeError("Promise settled with itself.");
      (e.state = 1, e.value = t, e.notify());
    }
  }, Qt.notify = function () {
    var o = this;
    Jt(function () {
      if (o.state !== Gt) for (; o.deferred.length; ) {
        var t = o.deferred.shift(), e = t[0], i = t[1], n = t[2], r = t[3];
        try {
          0 === o.state ? x(e) ? n(e.call(void 0, o.value)) : n(o.value) : 1 === o.state && (x(i) ? n(i.call(void 0, o.value)) : r(o.value));
        } catch (t) {
          r(t);
        }
      }
    });
  }, Qt.then = function (i, n) {
    var r = this;
    return new Zt(function (t, e) {
      (r.deferred.push([i, n, t, e]), r.notify());
    });
  }, Qt.catch = function (t) {
    return this.then(void 0, t);
  });
  var me = /^\s*<(\w+|!)[^>]*>/, ge = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  function ve(t) {
    var e = ge.exec(t);
    if (e) return document.createElement(e[1]);
    var i = document.createElement("div");
    return (me.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, 1 < i.childNodes.length ? L(i.childNodes) : i.firstChild);
  }
  function we(t, e) {
    if (t && 1 === t.nodeType) for ((e(t), t = t.firstElementChild); t; ) (we(t, e), t = t.nextElementSibling);
  }
  function be(t, e) {
    return _(t) ? xe(t) ? H(ve(t)) : st(t, e) : H(t);
  }
  function ye(t, e) {
    return _(t) ? xe(t) ? L(ve(t)) : at(t, e) : L(t);
  }
  function xe(t) {
    return "<" === t[0] || t.match(/^\s*</);
  }
  function ke(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; ) e[i] = arguments[i + 1];
    Ce(t, e, "add");
  }
  function $e(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; ) e[i] = arguments[i + 1];
    Ce(t, e, "remove");
  }
  function Ie(t, e) {
    Q(t, "class", function (t) {
      return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "");
    });
  }
  function Se(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; ) e[i] = arguments[i + 1];
    (e[0] && $e(t, e[0]), e[1] && ke(t, e[1]));
  }
  function Te(t, e) {
    return e && L(t).some(function (t) {
      return t.classList.contains(e.split(" ")[0]);
    });
  }
  function Ee(t) {
    for (var n = [], e = arguments.length - 1; 0 < e--; ) n[e] = arguments[e + 1];
    if (n.length) {
      var r = _((n = Ae(n))[n.length - 1]) ? [] : n.pop();
      (n = n.filter(Boolean), L(t).forEach(function (t) {
        for (var e = t.classList, i = 0; i < n.length; i++) _e.Force ? e.toggle.apply(e, [n[i]].concat(r)) : e[(O(r) ? !e.contains(n[i]) : r) ? "add" : "remove"](n[i]);
      }));
    }
  }
  function Ce(t, i, n) {
    (i = Ae(i).filter(Boolean)).length && L(t).forEach(function (t) {
      var e = t.classList;
      _e.Multiple ? e[n].apply(e, i) : i.forEach(function (t) {
        return e[n](t);
      });
    });
  }
  function Ae(t) {
    return t.reduce(function (t, e) {
      return t.concat.call(t, _(e) && b(e, " ") ? e.trim().split(" ") : e);
    }, []);
  }
  var Ne, _e = {};
  (Ne = document.createElement("_").classList) && (Ne.add("a", "b"), Ne.toggle("c", !1), _e.Multiple = Ne.contains("b"), _e.Force = !Ne.contains("c"));
  var Me = {
    "animation-iteration-count": !(Ne = null),
    "column-count": !0,
    "fill-opacity": !0,
    "flex-grow": !0,
    "flex-shrink": !0,
    "font-weight": !0,
    "line-height": !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    widows: !0,
    "z-index": !0,
    zoom: !0
  };
  function De(t, e, r) {
    return L(t).map(function (i) {
      if (_(e)) {
        if ((e = Fe(e), O(r))) return Be(i, e);
        r || M(r) ? i.style[e] = D(r) && !Me[e] ? r + "px" : r : i.style.removeProperty(e);
      } else {
        if (y(e)) {
          var n = Oe(i);
          return e.reduce(function (t, e) {
            return (t[e] = n[Fe(e)], t);
          }, {});
        }
        k(e) && q(e, function (t, e) {
          return De(i, e, t);
        });
      }
      return i;
    })[0];
  }
  function Oe(t, e) {
    return (t = H(t)).ownerDocument.defaultView.getComputedStyle(t, e);
  }
  function Be(t, e, i) {
    return Oe(t, i)[e];
  }
  var ze = {};
  function Pe(t) {
    var e = document.documentElement;
    if (!Et) return Oe(e).getPropertyValue("--uk-" + t);
    if (!((t in ze))) {
      var i = ae(e, document.createElement("div"));
      (ke(i, "uk-" + t), ze[t] = Be(i, "content", ":before").replace(/^["'](.*)["']$/, "$1"), ue(i));
    }
    return ze[t];
  }
  var He = {};
  function Fe(t) {
    var e = He[t];
    return (e || (e = He[t] = (function (t) {
      if (((t = m(t)) in je)) return t;
      var e, i = Le.length;
      for (; i--; ) if (((e = "-" + Le[i] + "-" + t) in je)) return e;
    })(t) || t), e);
  }
  var Le = ["webkit", "moz", "ms"], je = document.createElement("_").style;
  function We(t, s, a, h) {
    return (void 0 === a && (a = 400), void 0 === h && (h = "linear"), Xt.all(L(t).map(function (o) {
      return new Xt(function (i, n) {
        for (var t in s) {
          var e = De(o, t);
          "" === e && De(o, t, e);
        }
        var r = setTimeout(function () {
          return jt(o, "transitionend");
        }, a);
        (Lt(o, "transitionend transitioncanceled", function (t) {
          var e = t.type;
          (clearTimeout(r), $e(o, "uk-transition"), De(o, {
            "transition-property": "",
            "transition-duration": "",
            "transition-timing-function": ""
          }), "transitioncanceled" === e ? n() : i());
        }, !1, function (t) {
          var e = t.target;
          return o === e;
        }), ke(o, "uk-transition"), De(o, R({
          "transition-property": Object.keys(s).map(Fe).join(","),
          "transition-duration": a + "ms",
          "transition-timing-function": h
        }, s)));
      });
    })));
  }
  var Ve = {
    start: We,
    stop: function (t) {
      return (jt(t, "transitionend"), Xt.resolve());
    },
    cancel: function (t) {
      jt(t, "transitioncanceled");
    },
    inProgress: function (t) {
      return Te(t, "uk-transition");
    }
  }, Ye = "uk-animation-", Re = "uk-cancel-animation";
  function qe(t, e, i, a, h) {
    var l = arguments;
    return (void 0 === i && (i = 200), Xt.all(L(t).map(function (s) {
      return new Xt(function (n, r) {
        if (Te(s, Re)) requestAnimationFrame(function () {
          return Xt.resolve().then(function () {
            return qe.apply(void 0, l).then(n, r);
          });
        }); else {
          var t = e + " " + Ye + (h ? "leave" : "enter");
          (v(e, Ye) && (a && (t += " uk-transform-origin-" + a), h && (t += " " + Ye + "reverse")), o(), Lt(s, "animationend animationcancel", function (t) {
            var e = t.type, i = !1;
            ("animationcancel" === e ? (r(), o()) : (n(), Xt.resolve().then(function () {
              (i = !0, o());
            })), requestAnimationFrame(function () {
              i || (ke(s, Re), requestAnimationFrame(function () {
                return $e(s, Re);
              }));
            }));
          }, !1, function (t) {
            var e = t.target;
            return s === e;
          }), De(s, "animationDuration", i + "ms"), ke(s, t));
        }
        function o() {
          (De(s, "animationDuration", ""), Ie(s, Ye + "\\S*"));
        }
      });
    })));
  }
  var Ue = new RegExp(Ye + "(enter|leave)"), Xe = {
    in: function (t, e, i, n) {
      return qe(t, e, i, n, !1);
    },
    out: function (t, e, i, n) {
      return qe(t, e, i, n, !0);
    },
    inProgress: function (t) {
      return Ue.test(Q(t, "class"));
    },
    cancel: function (t) {
      jt(t, "animationcancel");
    }
  }, Ke = {
    width: ["x", "left", "right"],
    height: ["y", "top", "bottom"]
  };
  function Ge(t, e, c, u, d, i, n, r) {
    (c = oi(c), u = oi(u));
    var f = {
      element: c,
      target: u
    };
    if (!t || !e) return f;
    var p = Ze(t), m = Ze(e), g = m;
    if ((ri(g, c, p, -1), ri(g, u, m, 1), d = si(d, p.width, p.height), i = si(i, m.width, m.height), d.x += i.x, d.y += i.y, g.left += d.x, g.top += d.y, n)) {
      var o = [Ze(di(t))];
      (r && o.unshift(Ze(r)), q(Ke, function (t, s) {
        var a = t[0], h = t[1], l = t[2];
        (!0 === n || b(n, a)) && o.some(function (n) {
          var t = c[a] === h ? -p[s] : c[a] === l ? p[s] : 0, e = u[a] === h ? m[s] : u[a] === l ? -m[s] : 0;
          if (g[h] < n[h] || g[h] + p[s] > n[l]) {
            var i = p[s] / 2, r = "center" === u[a] ? -m[s] / 2 : 0;
            return "center" === c[a] && (o(i, r) || o(-i, -r)) || o(t, e);
          }
          function o(e, t) {
            var i = g[h] + e + t - 2 * d[a];
            if (i >= n[h] && i + p[s] <= n[l]) return (g[h] = i, ["element", "target"].forEach(function (t) {
              f[t][a] = e ? f[t][a] === Ke[s][1] ? Ke[s][2] : Ke[s][1] : f[t][a];
            }), !0);
          }
        });
      }));
    }
    return (Je(t, g), f);
  }
  function Je(i, n) {
    if ((i = H(i), !n)) return Ze(i);
    var r = Je(i), o = De(i, "position");
    ["left", "top"].forEach(function (t) {
      if ((t in n)) {
        var e = De(i, t);
        De(i, t, n[t] - r[t] + P("absolute" === o && "auto" === e ? Qe(i)[t] : e));
      }
    });
  }
  function Ze(t) {
    var e, i, n = di(t = H(t)), r = n.pageYOffset, o = n.pageXOffset;
    if (I(t)) {
      var s = t.innerHeight, a = t.innerWidth;
      return {
        top: r,
        left: o,
        height: s,
        width: a,
        bottom: r + s,
        right: o + a
      };
    }
    kt(t) || (e = Q(t, "style"), i = Q(t, "hidden"), Q(t, {
      style: (e || "") + ";display:block !important;",
      hidden: null
    }));
    var h = t.getBoundingClientRect();
    return (O(e) || Q(t, {
      style: e,
      hidden: i
    }), {
      height: h.height,
      width: h.width,
      top: h.top + r,
      left: h.left + o,
      bottom: h.bottom + r,
      right: h.right + o
    });
  }
  function Qe(n) {
    var r = (n = H(n)).offsetParent || fi(n).documentElement, o = Je(r), t = ["top", "left"].reduce(function (t, e) {
      var i = a(e);
      return (t[e] -= o[e] + P(De(n, "margin" + i)) + P(De(r, "border" + i + "Width")), t);
    }, Je(n));
    return {
      top: t.top,
      left: t.left
    };
  }
  var ti = ii("height"), ei = ii("width");
  function ii(n) {
    var r = a(n);
    return function (t, e) {
      if ((t = H(t), O(e))) {
        if (I(t)) return t["inner" + r];
        if (S(t)) {
          var i = t.documentElement;
          return Math.max(i["offset" + r], i["scroll" + r]);
        }
        return (e = "auto" === (e = De(t, n)) ? t["offset" + r] : P(e) || 0) - ni(n, t);
      }
      De(t, n, e || 0 === e ? +e + ni(n, t) + "px" : "");
    };
  }
  function ni(t, i, e) {
    return (void 0 === e && (e = "border-box"), De(i, "boxSizing") === e ? Ke[t].slice(1).map(a).reduce(function (t, e) {
      return t + P(De(i, "padding" + e)) + P(De(i, "border" + e + "Width"));
    }, 0) : 0);
  }
  function ri(o, s, a, h) {
    q(Ke, function (t, e) {
      var i = t[0], n = t[1], r = t[2];
      s[i] === r ? o[n] += a[e] * h : "center" === s[i] && (o[n] += a[e] * h / 2);
    });
  }
  function oi(t) {
    var e = /left|center|right/, i = /top|center|bottom/;
    return (1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat(["center"]) : i.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
      x: e.test(t[0]) ? t[0] : "center",
      y: i.test(t[1]) ? t[1] : "center"
    });
  }
  function si(t, e, i) {
    var n = (t || "").split(" "), r = n[0], o = n[1];
    return {
      x: r ? P(r) * (u(r, "%") ? e / 100 : 1) : 0,
      y: o ? P(o) * (u(o, "%") ? i / 100 : 1) : 0
    };
  }
  function ai(t) {
    switch (t) {
      case "left":
        return "right";
      case "right":
        return "left";
      case "top":
        return "bottom";
      case "bottom":
        return "top";
      default:
        return t;
    }
  }
  function hi(t, e, i) {
    if ((void 0 === e && (e = 0), void 0 === i && (i = 0), !kt(t))) return !1;
    var n = di(t = H(t)), r = t.getBoundingClientRect(), o = {
      top: -e,
      left: -i,
      bottom: e + ti(n),
      right: i + ei(n)
    };
    return G(r, o) || J({
      x: r.left,
      y: r.top
    }, o);
  }
  function li(t, e) {
    if ((void 0 === e && (e = 0), !kt(t))) return 0;
    var i = di(t = H(t)), n = fi(t), r = t.offsetHeight + e, o = ui(t)[0], s = ti(i), a = s + Math.min(0, o - s), h = Math.max(0, s - (ti(n) + e - (o + r)));
    return X((a + i.pageYOffset - o) / ((a + (r - (h < s ? h : 0))) / 100) / 100);
  }
  function ci(t, e) {
    if (I(t = H(t)) || S(t)) {
      var i = di(t);
      (0, i.scrollTo)(i.pageXOffset, e);
    } else t.scrollTop = e;
  }
  function ui(t) {
    var e = [0, 0];
    do {
      if ((e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === De(t, "position"))) {
        var i = di(t);
        return (e[0] += i.pageYOffset, e[1] += i.pageXOffset, e);
      }
    } while (t = t.offsetParent);
    return e;
  }
  function di(t) {
    return I(t) ? t : fi(t).defaultView;
  }
  function fi(t) {
    return H(t).ownerDocument;
  }
  var pi = {
    reads: [],
    writes: [],
    read: function (t) {
      return (this.reads.push(t), mi(), t);
    },
    write: function (t) {
      return (this.writes.push(t), mi(), t);
    },
    clear: function (t) {
      return vi(this.reads, t) || vi(this.writes, t);
    },
    flush: function () {
      (gi(this.reads), gi(this.writes.splice(0, this.writes.length)), this.scheduled = !1, (this.reads.length || this.writes.length) && mi());
    }
  };
  function mi() {
    pi.scheduled || (pi.scheduled = !0, requestAnimationFrame(pi.flush.bind(pi)));
  }
  function gi(t) {
    for (var e; e = t.shift(); ) e();
  }
  function vi(t, e) {
    var i = t.indexOf(e);
    return !!~i && !!t.splice(i, 1);
  }
  function wi() {}
  function bi(t, e) {
    return (e.y - t.y) / (e.x - t.x);
  }
  wi.prototype = {
    positions: [],
    position: null,
    init: function () {
      var n = this;
      (this.positions = [], this.position = null);
      var r = !1;
      this.unbind = Ht(document, "mousemove", function (i) {
        r || (setTimeout(function () {
          var t = Date.now(), e = n.positions.length;
          (e && 100 < t - n.positions[e - 1].time && n.positions.splice(0, e), n.positions.push({
            time: t,
            x: i.pageX,
            y: i.pageY
          }), 5 < n.positions.length && n.positions.shift(), r = !1);
        }, 5), r = !0);
      });
    },
    cancel: function () {
      this.unbind && this.unbind();
    },
    movesTo: function (t) {
      if (this.positions.length < 2) return !1;
      var e = Je(t), i = this.positions[this.positions.length - 1], n = this.positions[0];
      if (e.left <= i.x && i.x <= e.right && e.top <= i.y && i.y <= e.bottom) return !1;
      var r = [[{
        x: e.left,
        y: e.top
      }, {
        x: e.right,
        y: e.bottom
      }], [{
        x: e.right,
        y: e.top
      }, {
        x: e.left,
        y: e.bottom
      }]];
      return (e.right <= i.x || (e.left >= i.x ? (r[0].reverse(), r[1].reverse()) : e.bottom <= i.y ? r[0].reverse() : e.top >= i.y && r[1].reverse()), !!r.reduce(function (t, e) {
        return t + (bi(n, e[0]) < bi(i, e[0]) && bi(n, e[1]) > bi(i, e[1]));
      }, 0));
    }
  };
  var yi = {};
  function xi(t, e, i) {
    return yi.computed(x(t) ? t.call(i, i) : t, x(e) ? e.call(i, i) : e);
  }
  function ki(t, e) {
    return (t = t && !y(t) ? [t] : t, e ? t ? t.concat(e) : y(e) ? e : [e] : t);
  }
  function $i(e, i, n) {
    var r = {};
    if ((x(i) && (i = i.options), i.extends && (e = $i(e, i.extends, n)), i.mixins)) for (var t = 0, o = i.mixins.length; t < o; t++) e = $i(e, i.mixins[t], n);
    for (var s in e) h(s);
    for (var a in i) l(e, a) || h(a);
    function h(t) {
      r[t] = (yi[t] || (function (t, e) {
        return O(e) ? t : e;
      }))(e[t], i[t], n);
    }
    return r;
  }
  function Ii(t, e) {
    var i;
    void 0 === e && (e = []);
    try {
      return t ? v(t, "{") ? JSON.parse(t) : e.length && !b(t, ":") ? ((i = {})[e[0]] = t, i) : t.split(";").reduce(function (t, e) {
        var i = e.split(/:(.*)/), n = i[0], r = i[1];
        return (n && !O(r) && (t[n.trim()] = r.trim()), t);
      }, {}) : {};
    } catch (t) {
      return {};
    }
  }
  (yi.events = yi.created = yi.beforeConnect = yi.connected = yi.beforeDisconnect = yi.disconnected = yi.destroy = ki, yi.args = function (t, e) {
    return ki(e || t);
  }, yi.update = function (t, e) {
    return U(ki(t, x(e) ? {
      read: e
    } : e), "order");
  }, yi.props = function (t, e) {
    return (y(e) && (e = e.reduce(function (t, e) {
      return (t[e] = String, t);
    }, {})), yi.methods(t, e));
  }, yi.computed = yi.methods = function (t, e) {
    return e ? t ? R({}, t, e) : e : t;
  }, yi.data = function (e, i, t) {
    return t ? xi(e, i, t) : i ? e ? function (t) {
      return xi(e, i, t);
    } : i : e;
  });
  var Si = 0, Ti = function (t) {
    (this.id = ++Si, this.el = H(t));
  };
  function Ei(t, e) {
    try {
      t.contentWindow.postMessage(JSON.stringify(R({
        event: "command"
      }, e)), "*");
    } catch (t) {}
  }
  (Ti.prototype.isVideo = function () {
    return this.isYoutube() || this.isVimeo() || this.isHTML5();
  }, Ti.prototype.isHTML5 = function () {
    return "VIDEO" === this.el.tagName;
  }, Ti.prototype.isIFrame = function () {
    return "IFRAME" === this.el.tagName;
  }, Ti.prototype.isYoutube = function () {
    return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
  }, Ti.prototype.isVimeo = function () {
    return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
  }, Ti.prototype.enableApi = function () {
    var e = this;
    if (this.ready) return this.ready;
    var i, r = this.isYoutube(), o = this.isVimeo();
    return r || o ? this.ready = new Xt(function (t) {
      var n;
      (Lt(e.el, "load", function () {
        if (r) {
          var t = function () {
            return Ei(e.el, {
              event: "listening",
              id: e.id
            });
          };
          (i = setInterval(t, 100), t());
        }
      }), (n = function (t) {
        return r && t.id === e.id && "onReady" === t.event || o && Number(t.player_id) === e.id;
      }, new Xt(function (i) {
        Lt(window, "message", function (t, e) {
          return i(e);
        }, !1, function (t) {
          var e = t.data;
          if (e && _(e)) {
            try {
              e = JSON.parse(e);
            } catch (t) {
              return;
            }
            return e && n(e);
          }
        });
      })).then(function () {
        (t(), i && clearInterval(i));
      }), Q(e.el, "src", e.el.src + (b(e.el.src, "?") ? "&" : "?") + (r ? "enablejsapi=1" : "api=1&player_id=" + e.id)));
    }) : Xt.resolve();
  }, Ti.prototype.play = function () {
    var t = this;
    if (this.isVideo()) if (this.isIFrame()) this.enableApi().then(function () {
      return Ei(t.el, {
        func: "playVideo",
        method: "play"
      });
    }); else if (this.isHTML5()) try {
      var e = this.el.play();
      e && e.catch(K);
    } catch (t) {}
  }, Ti.prototype.pause = function () {
    var t = this;
    this.isVideo() && (this.isIFrame() ? this.enableApi().then(function () {
      return Ei(t.el, {
        func: "pauseVideo",
        method: "pause"
      });
    }) : this.isHTML5() && this.el.pause());
  }, Ti.prototype.mute = function () {
    var t = this;
    this.isVideo() && (this.isIFrame() ? this.enableApi().then(function () {
      return Ei(t.el, {
        func: "mute",
        method: "setVolume",
        value: 0
      });
    }) : this.isHTML5() && (this.el.muted = !0, Q(this.el, "muted", "")));
  });
  var Ci, Ai, Ni = ("IntersectionObserver" in window) ? window.IntersectionObserver : (function () {
    function t(e, t) {
      var i = this;
      void 0 === t && (t = {});
      var n = t.rootMargin;
      (void 0 === n && (n = "0 0"), this.targets = []);
      var r, o = (n || "0 0").split(" ").map(P), s = o[0], a = o[1];
      (this.offsetTop = s, this.offsetLeft = a, this.apply = function () {
        r || (r = requestAnimationFrame(function () {
          return setTimeout(function () {
            var t = i.takeRecords();
            (t.length && e(t, i), r = !1);
          });
        }));
      }, this.off = Ht(window, "scroll resize load", this.apply, {
        passive: !0,
        capture: !0
      }));
    }
    return (t.prototype.takeRecords = function () {
      var i = this;
      return this.targets.filter(function (t) {
        var e = hi(t.target, i.offsetTop, i.offsetLeft);
        if (null === t.isIntersecting || e ^ t.isIntersecting) return (t.isIntersecting = e, !0);
      });
    }, t.prototype.observe = function (t) {
      (this.targets.push({
        target: t,
        isIntersecting: null
      }), this.apply());
    }, t.prototype.disconnect = function () {
      (this.targets = [], this.off());
    }, t);
  })(), _i = {};
  function Mi(t) {
    return "touch" === t.pointerType || t.touches || Ai;
  }
  function Di(t, e) {
    void 0 === e && (e = "client");
    var i = t.touches, n = t.changedTouches, r = i && i[0] || n && n[0] || t;
    return {
      x: r[e + "X"],
      y: r[e + "Y"]
    };
  }
  function Oi(t) {
    return !(!v(t, "uk-") && !v(t, "data-uk-")) && g(t.replace("data-uk-", "").replace("uk-", ""));
  }
  (Ht(document, Mt, function (t) {
    _i.el && (_i = {});
    var e = t.target, i = Di(t), n = i.x, r = i.y;
    (_i.el = ("tagName" in e) ? e : e.parentNode, _i.x = n, _i.y = r, Ai = Mi(t));
  }), Ht(document, Ot, function (t) {
    var e = Di(t), r = e.x, o = e.y;
    (_i.el && r && 100 < Math.abs(_i.x - r) || o && 100 < Math.abs(_i.y - o) ? Ci = setTimeout(function () {
      var t, e, i, n;
      (_i.el && (jt(_i.el, "swipe"), jt(_i.el, "swipe" + (t = _i.x, e = _i.y, i = r, n = o, Math.abs(t - i) >= Math.abs(e - n) ? 0 < t - i ? "Left" : "Right" : 0 < e - n ? "Up" : "Down"))), _i = {});
    }) : _i = {}, setTimeout(function () {
      return Ai = !1;
    }));
  }), Ht(document, Pt, function () {
    (Ci && clearTimeout(Ci), Ci = null, _i = {});
  }));
  var Bi, zi, Pi, Hi, Fi = function (t) {
    this._init(t);
  };
  (Fi.util = Object.freeze({
    ajax: te,
    getImage: ee,
    transition: We,
    Transition: Ve,
    animate: qe,
    Animation: Xe,
    attr: Q,
    hasAttr: tt,
    removeAttr: et,
    data: it,
    addClass: ke,
    removeClass: $e,
    removeClasses: Ie,
    replaceClass: Se,
    hasClass: Te,
    toggleClass: Ee,
    positionAt: Ge,
    offset: Je,
    position: Qe,
    height: ti,
    width: ei,
    boxModelAdjust: ni,
    flipPosition: ai,
    isInView: hi,
    scrolledOver: li,
    scrollTop: ci,
    offsetPosition: ui,
    ready: ie,
    index: ne,
    getIndex: re,
    empty: oe,
    html: se,
    prepend: function (e, t) {
      return (e = be(e)).hasChildNodes() ? ce(t, function (t) {
        return e.insertBefore(t, e.firstChild);
      }) : ae(e, t);
    },
    append: ae,
    before: he,
    after: le,
    remove: ue,
    wrapAll: de,
    wrapInner: fe,
    unwrap: pe,
    fragment: ve,
    apply: we,
    $: be,
    $$: ye,
    isIE: Et,
    isRtl: Ct,
    hasTouch: _t,
    pointerDown: Mt,
    pointerMove: Dt,
    pointerUp: Ot,
    pointerEnter: Bt,
    pointerLeave: zt,
    pointerCancel: Pt,
    on: Ht,
    off: Ft,
    once: Lt,
    trigger: jt,
    createEvent: Wt,
    toEventTargets: qt,
    preventClick: Ut,
    fastdom: pi,
    isVoidElement: xt,
    isVisible: kt,
    selInput: $t,
    isInput: It,
    filter: St,
    within: Tt,
    bind: p,
    hasOwn: l,
    hyphenate: m,
    camelize: g,
    ucfirst: a,
    startsWith: v,
    endsWith: u,
    includes: b,
    isArray: y,
    isFunction: x,
    isObject: k,
    isPlainObject: $,
    isWindow: I,
    isDocument: S,
    isJQuery: T,
    isNode: E,
    isNodeCollection: A,
    isBoolean: N,
    isString: _,
    isNumber: M,
    isNumeric: D,
    isUndefined: O,
    toBoolean: B,
    toNumber: z,
    toFloat: P,
    toNode: H,
    toNodes: L,
    toList: j,
    toMs: W,
    isEqual: V,
    swap: Y,
    assign: R,
    each: q,
    sortBy: U,
    clamp: X,
    noop: K,
    intersectRect: G,
    pointInRect: J,
    Dimensions: Z,
    MouseTracker: wi,
    mergeOptions: $i,
    parseOptions: Ii,
    Player: Ti,
    Promise: Xt,
    Deferred: Kt,
    IntersectionObserver: Ni,
    query: nt,
    queryAll: rt,
    find: st,
    findAll: at,
    matches: pt,
    closest: gt,
    parents: vt,
    escape: bt,
    css: De,
    getStyles: Oe,
    getStyle: Be,
    getCssVar: Pe,
    propName: Fe,
    isTouch: Mi,
    getPos: Di
  }), Fi.data = "__uikit__", Fi.prefix = "uk-", Fi.options = {}, (function (i) {
    var e, n = i.data;
    function r(t, e) {
      if (t) for (var i in t) t[i]._connected && t[i]._callUpdate(e);
    }
    (i.use = function (t) {
      if (!t.installed) return (t.call(null, this), t.installed = !0, this);
    }, i.mixin = function (t, e) {
      (e = (_(e) ? i.component(e) : e) || this).options = $i(e.options, t);
    }, i.extend = function (t) {
      t = t || ({});
      var e = function (t) {
        this._init(t);
      };
      return (((e.prototype = Object.create(this.prototype)).constructor = e).options = $i(this.options, t), e.super = this, e.extend = this.extend, e);
    }, i.update = function (t, e) {
      ((function t(e, i) {
        e && e !== document.body && e.parentNode && (t(e.parentNode, i), i(e.parentNode));
      })(t = t ? H(t) : document.body, function (t) {
        return r(t[n], e);
      }), we(t, function (t) {
        return r(t[n], e);
      }));
    }, Object.defineProperty(i, "container", {
      get: function () {
        return e || document.body;
      },
      set: function (t) {
        e = be(t);
      }
    }));
  })(Fi), (Bi = Fi).prototype._callHook = function (t) {
    var e = this, i = this.$options[t];
    i && i.forEach(function (t) {
      return t.call(e);
    });
  }, Bi.prototype._callConnected = function () {
    this._connected || (this._data = {}, this._computeds = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObserver(), this._callHook("connected"), this._callUpdate());
  }, Bi.prototype._callDisconnected = function () {
    this._connected && (this._callHook("beforeDisconnect"), this._observer && (this._observer.disconnect(), this._observer = null), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1);
  }, Bi.prototype._callUpdate = function (t) {
    var o = this;
    void 0 === t && (t = "update");
    var s = t.type || t;
    b(["update", "resize"], s) && this._callWatches();
    var e = this.$options.update, i = this._frames, a = i.reads, h = i.writes;
    e && e.forEach(function (t, e) {
      var i = t.read, n = t.write, r = t.events;
      ("update" === s || b(r, s)) && (i && !b(pi.reads, a[e]) && (a[e] = pi.read(function () {
        var t = o._connected && i.call(o, o._data, s);
        !1 === t && n ? pi.clear(h[e]) : $(t) && R(o._data, t);
      })), n && !b(pi.writes, h[e]) && (h[e] = pi.write(function () {
        return o._connected && n.call(o, o._data, s);
      })));
    });
  }, (function (t) {
    var e = 0;
    function s(t, e) {
      var i = {}, n = t.args;
      void 0 === n && (n = []);
      var r = t.props;
      void 0 === r && (r = {});
      var o = t.el;
      if (!r) return i;
      for (var s in r) {
        var a = m(s), h = it(o, a);
        if (!O(h)) {
          if ((h = r[s] === Boolean && "" === h || d(r[s], h), "target" === a && (!h || v(h, "_")))) continue;
          i[s] = h;
        }
      }
      var l = Ii(it(o, e), n);
      for (var c in l) {
        var u = g(c);
        void 0 !== r[u] && (i[u] = d(r[u], l[c]));
      }
      return i;
    }
    function i(n, r, o) {
      Object.defineProperty(n, r, {
        enumerable: !0,
        get: function () {
          var t = n._computeds, e = n.$props, i = n.$el;
          return (l(t, r) || (t[r] = (o.get || o).call(n, e, i)), t[r]);
        },
        set: function (t) {
          var e = n._computeds;
          (e[r] = o.set ? o.set.call(n, t) : t, O(e[r]) && delete e[r]);
        }
      });
    }
    function f(e, i, n) {
      $(i) || (i = {
        name: n,
        handler: i
      });
      var r, o, t = i.name, s = i.el, a = i.handler, h = i.capture, l = i.passive, c = i.delegate, u = i.filter, d = i.self;
      (s = x(s) ? s.call(e) : s || e.$el, y(s) ? s.forEach(function (t) {
        return f(e, R({}, i, {
          el: t
        }), n);
      }) : !s || u && !u.call(e) || (r = _(a) ? e[a] : p(a, e), a = function (t) {
        return y(t.detail) ? r.apply(void 0, [t].concat(t.detail)) : r(t);
      }, d && (o = a, a = function (t) {
        if (t.target === t.currentTarget || t.target === t.current) return o.call(null, t);
      }), e._events.push(Ht(s, t, c ? _(c) ? c : c.call(e) : null, a, N(l) ? {
        passive: l,
        capture: h
      } : h))));
    }
    function n(t, e) {
      return t.every(function (t) {
        return !t || !l(t, e);
      });
    }
    function d(t, e) {
      return t === Boolean ? B(e) : t === Number ? z(e) : "list" === t ? j(e) : t ? t(e) : e;
    }
    (t.prototype._init = function (t) {
      ((t = t || ({})).data = (function (t, e) {
        var i = t.data, n = (t.el, e.args), r = e.props;
        if ((void 0 === r && (r = {}), i = y(i) ? n && n.length ? i.slice(0, n.length).reduce(function (t, e, i) {
          return ($(e) ? R(t, e) : t[n[i]] = e, t);
        }, {}) : void 0 : i)) for (var o in i) O(i[o]) ? delete i[o] : i[o] = r[o] ? d(r[o], i[o]) : i[o];
        return i;
      })(t, this.constructor.options), this.$options = $i(this.constructor.options, t, this), this.$el = null, this.$props = {}, this._frames = {
        reads: {},
        writes: {}
      }, this._events = [], this._uid = e++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el));
    }, t.prototype._initData = function () {
      var t = this.$options.data;
      for (var e in (void 0 === t && (t = {}), t)) this.$props[e] = this[e] = t[e];
    }, t.prototype._initMethods = function () {
      var t = this.$options.methods;
      if (t) for (var e in t) this[e] = p(t[e], this);
    }, t.prototype._initComputeds = function () {
      var t = this.$options.computed;
      if ((this._computeds = {}, t)) for (var e in t) i(this, e, t[e]);
    }, t.prototype._callWatches = function () {
      var t = this.$options.computed, e = this._computeds;
      for (var i in e) {
        var n = e[i];
        (delete e[i], t[i].watch && !V(n, this[i]) && t[i].watch.call(this, this[i], n));
      }
    }, t.prototype._initProps = function (t) {
      var e;
      for (e in t = t || s(this.$options, this.$name)) O(t[e]) || (this.$props[e] = t[e]);
      var i = [this.$options.computed, this.$options.methods];
      for (e in this.$props) (e in t) && n(i, e) && (this[e] = this.$props[e]);
    }, t.prototype._initEvents = function () {
      var i = this, t = this.$options.events;
      t && t.forEach(function (t) {
        if (l(t, "handler")) f(i, t); else for (var e in t) f(i, t[e], e);
      });
    }, t.prototype._unbindEvents = function () {
      (this._events.forEach(function (t) {
        return t();
      }), this._events = []);
    }, t.prototype._initObserver = function () {
      var i = this, t = this.$options, n = t.attrs, e = t.props, r = t.el;
      if (!this._observer && e && !1 !== n) {
        (n = y(n) ? n : Object.keys(e), this._observer = new MutationObserver(function () {
          var e = s(i.$options, i.$name);
          n.some(function (t) {
            return !O(e[t]) && e[t] !== i.$props[t];
          }) && i.$reset();
        }));
        var o = n.map(function (t) {
          return m(t);
        }).concat(this.$name);
        this._observer.observe(r, {
          attributes: !0,
          attributeFilter: o.concat(o.map(function (t) {
            return "data-" + t;
          }))
        });
      }
    });
  })(Fi), Pi = (zi = Fi).data, Hi = {}, zi.component = function (s, t) {
    if (!t) return ($(Hi[s]) && (Hi[s] = zi.extend(Hi[s])), Hi[s]);
    zi[s] = function (t, i) {
      for (var e = arguments.length, n = Array(e); e--; ) n[e] = arguments[e];
      var r = zi.component(s);
      return $(t) ? new r({
        data: t
      }) : r.options.functional ? new r({
        data: [].concat(n)
      }) : t && t.nodeType ? o(t) : ye(t).map(o)[0];
      function o(t) {
        var e = zi.getComponent(t, s);
        if (e) {
          if (!i) return e;
          e.$destroy();
        }
        return new r({
          el: t,
          data: i
        });
      }
    };
    var e = $(t) ? R({}, t) : t.options;
    if ((e.name = s, e.install && e.install(zi, e, s), zi._initialized && !e.functional)) {
      var i = m(s);
      pi.read(function () {
        return zi[s]("[uk-" + i + "],[data-uk-" + i + "]");
      });
    }
    return Hi[s] = $(t) ? e : t;
  }, zi.getComponents = function (t) {
    return t && t[Pi] || ({});
  }, zi.getComponent = function (t, e) {
    return zi.getComponents(t)[e];
  }, zi.connect = function (t) {
    if (t[Pi]) for (var e in t[Pi]) t[Pi][e]._callConnected();
    for (var i = 0; i < t.attributes.length; i++) {
      var n = Oi(t.attributes[i].name);
      n && (n in Hi) && zi[n](t);
    }
  }, zi.disconnect = function (t) {
    for (var e in t[Pi]) t[Pi][e]._callDisconnected();
  }, (function (n) {
    var r = n.data;
    (n.prototype.$mount = function (t) {
      var e = this.$options.name;
      (t[r] || (t[r] = {}), t[r][e] || ((t[r][e] = this).$el = this.$options.el = this.$options.el || t, Tt(t, document) && this._callConnected()));
    }, n.prototype.$emit = function (t) {
      this._callUpdate(t);
    }, n.prototype.$reset = function () {
      (this._callDisconnected(), this._callConnected());
    }, n.prototype.$destroy = function (t) {
      void 0 === t && (t = !1);
      var e = this.$options, i = e.el, n = e.name;
      (i && this._callDisconnected(), this._callHook("destroy"), i && i[r] && (delete i[r][n], Object.keys(i[r]).length || delete i[r], t && ue(this.$el)));
    }, n.prototype.$create = function (t, e, i) {
      return n[t](e, i);
    }, n.prototype.$update = n.update, n.prototype.$getComponent = n.getComponent);
    var e = {};
    Object.defineProperties(n.prototype, {
      $container: Object.getOwnPropertyDescriptor(n, "container"),
      $name: {
        get: function () {
          var t = this.$options.name;
          return (e[t] || (e[t] = n.prefix + m(t)), e[t]);
        }
      }
    });
  })(Fi));
  var Li = {
    connected: function () {
      !Te(this.$el, this.$name) && ke(this.$el, this.$name);
    }
  }, ji = {
    props: {
      cls: Boolean,
      animation: "list",
      duration: Number,
      origin: String,
      transition: String,
      queued: Boolean
    },
    data: {
      cls: !1,
      animation: [!1],
      duration: 200,
      origin: !1,
      transition: "linear",
      queued: !1,
      initProps: {
        overflow: "",
        height: "",
        paddingTop: "",
        paddingBottom: "",
        marginTop: "",
        marginBottom: ""
      },
      hideProps: {
        overflow: "hidden",
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
      }
    },
    computed: {
      hasAnimation: function (t) {
        return !!t.animation[0];
      },
      hasTransition: function (t) {
        var e = t.animation;
        return this.hasAnimation && !0 === e[0];
      }
    },
    methods: {
      toggleElement: function (l, c, u) {
        var d = this;
        return new Xt(function (t) {
          l = L(l);
          var e, i = function (t) {
            return Xt.all(t.map(function (t) {
              return d._toggleElement(t, c, u);
            }));
          }, n = l.filter(function (t) {
            return d.isToggled(t);
          }), r = l.filter(function (t) {
            return !b(n, t);
          });
          if (d.queued && O(u) && O(c) && d.hasAnimation && !(l.length < 2)) {
            var o = document.body, s = o.scrollTop, a = n[0], h = Xe.inProgress(a) && Te(a, "uk-animation-leave") || Ve.inProgress(a) && "0px" === a.style.height;
            (e = i(n), h || (e = e.then(function () {
              var t = i(r);
              return (o.scrollTop = s, t);
            })));
          } else e = i(r.concat(n));
          e.then(t, K);
        });
      },
      toggleNow: function (e, i) {
        var n = this;
        return new Xt(function (t) {
          return Xt.all(L(e).map(function (t) {
            return n._toggleElement(t, i, !1);
          })).then(t, K);
        });
      },
      isToggled: function (t) {
        var e = L(t || this.$el);
        return this.cls ? Te(e, this.cls.split(" ")[0]) : !tt(e, "hidden");
      },
      updateAria: function (t) {
        !1 === this.cls && Q(t, "aria-hidden", !this.isToggled(t));
      },
      _toggleElement: function (t, e, i) {
        var n = this;
        if ((e = N(e) ? e : Xe.inProgress(t) ? Te(t, "uk-animation-leave") : Ve.inProgress(t) ? "0px" === t.style.height : !this.isToggled(t), !jt(t, "before" + (e ? "show" : "hide"), [this]))) return Xt.reject();
        var r, o, s, a, h, l, c, u, d, f, p, m, g = (x(i) ? i : !1 !== i && this.hasAnimation ? this.hasTransition ? (c = (l = this).isToggled, u = l.duration, d = l.initProps, f = l.hideProps, p = l.transition, m = l._toggle, function (t, e) {
          var i = Ve.inProgress(t), n = t.hasChildNodes ? P(De(t.firstElementChild, "marginTop")) + P(De(t.lastElementChild, "marginBottom")) : 0, r = kt(t) ? ti(t) + (i ? 0 : n) : 0;
          (Ve.cancel(t), c(t) || m(t, !0), ti(t, ""), pi.flush());
          var o = ti(t) + (i ? 0 : n);
          return (ti(t, r), (e ? Ve.start(t, R({}, d, {
            overflow: "hidden",
            height: o
          }), Math.round(u * (1 - r / o)), p) : Ve.start(t, f, Math.round(u * (r / o)), p).then(function () {
            return m(t, !1);
          })).then(function () {
            return De(t, d);
          }));
        }) : (o = (r = this).animation, s = r.duration, a = r.origin, h = r._toggle, function (t, e) {
          return (Xe.cancel(t), e ? (h(t, !0), Xe.in(t, o[0], s, a)) : Xe.out(t, o[1] || o[0], s, a).then(function () {
            return h(t, !1);
          }));
        }) : this._toggle)(t, e);
        jt(t, e ? "show" : "hide", [this]);
        var v = function () {
          (jt(t, e ? "shown" : "hidden", [n]), n.$update(t));
        };
        return g ? g.then(v) : Xt.resolve(v());
      },
      _toggle: function (t, e) {
        var i;
        t && (e = Boolean(e), this.cls ? (i = b(this.cls, " ") || e !== Te(t, this.cls)) && Ee(t, this.cls, b(this.cls, " ") ? void 0 : e) : (i = e === tt(t, "hidden")) && Q(t, "hidden", e ? null : ""), ye("[autofocus]", t).some(function (t) {
          return kt(t) ? t.focus() || !0 : t.blur();
        }), this.updateAria(t), i && this.$update(t));
      }
    }
  };
  var Wi = {
    mixins: [Li, ji],
    props: {
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      transition: String
    },
    data: {
      targets: "> *",
      active: !1,
      animation: [!0],
      collapsible: !0,
      multiple: !1,
      clsOpen: "uk-open",
      toggle: "> .uk-accordion-title",
      content: "> .uk-accordion-content",
      transition: "ease"
    },
    computed: {
      items: function (t, e) {
        return ye(t.targets, e);
      }
    },
    events: [{
      name: "click",
      delegate: function () {
        return this.targets + " " + this.$props.toggle;
      },
      handler: function (t) {
        (t.preventDefault(), this.toggle(ne(ye(this.targets + " " + this.$props.toggle, this.$el), t.current)));
      }
    }],
    connected: function () {
      if (!1 !== this.active) {
        var t = this.items[Number(this.active)];
        t && !Te(t, this.clsOpen) && this.toggle(t, !1);
      }
    },
    update: function () {
      var e = this;
      this.items.forEach(function (t) {
        return e._toggle(be(e.content, t), Te(t, e.clsOpen));
      });
      var t = !this.collapsible && !Te(this.items, this.clsOpen) && this.items[0];
      t && this.toggle(t, !1);
    },
    methods: {
      toggle: function (r, o) {
        var s = this, t = re(r, this.items), a = St(this.items, "." + this.clsOpen);
        (r = this.items[t]) && [r].concat(!this.multiple && !b(a, r) && a || []).forEach(function (t) {
          var e = t === r, i = e && !Te(t, s.clsOpen);
          if (i || !e || s.collapsible || !(a.length < 2)) {
            Ee(t, s.clsOpen, i);
            var n = t._wrapper ? t._wrapper.firstElementChild : be(s.content, t);
            (t._wrapper || (t._wrapper = de(n, "<div>"), Q(t._wrapper, "hidden", i ? "" : null)), s._toggle(n, !0), s.toggleElement(t._wrapper, i, o).then(function () {
              Te(t, s.clsOpen) === i && (i || s._toggle(n, !1), t._wrapper = null, pe(n));
            }));
          }
        });
      }
    }
  }, Vi = {
    mixins: [Li, ji],
    args: "animation",
    props: {
      close: String
    },
    data: {
      animation: [!0],
      selClose: ".uk-alert-close",
      duration: 150,
      hideProps: R({
        opacity: 0
      }, ji.data.hideProps)
    },
    events: [{
      name: "click",
      delegate: function () {
        return this.selClose;
      },
      handler: function (t) {
        (t.preventDefault(), this.close());
      }
    }],
    methods: {
      close: function () {
        var t = this;
        this.toggleElement(this.$el).then(function () {
          return t.$destroy(!0);
        });
      }
    }
  };
  function Yi(r) {
    ie(function () {
      var i;
      (r.update(), Ht(window, "load resize", function () {
        return r.update(null, "resize");
      }), Ht(document, "loadedmetadata load", function (t) {
        var e = t.target;
        return r.update(e, "resize");
      }, !0), Ht(window, "scroll", function (t) {
        if (!i) {
          (i = !0, pi.write(function () {
            return i = !1;
          }));
          var e = t.target;
          r.update(1 !== e.nodeType ? document.body : e, t.type);
        }
      }, {
        passive: !0,
        capture: !0
      }));
      var n = 0;
      Ht(document, "animationstart", function (t) {
        var e = t.target;
        (De(e, "animationName") || "").match(/^uk-.*(left|right)/) && (n++, De(document.body, "overflowX", "hidden"), setTimeout(function () {
          --n || De(document.body, "overflowX", "");
        }, W(De(e, "animationDuration")) + 100));
      }, !0);
    });
  }
  var Ri, qi, Ui = {
    args: "autoplay",
    props: {
      automute: Boolean,
      autoplay: Boolean
    },
    data: {
      automute: !1,
      autoplay: !0
    },
    computed: {
      inView: function (t) {
        return "inview" === t.autoplay;
      }
    },
    connected: function () {
      (this.inView && !tt(this.$el, "preload") && (this.$el.preload = "none"), this.player = new Ti(this.$el), this.automute && this.player.mute());
    },
    update: {
      read: function () {
        return !!this.player && ({
          visible: kt(this.$el) && "hidden" !== De(this.$el, "visibility"),
          inView: this.inView && hi(this.$el)
        });
      },
      write: function (t) {
        var e = t.visible, i = t.inView;
        !e || this.inView && !i ? this.player.pause() : (!0 === this.autoplay || this.inView && i) && this.player.play();
      },
      events: ["resize", "scroll"]
    }
  }, Xi = {
    mixins: [Li, Ui],
    props: {
      width: Number,
      height: Number
    },
    data: {
      automute: !0
    },
    update: {
      read: function () {
        var t = this.$el;
        if (!kt(t)) return !1;
        var e = t.parentNode;
        return {
          height: e.offsetHeight,
          width: e.offsetWidth
        };
      },
      write: function (t) {
        var e = t.height, i = t.width, n = this.$el, r = this.width || n.naturalWidth || n.videoWidth || n.clientWidth, o = this.height || n.naturalHeight || n.videoHeight || n.clientHeight;
        r && o && De(n, Z.cover({
          width: r,
          height: o
        }, {
          width: i + (i % 2 ? 1 : 0),
          height: e + (e % 2 ? 1 : 0)
        }));
      },
      events: ["resize"]
    }
  }, Ki = {
    props: {
      pos: String,
      offset: null,
      flip: Boolean,
      clsPos: String
    },
    data: {
      pos: "bottom-" + (Ct ? "right" : "left"),
      flip: !0,
      offset: !1,
      clsPos: ""
    },
    computed: {
      pos: function (t) {
        var e = t.pos;
        return (e + (b(e, "-") ? "" : "-center")).split("-");
      },
      dir: function () {
        return this.pos[0];
      },
      align: function () {
        return this.pos[1];
      }
    },
    methods: {
      positionAt: function (t, e, i) {
        var n;
        (Ie(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"), De(t, {
          top: "",
          left: ""
        }));
        var r = this.offset, o = this.getAxis();
        D(r) || (r = (n = be(r)) ? Je(n)["x" === o ? "left" : "top"] - Je(e)["x" === o ? "right" : "bottom"] : 0);
        var s = Ge(t, e, "x" === o ? ai(this.dir) + " " + this.align : this.align + " " + ai(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -r : r) : " " + ("top" === this.dir ? -r : r), null, this.flip, i).target, a = s.x, h = s.y;
        (this.dir = "x" === o ? a : h, this.align = "x" === o ? h : a, Ee(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset));
      },
      getAxis: function () {
        return "top" === this.dir || "bottom" === this.dir ? "y" : "x";
      }
    }
  }, Gi = {
    mixins: [Ki, ji],
    args: "pos",
    props: {
      mode: "list",
      toggle: Boolean,
      boundary: Boolean,
      boundaryAlign: Boolean,
      delayShow: Number,
      delayHide: Number,
      clsDrop: String
    },
    data: {
      mode: ["click", "hover"],
      toggle: "- *",
      boundary: window,
      boundaryAlign: !1,
      delayShow: 0,
      delayHide: 800,
      clsDrop: !1,
      hoverIdle: 200,
      animation: ["uk-animation-fade"],
      cls: "uk-open"
    },
    computed: {
      boundary: function (t, e) {
        return nt(t.boundary, e);
      },
      clsDrop: function (t) {
        return t.clsDrop || "uk-" + this.$options.name;
      },
      clsPos: function () {
        return this.clsDrop;
      }
    },
    created: function () {
      this.tracker = new wi();
    },
    connected: function () {
      ke(this.$el, this.clsDrop);
      var t = this.$props.toggle;
      (this.toggle = t && this.$create("toggle", nt(t, this.$el), {
        target: this.$el,
        mode: this.mode
      }), !this.toggle && jt(this.$el, "updatearia"));
    },
    events: [{
      name: "click",
      delegate: function () {
        return "." + this.clsDrop + "-close";
      },
      handler: function (t) {
        (t.preventDefault(), this.hide(!1));
      }
    }, {
      name: "click",
      delegate: function () {
        return 'a[href^="#"]';
      },
      handler: function (t) {
        if (!t.defaultPrevented) {
          var e = t.target.hash;
          (e || t.preventDefault(), e && Tt(e, this.$el) || this.hide(!1));
        }
      }
    }, {
      name: "beforescroll",
      handler: function () {
        this.hide(!1);
      }
    }, {
      name: "toggle",
      self: !0,
      handler: function (t, e) {
        (t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1));
      }
    }, {
      name: Bt,
      filter: function () {
        return b(this.mode, "hover");
      },
      handler: function (t) {
        Mi(t) || (Ri && Ri !== this && Ri.toggle && b(Ri.toggle.mode, "hover") && !Tt(t.target, Ri.toggle.$el) && !J({
          x: t.pageX,
          y: t.pageY
        }, Je(Ri.$el)) && Ri.hide(!1), t.preventDefault(), this.show(this.toggle));
      }
    }, {
      name: "toggleshow",
      handler: function (t, e) {
        e && !b(e.target, this.$el) || (t.preventDefault(), this.show(e || this.toggle));
      }
    }, {
      name: "togglehide " + zt,
      handler: function (t, e) {
        Mi(t) || e && !b(e.target, this.$el) || (t.preventDefault(), this.toggle && b(this.toggle.mode, "hover") && this.hide());
      }
    }, {
      name: "beforeshow",
      self: !0,
      handler: function () {
        (this.clearTimers(), Xe.cancel(this.$el), this.position());
      }
    }, {
      name: "show",
      self: !0,
      handler: function () {
        (this.tracker.init(), jt(this.$el, "updatearia"), (function () {
          if (qi) return;
          (qi = !0, Ht(document, Ot, function (t) {
            var e, i = t.target, n = t.defaultPrevented;
            if (!n) for (; Ri && Ri !== e && !Tt(i, Ri.$el) && (!Ri.toggle || !Tt(i, Ri.toggle.$el)); ) (e = Ri).hide(!1);
          }));
        })());
      }
    }, {
      name: "beforehide",
      self: !0,
      handler: function () {
        this.clearTimers();
      }
    }, {
      name: "hide",
      handler: function (t) {
        var e = t.target;
        this.$el === e ? (Ri = this.isActive() ? null : Ri, jt(this.$el, "updatearia"), this.tracker.cancel()) : Ri = null === Ri && Tt(e, this.$el) && this.isToggled() ? this : Ri;
      }
    }, {
      name: "updatearia",
      self: !0,
      handler: function (t, e) {
        (t.preventDefault(), this.updateAria(this.$el), (e || this.toggle) && (Q((e || this.toggle).$el, "aria-expanded", this.isToggled() ? "true" : "false"), Ee(this.toggle.$el, this.cls, this.isToggled())));
      }
    }],
    update: {
      write: function () {
        this.isToggled() && !Xe.inProgress(this.$el) && this.position();
      },
      events: ["resize"]
    },
    methods: {
      show: function (e, i) {
        var n = this;
        void 0 === i && (i = !0);
        var r = function () {
          return !n.isToggled() && n.toggleElement(n.$el, !0);
        }, t = function () {
          if ((n.toggle = e || n.toggle, n.clearTimers(), !n.isActive())) if (i && Ri && Ri !== n && Ri.isDelaying) n.showTimer = setTimeout(n.show, 10); else {
            if (n.isParentOf(Ri)) {
              if (!Ri.hideTimer) return;
              Ri.hide(!1);
            } else if (Ri && n.isChildOf(Ri)) Ri.clearTimers(); else if (Ri && !n.isChildOf(Ri) && !n.isParentOf(Ri)) for (var t; Ri && Ri !== t && !n.isChildOf(Ri); ) (t = Ri).hide(!1);
            (i && n.delayShow ? n.showTimer = setTimeout(r, n.delayShow) : r(), Ri = n);
          }
        };
        e && this.toggle && e.$el !== this.toggle.$el ? (Lt(this.$el, "hide", t), this.hide(!1)) : t();
      },
      hide: function (t) {
        var e = this;
        void 0 === t && (t = !0);
        var i = function () {
          return e.toggleNow(e.$el, !1);
        };
        (this.clearTimers(), this.isDelaying = this.tracker.movesTo(this.$el), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, this.hoverIdle) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i());
      },
      clearTimers: function () {
        (clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1);
      },
      isActive: function () {
        return Ri === this;
      },
      isChildOf: function (t) {
        return t && t !== this && Tt(this.$el, t.$el);
      },
      isParentOf: function (t) {
        return t && t !== this && Tt(t.$el, this.$el);
      },
      position: function () {
        (Ie(this.$el, this.clsDrop + "-(stack|boundary)"), De(this.$el, {
          top: "",
          left: "",
          display: "block"
        }), Ee(this.$el, this.clsDrop + "-boundary", this.boundaryAlign));
        var t = Je(this.boundary), e = this.boundaryAlign ? t : Je(this.toggle.$el);
        if ("justify" === this.align) {
          var i = "y" === this.getAxis() ? "width" : "height";
          De(this.$el, i, e[i]);
        } else this.$el.offsetWidth > Math.max(t.right - e.left, e.right - t.left) && ke(this.$el, this.clsDrop + "-stack");
        (this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary), De(this.$el, "display", ""));
      }
    }
  };
  var Ji = {
    extends: Gi
  }, Zi = {
    mixins: [Li],
    args: "target",
    props: {
      target: Boolean
    },
    data: {
      target: !1
    },
    computed: {
      input: function (t, e) {
        return be($t, e);
      },
      state: function () {
        return this.input.nextElementSibling;
      },
      target: function (t, e) {
        var i = t.target;
        return i && (!0 === i && this.input.parentNode === e && this.input.nextElementSibling || nt(i, e));
      }
    },
    update: function () {
      var t = this.target, e = this.input;
      if (t) {
        var i, n = It(t) ? "value" : "textContent", r = t[n], o = e.files && e.files[0] ? e.files[0].name : pt(e, "select") && (i = ye("option", e).filter(function (t) {
          return t.selected;
        })[0]) ? i.textContent : e.value;
        r !== o && (t[n] = o);
      }
    },
    events: {
      change: function () {
        this.$emit();
      }
    }
  }, Qi = {
    update: {
      read: function (t) {
        var e = hi(this.$el);
        if (!e || t.isInView === e) return !1;
        t.isInView = e;
      },
      write: function () {
        this.$el.src = this.$el.src;
      },
      events: ["scroll", "resize"]
    }
  }, tn = {
    props: {
      margin: String,
      firstColumn: Boolean
    },
    data: {
      margin: "uk-margin-small-top",
      firstColumn: "uk-first-column"
    },
    update: {
      read: function (t) {
        var e = this.$el.children;
        if (!e.length || !kt(this.$el)) return t.rows = [[]];
        (t.rows = en(e), t.stacks = !t.rows.some(function (t) {
          return 1 < t.length;
        }));
      },
      write: function (t) {
        var n = this;
        t.rows.forEach(function (t, i) {
          return t.forEach(function (t, e) {
            (Ee(t, n.margin, 0 !== i), Ee(t, n.firstColumn, 0 === e));
          });
        });
      },
      events: ["resize"]
    }
  };
  function en(t) {
    for (var e = [[]], i = 0; i < t.length; i++) {
      var n = t[i], r = nn(n);
      if (r.height) for (var o = e.length - 1; 0 <= o; o--) {
        var s = e[o];
        if (!s[0]) {
          s.push(n);
          break;
        }
        var a = void 0;
        if ((a = s[0].offsetParent === n.offsetParent ? nn(s[0]) : (r = nn(n, !0), nn(s[0], !0)), r.top >= a.bottom - 1)) {
          e.push([n]);
          break;
        }
        if (r.bottom > a.top) {
          if (r.left < a.left && !Ct) {
            s.unshift(n);
            break;
          }
          s.push(n);
          break;
        }
        if (0 === o) {
          e.unshift([n]);
          break;
        }
      }
    }
    return e;
  }
  function nn(t, e) {
    var i;
    void 0 === e && (e = !1);
    var n = t.offsetTop, r = t.offsetLeft, o = t.offsetHeight;
    return (e && (n = (i = ui(t))[0], r = i[1]), {
      top: n,
      left: r,
      height: o,
      bottom: n + o
    });
  }
  var rn = {
    extends: tn,
    mixins: [Li],
    name: "grid",
    props: {
      masonry: Boolean,
      parallax: Number
    },
    data: {
      margin: "uk-grid-margin",
      clsStack: "uk-grid-stack",
      masonry: !1,
      parallax: 0
    },
    computed: {
      length: function (t, e) {
        return e.children.length;
      },
      parallax: function (t) {
        var e = t.parallax;
        return e && this.length ? Math.abs(e) : "";
      }
    },
    connected: function () {
      this.masonry && ke(this.$el, "uk-flex-top uk-flex-wrap-top");
    },
    update: [{
      read: function (t) {
        var r = t.rows;
        (this.masonry || this.parallax) && (r = r.map(function (t) {
          return U(t, "offsetLeft");
        }), Ct && r.map(function (t) {
          return t.reverse();
        }));
        var e, i, n, o, s, a = r.some(function (t) {
          return t.some(Ve.inProgress);
        }), h = !1, l = "";
        if (this.masonry && this.length) {
          var c = 0;
          (h = r.reduce(function (i, t, n) {
            return (i[n] = t.map(function (t, e) {
              return 0 === n ? 0 : P(i[n - 1][e]) + (c - P(r[n - 1][e] && r[n - 1][e].offsetHeight));
            }), c = t.reduce(function (t, e) {
              return Math.max(t, e.offsetHeight);
            }, 0), i);
          }, []), s = r, l = Math.max.apply(Math, s.reduce(function (i, t) {
            return (t.forEach(function (t, e) {
              return i[e] = (i[e] || 0) + t.offsetHeight;
            }), i);
          }, [])) + (e = this.$el, i = this.margin, n = L(e.children), P((o = n.filter(function (t) {
            return Te(t, i);
          })[0]) ? De(o, "marginTop") : De(n[0], "paddingLeft")) * (r.length - 1)));
        }
        return {
          rows: r,
          translates: h,
          height: !a && l
        };
      },
      write: function (t) {
        var e = t.stacks, i = t.height;
        (Ee(this.$el, this.clsStack, e), De(this.$el, "paddingBottom", this.parallax), !1 !== i && De(this.$el, "height", i));
      },
      events: ["resize"]
    }, {
      read: function (t) {
        var e = t.height;
        return {
          scrolled: !!this.parallax && li(this.$el, e ? e - ti(this.$el) : 0) * this.parallax
        };
      },
      write: function (t) {
        var e = t.rows, n = t.scrolled, r = t.translates;
        (!1 !== n || r) && e.forEach(function (t, i) {
          return t.forEach(function (t, e) {
            return De(t, "transform", n || r ? "translateY(" + ((r && -r[i][e]) + (n ? e % 2 ? n : n / 8 : 0)) + "px)" : "");
          });
        });
      },
      events: ["scroll", "resize"]
    }]
  };
  var on = Et ? {
    data: {
      selMinHeight: !1,
      forceHeight: !1
    },
    computed: {
      elements: function (t, e) {
        var i = t.selMinHeight;
        return i ? ye(i, e) : [e];
      }
    },
    update: [{
      read: function () {
        De(this.elements, "height", "");
      },
      order: -5,
      events: ["resize"]
    }, {
      write: function () {
        var i = this;
        this.elements.forEach(function (t) {
          var e = P(De(t, "minHeight"));
          e && (i.forceHeight || Math.round(e + ni("height", t, "content-box")) >= t.offsetHeight) && De(t, "height", e);
        });
      },
      order: 5,
      events: ["resize"]
    }]
  } : {}, sn = {
    mixins: [on],
    args: "target",
    props: {
      target: String,
      row: Boolean
    },
    data: {
      target: "> *",
      row: !0,
      forceHeight: !0
    },
    computed: {
      elements: function (t, e) {
        return ye(t.target, e);
      }
    },
    update: {
      read: function () {
        return {
          rows: (this.row ? en(this.elements) : [this.elements]).map(an)
        };
      },
      write: function (t) {
        t.rows.forEach(function (t) {
          var i = t.heights;
          return t.elements.forEach(function (t, e) {
            return De(t, "minHeight", i[e]);
          });
        });
      },
      events: ["resize"]
    }
  };
  function an(t) {
    var e;
    if (t.length < 2) return {
      heights: [""],
      elements: t
    };
    var i = hn(t), n = i.heights, r = i.max, o = t.some(function (t) {
      return t.style.minHeight;
    }), s = t.some(function (t, e) {
      return !t.style.minHeight && n[e] < r;
    });
    return (o && s && (De(t, "minHeight", ""), e = hn(t), n = e.heights, r = e.max), {
      heights: n = t.map(function (t, e) {
        return n[e] === r && P(t.style.minHeight).toFixed(2) !== r.toFixed(2) ? "" : r;
      }),
      elements: t
    });
  }
  function hn(t) {
    var e = t.map(function (t) {
      return Je(t).height - ni("height", t, "content-box");
    });
    return {
      heights: e,
      max: Math.max.apply(null, e)
    };
  }
  var ln = {
    mixins: [on],
    props: {
      expand: Boolean,
      offsetTop: Boolean,
      offsetBottom: Boolean,
      minHeight: Number
    },
    data: {
      expand: !1,
      offsetTop: !1,
      offsetBottom: !1,
      minHeight: 0
    },
    update: {
      read: function () {
        var t = "", e = ni("height", this.$el, "content-box");
        if (this.expand) t = ti(window) - (cn(document.documentElement) - cn(this.$el)) - e || ""; else {
          if ((t = "calc(100vh", this.offsetTop)) {
            var i = Je(this.$el).top;
            t += i < ti(window) / 2 ? " - " + i + "px" : "";
          }
          (!0 === this.offsetBottom ? t += " - " + cn(this.$el.nextElementSibling) + "px" : D(this.offsetBottom) ? t += " - " + this.offsetBottom + "vh" : this.offsetBottom && u(this.offsetBottom, "px") ? t += " - " + P(this.offsetBottom) + "px" : _(this.offsetBottom) && (t += " - " + cn(nt(this.offsetBottom, this.$el)) + "px"), t += (e ? " - " + e + "px" : "") + ")");
        }
        return {
          minHeight: t
        };
      },
      write: function (t) {
        var e = t.minHeight;
        (De(this.$el, {
          minHeight: e
        }), this.minHeight && P(De(this.$el, "minHeight")) < this.minHeight && De(this.$el, "minHeight", this.minHeight));
      },
      events: ["resize"]
    }
  };
  function cn(t) {
    return t && t.offsetHeight || 0;
  }
  var un = {}, dn = {
    args: "src",
    props: {
      id: String,
      icon: String,
      src: String,
      style: String,
      width: Number,
      height: Number,
      ratio: Number,
      class: String
    },
    data: {
      ratio: 1,
      id: !1,
      exclude: ["ratio", "src", "icon"],
      class: ""
    },
    connected: function () {
      var t, h = this;
      if ((this.class += " uk-svg", !this.icon && b(this.src, "#"))) {
        var e = this.src.split("#");
        1 < e.length && (t = e, this.src = t[0], this.icon = t[1]);
      }
      this.svg = this.getSvg().then(function (t) {
        var e;
        if (!(e = _(t) ? (h.icon && b(t, "<symbol") && (t = (function (t, e) {
          if (!pn[t]) {
            var i;
            for (pn[t] = {}; i = fn.exec(t); ) pn[t][i[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + i[1] + "svg>";
            fn.lastIndex = 0;
          }
          return pn[t][e];
        })(t, h.icon) || t), be(t.substr(t.indexOf("<svg")))) : t.cloneNode(!0))) return Xt.reject("SVG not found.");
        var i = Q(e, "viewBox");
        for (var n in (i && (i = i.split(" "), h.width = h.$props.width || i[2], h.height = h.$props.height || i[3]), h.width *= h.ratio, h.height *= h.ratio, h.$options.props)) h[n] && !b(h.exclude, n) && Q(e, n, h[n]);
        (h.id || et(e, "id"), h.width && !h.height && et(e, "height"), h.height && !h.width && et(e, "width"));
        var r = h.icon || h.src;
        Q(e, "data-svg", r);
        var o = h.$el;
        if (xt(o) || "CANVAS" === o.tagName) {
          Q(o, {
            hidden: !0,
            id: null
          });
          var s = o.nextElementSibling;
          r === Q(s, "data-svg") ? e = s : le(o, e);
        } else {
          var a = o.lastElementChild;
          r === Q(a, "data-svg") ? e = a : ae(o, e);
        }
        return h.svgEl = e;
      }, K);
    },
    disconnected: function () {
      var e = this;
      (xt(this.$el) && Q(this.$el, {
        hidden: null,
        id: this.id || null
      }), this.svg && this.svg.then(function (t) {
        return (!e._connected || t !== e.svgEl) && ue(t);
      }, K), this.svg = this.svgEl = null);
    },
    methods: {
      getSvg: function () {
        var i = this;
        return this.src ? (un[this.src] || (un[this.src] = new Xt(function (e, t) {
          v(i.src, "data:") ? e(decodeURIComponent(i.src.split(",")[1])) : te(i.src).then(function (t) {
            return e(t.response);
          }, function () {
            return t("SVG not found.");
          });
        })), un[this.src]) : Xt.reject();
      }
    }
  }, fn = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g, pn = {};
  var mn = {}, gn = {
    spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
    totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
    marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
    "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
    "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
    "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
    "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
    "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
    "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
    "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
    "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
    "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
    "slidenav-next": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
    "slidenav-next-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
    "slidenav-previous": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
    "slidenav-previous-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'
  }, vn = {
    install: function (r) {
      r.icon.add = function (t, e) {
        var i, n = _(t) ? ((i = {})[t] = e, i) : t;
        (q(n, function (t, e) {
          (gn[e] = t, delete mn[e]);
        }), r._initialized && we(document.body, function (t) {
          return q(r.getComponents(t), function (t) {
            t.$options.isIcon && (t.icon in n) && t.$reset();
          });
        }));
      };
    },
    attrs: ["icon", "ratio"],
    mixins: [Li, dn],
    args: "icon",
    props: ["icon"],
    data: {
      exclude: ["id", "style", "class", "src", "icon", "ratio"]
    },
    isIcon: !0,
    connected: function () {
      ke(this.$el, "uk-icon");
    },
    methods: {
      getSvg: function () {
        var t, e = (function (t) {
          if (!gn[t]) return null;
          mn[t] || (mn[t] = be(gn[t].trim()));
          return mn[t];
        })((t = this.icon, Ct ? Y(Y(t, "left", "right"), "previous", "next") : t));
        return e ? Xt.resolve(e) : Xt.reject("Icon not found.");
      }
    }
  }, wn = {
    extends: vn,
    data: function (t) {
      return {
        icon: m(t.constructor.options.name)
      };
    }
  }, bn = {
    extends: wn,
    connected: function () {
      ke(this.$el, "uk-slidenav");
    },
    computed: {
      icon: function (t, e) {
        var i = t.icon;
        return Te(e, "uk-slidenav-large") ? i + "-large" : i;
      }
    }
  }, yn = {
    extends: wn,
    computed: {
      icon: function (t, e) {
        var i = t.icon;
        return Te(e, "uk-search-icon") && vt(e, ".uk-search-large").length ? "search-large" : vt(e, ".uk-search-navbar").length ? "search-navbar" : i;
      }
    }
  }, xn = {
    extends: wn,
    computed: {
      icon: function () {
        return "close-" + (Te(this.$el, "uk-close-large") ? "large" : "icon");
      }
    }
  }, kn = {
    extends: wn,
    connected: function () {
      var e = this;
      this.svg.then(function (t) {
        return 1 !== e.ratio && De(be("circle", t), "strokeWidth", 1 / e.ratio);
      }, K);
    }
  };
  var $n = {
    props: {
      dataSrc: String,
      dataSrcset: Boolean,
      sizes: String,
      width: Number,
      height: Number,
      offsetTop: String,
      offsetLeft: String,
      target: String
    },
    data: {
      dataSrc: "",
      dataSrcset: !1,
      sizes: !1,
      width: !1,
      height: !1,
      offsetTop: "50vh",
      offsetLeft: 0,
      target: !1
    },
    computed: {
      cacheKey: function (t) {
        var e = t.dataSrc;
        return this.$name + "." + e;
      },
      width: function (t) {
        var e = t.width, i = t.dataWidth;
        return e || i;
      },
      height: function (t) {
        var e = t.height, i = t.dataHeight;
        return e || i;
      },
      sizes: function (t) {
        var e = t.sizes, i = t.dataSizes;
        return e || i;
      },
      isImg: function (t, e) {
        return Dn(e);
      },
      target: {
        get: function (t) {
          var e = t.target;
          return [this.$el].concat(rt(e, this.$el));
        },
        watch: function () {
          this.observe();
        }
      },
      offsetTop: function (t) {
        return An(t.offsetTop, "height");
      },
      offsetLeft: function (t) {
        return An(t.offsetLeft, "width");
      }
    },
    connected: function () {
      (Bn[this.cacheKey] ? In(this.$el, Bn[this.cacheKey] || this.dataSrc, this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && In(this.$el, (function (t, e, i) {
        var n;
        i && (n = Z.ratio({
          width: t,
          height: e
        }, "width", An(Tn(i))), t = n.width, e = n.height);
        return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>';
      })(this.width, this.height, this.sizes)), this.observer = new Ni(this.load, {
        rootMargin: this.offsetTop + "px " + this.offsetLeft + "px"
      }), requestAnimationFrame(this.observe));
    },
    disconnected: function () {
      this.observer.disconnect();
    },
    update: {
      read: function (t) {
        var e = this, i = t.image;
        if ((i || "complete" !== document.readyState || this.load(this.observer.takeRecords()), this.isImg)) return !1;
        i && i.then(function (t) {
          return t && "" !== t.currentSrc && In(e.$el, On(t));
        });
      },
      write: function (t) {
        if (this.dataSrcset && 1 !== window.devicePixelRatio) {
          var e = De(this.$el, "backgroundSize");
          (e.match(/^(auto\s?)+$/) || P(e) === t.bgSize) && (t.bgSize = (i = this.dataSrcset, n = this.sizes, r = An(Tn(n)), (o = (i.match(Nn) || []).map(P).sort(function (t, e) {
            return t - e;
          })).filter(function (t) {
            return r <= t;
          })[0] || o.pop() || ""), De(this.$el, "backgroundSize", t.bgSize + "px"));
        }
        var i, n, r, o;
      },
      events: ["resize"]
    },
    methods: {
      load: function (t) {
        var e = this;
        t.some(function (t) {
          return t.isIntersecting;
        }) && (this._data.image = ee(this.dataSrc, this.dataSrcset, this.sizes).then(function (t) {
          return (In(e.$el, On(t), t.srcset, t.sizes), Bn[e.cacheKey] = On(t), t);
        }, K), this.observer.disconnect());
      },
      observe: function () {
        var e = this;
        !this._data.image && this._connected && this.target.forEach(function (t) {
          return e.observer.observe(t);
        });
      }
    }
  };
  function In(t, e, i, n) {
    if (Dn(t)) (n && (t.sizes = n), i && (t.srcset = i), e && (t.src = e)); else if (e) {
      !b(t.style.backgroundImage, e) && (De(t, "backgroundImage", "url(" + bt(e) + ")"), jt(t, Wt("load", !1)));
    }
  }
  var Sn = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
  function Tn(t) {
    var e, i;
    for (Sn.lastIndex = 0; e = Sn.exec(t); ) if (!e[1] || window.matchMedia(e[1]).matches) {
      e = v(i = e[2], "calc") ? i.substring(5, i.length - 1).replace(En, function (t) {
        return An(t);
      }).replace(/ /g, "").match(Cn).reduce(function (t, e) {
        return t + +e;
      }, 0) : i;
      break;
    }
    return e || "100vw";
  }
  var En = /\d+(?:\w+|%)/g, Cn = /[+-]?(\d+)/g;
  function An(t, e, i) {
    return (void 0 === e && (e = "width"), void 0 === i && (i = window), D(t) ? +t : u(t, "vw") ? Mn(i, "width", t) : u(t, "vh") ? Mn(i, "height", t) : u(t, "%") ? Mn(i, e, t) : P(t));
  }
  var Nn = /\s+\d+w\s*(?:,|$)/g;
  var _n = {
    height: ti,
    width: ei
  };
  function Mn(t, e, i) {
    return _n[e](t) * P(i) / 100;
  }
  function Dn(t) {
    return "IMG" === t.tagName;
  }
  function On(t) {
    return t.currentSrc || t.src;
  }
  var Bn, zn = "__test__";
  try {
    ((Bn = window.sessionStorage || ({}))[zn] = 1, delete Bn[zn]);
  } catch (t) {
    Bn = {};
  }
  var Pn = {
    props: {
      media: Boolean
    },
    data: {
      media: !1
    },
    computed: {
      matchMedia: function () {
        var t = (function (t) {
          if (_(t)) if ("@" === t[0]) {
            var e = "breakpoint-" + t.substr(1);
            t = P(Pe(e));
          } else if (isNaN(t)) return t;
          return !(!t || isNaN(t)) && "(min-width: " + t + "px)";
        })(this.media);
        return !t || window.matchMedia(t).matches;
      }
    }
  };
  var Hn, Fn, Ln = {
    mixins: [Li, Pn],
    props: {
      fill: String
    },
    data: {
      fill: "",
      clsWrapper: "uk-leader-fill",
      clsHide: "uk-leader-hide",
      attrFill: "data-fill"
    },
    computed: {
      fill: function (t) {
        return t.fill || Pe("leader-fill-content");
      }
    },
    connected: function () {
      var t;
      (t = fe(this.$el, '<span class="' + this.clsWrapper + '">'), this.wrapper = t[0]);
    },
    disconnected: function () {
      pe(this.wrapper.childNodes);
    },
    update: {
      read: function (t) {
        var e = t.changed, i = t.width, n = i;
        return {
          width: i = Math.floor(this.$el.offsetWidth / 2),
          changed: e || n !== i,
          hide: !this.matchMedia
        };
      },
      write: function (t) {
        (Ee(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, Q(this.wrapper, this.attrFill, new Array(t.width).join(this.fill))));
      },
      events: ["resize"]
    }
  }, jn = {
    props: {
      container: Boolean
    },
    data: {
      container: !0
    },
    computed: {
      container: function (t) {
        var e = t.container;
        return !0 === e && this.$container || e && be(e);
      }
    }
  }, Wn = {
    mixins: [Li, jn, ji],
    props: {
      selPanel: String,
      selClose: String,
      escClose: Boolean,
      bgClose: Boolean,
      stack: Boolean
    },
    data: {
      cls: "uk-open",
      escClose: !0,
      bgClose: !0,
      overlay: !0,
      stack: !1
    },
    computed: {
      panel: function (t, e) {
        return be(t.selPanel, e);
      },
      transitionElement: function () {
        return this.panel;
      },
      bgClose: function (t) {
        return t.bgClose && this.panel;
      }
    },
    beforeDisconnect: function () {
      this.isToggled() && this.toggleNow(this.$el, !1);
    },
    events: [{
      name: "click",
      delegate: function () {
        return this.selClose;
      },
      handler: function (t) {
        (t.preventDefault(), this.hide());
      }
    }, {
      name: "toggle",
      self: !0,
      handler: function (t) {
        t.defaultPrevented || (t.preventDefault(), this.toggle());
      }
    }, {
      name: "beforeshow",
      self: !0,
      handler: function (t) {
        var i = Hn && Hn !== this && Hn;
        (Hn = this, i ? this.stack ? this.prev = i : ((Hn = i).isToggled() ? i.hide().then(this.show) : Lt(i.$el, "beforeshow hidden", this.show, !1, function (t) {
          var e = t.target;
          return "hidden" === t.type && e === i.$el;
        }), t.preventDefault()) : (function () {
          if (Fn) return;
          Fn = [Ht(document, Ot, function (t) {
            var e = t.target, i = t.defaultPrevented;
            !Hn || !Hn.bgClose || i || Hn.overlay && !Tt(e, Hn.$el) || Tt(e, Hn.panel) || Hn.hide();
          }), Ht(document, "keydown", function (t) {
            27 === t.keyCode && Hn && Hn.escClose && (t.preventDefault(), Hn.hide());
          })];
        })());
      }
    }, {
      name: "show",
      self: !0,
      handler: function () {
        (Te(document.documentElement, this.clsPage) || (this.scrollbarWidth = ei(window) - ei(document), De(document.body, "overflowY", this.scrollbarWidth && this.overlay ? "scroll" : "")), ke(document.documentElement, this.clsPage));
      }
    }, {
      name: "hide",
      self: !0,
      handler: function () {
        Hn && (Hn !== this || this.prev) || (Fn && Fn.forEach(function (t) {
          return t();
        }), Fn = null);
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function () {
        var t, e = this.prev;
        if (Hn = Hn && Hn !== this && Hn || e) for (; e; ) {
          if (e.clsPage === this.clsPage) {
            t = !0;
            break;
          }
          e = e.prev;
        } else De(document.body, "overflowY", "");
        t || $e(document.documentElement, this.clsPage);
      }
    }],
    methods: {
      toggle: function () {
        return this.isToggled() ? this.hide() : this.show();
      },
      show: function () {
        var e = this;
        return this.isToggled() ? Xt.resolve() : this.container && this.$el.parentNode !== this.container ? (ae(this.container, this.$el), new Xt(function (t) {
          return requestAnimationFrame(function () {
            return e.show().then(t);
          });
        })) : this.toggleElement(this.$el, !0, Vn(this));
      },
      hide: function () {
        return this.isToggled() ? this.toggleElement(this.$el, !1, Vn(this)) : Xt.resolve();
      },
      getActive: function () {
        return Hn;
      }
    }
  };
  function Vn(t) {
    var r = t.transitionElement, o = t._toggle;
    return function (i, n) {
      return new Xt(function (t, e) {
        return Lt(i, "show hide", function () {
          (i._reject && i._reject(), i._reject = e, o(i, n), W(De(r, "transitionDuration")) ? Lt(r, "transitionend", t, !1, function (t) {
            return t.target === r;
          }) : t());
        });
      });
    };
  }
  var Yn = {
    install: function (a) {
      (a.modal.dialog = function (t, e) {
        var n = a.modal(' <div class="uk-modal"> <div class="uk-modal-dialog">' + t + "</div> </div> ", e);
        return (n.show(), Ht(n.$el, "hidden", function (t) {
          var e = t.target, i = t.currentTarget;
          e === i && Xt.resolve(function () {
            return n.$destroy(!0);
          });
        }), n);
      }, a.modal.alert = function (e, i) {
        return (i = R({
          bgClose: !1,
          escClose: !1,
          labels: a.modal.labels
        }, i), new Xt(function (t) {
          return Ht(a.modal.dialog(' <div class="uk-modal-body">' + (_(e) ? e : se(e)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + i.labels.ok + "</button> </div> ", i).$el, "hide", t);
        }));
      }, a.modal.confirm = function (r, o) {
        return (o = R({
          bgClose: !1,
          escClose: !0,
          labels: a.modal.labels
        }, o), new Xt(function (e, t) {
          var i = a.modal.dialog(' <form> <div class="uk-modal-body">' + (_(r) ? r : se(r)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + o.labels.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + o.labels.ok + "</button> </div> </form> ", o), n = !1;
          (Ht(i.$el, "submit", "form", function (t) {
            (t.preventDefault(), e(), n = !0, i.hide());
          }), Ht(i.$el, "hide", function () {
            n || t();
          }));
        }));
      }, a.modal.prompt = function (t, o, s) {
        return (s = R({
          bgClose: !1,
          escClose: !0,
          labels: a.modal.labels
        }, s), new Xt(function (e) {
          var i = a.modal.dialog(' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (_(t) ? t : se(t)) + '</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + s.labels.cancel + '</button> <button class="uk-button uk-button-primary">' + s.labels.ok + "</button> </div> </form> ", s), n = be("input", i.$el);
          n.value = o;
          var r = !1;
          (Ht(i.$el, "submit", "form", function (t) {
            (t.preventDefault(), e(n.value), r = !0, i.hide());
          }), Ht(i.$el, "hide", function () {
            r || e(null);
          }));
        }));
      }, a.modal.labels = {
        ok: "Ok",
        cancel: "Cancel"
      });
    },
    mixins: [Wn],
    data: {
      clsPage: "uk-modal-page",
      selPanel: ".uk-modal-dialog",
      selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
    },
    events: [{
      name: "show",
      self: !0,
      handler: function () {
        (Te(this.panel, "uk-margin-auto-vertical") ? ke(this.$el, "uk-flex") : De(this.$el, "display", "block"), ti(this.$el));
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function () {
        (De(this.$el, "display", ""), $e(this.$el, "uk-flex"));
      }
    }]
  };
  var Rn = {
    extends: Wi,
    data: {
      targets: "> .uk-parent",
      toggle: "> a",
      content: "> ul"
    }
  }, qn = {
    mixins: [Li, on],
    props: {
      dropdown: String,
      mode: "list",
      align: String,
      offset: Number,
      boundary: Boolean,
      boundaryAlign: Boolean,
      clsDrop: String,
      delayShow: Number,
      delayHide: Number,
      dropbar: Boolean,
      dropbarMode: String,
      dropbarAnchor: Boolean,
      duration: Number
    },
    data: {
      dropdown: ".uk-navbar-nav > li",
      align: Ct ? "right" : "left",
      clsDrop: "uk-navbar-dropdown",
      mode: void 0,
      offset: void 0,
      delayShow: void 0,
      delayHide: void 0,
      boundaryAlign: void 0,
      flip: "x",
      boundary: !0,
      dropbar: !1,
      dropbarMode: "slide",
      dropbarAnchor: !1,
      duration: 200,
      forceHeight: !0,
      selMinHeight: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"
    },
    computed: {
      boundary: function (t, e) {
        var i = t.boundary, n = t.boundaryAlign;
        return !0 === i || n ? e : i;
      },
      dropbarAnchor: function (t, e) {
        return nt(t.dropbarAnchor, e);
      },
      pos: function (t) {
        return "bottom-" + t.align;
      },
      dropdowns: function (t, e) {
        return ye(t.dropdown + " ." + t.clsDrop, e);
      }
    },
    beforeConnect: function () {
      var t = this.$props.dropbar;
      (this.dropbar = t && (nt(t, this.$el) || be("+ .uk-navbar-dropbar", this.$el) || be("<div></div>")), this.dropbar && (ke(this.dropbar, "uk-navbar-dropbar"), "slide" === this.dropbarMode && ke(this.dropbar, "uk-navbar-dropbar-slide")));
    },
    disconnected: function () {
      this.dropbar && ue(this.dropbar);
    },
    update: function () {
      var e = this;
      this.$create("drop", this.dropdowns.filter(function (t) {
        return !e.getDropdown(t);
      }), R({}, this.$props, {
        boundary: this.boundary,
        pos: this.pos,
        offset: this.dropbar || this.offset
      }));
    },
    events: [{
      name: "mouseover",
      delegate: function () {
        return this.dropdown;
      },
      handler: function (t) {
        var e = t.current, i = this.getActive();
        i && i.toggle && !Tt(i.toggle.$el, e) && !i.tracker.movesTo(i.$el) && i.hide(!1);
      }
    }, {
      name: "mouseleave",
      el: function () {
        return this.dropbar;
      },
      handler: function () {
        var t = this.getActive();
        t && !pt(this.dropbar, ":hover") && t.hide();
      }
    }, {
      name: "beforeshow",
      capture: !0,
      filter: function () {
        return this.dropbar;
      },
      handler: function () {
        this.dropbar.parentNode || le(this.dropbarAnchor || this.$el, this.dropbar);
      }
    }, {
      name: "show",
      capture: !0,
      filter: function () {
        return this.dropbar;
      },
      handler: function (t, e) {
        var i = e.$el, n = e.dir;
        (this.clsDrop && ke(i, this.clsDrop + "-dropbar"), "bottom" === n && this.transitionTo(i.offsetHeight + P(De(i, "marginTop")) + P(De(i, "marginBottom")), i));
      }
    }, {
      name: "beforehide",
      filter: function () {
        return this.dropbar;
      },
      handler: function (t, e) {
        var i = e.$el, n = this.getActive();
        pt(this.dropbar, ":hover") && n && n.$el === i && t.preventDefault();
      }
    }, {
      name: "hide",
      filter: function () {
        return this.dropbar;
      },
      handler: function (t, e) {
        var i = e.$el, n = this.getActive();
        (!n || n && n.$el === i) && this.transitionTo(0);
      }
    }],
    methods: {
      getActive: function () {
        var t = this.dropdowns.map(this.getDropdown).filter(function (t) {
          return t && t.isActive();
        })[0];
        return t && b(t.mode, "hover") && Tt(t.toggle.$el, this.$el) && t;
      },
      transitionTo: function (t, e) {
        var i = this, n = this.dropbar, r = kt(n) ? ti(n) : 0;
        return (De(e = r < t && e, "clip", "rect(0," + e.offsetWidth + "px," + r + "px,0)"), ti(n, r), Ve.cancel([e, n]), Xt.all([Ve.start(n, {
          height: t
        }, this.duration), Ve.start(e, {
          clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"
        }, this.duration)]).catch(K).then(function () {
          (De(e, {
            clip: ""
          }), i.$update(n));
        }));
      },
      getDropdown: function (t) {
        return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
      }
    }
  }, Un = {
    mixins: [Wn],
    args: "mode",
    props: {
      mode: String,
      flip: Boolean,
      overlay: Boolean
    },
    data: {
      mode: "slide",
      flip: !1,
      overlay: !1,
      clsPage: "uk-offcanvas-page",
      clsContainer: "uk-offcanvas-container",
      selPanel: ".uk-offcanvas-bar",
      clsFlip: "uk-offcanvas-flip",
      clsContainerAnimation: "uk-offcanvas-container-animation",
      clsSidebarAnimation: "uk-offcanvas-bar-animation",
      clsMode: "uk-offcanvas",
      clsOverlay: "uk-offcanvas-overlay",
      selClose: ".uk-offcanvas-close"
    },
    computed: {
      clsFlip: function (t) {
        var e = t.flip, i = t.clsFlip;
        return e ? i : "";
      },
      clsOverlay: function (t) {
        var e = t.overlay, i = t.clsOverlay;
        return e ? i : "";
      },
      clsMode: function (t) {
        var e = t.mode;
        return t.clsMode + "-" + e;
      },
      clsSidebarAnimation: function (t) {
        var e = t.mode, i = t.clsSidebarAnimation;
        return "none" === e || "reveal" === e ? "" : i;
      },
      clsContainerAnimation: function (t) {
        var e = t.mode, i = t.clsContainerAnimation;
        return "push" !== e && "reveal" !== e ? "" : i;
      },
      transitionElement: function (t) {
        return "reveal" === t.mode ? this.panel.parentNode : this.panel;
      }
    },
    events: [{
      name: "click",
      delegate: function () {
        return 'a[href^="#"]';
      },
      handler: function (t) {
        var e = t.current;
        e.hash && be(e.hash, document.body) && this.hide();
      }
    }, {
      name: "touchstart",
      el: function () {
        return this.panel;
      },
      handler: function (t) {
        var e = t.targetTouches;
        1 === e.length && (this.clientY = e[0].clientY);
      }
    }, {
      name: "touchmove",
      self: !0,
      passive: !1,
      filter: function () {
        return this.overlay;
      },
      handler: function (t) {
        t.preventDefault();
      }
    }, {
      name: "touchmove",
      passive: !1,
      el: function () {
        return this.panel;
      },
      handler: function (t) {
        if (1 === t.targetTouches.length) {
          var e = event.targetTouches[0].clientY - this.clientY, i = this.panel, n = i.scrollTop, r = i.scrollHeight, o = i.clientHeight;
          (r <= o || 0 === n && 0 < e || r - n <= o && e < 0) && t.preventDefault();
        }
      }
    }, {
      name: "show",
      self: !0,
      handler: function () {
        ("reveal" !== this.mode || Te(this.panel.parentNode, this.clsMode) || (de(this.panel, "<div>"), ke(this.panel.parentNode, this.clsMode)), De(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), ke(document.body, this.clsContainer, this.clsFlip), De(this.$el, "display", "block"), ke(this.$el, this.clsOverlay), ke(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), ti(document.body), ke(document.body, this.clsContainerAnimation), this.clsContainerAnimation && (Xn().content += ",user-scalable=0"));
      }
    }, {
      name: "hide",
      self: !0,
      handler: function () {
        $e(document.body, this.clsContainerAnimation);
        var t = this.getActive();
        ("none" === this.mode || t && t !== this && t !== this.prev) && jt(this.panel, "transitionend");
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function () {
        var t;
        (this.clsContainerAnimation && ((t = Xn()).content = t.content.replace(/,user-scalable=0$/, "")), "reveal" === this.mode && pe(this.panel), $e(this.panel, this.clsSidebarAnimation, this.clsMode), $e(this.$el, this.clsOverlay), De(this.$el, "display", ""), $e(document.body, this.clsContainer, this.clsFlip), De(document.documentElement, "overflowY", ""));
      }
    }, {
      name: "swipeLeft swipeRight",
      handler: function (t) {
        this.isToggled() && Mi(t) && "swipeLeft" === t.type ^ this.flip && this.hide();
      }
    }]
  };
  function Xn() {
    return be('meta[name="viewport"]', document.head) || ae(document.head, '<meta name="viewport">');
  }
  var Kn = {
    mixins: [Li],
    props: {
      selContainer: String,
      selContent: String
    },
    data: {
      selContainer: ".uk-modal",
      selContent: ".uk-modal-dialog"
    },
    computed: {
      container: function (t, e) {
        return gt(e, t.selContainer);
      },
      content: function (t, e) {
        return gt(e, t.selContent);
      }
    },
    connected: function () {
      De(this.$el, "minHeight", 150);
    },
    update: {
      read: function () {
        return !(!this.content || !this.container) && ({
          current: P(De(this.$el, "maxHeight")),
          max: Math.max(150, ti(this.container) - (Je(this.content).height - ti(this.$el)))
        });
      },
      write: function (t) {
        var e = t.current, i = t.max;
        (De(this.$el, "maxHeight", i), Math.round(e) !== Math.round(i) && jt(this.$el, "resize"));
      },
      events: ["resize"]
    }
  }, Gn = {
    props: ["width", "height"],
    connected: function () {
      ke(this.$el, "uk-responsive-width");
    },
    update: {
      read: function () {
        return !!(kt(this.$el) && this.width && this.height) && ({
          width: ei(this.$el.parentNode),
          height: this.height
        });
      },
      write: function (t) {
        ti(this.$el, Z.contain({
          height: this.height,
          width: this.width
        }, t).height);
      },
      events: ["resize"]
    }
  }, Jn = {
    props: {
      duration: Number,
      offset: Number
    },
    data: {
      duration: 1e3,
      offset: 0
    },
    methods: {
      scrollTo: function (i) {
        var n = this;
        i = i && be(i) || document.body;
        var t = ti(document), e = ti(window), r = Je(i).top - this.offset;
        if ((t < r + e && (r = t - e), jt(this.$el, "beforescroll", [this, i]))) {
          var o = Date.now(), s = window.pageYOffset, a = function () {
            var t, e = s + (r - s) * (t = X((Date.now() - o) / n.duration), .5 * (1 - Math.cos(Math.PI * t)));
            (ci(window, e), e !== r ? requestAnimationFrame(a) : jt(n.$el, "scrolled", [n, i]));
          };
          a();
        }
      }
    },
    events: {
      click: function (t) {
        t.defaultPrevented || (t.preventDefault(), this.scrollTo(bt(decodeURIComponent(this.$el.hash)).substr(1)));
      }
    }
  };
  var Zn = {
    args: "cls",
    props: {
      cls: "list",
      target: String,
      hidden: Boolean,
      offsetTop: Number,
      offsetLeft: Number,
      repeat: Boolean,
      delay: Number
    },
    data: function () {
      return {
        cls: [],
        target: !1,
        hidden: !0,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: !1,
        delay: 0,
        inViewClass: "uk-scrollspy-inview"
      };
    },
    computed: {
      elements: function (t, e) {
        var i = t.target;
        return i ? ye(i, e) : [e];
      }
    },
    update: [{
      write: function () {
        this.hidden && De(St(this.elements, ":not(." + this.inViewClass + ")"), "visibility", "hidden");
      }
    }, {
      read: function (r) {
        var o = this;
        r.update && this.elements.forEach(function (t, e) {
          var i = r[e];
          if (!i || i.el !== t) {
            var n = it(t, "uk-scrollspy-class");
            i = {
              el: t,
              toggles: n && n.split(",") || o.cls
            };
          }
          (i.show = hi(t, o.offsetTop, o.offsetLeft), r[e] = i);
        });
      },
      write: function (o) {
        var s = this;
        if (!o.update) return (this.$emit(), o.update = !0);
        this.elements.forEach(function (t, e) {
          var i = o[e], n = i.toggles[e] || i.toggles[0];
          if (!i.show || i.inview || i.queued) {
            if (!i.show && (i.inview || i.queued) && s.repeat) {
              if ((i.abort && i.abort(), !i.inview)) return;
              (De(t, "visibility", s.hidden ? "hidden" : ""), $e(t, s.inViewClass), Ee(t, n), jt(t, "outview"), s.$update(t), i.inview = !1);
            }
          } else {
            var r = function () {
              (De(t, "visibility", ""), ke(t, s.inViewClass), Ee(t, n), jt(t, "inview"), s.$update(t), i.inview = !0, i.abort && i.abort());
            };
            s.delay ? (i.queued = !0, o.promise = (o.promise || Xt.resolve()).then(function () {
              return !i.inview && new Xt(function (t) {
                var e = setTimeout(function () {
                  (r(), t());
                }, o.promise || 1 === s.elements.length ? s.delay : 0);
                i.abort = function () {
                  (clearTimeout(e), t(), i.queued = !1);
                };
              });
            })) : r();
          }
        });
      },
      events: ["scroll", "resize"]
    }]
  }, Qn = {
    props: {
      cls: String,
      closest: String,
      scroll: Boolean,
      overflow: Boolean,
      offset: Number
    },
    data: {
      cls: "uk-active",
      closest: !1,
      scroll: !1,
      overflow: !0,
      offset: 0
    },
    computed: {
      links: function (t, e) {
        return ye('a[href^="#"]', e).filter(function (t) {
          return t.hash;
        });
      },
      elements: function (t) {
        var e = t.closest;
        return gt(this.links, e || "*");
      },
      targets: function () {
        return ye(this.links.map(function (t) {
          return t.hash;
        }).join(","));
      }
    },
    update: [{
      read: function () {
        this.scroll && this.$create("scroll", this.links, {
          offset: this.offset || 0
        });
      }
    }, {
      read: function (o) {
        var s = this, a = window.pageYOffset + this.offset + 1, h = ti(document) - ti(window) + this.offset;
        (o.active = !1, this.targets.every(function (t, e) {
          var i = Je(t).top, n = e + 1 === s.targets.length;
          if (!s.overflow && (0 === e && a < i || n && i + t.offsetTop < a)) return !1;
          if (!n && Je(s.targets[e + 1]).top <= a) return !0;
          if (h <= a) for (var r = s.targets.length - 1; e < r; r--) if (hi(s.targets[r])) {
            t = s.targets[r];
            break;
          }
          return !(o.active = be(St(s.links, '[href="#' + t.id + '"]')));
        }));
      },
      write: function (t) {
        var e = t.active;
        (this.links.forEach(function (t) {
          return t.blur();
        }), $e(this.elements, this.cls), e && jt(this.$el, "active", [e, ke(this.closest ? gt(e, this.closest) : e, this.cls)]));
      },
      events: ["scroll", "resize"]
    }]
  }, tr = {
    mixins: [Li, Pn],
    props: {
      top: null,
      bottom: Boolean,
      offset: Number,
      animation: String,
      clsActive: String,
      clsInactive: String,
      clsFixed: String,
      clsBelow: String,
      selTarget: String,
      widthElement: Boolean,
      showOnUp: Boolean,
      targetOffset: Number
    },
    data: {
      top: 0,
      bottom: !1,
      offset: 0,
      animation: "",
      clsActive: "uk-active",
      clsInactive: "",
      clsFixed: "uk-sticky-fixed",
      clsBelow: "uk-sticky-below",
      selTarget: "",
      widthElement: !1,
      showOnUp: !1,
      targetOffset: !1
    },
    computed: {
      selTarget: function (t, e) {
        var i = t.selTarget;
        return i && be(i, e) || e;
      },
      widthElement: function (t, e) {
        return nt(t.widthElement, e) || this.placeholder;
      },
      isActive: {
        get: function () {
          return Te(this.selTarget, this.clsActive);
        },
        set: function (t) {
          t && !this.isActive ? (Se(this.selTarget, this.clsInactive, this.clsActive), jt(this.$el, "active")) : t || Te(this.selTarget, this.clsInactive) || (Se(this.selTarget, this.clsActive, this.clsInactive), jt(this.$el, "inactive"));
        }
      }
    },
    connected: function () {
      (this.placeholder = be("+ .uk-sticky-placeholder", this.$el) || be('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.isActive = !1);
    },
    disconnected: function () {
      (this.isFixed && (this.hide(), $e(this.selTarget, this.clsInactive)), ue(this.placeholder), this.placeholder = null, this.widthElement = null);
    },
    events: [{
      name: "load hashchange popstate",
      el: window,
      handler: function () {
        var n = this;
        if (!1 !== this.targetOffset && location.hash && 0 < window.pageYOffset) {
          var r = be(location.hash);
          r && pi.read(function () {
            var t = Je(r).top, e = Je(n.$el).top, i = n.$el.offsetHeight;
            n.isFixed && t <= e + i && e <= t + r.offsetHeight && ci(window, t - i - (D(n.targetOffset) ? n.targetOffset : 0) - n.offset);
          });
        }
      }
    }],
    update: [{
      read: function (t, e) {
        var i = t.height;
        (this.isActive && "update" !== e && (this.hide(), i = this.$el.offsetHeight, this.show()), i = this.isActive ? i : this.$el.offsetHeight, this.topOffset = Je(this.isFixed ? this.placeholder : this.$el).top, this.bottomOffset = this.topOffset + i);
        var n = er("bottom", this);
        return (this.top = Math.max(P(er("top", this)), this.topOffset) - this.offset, this.bottom = n && n - i, this.inactive = !this.matchMedia, {
          lastScroll: !1,
          height: i,
          margins: De(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"])
        });
      },
      write: function (t) {
        var e = t.height, i = t.margins, n = this.placeholder;
        (De(n, R({
          height: e
        }, i)), Tt(n, document) || (le(this.$el, n), Q(n, "hidden", "")), this.isActive = this.isActive);
      },
      events: ["resize"]
    }, {
      read: function (t) {
        var e = t.scroll;
        return (void 0 === e && (e = 0), this.width = (kt(this.widthElement) ? this.widthElement : this.$el).offsetWidth, this.scroll = window.pageYOffset, {
          dir: e <= this.scroll ? "down" : "up",
          scroll: this.scroll,
          visible: kt(this.$el),
          top: ui(this.placeholder)[0]
        });
      },
      write: function (t, e) {
        var i = this, n = t.initTimestamp;
        void 0 === n && (n = 0);
        var r = t.dir, o = t.lastDir, s = t.lastScroll, a = t.scroll, h = t.top, l = t.visible, c = performance.now();
        if (!((t.lastScroll = a) < 0 || a === s || !l || this.disabled || this.showOnUp && "scroll" !== e || ((300 < c - n || r !== o) && (t.initScroll = a, t.initTimestamp = c), t.lastDir = r, this.showOnUp && Math.abs(t.initScroll - a) <= 30 && Math.abs(s - a) <= 10))) if (this.inactive || a < this.top || this.showOnUp && (a <= this.top || "down" === r || "up" === r && !this.isFixed && a <= this.bottomOffset)) {
          if (!this.isFixed) return void (Xe.inProgress(this.$el) && a < h && (Xe.cancel(this.$el), this.hide()));
          (this.isFixed = !1, this.animation && a > this.topOffset ? (Xe.cancel(this.$el), Xe.out(this.$el, this.animation).then(function () {
            return i.hide();
          }, K)) : this.hide());
        } else this.isFixed ? this.update() : this.animation ? (Xe.cancel(this.$el), this.show(), Xe.in(this.$el, this.animation).catch(K)) : this.show();
      },
      events: ["resize", "scroll"]
    }],
    methods: {
      show: function () {
        (this.isFixed = !0, this.update(), Q(this.placeholder, "hidden", null));
      },
      hide: function () {
        (this.isActive = !1, $e(this.$el, this.clsFixed, this.clsBelow), De(this.$el, {
          position: "",
          top: "",
          width: ""
        }), Q(this.placeholder, "hidden", ""));
      },
      update: function () {
        var t = 0 !== this.top || this.scroll > this.top, e = Math.max(0, this.offset);
        (this.bottom && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), De(this.$el, {
          position: "fixed",
          top: e + "px",
          width: this.width
        }), this.isActive = t, Ee(this.$el, this.clsBelow, this.scroll > this.bottomOffset), ke(this.$el, this.clsFixed));
      }
    }
  };
  function er(t, e) {
    var i = e.$props, n = e.$el, r = e[t + "Offset"], o = i[t];
    if (o) {
      if (D(o)) return r + P(o);
      if (_(o) && o.match(/^-?\d+vh$/)) return ti(window) * P(o) / 100;
      var s = !0 === o ? n.parentNode : nt(o, n);
      return s ? Je(s).top + s.offsetHeight : void 0;
    }
  }
  var ir, nr = {
    mixins: [ji],
    args: "connect",
    props: {
      connect: String,
      toggle: String,
      active: Number,
      swiping: Boolean
    },
    data: {
      connect: "~.uk-switcher",
      toggle: "> * > :first-child",
      active: 0,
      swiping: !0,
      cls: "uk-active",
      clsContainer: "uk-switcher",
      attrItem: "uk-switcher-item",
      queued: !0
    },
    computed: {
      connects: function (t, e) {
        return rt(t.connect, e);
      },
      toggles: function (t, e) {
        return ye(t.toggle, e);
      }
    },
    events: [{
      name: "click",
      delegate: function () {
        return this.toggle + ":not(.uk-disabled)";
      },
      handler: function (e) {
        (e.preventDefault(), this.show(L(this.$el.children).filter(function (t) {
          return Tt(e.current, t);
        })[0]));
      }
    }, {
      name: "click",
      el: function () {
        return this.connects;
      },
      delegate: function () {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function (t) {
        (t.preventDefault(), this.show(it(t.current, this.attrItem)));
      }
    }, {
      name: "swipeRight swipeLeft",
      filter: function () {
        return this.swiping;
      },
      el: function () {
        return this.connects;
      },
      handler: function (t) {
        Mi(t) && (t.preventDefault(), window.getSelection().toString() || this.show("swipeLeft" === t.type ? "next" : "previous"));
      }
    }],
    update: function () {
      var e = this;
      this.connects.forEach(function (t) {
        return e.updateAria(t.children);
      });
      var t = this.$el.children;
      this.show(St(t, "." + this.cls)[0] || t[this.active] || t[0]);
    },
    methods: {
      index: function () {
        return !!this.connects.length && ne(St(this.connects[0].children, "." + this.cls)[0]);
      },
      show: function (t) {
        for (var e, i, n = this, r = this.$el.children, o = r.length, s = this.index(), a = 0 <= s, h = "previous" === t ? -1 : 1, l = re(t, r, s), c = 0; c < o; (c++, l = (l + h + o) % o)) if (!pt(this.toggles[l], ".uk-disabled *, .uk-disabled, [disabled]")) {
          (e = this.toggles[l], i = r[l]);
          break;
        }
        !i || 0 <= s && Te(i, this.cls) || s === l || ($e(r, this.cls), ke(i, this.cls), Q(this.toggles, "aria-expanded", !1), Q(e, "aria-expanded", !0), this.connects.forEach(function (t) {
          a ? n.toggleElement([t.children[s], t.children[l]]) : n.toggleNow(t.children[l]);
        }));
      }
    }
  }, rr = {
    mixins: [Li],
    extends: nr,
    props: {
      media: Boolean
    },
    data: {
      media: 960,
      attrItem: "uk-tab-item"
    },
    connected: function () {
      var t = Te(this.$el, "uk-tab-left") ? "uk-tab-left" : !!Te(this.$el, "uk-tab-right") && "uk-tab-right";
      t && this.$create("toggle", this.$el, {
        cls: t,
        mode: "media",
        media: this.media
      });
    }
  }, or = {
    mixins: [Pn, ji],
    args: "target",
    props: {
      href: String,
      target: null,
      mode: "list"
    },
    data: {
      href: !1,
      target: !1,
      mode: "click",
      queued: !0
    },
    computed: {
      target: function (t, e) {
        var i = t.href, n = t.target;
        return (n = rt(n || i, e)).length && n || [e];
      }
    },
    connected: function () {
      jt(this.target, "updatearia", [this]);
    },
    events: [{
      name: Bt + " " + zt,
      filter: function () {
        return b(this.mode, "hover");
      },
      handler: function (t) {
        Mi(t) || this.toggle("toggle" + (t.type === Bt ? "show" : "hide"));
      }
    }, {
      name: "click",
      filter: function () {
        return b(this.mode, "click") || _t && b(this.mode, "hover");
      },
      handler: function (t) {
        var e;
        (Mi(t) || b(this.mode, "click")) && ((gt(t.target, 'a[href="#"], a[href=""], button') || (e = gt(t.target, "a[href]")) && (this.cls || !kt(this.target) || e.hash && pt(this.target, e.hash))) && t.preventDefault(), this.toggle());
      }
    }],
    update: {
      write: function () {
        if (b(this.mode, "media") && this.media) {
          var t = this.isToggled(this.target);
          (this.matchMedia ? !t : t) && this.toggle();
        }
      },
      events: ["resize"]
    },
    methods: {
      toggle: function (t) {
        jt(this.target, t || "toggle", [this]) && this.toggleElement(this.target);
      }
    }
  };
  (Fi.version = "3.0.3", (ir = Fi).component("accordion", Wi), ir.component("alert", Vi), ir.component("cover", Xi), ir.component("drop", Gi), ir.component("dropdown", Ji), ir.component("formCustom", Zi), ir.component("gif", Qi), ir.component("grid", rn), ir.component("heightMatch", sn), ir.component("heightViewport", ln), ir.component("icon", vn), ir.component("img", $n), ir.component("leader", Ln), ir.component("margin", tn), ir.component("modal", Yn), ir.component("nav", Rn), ir.component("navbar", qn), ir.component("offcanvas", Un), ir.component("overflowAuto", Kn), ir.component("responsive", Gn), ir.component("scroll", Jn), ir.component("scrollspy", Zn), ir.component("scrollspyNav", Qn), ir.component("sticky", tr), ir.component("svg", dn), ir.component("switcher", nr), ir.component("tab", rr), ir.component("toggle", or), ir.component("video", Ui), ir.component("close", xn), ir.component("marker", wn), ir.component("navbarToggleIcon", wn), ir.component("overlayIcon", wn), ir.component("paginationNext", wn), ir.component("paginationPrevious", wn), ir.component("searchIcon", yn), ir.component("slidenavNext", bn), ir.component("slidenavPrevious", bn), ir.component("spinner", kn), ir.component("totop", wn), ir.use(Yi));
  var sr = {
    mixins: [Li],
    props: {
      date: String,
      clsWrapper: String
    },
    data: {
      date: "",
      clsWrapper: ".uk-countdown-%unit%"
    },
    computed: {
      date: function (t) {
        var e = t.date;
        return Date.parse(e);
      },
      days: function (t, e) {
        return be(t.clsWrapper.replace("%unit%", "days"), e);
      },
      hours: function (t, e) {
        return be(t.clsWrapper.replace("%unit%", "hours"), e);
      },
      minutes: function (t, e) {
        return be(t.clsWrapper.replace("%unit%", "minutes"), e);
      },
      seconds: function (t, e) {
        return be(t.clsWrapper.replace("%unit%", "seconds"), e);
      },
      units: function () {
        var e = this;
        return ["days", "hours", "minutes", "seconds"].filter(function (t) {
          return e[t];
        });
      }
    },
    connected: function () {
      this.start();
    },
    disconnected: function () {
      var e = this;
      (this.stop(), this.units.forEach(function (t) {
        return oe(e[t]);
      }));
    },
    events: [{
      name: "visibilitychange",
      el: document,
      handler: function () {
        document.hidden ? this.stop() : this.start();
      }
    }],
    update: {
      write: function () {
        var t, e, n = this, r = (t = this.date, {
          total: e = t - Date.now(),
          seconds: e / 1e3 % 60,
          minutes: e / 1e3 / 60 % 60,
          hours: e / 1e3 / 60 / 60 % 24,
          days: e / 1e3 / 60 / 60 / 24
        });
        (r.total <= 0 && (this.stop(), r.days = r.hours = r.minutes = r.seconds = 0), this.units.forEach(function (t) {
          var e = String(Math.floor(r[t]));
          e = e.length < 2 ? "0" + e : e;
          var i = n[t];
          i.textContent !== e && ((e = e.split("")).length !== i.children.length && se(i, e.map(function () {
            return "<span></span>";
          }).join("")), e.forEach(function (t, e) {
            return i.children[e].textContent = t;
          }));
        }));
      }
    },
    methods: {
      start: function () {
        var t = this;
        (this.stop(), this.date && this.units.length && (this.$emit(), this.timer = setInterval(function () {
          return t.$emit();
        }, 1e3)));
      },
      stop: function () {
        this.timer && (clearInterval(this.timer), this.timer = null);
      }
    }
  };
  var ar, hr = "uk-animation-target", lr = {
    props: {
      animation: Number
    },
    data: {
      animation: 150
    },
    computed: {
      target: function () {
        return this.$el;
      }
    },
    methods: {
      animate: function (t) {
        var n = this;
        ar || (ar = ae(document.head, "<style>").sheet).insertRule("." + hr + " > * {\n                    margin-top: 0 !important;\n                    transform: none !important;\n                }", 0);
        var r = L(this.target.children), o = r.map(function (t) {
          return cr(t, !0);
        }), e = ti(this.target), i = window.pageYOffset;
        (t(), Ve.cancel(this.target), r.forEach(Ve.cancel), ur(this.target), this.$update(this.target), pi.flush());
        var s = ti(this.target), a = (r = r.concat(L(this.target.children).filter(function (t) {
          return !b(r, t);
        }))).map(function (t, e) {
          return !!(t.parentNode && (e in o)) && (o[e] ? kt(t) ? dr(t) : {
            opacity: 0
          } : {
            opacity: kt(t) ? 1 : 0
          });
        });
        return (o = a.map(function (t, e) {
          var i = r[e].parentNode === n.target && (o[e] || cr(r[e]));
          if (i) if (t) {
            if (!(("opacity" in t))) {
              i.opacity % 1 ? t.opacity = 1 : delete i.opacity;
            }
          } else delete i.opacity;
          return i;
        }), ke(this.target, hr), r.forEach(function (t, e) {
          return o[e] && De(t, o[e]);
        }), De(this.target, "height", e), ci(window, i), Xt.all(r.map(function (t, e) {
          return o[e] && a[e] ? Ve.start(t, a[e], n.animation, "ease") : Xt.resolve();
        }).concat(Ve.start(this.target, {
          height: s
        }, this.animation, "ease"))).then(function () {
          (r.forEach(function (t, e) {
            return De(t, {
              display: 0 === a[e].opacity ? "none" : "",
              zIndex: ""
            });
          }), ur(n.target), n.$update(n.target), pi.flush());
        }, K));
      }
    }
  };
  function cr(t, e) {
    var i = De(t, "zIndex");
    return !!kt(t) && R({
      display: "",
      opacity: e ? De(t, "opacity") : "0",
      pointerEvents: "none",
      position: "absolute",
      zIndex: "auto" === i ? ne(t) : i
    }, dr(t));
  }
  function ur(t) {
    (De(t.children, {
      height: "",
      left: "",
      opacity: "",
      pointerEvents: "",
      position: "",
      top: "",
      width: ""
    }), $e(t, hr), De(t, "height", ""));
  }
  function dr(t) {
    var e = t.getBoundingClientRect(), i = e.height, n = e.width, r = Qe(t), o = r.top, s = r.left;
    return {
      top: o += P(De(t, "marginTop")),
      left: s,
      height: i,
      width: n
    };
  }
  var fr = {
    mixins: [lr],
    args: "target",
    props: {
      target: Boolean,
      selActive: Boolean
    },
    data: {
      target: null,
      selActive: !1,
      attrItem: "uk-filter-control",
      cls: "uk-active",
      animation: 250
    },
    computed: {
      toggles: {
        get: function (t, e) {
          t.attrItem;
          return ye("[" + this.attrItem + "],[data-" + this.attrItem + "]", e);
        },
        watch: function () {
          this.setState(this.getState(), !1);
        }
      },
      target: function (t, e) {
        return be(t.target, e);
      },
      children: {
        get: function () {
          return L(this.target.children);
        },
        watch: function (t, e) {
          var i, n;
          (n = e, (i = t).length === n.length && i.every(function (t) {
            return ~n.indexOf(t);
          }) || this.updateState());
        }
      }
    },
    events: [{
      name: "click",
      delegate: function () {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function (t) {
        (t.preventDefault(), this.apply(t.current));
      }
    }],
    connected: function () {
      var e = this;
      if (!1 !== this.selActive) {
        var i = ye(this.selActive, this.$el);
        this.toggles.forEach(function (t) {
          return Ee(t, e.cls, b(i, t));
        });
      }
    },
    methods: {
      apply: function (t) {
        this.setState(mr(t, this.attrItem, this.getState()));
      },
      getState: function () {
        var i = this;
        return this.toggles.filter(function (t) {
          return Te(t, i.cls);
        }).reduce(function (t, e) {
          return mr(e, i.attrItem, t);
        }, {
          filter: {
            "": ""
          },
          sort: []
        });
      },
      setState: function (l, t) {
        var c = this;
        (void 0 === t && (t = !0), l = R({
          filter: {
            "": ""
          },
          sort: []
        }, l), jt(this.$el, "beforeFilter", [this, l]));
        var u = this.children;
        this.toggles.forEach(function (t) {
          return Ee(t, c.cls, (function (t, e, i) {
            var n = i.filter;
            void 0 === n && (n = {
              "": ""
            });
            var r = i.sort, o = r[0], s = r[1], a = pr(t, e), h = a.filter, l = a.group;
            void 0 === l && (l = "");
            var c = a.sort, u = a.order;
            void 0 === u && (u = "asc");
            return (h = O(c) ? h || "" : h, c = O(h) ? c || "" : c, (O(h) || (l in n) && h === n[l]) && (O(c) || o === c && s === u));
          })(t, c.attrItem, l));
        });
        var e = function () {
          var t, e, i = (t = l.filter, e = "", q(t, function (t) {
            return e += t || "";
          }), e);
          u.forEach(function (t) {
            return De(t, "display", i && !pt(t, i) ? "none" : "");
          });
          var n, r, o = l.sort, s = o[0], a = o[1];
          if (s) {
            var h = (n = s, r = a, R([], u).sort(function (t, e) {
              return it(t, n).localeCompare(it(e, n), void 0, {
                numeric: !0
              }) * ("asc" === r || -1);
            }));
            V(h, u) || h.forEach(function (t) {
              return ae(c.target, t);
            });
          }
        };
        t ? this.animate(e).then(function () {
          return jt(c.$el, "afterFilter", [c]);
        }) : (e(), jt(this.$el, "afterFilter", [this]));
      },
      updateState: function () {
        this.setState(this.getState(), !1);
      }
    }
  };
  function pr(t, e) {
    return Ii(it(t, e), ["filter"]);
  }
  function mr(t, s, a) {
    return (L(t).forEach(function (t) {
      var e = pr(t, s), i = e.filter, n = e.group, r = e.sort, o = e.order;
      (void 0 === o && (o = "asc"), (i || O(r)) && (n ? (delete a.filter[""], a.filter[n] = i) : a.filter = {
        "": i || ""
      }), O(r) || (a.sort = [r, o]));
    }), a);
  }
  var gr = {
    slide: {
      show: function (t) {
        return [{
          transform: wr(-100 * t)
        }, {
          transform: wr()
        }];
      },
      percent: function (t) {
        return vr(t);
      },
      translate: function (t, e) {
        return [{
          transform: wr(-100 * e * t)
        }, {
          transform: wr(100 * e * (1 - t))
        }];
      }
    }
  };
  function vr(t) {
    return Math.abs(De(t, "transform").split(",")[4] / t.offsetWidth) || 0;
  }
  function wr(t, e) {
    return (void 0 === t && (t = 0), void 0 === e && (e = "%"), "translateX(" + t + (t ? e : "") + ")");
  }
  function br(t) {
    return "scale3d(" + t + ", " + t + ", 1)";
  }
  var yr = R({}, gr, {
    fade: {
      show: function () {
        return [{
          opacity: 0
        }, {
          opacity: 1
        }];
      },
      percent: function (t) {
        return 1 - De(t, "opacity");
      },
      translate: function (t) {
        return [{
          opacity: 1 - t
        }, {
          opacity: t
        }];
      }
    },
    scale: {
      show: function () {
        return [{
          opacity: 0,
          transform: br(.8)
        }, {
          opacity: 1,
          transform: br(1)
        }];
      },
      percent: function (t) {
        return 1 - De(t, "opacity");
      },
      translate: function (t) {
        return [{
          opacity: 1 - t,
          transform: br(1 - .2 * t)
        }, {
          opacity: t,
          transform: br(.8 + .2 * t)
        }];
      }
    }
  });
  function xr(t, e, i) {
    jt(t, Wt(e, !1, !1, i));
  }
  var kr = {
    mixins: [{
      props: {
        autoplay: Boolean,
        autoplayInterval: Number,
        pauseOnHover: Boolean
      },
      data: {
        autoplay: !1,
        autoplayInterval: 7e3,
        pauseOnHover: !0
      },
      connected: function () {
        (this.startAutoplay(), this.userInteracted = !1);
      },
      disconnected: function () {
        this.stopAutoplay();
      },
      events: [{
        name: "visibilitychange",
        el: document,
        handler: function () {
          document.hidden ? this.stopAutoplay() : !this.userInteracted && this.startAutoplay();
        }
      }, {
        name: Mt,
        handler: function () {
          (this.userInteracted = !0, this.stopAutoplay());
        }
      }, {
        name: "mouseenter",
        filter: function () {
          return this.autoplay;
        },
        handler: function () {
          this.isHovering = !0;
        }
      }, {
        name: "mouseleave",
        filter: function () {
          return this.autoplay;
        },
        handler: function () {
          this.isHovering = !1;
        }
      }],
      methods: {
        startAutoplay: function () {
          var t = this;
          (this.stopAutoplay(), this.autoplay && (this.interval = setInterval(function () {
            return !(t.isHovering && t.pauseOnHover) && !t.stack.length && t.show("next");
          }, this.autoplayInterval)));
        },
        stopAutoplay: function () {
          this.interval && clearInterval(this.interval);
        }
      }
    }, {
      props: {
        draggable: Boolean
      },
      data: {
        draggable: !0,
        threshold: 10
      },
      created: function () {
        var n = this;
        ["start", "move", "end"].forEach(function (t) {
          var i = n[t];
          n[t] = function (t) {
            var e = Di(t).x * (Ct ? -1 : 1);
            (n.prevPos = e !== n.pos ? n.pos : n.prevPos, n.pos = e, i(t));
          };
        });
      },
      events: [{
        name: Mt,
        delegate: function () {
          return this.selSlides;
        },
        handler: function (t) {
          var e;
          !this.draggable || !Mi(t) && (!(e = t.target).children.length && e.childNodes.length) || 0 < t.button || this.length < 2 || this.start(t);
        }
      }, {
        name: "touchmove",
        passive: !1,
        handler: "move",
        delegate: function () {
          return this.selSlides;
        }
      }, {
        name: "dragstart",
        handler: function (t) {
          t.preventDefault();
        }
      }],
      methods: {
        start: function () {
          var t = this;
          (this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index);
          var e = "touchmove" !== Dt ? Ht(document, Dt, this.move, {
            passive: !1
          }) : K;
          (this.unbindMove = function () {
            (e(), t.unbindMove = null);
          }, Ht(window, "scroll", this.unbindMove), Ht(document, Ot, this.end, !0));
        },
        move: function (t) {
          var e = this;
          if (this.unbindMove) {
            var i = this.pos - this.drag;
            if (!(0 === i || this.prevPos === this.pos || !this.dragging && Math.abs(i) < this.threshold)) {
              (t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = i < 0 ? 1 : -1);
              for (var n = this.slides, r = this.prevIndex, o = Math.abs(i), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || n[r].offsetWidth; s !== r && a < o; ) (this.drag -= a * this.dir, r = s, o -= a, s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || n[r].offsetWidth);
              this.percent = o / a;
              var h, l = n[r], c = n[s], u = this.index !== s, d = r === s;
              ([this.index, this.prevIndex].filter(function (t) {
                return !b([s, r], t);
              }).forEach(function (t) {
                (jt(n[t], "itemhidden", [e]), d && (h = !0, e.prevIndex = r));
              }), (this.index === r && this.prevIndex !== r || h) && jt(n[this.index], "itemshown", [this]), u && (this.prevIndex = r, this.index = s, !d && jt(l, "beforeitemhide", [this]), jt(c, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), l, !d && c), u && (!d && jt(l, "itemhide", [this]), jt(c, "itemshow", [this])));
            }
          }
        },
        end: function () {
          if ((Ft(window, "scroll", this.unbindMove), this.unbindMove && this.unbindMove(), Ft(document, Ot, this.end, !0), this.dragging)) {
            if ((this.dragging = null, this.index === this.prevIndex)) (this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null); else {
              var t = (Ct ? this.dir * (Ct ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
              (this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(0 < this.dir && !t || this.dir < 0 && t ? "next" : "previous", !0));
            }
            Ut();
          }
          this.drag = this.percent = null;
        }
      }
    }, {
      data: {
        selNav: !1
      },
      computed: {
        nav: function (t, e) {
          return be(t.selNav, e);
        },
        selNavItem: function (t) {
          var e = t.attrItem;
          return "[" + e + "],[data-" + e + "]";
        },
        navItems: function (t, e) {
          return ye(this.selNavItem, e);
        }
      },
      update: {
        write: function () {
          var i = this;
          (this.nav && this.length !== this.nav.children.length && se(this.nav, this.slides.map(function (t, e) {
            return "<li " + i.attrItem + '="' + e + '"><a href="#"></a></li>';
          }).join("")), Ee(ye(this.selNavItem, this.$el).concat(this.nav), "uk-hidden", !this.maxIndex), this.updateNav());
        },
        events: ["resize"]
      },
      events: [{
        name: "click",
        delegate: function () {
          return this.selNavItem;
        },
        handler: function (t) {
          (t.preventDefault(), this.show(it(t.current, this.attrItem)));
        }
      }, {
        name: "itemshow",
        handler: "updateNav"
      }],
      methods: {
        updateNav: function () {
          var i = this, n = this.getValidIndex();
          this.navItems.forEach(function (t) {
            var e = it(t, i.attrItem);
            (Ee(t, i.clsActive, z(e) === n), Ee(t, "uk-invisible", i.finite && ("previous" === e && 0 === n || "next" === e && n >= i.maxIndex)));
          });
        }
      }
    }],
    props: {
      clsActivated: Boolean,
      easing: String,
      index: Number,
      finite: Boolean,
      velocity: Number
    },
    data: function () {
      return {
        easing: "ease",
        finite: !1,
        velocity: 1,
        index: 0,
        stack: [],
        percent: 0,
        clsActive: "uk-active",
        clsActivated: !1,
        Transitioner: !1,
        transitionOptions: {}
      };
    },
    computed: {
      duration: function (t, e) {
        var i = t.velocity;
        return $r(e.offsetWidth / i);
      },
      length: function () {
        return this.slides.length;
      },
      list: function (t, e) {
        return be(t.selList, e);
      },
      maxIndex: function () {
        return this.length - 1;
      },
      selSlides: function (t) {
        return t.selList + " > *";
      },
      slides: function () {
        return L(this.list.children);
      }
    },
    events: {
      itemshown: function () {
        this.$update(this.list);
      }
    },
    methods: {
      show: function (t, e) {
        var i = this;
        if ((void 0 === e && (e = !1), !this.dragging && this.length)) {
          var n = this.stack, r = e ? 0 : n.length, o = function () {
            (n.splice(r, 1), n.length && i.show(n.shift(), !0));
          };
          if ((n[e ? "unshift" : "push"](t), !e && 1 < n.length)) 2 === n.length && this._transitioner.forward(Math.min(this.duration, 200)); else {
            var s = this.index, a = Te(this.slides, this.clsActive) && this.slides[s], h = this.getIndex(t, this.index), l = this.slides[h];
            if (a !== l) {
              var c, u;
              if ((this.dir = (u = s, "next" === (c = t) ? 1 : "previous" === c ? -1 : c < u ? -1 : 1), this.prevIndex = s, this.index = h, a && jt(a, "beforeitemhide", [this]), !jt(l, "beforeitemshow", [this, a]))) return (this.index = this.prevIndex, void o());
              var d = this._show(a, l, e).then(function () {
                return (a && jt(a, "itemhidden", [i]), jt(l, "itemshown", [i]), new Xt(function (t) {
                  pi.write(function () {
                    (n.shift(), n.length ? i.show(n.shift(), !0) : i._transitioner = null, t());
                  });
                }));
              });
              return (a && jt(a, "itemhide", [this]), jt(l, "itemshow", [this]), d);
            }
            o();
          }
        }
      },
      getIndex: function (t, e) {
        return (void 0 === t && (t = this.index), void 0 === e && (e = this.index), X(re(t, this.slides, e, this.finite), 0, this.maxIndex));
      },
      getValidIndex: function (t, e) {
        return (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e));
      },
      _show: function (t, e, i) {
        if ((this._transitioner = this._getTransitioner(t, e, this.dir, R({
          easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing
        }, this.transitionOptions)), !i && !t)) return (this._transitioner.translate(1), Xt.resolve());
        var n = this.stack.length;
        return this._transitioner[1 < n ? "forward" : "show"](1 < n ? Math.min(this.duration, 75 + 75 / (n - 1)) : this.duration, this.percent);
      },
      _getDistance: function (t, e) {
        return new this._getTransitioner(t, t !== e && e).getDistance();
      },
      _translate: function (t, e, i) {
        (void 0 === e && (e = this.prevIndex), void 0 === i && (i = this.index));
        var n = this._getTransitioner(e !== i && e, i);
        return (n.translate(t), n);
      },
      _getTransitioner: function (t, e, i, n) {
        return (void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === i && (i = this.dir || 1), void 0 === n && (n = this.transitionOptions), new this.Transitioner(M(t) ? this.slides[t] : t, M(e) ? this.slides[e] : e, i * (Ct ? -1 : 1), n));
      }
    }
  };
  function $r(t) {
    return .5 * t + 300;
  }
  var Ir = {
    mixins: [kr],
    props: {
      animation: String
    },
    data: {
      animation: "slide",
      clsActivated: "uk-transition-active",
      Animations: gr,
      Transitioner: function (o, s, a, t) {
        var e = t.animation, h = t.easing, i = e.percent, n = e.translate, r = e.show;
        void 0 === r && (r = K);
        var l = r(a), c = new Kt();
        return {
          dir: a,
          show: function (t, e, i) {
            var n = this;
            void 0 === e && (e = 0);
            var r = i ? "linear" : h;
            return (t -= Math.round(t * X(e, -1, 1)), this.translate(e), xr(s, "itemin", {
              percent: e,
              duration: t,
              timing: r,
              dir: a
            }), xr(o, "itemout", {
              percent: 1 - e,
              duration: t,
              timing: r,
              dir: a
            }), Xt.all([Ve.start(s, l[1], t, r), Ve.start(o, l[0], t, r)]).then(function () {
              (n.reset(), c.resolve());
            }, K), c.promise);
          },
          stop: function () {
            return Ve.stop([s, o]);
          },
          cancel: function () {
            Ve.cancel([s, o]);
          },
          reset: function () {
            for (var t in l[0]) De([s, o], t, "");
          },
          forward: function (t, e) {
            return (void 0 === e && (e = this.percent()), Ve.cancel([s, o]), this.show(t, e, !0));
          },
          translate: function (t) {
            this.reset();
            var e = n(t, a);
            (De(s, e[1]), De(o, e[0]), xr(s, "itemtranslatein", {
              percent: t,
              dir: a
            }), xr(o, "itemtranslateout", {
              percent: 1 - t,
              dir: a
            }));
          },
          percent: function () {
            return i(o || s, s, a);
          },
          getDistance: function () {
            return o && o.offsetWidth;
          }
        };
      }
    },
    computed: {
      animation: function (t) {
        var e = t.animation, i = t.Animations;
        return R((e in i) ? i[e] : i.slide, {
          name: e
        });
      },
      transitionOptions: function () {
        return {
          animation: this.animation
        };
      }
    },
    events: {
      "itemshow itemhide itemshown itemhidden": function (t) {
        var e = t.target;
        this.$update(e);
      },
      itemshow: function () {
        M(this.prevIndex) && pi.flush();
      },
      beforeitemshow: function (t) {
        ke(t.target, this.clsActive);
      },
      itemshown: function (t) {
        ke(t.target, this.clsActivated);
      },
      itemhidden: function (t) {
        $e(t.target, this.clsActive, this.clsActivated);
      }
    }
  }, Sr = {
    mixins: [jn, Wn, ji, Ir],
    functional: !0,
    props: {
      delayControls: Number,
      preload: Number,
      videoAutoplay: Boolean,
      template: String
    },
    data: function () {
      return {
        preload: 1,
        videoAutoplay: !1,
        delayControls: 3e3,
        items: [],
        cls: "uk-open",
        clsPage: "uk-lightbox-page",
        selList: ".uk-lightbox-items",
        attrItem: "uk-lightbox-item",
        selClose: ".uk-close-large",
        pauseOnHover: !1,
        velocity: 2,
        Animations: yr,
        template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
      };
    },
    created: function () {
      var t = this;
      (this.$mount(ae(this.container, this.template)), this.caption = be(".uk-lightbox-caption", this.$el), this.items.forEach(function () {
        return ae(t.list, "<li></li>");
      }));
    },
    events: [{
      name: Dt + " " + Mt + " keydown",
      handler: "showControls"
    }, {
      name: Ot,
      self: !0,
      delegate: function () {
        return this.selSlides;
      },
      handler: function (t) {
        (t.preventDefault(), this.hide());
      }
    }, {
      name: "shown",
      self: !0,
      handler: function () {
        (this.startAutoplay(), this.showControls());
      }
    }, {
      name: "hide",
      self: !0,
      handler: function () {
        (this.stopAutoplay(), this.hideControls(), $e(this.slides, this.clsActive), Ve.stop(this.slides));
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function () {
        this.$destroy(!0);
      }
    }, {
      name: "keyup",
      el: document,
      handler: function (t) {
        if (this.isToggled(this.$el)) switch (t.keyCode) {
          case 37:
            this.show("previous");
            break;
          case 39:
            this.show("next");
        }
      }
    }, {
      name: "beforeitemshow",
      handler: function (t) {
        this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleNow(this.$el, !0), this.animation = yr.scale, $e(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
      }
    }, {
      name: "itemshow",
      handler: function (t) {
        var e = ne(t.target), i = this.getItem(e).caption;
        (De(this.caption, "display", i ? "" : "none"), se(this.caption, i));
        for (var n = 0; n <= this.preload; n++) (this.loadItem(this.getIndex(e + n)), this.loadItem(this.getIndex(e - n)));
      }
    }, {
      name: "itemshown",
      handler: function () {
        this.draggable = this.$props.draggable;
      }
    }, {
      name: "itemload",
      handler: function (t, r) {
        var o, s = this, e = r.source, i = r.type, n = r.alt;
        if ((this.setItem(r, "<span uk-spinner></span>"), e)) if ("image" === i || e.match(/\.(jp(e)?g|png|gif|svg)($|\?)/i)) ee(e).then(function (t) {
          return s.setItem(r, '<img width="' + t.width + '" height="' + t.height + '" src="' + e + '" alt="' + (n || "") + '">');
        }, function () {
          return s.setError(r);
        }); else if ("video" === i || e.match(/\.(mp4|webm|ogv)($|\?)/i)) {
          var a = be("<video controls playsinline" + (r.poster ? ' poster="' + r.poster + '"' : "") + ' uk-video="' + this.videoAutoplay + '"></video>');
          (Q(a, "src", e), Lt(a, "error loadedmetadata", function (t) {
            "error" === t ? s.setError(r) : (Q(a, {
              width: a.videoWidth,
              height: a.videoHeight
            }), s.setItem(r, a));
          }));
        } else if ("iframe" === i || e.match(/\.(html|php)($|\?)/i)) this.setItem(r, '<iframe class="uk-lightbox-iframe" src="' + e + '" frameborder="0" allowfullscreen></iframe>'); else if (o = e.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/) || e.match(/()youtu\.be\/(.*)/)) {
          var h = o[2], l = function (t, e) {
            return (void 0 === t && (t = 640), void 0 === e && (e = 450), s.setItem(r, Tr("https://www.youtube" + (o[1] || "") + ".com/embed/" + h, t, e, s.videoAutoplay)));
          };
          ee("https://img.youtube.com/vi/" + h + "/maxresdefault.jpg").then(function (t) {
            var e = t.width, i = t.height;
            120 === e && 90 === i ? ee("https://img.youtube.com/vi/" + h + "/0.jpg").then(function (t) {
              var e = t.width, i = t.height;
              return l(e, i);
            }, l) : l(e, i);
          }, l);
        } else (o = e.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) && te("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(e), {
          responseType: "json",
          withCredentials: !1
        }).then(function (t) {
          var e = t.response, i = e.height, n = e.width;
          return s.setItem(r, Tr("https://player.vimeo.com/video/" + o[2], n, i, s.videoAutoplay));
        }, function () {
          return s.setError(r);
        });
      }
    }],
    methods: {
      loadItem: function (t) {
        void 0 === t && (t = this.index);
        var e = this.getItem(t);
        e.content || jt(this.$el, "itemload", [e]);
      },
      getItem: function (t) {
        return (void 0 === t && (t = this.index), this.items[t] || ({}));
      },
      setItem: function (t, e) {
        R(t, {
          content: e
        });
        var i = se(this.slides[this.items.indexOf(t)], e);
        (jt(this.$el, "itemloaded", [this, i]), this.$update(i));
      },
      setError: function (t) {
        this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
      },
      showControls: function () {
        (clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), ke(this.$el, "uk-active", "uk-transition-active"));
      },
      hideControls: function () {
        $e(this.$el, "uk-active", "uk-transition-active");
      }
    }
  };
  function Tr(t, e, i, n) {
    return '<iframe src="' + t + '" width="' + e + '" height="' + i + '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' + n + '" uk-responsive></iframe>';
  }
  var Er, Cr = {
    install: function (t, e) {
      t.lightboxPanel || t.component("lightboxPanel", Sr);
      R(e.props, t.component("lightboxPanel").options.props);
    },
    props: {
      toggle: String
    },
    data: {
      toggle: "a"
    },
    computed: {
      toggles: {
        get: function (t, e) {
          return ye(t.toggle, e);
        },
        watch: function () {
          this.hide();
        }
      }
    },
    disconnected: function () {
      this.hide();
    },
    events: [{
      name: "click",
      delegate: function () {
        return this.toggle + ":not(.uk-disabled)";
      },
      handler: function (t) {
        (t.preventDefault(), this.show(ne(this.toggles, t.current)));
      }
    }],
    methods: {
      show: function (t) {
        var e = this;
        return (this.panel = this.panel || this.$create("lightboxPanel", R({}, this.$props, {
          items: this.toggles.reduce(function (t, i) {
            return (t.push(["href", "caption", "type", "poster", "alt"].reduce(function (t, e) {
              return (t["href" === e ? "source" : e] = it(i, e), t);
            }, {})), t);
          }, [])
        })), Ht(this.panel.$el, "hidden", function () {
          return e.panel = !1;
        }), this.panel.show(t));
      },
      hide: function () {
        return this.panel && this.panel.hide();
      }
    }
  };
  var Ar = {}, Nr = {
    functional: !0,
    args: ["message", "status"],
    data: {
      message: "",
      status: "",
      timeout: 5e3,
      group: null,
      pos: "top-center",
      clsClose: "uk-notification-close",
      clsMsg: "uk-notification-message"
    },
    install: function (r) {
      r.notification.closeAll = function (i, n) {
        we(document.body, function (t) {
          var e = r.getComponent(t, "notification");
          !e || i && i !== e.group || e.close(n);
        });
      };
    },
    computed: {
      marginProp: function (t) {
        return "margin" + (v(t.pos, "top") ? "Top" : "Bottom");
      },
      startProps: function () {
        var t;
        return ((t = {
          opacity: 0
        })[this.marginProp] = -this.$el.offsetHeight, t);
      }
    },
    created: function () {
      Ar[this.pos] || (Ar[this.pos] = ae(this.$container, '<div class="uk-notification uk-notification-' + this.pos + '"></div>'));
      var t = De(Ar[this.pos], "display", "block");
      this.$mount(ae(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href="#" class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"));
    },
    connected: function () {
      var t, e = this, i = P(De(this.$el, this.marginProp));
      Ve.start(De(this.$el, this.startProps), (t = {
        opacity: 1
      }, t[this.marginProp] = i, t)).then(function () {
        e.timeout && (e.timer = setTimeout(e.close, e.timeout));
      });
    },
    events: (Er = {
      click: function (t) {
        (gt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close());
      }
    }, Er[Bt] = function () {
      this.timer && clearTimeout(this.timer);
    }, Er[zt] = function () {
      this.timeout && (this.timer = setTimeout(this.close, this.timeout));
    }, Er),
    methods: {
      close: function (t) {
        var e = this, i = function () {
          (jt(e.$el, "close", [e]), ue(e.$el), Ar[e.pos].children.length || De(Ar[e.pos], "display", "none"));
        };
        (this.timer && clearTimeout(this.timer), t ? i() : Ve.start(this.$el, this.startProps).then(i));
      }
    }
  };
  var _r = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity"], Mr = {
    mixins: [Pn],
    props: _r.reduce(function (t, e) {
      return (t[e] = "list", t);
    }, {}),
    data: _r.reduce(function (t, e) {
      return (t[e] = void 0, t);
    }, {}),
    computed: {
      props: function (f, p) {
        var m = this;
        return _r.reduce(function (t, e) {
          if (O(f[e])) return t;
          var i, n, r, o = e.match(/color/i), s = o || "opacity" === e, a = f[e].slice(0);
          (s && De(p, e, ""), a.length < 2 && a.unshift(("scale" === e ? 1 : s ? De(p, e) : 0) || 0));
          var h = b(a.join(""), "%") ? "%" : "px";
          if (o) {
            var l = p.style.color;
            (a = a.map(function (t) {
              return De(De(p, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(function (t) {
                return P(t);
              });
            }), p.style.color = l);
          } else a = a.map(P);
          if (e.match(/^bg/)) if ((De(p, "background-position-" + e[2], ""), n = De(p, "backgroundPosition").split(" ")["x" === e[2] ? 0 : 1], m.covers)) {
            var c = Math.min.apply(Math, a), u = Math.max.apply(Math, a), d = a.indexOf(c) < a.indexOf(u);
            (r = u - c, a = a.map(function (t) {
              return t - (d ? c : u);
            }), i = (d ? -r : 0) + "px");
          } else i = n;
          return (t[e] = {
            steps: a,
            unit: h,
            pos: i,
            bgPos: n,
            diff: r
          }, t);
        }, {});
      },
      bgProps: function () {
        var e = this;
        return ["bgx", "bgy"].filter(function (t) {
          return (t in e.props);
        });
      },
      covers: function (t, e) {
        return (n = (i = e).style.backgroundSize, r = "cover" === De(De(i, "backgroundSize", ""), "backgroundSize"), i.style.backgroundSize = n, r);
        var i, n, r;
      }
    },
    disconnected: function () {
      delete this._image;
    },
    update: {
      read: function (t) {
        var h = this;
        if ((t.active = this.matchMedia, t.active)) {
          if (!t.image && this.covers && this.bgProps.length) {
            var e = De(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
            if (e) {
              var i = new Image();
              (i.src = e, (t.image = i).naturalWidth || (i.onload = function () {
                return h.$emit();
              }));
            }
          }
          var n = t.image;
          if (n && n.naturalWidth) {
            var l = {
              width: this.$el.offsetWidth,
              height: this.$el.offsetHeight
            }, c = {
              width: n.naturalWidth,
              height: n.naturalHeight
            }, u = Z.cover(c, l);
            (this.bgProps.forEach(function (t) {
              var e = h.props[t], i = e.diff, n = e.bgPos, r = e.steps, o = "bgy" === t ? "height" : "width", s = u[o] - l[o];
              if (n.match(/%$|0px/)) {
                if (s < i) l[o] = u[o] + i - s; else if (i < s) {
                  var a = parseFloat(n);
                  a && (h.props[t].steps = r.map(function (t) {
                    return t - (s - i) / (100 / a);
                  }));
                }
                u = Z.cover(c, l);
              }
            }), t.dim = u);
          }
        }
      },
      write: function (t) {
        var e = t.dim;
        t.active ? e && De(this.$el, {
          backgroundSize: e.width + "px " + e.height + "px",
          backgroundRepeat: "no-repeat"
        }) : De(this.$el, {
          backgroundSize: "",
          backgroundRepeat: ""
        });
      },
      events: ["resize"]
    },
    methods: {
      reset: function () {
        var i = this;
        q(this.getCss(0), function (t, e) {
          return De(i.$el, e, "");
        });
      },
      getCss: function (p) {
        var m = this.props, g = !1;
        return Object.keys(m).reduce(function (t, e) {
          var i = m[e], n = i.steps, r = i.unit, o = i.pos, s = Or(n, p);
          switch (e) {
            case "x":
            case "y":
              if (g) break;
              var a = ["x", "y"].map(function (t) {
                return e === t ? P(s).toFixed(0) + r : m[t] ? Or(m[t].steps, p, 1) + m[t].unit : 0;
              }), h = a[0], l = a[1];
              g = t.transform += " translate3d(" + h + ", " + l + ", 0)";
              break;
            case "rotate":
              t.transform += " rotate(" + s + "deg)";
              break;
            case "scale":
              t.transform += " scale(" + s + ")";
              break;
            case "bgy":
            case "bgx":
              t["background-position-" + e[2]] = "calc(" + o + " + " + (s + r) + ")";
              break;
            case "color":
            case "backgroundColor":
            case "borderColor":
              var c = Dr(n, p), u = c[0], d = c[1], f = c[2];
              t[e] = "rgba(" + u.map(function (t, e) {
                return (t += f * (d[e] - t), 3 === e ? P(t) : parseInt(t, 10));
              }).join(",") + ")";
              break;
            case "blur":
              t.filter += " blur(" + s + "px)";
              break;
            case "hue":
              t.filter += " hue-rotate(" + s + "deg)";
              break;
            case "fopacity":
              t.filter += " opacity(" + s + "%)";
              break;
            case "grayscale":
            case "invert":
            case "saturate":
            case "sepia":
              t.filter += " " + e + "(" + s + "%)";
              break;
            default:
              t[e] = s;
          }
          return t;
        }, {
          transform: "",
          filter: ""
        });
      }
    }
  };
  function Dr(t, e) {
    var i = t.length - 1, n = Math.min(Math.floor(i * e), i - 1), r = t.slice(n, n + 2);
    return (r.push(1 === e ? 1 : e % (1 / i) * i), r);
  }
  function Or(t, e, i) {
    void 0 === i && (i = 2);
    var n = Dr(t, e), r = n[0], o = n[1], s = n[2];
    return (M(r) ? r + Math.abs(r - o) * s * (r < o ? 1 : -1) : +o).toFixed(i);
  }
  var Br = {
    mixins: [Mr],
    props: {
      target: String,
      viewport: Number,
      easing: Number
    },
    data: {
      target: !1,
      viewport: 1,
      easing: 1
    },
    computed: {
      target: function (t, e) {
        var i = t.target;
        return (function t(e) {
          return e ? ("offsetTop" in e) ? e : t(e.parentNode) : document.body;
        })(i && nt(i, e) || e);
      }
    },
    update: {
      read: function (t, e) {
        var i = t.percent;
        if (("scroll" !== e && (i = !1), t.active)) {
          var n, r, o = i;
          return (n = li(this.target) / (this.viewport || 1), r = this.easing, {
            percent: i = X(n * (1 - (r - r * n))),
            style: o !== i && this.getCss(i)
          });
        }
      },
      write: function (t) {
        var e = t.style;
        t.active ? e && De(this.$el, e) : this.reset();
      },
      events: ["scroll", "resize"]
    }
  };
  var zr = {
    update: {
      write: function () {
        if (!this.stack.length && !this.dragging) {
          var t = this.getValidIndex();
          (delete this.index, $e(this.slides, this.clsActive, this.clsActivated), this.show(t));
        }
      },
      events: ["resize"]
    }
  };
  function Pr(t, e, i) {
    var n, r = Lr(t, e);
    return i ? r - (n = t, jr(e).width / 2 - jr(n).width / 2) : Math.min(r, Hr(e));
  }
  function Hr(t) {
    return Math.max(0, Fr(t) - jr(t).width);
  }
  function Fr(t) {
    return Vr(t).reduce(function (t, e) {
      return jr(e).width + t;
    }, 0);
  }
  function Lr(t, e) {
    return (Qe(t).left + (Ct ? jr(t).width - jr(e).width : 0)) * (Ct ? -1 : 1);
  }
  function jr(t) {
    return t.getBoundingClientRect();
  }
  function Wr(t, e, i) {
    jt(t, Wt(e, !1, !1, i));
  }
  function Vr(t) {
    return L(t.children);
  }
  var Yr = {
    mixins: [Li, kr, zr],
    props: {
      center: Boolean,
      sets: Boolean
    },
    data: {
      center: !1,
      sets: !1,
      attrItem: "uk-slider-item",
      selList: ".uk-slider-items",
      selNav: ".uk-slider-nav",
      clsContainer: "uk-slider-container",
      Transitioner: function (r, n, o, t) {
        var e = t.center, s = t.easing, a = t.list, h = new Kt(), i = r ? Pr(r, a, e) : Pr(n, a, e) + jr(n).width * o, l = n ? Pr(n, a, e) : i + jr(r).width * o * (Ct ? -1 : 1);
        return {
          dir: o,
          show: function (t, e, i) {
            void 0 === e && (e = 0);
            var n = i ? "linear" : s;
            return (t -= Math.round(t * X(e, -1, 1)), this.translate(e), r && this.updateTranslates(), e = r ? e : X(e, 0, 1), Wr(this.getItemIn(), "itemin", {
              percent: e,
              duration: t,
              timing: n,
              dir: o
            }), r && Wr(this.getItemIn(!0), "itemout", {
              percent: 1 - e,
              duration: t,
              timing: n,
              dir: o
            }), Ve.start(a, {
              transform: wr(-l * (Ct ? -1 : 1), "px")
            }, t, n).then(h.resolve, K), h.promise);
          },
          stop: function () {
            return Ve.stop(a);
          },
          cancel: function () {
            Ve.cancel(a);
          },
          reset: function () {
            De(a, "transform", "");
          },
          forward: function (t, e) {
            return (void 0 === e && (e = this.percent()), Ve.cancel(a), this.show(t, e, !0));
          },
          translate: function (t) {
            var e = this.getDistance() * o * (Ct ? -1 : 1);
            (De(a, "transform", wr(X(e - e * t - l, -Fr(a), jr(a).width) * (Ct ? -1 : 1), "px")), this.updateTranslates(), r && (t = X(t, -1, 1), Wr(this.getItemIn(), "itemtranslatein", {
              percent: t,
              dir: o
            }), Wr(this.getItemIn(!0), "itemtranslateout", {
              percent: 1 - t,
              dir: o
            })));
          },
          percent: function () {
            return Math.abs((De(a, "transform").split(",")[4] * (Ct ? -1 : 1) + i) / (l - i));
          },
          getDistance: function () {
            return Math.abs(l - i);
          },
          getItemIn: function (t) {
            void 0 === t && (t = !1);
            var e = this.getActives(), i = U(Vr(a), "offsetLeft"), n = ne(i, e[0 < o * (t ? -1 : 1) ? e.length - 1 : 0]);
            return ~n && i[n + (r && !t ? o : 0)];
          },
          getActives: function () {
            var i = Pr(r || n, a, e);
            return U(Vr(a).filter(function (t) {
              var e = Lr(t, a);
              return i <= e && e + jr(t).width <= jr(a).width + i;
            }), "offsetLeft");
          },
          updateTranslates: function () {
            var i = this.getActives();
            Vr(a).forEach(function (t) {
              var e = b(i, t);
              Wr(t, "itemtranslate" + (e ? "in" : "out"), {
                percent: e ? 1 : 0,
                dir: t.offsetLeft <= n.offsetLeft ? 1 : -1
              });
            });
          }
        };
      }
    },
    computed: {
      avgWidth: function () {
        return Fr(this.list) / this.length;
      },
      finite: function (t) {
        return t.finite || Fr(this.list) < jr(this.list).width + Vr(this.list).reduce(function (t, e) {
          return Math.max(t, jr(e).width);
        }, 0) + this.center;
      },
      maxIndex: function () {
        if (!this.finite || this.center && !this.sets) return this.length - 1;
        if (this.center) return this.sets[this.sets.length - 1];
        De(this.slides, "order", "");
        for (var t = Hr(this.list), e = this.length; e--; ) if (Lr(this.list.children[e], this.list) < t) return Math.min(e + 1, this.length - 1);
        return 0;
      },
      sets: function (t) {
        var o = this, e = t.sets, s = jr(this.list).width / (this.center ? 2 : 1), a = 0, h = s, l = 0;
        return (e = e && this.slides.reduce(function (t, e, i) {
          var n = jr(e).width;
          if (a < l + n && (!o.center && i > o.maxIndex && (i = o.maxIndex), !b(t, i))) {
            var r = o.slides[i + 1];
            o.center && r && n < h - jr(r).width / 2 ? h -= n : (h = s, t.push(i), a = l + s + (o.center ? n / 2 : 0));
          }
          return (l += n, t);
        }, [])) && e.length && e;
      },
      transitionOptions: function () {
        return {
          center: this.center,
          list: this.list
        };
      }
    },
    connected: function () {
      Ee(this.$el, this.clsContainer, !be("." + this.clsContainer, this.$el));
    },
    update: {
      write: function () {
        var i = this;
        ye("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach(function (t) {
          var e = it(t, i.attrItem);
          i.maxIndex && Ee(t, "uk-hidden", D(e) && (i.sets && !b(i.sets, P(e)) || e > i.maxIndex));
        });
      },
      events: ["resize"]
    },
    events: {
      beforeitemshow: function (t) {
        !this.dragging && this.sets && this.stack.length < 2 && !b(this.sets, this.index) && (this.index = this.getValidIndex());
        var e = Math.abs(this.index - this.prevIndex + (0 < this.dir && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
        if (!this.dragging && 1 < e) {
          for (var i = 0; i < e; i++) this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
          t.preventDefault();
        } else (this.duration = $r(this.avgWidth / this.velocity) * (jr(this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).width / this.avgWidth), this.reorder());
      },
      itemshow: function () {
        !O(this.prevIndex) && ke(this._getTransitioner().getItemIn(), this.clsActive);
      },
      itemshown: function () {
        var e = this, i = this._getTransitioner(this.index).getActives();
        (this.slides.forEach(function (t) {
          return Ee(t, e.clsActive, b(i, t));
        }), (!this.sets || b(this.sets, P(this.index))) && this.slides.forEach(function (t) {
          return Ee(t, e.clsActivated, b(i, t));
        }));
      }
    },
    methods: {
      reorder: function () {
        var i = this;
        if ((De(this.slides, "order", ""), !this.finite)) {
          var n = 0 < this.dir && this.slides[this.prevIndex] ? this.prevIndex : this.index;
          if ((this.slides.forEach(function (t, e) {
            return De(t, "order", 0 < i.dir && e < n ? 1 : i.dir < 0 && e >= i.index ? -1 : "");
          }), this.center)) for (var t = this.slides[n], e = jr(this.list).width / 2 - jr(t).width / 2, r = 0; 0 < e; ) {
            var o = this.getIndex(--r + n, n), s = this.slides[o];
            (De(s, "order", n < o ? -2 : -1), e -= jr(s).width);
          }
        }
      },
      getValidIndex: function (t, e) {
        if ((void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets)) return t;
        var i;
        do {
          if (b(this.sets, t)) return t;
          (i = t, t = this.getIndex(t + this.dir, e));
        } while (t !== i);
        return t;
      }
    }
  }, Rr = {
    mixins: [Mr],
    data: {
      selItem: "!li"
    },
    computed: {
      item: function (t, e) {
        return nt(t.selItem, e);
      }
    },
    events: [{
      name: "itemshown",
      self: !0,
      el: function () {
        return this.item;
      },
      handler: function () {
        De(this.$el, this.getCss(.5));
      }
    }, {
      name: "itemin itemout",
      self: !0,
      el: function () {
        return this.item;
      },
      handler: function (t) {
        var e = t.type, i = t.detail, n = i.percent, r = i.duration, o = i.timing, s = i.dir;
        (Ve.cancel(this.$el), De(this.$el, this.getCss(Ur(e, s, n))), Ve.start(this.$el, this.getCss(qr(e) ? .5 : 0 < s ? 1 : 0), r, o).catch(K));
      }
    }, {
      name: "transitioncanceled transitionend",
      self: !0,
      el: function () {
        return this.item;
      },
      handler: function () {
        Ve.cancel(this.$el);
      }
    }, {
      name: "itemtranslatein itemtranslateout",
      self: !0,
      el: function () {
        return this.item;
      },
      handler: function (t) {
        var e = t.type, i = t.detail, n = i.percent, r = i.dir;
        (Ve.cancel(this.$el), De(this.$el, this.getCss(Ur(e, r, n))));
      }
    }]
  };
  function qr(t) {
    return u(t, "in");
  }
  function Ur(t, e, i) {
    return (i /= 2, qr(t) ? e < 0 ? 1 - i : i : e < 0 ? i : 1 - i);
  }
  var Xr, Kr = R({}, gr, {
    fade: {
      show: function () {
        return [{
          opacity: 0,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function (t) {
        return 1 - De(t, "opacity");
      },
      translate: function (t) {
        return [{
          opacity: 1 - t,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    scale: {
      show: function () {
        return [{
          opacity: 0,
          transform: br(1.5),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function (t) {
        return 1 - De(t, "opacity");
      },
      translate: function (t) {
        return [{
          opacity: 1 - t,
          transform: br(1 + .5 * t),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    pull: {
      show: function (t) {
        return t < 0 ? [{
          transform: wr(30),
          zIndex: -1
        }, {
          transform: wr(),
          zIndex: 0
        }] : [{
          transform: wr(-100),
          zIndex: 0
        }, {
          transform: wr(),
          zIndex: -1
        }];
      },
      percent: function (t, e, i) {
        return i < 0 ? 1 - vr(e) : vr(t);
      },
      translate: function (t, e) {
        return e < 0 ? [{
          transform: wr(30 * t),
          zIndex: -1
        }, {
          transform: wr(-100 * (1 - t)),
          zIndex: 0
        }] : [{
          transform: wr(100 * -t),
          zIndex: 0
        }, {
          transform: wr(30 * (1 - t)),
          zIndex: -1
        }];
      }
    },
    push: {
      show: function (t) {
        return t < 0 ? [{
          transform: wr(100),
          zIndex: 0
        }, {
          transform: wr(),
          zIndex: -1
        }] : [{
          transform: wr(-30),
          zIndex: -1
        }, {
          transform: wr(),
          zIndex: 0
        }];
      },
      percent: function (t, e, i) {
        return 0 < i ? 1 - vr(e) : vr(t);
      },
      translate: function (t, e) {
        return e < 0 ? [{
          transform: wr(100 * t),
          zIndex: 0
        }, {
          transform: wr(-30 * (1 - t)),
          zIndex: -1
        }] : [{
          transform: wr(-30 * t),
          zIndex: -1
        }, {
          transform: wr(100 * (1 - t)),
          zIndex: 0
        }];
      }
    }
  }), Gr = {
    mixins: [Li, Ir, zr],
    props: {
      ratio: String,
      minHeight: Boolean,
      maxHeight: Boolean
    },
    data: {
      ratio: "16:9",
      minHeight: !1,
      maxHeight: !1,
      selList: ".uk-slideshow-items",
      attrItem: "uk-slideshow-item",
      selNav: ".uk-slideshow-nav",
      Animations: Kr
    },
    update: {
      read: function () {
        var t = this.ratio.split(":").map(Number), e = t[0], i = t[1];
        return (i = i * this.list.offsetWidth / e, this.minHeight && (i = Math.max(this.minHeight, i)), this.maxHeight && (i = Math.min(this.maxHeight, i)), {
          height: i - ni(this.list, "content-box")
        });
      },
      write: function (t) {
        var e = t.height;
        De(this.list, "minHeight", e);
      },
      events: ["resize"]
    }
  }, Jr = {
    mixins: [Li, lr],
    props: {
      group: String,
      threshold: Number,
      clsItem: String,
      clsPlaceholder: String,
      clsDrag: String,
      clsDragState: String,
      clsBase: String,
      clsNoDrag: String,
      clsEmpty: String,
      clsCustom: String,
      handle: String
    },
    data: {
      group: !1,
      threshold: 5,
      clsItem: "uk-sortable-item",
      clsPlaceholder: "uk-sortable-placeholder",
      clsDrag: "uk-sortable-drag",
      clsDragState: "uk-drag",
      clsBase: "uk-sortable",
      clsNoDrag: "uk-sortable-nodrag",
      clsEmpty: "uk-sortable-empty",
      clsCustom: "",
      handle: !1
    },
    created: function () {
      var o = this;
      ["init", "start", "move", "end"].forEach(function (t) {
        var r = o[t];
        o[t] = function (t) {
          o.scrollY = window.pageYOffset;
          var e = Di(t, "page"), i = e.x, n = e.y;
          (o.pos = {
            x: i,
            y: n
          }, r(t));
        };
      });
    },
    events: {
      name: Mt,
      passive: !1,
      handler: "init"
    },
    update: {
      write: function () {
        if ((this.clsEmpty && Ee(this.$el, this.clsEmpty, !this.$el.children.length), De(this.handle ? ye(this.handle, this.$el) : this.$el.children, "touchAction", "none"), this.drag)) {
          Je(this.drag, {
            top: this.pos.y + this.origin.top,
            left: this.pos.x + this.origin.left
          });
          var t, e = Je(this.drag), i = e.top, n = i + e.height;
          (0 < i && i < this.scrollY ? t = this.scrollY - 5 : n < ti(document) && n > ti(window) + this.scrollY && (t = this.scrollY + 5), t && setTimeout(function () {
            return ci(window, t);
          }, 5));
        }
      }
    },
    methods: {
      init: function (t) {
        var e = t.target, i = t.button, n = t.defaultPrevented, r = L(this.$el.children).filter(function (t) {
          return Tt(e, t);
        })[0];
        !r || It(e) || this.handle && !Tt(e, this.handle) || 0 < i || Tt(e, "." + this.clsNoDrag) || n || (t.preventDefault(), this.touched = [this], this.placeholder = r, this.origin = R({
          target: e,
          index: ne(r)
        }, this.pos), Ht(document, Dt, this.move), Ht(document, Ot, this.end), Ht(window, "scroll", this.scroll), this.threshold || this.start(t));
      },
      start: function (t) {
        (this.drag = ae(this.$container, this.placeholder.outerHTML.replace(/^<li/i, "<div").replace(/li>$/i, "div>")), De(this.drag, R({
          boxSizing: "border-box",
          width: this.placeholder.offsetWidth,
          height: this.placeholder.offsetHeight
        }, De(this.placeholder, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), Q(this.drag, "uk-no-boot", ""), ke(this.drag, this.clsDrag, this.clsCustom), ti(this.drag.firstElementChild, ti(this.placeholder.firstElementChild)));
        var e = Je(this.placeholder), i = e.left, n = e.top;
        (R(this.origin, {
          left: i - this.pos.x,
          top: n - this.pos.y
        }), ke(this.placeholder, this.clsPlaceholder), ke(this.$el.children, this.clsItem), ke(document.documentElement, this.clsDragState), jt(this.$el, "start", [this, this.placeholder]), this.move(t));
      },
      move: function (t) {
        if (this.drag) {
          this.$emit();
          var e = "mousemove" === t.type ? t.target : document.elementFromPoint(this.pos.x - window.pageXOffset, this.pos.y - window.pageYOffset), i = this.getSortable(e), n = this.getSortable(this.placeholder), r = i !== n;
          if (i && !Tt(e, this.placeholder) && (!r || i.group && i.group === n.group)) {
            if ((e = i.$el === e.parentNode && e || L(i.$el.children).filter(function (t) {
              return Tt(e, t);
            })[0], r)) n.remove(this.placeholder); else if (!e) return;
            (i.insert(this.placeholder, e), b(this.touched, i) || this.touched.push(i));
          }
        } else (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t);
      },
      end: function (t) {
        if ((Ft(document, Dt, this.move), Ft(document, Ot, this.end), Ft(window, "scroll", this.scroll), this.drag)) {
          Ut();
          var e = this.getSortable(this.placeholder);
          (this === e ? this.origin.index !== ne(this.placeholder) && jt(this.$el, "moved", [this, this.placeholder]) : (jt(e.$el, "added", [e, this.placeholder]), jt(this.$el, "removed", [this, this.placeholder])), jt(this.$el, "stop", [this, this.placeholder]), ue(this.drag), this.drag = null);
          var i = this.touched.map(function (t) {
            return t.clsPlaceholder + " " + t.clsItem;
          }).join(" ");
          (this.touched.forEach(function (t) {
            return $e(t.$el.children, i);
          }), $e(document.documentElement, this.clsDragState));
        } else "touchend" === t.type && t.target.click();
      },
      scroll: function () {
        var t = window.pageYOffset;
        t !== this.scrollY && (this.pos.y += t - this.scrollY, this.scrollY = t, this.$emit());
      },
      insert: function (i, n) {
        var r = this;
        ke(this.$el.children, this.clsItem);
        var t = function () {
          var t, e;
          n ? !Tt(i, r.$el) || (e = n, (t = i).parentNode === e.parentNode && ne(t) > ne(e)) ? he(n, i) : le(n, i) : ae(r.$el, i);
        };
        this.animation ? this.animate(t) : t();
      },
      remove: function (t) {
        Tt(t, this.$el) && (this.animation ? this.animate(function () {
          return ue(t);
        }) : ue(t));
      },
      getSortable: function (t) {
        return t && (this.$getComponent(t, "sortable") || this.getSortable(t.parentNode));
      }
    }
  };
  var Zr = [], Qr = {
    mixins: [jn, ji, Ki],
    args: "title",
    props: {
      delay: Number,
      title: String
    },
    data: {
      pos: "top",
      title: "",
      delay: 0,
      animation: ["uk-animation-scale-up"],
      duration: 100,
      cls: "uk-active",
      clsPos: "uk-tooltip"
    },
    beforeConnect: function () {
      (this._hasTitle = tt(this.$el, "title"), Q(this.$el, {
        title: "",
        "aria-expanded": !1
      }));
    },
    disconnected: function () {
      (this.hide(), Q(this.$el, {
        title: this._hasTitle ? this.title : null,
        "aria-expanded": null
      }));
    },
    methods: {
      show: function () {
        var e = this;
        b(Zr, this) || (Zr.forEach(function (t) {
          return t.hide();
        }), Zr.push(this), this._unbind = Ht(document, Ot, function (t) {
          return !Tt(t.target, e.$el) && e.hide();
        }), clearTimeout(this.showTimer), this.showTimer = setTimeout(function () {
          (e._show(), e.hideTimer = setInterval(function () {
            kt(e.$el) || e.hide();
          }, 150));
        }, this.delay));
      },
      hide: function () {
        var t = Zr.indexOf(this);
        !~t || pt(this.$el, "input") && this.$el === document.activeElement || (Zr.splice(t, 1), clearTimeout(this.showTimer), clearInterval(this.hideTimer), Q(this.$el, "aria-expanded", !1), this.toggleElement(this.tooltip, !1), this.tooltip && ue(this.tooltip), this.tooltip = !1, this._unbind());
      },
      _show: function () {
        (this.tooltip = ae(this.container, '<div class="' + this.clsPos + '" aria-expanded="true" aria-hidden> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), this.positionAt(this.tooltip, this.$el), this.origin = "y" === this.getAxis() ? ai(this.dir) + "-" + this.align : this.align + "-" + ai(this.dir), this.toggleElement(this.tooltip, !0));
      }
    },
    events: (Xr = {}, Xr["focus " + Bt + " " + Mt] = function (t) {
      t.type === Mt && Mi(t) || this.show();
    }, Xr.blur = "hide", Xr[zt] = function (t) {
      Mi(t) || this.hide();
    }, Xr)
  }, to = {
    props: {
      allow: String,
      clsDragover: String,
      concurrent: Number,
      maxSize: Number,
      method: String,
      mime: String,
      msgInvalidMime: String,
      msgInvalidName: String,
      msgInvalidSize: String,
      multiple: Boolean,
      name: String,
      params: Object,
      type: String,
      url: String
    },
    data: {
      allow: !1,
      clsDragover: "uk-dragover",
      concurrent: 1,
      maxSize: 0,
      method: "POST",
      mime: !1,
      msgInvalidMime: "Invalid File Type: %s",
      msgInvalidName: "Invalid File Name: %s",
      msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
      multiple: !1,
      name: "files[]",
      params: {},
      type: "",
      url: "",
      abort: K,
      beforeAll: K,
      beforeSend: K,
      complete: K,
      completeAll: K,
      error: K,
      fail: K,
      load: K,
      loadEnd: K,
      loadStart: K,
      progress: K
    },
    events: {
      change: function (t) {
        pt(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
      },
      drop: function (t) {
        io(t);
        var e = t.dataTransfer;
        e && e.files && ($e(this.$el, this.clsDragover), this.upload(e.files));
      },
      dragenter: function (t) {
        io(t);
      },
      dragover: function (t) {
        (io(t), ke(this.$el, this.clsDragover));
      },
      dragleave: function (t) {
        (io(t), $e(this.$el, this.clsDragover));
      }
    },
    methods: {
      upload: function (t) {
        var n = this;
        if (t.length) {
          jt(this.$el, "upload", [t]);
          for (var e = 0; e < t.length; e++) {
            if (this.maxSize && 1e3 * this.maxSize < t[e].size) return void this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
            if (this.allow && !eo(this.allow, t[e].name)) return void this.fail(this.msgInvalidName.replace("%s", this.allow));
            if (this.mime && !eo(this.mime, t[e].type)) return void this.fail(this.msgInvalidMime.replace("%s", this.mime));
          }
          (this.multiple || (t = [t[0]]), this.beforeAll(this, t));
          var r = (function (t, e) {
            for (var i = [], n = 0; n < t.length; n += e) {
              for (var r = [], o = 0; o < e; o++) r.push(t[n + o]);
              i.push(r);
            }
            return i;
          })(t, this.concurrent), o = function (t) {
            var e = new FormData();
            for (var i in (t.forEach(function (t) {
              return e.append(n.name, t);
            }), n.params)) e.append(i, n.params[i]);
            te(n.url, {
              data: e,
              method: n.method,
              responseType: n.type,
              beforeSend: function (t) {
                var e = t.xhr;
                (e.upload && Ht(e.upload, "progress", n.progress), ["loadStart", "load", "loadEnd", "abort"].forEach(function (t) {
                  return Ht(e, t.toLowerCase(), n[t]);
                }), n.beforeSend(t));
              }
            }).then(function (t) {
              (n.complete(t), r.length ? o(r.shift()) : n.completeAll(t));
            }, function (t) {
              return n.error(t);
            });
          };
          o(r.shift());
        }
      }
    }
  };
  function eo(t, e) {
    return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"));
  }
  function io(t) {
    (t.preventDefault(), t.stopPropagation());
  }
  return (Fi.component("countdown", sr), Fi.component("filter", fr), Fi.component("lightbox", Cr), Fi.component("lightboxPanel", Sr), Fi.component("notification", Nr), Fi.component("parallax", Br), Fi.component("slider", Yr), Fi.component("sliderParallax", Rr), Fi.component("slideshow", Gr), Fi.component("slideshowParallax", Rr), Fi.component("sortable", Jr), Fi.component("tooltip", Qr), Fi.component("upload", to), (function (o) {
    var s = o.connect, a = o.disconnect;
    function t() {
      (h(document.body, s), pi.flush(), new MutationObserver(function (t) {
        return t.forEach(e);
      }).observe(document, {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0
      }), o._initialized = !0);
    }
    function e(t) {
      var e = t.target;
      ("attributes" !== t.type ? (function (t) {
        for (var e = t.addedNodes, i = t.removedNodes, n = 0; n < e.length; n++) h(e[n], s);
        for (var r = 0; r < i.length; r++) h(i[r], a);
        return !0;
      })(t) : (function (t) {
        var e = t.target, i = t.attributeName;
        if ("href" === i) return !0;
        var n = Oi(i);
        if (n && (n in o)) {
          if (tt(e, i)) return (o[n](e), !0);
          var r = o.getComponent(e, n);
          return r ? (r.$destroy(), !0) : void 0;
        }
      })(t)) && o.update(e);
    }
    function h(t, e) {
      if (1 === t.nodeType && !tt(t, "uk-no-boot")) for ((e(t), t = t.firstElementChild); t; ) {
        var i = t.nextElementSibling;
        (h(t, e), t = i);
      }
    }
    ("MutationObserver" in window) && (document.body ? t() : new MutationObserver(function () {
      document.body && (this.disconnect(), t());
    }).observe(document, {
      childList: !0,
      subtree: !0
    }));
  })(Fi), Fi);
});

},{}]},["1zhwm","6Zseh"], "6Zseh", "parcelRequire45fd")

//# sourceMappingURL=index.ba8d4fdc.js.map
