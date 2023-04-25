(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".voice-recorder_waveformcontainer{border-top-left-radius:inherit;border-top-right-radius:inherit;background-color:#efefef96;background-image:-webkit-linear-gradient(top,rgb(243,242,242),white)}.voice-recorder_defaultcontainer{align-items:center;display:flex;height:100%;padding:0 15px;width:100%}.voice-recorder_defaultcontainer p{font-style:italic}.voice-recorder_recordcontainer{height:100%;margin:0 20px}.voice-recorder_recordcontainer canvas{height:100%;width:100%}.voice-recorder_playbackcontainer{height:100%;margin:0 20px}.voice-recorder_playbackcontainer #playback,.voice-recorder_playbackcontainer audio{display:none}.voice-recorder_playbackcontainer canvas{width:100%;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer{position:relative;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer #progressbar,.voice-recorder_playbackcontainer .voice-recorder_canvascontainer #waveformgraph-played-graph{position:absolute;left:0}.voice-recorder_controlscontainer{align-items:center;background-color:#efefef;border-top:1px solid #d8d5d5;border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:flex;justify-content:flex-start;padding:0 15px}.voice-recorder_controlscontainer .voice-recorder_controls{align-items:center;display:flex;height:100%;width:100%}.voice-recorder_controlscontainer .voice-recorder_controlgeneric{all:unset;background:none;border:none;height:70%;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:disabled{pointer-events:none;opacity:.5}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_controlgeneric svg{height:auto;width:65%;transition:all .1s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric>svg:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_control{align-items:center;aspect-ratio:1;background:rgba(128,128,128,.1607843137);background-image:-webkit-linear-gradient(283deg,rgba(236,236,236,.83) 50%,#dbdbdb 65%);border:1px solid #d8d5d5;border-radius:100%;box-shadow:0 0 8px #d2d2d2;display:flex;justify-content:center;margin-right:10px;position:relative;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_stopcontainer{align-items:center;background-color:#bebcbc29;border-radius:50px;display:flex;font-size:small;height:100%;justify-content:space-between;padding:0}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_stopwatch{margin-right:10px}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_control{height:100%}.voice-recorder_controlscontainer .voice-recorder_showblinking{animation:blinker 2s ease-in-out infinite}@keyframes blinker{50%{opacity:.5}}.voice-recorder_controlscontainer .voice-recorder_download{align-items:center;display:flex;height:100%;margin-left:auto}.voice-recorder_maincontainer{aspect-ratio:3/1;border:0px solid #d8d5d5;border-radius:10px;box-shadow:0 4px 8px #cecbcb;display:grid;grid-template-rows:2fr 1fr;margin:10px 30px;width:400px;color:#717171;font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}.voice-recorder_maincontainer canvas{image-rendering:-moz-crisp-edges;image-rendering:-webkit-crisp-edges;image-rendering:pixelated;image-rendering:crisp-edges}@media (max-width: 600px){.voice-recorder_maincontainer{aspect-ratio:auto;margin:0;width:100%;height:150px}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as $ from "react";
import Ge, { createContext as wr, useState as Ee, useContext as _r, useRef as de, useEffect as pe, forwardRef as Er, useImperativeHandle as Tr } from "react";
var Jr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ke = {}, Xr = {
  get exports() {
    return ke;
  },
  set exports(t) {
    ke = t;
  }
}, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function Kr() {
  if (ur)
    return Se;
  ur = 1;
  var t = Ge, h = Symbol.for("react.element"), b = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(r, a, n) {
    var i, u = {}, d = null, g = null;
    n !== void 0 && (d = "" + n), a.key !== void 0 && (d = "" + a.key), a.ref !== void 0 && (g = a.ref);
    for (i in a)
      s.call(a, i) && !c.hasOwnProperty(i) && (u[i] = a[i]);
    if (r && r.defaultProps)
      for (i in a = r.defaultProps, a)
        u[i] === void 0 && (u[i] = a[i]);
    return { $$typeof: h, type: r, key: d, ref: g, props: u, _owner: l.current };
  }
  return Se.Fragment = b, Se.jsx = o, Se.jsxs = o, Se;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function Zr() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ge, h = Symbol.for("react.element"), b = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), r = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = Symbol.iterator, y = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var p = m && e[m] || e[y];
      return typeof p == "function" ? p : null;
    }
    var R = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(e) {
      {
        for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), k = 1; k < p; k++)
          w[k - 1] = arguments[k];
        C("error", e, w);
      }
    }
    function C(e, p, w) {
      {
        var k = R.ReactDebugCurrentFrame, N = k.getStackAddendum();
        N !== "" && (p += "%s", w = w.concat([N]));
        var Z = w.map(function(V) {
          return String(V);
        });
        Z.unshift("Warning: " + p), Function.prototype.apply.call(console[e], console, Z);
      }
    }
    var P = !1, v = !1, K = !1, S = !1, D = !1, U;
    U = Symbol.for("react.module.reference");
    function Q(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === c || D || e === l || e === n || e === i || S || e === g || P || v || K || typeof e == "object" && e !== null && (e.$$typeof === d || e.$$typeof === u || e.$$typeof === o || e.$$typeof === r || e.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === U || e.getModuleId !== void 0));
    }
    function z(e, p, w) {
      var k = e.displayName;
      if (k)
        return k;
      var N = p.displayName || p.name || "";
      return N !== "" ? w + "(" + N + ")" : w;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function J(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case b:
          return "Portal";
        case c:
          return "Profiler";
        case l:
          return "StrictMode";
        case n:
          return "Suspense";
        case i:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case r:
            var p = e;
            return ae(p) + ".Consumer";
          case o:
            var w = e;
            return ae(w._context) + ".Provider";
          case a:
            return z(e, e.render, "ForwardRef");
          case u:
            var k = e.displayName || null;
            return k !== null ? k : J(e.type) || "Memo";
          case d: {
            var N = e, Z = N._payload, V = N._init;
            try {
              return J(V(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, te = 0, ee, oe, ce, se, f, _, j;
    function A() {
    }
    A.__reactDisabledLog = !0;
    function x() {
      {
        if (te === 0) {
          ee = console.log, oe = console.info, ce = console.warn, se = console.error, f = console.group, _ = console.groupCollapsed, j = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: A,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        te++;
      }
    }
    function F() {
      {
        if (te--, te === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: ee
            }),
            info: H({}, e, {
              value: oe
            }),
            warn: H({}, e, {
              value: ce
            }),
            error: H({}, e, {
              value: se
            }),
            group: H({}, e, {
              value: f
            }),
            groupCollapsed: H({}, e, {
              value: _
            }),
            groupEnd: H({}, e, {
              value: j
            })
          });
        }
        te < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = R.ReactCurrentDispatcher, M;
    function L(e, p, w) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (N) {
            var k = N.stack.trim().match(/\n( *(at )?)/);
            M = k && k[1] || "";
          }
        return `
` + M + e;
      }
    }
    var q = !1, B;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      B = new ie();
    }
    function E(e, p) {
      if (!e || q)
        return "";
      {
        var w = B.get(e);
        if (w !== void 0)
          return w;
      }
      var k;
      q = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = I.current, I.current = null, x();
      try {
        if (p) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (ve) {
              k = ve;
            }
            Reflect.construct(e, [], V);
          } else {
            try {
              V.call();
            } catch (ve) {
              k = ve;
            }
            e.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ve) {
            k = ve;
          }
          e();
        }
      } catch (ve) {
        if (ve && k && typeof ve.stack == "string") {
          for (var W = ve.stack.split(`
`), ue = k.stack.split(`
`), re = W.length - 1, ne = ue.length - 1; re >= 1 && ne >= 0 && W[re] !== ue[ne]; )
            ne--;
          for (; re >= 1 && ne >= 0; re--, ne--)
            if (W[re] !== ue[ne]) {
              if (re !== 1 || ne !== 1)
                do
                  if (re--, ne--, ne < 0 || W[re] !== ue[ne]) {
                    var fe = `
` + W[re].replace(" at new ", " at ");
                    return e.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, fe), fe;
                  }
                while (re >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        q = !1, I.current = Z, F(), Error.prepareStackTrace = N;
      }
      var _e = e ? e.displayName || e.name : "", ir = _e ? L(_e) : "";
      return typeof e == "function" && B.set(e, ir), ir;
    }
    function le(e, p, w) {
      return E(e, !1);
    }
    function be(e) {
      var p = e.prototype;
      return !!(p && p.isReactComponent);
    }
    function ge(e, p, w) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return E(e, be(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case n:
          return L("Suspense");
        case i:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            return le(e.render);
          case u:
            return ge(e.type, p, w);
          case d: {
            var k = e, N = k._payload, Z = k._init;
            try {
              return ge(Z(N), p, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, He = {}, Je = R.ReactDebugCurrentFrame;
    function Pe(e) {
      if (e) {
        var p = e._owner, w = ge(e.type, e._source, p ? p.type : null);
        Je.setExtraStackFrame(w);
      } else
        Je.setExtraStackFrame(null);
    }
    function Or(e, p, w, k, N) {
      {
        var Z = Function.call.bind(Ce);
        for (var V in e)
          if (Z(e, V)) {
            var W = void 0;
            try {
              if (typeof e[V] != "function") {
                var ue = Error((k || "React class") + ": " + w + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              W = e[V](p, V, k, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              W = re;
            }
            W && !(W instanceof Error) && (Pe(N), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", w, V, typeof W), Pe(null)), W instanceof Error && !(W.message in He) && (He[W.message] = !0, Pe(N), O("Failed %s type: %s", w, W.message), Pe(null));
          }
      }
    }
    var kr = Array.isArray;
    function Ie(e) {
      return kr(e);
    }
    function Ar(e) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, w = p && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return w;
      }
    }
    function jr(e) {
      try {
        return Xe(e), !1;
      } catch {
        return !0;
      }
    }
    function Xe(e) {
      return "" + e;
    }
    function Ke(e) {
      if (jr(e))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(e)), Xe(e);
    }
    var Te = R.ReactCurrentOwner, Ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ze, Qe, Me;
    Me = {};
    function Mr(e) {
      if (Ce.call(e, "ref")) {
        var p = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Dr(e) {
      if (Ce.call(e, "key")) {
        var p = Object.getOwnPropertyDescriptor(e, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Fr(e, p) {
      if (typeof e.ref == "string" && Te.current && p && Te.current.stateNode !== p) {
        var w = J(Te.current.type);
        Me[w] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(Te.current.type), e.ref), Me[w] = !0);
      }
    }
    function $r(e, p) {
      {
        var w = function() {
          Ze || (Ze = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        w.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Lr(e, p) {
      {
        var w = function() {
          Qe || (Qe = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        w.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Br = function(e, p, w, k, N, Z, V) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: e,
        key: p,
        ref: w,
        props: V,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function Wr(e, p, w, k, N) {
      {
        var Z, V = {}, W = null, ue = null;
        w !== void 0 && (Ke(w), W = "" + w), Dr(p) && (Ke(p.key), W = "" + p.key), Mr(p) && (ue = p.ref, Fr(p, N));
        for (Z in p)
          Ce.call(p, Z) && !Ir.hasOwnProperty(Z) && (V[Z] = p[Z]);
        if (e && e.defaultProps) {
          var re = e.defaultProps;
          for (Z in re)
            V[Z] === void 0 && (V[Z] = re[Z]);
        }
        if (W || ue) {
          var ne = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          W && $r(V, ne), ue && Lr(V, ne);
        }
        return Br(e, W, ue, N, k, Te.current, V);
      }
    }
    var De = R.ReactCurrentOwner, er = R.ReactDebugCurrentFrame;
    function we(e) {
      if (e) {
        var p = e._owner, w = ge(e.type, e._source, p ? p.type : null);
        er.setExtraStackFrame(w);
      } else
        er.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function $e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function rr() {
      {
        if (De.current) {
          var e = J(De.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Vr(e) {
      {
        if (e !== void 0) {
          var p = e.fileName.replace(/^.*[\\\/]/, ""), w = e.lineNumber;
          return `

Check your code at ` + p + ":" + w + ".";
        }
        return "";
      }
    }
    var tr = {};
    function qr(e) {
      {
        var p = rr();
        if (!p) {
          var w = typeof e == "string" ? e : e.displayName || e.name;
          w && (p = `

Check the top-level render call using <` + w + ">.");
        }
        return p;
      }
    }
    function nr(e, p) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var w = qr(p);
        if (tr[w])
          return;
        tr[w] = !0;
        var k = "";
        e && e._owner && e._owner !== De.current && (k = " It was passed a child from " + J(e._owner.type) + "."), we(e), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, k), we(null);
      }
    }
    function or(e, p) {
      {
        if (typeof e != "object")
          return;
        if (Ie(e))
          for (var w = 0; w < e.length; w++) {
            var k = e[w];
            $e(k) && nr(k, p);
          }
        else if ($e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var N = T(e);
          if (typeof N == "function" && N !== e.entries)
            for (var Z = N.call(e), V; !(V = Z.next()).done; )
              $e(V.value) && nr(V.value, p);
        }
      }
    }
    function Nr(e) {
      {
        var p = e.type;
        if (p == null || typeof p == "string")
          return;
        var w;
        if (typeof p == "function")
          w = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === u))
          w = p.propTypes;
        else
          return;
        if (w) {
          var k = J(p);
          Or(w, e.props, "prop", k, e);
        } else if (p.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var N = J(p);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ur(e) {
      {
        for (var p = Object.keys(e.props), w = 0; w < p.length; w++) {
          var k = p[w];
          if (k !== "children" && k !== "key") {
            we(e), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), we(null);
            break;
          }
        }
        e.ref !== null && (we(e), O("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function ar(e, p, w, k, N, Z) {
      {
        var V = Q(e);
        if (!V) {
          var W = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = Vr(N);
          ue ? W += ue : W += rr();
          var re;
          e === null ? re = "null" : Ie(e) ? re = "array" : e !== void 0 && e.$$typeof === h ? (re = "<" + (J(e.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : re = typeof e, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, W);
        }
        var ne = Wr(e, p, w, N, Z);
        if (ne == null)
          return ne;
        if (V) {
          var fe = p.children;
          if (fe !== void 0)
            if (k)
              if (Ie(fe)) {
                for (var _e = 0; _e < fe.length; _e++)
                  or(fe[_e], e);
                Object.freeze && Object.freeze(fe);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(fe, e);
        }
        return e === s ? Ur(ne) : Nr(ne), ne;
      }
    }
    function Yr(e, p, w) {
      return ar(e, p, w, !0);
    }
    function Gr(e, p, w) {
      return ar(e, p, w, !1);
    }
    var zr = Gr, Hr = Yr;
    Re.Fragment = s, Re.jsx = zr, Re.jsxs = Hr;
  }()), Re;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Kr() : t.exports = Zr();
})(Xr);
const X = ke.jsx, ye = ke.jsxs;
var me = {}, sr = {
  get exports() {
    return me;
  },
  set exports(t) {
    me = t;
  }
}, Ae = {}, Qr = {
  get exports() {
    return Ae;
  },
  set exports(t) {
    Ae = t;
  }
}, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function et() {
  if (lr)
    return Y;
  lr = 1;
  var t = typeof Symbol == "function" && Symbol.for, h = t ? Symbol.for("react.element") : 60103, b = t ? Symbol.for("react.portal") : 60106, s = t ? Symbol.for("react.fragment") : 60107, l = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, r = t ? Symbol.for("react.context") : 60110, a = t ? Symbol.for("react.async_mode") : 60111, n = t ? Symbol.for("react.concurrent_mode") : 60111, i = t ? Symbol.for("react.forward_ref") : 60112, u = t ? Symbol.for("react.suspense") : 60113, d = t ? Symbol.for("react.suspense_list") : 60120, g = t ? Symbol.for("react.memo") : 60115, m = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, T = t ? Symbol.for("react.fundamental") : 60117, R = t ? Symbol.for("react.responder") : 60118, O = t ? Symbol.for("react.scope") : 60119;
  function C(v) {
    if (typeof v == "object" && v !== null) {
      var K = v.$$typeof;
      switch (K) {
        case h:
          switch (v = v.type, v) {
            case a:
            case n:
            case s:
            case c:
            case l:
            case u:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case r:
                case i:
                case m:
                case g:
                case o:
                  return v;
                default:
                  return K;
              }
          }
        case b:
          return K;
      }
    }
  }
  function P(v) {
    return C(v) === n;
  }
  return Y.AsyncMode = a, Y.ConcurrentMode = n, Y.ContextConsumer = r, Y.ContextProvider = o, Y.Element = h, Y.ForwardRef = i, Y.Fragment = s, Y.Lazy = m, Y.Memo = g, Y.Portal = b, Y.Profiler = c, Y.StrictMode = l, Y.Suspense = u, Y.isAsyncMode = function(v) {
    return P(v) || C(v) === a;
  }, Y.isConcurrentMode = P, Y.isContextConsumer = function(v) {
    return C(v) === r;
  }, Y.isContextProvider = function(v) {
    return C(v) === o;
  }, Y.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === h;
  }, Y.isForwardRef = function(v) {
    return C(v) === i;
  }, Y.isFragment = function(v) {
    return C(v) === s;
  }, Y.isLazy = function(v) {
    return C(v) === m;
  }, Y.isMemo = function(v) {
    return C(v) === g;
  }, Y.isPortal = function(v) {
    return C(v) === b;
  }, Y.isProfiler = function(v) {
    return C(v) === c;
  }, Y.isStrictMode = function(v) {
    return C(v) === l;
  }, Y.isSuspense = function(v) {
    return C(v) === u;
  }, Y.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === s || v === n || v === c || v === l || v === u || v === d || typeof v == "object" && v !== null && (v.$$typeof === m || v.$$typeof === g || v.$$typeof === o || v.$$typeof === r || v.$$typeof === i || v.$$typeof === T || v.$$typeof === R || v.$$typeof === O || v.$$typeof === y);
  }, Y.typeOf = C, Y;
}
var G = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function rt() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, h = t ? Symbol.for("react.element") : 60103, b = t ? Symbol.for("react.portal") : 60106, s = t ? Symbol.for("react.fragment") : 60107, l = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, r = t ? Symbol.for("react.context") : 60110, a = t ? Symbol.for("react.async_mode") : 60111, n = t ? Symbol.for("react.concurrent_mode") : 60111, i = t ? Symbol.for("react.forward_ref") : 60112, u = t ? Symbol.for("react.suspense") : 60113, d = t ? Symbol.for("react.suspense_list") : 60120, g = t ? Symbol.for("react.memo") : 60115, m = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, T = t ? Symbol.for("react.fundamental") : 60117, R = t ? Symbol.for("react.responder") : 60118, O = t ? Symbol.for("react.scope") : 60119;
    function C(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === s || E === n || E === c || E === l || E === u || E === d || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === g || E.$$typeof === o || E.$$typeof === r || E.$$typeof === i || E.$$typeof === T || E.$$typeof === R || E.$$typeof === O || E.$$typeof === y);
    }
    function P(E) {
      if (typeof E == "object" && E !== null) {
        var le = E.$$typeof;
        switch (le) {
          case h:
            var be = E.type;
            switch (be) {
              case a:
              case n:
              case s:
              case c:
              case l:
              case u:
                return be;
              default:
                var ge = be && be.$$typeof;
                switch (ge) {
                  case r:
                  case i:
                  case m:
                  case g:
                  case o:
                    return ge;
                  default:
                    return le;
                }
            }
          case b:
            return le;
        }
      }
    }
    var v = a, K = n, S = r, D = o, U = h, Q = i, z = s, ae = m, J = g, H = b, te = c, ee = l, oe = u, ce = !1;
    function se(E) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), f(E) || P(E) === a;
    }
    function f(E) {
      return P(E) === n;
    }
    function _(E) {
      return P(E) === r;
    }
    function j(E) {
      return P(E) === o;
    }
    function A(E) {
      return typeof E == "object" && E !== null && E.$$typeof === h;
    }
    function x(E) {
      return P(E) === i;
    }
    function F(E) {
      return P(E) === s;
    }
    function I(E) {
      return P(E) === m;
    }
    function M(E) {
      return P(E) === g;
    }
    function L(E) {
      return P(E) === b;
    }
    function q(E) {
      return P(E) === c;
    }
    function B(E) {
      return P(E) === l;
    }
    function ie(E) {
      return P(E) === u;
    }
    G.AsyncMode = v, G.ConcurrentMode = K, G.ContextConsumer = S, G.ContextProvider = D, G.Element = U, G.ForwardRef = Q, G.Fragment = z, G.Lazy = ae, G.Memo = J, G.Portal = H, G.Profiler = te, G.StrictMode = ee, G.Suspense = oe, G.isAsyncMode = se, G.isConcurrentMode = f, G.isContextConsumer = _, G.isContextProvider = j, G.isElement = A, G.isForwardRef = x, G.isFragment = F, G.isLazy = I, G.isMemo = M, G.isPortal = L, G.isProfiler = q, G.isStrictMode = B, G.isSuspense = ie, G.isValidElementType = C, G.typeOf = P;
  }()), G;
}
var dr;
function Sr() {
  return dr || (dr = 1, function(t) {
    process.env.NODE_ENV === "production" ? t.exports = et() : t.exports = rt();
  }(Qr)), Ae;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Le, pr;
function tt() {
  if (pr)
    return Le;
  pr = 1;
  var t = Object.getOwnPropertySymbols, h = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
  function s(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function l() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var o = {}, r = 0; r < 10; r++)
        o["_" + String.fromCharCode(r)] = r;
      var a = Object.getOwnPropertyNames(o).map(function(i) {
        return o[i];
      });
      if (a.join("") !== "0123456789")
        return !1;
      var n = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(i) {
        n[i] = i;
      }), Object.keys(Object.assign({}, n)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Le = l() ? Object.assign : function(c, o) {
    for (var r, a = s(c), n, i = 1; i < arguments.length; i++) {
      r = Object(arguments[i]);
      for (var u in r)
        h.call(r, u) && (a[u] = r[u]);
      if (t) {
        n = t(r);
        for (var d = 0; d < n.length; d++)
          b.call(r, n[d]) && (a[n[d]] = r[n[d]]);
      }
    }
    return a;
  }, Le;
}
var Be, vr;
function ze() {
  if (vr)
    return Be;
  vr = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Be = t, Be;
}
var We, yr;
function Rr() {
  return yr || (yr = 1, We = Function.call.bind(Object.prototype.hasOwnProperty)), We;
}
var Ve, gr;
function nt() {
  if (gr)
    return Ve;
  gr = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var h = ze(), b = {}, s = Rr();
    t = function(c) {
      var o = "Warning: " + c;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function l(c, o, r, a, n) {
    if (process.env.NODE_ENV !== "production") {
      for (var i in c)
        if (s(c, i)) {
          var u;
          try {
            if (typeof c[i] != "function") {
              var d = Error(
                (a || "React class") + ": " + r + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            u = c[i](o, i, a, r, null, h);
          } catch (m) {
            u = m;
          }
          if (u && !(u instanceof Error) && t(
            (a || "React class") + ": type specification of " + r + " `" + i + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in b)) {
            b[u.message] = !0;
            var g = n ? n() : "";
            t(
              "Failed " + r + " type: " + u.message + (g ?? "")
            );
          }
        }
    }
  }
  return l.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (b = {});
  }, Ve = l, Ve;
}
var qe, hr;
function ot() {
  if (hr)
    return qe;
  hr = 1;
  var t = Sr(), h = tt(), b = ze(), s = Rr(), l = nt(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(r) {
    var a = "Warning: " + r;
    typeof console < "u" && console.error(a);
    try {
      throw new Error(a);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return qe = function(r, a) {
    var n = typeof Symbol == "function" && Symbol.iterator, i = "@@iterator";
    function u(f) {
      var _ = f && (n && f[n] || f[i]);
      if (typeof _ == "function")
        return _;
    }
    var d = "<<anonymous>>", g = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: O(),
      arrayOf: C,
      element: P(),
      elementType: v(),
      instanceOf: K,
      node: Q(),
      objectOf: D,
      oneOf: S,
      oneOfType: U,
      shape: ae,
      exact: J
    };
    function m(f, _) {
      return f === _ ? f !== 0 || 1 / f === 1 / _ : f !== f && _ !== _;
    }
    function y(f, _) {
      this.message = f, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function T(f) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, j = 0;
      function A(F, I, M, L, q, B, ie) {
        if (L = L || d, B = B || M, ie !== b) {
          if (a) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = L + ":" + M;
            !_[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + B + "` prop on `" + L + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[le] = !0, j++);
          }
        }
        return I[M] == null ? F ? I[M] === null ? new y("The " + q + " `" + B + "` is marked as required " + ("in `" + L + "`, but its value is `null`.")) : new y("The " + q + " `" + B + "` is marked as required in " + ("`" + L + "`, but its value is `undefined`.")) : null : f(I, M, L, q, B);
      }
      var x = A.bind(null, !1);
      return x.isRequired = A.bind(null, !0), x;
    }
    function R(f) {
      function _(j, A, x, F, I, M) {
        var L = j[A], q = ee(L);
        if (q !== f) {
          var B = oe(L);
          return new y(
            "Invalid " + F + " `" + I + "` of type " + ("`" + B + "` supplied to `" + x + "`, expected ") + ("`" + f + "`."),
            { expectedType: f }
          );
        }
        return null;
      }
      return T(_);
    }
    function O() {
      return T(o);
    }
    function C(f) {
      function _(j, A, x, F, I) {
        if (typeof f != "function")
          return new y("Property `" + I + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var M = j[A];
        if (!Array.isArray(M)) {
          var L = ee(M);
          return new y("Invalid " + F + " `" + I + "` of type " + ("`" + L + "` supplied to `" + x + "`, expected an array."));
        }
        for (var q = 0; q < M.length; q++) {
          var B = f(M, q, x, F, I + "[" + q + "]", b);
          if (B instanceof Error)
            return B;
        }
        return null;
      }
      return T(_);
    }
    function P() {
      function f(_, j, A, x, F) {
        var I = _[j];
        if (!r(I)) {
          var M = ee(I);
          return new y("Invalid " + x + " `" + F + "` of type " + ("`" + M + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(f);
    }
    function v() {
      function f(_, j, A, x, F) {
        var I = _[j];
        if (!t.isValidElementType(I)) {
          var M = ee(I);
          return new y("Invalid " + x + " `" + F + "` of type " + ("`" + M + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(f);
    }
    function K(f) {
      function _(j, A, x, F, I) {
        if (!(j[A] instanceof f)) {
          var M = f.name || d, L = se(j[A]);
          return new y("Invalid " + F + " `" + I + "` of type " + ("`" + L + "` supplied to `" + x + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return T(_);
    }
    function S(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), o;
      function _(j, A, x, F, I) {
        for (var M = j[A], L = 0; L < f.length; L++)
          if (m(M, f[L]))
            return null;
        var q = JSON.stringify(f, function(ie, E) {
          var le = oe(E);
          return le === "symbol" ? String(E) : E;
        });
        return new y("Invalid " + F + " `" + I + "` of value `" + String(M) + "` " + ("supplied to `" + x + "`, expected one of " + q + "."));
      }
      return T(_);
    }
    function D(f) {
      function _(j, A, x, F, I) {
        if (typeof f != "function")
          return new y("Property `" + I + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var M = j[A], L = ee(M);
        if (L !== "object")
          return new y("Invalid " + F + " `" + I + "` of type " + ("`" + L + "` supplied to `" + x + "`, expected an object."));
        for (var q in M)
          if (s(M, q)) {
            var B = f(M, q, x, F, I + "." + q, b);
            if (B instanceof Error)
              return B;
          }
        return null;
      }
      return T(_);
    }
    function U(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var _ = 0; _ < f.length; _++) {
        var j = f[_];
        if (typeof j != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(j) + " at index " + _ + "."
          ), o;
      }
      function A(x, F, I, M, L) {
        for (var q = [], B = 0; B < f.length; B++) {
          var ie = f[B], E = ie(x, F, I, M, L, b);
          if (E == null)
            return null;
          E.data && s(E.data, "expectedType") && q.push(E.data.expectedType);
        }
        var le = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new y("Invalid " + M + " `" + L + "` supplied to " + ("`" + I + "`" + le + "."));
      }
      return T(A);
    }
    function Q() {
      function f(_, j, A, x, F) {
        return H(_[j]) ? null : new y("Invalid " + x + " `" + F + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return T(f);
    }
    function z(f, _, j, A, x) {
      return new y(
        (f || "React class") + ": " + _ + " type `" + j + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function ae(f) {
      function _(j, A, x, F, I) {
        var M = j[A], L = ee(M);
        if (L !== "object")
          return new y("Invalid " + F + " `" + I + "` of type `" + L + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var q in f) {
          var B = f[q];
          if (typeof B != "function")
            return z(x, F, I, q, oe(B));
          var ie = B(M, q, x, F, I + "." + q, b);
          if (ie)
            return ie;
        }
        return null;
      }
      return T(_);
    }
    function J(f) {
      function _(j, A, x, F, I) {
        var M = j[A], L = ee(M);
        if (L !== "object")
          return new y("Invalid " + F + " `" + I + "` of type `" + L + "` " + ("supplied to `" + x + "`, expected `object`."));
        var q = h({}, j[A], f);
        for (var B in q) {
          var ie = f[B];
          if (s(f, B) && typeof ie != "function")
            return z(x, F, I, B, oe(ie));
          if (!ie)
            return new y(
              "Invalid " + F + " `" + I + "` key `" + B + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(j[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(f), null, "  ")
            );
          var E = ie(M, B, x, F, I + "." + B, b);
          if (E)
            return E;
        }
        return null;
      }
      return T(_);
    }
    function H(f) {
      switch (typeof f) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !f;
        case "object":
          if (Array.isArray(f))
            return f.every(H);
          if (f === null || r(f))
            return !0;
          var _ = u(f);
          if (_) {
            var j = _.call(f), A;
            if (_ !== f.entries) {
              for (; !(A = j.next()).done; )
                if (!H(A.value))
                  return !1;
            } else
              for (; !(A = j.next()).done; ) {
                var x = A.value;
                if (x && !H(x[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(f, _) {
      return f === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function ee(f) {
      var _ = typeof f;
      return Array.isArray(f) ? "array" : f instanceof RegExp ? "object" : te(_, f) ? "symbol" : _;
    }
    function oe(f) {
      if (typeof f > "u" || f === null)
        return "" + f;
      var _ = ee(f);
      if (_ === "object") {
        if (f instanceof Date)
          return "date";
        if (f instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function ce(f) {
      var _ = oe(f);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function se(f) {
      return !f.constructor || !f.constructor.name ? d : f.constructor.name;
    }
    return g.checkPropTypes = l, g.resetWarningCache = l.resetWarningCache, g.PropTypes = g, g;
  }, qe;
}
var Ne, mr;
function at() {
  if (mr)
    return Ne;
  mr = 1;
  var t = ze();
  function h() {
  }
  function b() {
  }
  return b.resetWarningCache = h, Ne = function() {
    function s(o, r, a, n, i, u) {
      if (u !== t) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    s.isRequired = s;
    function l() {
      return s;
    }
    var c = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: l,
      element: s,
      elementType: s,
      instanceOf: l,
      node: s,
      objectOf: l,
      oneOf: l,
      oneOfType: l,
      shape: l,
      exact: l,
      checkPropTypes: b,
      resetWarningCache: h
    };
    return c.PropTypes = c, c;
  }, Ne;
}
if (process.env.NODE_ENV !== "production") {
  var it = Sr(), ut = !0;
  sr.exports = ot()(it.isElement, ut);
} else
  sr.exports = at()();
const xr = wr({
  audioStatus: "",
  audioRecording: void 0,
  updateAudioStatus: () => {
  },
  updateAudioRecording: () => {
  }
});
function ct({ children: t }) {
  const [h, b] = Ee(""), [s, l] = Ee(), r = {
    audioStatus: h,
    audioRecording: s,
    updateAudioStatus: (a) => b(a),
    updateAudioRecording: (a) => l(a)
  };
  return /* @__PURE__ */ X(xr.Provider, { value: r, children: t });
}
function xe() {
  const t = _r(xr);
  if (t === void 0)
    throw new Error("useAudio must be used within a AudioProvider");
  return t;
}
const Cr = wr({
  mainContainerStyle: {},
  controllerContainerStyle: {},
  controllerStyle: {},
  waveContainerStyle: {},
  graphColor: "#000",
  graphShaded: !1,
  height: "inherit",
  width: "inherit",
  downloadable: !1,
  onAudioDownload: () => {
  }
});
function st({ userPropsValue: t, children: h }) {
  return /* @__PURE__ */ X(Cr.Provider, { value: t, children: h });
}
function je() {
  const t = _r(Cr);
  if (t === void 0)
    throw new Error("useUserProps must be used within a UserPropsProvider");
  return t;
}
const lt = (t) => {
  if (!t.length)
    return null;
  const h = [];
  return t.forEach((b) => {
    const s = document.getElementById(b);
    return s && h.push(s), s;
  }), h.length ? h : null;
}, ft = (t) => {
  t && t.forEach((h) => {
    h.remove();
  });
}, dt = (t) => t.map((b) => {
  const s = document.createElement("canvas");
  return s.setAttribute("id", b), s;
}), pt = (t, h) => {
  t.forEach((b) => {
    const s = b.getContext("2d");
    s && (s.clearRect(0, 0, b.width, b.height), s.clearRect(0, 0, b.width, b.height), b.width = ((h == null ? void 0 : h.clientWidth) ?? 1) * devicePixelRatio, b.height = ((h == null ? void 0 : h.clientHeight) ?? 1) * devicePixelRatio, s == null || s.scale(devicePixelRatio, devicePixelRatio));
  });
}, vt = (t, h) => {
  t.forEach((b) => {
    b.style.width = (h == null ? void 0 : h.clientWidth) + "px", b.style.height = (h == null ? void 0 : h.clientHeight) + "px";
  });
}, yt = (t, h) => {
  t.forEach((b) => {
    h == null || h.appendChild(b);
  });
}, Pr = (t, h) => {
  try {
    const b = document.querySelector(h), s = lt(t);
    ft(s);
    const l = dt(t);
    return pt(l, b), vt(l, b), yt(l, b), l;
  } catch (b) {
    return console.error("Error in setUpCanvas: ", b), null;
  }
}, Oe = { solid: "rgb(54, 54, 54)", faded: "rgb(210, 209, 208)" }, gt = (t, h, b) => {
  const s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
  if (!s)
    return Oe;
  const l = parseInt(s[1], 16), c = parseInt(s[2], 16), o = parseInt(s[3], 16);
  if (h && b) {
    const r = Math.round(l * h / 100), a = Math.round(c * h / 100), n = Math.round(o * h / 100);
    return {
      solid: `rgb(${r}, ${a}, ${n})`,
      faded: `rgb(${r}, ${a}, ${n}, 0.5)`
    };
  }
  return {
    solid: `rgb(${l}, ${c}, ${o})`,
    faded: `rgb(${l}, ${c}, ${o}, 0.5)`
  };
}, ht = (t) => {
  const h = new Option().style;
  return h.color = t, h.color == t;
}, mt = (t) => {
  const h = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    "indianred ": "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  return typeof h[t.toLowerCase()] < "u" ? h[t.toLowerCase()] : "#000";
}, Ue = (t, h, b) => {
  try {
    if (!t || !ht(t))
      return Oe;
    const s = mt(t);
    return gt(s, h, b);
  } catch {
    return Oe;
  }
};
const bt = 100, br = 2;
function wt() {
  const { audioStatus: t = "", updateAudioRecording: h } = xe(), { graphColor: b, graphShaded: s } = je(), [l, c] = Ee(0), o = de(null), r = de({}), a = de(t);
  pe(() => {
    var g, m, y, T, R, O, C, P, v, K, S, D;
    a.current = t, t === "recording" && (((m = (g = r == null ? void 0 : r.current) == null ? void 0 : g.audioContext) == null ? void 0 : m.state) === "suspended" ? (r.current.audioContext.resume().then(u), (T = (y = r.current) == null ? void 0 : y.mediaRecorder) == null || T.resume()) : (O = (R = r == null ? void 0 : r.current) == null ? void 0 : R.audioContext) != null && O.state || navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(i)), t === "stopped" && ((P = (C = r == null ? void 0 : r.current) == null ? void 0 : C.mediaRecorder) == null || P.stop()), t === "paused_recording" && ((K = (v = r == null ? void 0 : r.current) == null ? void 0 : v.audioContext) == null || K.suspend(), (D = (S = r == null ? void 0 : r.current) == null ? void 0 : S.mediaRecorder) == null || D.pause());
  }, [t]), pe(() => {
    n(), window.addEventListener("resize", n);
  }, []);
  const n = () => {
    const g = Pr(["waveformgraph-record"], ".voice-recorder_recordcontainer");
    g && (o.current = g[0]);
  }, i = (g) => {
    var m;
    try {
      const y = window.AudioContext || (window == null ? void 0 : window.webkitAudioContext), T = new y();
      r.current.audioContext = T;
      const R = T.createMediaStreamSource(g);
      r.current.analyserNode = T.createAnalyser(), R.connect((m = r == null ? void 0 : r.current) == null ? void 0 : m.analyserNode), r.current.analyserNode.fftSize = 128;
      const O = r.current.analyserNode.frequencyBinCount, C = new Float32Array(O);
      r.current.dataArray = C;
      const P = new MediaRecorder(g);
      r.current.mediaRecorder = P, P.start(), P.addEventListener("dataavailable", async (v) => {
        const K = await v.data.arrayBuffer(), S = await T.decodeAudioData(K), D = { blob: v.data, duration: S.duration, graphData: r.current.graphData ?? [] };
        h(D);
      }), P.addEventListener("stop", () => {
        g.getTracks().forEach((v) => v.stop()), R.disconnect(), T.close();
      }), u();
    } catch (y) {
      console.log("error", y);
    }
  }, u = () => {
    var y, T, R, O, C, P, v, K, S, D, U;
    const g = (y = o == null ? void 0 : o.current) == null ? void 0 : y.getContext("2d");
    if (a.current !== "recording")
      return null;
    g == null || g.clearRect(0, 0, ((T = o == null ? void 0 : o.current) == null ? void 0 : T.width) ?? 1, ((R = o == null ? void 0 : o.current) == null ? void 0 : R.height) ?? 1);
    let m = -1 / 0;
    if (Number(performance.now()) > l) {
      if (c(Number(performance.now() / bt)), !((O = r == null ? void 0 : r.current) != null && O.dataArray))
        return null;
      (v = (C = r == null ? void 0 : r.current) == null ? void 0 : C.analyserNode) == null || v.getFloatTimeDomainData((P = r == null ? void 0 : r.current) == null ? void 0 : P.dataArray), m = Math.max(0, ...((K = r == null ? void 0 : r.current) == null ? void 0 : K.dataArray) ?? []);
      const Q = Math.max(1, Math.floor(m * 350));
      r.current.graphData === void 0 && (r.current.graphData = []), (U = r.current) == null || U.graphData.push({
        x: ((S = o == null ? void 0 : o.current) == null ? void 0 : S.offsetWidth) ?? 1,
        y: (((D = o == null ? void 0 : o.current) == null ? void 0 : D.offsetHeight) ?? 1) / 2 - Q / 2,
        height: Q,
        width: br
      });
    }
    d(), requestAnimationFrame(u);
  }, d = () => {
    var m, y, T, R;
    const g = (m = o == null ? void 0 : o.current) == null ? void 0 : m.getContext("2d");
    if (!g || !((y = r.current) != null && y.graphData))
      return null;
    for (let O = 0; O < ((T = r.current) == null ? void 0 : T.graphData.length); O++) {
      const C = (R = r.current) == null ? void 0 : R.graphData[O];
      C && (g.fillStyle = Ue(b, C.height, s).solid, g == null || g.fillRect(C.x, C.y, C.width, C.height), C.x = C.x - br);
    }
  };
  return /* @__PURE__ */ X("div", { className: "voice-recorder_recordcontainer" });
}
const _t = 0.06;
function Et() {
  const [t, h] = Ee([]), { audioRecording: b, audioStatus: s, updateAudioStatus: l } = xe(), { graphColor: c, graphShaded: o } = je(), r = de(null), a = de(null), n = de(null), i = de(null), u = de(), { blob: d, duration: g = 0, graphData: m = [] } = b || {}, y = de(m);
  pe(() => {
    window.addEventListener("resize", v);
  }, []), pe(() => {
    d && (s === "playing_requested" ? C() : s === "playing" ? K() : s === "paused_playing" ? (O(), clearInterval(u.current)) : s === "stopped" && clearInterval(u.current));
  }, [s]), pe(() => {
    y.current = m;
    try {
      m.length && v();
    } catch (S) {
      console.log("error", S);
    }
  }, [m]);
  const T = (S) => {
    var U, Q, z;
    const D = (U = S == null ? void 0 : S.current) == null ? void 0 : U.getContext("2d");
    D == null || D.clearRect(0, 0, ((Q = S == null ? void 0 : S.current) == null ? void 0 : Q.width) ?? 1, ((z = S == null ? void 0 : S.current) == null ? void 0 : z.height) ?? 1);
  }, R = () => {
    const S = Pr([
      "waveformgraph-unplayed-graph",
      "waveformgraph-played-graph",
      "progressbar"
    ], ".voice-recorder_canvascontainer");
    r.current = S == null ? void 0 : S.find((D) => D.id === "waveformgraph-unplayed-graph"), a.current = S == null ? void 0 : S.find((D) => D.id === "waveformgraph-played-graph"), n.current = S == null ? void 0 : S.find((D) => D.id === "progressbar");
  }, O = () => {
    var S;
    return (S = i == null ? void 0 : i.current) == null ? void 0 : S.pause();
  }, C = () => {
    const S = document.querySelector("#playback_audio");
    if (S.autoplay = !0, S.readyState !== 4) {
      const D = window.URL.createObjectURL(new Blob([d], { type: "audio/mpeg" }));
      S.src = D, S.onloadeddata = () => {
        S.play(), l("playing");
      };
    } else
      S.paused ? (S.play(), l("playing")) : (S.currentTime = 0, S.play(), l("playing"));
    S.onended = () => {
      l("stopped");
    };
  }, P = () => {
    var U;
    const S = [];
    if (!(y != null && y.current.length))
      return S;
    const D = (((U = r == null ? void 0 : r.current) == null ? void 0 : U.offsetWidth) ?? 1) / (y == null ? void 0 : y.current.length);
    return y == null || y.current.forEach((Q, z) => {
      var J;
      const ae = ((J = S[z - 1]) == null ? void 0 : J.x) || 0;
      S.push({
        ...Q,
        x: ae + D,
        width: D
      });
    }), h(S), S;
  }, v = () => {
    var D;
    R();
    const S = (D = r == null ? void 0 : r.current) == null ? void 0 : D.getContext("2d");
    if (S) {
      const U = P();
      for (let Q = 0; Q < U.length; Q++) {
        const z = U[Q];
        S.fillStyle = Ue(c, z.height, o).faded, S.fillRect(z.x, z.y, z.width, z.height);
      }
    }
  }, K = () => {
    var oe, ce, se;
    (((oe = i == null ? void 0 : i.current) == null ? void 0 : oe.currentTime) ?? 1) > 0 || T(a);
    const D = Math.abs(g - _t), U = m.length, Q = D / U * 1e3;
    let z = 0, ae, J;
    const H = (ce = n == null ? void 0 : n.current) == null ? void 0 : ce.getContext("2d"), te = (se = a == null ? void 0 : a.current) == null ? void 0 : se.getContext("2d");
    function ee() {
      var _, j, A, x, F, I, M;
      if (!te || !H || (z = Math.round(U * ((((_ = i == null ? void 0 : i.current) == null ? void 0 : _.currentTime) ?? 1) / D)), J === ((j = i == null ? void 0 : i.current) == null ? void 0 : j.currentTime) || ae === z))
        return;
      if (J = (A = i == null ? void 0 : i.current) == null ? void 0 : A.currentTime, ae = z, z >= U) {
        clearInterval(u.current);
        return;
      }
      const f = t[z];
      te.fillStyle = Ue(c, f.height, o).solid, te == null || te.fillRect(f.x, f.y, f.width, f.height), +f.x.toFixed(3) < (((x = n == null ? void 0 : n.current) == null ? void 0 : x.offsetWidth) ?? 1) && (H == null || H.clearRect(0, 0, ((F = n == null ? void 0 : n.current) == null ? void 0 : F.width) ?? 1, ((I = n == null ? void 0 : n.current) == null ? void 0 : I.height) ?? 1), H == null || H.fillRect(f.x, 0, 1, ((M = n == null ? void 0 : n.current) == null ? void 0 : M.offsetHeight) ?? 1));
    }
    ee(), u.current = setInterval(ee, Q);
  };
  return /* @__PURE__ */ ye("div", { className: "voice-recorder_playbackcontainer", children: [
    /* @__PURE__ */ X("audio", { ref: i, controls: !0, id: "playback_audio", children: /* @__PURE__ */ X("track", { src: "captions.vtt", kind: "captions", srcLang: "en", label: "English" }) }),
    /* @__PURE__ */ X("div", { className: "voice-recorder_canvascontainer" })
  ] });
}
function Tt() {
  const { audioStatus: t } = xe(), { waveContainerStyle: h } = je(), [b, s] = Ee("");
  return pe(() => {
    s(t === "playing" || t === "playing_requested" || t === "paused_playing" || t === "stopped" ? "playing" : "recording");
  }, [t]), /* @__PURE__ */ ye("div", { className: "voice-recorder_waveformcontainer", style: h, children: [
    b === "playing" ? /* @__PURE__ */ X(Et, {}) : null,
    b === "recording" ? /* @__PURE__ */ X(wt, {}) : null
  ] });
}
const St = (t) => /* @__PURE__ */ $.createElement("svg", { width: "100px", height: "100px", viewBox: "-40 -25 600 600", xmlns: "http://www.w3.org/2000/svg", fill: "#000000", ...t }, /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ $.createElement("path", { fill: "#000000", d: "M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z" }))), Rt = (t) => /* @__PURE__ */ $.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-3 -2 20.804 20.804", xmlSpace: "preserve", ...t }, /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ $.createElement("g", null, /* @__PURE__ */ $.createElement("g", { id: "c98_play" }, /* @__PURE__ */ $.createElement("path", { d: "M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z" })), /* @__PURE__ */ $.createElement("g", { id: "Capa_1_78_" })))), xt = (t) => /* @__PURE__ */ $.createElement("svg", { className: "voice-recorder-icon", width: "100px", height: "100px", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#000000", ...t }, /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ $.createElement("title", null, "microphone-filled"), /* @__PURE__ */ $.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ $.createElement("g", { id: "icon", fill: "#000000", transform: "translate(85.333333, 42.666667)" }, /* @__PURE__ */ $.createElement("path", { d: "M42.6666667,170.666667 C42.6666667,183.68 47.1466667,298.666667 170.666667,298.666667 C294.186667,298.666667 298.666667,183.68 298.666667,170.666667 L298.666667,170.666667 L341.333333,170.666667 C341.333333,226.346667 309.333333,328.96 192,341.333333 L192,341.333333 L192,426.666667 L149.333333,426.666667 L149.333333,341.333333 C32,328.96 1.42108547e-14,226.346667 1.42108547e-14,170.666667 L1.42108547e-14,170.666667 Z M170.666667,7.10542736e-15 C211.903928,7.10542736e-15 245.333333,33.4294053 245.333333,74.6666667 L245.333333,74.6666667 L245.333333,181.333333 C245.333333,222.570595 211.903928,256 170.666667,256 C150.863835,256 131.872077,248.133356 117.86936,234.13064 C103.866644,220.127923 96,201.136165 96,181.333333 L96,181.333333 L96,74.6666667 C96,33.4294053 129.429405,7.10542736e-15 170.666667,7.10542736e-15 Z", id: "voice" }))))), Ct = (t) => /* @__PURE__ */ $.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-35 -35 590 590", enableBackground: "new 0 0 512 512", xmlSpace: "preserve", ...t }, /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ $.createElement("path", { d: "M512,192V21.3l-64.9,64.9C400.3,33.4,332.2,0,256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c70.7,0,134.7-28.6,181-75 l-45.3-45.2C357,426.5,309,448,256,448c-106,0-192-85.9-192-192c0-106.1,86-192,192-192c58.5,0,110.4,26.5,145.5,67.8L341.3,192H512 z" }))), Pt = (t) => /* @__PURE__ */ $.createElement("svg", { fill: "#000000", viewBox: "-15 -15 525 525", xmlSpace: "preserve", width: "70px", height: "70px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...t }, /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ $.createElement("g", null, /* @__PURE__ */ $.createElement("polygon", { points: "360.352,232.334 324.344,203.803 267.969,274.968 267.969,0 222.031,0 222.031,274.968 165.656,203.803 129.648,232.334 245,377.923 " }), /* @__PURE__ */ $.createElement("rect", { x: 58.02, y: 444.063, width: 373.96, height: 45.938 }))));
var Ye = {}, Ot = {
  get exports() {
    return Ye;
  },
  set exports(t) {
    Ye = t;
  }
};
(function(t, h) {
  (function(b, s) {
    t.exports = s(Ge);
  })(typeof self < "u" ? self : Jr, function(b) {
    return function(s) {
      var l = {};
      function c(o) {
        if (l[o])
          return l[o].exports;
        var r = l[o] = { i: o, l: !1, exports: {} };
        return s[o].call(r.exports, r, r.exports, c), r.l = !0, r.exports;
      }
      return c.m = s, c.c = l, c.d = function(o, r, a) {
        c.o(o, r) || Object.defineProperty(o, r, { enumerable: !0, get: a });
      }, c.r = function(o) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
      }, c.t = function(o, r) {
        if (1 & r && (o = c(o)), 8 & r || 4 & r && typeof o == "object" && o && o.__esModule)
          return o;
        var a = /* @__PURE__ */ Object.create(null);
        if (c.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: o }), 2 & r && typeof o != "string")
          for (var n in o)
            c.d(a, n, function(i) {
              return o[i];
            }.bind(null, n));
        return a;
      }, c.n = function(o) {
        var r = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return c.d(r, "a", r), r;
      }, c.o = function(o, r) {
        return Object.prototype.hasOwnProperty.call(o, r);
      }, c.p = "", c(c.s = 3);
    }([function(s, l) {
      s.exports = b;
    }, function(s, l, c) {
      Object.defineProperty(l, "__esModule", { value: !0 }), l.Validate = l.Time = void 0;
      var o = a(c(5)), r = a(c(6));
      function a(n) {
        return n && n.__esModule ? n : { default: n };
      }
      l.Time = o.default, l.Validate = r.default;
    }, function(s, l, c) {
      Object.defineProperty(l, "__esModule", { value: !0 }), l.useInterval = void 0;
      var o = function(r) {
        return r && r.__esModule ? r : { default: r };
      }(c(7));
      l.useInterval = o.default;
    }, function(s, l, c) {
      Object.defineProperty(l, "__esModule", { value: !0 }), l.useTime = l.useStopwatch = l.useTimer = void 0;
      var o = Object.assign || function(d) {
        for (var g = 1; g < arguments.length; g++) {
          var m = arguments[g];
          for (var y in m)
            Object.prototype.hasOwnProperty.call(m, y) && (d[y] = m[y]);
        }
        return d;
      };
      l.default = function(d) {
        if ((0, r.useEffect)(function() {
          console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead");
        }, []), d.expiryTimestamp) {
          var g = (0, a.default)(d);
          return o({}, g, { startTimer: g.start, stopTimer: g.pause, resetTimer: function() {
          } });
        }
        var m = (0, n.default)(d);
        return o({}, m, { startTimer: m.start, stopTimer: m.pause, resetTimer: m.reset });
      };
      var r = c(0), a = u(c(4)), n = u(c(8)), i = u(c(9));
      function u(d) {
        return d && d.__esModule ? d : { default: d };
      }
      l.useTimer = a.default, l.useStopwatch = n.default, l.useTime = i.default;
    }, function(s, l, c) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var o = Object.assign || function(g) {
        for (var m = 1; m < arguments.length; m++) {
          var y = arguments[m];
          for (var T in y)
            Object.prototype.hasOwnProperty.call(y, T) && (g[T] = y[T]);
        }
        return g;
      }, r = function() {
        return function(g, m) {
          if (Array.isArray(g))
            return g;
          if (Symbol.iterator in Object(g))
            return function(y, T) {
              var R = [], O = !0, C = !1, P = void 0;
              try {
                for (var v, K = y[Symbol.iterator](); !(O = (v = K.next()).done) && (R.push(v.value), !T || R.length !== T); O = !0)
                  ;
              } catch (S) {
                C = !0, P = S;
              } finally {
                try {
                  !O && K.return && K.return();
                } finally {
                  if (C)
                    throw P;
                }
              }
              return R;
            }(g, m);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      l.default = function(g) {
        var m = g.expiryTimestamp, y = g.onExpire, T = g.autoStart, R = T === void 0 || T, O = (0, a.useState)(m), C = r(O, 2), P = C[0], v = C[1], K = (0, a.useState)(n.Time.getSecondsFromExpiry(P)), S = r(K, 2), D = S[0], U = S[1], Q = (0, a.useState)(R), z = r(Q, 2), ae = z[0], J = z[1], H = (0, a.useState)(R), te = r(H, 2), ee = te[0], oe = te[1], ce = (0, a.useState)(d(P)), se = r(ce, 2), f = se[0], _ = se[1];
        function j(x) {
          var F = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          _(d(x)), oe(F), J(F), v(x), U(n.Time.getSecondsFromExpiry(x));
        }
        function A() {
          var x = /* @__PURE__ */ new Date();
          x.setMilliseconds(x.getMilliseconds() + 1e3 * D), j(x);
        }
        return (0, i.useInterval)(function() {
          f !== u && _(u);
          var x = n.Time.getSecondsFromExpiry(P);
          U(x), x <= 0 && (n.Validate.onExpire(y) && y(), J(!1), _(null));
        }, ae ? f : null), o({}, n.Time.getTimeFromSeconds(D), { start: function() {
          ee ? (U(n.Time.getSecondsFromExpiry(P)), J(!0)) : A();
        }, pause: function() {
          J(!1);
        }, resume: A, restart: j, isRunning: ae });
      };
      var a = c(0), n = c(1), i = c(2), u = 1e3;
      function d(g) {
        if (!n.Validate.expiryTimestamp(g))
          return null;
        var m = n.Time.getSecondsFromExpiry(g), y = Math.floor(1e3 * (m - Math.floor(m)));
        return y > 0 ? y : u;
      }
    }, function(s, l, c) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var o = function() {
        function a(n, i) {
          for (var u = 0; u < i.length; u++) {
            var d = i[u];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(n, d.key, d);
          }
        }
        return function(n, i, u) {
          return i && a(n.prototype, i), u && a(n, u), n;
        };
      }(), r = function() {
        function a() {
          (function(n, i) {
            if (!(n instanceof i))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
        }
        return o(a, null, [{ key: "getTimeFromSeconds", value: function(n) {
          var i = Math.ceil(n), u = Math.floor(i / 86400), d = Math.floor(i % 86400 / 3600), g = Math.floor(i % 3600 / 60);
          return { seconds: Math.floor(i % 60), minutes: g, hours: d, days: u };
        } }, { key: "getSecondsFromExpiry", value: function(n, i) {
          var u = n - (/* @__PURE__ */ new Date()).getTime();
          if (u > 0) {
            var d = u / 1e3;
            return i ? Math.round(d) : d;
          }
          return 0;
        } }, { key: "getSecondsFromPrevTime", value: function(n, i) {
          var u = (/* @__PURE__ */ new Date()).getTime() - n;
          if (u > 0) {
            var d = u / 1e3;
            return i ? Math.round(d) : d;
          }
          return 0;
        } }, { key: "getSecondsFromTimeNow", value: function() {
          var n = /* @__PURE__ */ new Date();
          return n.getTime() / 1e3 - 60 * n.getTimezoneOffset();
        } }, { key: "getFormattedTimeFromSeconds", value: function(n, i) {
          var u = a.getTimeFromSeconds(n), d = u.seconds, g = u.minutes, m = u.hours, y = "", T = m;
          return i === "12-hour" && (y = m >= 12 ? "pm" : "am", T = m % 12), { seconds: d, minutes: g, hours: T, ampm: y };
        } }]), a;
      }();
      l.default = r;
    }, function(s, l, c) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var o = function() {
        function a(n, i) {
          for (var u = 0; u < i.length; u++) {
            var d = i[u];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(n, d.key, d);
          }
        }
        return function(n, i, u) {
          return i && a(n.prototype, i), u && a(n, u), n;
        };
      }(), r = function() {
        function a() {
          (function(n, i) {
            if (!(n instanceof i))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
        }
        return o(a, null, [{ key: "expiryTimestamp", value: function(n) {
          var i = new Date(n).getTime() > 0;
          return i || console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings", n), i;
        } }, { key: "onExpire", value: function(n) {
          var i = n && typeof n == "function";
          return n && !i && console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function", n), i;
        } }]), a;
      }();
      l.default = r;
    }, function(s, l, c) {
      Object.defineProperty(l, "__esModule", { value: !0 }), l.default = function(r, a) {
        var n = (0, o.useRef)();
        (0, o.useEffect)(function() {
          n.current = r;
        }), (0, o.useEffect)(function() {
          if (!a)
            return function() {
            };
          var i = setInterval(function() {
            n.current && n.current();
          }, a);
          return function() {
            return clearInterval(i);
          };
        }, [a]);
      };
      var o = c(0);
    }, function(s, l, c) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var o = Object.assign || function(u) {
        for (var d = 1; d < arguments.length; d++) {
          var g = arguments[d];
          for (var m in g)
            Object.prototype.hasOwnProperty.call(g, m) && (u[m] = g[m]);
        }
        return u;
      }, r = function() {
        return function(u, d) {
          if (Array.isArray(u))
            return u;
          if (Symbol.iterator in Object(u))
            return function(g, m) {
              var y = [], T = !0, R = !1, O = void 0;
              try {
                for (var C, P = g[Symbol.iterator](); !(T = (C = P.next()).done) && (y.push(C.value), !m || y.length !== m); T = !0)
                  ;
              } catch (v) {
                R = !0, O = v;
              } finally {
                try {
                  !T && P.return && P.return();
                } finally {
                  if (R)
                    throw O;
                }
              }
              return y;
            }(u, d);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      l.default = function(u) {
        var d = u.autoStart, g = u.offsetTimestamp, m = (0, a.useState)(n.Time.getSecondsFromExpiry(g, !0) || 0), y = r(m, 2), T = y[0], R = y[1], O = (0, a.useState)(/* @__PURE__ */ new Date()), C = r(O, 2), P = C[0], v = C[1], K = (0, a.useState)(T + n.Time.getSecondsFromPrevTime(P || 0, !0)), S = r(K, 2), D = S[0], U = S[1], Q = (0, a.useState)(d), z = r(Q, 2), ae = z[0], J = z[1];
        return (0, i.useInterval)(function() {
          U(T + n.Time.getSecondsFromPrevTime(P, !0));
        }, ae ? 1e3 : null), o({}, n.Time.getTimeFromSeconds(D), { start: function() {
          var H = /* @__PURE__ */ new Date();
          v(H), J(!0), U(T + n.Time.getSecondsFromPrevTime(H, !0));
        }, pause: function() {
          R(D), J(!1);
        }, reset: function() {
          var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, te = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], ee = n.Time.getSecondsFromExpiry(H, !0) || 0, oe = /* @__PURE__ */ new Date();
          v(oe), R(ee), J(te), U(ee + n.Time.getSecondsFromPrevTime(oe, !0));
        }, isRunning: ae });
      };
      var a = c(0), n = c(1), i = c(2);
    }, function(s, l, c) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var o = Object.assign || function(u) {
        for (var d = 1; d < arguments.length; d++) {
          var g = arguments[d];
          for (var m in g)
            Object.prototype.hasOwnProperty.call(g, m) && (u[m] = g[m]);
        }
        return u;
      }, r = function() {
        return function(u, d) {
          if (Array.isArray(u))
            return u;
          if (Symbol.iterator in Object(u))
            return function(g, m) {
              var y = [], T = !0, R = !1, O = void 0;
              try {
                for (var C, P = g[Symbol.iterator](); !(T = (C = P.next()).done) && (y.push(C.value), !m || y.length !== m); T = !0)
                  ;
              } catch (v) {
                R = !0, O = v;
              } finally {
                try {
                  !T && P.return && P.return();
                } finally {
                  if (R)
                    throw O;
                }
              }
              return y;
            }(u, d);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      l.default = function(u) {
        var d = u.format, g = (0, a.useState)(n.Time.getSecondsFromTimeNow()), m = r(g, 2), y = m[0], T = m[1];
        return (0, i.useInterval)(function() {
          T(n.Time.getSecondsFromTimeNow());
        }, 1e3), o({}, n.Time.getFormattedTimeFromSeconds(y, d));
      };
      var a = c(0), n = c(1), i = c(2);
    }]);
  });
})(Ot);
const kt = (t) => /* @__PURE__ */ $.createElement("svg", { width: "100px", height: "100px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t }, /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ $.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ $.createElement("path", { d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z", fill: "#000000" })));
function At() {
  const { audioStatus: t } = xe(), {
    seconds: h,
    minutes: b,
    hours: s,
    start: l,
    pause: c,
    reset: o
  } = Ye.useStopwatch({ autoStart: !1 });
  pe(() => {
    t === "recording" ? l() : t === "paused_playing" || t === "paused_recording" || t === "stopped" ? c() : o();
  }, [t]);
  const r = (a) => a.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 });
  return /* @__PURE__ */ ye("div", { className: `voice-recorder_stopcontainer ${t === "paused_recording" ? "voice-recorder_showblinking" : ""}`, children: [
    /* @__PURE__ */ X("div", { className: "voice-recorder_control", children: /* @__PURE__ */ X(kt, {}) }),
    /* @__PURE__ */ ye("div", { className: "voice-recorder_stopwatch", children: [
      s ? /* @__PURE__ */ X("span", { children: s }) : null,
      /* @__PURE__ */ X("span", { children: r(b) }),
      ":",
      /* @__PURE__ */ X("span", { children: r(h) })
    ] })
  ] });
}
const he = {
  showRecordBtn: !1,
  showPlayBtn: !1,
  showPauseBtn: !1,
  showStopBtn: !1,
  showRedoBtn: !1
}, jt = Er((t, h) => {
  const { audioStatus: b, updateAudioStatus: s, audioRecording: l } = xe(), {
    controllerContainerStyle: c,
    controllerStyle: o,
    downloadable: r,
    onAudioDownload: a
  } = je(), [n, i] = Ee(
    he
  );
  Tr(h, () => ({
    start() {
      g();
    },
    pause() {
      d(
        b === "recording" ? "paused_recording" : "paused_playing"
      );
    },
    stop() {
      d("stopped");
    }
  }));
  const u = ({
    svg: y,
    disabled: T,
    status: R,
    onClick: O,
    applyCircularStyles: C = !0,
    display: P = !0
  }) => !R || !P ? null : /* @__PURE__ */ X(
    "button",
    {
      onClick: O,
      disabled: T,
      className: `${C ? "voice-recorder_control" : ""} voice-recorder_controlgeneric`,
      style: o,
      children: y
    }
  ), d = (y) => () => {
    s(y);
  }, g = () => {
    navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(d("recording")).catch(
      () => alert("Please allow acccess to your microphone to continue.")
    );
  };
  pe(() => {
    const y = document.querySelector(
      ".voice-recorder_maincontainer"
    ), T = document.querySelector(
      ".voice-recorder_controlscontainer"
    );
    if (y && T) {
      const { height: R } = y.getBoundingClientRect();
      T.style.height = `${R / 3}px`;
    }
  }, []);
  const m = () => {
    const { blob: y = "" } = l || {};
    if (!y)
      return null;
    const T = URL.createObjectURL(y), R = document.querySelector(
      ".voice-recorder_downloadfile"
    );
    R.href = T, R.download = "audio.wav", R.click();
  };
  return pe(() => {
    if (l) {
      const { blob: y = "" } = l || {};
      if (!y || !a)
        return;
      a(y);
    }
  }, [l]), pe(() => {
    switch (b) {
      case "":
        i({
          ...he,
          showRecordBtn: !0
        });
        break;
      case "recording":
        i({
          ...he,
          showPauseBtn: !0,
          showStopBtn: !0
        });
        break;
      case "paused_recording":
        i({
          ...he,
          showStopBtn: !0,
          showRecordBtn: !0
        });
        break;
      case "paused_playing":
        i({
          ...he,
          showPlayBtn: !0,
          showPauseBtn: !0,
          showRedoBtn: !0
        });
        break;
      case "playing":
      case "stopped":
        i({
          ...he,
          showPauseBtn: !0,
          showPlayBtn: !0,
          showRedoBtn: !0
        });
        break;
      default:
        i(he);
    }
  }, [b]), /* @__PURE__ */ ye(
    "div",
    {
      className: "voice-recorder_controlscontainer",
      style: c,
      children: [
        /* @__PURE__ */ ye("div", { className: "voice-recorder_controls", children: [
          u({
            svg: /* @__PURE__ */ X(xt, {}),
            disabled: !1,
            status: n.showRecordBtn,
            onClick: g
          }),
          u({
            svg: /* @__PURE__ */ X(St, {}),
            disabled: b === "stopped" || b === "paused_recording" || b === "paused_playing",
            status: n.showPauseBtn,
            onClick: d(
              b === "recording" ? "paused_recording" : "paused_playing"
            )
          }),
          u({
            svg: /* @__PURE__ */ X(Rt, {}),
            disabled: !1,
            status: n.showPlayBtn,
            onClick: d("playing_requested")
          }),
          u({
            svg: /* @__PURE__ */ X(At, {}),
            disabled: !1,
            status: n.showStopBtn,
            onClick: d("stopped"),
            applyCircularStyles: !1
          }),
          u({
            svg: /* @__PURE__ */ X(Ct, {}),
            disabled: !1,
            status: n.showRedoBtn,
            onClick: d("")
          }),
          /* @__PURE__ */ X("div", { className: "voice-recorder_download", children: u({
            svg: /* @__PURE__ */ X(Pt, {}),
            disabled: !1,
            status: n.showRedoBtn,
            onClick: m,
            display: r
          }) })
        ] }),
        /* @__PURE__ */ X(
          "a",
          {
            download: !0,
            style: { display: "none" },
            className: "voice-recorder_downloadfile"
          }
        )
      ]
    }
  );
});
const It = Er((t, h) => {
  const { mainContainerStyle: b, height: s, width: l, ...c } = t, o = {
    ...b,
    height: s,
    width: l
  }, r = de();
  return Tr(h, () => ({
    start() {
      var a;
      (a = r == null ? void 0 : r.current) == null || a.start();
    },
    pause() {
      var a;
      (a = r == null ? void 0 : r.current) == null || a.pause();
    },
    stop() {
      var a;
      (a = r == null ? void 0 : r.current) == null || a.stop();
    }
  })), /* @__PURE__ */ X(ct, { children: /* @__PURE__ */ ye(st, { userPropsValue: c, children: [
    /* @__PURE__ */ ye(
      "div",
      {
        className: "voice-recorder_maincontainer",
        style: o,
        children: [
          /* @__PURE__ */ X(Tt, {}),
          /* @__PURE__ */ X(jt, { ref: r })
        ]
      }
    ),
    /* @__PURE__ */ X(
      "button",
      {
        onClick: () => {
          var a;
          (a = r == null ? void 0 : r.current) == null || a.start();
        },
        children: "start"
      }
    ),
    /* @__PURE__ */ X("button", { children: "pause" }),
    /* @__PURE__ */ X("button", { children: "stop" })
  ] }) });
});
It.propTypes = {
  mainContainerStyle: me.object,
  height: me.string || me.number,
  width: me.string || me.number
};
export {
  It as VoiceRecorder
};
