(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.voice-recorder_waveformcontainer{border-top-left-radius:inherit;border-top-right-radius:inherit;background-color:#efefef96;background-image:-webkit-linear-gradient(top,rgb(243,242,242),white)}.voice-recorder_defaultcontainer{align-items:center;display:flex;height:100%;padding:0 15px;width:100%}.voice-recorder_defaultcontainer p{font-style:italic}.voice-recorder_recordcontainer{height:100%;margin:0 20px}.voice-recorder_recordcontainer canvas{height:100%;width:100%}.voice-recorder_playbackcontainer{height:100%;margin:0 20px}.voice-recorder_playbackcontainer #playback,.voice-recorder_playbackcontainer audio{display:none}.voice-recorder_playbackcontainer canvas{width:100%;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer{position:relative;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer #progressbar,.voice-recorder_playbackcontainer .voice-recorder_canvascontainer #waveformgraph-played-graph{position:absolute;left:0}.voice-recorder_controlscontainer{align-items:center;background-color:#efefef;border-top:1px solid #d8d5d5;border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:flex;justify-content:flex-start;padding:0 15px}.voice-recorder_controlscontainer .voice-recorder_controls{align-items:center;display:flex;height:100%;width:100%}.voice-recorder_controlscontainer .voice-recorder_controlgeneric{all:unset;background:none;border:none;height:70%;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:disabled{pointer-events:none;opacity:.5}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_controlgeneric svg{height:auto;width:65%;transition:all .1s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric>svg:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_control{align-items:center;aspect-ratio:1;background:rgba(128,128,128,.1607843137);background-image:-webkit-linear-gradient(283deg,rgba(236,236,236,.83) 50%,#dbdbdb 65%);border:1px solid #d8d5d5;border-radius:100%;box-shadow:0 0 8px #d2d2d2;display:flex;justify-content:center;margin-right:10px;position:relative;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_stopcontainer{align-items:center;background-color:#bebcbc29;border-radius:50px;display:flex;font-size:small;height:100%;justify-content:space-between;padding:0}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_stopwatch{margin-right:10px}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_control{height:100%}.voice-recorder_controlscontainer .voice-recorder_showblinking{animation:blinker 2s ease-in-out infinite}@keyframes blinker{50%{opacity:.5}}.voice-recorder_controlscontainer .voice-recorder_download{align-items:center;display:flex;height:100%;margin-left:auto}.voice-recorder_maincontainer{aspect-ratio:20/1;display:grid;grid-template-rows:2fr 1fr;width:"100%";color:#717171;font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}.voice-recorder_maincontainer canvas{image-rendering:-moz-crisp-edges;image-rendering:-webkit-crisp-edges;image-rendering:pixelated;image-rendering:crisp-edges}@media (max-width: 600px){.voice-recorder_maincontainer{aspect-ratio:auto;margin:0;width:100%;height:150px}}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import Le, { createContext as br, useState as Te, useContext as Tr, useRef as de, useEffect as le, forwardRef as wr, useImperativeHandle as Sr } from "react";
var Gr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _e = {}, Jr = {
  get exports() {
    return _e;
  },
  set exports(o) {
    _e = o;
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
var ir;
function Xr() {
  if (ir)
    return Se;
  ir = 1;
  var o = Le, h = Symbol.for("react.element"), m = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, u = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(t, r, n) {
    var a, i = {}, p = null, b = null;
    n !== void 0 && (p = "" + n), r.key !== void 0 && (p = "" + r.key), r.ref !== void 0 && (b = r.ref);
    for (a in r)
      s.call(r, a) && !f.hasOwnProperty(a) && (i[a] = r[a]);
    if (t && t.defaultProps)
      for (a in r = t.defaultProps, r)
        i[a] === void 0 && (i[a] = r[a]);
    return { $$typeof: h, type: t, key: p, ref: b, props: i, _owner: u.current };
  }
  return Se.Fragment = m, Se.jsx = d, Se.jsxs = d, Se;
}
var Ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function Kr() {
  return ur || (ur = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Le, h = Symbol.for("react.element"), m = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), t = Symbol.for("react.context"), r = Symbol.for("react.forward_ref"), n = Symbol.for("react.suspense"), a = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = Symbol.iterator, g = "@@iterator";
    function R(e) {
      if (e === null || typeof e != "object")
        return null;
      var v = y && e[y] || e[g];
      return typeof v == "function" ? v : null;
    }
    var O = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var v = arguments.length, T = new Array(v > 1 ? v - 1 : 0), A = 1; A < v; A++)
          T[A - 1] = arguments[A];
        C("error", e, T);
      }
    }
    function C(e, v, T) {
      {
        var A = O.ReactDebugCurrentFrame, V = A.getStackAddendum();
        V !== "" && (v += "%s", T = T.concat([V]));
        var X = T.map(function(B) {
          return String(B);
        });
        X.unshift("Warning: " + v), Function.prototype.apply.call(console[e], console, X);
      }
    }
    var E = !1, l = !1, q = !1, _ = !1, F = !1, W;
    W = Symbol.for("react.module.reference");
    function K(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === f || F || e === u || e === n || e === a || _ || e === b || E || l || q || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === i || e.$$typeof === d || e.$$typeof === t || e.$$typeof === r || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === W || e.getModuleId !== void 0));
    }
    function L(e, v, T) {
      var A = e.displayName;
      if (A)
        return A;
      var V = v.displayName || v.name || "";
      return V !== "" ? T + "(" + V + ")" : T;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function J(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case m:
          return "Portal";
        case f:
          return "Profiler";
        case u:
          return "StrictMode";
        case n:
          return "Suspense";
        case a:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case t:
            var v = e;
            return ne(v) + ".Consumer";
          case d:
            var T = e;
            return ne(T._context) + ".Provider";
          case r:
            return L(e, e.render, "ForwardRef");
          case i:
            var A = e.displayName || null;
            return A !== null ? A : J(e.type) || "Memo";
          case p: {
            var V = e, X = V._payload, B = V._init;
            try {
              return J(B(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, ee = 0, Z, te, ue, ce, c, w, j;
    function k() {
    }
    k.__reactDisabledLog = !0;
    function P() {
      {
        if (ee === 0) {
          Z = console.log, te = console.info, ue = console.warn, ce = console.error, c = console.group, w = console.groupCollapsed, j = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: k,
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
        ee++;
      }
    }
    function D() {
      {
        if (ee--, ee === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, e, {
              value: Z
            }),
            info: G({}, e, {
              value: te
            }),
            warn: G({}, e, {
              value: ue
            }),
            error: G({}, e, {
              value: ce
            }),
            group: G({}, e, {
              value: c
            }),
            groupCollapsed: G({}, e, {
              value: w
            }),
            groupEnd: G({}, e, {
              value: j
            })
          });
        }
        ee < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = O.ReactCurrentDispatcher, M;
    function $(e, v, T) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (V) {
            var A = V.stack.trim().match(/\n( *(at )?)/);
            M = A && A[1] || "";
          }
        return `
` + M + e;
      }
    }
    var N = !1, U;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      U = new oe();
    }
    function S(e, v) {
      if (!e || N)
        return "";
      {
        var T = U.get(e);
        if (T !== void 0)
          return T;
      }
      var A;
      N = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = I.current, I.current = null, P();
      try {
        if (v) {
          var B = function() {
            throw Error();
          };
          if (Object.defineProperty(B.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(B, []);
            } catch (ve) {
              A = ve;
            }
            Reflect.construct(e, [], B);
          } else {
            try {
              B.call();
            } catch (ve) {
              A = ve;
            }
            e.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ve) {
            A = ve;
          }
          e();
        }
      } catch (ve) {
        if (ve && A && typeof ve.stack == "string") {
          for (var Y = ve.stack.split(`
`), ae = A.stack.split(`
`), Q = Y.length - 1, re = ae.length - 1; Q >= 1 && re >= 0 && Y[Q] !== ae[re]; )
            re--;
          for (; Q >= 1 && re >= 0; Q--, re--)
            if (Y[Q] !== ae[re]) {
              if (Q !== 1 || re !== 1)
                do
                  if (Q--, re--, re < 0 || Y[Q] !== ae[re]) {
                    var fe = `
` + Y[Q].replace(" at new ", " at ");
                    return e.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, fe), fe;
                  }
                while (Q >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        N = !1, I.current = X, D(), Error.prepareStackTrace = V;
      }
      var be = e ? e.displayName || e.name : "", ar = be ? $(be) : "";
      return typeof e == "function" && U.set(e, ar), ar;
    }
    function se(e, v, T) {
      return S(e, !1);
    }
    function ge(e) {
      var v = e.prototype;
      return !!(v && v.isReactComponent);
    }
    function pe(e, v, T) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return S(e, ge(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case n:
          return $("Suspense");
        case a:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case r:
            return se(e.render);
          case i:
            return pe(e.type, v, T);
          case p: {
            var A = e, V = A._payload, X = A._init;
            try {
              return pe(X(V), v, T);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, He = {}, Ge = O.ReactDebugCurrentFrame;
    function Pe(e) {
      if (e) {
        var v = e._owner, T = pe(e.type, e._source, v ? v.type : null);
        Ge.setExtraStackFrame(T);
      } else
        Ge.setExtraStackFrame(null);
    }
    function xr(e, v, T, A, V) {
      {
        var X = Function.call.bind(Re);
        for (var B in e)
          if (X(e, B)) {
            var Y = void 0;
            try {
              if (typeof e[B] != "function") {
                var ae = Error((A || "React class") + ": " + T + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ae.name = "Invariant Violation", ae;
              }
              Y = e[B](v, B, A, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Q) {
              Y = Q;
            }
            Y && !(Y instanceof Error) && (Pe(V), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", T, B, typeof Y), Pe(null)), Y instanceof Error && !(Y.message in He) && (He[Y.message] = !0, Pe(V), x("Failed %s type: %s", T, Y.message), Pe(null));
          }
      }
    }
    var Cr = Array.isArray;
    function ke(e) {
      return Cr(e);
    }
    function Ar(e) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, T = v && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return T;
      }
    }
    function kr(e) {
      try {
        return Je(e), !1;
      } catch {
        return !0;
      }
    }
    function Je(e) {
      return "" + e;
    }
    function Xe(e) {
      if (kr(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(e)), Je(e);
    }
    var we = O.ReactCurrentOwner, jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ke, Ze, je;
    je = {};
    function Ir(e) {
      if (Re.call(e, "ref")) {
        var v = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Mr(e) {
      if (Re.call(e, "key")) {
        var v = Object.getOwnPropertyDescriptor(e, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Fr(e, v) {
      if (typeof e.ref == "string" && we.current && v && we.current.stateNode !== v) {
        var T = J(we.current.type);
        je[T] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(we.current.type), e.ref), je[T] = !0);
      }
    }
    function Dr(e, v) {
      {
        var T = function() {
          Ke || (Ke = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        T.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function $r(e, v) {
      {
        var T = function() {
          Ze || (Ze = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        T.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var Ur = function(e, v, T, A, V, X, B) {
      var Y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: e,
        key: v,
        ref: T,
        props: B,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function qr(e, v, T, A, V) {
      {
        var X, B = {}, Y = null, ae = null;
        T !== void 0 && (Xe(T), Y = "" + T), Mr(v) && (Xe(v.key), Y = "" + v.key), Ir(v) && (ae = v.ref, Fr(v, V));
        for (X in v)
          Re.call(v, X) && !jr.hasOwnProperty(X) && (B[X] = v[X]);
        if (e && e.defaultProps) {
          var Q = e.defaultProps;
          for (X in Q)
            B[X] === void 0 && (B[X] = Q[X]);
        }
        if (Y || ae) {
          var re = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          Y && Dr(B, re), ae && $r(B, re);
        }
        return Ur(e, Y, ae, V, A, we.current, B);
      }
    }
    var Ie = O.ReactCurrentOwner, Qe = O.ReactDebugCurrentFrame;
    function me(e) {
      if (e) {
        var v = e._owner, T = pe(e.type, e._source, v ? v.type : null);
        Qe.setExtraStackFrame(T);
      } else
        Qe.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function Fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function er() {
      {
        if (Ie.current) {
          var e = J(Ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Wr(e) {
      {
        if (e !== void 0) {
          var v = e.fileName.replace(/^.*[\\\/]/, ""), T = e.lineNumber;
          return `

Check your code at ` + v + ":" + T + ".";
        }
        return "";
      }
    }
    var rr = {};
    function Yr(e) {
      {
        var v = er();
        if (!v) {
          var T = typeof e == "string" ? e : e.displayName || e.name;
          T && (v = `

Check the top-level render call using <` + T + ">.");
        }
        return v;
      }
    }
    function tr(e, v) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var T = Yr(v);
        if (rr[T])
          return;
        rr[T] = !0;
        var A = "";
        e && e._owner && e._owner !== Ie.current && (A = " It was passed a child from " + J(e._owner.type) + "."), me(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, A), me(null);
      }
    }
    function nr(e, v) {
      {
        if (typeof e != "object")
          return;
        if (ke(e))
          for (var T = 0; T < e.length; T++) {
            var A = e[T];
            Fe(A) && tr(A, v);
          }
        else if (Fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var V = R(e);
          if (typeof V == "function" && V !== e.entries)
            for (var X = V.call(e), B; !(B = X.next()).done; )
              Fe(B.value) && tr(B.value, v);
        }
      }
    }
    function Br(e) {
      {
        var v = e.type;
        if (v == null || typeof v == "string")
          return;
        var T;
        if (typeof v == "function")
          T = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === r || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === i))
          T = v.propTypes;
        else
          return;
        if (T) {
          var A = J(v);
          xr(T, e.props, "prop", A, e);
        } else if (v.PropTypes !== void 0 && !Me) {
          Me = !0;
          var V = J(v);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nr(e) {
      {
        for (var v = Object.keys(e.props), T = 0; T < v.length; T++) {
          var A = v[T];
          if (A !== "children" && A !== "key") {
            me(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), me(null);
            break;
          }
        }
        e.ref !== null && (me(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), me(null));
      }
    }
    function or(e, v, T, A, V, X) {
      {
        var B = K(e);
        if (!B) {
          var Y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ae = Wr(V);
          ae ? Y += ae : Y += er();
          var Q;
          e === null ? Q = "null" : ke(e) ? Q = "array" : e !== void 0 && e.$$typeof === h ? (Q = "<" + (J(e.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : Q = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Q, Y);
        }
        var re = qr(e, v, T, V, X);
        if (re == null)
          return re;
        if (B) {
          var fe = v.children;
          if (fe !== void 0)
            if (A)
              if (ke(fe)) {
                for (var be = 0; be < fe.length; be++)
                  nr(fe[be], e);
                Object.freeze && Object.freeze(fe);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              nr(fe, e);
        }
        return e === s ? Nr(re) : Br(re), re;
      }
    }
    function Lr(e, v, T) {
      return or(e, v, T, !0);
    }
    function Vr(e, v, T) {
      return or(e, v, T, !1);
    }
    var zr = Vr, Hr = Lr;
    Ee.Fragment = s, Ee.jsx = zr, Ee.jsxs = Hr;
  }()), Ee;
}
(function(o) {
  process.env.NODE_ENV === "production" ? o.exports = Xr() : o.exports = Kr();
})(Jr);
const Zr = _e.Fragment, ie = _e.jsx, Ve = _e.jsxs;
var he = {}, cr = {
  get exports() {
    return he;
  },
  set exports(o) {
    he = o;
  }
}, xe = {}, Qr = {
  get exports() {
    return xe;
  },
  set exports(o) {
    xe = o;
  }
}, z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function et() {
  if (sr)
    return z;
  sr = 1;
  var o = typeof Symbol == "function" && Symbol.for, h = o ? Symbol.for("react.element") : 60103, m = o ? Symbol.for("react.portal") : 60106, s = o ? Symbol.for("react.fragment") : 60107, u = o ? Symbol.for("react.strict_mode") : 60108, f = o ? Symbol.for("react.profiler") : 60114, d = o ? Symbol.for("react.provider") : 60109, t = o ? Symbol.for("react.context") : 60110, r = o ? Symbol.for("react.async_mode") : 60111, n = o ? Symbol.for("react.concurrent_mode") : 60111, a = o ? Symbol.for("react.forward_ref") : 60112, i = o ? Symbol.for("react.suspense") : 60113, p = o ? Symbol.for("react.suspense_list") : 60120, b = o ? Symbol.for("react.memo") : 60115, y = o ? Symbol.for("react.lazy") : 60116, g = o ? Symbol.for("react.block") : 60121, R = o ? Symbol.for("react.fundamental") : 60117, O = o ? Symbol.for("react.responder") : 60118, x = o ? Symbol.for("react.scope") : 60119;
  function C(l) {
    if (typeof l == "object" && l !== null) {
      var q = l.$$typeof;
      switch (q) {
        case h:
          switch (l = l.type, l) {
            case r:
            case n:
            case s:
            case f:
            case u:
            case i:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case t:
                case a:
                case y:
                case b:
                case d:
                  return l;
                default:
                  return q;
              }
          }
        case m:
          return q;
      }
    }
  }
  function E(l) {
    return C(l) === n;
  }
  return z.AsyncMode = r, z.ConcurrentMode = n, z.ContextConsumer = t, z.ContextProvider = d, z.Element = h, z.ForwardRef = a, z.Fragment = s, z.Lazy = y, z.Memo = b, z.Portal = m, z.Profiler = f, z.StrictMode = u, z.Suspense = i, z.isAsyncMode = function(l) {
    return E(l) || C(l) === r;
  }, z.isConcurrentMode = E, z.isContextConsumer = function(l) {
    return C(l) === t;
  }, z.isContextProvider = function(l) {
    return C(l) === d;
  }, z.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === h;
  }, z.isForwardRef = function(l) {
    return C(l) === a;
  }, z.isFragment = function(l) {
    return C(l) === s;
  }, z.isLazy = function(l) {
    return C(l) === y;
  }, z.isMemo = function(l) {
    return C(l) === b;
  }, z.isPortal = function(l) {
    return C(l) === m;
  }, z.isProfiler = function(l) {
    return C(l) === f;
  }, z.isStrictMode = function(l) {
    return C(l) === u;
  }, z.isSuspense = function(l) {
    return C(l) === i;
  }, z.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === s || l === n || l === f || l === u || l === i || l === p || typeof l == "object" && l !== null && (l.$$typeof === y || l.$$typeof === b || l.$$typeof === d || l.$$typeof === t || l.$$typeof === a || l.$$typeof === R || l.$$typeof === O || l.$$typeof === x || l.$$typeof === g);
  }, z.typeOf = C, z;
}
var H = {};
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
    var o = typeof Symbol == "function" && Symbol.for, h = o ? Symbol.for("react.element") : 60103, m = o ? Symbol.for("react.portal") : 60106, s = o ? Symbol.for("react.fragment") : 60107, u = o ? Symbol.for("react.strict_mode") : 60108, f = o ? Symbol.for("react.profiler") : 60114, d = o ? Symbol.for("react.provider") : 60109, t = o ? Symbol.for("react.context") : 60110, r = o ? Symbol.for("react.async_mode") : 60111, n = o ? Symbol.for("react.concurrent_mode") : 60111, a = o ? Symbol.for("react.forward_ref") : 60112, i = o ? Symbol.for("react.suspense") : 60113, p = o ? Symbol.for("react.suspense_list") : 60120, b = o ? Symbol.for("react.memo") : 60115, y = o ? Symbol.for("react.lazy") : 60116, g = o ? Symbol.for("react.block") : 60121, R = o ? Symbol.for("react.fundamental") : 60117, O = o ? Symbol.for("react.responder") : 60118, x = o ? Symbol.for("react.scope") : 60119;
    function C(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === s || S === n || S === f || S === u || S === i || S === p || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === b || S.$$typeof === d || S.$$typeof === t || S.$$typeof === a || S.$$typeof === R || S.$$typeof === O || S.$$typeof === x || S.$$typeof === g);
    }
    function E(S) {
      if (typeof S == "object" && S !== null) {
        var se = S.$$typeof;
        switch (se) {
          case h:
            var ge = S.type;
            switch (ge) {
              case r:
              case n:
              case s:
              case f:
              case u:
              case i:
                return ge;
              default:
                var pe = ge && ge.$$typeof;
                switch (pe) {
                  case t:
                  case a:
                  case y:
                  case b:
                  case d:
                    return pe;
                  default:
                    return se;
                }
            }
          case m:
            return se;
        }
      }
    }
    var l = r, q = n, _ = t, F = d, W = h, K = a, L = s, ne = y, J = b, G = m, ee = f, Z = u, te = i, ue = !1;
    function ce(S) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), c(S) || E(S) === r;
    }
    function c(S) {
      return E(S) === n;
    }
    function w(S) {
      return E(S) === t;
    }
    function j(S) {
      return E(S) === d;
    }
    function k(S) {
      return typeof S == "object" && S !== null && S.$$typeof === h;
    }
    function P(S) {
      return E(S) === a;
    }
    function D(S) {
      return E(S) === s;
    }
    function I(S) {
      return E(S) === y;
    }
    function M(S) {
      return E(S) === b;
    }
    function $(S) {
      return E(S) === m;
    }
    function N(S) {
      return E(S) === f;
    }
    function U(S) {
      return E(S) === u;
    }
    function oe(S) {
      return E(S) === i;
    }
    H.AsyncMode = l, H.ConcurrentMode = q, H.ContextConsumer = _, H.ContextProvider = F, H.Element = W, H.ForwardRef = K, H.Fragment = L, H.Lazy = ne, H.Memo = J, H.Portal = G, H.Profiler = ee, H.StrictMode = Z, H.Suspense = te, H.isAsyncMode = ce, H.isConcurrentMode = c, H.isContextConsumer = w, H.isContextProvider = j, H.isElement = k, H.isForwardRef = P, H.isFragment = D, H.isLazy = I, H.isMemo = M, H.isPortal = $, H.isProfiler = N, H.isStrictMode = U, H.isSuspense = oe, H.isValidElementType = C, H.typeOf = E;
  }()), H;
}
var lr;
function Er() {
  return lr || (lr = 1, function(o) {
    process.env.NODE_ENV === "production" ? o.exports = et() : o.exports = rt();
  }(Qr)), xe;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var De, dr;
function tt() {
  if (dr)
    return De;
  dr = 1;
  var o = Object.getOwnPropertySymbols, h = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
  function s(f) {
    if (f == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(f);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var f = new String("abc");
      if (f[5] = "de", Object.getOwnPropertyNames(f)[0] === "5")
        return !1;
      for (var d = {}, t = 0; t < 10; t++)
        d["_" + String.fromCharCode(t)] = t;
      var r = Object.getOwnPropertyNames(d).map(function(a) {
        return d[a];
      });
      if (r.join("") !== "0123456789")
        return !1;
      var n = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(a) {
        n[a] = a;
      }), Object.keys(Object.assign({}, n)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return De = u() ? Object.assign : function(f, d) {
    for (var t, r = s(f), n, a = 1; a < arguments.length; a++) {
      t = Object(arguments[a]);
      for (var i in t)
        h.call(t, i) && (r[i] = t[i]);
      if (o) {
        n = o(t);
        for (var p = 0; p < n.length; p++)
          m.call(t, n[p]) && (r[n[p]] = t[n[p]]);
      }
    }
    return r;
  }, De;
}
var $e, vr;
function ze() {
  if (vr)
    return $e;
  vr = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $e = o, $e;
}
var Ue, pr;
function _r() {
  return pr || (pr = 1, Ue = Function.call.bind(Object.prototype.hasOwnProperty)), Ue;
}
var qe, yr;
function nt() {
  if (yr)
    return qe;
  yr = 1;
  var o = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var h = ze(), m = {}, s = _r();
    o = function(f) {
      var d = "Warning: " + f;
      typeof console < "u" && console.error(d);
      try {
        throw new Error(d);
      } catch {
      }
    };
  }
  function u(f, d, t, r, n) {
    if (process.env.NODE_ENV !== "production") {
      for (var a in f)
        if (s(f, a)) {
          var i;
          try {
            if (typeof f[a] != "function") {
              var p = Error(
                (r || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            i = f[a](d, a, r, t, null, h);
          } catch (y) {
            i = y;
          }
          if (i && !(i instanceof Error) && o(
            (r || "React class") + ": type specification of " + t + " `" + a + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof i + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), i instanceof Error && !(i.message in m)) {
            m[i.message] = !0;
            var b = n ? n() : "";
            o(
              "Failed " + t + " type: " + i.message + (b ?? "")
            );
          }
        }
    }
  }
  return u.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (m = {});
  }, qe = u, qe;
}
var We, hr;
function ot() {
  if (hr)
    return We;
  hr = 1;
  var o = Er(), h = tt(), m = ze(), s = _r(), u = nt(), f = function() {
  };
  process.env.NODE_ENV !== "production" && (f = function(t) {
    var r = "Warning: " + t;
    typeof console < "u" && console.error(r);
    try {
      throw new Error(r);
    } catch {
    }
  });
  function d() {
    return null;
  }
  return We = function(t, r) {
    var n = typeof Symbol == "function" && Symbol.iterator, a = "@@iterator";
    function i(c) {
      var w = c && (n && c[n] || c[a]);
      if (typeof w == "function")
        return w;
    }
    var p = "<<anonymous>>", b = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: x(),
      arrayOf: C,
      element: E(),
      elementType: l(),
      instanceOf: q,
      node: K(),
      objectOf: F,
      oneOf: _,
      oneOfType: W,
      shape: ne,
      exact: J
    };
    function y(c, w) {
      return c === w ? c !== 0 || 1 / c === 1 / w : c !== c && w !== w;
    }
    function g(c, w) {
      this.message = c, this.data = w && typeof w == "object" ? w : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function R(c) {
      if (process.env.NODE_ENV !== "production")
        var w = {}, j = 0;
      function k(D, I, M, $, N, U, oe) {
        if ($ = $ || p, U = U || M, oe !== m) {
          if (r) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var se = $ + ":" + M;
            !w[se] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (f(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), w[se] = !0, j++);
          }
        }
        return I[M] == null ? D ? I[M] === null ? new g("The " + N + " `" + U + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new g("The " + N + " `" + U + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : c(I, M, $, N, U);
      }
      var P = k.bind(null, !1);
      return P.isRequired = k.bind(null, !0), P;
    }
    function O(c) {
      function w(j, k, P, D, I, M) {
        var $ = j[k], N = Z($);
        if (N !== c) {
          var U = te($);
          return new g(
            "Invalid " + D + " `" + I + "` of type " + ("`" + U + "` supplied to `" + P + "`, expected ") + ("`" + c + "`."),
            { expectedType: c }
          );
        }
        return null;
      }
      return R(w);
    }
    function x() {
      return R(d);
    }
    function C(c) {
      function w(j, k, P, D, I) {
        if (typeof c != "function")
          return new g("Property `" + I + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var M = j[k];
        if (!Array.isArray(M)) {
          var $ = Z(M);
          return new g("Invalid " + D + " `" + I + "` of type " + ("`" + $ + "` supplied to `" + P + "`, expected an array."));
        }
        for (var N = 0; N < M.length; N++) {
          var U = c(M, N, P, D, I + "[" + N + "]", m);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return R(w);
    }
    function E() {
      function c(w, j, k, P, D) {
        var I = w[j];
        if (!t(I)) {
          var M = Z(I);
          return new g("Invalid " + P + " `" + D + "` of type " + ("`" + M + "` supplied to `" + k + "`, expected a single ReactElement."));
        }
        return null;
      }
      return R(c);
    }
    function l() {
      function c(w, j, k, P, D) {
        var I = w[j];
        if (!o.isValidElementType(I)) {
          var M = Z(I);
          return new g("Invalid " + P + " `" + D + "` of type " + ("`" + M + "` supplied to `" + k + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return R(c);
    }
    function q(c) {
      function w(j, k, P, D, I) {
        if (!(j[k] instanceof c)) {
          var M = c.name || p, $ = ce(j[k]);
          return new g("Invalid " + D + " `" + I + "` of type " + ("`" + $ + "` supplied to `" + P + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return R(w);
    }
    function _(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? f(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : f("Invalid argument supplied to oneOf, expected an array.")), d;
      function w(j, k, P, D, I) {
        for (var M = j[k], $ = 0; $ < c.length; $++)
          if (y(M, c[$]))
            return null;
        var N = JSON.stringify(c, function(oe, S) {
          var se = te(S);
          return se === "symbol" ? String(S) : S;
        });
        return new g("Invalid " + D + " `" + I + "` of value `" + String(M) + "` " + ("supplied to `" + P + "`, expected one of " + N + "."));
      }
      return R(w);
    }
    function F(c) {
      function w(j, k, P, D, I) {
        if (typeof c != "function")
          return new g("Property `" + I + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var M = j[k], $ = Z(M);
        if ($ !== "object")
          return new g("Invalid " + D + " `" + I + "` of type " + ("`" + $ + "` supplied to `" + P + "`, expected an object."));
        for (var N in M)
          if (s(M, N)) {
            var U = c(M, N, P, D, I + "." + N, m);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return R(w);
    }
    function W(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && f("Invalid argument supplied to oneOfType, expected an instance of array."), d;
      for (var w = 0; w < c.length; w++) {
        var j = c[w];
        if (typeof j != "function")
          return f(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(j) + " at index " + w + "."
          ), d;
      }
      function k(P, D, I, M, $) {
        for (var N = [], U = 0; U < c.length; U++) {
          var oe = c[U], S = oe(P, D, I, M, $, m);
          if (S == null)
            return null;
          S.data && s(S.data, "expectedType") && N.push(S.data.expectedType);
        }
        var se = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new g("Invalid " + M + " `" + $ + "` supplied to " + ("`" + I + "`" + se + "."));
      }
      return R(k);
    }
    function K() {
      function c(w, j, k, P, D) {
        return G(w[j]) ? null : new g("Invalid " + P + " `" + D + "` supplied to " + ("`" + k + "`, expected a ReactNode."));
      }
      return R(c);
    }
    function L(c, w, j, k, P) {
      return new g(
        (c || "React class") + ": " + w + " type `" + j + "." + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function ne(c) {
      function w(j, k, P, D, I) {
        var M = j[k], $ = Z(M);
        if ($ !== "object")
          return new g("Invalid " + D + " `" + I + "` of type `" + $ + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var N in c) {
          var U = c[N];
          if (typeof U != "function")
            return L(P, D, I, N, te(U));
          var oe = U(M, N, P, D, I + "." + N, m);
          if (oe)
            return oe;
        }
        return null;
      }
      return R(w);
    }
    function J(c) {
      function w(j, k, P, D, I) {
        var M = j[k], $ = Z(M);
        if ($ !== "object")
          return new g("Invalid " + D + " `" + I + "` of type `" + $ + "` " + ("supplied to `" + P + "`, expected `object`."));
        var N = h({}, j[k], c);
        for (var U in N) {
          var oe = c[U];
          if (s(c, U) && typeof oe != "function")
            return L(P, D, I, U, te(oe));
          if (!oe)
            return new g(
              "Invalid " + D + " `" + I + "` key `" + U + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(j[k], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(c), null, "  ")
            );
          var S = oe(M, U, P, D, I + "." + U, m);
          if (S)
            return S;
        }
        return null;
      }
      return R(w);
    }
    function G(c) {
      switch (typeof c) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !c;
        case "object":
          if (Array.isArray(c))
            return c.every(G);
          if (c === null || t(c))
            return !0;
          var w = i(c);
          if (w) {
            var j = w.call(c), k;
            if (w !== c.entries) {
              for (; !(k = j.next()).done; )
                if (!G(k.value))
                  return !1;
            } else
              for (; !(k = j.next()).done; ) {
                var P = k.value;
                if (P && !G(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(c, w) {
      return c === "symbol" ? !0 : w ? w["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && w instanceof Symbol : !1;
    }
    function Z(c) {
      var w = typeof c;
      return Array.isArray(c) ? "array" : c instanceof RegExp ? "object" : ee(w, c) ? "symbol" : w;
    }
    function te(c) {
      if (typeof c > "u" || c === null)
        return "" + c;
      var w = Z(c);
      if (w === "object") {
        if (c instanceof Date)
          return "date";
        if (c instanceof RegExp)
          return "regexp";
      }
      return w;
    }
    function ue(c) {
      var w = te(c);
      switch (w) {
        case "array":
        case "object":
          return "an " + w;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + w;
        default:
          return w;
      }
    }
    function ce(c) {
      return !c.constructor || !c.constructor.name ? p : c.constructor.name;
    }
    return b.checkPropTypes = u, b.resetWarningCache = u.resetWarningCache, b.PropTypes = b, b;
  }, We;
}
var Ye, gr;
function at() {
  if (gr)
    return Ye;
  gr = 1;
  var o = ze();
  function h() {
  }
  function m() {
  }
  return m.resetWarningCache = h, Ye = function() {
    function s(d, t, r, n, a, i) {
      if (i !== o) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    s.isRequired = s;
    function u() {
      return s;
    }
    var f = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: u,
      element: s,
      elementType: s,
      instanceOf: u,
      node: s,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: m,
      resetWarningCache: h
    };
    return f.PropTypes = f, f;
  }, Ye;
}
if (process.env.NODE_ENV !== "production") {
  var it = Er(), ut = !0;
  cr.exports = ot()(it.isElement, ut);
} else
  cr.exports = at()();
const Rr = br({
  audioStatus: "",
  audioRecording: void 0,
  updateAudioStatus: () => {
  },
  updateAudioRecording: () => {
  }
});
function ct({ children: o }) {
  const [h, m] = Te(""), [s, u] = Te(), t = {
    audioStatus: h,
    audioRecording: s,
    updateAudioStatus: (r) => m(r),
    updateAudioRecording: (r) => u(r)
  };
  return /* @__PURE__ */ ie(Rr.Provider, { value: t, children: o });
}
function Ce() {
  const o = Tr(Rr);
  if (o === void 0)
    throw new Error("useAudio must be used within a AudioProvider");
  return o;
}
const Pr = br({
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
  },
  onStop: () => {
  },
  onTimerUpdated: () => {
  },
  onStatusChange: () => {
  }
});
function st({
  userPropsValue: o,
  children: h
}) {
  return /* @__PURE__ */ ie(Pr.Provider, { value: o, children: h });
}
function Ae() {
  const o = Tr(Pr);
  if (o === void 0)
    throw new Error("useUserProps must be used within a UserPropsProvider");
  return o;
}
const ft = (o) => {
  if (!o.length)
    return null;
  const h = [];
  return o.forEach((m) => {
    const s = document.getElementById(m);
    return s && h.push(s), s;
  }), h.length ? h : null;
}, lt = (o) => {
  o && o.forEach((h) => {
    h.remove();
  });
}, dt = (o) => o.map((m) => {
  const s = document.createElement("canvas");
  return s.setAttribute("id", m), s;
}), vt = (o, h) => {
  o.forEach((m) => {
    const s = m.getContext("2d");
    s && (s.clearRect(0, 0, m.width, m.height), s.clearRect(0, 0, m.width, m.height), m.width = ((h == null ? void 0 : h.clientWidth) ?? 1) * devicePixelRatio, m.height = ((h == null ? void 0 : h.clientHeight) ?? 1) * devicePixelRatio, s == null || s.scale(devicePixelRatio, devicePixelRatio));
  });
}, pt = (o, h) => {
  o.forEach((m) => {
    m.style.width = (h == null ? void 0 : h.clientWidth) + "px", m.style.height = (h == null ? void 0 : h.clientHeight) + "px";
  });
}, yt = (o, h) => {
  o.forEach((m) => {
    h == null || h.appendChild(m);
  });
}, Or = (o, h) => {
  try {
    const m = document.querySelector(h), s = ft(o);
    lt(s);
    const u = dt(o);
    return vt(u, m), pt(u, m), yt(u, m), u;
  } catch (m) {
    return console.error("Error in setUpCanvas: ", m), null;
  }
}, Oe = { solid: "rgb(54, 54, 54)", faded: "rgb(210, 209, 208)" }, ht = (o, h, m) => {
  const s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);
  if (!s)
    return Oe;
  const u = parseInt(s[1], 16), f = parseInt(s[2], 16), d = parseInt(s[3], 16);
  if (h && m) {
    const t = Math.round(u * h / 100), r = Math.round(f * h / 100), n = Math.round(d * h / 100);
    return {
      solid: `rgb(${t}, ${r}, ${n})`,
      faded: `rgb(${t}, ${r}, ${n}, 0.5)`
    };
  }
  return {
    solid: `rgb(${u}, ${f}, ${d})`,
    faded: `rgb(${u}, ${f}, ${d}, 0.5)`
  };
}, gt = (o) => {
  const h = new Option().style;
  return h.color = o, h.color == o;
}, mt = (o) => {
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
  return typeof h[o.toLowerCase()] < "u" ? h[o.toLowerCase()] : "#000";
}, Be = (o, h, m) => {
  try {
    if (!o || !gt(o))
      return Oe;
    const s = mt(o);
    return ht(s, h, m);
  } catch {
    return Oe;
  }
};
const bt = 100, mr = 2;
function Tt(o) {
  const { audioStatus: h = "", updateAudioRecording: m } = Ce(), { graphColor: s, graphShaded: u } = Ae(), [f, d] = Te(0), t = de(null), r = de({}), n = de(h);
  le(() => {
    var y, g, R, O, x, C, E, l, q, _, F, W;
    n.current = h, h === "recording" && (((g = (y = r == null ? void 0 : r.current) == null ? void 0 : y.audioContext) == null ? void 0 : g.state) === "suspended" ? (r.current.audioContext.resume().then(p), (O = (R = r.current) == null ? void 0 : R.mediaRecorder) == null || O.resume()) : (C = (x = r == null ? void 0 : r.current) == null ? void 0 : x.audioContext) != null && C.state || navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(i)), h === "stopped" && ((l = (E = r == null ? void 0 : r.current) == null ? void 0 : E.mediaRecorder) == null || l.stop()), h === "paused_recording" && ((_ = (q = r == null ? void 0 : r.current) == null ? void 0 : q.audioContext) == null || _.suspend(), (W = (F = r == null ? void 0 : r.current) == null ? void 0 : F.mediaRecorder) == null || W.pause());
  }, [h]), le(() => {
    a(), window.addEventListener("resize", a);
  }, []);
  const a = () => {
    const y = Or(
      ["waveformgraph-record"],
      ".voice-recorder_recordcontainer"
    );
    y && (t.current = y[0]);
  }, i = (y) => {
    var g;
    try {
      const R = window.AudioContext || (window == null ? void 0 : window.webkitAudioContext), O = new R();
      r.current.audioContext = O;
      const x = O.createMediaStreamSource(y);
      r.current.analyserNode = O.createAnalyser(), x.connect((g = r == null ? void 0 : r.current) == null ? void 0 : g.analyserNode), r.current.analyserNode.fftSize = 128;
      const C = r.current.analyserNode.frequencyBinCount, E = new Float32Array(C);
      r.current.dataArray = E;
      const l = new MediaRecorder(y);
      r.current.mediaRecorder = l, l.start(), l.addEventListener("dataavailable", async (q) => {
        const _ = await q.data.arrayBuffer(), F = await O.decodeAudioData(_), W = {
          blob: q.data,
          duration: F.duration,
          graphData: r.current.graphData ?? []
        };
        m(W), o.onStop(W);
      }), l.addEventListener("stop", () => {
        y.getTracks().forEach((q) => q.stop()), x.disconnect(), O.close();
      }), p();
    } catch (R) {
      console.log("error", R);
    }
  }, p = () => {
    var R, O, x, C, E, l, q, _, F, W, K;
    const y = (R = t == null ? void 0 : t.current) == null ? void 0 : R.getContext("2d");
    if (n.current !== "recording")
      return null;
    y == null || y.clearRect(
      0,
      0,
      ((O = t == null ? void 0 : t.current) == null ? void 0 : O.width) ?? 1,
      ((x = t == null ? void 0 : t.current) == null ? void 0 : x.height) ?? 1
    );
    let g = -1 / 0;
    if (Number(performance.now()) > f) {
      if (d(Number(performance.now() / bt)), !((C = r == null ? void 0 : r.current) != null && C.dataArray))
        return null;
      (q = (E = r == null ? void 0 : r.current) == null ? void 0 : E.analyserNode) == null || q.getFloatTimeDomainData(
        (l = r == null ? void 0 : r.current) == null ? void 0 : l.dataArray
      ), g = Math.max(0, ...((_ = r == null ? void 0 : r.current) == null ? void 0 : _.dataArray) ?? []);
      const L = Math.max(1, Math.floor(g * 350));
      r.current.graphData === void 0 && (r.current.graphData = []), (K = r.current) == null || K.graphData.push({
        x: ((F = t == null ? void 0 : t.current) == null ? void 0 : F.offsetWidth) ?? 1,
        y: (((W = t == null ? void 0 : t.current) == null ? void 0 : W.offsetHeight) ?? 1) / 2 - L / 2,
        height: L,
        width: mr
      });
    }
    b(), requestAnimationFrame(p);
  }, b = () => {
    var g, R, O, x;
    const y = (g = t == null ? void 0 : t.current) == null ? void 0 : g.getContext("2d");
    if (!y || !((R = r.current) != null && R.graphData))
      return null;
    for (let C = 0; C < ((O = r.current) == null ? void 0 : O.graphData.length); C++) {
      const E = (x = r.current) == null ? void 0 : x.graphData[C];
      E && (y.fillStyle = Be(
        s,
        E.height,
        u
      ).solid, y == null || y.fillRect(E.x, E.y, E.width, E.height), E.x = E.x - mr);
    }
  };
  return /* @__PURE__ */ ie("div", { className: "voice-recorder_recordcontainer" });
}
const wt = 0.06;
function St() {
  const [o, h] = Te([]), { audioRecording: m, audioStatus: s, updateAudioStatus: u } = Ce(), { graphColor: f, graphShaded: d } = Ae(), t = de(null), r = de(null), n = de(null), a = de(null), i = de(), { blob: p, duration: b = 0, graphData: y = [] } = m || {}, g = de(y);
  le(() => {
    window.addEventListener("resize", l);
  }, []), le(() => {
    p && (s === "playing_requested" ? C() : s === "playing" ? q() : s === "paused_playing" ? (x(), clearInterval(i.current)) : s === "stopped" && clearInterval(i.current));
  }, [s]), le(() => {
    g.current = y;
    try {
      y.length && l();
    } catch (_) {
      console.log("error", _);
    }
  }, [y]);
  const R = (_) => {
    var W, K, L;
    const F = (W = _ == null ? void 0 : _.current) == null ? void 0 : W.getContext("2d");
    F == null || F.clearRect(0, 0, ((K = _ == null ? void 0 : _.current) == null ? void 0 : K.width) ?? 1, ((L = _ == null ? void 0 : _.current) == null ? void 0 : L.height) ?? 1);
  }, O = () => {
    const _ = Or([
      "waveformgraph-unplayed-graph",
      "waveformgraph-played-graph",
      "progressbar"
    ], ".voice-recorder_canvascontainer");
    t.current = _ == null ? void 0 : _.find((F) => F.id === "waveformgraph-unplayed-graph"), r.current = _ == null ? void 0 : _.find((F) => F.id === "waveformgraph-played-graph"), n.current = _ == null ? void 0 : _.find((F) => F.id === "progressbar");
  }, x = () => {
    var _;
    return (_ = a == null ? void 0 : a.current) == null ? void 0 : _.pause();
  }, C = () => {
    const _ = document.querySelector("#playback_audio");
    if (_.autoplay = !0, _.readyState !== 4) {
      const F = window.URL.createObjectURL(new Blob([p], { type: "audio/mpeg" }));
      _.src = F, _.onloadeddata = () => {
        _.play(), u("playing");
      };
    } else
      _.paused ? (_.play(), u("playing")) : (_.currentTime = 0, _.play(), u("playing"));
    _.onended = () => {
      u("stopped");
    };
  }, E = () => {
    var W;
    const _ = [];
    if (!(g != null && g.current.length))
      return _;
    const F = (((W = t == null ? void 0 : t.current) == null ? void 0 : W.offsetWidth) ?? 1) / (g == null ? void 0 : g.current.length);
    return g == null || g.current.forEach((K, L) => {
      var J;
      const ne = ((J = _[L - 1]) == null ? void 0 : J.x) || 0;
      _.push({
        ...K,
        x: ne + F,
        width: F
      });
    }), h(_), _;
  }, l = () => {
    var F;
    O();
    const _ = (F = t == null ? void 0 : t.current) == null ? void 0 : F.getContext("2d");
    if (_) {
      const W = E();
      for (let K = 0; K < W.length; K++) {
        const L = W[K];
        _.fillStyle = Be(f, L.height, d).faded, _.fillRect(L.x, L.y, L.width, L.height);
      }
    }
  }, q = () => {
    var te, ue, ce;
    (((te = a == null ? void 0 : a.current) == null ? void 0 : te.currentTime) ?? 1) > 0 || R(r);
    const F = Math.abs(b - wt), W = y.length, K = F / W * 1e3;
    let L = 0, ne, J;
    const G = (ue = n == null ? void 0 : n.current) == null ? void 0 : ue.getContext("2d"), ee = (ce = r == null ? void 0 : r.current) == null ? void 0 : ce.getContext("2d");
    function Z() {
      var w, j, k, P, D, I, M;
      if (!ee || !G || (L = Math.round(W * ((((w = a == null ? void 0 : a.current) == null ? void 0 : w.currentTime) ?? 1) / F)), J === ((j = a == null ? void 0 : a.current) == null ? void 0 : j.currentTime) || ne === L))
        return;
      if (J = (k = a == null ? void 0 : a.current) == null ? void 0 : k.currentTime, ne = L, L >= W) {
        clearInterval(i.current);
        return;
      }
      const c = o[L];
      ee.fillStyle = Be(f, c.height, d).solid, ee == null || ee.fillRect(c.x, c.y, c.width, c.height), +c.x.toFixed(3) < (((P = n == null ? void 0 : n.current) == null ? void 0 : P.offsetWidth) ?? 1) && (G == null || G.clearRect(0, 0, ((D = n == null ? void 0 : n.current) == null ? void 0 : D.width) ?? 1, ((I = n == null ? void 0 : n.current) == null ? void 0 : I.height) ?? 1), G == null || G.fillRect(c.x, 0, 1, ((M = n == null ? void 0 : n.current) == null ? void 0 : M.offsetHeight) ?? 1));
    }
    Z(), i.current = setInterval(Z, K);
  };
  return /* @__PURE__ */ Ve("div", { className: "voice-recorder_playbackcontainer", children: [
    /* @__PURE__ */ ie("audio", { ref: a, controls: !0, id: "playback_audio", children: /* @__PURE__ */ ie("track", { src: "captions.vtt", kind: "captions", srcLang: "en", label: "English" }) }),
    /* @__PURE__ */ ie("div", { className: "voice-recorder_canvascontainer" })
  ] });
}
function Et(o) {
  const { audioStatus: h } = Ce(), { waveContainerStyle: m } = Ae(), [s, u] = Te("");
  return le(() => {
    u(h === "playing" || h === "playing_requested" || h === "paused_playing" || h === "stopped" ? "playing" : "recording");
  }, [h]), /* @__PURE__ */ Ve(
    "div",
    {
      className: "voice-recorder_waveformcontainer",
      style: m,
      children: [
        s === "playing" ? /* @__PURE__ */ ie(St, {}) : null,
        s === "recording" ? /* @__PURE__ */ ie(Tt, { ...o }) : null
      ]
    }
  );
}
var Ne = {}, _t = {
  get exports() {
    return Ne;
  },
  set exports(o) {
    Ne = o;
  }
};
(function(o, h) {
  (function(m, s) {
    o.exports = s(Le);
  })(typeof self < "u" ? self : Gr, function(m) {
    return function(s) {
      var u = {};
      function f(d) {
        if (u[d])
          return u[d].exports;
        var t = u[d] = { i: d, l: !1, exports: {} };
        return s[d].call(t.exports, t, t.exports, f), t.l = !0, t.exports;
      }
      return f.m = s, f.c = u, f.d = function(d, t, r) {
        f.o(d, t) || Object.defineProperty(d, t, { enumerable: !0, get: r });
      }, f.r = function(d) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(d, "__esModule", { value: !0 });
      }, f.t = function(d, t) {
        if (1 & t && (d = f(d)), 8 & t || 4 & t && typeof d == "object" && d && d.__esModule)
          return d;
        var r = /* @__PURE__ */ Object.create(null);
        if (f.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: d }), 2 & t && typeof d != "string")
          for (var n in d)
            f.d(r, n, function(a) {
              return d[a];
            }.bind(null, n));
        return r;
      }, f.n = function(d) {
        var t = d && d.__esModule ? function() {
          return d.default;
        } : function() {
          return d;
        };
        return f.d(t, "a", t), t;
      }, f.o = function(d, t) {
        return Object.prototype.hasOwnProperty.call(d, t);
      }, f.p = "", f(f.s = 3);
    }([function(s, u) {
      s.exports = m;
    }, function(s, u, f) {
      Object.defineProperty(u, "__esModule", { value: !0 }), u.Validate = u.Time = void 0;
      var d = r(f(5)), t = r(f(6));
      function r(n) {
        return n && n.__esModule ? n : { default: n };
      }
      u.Time = d.default, u.Validate = t.default;
    }, function(s, u, f) {
      Object.defineProperty(u, "__esModule", { value: !0 }), u.useInterval = void 0;
      var d = function(t) {
        return t && t.__esModule ? t : { default: t };
      }(f(7));
      u.useInterval = d.default;
    }, function(s, u, f) {
      Object.defineProperty(u, "__esModule", { value: !0 }), u.useTime = u.useStopwatch = u.useTimer = void 0;
      var d = Object.assign || function(p) {
        for (var b = 1; b < arguments.length; b++) {
          var y = arguments[b];
          for (var g in y)
            Object.prototype.hasOwnProperty.call(y, g) && (p[g] = y[g]);
        }
        return p;
      };
      u.default = function(p) {
        if ((0, t.useEffect)(function() {
          console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead");
        }, []), p.expiryTimestamp) {
          var b = (0, r.default)(p);
          return d({}, b, { startTimer: b.start, stopTimer: b.pause, resetTimer: function() {
          } });
        }
        var y = (0, n.default)(p);
        return d({}, y, { startTimer: y.start, stopTimer: y.pause, resetTimer: y.reset });
      };
      var t = f(0), r = i(f(4)), n = i(f(8)), a = i(f(9));
      function i(p) {
        return p && p.__esModule ? p : { default: p };
      }
      u.useTimer = r.default, u.useStopwatch = n.default, u.useTime = a.default;
    }, function(s, u, f) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var d = Object.assign || function(b) {
        for (var y = 1; y < arguments.length; y++) {
          var g = arguments[y];
          for (var R in g)
            Object.prototype.hasOwnProperty.call(g, R) && (b[R] = g[R]);
        }
        return b;
      }, t = function() {
        return function(b, y) {
          if (Array.isArray(b))
            return b;
          if (Symbol.iterator in Object(b))
            return function(g, R) {
              var O = [], x = !0, C = !1, E = void 0;
              try {
                for (var l, q = g[Symbol.iterator](); !(x = (l = q.next()).done) && (O.push(l.value), !R || O.length !== R); x = !0)
                  ;
              } catch (_) {
                C = !0, E = _;
              } finally {
                try {
                  !x && q.return && q.return();
                } finally {
                  if (C)
                    throw E;
                }
              }
              return O;
            }(b, y);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      u.default = function(b) {
        var y = b.expiryTimestamp, g = b.onExpire, R = b.autoStart, O = R === void 0 || R, x = (0, r.useState)(y), C = t(x, 2), E = C[0], l = C[1], q = (0, r.useState)(n.Time.getSecondsFromExpiry(E)), _ = t(q, 2), F = _[0], W = _[1], K = (0, r.useState)(O), L = t(K, 2), ne = L[0], J = L[1], G = (0, r.useState)(O), ee = t(G, 2), Z = ee[0], te = ee[1], ue = (0, r.useState)(p(E)), ce = t(ue, 2), c = ce[0], w = ce[1];
        function j(P) {
          var D = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          w(p(P)), te(D), J(D), l(P), W(n.Time.getSecondsFromExpiry(P));
        }
        function k() {
          var P = /* @__PURE__ */ new Date();
          P.setMilliseconds(P.getMilliseconds() + 1e3 * F), j(P);
        }
        return (0, a.useInterval)(function() {
          c !== i && w(i);
          var P = n.Time.getSecondsFromExpiry(E);
          W(P), P <= 0 && (n.Validate.onExpire(g) && g(), J(!1), w(null));
        }, ne ? c : null), d({}, n.Time.getTimeFromSeconds(F), { start: function() {
          Z ? (W(n.Time.getSecondsFromExpiry(E)), J(!0)) : k();
        }, pause: function() {
          J(!1);
        }, resume: k, restart: j, isRunning: ne });
      };
      var r = f(0), n = f(1), a = f(2), i = 1e3;
      function p(b) {
        if (!n.Validate.expiryTimestamp(b))
          return null;
        var y = n.Time.getSecondsFromExpiry(b), g = Math.floor(1e3 * (y - Math.floor(y)));
        return g > 0 ? g : i;
      }
    }, function(s, u, f) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var d = function() {
        function r(n, a) {
          for (var i = 0; i < a.length; i++) {
            var p = a[i];
            p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(n, p.key, p);
          }
        }
        return function(n, a, i) {
          return a && r(n.prototype, a), i && r(n, i), n;
        };
      }(), t = function() {
        function r() {
          (function(n, a) {
            if (!(n instanceof a))
              throw new TypeError("Cannot call a class as a function");
          })(this, r);
        }
        return d(r, null, [{ key: "getTimeFromSeconds", value: function(n) {
          var a = Math.ceil(n), i = Math.floor(a / 86400), p = Math.floor(a % 86400 / 3600), b = Math.floor(a % 3600 / 60);
          return { seconds: Math.floor(a % 60), minutes: b, hours: p, days: i };
        } }, { key: "getSecondsFromExpiry", value: function(n, a) {
          var i = n - (/* @__PURE__ */ new Date()).getTime();
          if (i > 0) {
            var p = i / 1e3;
            return a ? Math.round(p) : p;
          }
          return 0;
        } }, { key: "getSecondsFromPrevTime", value: function(n, a) {
          var i = (/* @__PURE__ */ new Date()).getTime() - n;
          if (i > 0) {
            var p = i / 1e3;
            return a ? Math.round(p) : p;
          }
          return 0;
        } }, { key: "getSecondsFromTimeNow", value: function() {
          var n = /* @__PURE__ */ new Date();
          return n.getTime() / 1e3 - 60 * n.getTimezoneOffset();
        } }, { key: "getFormattedTimeFromSeconds", value: function(n, a) {
          var i = r.getTimeFromSeconds(n), p = i.seconds, b = i.minutes, y = i.hours, g = "", R = y;
          return a === "12-hour" && (g = y >= 12 ? "pm" : "am", R = y % 12), { seconds: p, minutes: b, hours: R, ampm: g };
        } }]), r;
      }();
      u.default = t;
    }, function(s, u, f) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var d = function() {
        function r(n, a) {
          for (var i = 0; i < a.length; i++) {
            var p = a[i];
            p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(n, p.key, p);
          }
        }
        return function(n, a, i) {
          return a && r(n.prototype, a), i && r(n, i), n;
        };
      }(), t = function() {
        function r() {
          (function(n, a) {
            if (!(n instanceof a))
              throw new TypeError("Cannot call a class as a function");
          })(this, r);
        }
        return d(r, null, [{ key: "expiryTimestamp", value: function(n) {
          var a = new Date(n).getTime() > 0;
          return a || console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings", n), a;
        } }, { key: "onExpire", value: function(n) {
          var a = n && typeof n == "function";
          return n && !a && console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function", n), a;
        } }]), r;
      }();
      u.default = t;
    }, function(s, u, f) {
      Object.defineProperty(u, "__esModule", { value: !0 }), u.default = function(t, r) {
        var n = (0, d.useRef)();
        (0, d.useEffect)(function() {
          n.current = t;
        }), (0, d.useEffect)(function() {
          if (!r)
            return function() {
            };
          var a = setInterval(function() {
            n.current && n.current();
          }, r);
          return function() {
            return clearInterval(a);
          };
        }, [r]);
      };
      var d = f(0);
    }, function(s, u, f) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var d = Object.assign || function(i) {
        for (var p = 1; p < arguments.length; p++) {
          var b = arguments[p];
          for (var y in b)
            Object.prototype.hasOwnProperty.call(b, y) && (i[y] = b[y]);
        }
        return i;
      }, t = function() {
        return function(i, p) {
          if (Array.isArray(i))
            return i;
          if (Symbol.iterator in Object(i))
            return function(b, y) {
              var g = [], R = !0, O = !1, x = void 0;
              try {
                for (var C, E = b[Symbol.iterator](); !(R = (C = E.next()).done) && (g.push(C.value), !y || g.length !== y); R = !0)
                  ;
              } catch (l) {
                O = !0, x = l;
              } finally {
                try {
                  !R && E.return && E.return();
                } finally {
                  if (O)
                    throw x;
                }
              }
              return g;
            }(i, p);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      u.default = function(i) {
        var p = i.autoStart, b = i.offsetTimestamp, y = (0, r.useState)(n.Time.getSecondsFromExpiry(b, !0) || 0), g = t(y, 2), R = g[0], O = g[1], x = (0, r.useState)(/* @__PURE__ */ new Date()), C = t(x, 2), E = C[0], l = C[1], q = (0, r.useState)(R + n.Time.getSecondsFromPrevTime(E || 0, !0)), _ = t(q, 2), F = _[0], W = _[1], K = (0, r.useState)(p), L = t(K, 2), ne = L[0], J = L[1];
        return (0, a.useInterval)(function() {
          W(R + n.Time.getSecondsFromPrevTime(E, !0));
        }, ne ? 1e3 : null), d({}, n.Time.getTimeFromSeconds(F), { start: function() {
          var G = /* @__PURE__ */ new Date();
          l(G), J(!0), W(R + n.Time.getSecondsFromPrevTime(G, !0));
        }, pause: function() {
          O(F), J(!1);
        }, reset: function() {
          var G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, ee = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], Z = n.Time.getSecondsFromExpiry(G, !0) || 0, te = /* @__PURE__ */ new Date();
          l(te), O(Z), J(ee), W(Z + n.Time.getSecondsFromPrevTime(te, !0));
        }, isRunning: ne });
      };
      var r = f(0), n = f(1), a = f(2);
    }, function(s, u, f) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var d = Object.assign || function(i) {
        for (var p = 1; p < arguments.length; p++) {
          var b = arguments[p];
          for (var y in b)
            Object.prototype.hasOwnProperty.call(b, y) && (i[y] = b[y]);
        }
        return i;
      }, t = function() {
        return function(i, p) {
          if (Array.isArray(i))
            return i;
          if (Symbol.iterator in Object(i))
            return function(b, y) {
              var g = [], R = !0, O = !1, x = void 0;
              try {
                for (var C, E = b[Symbol.iterator](); !(R = (C = E.next()).done) && (g.push(C.value), !y || g.length !== y); R = !0)
                  ;
              } catch (l) {
                O = !0, x = l;
              } finally {
                try {
                  !R && E.return && E.return();
                } finally {
                  if (O)
                    throw x;
                }
              }
              return g;
            }(i, p);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      u.default = function(i) {
        var p = i.format, b = (0, r.useState)(n.Time.getSecondsFromTimeNow()), y = t(b, 2), g = y[0], R = y[1];
        return (0, a.useInterval)(function() {
          R(n.Time.getSecondsFromTimeNow());
        }, 1e3), d({}, n.Time.getFormattedTimeFromSeconds(g, p));
      };
      var r = f(0), n = f(1), a = f(2);
    }]);
  });
})(_t);
const ye = {
  showRecordBtn: !1,
  showPlayBtn: !1,
  showPauseBtn: !1,
  showStopBtn: !1,
  showRedoBtn: !1
}, Rt = wr(
  (o, h) => {
    const { audioStatus: m, updateAudioStatus: s, audioRecording: u } = Ce(), {
      controllerContainerStyle: f,
      controllerStyle: d,
      downloadable: t,
      onAudioDownload: r
    } = Ae(), [n, a] = Te(ye), { seconds: i, minutes: p, hours: b, start: y, pause: g, reset: R } = Ne.useStopwatch({
      autoStart: !1
    });
    le(() => {
      m === "recording" && o.onTimerUpdated({ hours: b, minutes: p, seconds: i });
    }, [i, p, b]), le(() => {
      m === "recording" ? y() : m === "paused_playing" || m === "paused_recording" ? g() : R();
    }, [m]), Sr(h, () => ({
      start() {
        x();
      },
      pause() {
        s(
          m === "recording" ? "paused_recording" : "paused_playing"
        );
      },
      stop() {
        s("stopped");
      },
      download() {
        C();
      }
    }));
    const O = (E) => () => {
      s(E);
    }, x = () => {
      navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(O("recording")).catch(
        () => alert("Please allow acccess to your microphone to continue.")
      );
    };
    le(() => {
      const E = document.querySelector(
        ".voice-recorder_maincontainer"
      ), l = document.querySelector(
        ".voice-recorder_controlscontainer"
      );
      if (E && l) {
        const { height: q } = E.getBoundingClientRect();
        l.style.height = `${q / 3}px`;
      }
    }, []);
    const C = () => {
      const { blob: E = "" } = u || {};
      if (!E)
        return null;
      const l = URL.createObjectURL(E), q = document.querySelector(
        ".voice-recorder_downloadfile"
      );
      q.href = l, q.download = "audio.wav", q.click();
    };
    return le(() => {
      if (u) {
        const { blob: E = "" } = u || {};
        if (!E || !r)
          return;
        r(E);
      }
    }, [u]), le(() => {
      switch (m) {
        case "":
          a({
            ...ye,
            showRecordBtn: !0
          });
          break;
        case "recording":
          a({
            ...ye,
            showPauseBtn: !0,
            showStopBtn: !0
          });
          break;
        case "paused_recording":
          a({
            ...ye,
            showStopBtn: !0,
            showRecordBtn: !0
          });
          break;
        case "paused_playing":
          a({
            ...ye,
            showPlayBtn: !0,
            showPauseBtn: !0,
            showRedoBtn: !0
          });
          break;
        case "playing":
        case "stopped":
          a({
            ...ye,
            showPauseBtn: !0,
            showPlayBtn: !0,
            showRedoBtn: !0
          });
          break;
        default:
          a(ye);
      }
      m && o.onStatusChange(m);
    }, [m]), /* @__PURE__ */ ie(Zr, { children: /* @__PURE__ */ ie(
      "a",
      {
        download: !0,
        style: { display: "none" },
        className: "voice-recorder_downloadfile"
      }
    ) });
  }
);
const Pt = wr((o, h) => {
  const { mainContainerStyle: m, height: s, width: u, ...f } = o, d = {
    ...m,
    height: s,
    width: u
  }, t = de();
  return Sr(h, () => ({
    start() {
      var r;
      (r = t == null ? void 0 : t.current) == null || r.start();
    },
    pause() {
      var r;
      (r = t == null ? void 0 : t.current) == null || r.pause();
    },
    stop() {
      var r;
      (r = t == null ? void 0 : t.current) == null || r.stop();
    },
    download() {
      var r;
      (r = t == null ? void 0 : t.current) == null || r.download();
    }
  })), /* @__PURE__ */ ie(ct, { children: /* @__PURE__ */ ie(st, { userPropsValue: f, children: /* @__PURE__ */ Ve(
    "div",
    {
      className: "voice-recorder_maincontainer",
      style: d,
      children: [
        /* @__PURE__ */ ie(
          Et,
          {
            onStop: (r) => {
              var n;
              (n = o.onStop) == null || n.call(o, r.blob);
            }
          }
        ),
        /* @__PURE__ */ ie(
          Rt,
          {
            onStatusChange: (r) => {
              var n;
              (n = o.onStatusChange) == null || n.call(o, r);
            },
            onTimerUpdated: (r) => {
              var n;
              console.log(r), (n = o.onTimerUpdated) == null || n.call(o, r);
            },
            ref: t
          }
        )
      ]
    }
  ) }) });
});
Pt.propTypes = {
  mainContainerStyle: he.object,
  height: he.string || he.number,
  width: he.string || he.number
};
export {
  Pt as VoiceRecorder
};
