// node_modules/petite-vue/dist/petite-vue.es.js
function e(e2, t2) {
  const n2 = Object.create(null), r2 = e2.split(",");
  for (let s2 = 0; s2 < r2.length; s2++)
    n2[r2[s2]] = true;
  return t2 ? (e3) => !!n2[e3.toLowerCase()] : (e3) => !!n2[e3];
}
function t(e2) {
  if (u(e2)) {
    const n2 = {};
    for (let r2 = 0; r2 < e2.length; r2++) {
      const o2 = e2[r2], i2 = t(d(o2) ? s(o2) : o2);
      if (i2)
        for (const e3 in i2)
          n2[e3] = i2[e3];
    }
    return n2;
  }
  if (g(e2))
    return e2;
}
var n = /;(?![^(]*\))/g;
var r = /:(.+)/;
function s(e2) {
  const t2 = {};
  return e2.split(n).forEach((e3) => {
    if (e3) {
      const n2 = e3.split(r);
      n2.length > 1 && (t2[n2[0].trim()] = n2[1].trim());
    }
  }), t2;
}
function o(e2) {
  let t2 = "";
  if (d(e2))
    t2 = e2;
  else if (u(e2))
    for (let n2 = 0; n2 < e2.length; n2++) {
      const r2 = o(e2[n2]);
      r2 && (t2 += r2 + " ");
    }
  else if (g(e2))
    for (const n2 in e2)
      e2[n2] && (t2 += n2 + " ");
  return t2.trim();
}
function i(e2, t2) {
  if (e2 === t2)
    return true;
  let n2 = h(e2), r2 = h(t2);
  if (n2 || r2)
    return !(!n2 || !r2) && e2.getTime() === t2.getTime();
  if (n2 = u(e2), r2 = u(t2), n2 || r2)
    return !(!n2 || !r2) && function(e3, t3) {
      if (e3.length !== t3.length)
        return false;
      let n3 = true;
      for (let r3 = 0; n3 && r3 < e3.length; r3++)
        n3 = i(e3[r3], t3[r3]);
      return n3;
    }(e2, t2);
  if (n2 = g(e2), r2 = g(t2), n2 || r2) {
    if (!n2 || !r2)
      return false;
    if (Object.keys(e2).length !== Object.keys(t2).length)
      return false;
    for (const n3 in e2) {
      const r3 = e2.hasOwnProperty(n3), s2 = t2.hasOwnProperty(n3);
      if (r3 && !s2 || !r3 && s2 || !i(e2[n3], t2[n3]))
        return false;
    }
  }
  return String(e2) === String(t2);
}
function c(e2, t2) {
  return e2.findIndex((e3) => i(e3, t2));
}
var l = {};
var f = Object.prototype.hasOwnProperty;
var a = (e2, t2) => f.call(e2, t2);
var u = Array.isArray;
var p = (e2) => y(e2) === "[object Map]";
var h = (e2) => e2 instanceof Date;
var d = (e2) => typeof e2 == "string";
var m = (e2) => typeof e2 == "symbol";
var g = (e2) => e2 !== null && typeof e2 == "object";
var v = Object.prototype.toString;
var y = (e2) => v.call(e2);
var b = (e2) => d(e2) && e2 !== "NaN" && e2[0] !== "-" && "" + parseInt(e2, 10) === e2;
var x = (e2) => {
  const t2 = Object.create(null);
  return (n2) => t2[n2] || (t2[n2] = e2(n2));
};
var w = /-(\w)/g;
var _ = x((e2) => e2.replace(w, (e3, t2) => t2 ? t2.toUpperCase() : ""));
var k = /\B([A-Z])/g;
var $ = x((e2) => e2.replace(k, "-$1").toLowerCase());
var S = (e2) => {
  const t2 = parseFloat(e2);
  return isNaN(t2) ? e2 : t2;
};
var E = new WeakMap();
var O = [];
var A;
var j = Symbol("");
var C = Symbol("");
function N(e2, t2 = l) {
  (function(e3) {
    return e3 && e3._isEffect === true;
  })(e2) && (e2 = e2.raw);
  const n2 = function(e3, t3) {
    const n3 = function() {
      if (!n3.active)
        return e3();
      if (!O.includes(n3)) {
        T(n3);
        try {
          return B.push(M), M = true, O.push(n3), A = n3, e3();
        } finally {
          O.pop(), L(), A = O[O.length - 1];
        }
      }
    };
    return n3.id = P++, n3.allowRecurse = !!t3.allowRecurse, n3._isEffect = true, n3.active = true, n3.raw = e3, n3.deps = [], n3.options = t3, n3;
  }(e2, t2);
  return t2.lazy || n2(), n2;
}
function R(e2) {
  e2.active && (T(e2), e2.options.onStop && e2.options.onStop(), e2.active = false);
}
var P = 0;
function T(e2) {
  const { deps: t2 } = e2;
  if (t2.length) {
    for (let n2 = 0; n2 < t2.length; n2++)
      t2[n2].delete(e2);
    t2.length = 0;
  }
}
var M = true;
var B = [];
function L() {
  const e2 = B.pop();
  M = e2 === void 0 || e2;
}
function W(e2, t2, n2) {
  if (!M || A === void 0)
    return;
  let r2 = E.get(e2);
  r2 || E.set(e2, r2 = new Map());
  let s2 = r2.get(n2);
  s2 || r2.set(n2, s2 = new Set()), s2.has(A) || (s2.add(A), A.deps.push(s2));
}
function I(e2, t2, n2, r2, s2, o2) {
  const i2 = E.get(e2);
  if (!i2)
    return;
  const c2 = new Set(), l2 = (e3) => {
    e3 && e3.forEach((e4) => {
      (e4 !== A || e4.allowRecurse) && c2.add(e4);
    });
  };
  if (t2 === "clear")
    i2.forEach(l2);
  else if (n2 === "length" && u(e2))
    i2.forEach((e3, t3) => {
      (t3 === "length" || t3 >= r2) && l2(e3);
    });
  else
    switch (n2 !== void 0 && l2(i2.get(n2)), t2) {
      case "add":
        u(e2) ? b(n2) && l2(i2.get("length")) : (l2(i2.get(j)), p(e2) && l2(i2.get(C)));
        break;
      case "delete":
        u(e2) || (l2(i2.get(j)), p(e2) && l2(i2.get(C)));
        break;
      case "set":
        p(e2) && l2(i2.get(j));
    }
  c2.forEach((e3) => {
    e3.options.scheduler ? e3.options.scheduler(e3) : e3();
  });
}
var K = e("__proto__,__v_isRef,__isVue");
var V = new Set(Object.getOwnPropertyNames(Symbol).map((e2) => Symbol[e2]).filter(m));
var z = J();
var F = J(true);
var q = H();
function H() {
  const e2 = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t2) => {
    const n2 = Array.prototype[t2];
    e2[t2] = function(...e3) {
      const t3 = re(this);
      for (let n3 = 0, s2 = this.length; n3 < s2; n3++)
        W(t3, 0, n3 + "");
      const r2 = n2.apply(t3, e3);
      return r2 === -1 || r2 === false ? n2.apply(t3, e3.map(re)) : r2;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t2) => {
    const n2 = Array.prototype[t2];
    e2[t2] = function(...e3) {
      B.push(M), M = false;
      const t3 = n2.apply(this, e3);
      return L(), t3;
    };
  }), e2;
}
function J(e2 = false, t2 = false) {
  return function(n2, r2, s2) {
    if (r2 === "__v_isReactive")
      return !e2;
    if (r2 === "__v_isReadonly")
      return e2;
    if (r2 === "__v_raw" && s2 === (e2 ? t2 ? Y : X : t2 ? Q : U).get(n2))
      return n2;
    const o2 = u(n2);
    if (!e2 && o2 && a(q, r2))
      return Reflect.get(q, r2, s2);
    const i2 = Reflect.get(n2, r2, s2);
    if (m(r2) ? V.has(r2) : K(r2))
      return i2;
    if (e2 || W(n2, 0, r2), t2)
      return i2;
    if (se(i2)) {
      return !o2 || !b(r2) ? i2.value : i2;
    }
    return g(i2) ? e2 ? function(e3) {
      return ne(e3, true, G, null, X);
    }(i2) : te(i2) : i2;
  };
}
function Z(e2 = false) {
  return function(t2, n2, r2, s2) {
    let o2 = t2[n2];
    if (!e2 && (r2 = re(r2), o2 = re(o2), !u(t2) && se(o2) && !se(r2)))
      return o2.value = r2, true;
    const i2 = u(t2) && b(n2) ? Number(n2) < t2.length : a(t2, n2), c2 = Reflect.set(t2, n2, r2, s2);
    return t2 === re(s2) && (i2 ? ((e3, t3) => e3 !== t3 && (e3 == e3 || t3 == t3))(r2, o2) && I(t2, "set", n2, r2) : I(t2, "add", n2, r2)), c2;
  };
}
var D = { get: z, set: Z(), deleteProperty: function(e2, t2) {
  const n2 = a(e2, t2);
  e2[t2];
  const r2 = Reflect.deleteProperty(e2, t2);
  return r2 && n2 && I(e2, "delete", t2, void 0), r2;
}, has: function(e2, t2) {
  const n2 = Reflect.has(e2, t2);
  return m(t2) && V.has(t2) || W(e2, 0, t2), n2;
}, ownKeys: function(e2) {
  return W(e2, 0, u(e2) ? "length" : j), Reflect.ownKeys(e2);
} };
var G = { get: F, set: (e2, t2) => true, deleteProperty: (e2, t2) => true };
var U = new WeakMap();
var Q = new WeakMap();
var X = new WeakMap();
var Y = new WeakMap();
function ee(e2) {
  return e2.__v_skip || !Object.isExtensible(e2) ? 0 : function(e3) {
    switch (e3) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(((e3) => y(e3).slice(8, -1))(e2));
}
function te(e2) {
  return e2 && e2.__v_isReadonly ? e2 : ne(e2, false, D, null, U);
}
function ne(e2, t2, n2, r2, s2) {
  if (!g(e2))
    return e2;
  if (e2.__v_raw && (!t2 || !e2.__v_isReactive))
    return e2;
  const o2 = s2.get(e2);
  if (o2)
    return o2;
  const i2 = ee(e2);
  if (i2 === 0)
    return e2;
  const c2 = new Proxy(e2, i2 === 2 ? r2 : n2);
  return s2.set(e2, c2), c2;
}
function re(e2) {
  return e2 && re(e2.__v_raw) || e2;
}
function se(e2) {
  return Boolean(e2 && e2.__v_isRef === true);
}
var oe = false;
var ie = [];
var ce = Promise.resolve();
var le = (e2) => ce.then(e2);
var fe = (e2) => {
  ie.includes(e2) || ie.push(e2), oe || (oe = true, le(ae));
};
var ae = () => {
  for (let e2 = 0; e2 < ie.length; e2++)
    ie[e2]();
  ie.length = 0, oe = false;
};
var ue = /^(spellcheck|draggable|form|list|type)$/;
var pe = ({ el: e2, get: t2, effect: n2, arg: r2, modifiers: s2 }) => {
  let o2;
  r2 === "class" && (e2._class = e2.className), n2(() => {
    let n3 = t2();
    if (r2)
      (s2 == null ? void 0 : s2.camel) && (r2 = _(r2)), he(e2, r2, n3, o2);
    else {
      for (const t3 in n3)
        he(e2, t3, n3[t3], o2 && o2[t3]);
      for (const t3 in o2)
        n3 && t3 in n3 || he(e2, t3, null);
    }
    o2 = n3;
  });
};
var he = (e2, n2, r2, s2) => {
  if (n2 === "class")
    e2.setAttribute("class", o(e2._class ? [e2._class, r2] : r2) || "");
  else if (n2 === "style") {
    r2 = t(r2);
    const { style: n3 } = e2;
    if (r2)
      if (d(r2))
        r2 !== s2 && (n3.cssText = r2);
      else {
        for (const e3 in r2)
          me(n3, e3, r2[e3]);
        if (s2 && !d(s2))
          for (const e3 in s2)
            r2[e3] == null && me(n3, e3, "");
      }
    else
      e2.removeAttribute("style");
  } else
    e2 instanceof SVGElement || !(n2 in e2) || ue.test(n2) ? n2 === "true-value" ? e2._trueValue = r2 : n2 === "false-value" ? e2._falseValue = r2 : r2 != null ? e2.setAttribute(n2, r2) : e2.removeAttribute(n2) : (e2[n2] = r2, n2 === "value" && (e2._value = r2));
};
var de = /\s*!important$/;
var me = (e2, t2, n2) => {
  u(n2) ? n2.forEach((n3) => me(e2, t2, n3)) : t2.startsWith("--") ? e2.setProperty(t2, n2) : de.test(n2) ? e2.setProperty($(t2), n2.replace(de, ""), "important") : e2[t2] = n2;
};
var ge = (e2, t2) => {
  const n2 = e2.getAttribute(t2);
  return n2 != null && e2.removeAttribute(t2), n2;
};
var ve = (e2, t2, n2, r2) => {
  e2.addEventListener(t2, n2, r2);
};
var ye = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
var be = ["ctrl", "shift", "alt", "meta"];
var xe = { stop: (e2) => e2.stopPropagation(), prevent: (e2) => e2.preventDefault(), self: (e2) => e2.target !== e2.currentTarget, ctrl: (e2) => !e2.ctrlKey, shift: (e2) => !e2.shiftKey, alt: (e2) => !e2.altKey, meta: (e2) => !e2.metaKey, left: (e2) => "button" in e2 && e2.button !== 0, middle: (e2) => "button" in e2 && e2.button !== 1, right: (e2) => "button" in e2 && e2.button !== 2, exact: (e2, t2) => be.some((n2) => e2[`${n2}Key`] && !t2[n2]) };
var we = ({ el: e2, get: t2, exp: n2, arg: r2, modifiers: s2 }) => {
  if (!r2)
    return;
  let o2 = ye.test(n2) ? t2(`(e => ${n2}(e))`) : t2(`($event => { ${n2} })`);
  if (r2 !== "mounted") {
    if (r2 === "unmounted")
      return () => o2();
    if (s2) {
      r2 === "click" && (s2.right && (r2 = "contextmenu"), s2.middle && (r2 = "mouseup"));
      const e3 = o2;
      o2 = (t3) => {
        if (!("key" in t3) || $(t3.key) in s2) {
          for (const e4 in s2) {
            const n3 = xe[e4];
            if (n3 && n3(t3, s2))
              return;
          }
          return e3(t3);
        }
      };
    }
    ve(e2, r2, o2, s2);
  } else
    le(o2);
};
var _e = ({ el: e2, get: t2, effect: n2 }) => {
  n2(() => {
    e2.textContent = ke(t2());
  });
};
var ke = (e2) => e2 == null ? "" : g(e2) ? JSON.stringify(e2, null, 2) : String(e2);
var $e = (e2) => "_value" in e2 ? e2._value : e2.value;
var Se = (e2, t2) => {
  const n2 = t2 ? "_trueValue" : "_falseValue";
  return n2 in e2 ? e2[n2] : t2;
};
var Ee = (e2) => {
  e2.target.composing = true;
};
var Oe = (e2) => {
  const t2 = e2.target;
  t2.composing && (t2.composing = false, Ae(t2, "input"));
};
var Ae = (e2, t2) => {
  const n2 = document.createEvent("HTMLEvents");
  n2.initEvent(t2, true, true), e2.dispatchEvent(n2);
};
var je = Object.create(null);
var Ce = (e2, t2, n2) => Ne(e2, `return(${t2})`, n2);
var Ne = (e2, t2, n2) => {
  const r2 = je[t2] || (je[t2] = Re(t2));
  try {
    return r2(e2, n2);
  } catch (s2) {
    console.error(s2);
  }
};
var Re = (e2) => {
  try {
    return new Function("$data", "$el", `with($data){${e2}}`);
  } catch (t2) {
    return console.error(`${t2.message} in expression: ${e2}`), () => {
    };
  }
};
var Pe = { bind: pe, on: we, show: ({ el: e2, get: t2, effect: n2 }) => {
  const r2 = e2.style.display;
  n2(() => {
    e2.style.display = t2() ? r2 : "none";
  });
}, text: _e, html: ({ el: e2, get: t2, effect: n2 }) => {
  n2(() => {
    e2.innerHTML = t2();
  });
}, model: ({ el: e2, exp: t2, get: n2, effect: r2, modifiers: s2 }) => {
  const o2 = e2.type, l2 = n2(`(val) => { ${t2} = val }`), { trim: f2, number: a2 = o2 === "number" } = s2 || {};
  if (e2.tagName === "SELECT") {
    const t3 = e2;
    ve(e2, "change", () => {
      const e3 = Array.prototype.filter.call(t3.options, (e4) => e4.selected).map((e4) => a2 ? S($e(e4)) : $e(e4));
      l2(t3.multiple ? e3 : e3[0]);
    }), r2(() => {
      const e3 = n2(), r3 = t3.multiple;
      for (let n3 = 0, s3 = t3.options.length; n3 < s3; n3++) {
        const s4 = t3.options[n3], o3 = $e(s4);
        if (r3)
          u(e3) ? s4.selected = c(e3, o3) > -1 : s4.selected = e3.has(o3);
        else if (i($e(s4), e3))
          return void (t3.selectedIndex !== n3 && (t3.selectedIndex = n3));
      }
      r3 || t3.selectedIndex === -1 || (t3.selectedIndex = -1);
    });
  } else if (o2 === "checkbox") {
    let t3;
    ve(e2, "change", () => {
      const t4 = n2(), r3 = e2.checked;
      if (u(t4)) {
        const n3 = $e(e2), s3 = c(t4, n3), o3 = s3 !== -1;
        if (r3 && !o3)
          l2(t4.concat(n3));
        else if (!r3 && o3) {
          const e3 = [...t4];
          e3.splice(s3, 1), l2(e3);
        }
      } else
        l2(Se(e2, r3));
    }), r2(() => {
      const r3 = n2();
      u(r3) ? e2.checked = c(r3, $e(e2)) > -1 : r3 !== t3 && (e2.checked = i(r3, Se(e2, true))), t3 = r3;
    });
  } else if (o2 === "radio") {
    let t3;
    ve(e2, "change", () => {
      l2($e(e2));
    }), r2(() => {
      const r3 = n2();
      r3 !== t3 && (e2.checked = i(r3, $e(e2)));
    });
  } else {
    const t3 = (e3) => f2 ? e3.trim() : a2 ? S(e3) : e3;
    ve(e2, "compositionstart", Ee), ve(e2, "compositionend", Oe), ve(e2, (s2 == null ? void 0 : s2.lazy) ? "change" : "input", () => {
      e2.composing || l2(t3(e2.value));
    }), f2 && ve(e2, "change", () => {
      e2.value = e2.value.trim();
    }), r2(() => {
      if (e2.composing)
        return;
      const r3 = e2.value, s3 = n2();
      document.activeElement === e2 && t3(r3) === s3 || r3 !== s3 && (e2.value = s3);
    });
  }
}, effect: ({ el: e2, ctx: t2, exp: n2, effect: r2 }) => {
  le(() => r2(() => Ne(t2.scope, n2, e2)));
} };
var Te = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var Me = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var Be = /^\(|\)$/g;
var Le = /^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/;
var We = (e2, t2, n2) => {
  const r2 = t2.match(Te);
  if (!r2)
    return;
  const s2 = e2.nextSibling, o2 = e2.parentElement, i2 = new Text("");
  o2.insertBefore(i2, e2), o2.removeChild(e2);
  const c2 = r2[2].trim();
  let l2, f2, a2, p2, h2 = r2[1].trim().replace(Be, "").trim(), d2 = false, m2 = "key", v2 = e2.getAttribute(m2) || e2.getAttribute(m2 = ":key") || e2.getAttribute(m2 = "v-bind:key");
  v2 && (e2.removeAttribute(m2), m2 === "key" && (v2 = JSON.stringify(v2))), (p2 = h2.match(Me)) && (h2 = h2.replace(Me, "").trim(), f2 = p2[1].trim(), p2[2] && (a2 = p2[2].trim())), (p2 = h2.match(Le)) && (l2 = p2[1].split(",").map((e3) => e3.trim()), d2 = h2[0] === "[");
  let y2, b2, x2, w2 = false;
  const _2 = (e3, t3, r3, s3) => {
    const o3 = {};
    l2 ? l2.forEach((e4, n3) => o3[e4] = t3[d2 ? n3 : e4]) : o3[h2] = t3, s3 ? (f2 && (o3[f2] = s3), a2 && (o3[a2] = r3)) : f2 && (o3[f2] = r3);
    const i3 = Ue(n2, o3), c3 = v2 ? Ce(i3.scope, v2) : r3;
    return e3.set(c3, r3), i3.key = c3, i3;
  }, k2 = (t3, n3) => {
    const r3 = new Qe(e2, t3);
    return r3.key = t3.key, r3.insert(o2, n3), r3;
  };
  return n2.effect(() => {
    const e3 = Ce(n2.scope, c2), t3 = x2;
    if ([b2, x2] = ((e4) => {
      const t4 = new Map(), n3 = [];
      if (u(e4))
        for (let r3 = 0; r3 < e4.length; r3++)
          n3.push(_2(t4, e4[r3], r3));
      else if (typeof e4 == "number")
        for (let r3 = 0; r3 < e4; r3++)
          n3.push(_2(t4, r3 + 1, r3));
      else if (g(e4)) {
        let r3 = 0;
        for (const s3 in e4)
          n3.push(_2(t4, e4[s3], r3++, s3));
      }
      return [n3, t4];
    })(e3), w2) {
      const e4 = [];
      for (let t4 = 0; t4 < y2.length; t4++)
        x2.has(y2[t4].key) || y2[t4].remove();
      let n3 = b2.length;
      for (; n3--; ) {
        const r3 = b2[n3], s3 = t3.get(r3.key), c3 = b2[n3 + 1], l3 = c3 && t3.get(c3.key), f3 = l3 == null ? void 0 : y2[l3];
        if (s3 == null)
          e4[n3] = k2(r3, f3 ? f3.el : i2);
        else {
          const t4 = e4[n3] = y2[s3];
          Object.assign(t4.ctx.scope, r3.scope), s3 !== n3 && y2[s3 + 1] !== f3 && t4.insert(o2, f3 ? f3.el : i2);
        }
      }
      y2 = e4;
    } else
      y2 = b2.map((e4) => k2(e4, i2)), w2 = true;
  }), s2;
};
var Ie = ({ el: e2, ctx: { scope: { $refs: t2 } }, get: n2, effect: r2 }) => {
  let s2;
  return r2(() => {
    const r3 = n2();
    t2[r3] = e2, s2 && r3 !== s2 && delete t2[s2], s2 = r3;
  }), () => {
    s2 && delete t2[s2];
  };
};
var Ke = /^(?:v-|:|@)/;
var Ve = /\.([\w-]+)/g;
var ze = /\{\{([^]+?)\}\}/g;
var Fe = false;
var qe = (e2, t2) => {
  const n2 = e2.nodeType;
  if (n2 === 1) {
    const n3 = e2;
    if (n3.hasAttribute("v-pre"))
      return;
    let r2;
    if (r2 = ge(n3, "v-if"))
      return ((e3, t3, n4) => {
        const r3 = e3.parentElement, s3 = new Comment("v-if");
        r3.insertBefore(s3, e3);
        const o3 = [{ exp: t3, el: e3 }];
        let i2, c2;
        for (; (i2 = e3.nextElementSibling) && (c2 = null, ge(i2, "v-else") === "" || (c2 = ge(i2, "v-else-if"))); )
          r3.removeChild(i2), o3.push({ exp: c2, el: i2 });
        const l2 = e3.nextSibling;
        let f2;
        r3.removeChild(e3);
        let a2 = -1;
        const u2 = () => {
          f2 && (r3.insertBefore(s3, f2.el), f2.remove(), f2 = void 0);
        };
        return n4.effect(() => {
          for (let e4 = 0; e4 < o3.length; e4++) {
            const { exp: t4, el: i3 } = o3[e4];
            if (!t4 || Ce(n4.scope, t4))
              return void (e4 !== a2 && (u2(), f2 = new Qe(i3, n4), f2.insert(r3, s3), r3.removeChild(s3), a2 = e4));
          }
          a2 = -1, u2();
        }), l2;
      })(n3, r2, t2);
    if (r2 = ge(n3, "v-for"))
      return We(n3, r2, t2);
    if ((r2 = ge(n3, "v-scope")) || r2 === "") {
      const e3 = r2 ? Ce(t2.scope, r2) : {};
      t2 = Ue(t2, e3), e3.$template && De(n3, e3.$template);
    }
    const s2 = ge(n3, "v-once") != null;
    let o2;
    s2 && (Fe = true), (r2 = ge(n3, "ref")) && Ze(n3, Ie, `"${r2}"`, t2), He(n3, t2);
    for (const { name: e3, value: i2 } of [...n3.attributes])
      Ke.test(e3) && e3 !== "v-cloak" && (e3 === "v-model" ? o2 = i2 : Je(n3, e3, i2, t2));
    o2 && Je(n3, "v-model", o2, t2), s2 && (Fe = false);
  } else if (n2 === 3) {
    const n3 = e2.data;
    if (n3.includes("{{")) {
      let r2, s2 = [], o2 = 0;
      for (; r2 = ze.exec(n3); ) {
        const e3 = n3.slice(o2, r2.index);
        e3 && s2.push(JSON.stringify(e3)), s2.push(`$s(${r2[1]})`), o2 = r2.index + r2[0].length;
      }
      o2 < n3.length && s2.push(JSON.stringify(n3.slice(o2))), Ze(e2, _e, s2.join("+"), t2);
    }
  } else
    n2 === 11 && He(e2, t2);
};
var He = (e2, t2) => {
  let n2 = e2.firstChild;
  for (; n2; )
    n2 = qe(n2, t2) || n2.nextSibling;
};
var Je = (e2, t2, n2, r2) => {
  let s2, o2, i2, c2 = null;
  for (; c2 = Ve.exec(t2); )
    (i2 || (i2 = {}))[c2[1]] = true, t2 = t2.slice(0, c2.index);
  if (t2[0] === ":")
    s2 = pe, o2 = t2.slice(1);
  else if (t2[0] === "@")
    s2 = we, o2 = t2.slice(1);
  else {
    const e3 = t2.indexOf(":"), n3 = e3 > 0 ? t2.slice(2, e3) : t2.slice(2);
    s2 = Pe[n3] || r2.dirs[n3], o2 = e3 > 0 ? t2.slice(e3 + 1) : void 0;
  }
  s2 && (s2 === pe && o2 === "ref" && (s2 = Ie), Ze(e2, s2, n2, r2, o2, i2), e2.removeAttribute(t2));
};
var Ze = (e2, t2, n2, r2, s2, o2) => {
  const i2 = t2({ el: e2, get: (t3 = n2) => Ce(r2.scope, t3, e2), effect: r2.effect, ctx: r2, exp: n2, arg: s2, modifiers: o2 });
  i2 && r2.cleanups.push(i2);
};
var De = (e2, t2) => {
  if (t2[0] !== "#")
    e2.innerHTML = t2;
  else {
    const n2 = document.querySelector(t2);
    e2.appendChild(n2.content.cloneNode(true));
  }
};
var Ge = (e2) => {
  const t2 = { ...e2, scope: e2 ? e2.scope : te({}), dirs: e2 ? e2.dirs : {}, effects: [], blocks: [], cleanups: [], effect: (e3) => {
    if (Fe)
      return fe(e3), e3;
    const n2 = N(e3, { scheduler: () => fe(n2) });
    return t2.effects.push(n2), n2;
  } };
  return t2;
};
var Ue = (e2, t2 = {}) => {
  const n2 = e2.scope, r2 = Object.create(n2);
  Object.defineProperties(r2, Object.getOwnPropertyDescriptors(t2)), r2.$refs = Object.create(n2.$refs);
  const s2 = te(new Proxy(r2, { set: (e3, t3, r3, o2) => o2 !== s2 || e3.hasOwnProperty(t3) ? Reflect.set(e3, t3, r3, o2) : Reflect.set(n2, t3, r3) }));
  return { ...e2, scope: s2 };
};
var Qe = class {
  get el() {
    return this.start || this.template;
  }
  constructor(e2, t2, n2 = false) {
    this.isFragment = e2 instanceof HTMLTemplateElement, n2 ? this.template = e2 : this.isFragment ? this.template = e2.content.cloneNode(true) : this.template = e2.cloneNode(true), n2 ? this.ctx = t2 : (this.parentCtx = t2, t2.blocks.push(this), this.ctx = Ge(t2)), qe(this.template, this.ctx);
  }
  insert(e2, t2 = null) {
    if (this.isFragment)
      if (this.start) {
        let n2, r2 = this.start;
        for (; r2 && (n2 = r2.nextSibling, e2.insertBefore(r2, t2), r2 !== this.end); )
          r2 = n2;
      } else
        this.start = new Text(""), this.end = new Text(""), e2.insertBefore(this.end, t2), e2.insertBefore(this.start, this.end), e2.insertBefore(this.template, this.end);
    else
      e2.insertBefore(this.template, t2);
  }
  remove() {
    if (this.parentCtx && ((e2, t2) => {
      const n2 = e2.indexOf(t2);
      n2 > -1 && e2.splice(n2, 1);
    })(this.parentCtx.blocks, this), this.start) {
      const e2 = this.start.parentNode;
      let t2, n2 = this.start;
      for (; n2 && (t2 = n2.nextSibling, e2.removeChild(n2), n2 !== this.end); )
        n2 = t2;
    } else
      this.template.parentNode.removeChild(this.template);
    this.teardown();
  }
  teardown() {
    this.ctx.blocks.forEach((e2) => {
      e2.teardown();
    }), this.ctx.effects.forEach(R), this.ctx.cleanups.forEach((e2) => e2());
  }
};
var Xe = (e2) => {
  const t2 = Ge();
  let n2;
  return e2 && (t2.scope = te(e2)), t2.scope.$s = ke, t2.scope.$nextTick = le, t2.scope.$refs = Object.create(null), { directive(e3, n3) {
    return n3 ? (t2.dirs[e3] = n3, this) : t2.dirs[e3];
  }, mount(e3) {
    if (typeof e3 == "string" && !(e3 = document.querySelector(e3)))
      return;
    let r2;
    return r2 = (e3 = e3 || document.documentElement).hasAttribute("v-scope") ? [e3] : [...e3.querySelectorAll("[v-scope]")].filter((e4) => !e4.matches("[v-scope] [v-scope]")), r2.length || (r2 = [e3]), n2 = r2.map((e4) => new Qe(e4, t2, true)), [e3, ...e3.querySelectorAll("[v-cloak]")].forEach((e4) => e4.removeAttribute("v-cloak")), this;
  }, unmount() {
    n2.forEach((e3) => e3.teardown());
  } };
};
var Ye;
(Ye = document.currentScript) && Ye.hasAttribute("init") && Xe().mount();

// node_modules/stylis/src/Enum.js
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";

// node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
function trim(value) {
  return value.trim();
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}

// node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        return delimiter(type === 34 || type === 39 ? type : character);
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 34:
      case 39:
      case 91:
      case 40:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, length2, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i2 = 0; i2 < length2; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// src/property.ts
var attrElMap = new WeakMap();
var attrObserver = new MutationObserver((records) => {
  for (const { target, attributeName } of records) {
    if (target instanceof Element && attributeName) {
      const nameMap = attrElMap.get(target);
      if (nameMap) {
        const value = target.getAttribute(attributeName);
        const setters = nameMap.get(attributeName) || [];
        setters.forEach((setter) => setter(value));
      }
    }
  }
});
function defineAttr(el, name, setter) {
  let nameMap = attrElMap.get(el);
  if (!nameMap) {
    nameMap = new Map();
    attrElMap.set(el, nameMap);
  }
  let setters = nameMap.get(name);
  if (!setters) {
    setters = [];
    nameMap.set(name, setters);
  }
  setters.push(setter);
  attrObserver.observe(el, {
    attributes: true,
    attributeFilter: [...nameMap.keys()]
  });
}
function parseAttrValue(type, value) {
  if (value === null) {
    return void 0;
  }
  if (type === "boolean") {
    return value !== "false";
  }
  if (type === "number" || type === "bigint") {
    const str = value.trim();
    return str ? Number(str) : NaN;
  }
  if (type === "object") {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
  return value;
}
function defineElementProperty(el, propName, config) {
  const attrName = propName.replace(/(?=[A-Z])/g, "-").toLowerCase();
  const attrParser = parseAttrValue.bind(null, typeof config.default);
  const setter = (value) => config.set(value === void 0 ? config.default : value);
  const attrSetter = (value) => setter(attrParser(value));
  let initialValue = void 0;
  if (el.hasAttribute(attrName)) {
    initialValue = attrParser(el.getAttribute(attrName));
  }
  if (initialValue === void 0) {
    initialValue = Reflect.get(el, propName);
  }
  setter(initialValue);
  Object.defineProperty(el, propName, { get: config.get, set: setter });
  defineAttr(el, attrName, attrSetter);
}

// src/util.ts
function getOrPut(map, key, init) {
  let value = map.get(key);
  if (value === void 0) {
    value = init(key);
    map.set(key, value);
  }
  return value;
}
function emit(target, type, detail, options = {}) {
  return target.dispatchEvent(new CustomEvent(type, { detail, ...options }));
}

// src/component.ts
var docCache = new WeakMap();
function cloneContent(el) {
  const docFragment = getOrPut(docCache, el, () => {
    const temp = document.createElement("template");
    temp.innerHTML = el instanceof Document ? el.head.innerHTML + el.body.innerHTML : el instanceof HTMLTemplateElement ? el.innerHTML : el.outerHTML;
    for (const node2 of temp.content.querySelectorAll("script")) {
      node2.remove();
    }
    for (const node2 of temp.content.querySelectorAll("style")) {
      node2.innerHTML = serialize(compile(node2.innerHTML), stringify);
    }
    return temp.content;
  });
  return Array.from(docFragment.childNodes).map((node2) => document.importNode(node2, true));
}
function createComponent(meta, ctor) {
  return class Component extends HTMLElement {
    constructor() {
      super();
      const data = te((ctor == null ? void 0 : ctor(this)) || {});
      Reflect.set(data, "$emit", emit.bind(null, this));
      for (const prop of data.$props || []) {
        defineElementProperty(this, prop, {
          default: Reflect.get(data, prop),
          get: () => Reflect.get(data, prop),
          set: (value) => Reflect.set(data, prop, value)
        });
      }
      const $el = data.$el || (meta == null ? void 0 : meta.document);
      if ($el) {
        const root = this.attachShadow({ mode: "open" });
        const app = Xe(data);
        root.append(...cloneContent($el));
        for (const node2 of root.children) {
          if (!(node2 instanceof HTMLStyleElement)) {
            app.mount(node2);
          }
        }
      }
    }
  };
}
function defineComponent(meta, ctor) {
  const clazz = createComponent(typeof meta === "string" ? null : meta, ctor);
  const tagName = typeof meta === "string" ? meta : new URL(meta.url).pathname.replace(/^.*\/|\..*$/g, "").replace(/^([^-]+)$/, "x-$1");
  customElements.define(tagName, clazz);
  return clazz;
}

// src/locus.ts
var basePath = new URL(document.baseURI).pathname;
var store = te({
  path: "",
  query: {},
  params: []
});
function resolveUrl(value) {
  const conf = typeof value === "string" ? { path: value } : value;
  let path = conf.path || store.path;
  const query = conf.query || {};
  const params = (conf.params || store.params).slice();
  path = path.replace(/[^/]+/g, (key) => {
    const param = key.startsWith("_") && params.pop();
    return param ? `_${param}` : key;
  });
  if (path.startsWith("/")) {
    path = basePath.replace(/\/$/, "") + path;
  }
  const url = new URL(path, location.href);
  url.pathname = url.pathname.replace(/[^/]+/g, (s2) => {
    const p2 = s2.startsWith("_") && params.pop();
    return p2 ? `_${p2}` : s2;
  });
  for (const [key, value2] of Object.entries(query)) {
    url.searchParams.set(key, value2);
  }
  return url.href;
}
function pushUrl(value) {
  const currentUrl = resolveUrl(store);
  const newUrl = resolveUrl(value);
  if (currentUrl !== newUrl) {
    history.pushState(null, "", newUrl);
    dispatchEvent(new PopStateEvent("popstate"));
  }
}
function replaceUrl(value) {
  history.replaceState(history.state, "", resolveUrl(value));
  dispatchEvent(new PopStateEvent("popstate"));
}
function updateStore() {
  store.path = location.pathname.replace(basePath, "/");
  store.query = Object.fromEntries(new URLSearchParams(location.search));
  store.params = store.path.split("/").filter((k2) => k2.startsWith("_")).map((k2) => k2.substr(1));
}
function toEndpoint(url) {
  const urlObj = new URL(url, location.href);
  return (urlObj.origin + urlObj.pathname).replace(/\/$/, "");
}
function isMatchUrl(basis, value, exact = false) {
  const basisUrl = toEndpoint(resolveUrl(basis));
  const url = toEndpoint(resolveUrl(value));
  return basisUrl === url || !exact && url.startsWith(basisUrl + "/");
}
function backUrl() {
  history.back();
}
function onGlobalClick(e2) {
  const a2 = e2.composedPath().find((el) => el instanceof HTMLAnchorElement && el.href);
  const anyKey = e2.altKey || e2.ctrlKey || e2.shiftKey;
  if (a2 && !a2.target && !anyKey && isMatchUrl("/", a2.href)) {
    e2.preventDefault();
    pushUrl(a2.href);
  }
}
addEventListener("click", onGlobalClick);
addEventListener("popstate", updateStore);
updateStore();
var locus_default = {
  get path() {
    return store.path;
  },
  get query() {
    return store.query;
  },
  get params() {
    return store.params;
  },
  push: pushUrl,
  replace: replaceUrl,
  resolve: resolveUrl,
  back: backUrl,
  isMatch(value, exact = false) {
    return isMatchUrl(value, store, exact);
  }
};
export {
  createComponent,
  defineComponent,
  emit,
  locus_default as locus,
  le as nextTick,
  te as reactive
};
