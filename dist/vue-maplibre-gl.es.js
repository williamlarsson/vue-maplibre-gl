/*!
* vue-maplibre-gl v3.0.3
* (c) 2024 Volker Nauruhn
* @license MIT
*/
var pe = Object.defineProperty;
var Se = (e, t, r) => t in e ? pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var L = (e, t, r) => (Se(e, typeof t != "symbol" ? t + "" : t, r), r);
import { reactive as ie, defineComponent as p, markRaw as ue, getCurrentInstance as k, shallowRef as Q, ref as z, provide as A, watch as m, toRef as v, onMounted as me, onBeforeUnmount as H, h as w, unref as J, nextTick as ne, inject as s, createCommentVNode as M, Teleport as ge, warn as _, createTextVNode as ce } from "vue";
import { Map as be, AttributionControl as Le, FullscreenControl as Oe, GeolocateControl as Ae, NavigationControl as Re, ScaleControl as Ee, Marker as Me, Popup as Ie } from "maplibre-gl";
import Ne from "mitt";
const O = Symbol("map"), T = Symbol("isLoaded"), j = Symbol("isInitialized"), I = Symbol("componentId"), N = Symbol("sourceId"), G = Symbol("sourceLayerRegistry"), le = Symbol("emitter"), fe = Symbol("marker");
function St(e) {
  return Object.keys(e);
}
function q(e) {
  return Object.keys(e);
}
const g = ie({
  style: "https://demotiles.maplibre.org/style.json",
  center: Object.freeze([0, 0]),
  zoom: 1,
  trackResize: !1
});
class P {
  static createEventHandler(t, r, o, a) {
    return (i = {}) => o.emit(a, { type: i.type, map: r, component: t, event: i });
  }
}
L(P, "MAP_OPTION_KEYS", [
  "antialias",
  "attributionControl",
  "bearing",
  "bearingSnap",
  "bounds",
  "boxZoom",
  "center",
  "clickTolerance",
  "collectResourceTiming",
  "crossSourceCollisions",
  "container",
  "customAttribution",
  "dragPan",
  "dragRotate",
  "doubleClickZoom",
  "hash",
  "fadeDuration",
  "failIfMajorPerformanceCaveat",
  "fitBoundsOptions",
  "interactive",
  "keyboard",
  "locale",
  "localIdeographFontFamily",
  "logoPosition",
  "maxBounds",
  "maxPitch",
  "maxZoom",
  "minPitch",
  "minZoom",
  "preserveDrawingBuffer",
  "pitch",
  "pitchWithRotate",
  "refreshExpiredTiles",
  "renderWorldCopies",
  "scrollZoom",
  "mapStyle",
  "trackResize",
  "transformRequest",
  "touchZoomRotate",
  "touchPitch",
  "zoom",
  "maxTileCacheSize",
  "pixelRatio",
  "cooperativeGestures"
]), L(P, "MARKER_OPTION_KEYS", [
  "element",
  "offset",
  "anchor",
  "color",
  "draggable",
  "clickTolerance",
  "rotation",
  "rotationAlignment",
  "pitchAlignment",
  "scale"
]), L(P, "POPUP_OPTION_KEYS", [
  "closeButton",
  "closeOnClick",
  "closeOnMove",
  "focusAfterOpen",
  "anchor",
  "offset",
  "className",
  "maxWidth"
]), L(P, "MAP_EVENT_TYPES", [
  "error",
  "load",
  "idle",
  "remove",
  "render",
  "resize",
  "webglcontextlost",
  "webglcontextrestored",
  "dataloading",
  "data",
  "tiledataloading",
  "sourcedataloading",
  "styledataloading",
  "sourcedata",
  "styledata",
  "boxzoomcancel",
  "boxzoomstart",
  "boxzoomend",
  "touchcancel",
  "touchmove",
  "touchend",
  "touchstart",
  "click",
  "contextmenu",
  "dblclick",
  "mousemove",
  "mouseup",
  "mousedown",
  "mouseout",
  "mouseover",
  "movestart",
  "move",
  "moveend",
  "zoomstart",
  "zoom",
  "zoomend",
  "rotatestart",
  "rotate",
  "rotateend",
  "dragstart",
  "drag",
  "dragend",
  "pitchstart",
  "pitch",
  "pitchend",
  "wheel"
]);
var W = /* @__PURE__ */ ((e) => (e.TOP_LEFT = "top-left", e.TOP_RIGHT = "top-right", e.BOTTOM_LEFT = "bottom-left", e.BOTTOM_RIGHT = "bottom-right", e))(W || {});
const D = Object.values(W), ee = /* @__PURE__ */ new Map(), ye = Symbol("default");
function bt(e = ye) {
  let t = ee.get(e);
  return t || (t = ie({ isLoaded: !1, isMounted: !1, language: null }), ee.set(e, t)), t;
}
function Ce(e, t, r = ye) {
  var a;
  let o = ee.get(r);
  return o || (o = ie({ isLoaded: !1, isMounted: !1, language: null }), ee.set(r, o)), o.isLoaded = !1, o.isMounted = !1, o.component = e, o.map = t.value, o.isLoaded = ((a = t.value) == null ? void 0 : a.loaded()) || !1, o;
}
function xe(e, t = 250, r = !1) {
  let o;
  function a() {
    const i = arguments, l = () => {
      o = void 0, r !== !0 && e.apply(this, i);
    };
    clearTimeout(o), r === !0 && o === void 0 && e.apply(this, i), o = window.setTimeout(l, t);
  }
  return a.cancel = () => {
    clearTimeout(o);
  }, a;
}
const ve = {
  /**
   * AUTO mode uses the language of the browser
   */
  AUTO: "auto",
  /**
   * STYLE is a custom flag to keep the language of the map as defined into the style.
   * If STYLE is set in the constructor, then further modification of the language
   * with `.setLanguage()` is not possible.
   */
  STYLE_LOCK: "style_lock",
  /**
   * Default fallback languages that uses latin charaters
   */
  LATIN: "latin",
  /**
   * Default fallback languages that uses non-latin charaters
   */
  NON_LATIN: "nonlatin",
  /**
   * Labels are in their local language, when available
   */
  LOCAL: "",
  ALBANIAN: "sq",
  AMHARIC: "am",
  ARABIC: "ar",
  ARMENIAN: "hy",
  AZERBAIJANI: "az",
  BASQUE: "eu",
  BELORUSSIAN: "be",
  BOSNIAN: "bs",
  BRETON: "br",
  BULGARIAN: "bg",
  CATALAN: "ca",
  CHINESE: "zh",
  CORSICAN: "co",
  CROATIAN: "hr",
  CZECH: "cs",
  DANISH: "da",
  DUTCH: "nl",
  ENGLISH: "en",
  ESPERANTO: "eo",
  ESTONIAN: "et",
  FINNISH: "fi",
  FRENCH: "fr",
  FRISIAN: "fy",
  GEORGIAN: "ka",
  GERMAN: "de",
  GREEK: "el",
  HEBREW: "he",
  HINDI: "hi",
  HUNGARIAN: "hu",
  ICELANDIC: "is",
  INDONESIAN: "id",
  IRISH: "ga",
  ITALIAN: "it",
  JAPANESE: "ja",
  JAPANESE_HIRAGANA: "ja-Hira",
  JAPANESE_KANA: "ja_kana",
  JAPANESE_LATIN: "ja_rm",
  JAPANESE_2018: "ja-Latn",
  KANNADA: "kn",
  KAZAKH: "kk",
  KOREAN: "ko",
  KOREAN_LATIN: "ko-Latn",
  KURDISH: "ku",
  ROMAN_LATIN: "la",
  LATVIAN: "lv",
  LITHUANIAN: "lt",
  LUXEMBOURGISH: "lb",
  MACEDONIAN: "mk",
  MALAYALAM: "ml",
  MALTESE: "mt",
  NORWEGIAN: "no",
  OCCITAN: "oc",
  POLISH: "pl",
  PORTUGUESE: "pt",
  ROMANIAN: "ro",
  ROMANSH: "rm",
  RUSSIAN: "ru",
  SCOTTISH_GAELIC: "gd",
  SERBIAN_CYRILLIC: "sr",
  SERBIAN_LATIN: "sr-Latn",
  SLOVAK: "sk",
  SLOVENE: "sl",
  SPANISH: "es",
  SWEDISH: "sv",
  TAMIL: "ta",
  TELUGU: "te",
  THAI: "th",
  TURKISH: "tr",
  UKRAINIAN: "uk",
  WELSH: "cy"
};
new Set(Object.values(ve));
new Set(Object.values(ve));
function oe(e, t) {
  const r = e.getStyle().layers, o = /^\s*{\s*name\s*(:\s*(\S*))?\s*}$/, a = /^\s*name\s*(:\s*(\S*))?\s*$/, i = /^\s*{\s*name\s*(:\s*(\S*))?\s*}(\s*){\s*name\s*(:\s*(\S*))?\s*}$/, l = /^(.*)({\s*name\s*(:\s*(\S*))?\s*})(.*)$/, d = t ? `name:${t}` : "name", u = [
    "case",
    ["has", d],
    ["get", d],
    ["get", "name"]
  ];
  for (let R = 0; R < r.length; R += 1) {
    const S = r[R], B = S.layout;
    if (!B || !B["text-field"])
      continue;
    const h = e.getLayoutProperty(S.id, "text-field");
    let C;
    if (Array.isArray(h) && h.length >= 2 && h[0].trim().toLowerCase() === "concat") {
      const b = h.slice();
      for (let f = 0; f < h.length; f += 1) {
        const n = h[f];
        if ((typeof n == "string" || n instanceof String) && o.exec(n.toString())) {
          b[f] = u;
          break;
        } else if (Array.isArray(n) && n.length >= 2 && n[0].trim().toLowerCase() === "get" && a.exec(n[1].toString())) {
          b[f] = u;
          break;
        } else if (Array.isArray(n) && n.length === 4 && n[0].trim().toLowerCase() === "case") {
          b[f] = u;
          break;
        }
      }
      e.setLayoutProperty(S.id, "text-field", b);
    } else if (Array.isArray(h) && h.length >= 2 && h[0].trim().toLowerCase() === "get" && a.exec(h[1].toString())) {
      const b = u;
      e.setLayoutProperty(S.id, "text-field", b);
    } else if ((typeof h == "string" || h instanceof String) && o.exec(h.toString())) {
      const b = u;
      e.setLayoutProperty(S.id, "text-field", b);
    } else if (Array.isArray(h) && h.length === 4 && h[0].trim().toLowerCase() === "case") {
      const b = u;
      e.setLayoutProperty(S.id, "text-field", b);
    } else if ((typeof h == "string" || h instanceof String) && (C = i.exec(h.toString())) !== null) {
      const b = `{${d}}${C[3]}{name${C[4] || ""}}`;
      e.setLayoutProperty(S.id, "text-field", b);
    } else if ((typeof h == "string" || h instanceof String) && (C = l.exec(h.toString())) !== null) {
      const b = `${C[1]}{${d}}${C[5]}`;
      e.setLayoutProperty(S.id, "text-field", b);
    }
  }
}
const we = /* @__PURE__ */ p({
  name: "MglMap",
  props: {
    width: { type: [Number, String], default: "100%" },
    height: { type: [Number, String], default: "100%" },
    antialias: { type: Boolean, default: () => g.antialias },
    attributionControl: { type: Boolean, default: () => g.attributionControl },
    bearing: { type: Number, default: () => g.bearing },
    bearingSnap: { type: Number, default: () => g.bearingSnap },
    bounds: { type: [Array, Object], default: () => g.bounds },
    boxZoom: { type: Boolean, default: () => g.boxZoom },
    center: { type: [Array, Object], default: () => g.center },
    clickTolerance: { type: Number, default: () => g.clickTolerance },
    collectResourceTiming: { type: Boolean, default: () => g.collectResourceTiming },
    crossSourceCollisions: { type: Boolean, default: () => g.crossSourceCollisions },
    customAttribution: { type: [String, Array], default: () => g.customAttribution },
    dragPan: { type: Boolean, default: () => g.dragPan },
    dragRotate: { type: Boolean, default: () => g.dragRotate },
    doubleClickZoom: { type: Boolean, default: () => g.doubleClickZoom },
    hash: { type: [Boolean, String], default: () => g.hash },
    fadeDuration: { type: Number, default: () => g.fadeDuration },
    failIfMajorPerformanceCaveat: { type: Boolean, default: () => g.failIfMajorPerformanceCaveat },
    fitBoundsOptions: { type: Object, default: () => g.fitBoundsOptions },
    interactive: { type: Boolean, default: () => g.interactive },
    keyboard: { type: Boolean, default: () => g.keyboard },
    locale: { type: Object, default: () => g.locale },
    language: { type: String, default: () => g.language || null },
    localIdeographFontFamily: { type: String, default: () => g.localIdeographFontFamily },
    logoPosition: {
      type: [String],
      validator: (e) => e in W,
      default: () => g.logoPosition
    },
    maxBounds: { type: [Array, Object], default: () => g.maxBounds },
    maxPitch: { type: Number, default: () => g.maxPitch },
    maxZoom: { type: Number, default: () => g.maxZoom },
    minPitch: { type: Number, default: () => g.minPitch },
    minZoom: { type: Number, default: () => g.minZoom },
    preserveDrawingBuffer: { type: Boolean, default: () => g.preserveDrawingBuffer },
    pitch: { type: Number, default: () => g.pitch },
    pitchWithRotate: { type: Boolean, default: () => g.pitchWithRotate },
    refreshExpiredTiles: { type: Boolean, default: () => g.refreshExpiredTiles },
    renderWorldCopies: { type: Boolean, default: () => g.renderWorldCopies },
    scrollZoom: { type: Boolean, default: () => g.scrollZoom },
    // StyleSpecification triggers TS7056, so users must handle typings themselves
    mapStyle: { type: [String, Object], default: () => g.style },
    trackResize: { type: Boolean, default: () => g.trackResize },
    transformRequest: { type: Function, default: g.transformRequest },
    touchZoomRotate: { type: Boolean, default: () => g.touchZoomRotate },
    touchPitch: { type: Boolean, default: () => g.touchPitch },
    zoom: { type: Number, default: () => g.zoom },
    maxTileCacheSize: { type: Number, default: () => g.maxTileCacheSize },
    mapKey: { type: [String, Symbol] },
    pixelRatio: { type: Number, default: () => g.pixelRatio },
    cooperativeGestures: { type: [Boolean, Object], default: () => g.cooperativeGestures }
  },
  emits: [
    "map:error",
    "map:load",
    "map:idle",
    "map:remove",
    "map:render",
    "map:resize",
    "map:webglcontextlost",
    "map:webglcontextrestored",
    "map:dataloading",
    "map:data",
    "map:tiledataloading",
    "map:sourcedataloading",
    "map:styledataloading",
    "map:sourcedata",
    "map:styledata",
    "map:boxzoomcancel",
    "map:boxzoomstart",
    "map:boxzoomend",
    "map:touchcancel",
    "map:touchmove",
    "map:touchend",
    "map:touchstart",
    "map:click",
    "map:contextmenu",
    "map:dblclick",
    "map:mousemove",
    "map:mouseup",
    "map:mousedown",
    "map:mouseout",
    "map:mouseover",
    "map:movestart",
    "map:move",
    "map:moveend",
    "map:zoomstart",
    "map:zoom",
    "map:zoomend",
    "map:rotatestart",
    "map:rotate",
    "map:rotateend",
    "map:dragstart",
    "map:drag",
    "map:dragend",
    "map:pitchstart",
    "map:pitch",
    "map:pitchend",
    "map:wheel"
  ],
  slots: Object,
  setup(e, t) {
    const r = ue(k()), o = Q(), a = Q(), i = z(!1), l = z(!1), d = z(!1), u = /* @__PURE__ */ new Map(), R = Ne(), S = Ce(r, a, e.mapKey);
    let B;
    A(O, a), A(T, l), A(j, i), A(I, r.uid), A(N, ""), A(le, R), m(v(e, "bearing"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setBearing(n));
    }), m(v(e, "bounds"), (n) => {
      var c;
      n && ((c = a.value) == null || c.fitBounds(n, e.fitBoundsOptions));
    }), m(v(e, "center"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setCenter(n));
    }), m(v(e, "maxBounds"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setMaxBounds(n));
    }), m(v(e, "maxPitch"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setMaxPitch(n));
    }), m(v(e, "maxZoom"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setMaxZoom(n));
    }), m(v(e, "minPitch"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setMinPitch(n));
    }), m(v(e, "minZoom"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setMinZoom(n));
    }), m(v(e, "pitch"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setPitch(n));
    }), m(v(e, "renderWorldCopies"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setRenderWorldCopies(n));
    }), m(v(e, "mapStyle"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setStyle(n));
    }), m(v(e, "transformRequest"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setTransformRequest(n));
    }), m(v(e, "zoom"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setZoom(n));
    }), m(v(e, "zoom"), (n) => {
      var c;
      n && ((c = a.value) == null || c.setZoom(n));
    }), m(v(e, "language"), (n) => {
      d.value && a.value && S.language !== (n || null) && (oe(a.value, n || ""), S.language = n || null);
    }), m(v(S, "language"), (n) => {
      d.value && a.value && oe(a.value, n || "");
    });
    function h() {
      d.value = !0, e.language ? S.language = e.language : S.language && oe(a.value, e.language || "");
    }
    function C() {
      S.isMounted = !0;
      const n = Object.keys(e).filter((c) => e[c] !== void 0 && P.MAP_OPTION_KEYS.indexOf(c) !== -1).reduce((c, V) => (c[V === "mapStyle" ? "style" : V] = J(e[V]), c), { container: o.value });
      if (a.value = ue(new be(n)), S.map = a.value, i.value = !0, u.set("__load", () => (l.value = !0, S.isLoaded = !0)), a.value.once("styledata", h), a.value.on("load", u.get("__load")), r.vnode.props) {
        for (let c = 0, V = P.MAP_EVENT_TYPES.length; c < V; c++)
          if (r.vnode.props["onMap:" + P.MAP_EVENT_TYPES[c]]) {
            const se = P.createEventHandler(r, a.value, t, "map:" + P.MAP_EVENT_TYPES[c]);
            u.set(P.MAP_EVENT_TYPES[c], se), a.value.on(P.MAP_EVENT_TYPES[c], se);
          }
      }
      a.value.getCanvas().addEventListener("webglcontextlost", f);
    }
    async function b() {
      S.isMounted = !1, S.isLoaded = !1, l.value = !1, a.value && (a.value.getCanvas().removeEventListener("webglcontextlost", f), a.value._controls.forEach((n) => {
        a.value.removeControl(n);
      }), i.value = !1, u.forEach((n, c) => {
        a.value.off(c.startsWith("__") ? c.substring(2) : c, n);
      }), a.value.remove());
    }
    function f() {
      b(), ne(C);
    }
    return me(() => {
      C(), a.value && (B = new ResizeObserver(xe(a.value.resize.bind(a.value), 100)), B.observe(o.value));
    }), H(() => {
      B !== void 0 && (B.disconnect(), B = void 0), b();
    }), t.expose({ map: a }), () => w(
      "div",
      {
        class: "mgl-container",
        style: { height: e.height, width: e.width }
      },
      [
        w("div", { ref: o, class: "mgl-wrapper" }),
        i.value && t.slots.default ? t.slots.default({}) : void 0
      ]
    );
  }
});
function Z(e, t, r) {
  m(e, (o) => {
    var a, i;
    o && D.indexOf(o) === -1 || ((a = t.value) != null && a.hasControl(r) && t.value.removeControl(r), (i = t.value) == null || i.addControl(r, o));
  }, { immediate: !0 });
}
const Pe = /* @__PURE__ */ p({
  name: "MglAttributionControl",
  props: {
    position: {
      type: String,
      validator: (e) => D.indexOf(e) !== -1
    },
    compact: Boolean,
    customAttribution: [String, Array]
  },
  setup(e) {
    const t = s(O), r = s(j), o = new Le({ compact: e.compact, customAttribution: e.customAttribution });
    Z(v(e, "position"), t, o), H(() => r.value && t.value.removeControl(o));
  },
  render() {
  }
}), U = class U {
  constructor(t, r) {
    L(this, "container");
    this.isAdded = t, this.container = document.createElement("div"), this.setClasses(r);
  }
  getDefaultPosition() {
    return W.TOP_LEFT;
  }
  onAdd() {
    return ne(() => this.isAdded.value = !0), this.container;
  }
  onRemove() {
    this.isAdded.value = !1, this.container.remove();
  }
  setClasses(t) {
    t ? (this.container.classList.remove(U.CONTROL_CLASS), this.container.classList.remove(U.CONTROL_GROUP_CLASS)) : (this.container.classList.add(U.CONTROL_CLASS), this.container.classList.add(U.CONTROL_GROUP_CLASS));
  }
};
L(U, "CONTROL_CLASS", "maplibregl-ctrl"), L(U, "CONTROL_GROUP_CLASS", "maplibregl-ctrl-group");
let te = U;
const Te = /* @__PURE__ */ p({
  name: "MglCustomControl",
  props: {
    position: {
      type: String,
      validator: (e) => D.indexOf(e) !== -1
    },
    noClasses: {
      type: Boolean,
      default: !1
    }
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = s(O), o = s(j), a = z(!1), i = new te(a, e.noClasses);
    return Z(v(e, "position"), r, i), m(v(e, "noClasses"), (l) => i.setClasses(l)), H(() => {
      var l;
      return o.value && ((l = r.value) == null ? void 0 : l.removeControl(i));
    }), () => {
      var l;
      return a.value ? w(
        ge,
        { to: i.container },
        (l = t.default) == null ? void 0 : l.call(t, {})
      ) : M("custom-component");
    };
  }
}), He = /* @__PURE__ */ p({
  name: "MglFullscreenControl",
  props: {
    position: {
      type: String,
      default: W.TOP_RIGHT,
      validator: (e) => D.indexOf(e) !== -1
    },
    container: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = s(O), r = s(j), o = new Oe({ container: e.container || void 0 });
    function a() {
      ne(() => {
        var i;
        return (i = t.value) == null ? void 0 : i.resize();
      });
    }
    o.on("fullscreenstart", a), o.on("fullscreenend", a), Z(v(e, "position"), t, o), H(() => {
      var i;
      o.off("fullscreenstart", a), o.off("fullscreenend", a), r.value && ((i = t.value) == null || i.removeControl(o));
    });
  },
  render() {
  }
});
class Be {
  constructor(t = "rgba(0,0,0,0.9)", r = 4 * window.devicePixelRatio, o = "#7cf859", a = "Monaco, Consolas, Courier, monospace", i = 60 * window.devicePixelRatio, l = 90 * window.devicePixelRatio, d = 0, u = 5 * window.devicePixelRatio, R = 100 * window.devicePixelRatio) {
    L(this, "frames", 0);
    L(this, "totalTime", 0);
    L(this, "totalFrames", 0);
    L(this, "time", null);
    L(this, "map");
    L(this, "container");
    L(this, "readOutput");
    L(this, "canvas");
    L(this, "eventHandlers", /* @__PURE__ */ new Map());
    this.background = t, this.barWidth = r, this.color = o, this.font = a, this.graphHeight = i, this.graphWidth = l, this.graphTop = d, this.graphRight = u, this.width = R;
  }
  getDefaultPosition() {
    return W.TOP_RIGHT;
  }
  onAdd(t) {
    this.map = t;
    const r = this.container = document.createElement("div");
    return r.className = "maplibregl-ctrl maplibregl-ctrl-fps", r.style.backgroundColor = this.background, r.style.borderRadius = "6px", this.readOutput = document.createElement("div"), this.readOutput.style.color = this.color, this.readOutput.style.fontFamily = this.font, this.readOutput.style.padding = "0 5px 5px", this.readOutput.style.fontSize = "9px", this.readOutput.style.fontWeight = "bold", this.readOutput.textContent = "Waiting…", this.canvas = document.createElement("canvas"), this.canvas.className = "maplibregl-ctrl-canvas", this.canvas.width = this.width, this.canvas.height = this.graphHeight, this.canvas.style.cssText = `width: ${this.width / window.devicePixelRatio}px; height: ${this.graphHeight / window.devicePixelRatio}px;`, r.appendChild(this.readOutput), r.appendChild(this.canvas), this.eventHandlers.set("movestart", this.onMoveStart.bind(this)), this.eventHandlers.set("moveend", this.onMoveEnd.bind(this)), this.map.on("movestart", this.eventHandlers.get("movestart")), this.map.on("moveend", this.eventHandlers.get("moveend")), this.container;
  }
  onRemove() {
    this.map.off("movestart", this.eventHandlers.get("movestart")), this.map.off("moveend", this.eventHandlers.get("moveend")), this.eventHandlers.clear(), this.container.parentNode.removeChild(this.container), this.map = void 0;
  }
  onMoveStart() {
    this.frames = 0, this.time = performance.now(), this.eventHandlers.set("render", this.onRender.bind(this)), this.map.on("render", this.eventHandlers.get("render"));
  }
  onMoveEnd() {
    const t = performance.now();
    this.updateGraph(this.getFPS(t)), this.frames = 0, this.time = null, this.map.off("render", this.eventHandlers.get("render"));
  }
  onRender() {
    if (this.time) {
      this.frames++;
      const t = performance.now();
      t >= this.time + 1e3 && (this.updateGraph(this.getFPS(t)), this.frames = 0, this.time = performance.now());
    }
  }
  getFPS(t) {
    return this.totalTime += t - this.time, this.totalFrames += this.frames, Math.round(1e3 * this.frames / (t - this.time)) || 0;
  }
  updateGraph(t) {
    const r = this.canvas.getContext("2d"), o = Math.round(1e3 * this.totalFrames / this.totalTime) || 0, a = (this.graphHeight, this.barWidth);
    r.fillStyle = this.background, r.globalAlpha = 1, r.fillRect(0, 0, this.graphWidth, this.graphTop), r.fillStyle = this.color, this.readOutput.textContent = `${t} FPS (${o} Avg)`, r.drawImage(
      this.canvas,
      this.graphRight + a,
      this.graphTop,
      this.graphWidth - a,
      this.graphHeight,
      this.graphRight,
      this.graphTop,
      this.graphWidth - a,
      this.graphHeight
    ), r.fillRect(
      this.graphRight + this.graphWidth - a,
      this.graphTop,
      a,
      this.graphHeight
    ), r.fillStyle = this.background, r.globalAlpha = 0.75, r.fillRect(
      this.graphRight + this.graphWidth - a,
      this.graphTop,
      a,
      (1 - t / 100) * this.graphHeight
    );
  }
}
const _e = /* @__PURE__ */ p({
  name: "MglFrameRateControl",
  props: {
    position: {
      type: String,
      validator: (e) => D.indexOf(e) !== -1
    },
    background: {
      type: String,
      default: "rgba(0,0,0,0.9)"
    },
    barWidth: {
      type: Number,
      default: 4 * window.devicePixelRatio
    },
    color: {
      type: String,
      default: "#7cf859"
    },
    font: {
      type: String,
      default: "Monaco, Consolas, Courier, monospace"
    },
    graphHeight: {
      type: Number,
      default: 60 * window.devicePixelRatio
    },
    graphWidth: {
      type: Number,
      default: 90 * window.devicePixelRatio
    },
    graphTop: {
      type: Number,
      default: 0
    },
    graphRight: {
      type: Number,
      default: 5 * window.devicePixelRatio
    },
    width: {
      type: Number,
      default: 100 * window.devicePixelRatio
    }
  },
  setup(e) {
    const t = s(O), r = s(j), o = new Be(
      e.background,
      e.barWidth,
      e.color,
      e.font,
      e.graphHeight,
      e.graphWidth,
      e.graphTop,
      e.graphRight,
      e.width
    );
    Z(v(e, "position"), t, o), H(() => {
      var a;
      return r.value && ((a = t.value) == null ? void 0 : a.removeControl(o));
    });
  },
  render() {
  }
}), ze = /* @__PURE__ */ p({
  name: "MglGeolocationControl",
  props: {
    position: {
      type: String,
      default: W.TOP_RIGHT,
      validator: (e) => D.indexOf(e) !== -1
    },
    positionOptions: {
      type: Object,
      default: { enableHighAccuracy: !1, timeout: 6e3 }
    },
    fitBoundsOptions: {
      type: Object,
      default: { maxZoom: 15 }
    },
    trackUserLocation: {
      type: Boolean,
      default: !1
    },
    showAccuracyCircle: {
      type: Boolean,
      default: !0
    },
    showUserLocation: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = s(O), r = s(j), o = new Ae({
      positionOptions: e.positionOptions,
      fitBoundsOptions: e.fitBoundsOptions,
      trackUserLocation: e.trackUserLocation,
      showAccuracyCircle: e.showAccuracyCircle,
      showUserLocation: e.showUserLocation
    });
    Z(v(e, "position"), t, o), H(() => {
      var a;
      return r.value && ((a = t.value) == null ? void 0 : a.removeControl(o));
    });
  },
  render() {
  }
}), ke = /* @__PURE__ */ p({
  name: "MglNavigationControl",
  props: {
    position: {
      type: String,
      default: W.TOP_RIGHT,
      validator: (e) => D.indexOf(e) !== -1
    },
    showCompass: { type: Boolean, default: !0 },
    showZoom: { type: Boolean, default: !0 },
    visualizePitch: Boolean
  },
  setup(e) {
    const t = s(O), r = s(j), o = new Re({ showCompass: e.showCompass, showZoom: e.showZoom, visualizePitch: e.visualizePitch });
    Z(v(e, "position"), t, o), H(() => {
      var a;
      return r.value && ((a = t.value) == null ? void 0 : a.removeControl(o));
    });
  },
  render() {
  }
});
var he = /* @__PURE__ */ ((e) => (e.IMPERIAL = "imperial", e.METRIC = "metric", e.NAUTICAL = "nautical", e))(he || {});
const je = Object.values(he), De = /* @__PURE__ */ p({
  name: "MglScaleControl",
  props: {
    position: {
      type: String,
      validator: (e) => D.indexOf(e) !== -1
    },
    maxWidth: { type: Number, default: 100 },
    unit: {
      type: String,
      default: "metric",
      validator: (e) => je.indexOf(e) !== -1
    }
  },
  setup(e) {
    const t = s(O), r = s(j), o = new Ee({ maxWidth: e.maxWidth, unit: e.unit });
    Z(v(e, "position"), t, o), H(() => {
      var a;
      return r.value && ((a = t.value) == null ? void 0 : a.removeControl(o));
    });
  },
  render() {
  }
});
var ae = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.TEXT = "text", e.MDI = "mdi", e.SIMPLE_ICON = "simple-icons", e))(ae || {});
const Fe = Object.values(ae), X = {
  text: void 0,
  mdi: {
    size: 21,
    viewbox: "0 0 24 24"
  },
  "simple-icons": {
    size: 21,
    viewbox: "0 0 24 24"
  },
  default: {
    size: 0,
    viewbox: "0 0 0 0"
  }
}, re = /* @__PURE__ */ p({
  name: "MglButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (e) => Fe.indexOf(e) !== -1
    },
    path: {
      type: String
    },
    size: Number,
    viewbox: String
  },
  slots: Object,
  setup(e, { slots: t }) {
    !e.path && e.type !== "text" && _("property `path` must be set on MaplibreButton");
    const r = z(X[e.type] || X.default);
    return m(() => e.type, (o) => r.value = X[o] || X.default), () => {
      var o, a;
      return e.type === "text" ? w("button", { type: "button" }, (o = t.default) == null ? void 0 : o.call(t, {})) : w(
        "button",
        { type: "button", class: "maplibregl-ctrl-icon" },
        [
          w(
            "svg",
            {
              width: e.size || r.value.size,
              height: e.size || r.value.size,
              viewBox: e.viewbox || r.value.viewbox
            },
            w("path", { fill: "currentColor", d: e.path })
          ),
          (a = t.default) == null ? void 0 : a.call(t, {})
        ]
      );
    };
  }
});
function de(e) {
  return e && !!e.stopPropagation;
}
const Ve = /* @__PURE__ */ p({
  name: "MglStyleSwitchControl",
  props: {
    position: {
      type: String,
      validator: (e) => D.indexOf(e) !== -1
    },
    mapStyles: {
      type: Array,
      required: !0,
      default: []
    },
    modelValue: {
      type: Object
    },
    isOpen: {
      type: Boolean,
      default: void 0
    }
  },
  slots: Object,
  emits: ["update:modelValue", "update:isOpen"],
  setup(e, { emit: t, slots: r }) {
    const o = s(O), a = s(j), i = s(T), l = s(le), d = z(!1), u = z(e.isOpen === void 0 ? !1 : e.isOpen), R = Q(e.modelValue === void 0 ? e.mapStyles.length ? e.mapStyles[0] : null : e.modelValue), S = new te(d, !1), B = b.bind(null, !1);
    function h() {
      const f = o.value.getStyle().name;
      for (let n = 0, c = e.mapStyles.length; n < c; n++)
        if (e.mapStyles[n].name === f) {
          C(e.mapStyles[n]);
          break;
        }
    }
    m(i, (f) => {
      f && h();
    }, { immediate: !0 }), o.value.on("style.load", h), document.addEventListener("click", B), Z(v(e, "position"), o, S), e.modelValue !== void 0 && m(v(e, "modelValue"), (f) => {
      f !== void 0 && (R.value = f);
    }), e.isOpen !== void 0 && m(v(e, "isOpen"), (f) => {
      f !== void 0 && (u.value = f);
    }), H(() => {
      a.value && (o.value.removeControl(S), o.value.off("style.load", h)), document.removeEventListener("click", B);
    });
    function C(f) {
      var n;
      ((n = R.value) == null ? void 0 : n.name) !== f.name && (l.emit("styleSwitched", f), o.value.setStyle(f.style, { diff: !1 }), e.modelValue === void 0 && (R.value = f), t("update:modelValue", f), b(!1));
    }
    function b(f, n) {
      de(n) ? n.stopPropagation() : de(f) && f.stopPropagation(), !(e.isOpen !== void 0 && e.isOpen === f || u.value === f) && (e.isOpen === void 0 ? (u.value = typeof f == "boolean" ? f : !u.value, t("update:isOpen", u.value)) : t("update:isOpen", typeof f == "boolean" ? f : !e.isOpen));
    }
    return () => {
      if (!d.value)
        return M("style-switch-control");
      const f = {
        isOpen: u,
        toggleOpen: b,
        setStyle: C,
        mapStyles: e.mapStyles,
        currentStyle: R
      };
      return w(
        ge,
        { to: S.container },
        r.default ? r.default(f) : [
          r.button ? r.button(f) : w(re, {
            type: ae.MDI,
            path: "M12,18.54L19.37,12.8L21,14.07L12,21.07L3,14.07L4.62,12.81L12,18.54M12,16L3,9L12,2L21,9L12,16M12,4.53L6.26,9L12,13.47L17.74,9L12,4.53Z",
            class: ["maplibregl-ctrl-icon maplibregl-style-switch", u.value ? "is-open" : ""],
            onClick: b.bind(null, !0)
          }),
          r.styleList ? r.styleList(f) : w(
            "div",
            { class: ["maplibregl-style-list", u.value ? "is-open" : ""] },
            e.mapStyles.map((n) => {
              var c, V;
              return n.icon ? w(re, {
                type: ae.MDI,
                path: n.icon.path,
                class: ((c = R.value) == null ? void 0 : c.name) === n.name ? "is-active" : "",
                onClick: () => C(n)
              }, ce(n.label)) : w("button", {
                type: "button",
                class: ((V = R.value) == null ? void 0 : V.name) === n.name ? "is-active" : "",
                onClick: () => C(n)
              }, ce(n.label));
            })
          )
        ]
      );
    };
  },
  // just only for code assist
  template: `
		<slot>
		<slot name="button"></slot>
		<slot name="styleList"></slot>
		</slot>
	`
}), Ue = /* @__PURE__ */ p({
  name: "MglMarker",
  props: {
    coordinates: {
      type: [Object, Array],
      required: !0
    },
    offset: [Object, Array],
    anchor: String,
    color: String,
    // draggable        : Boolean as PropType<boolean>, todo implement feature
    clickTolerance: Number,
    rotation: Number,
    rotationAlignment: String,
    pitchAlignment: String,
    scale: Number
  },
  setup(e, { slots: t }) {
    const r = s(O), o = Object.keys(e).filter((i) => e[i] !== void 0 && P.MARKER_OPTION_KEYS.indexOf(i) !== -1).reduce((i, l) => (i[l] = J(e[l]), i), {}), a = new Me(o);
    return a.setLngLat(e.coordinates).addTo(r.value), A(fe, Q(a)), m(() => e.coordinates, (i) => a.setLngLat(i)), m(() => e.offset, (i) => a.setOffset(i || [0, 0])), m(() => e.pitchAlignment, (i) => a.setPitchAlignment(i || "auto")), m(() => e.rotationAlignment, (i) => a.setRotationAlignment(i || "auto")), H(a.remove.bind(a)), () => [
      w("div", t.default ? t.default({}) : void 0)
    ];
  }
}), Ge = /* @__PURE__ */ p({
  name: "MglPopup",
  emits: ["open", "close"],
  props: {
    coordinates: {
      type: [Object, Array],
      required: !1
    },
    closeButton: {
      type: Boolean,
      required: !1,
      default: !0
    },
    closeOnClick: {
      type: Boolean,
      required: !1,
      default: !0
    },
    closeOnMove: {
      type: Boolean,
      required: !1,
      default: !1
    },
    focusAfterOpen: {
      type: Boolean,
      required: !1,
      default: !0
    },
    anchor: {
      type: String,
      required: !1
    },
    offset: {
      type: [Number, Object, Array],
      required: !1
    },
    className: {
      type: String,
      required: !1
    },
    maxWidth: {
      type: String,
      default: "240px"
    },
    text: {
      type: String,
      required: !1
    }
  },
  setup(e, { slots: t, emit: r }) {
    const o = s(O), a = s(fe), i = z(), l = Object.keys(e).filter((u) => e[u] !== void 0 && P.POPUP_OPTION_KEYS.indexOf(u) !== -1).reduce((u, R) => (u[R] = J(e[R]), u), {}), d = new Ie(l);
    return a && a.value ? a.value.setPopup(d) : e.coordinates && o && d.setLngLat(e.coordinates).addTo(o.value), e.text && d.setText(e.text), d.on("open", () => r("open")), d.on("close", () => r("close")), m(() => e.coordinates, (u) => {
      u && d.setLngLat(u);
    }), m(() => e.text, (u) => d.setText(u || "")), m(() => e.offset, (u) => d.setOffset(u)), m(() => e.maxWidth, (u) => d.setMaxWidth(u)), me(() => {
      i.value && !e.text && d.setDOMContent(i.value);
    }), () => [
      w("div", { ref: i }, t.default ? t.default() : void 0)
    ];
  }
});
class Y {
  constructor() {
    L(this, "unmountHandlers", /* @__PURE__ */ new Map());
  }
  registerUnmountHandler(t, r) {
    this.unmountHandlers.set(t, r);
  }
  unregisterUnmountHandler(t) {
    this.unmountHandlers.delete(t);
  }
  unmount() {
    this.unmountHandlers.forEach((t) => t());
  }
}
const $ = class $ {
  static genSourceOpts(t, r, o) {
    return Object.keys(r).filter((a) => r[a] !== void 0 && o.indexOf(a) !== -1).reduce((a, i) => (a[i] = J(r[i]), a), { type: t });
  }
  static getSourceRef(t, r) {
    const o = typeof r == "string", a = String(t) + (o ? r : "");
    let i = $.REFS.get(a);
    return i || (i = z(o ? null : void 0), $.REFS.set(a, i)), i;
  }
};
L($, "REFS", /* @__PURE__ */ new Map());
let E = $;
function K(e, t, r, o, a) {
  const i = s(O), l = s(T), d = s(le);
  function u() {
    l.value && (i.value.addSource(t.sourceId, E.genSourceOpts(r, t, o)), e.value = i.value.getSource(t.sourceId));
  }
  function R() {
    e.value = null;
  }
  return m(l, u, { immediate: !0 }), i.value.on("style.load", u), d.on("styleSwitched", R), H(() => {
    l.value && (a.unmount(), i.value.removeSource(t.sourceId)), i.value.off("style.load", u), d.off("styleSwitched", R);
  });
}
const We = q({
  animate: void 0,
  canvas: void 0,
  coordinates: void 0
}), Ze = /* @__PURE__ */ p({
  name: "MglCanvasSource",
  props: {
    sourceId: {
      type: String,
      required: !0
    },
    coordinates: Array,
    animate: Boolean,
    canvas: [Object, String]
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = s(I), o = E.getSourceRef(r, e.sourceId), a = new Y();
    return A(N, e.sourceId), A(G, a), K(o, e, "canvas", We, a), m(v(e, "coordinates"), (i) => {
      var l;
      i && ((l = o.value) == null || l.setCoordinates(i));
    }), () => [
      M("Canvas Source"),
      o.value && t.default ? t.default({}) : void 0
    ];
  }
}), qe = q({
  data: void 0,
  maxzoom: void 0,
  attribution: void 0,
  buffer: void 0,
  tolerance: void 0,
  cluster: void 0,
  clusterRadius: void 0,
  clusterMaxZoom: void 0,
  clusterMinPoints: void 0,
  clusterProperties: void 0,
  lineMetrics: void 0,
  generateId: void 0,
  promoteId: void 0,
  filter: void 0
}), Ye = /* @__PURE__ */ p({
  name: "MglGeoJsonSource",
  props: {
    sourceId: {
      type: String,
      required: !0
    },
    data: [Object, String],
    maxzoom: Number,
    attribution: String,
    buffer: Number,
    tolerance: Number,
    cluster: [Number, Boolean],
    clusterRadius: Number,
    clusterMaxZoom: Number,
    clusterMinPoints: Number,
    clusterProperties: Object,
    lineMetrics: Boolean,
    generateId: Boolean,
    promoteId: [Object, String],
    filter: [Array, String, Object]
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = s(I), o = E.getSourceRef(r, e.sourceId), a = new Y();
    return A(N, e.sourceId), A(G, a), K(o, e, "geojson", qe, a), m(v(e, "data"), (i) => {
      var l;
      return (l = o.value) == null ? void 0 : l.setData(i || { type: "FeatureCollection", features: [] });
    }), () => [
      M("GeoJSON Source"),
      o.value && t.default ? t.default({}) : void 0
    ];
  }
}), Ke = q({
  url: void 0,
  coordinates: void 0
}), $e = /* @__PURE__ */ p({
  name: "MglImageSource",
  props: {
    sourceId: {
      type: String,
      required: !0
    },
    url: String,
    coordinates: Array
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = s(I), o = E.getSourceRef(r, e.sourceId), a = new Y();
    return A(N, e.sourceId), A(G, a), K(o, e, "image", Ke, a), m(v(e, "coordinates"), (i) => {
      var l;
      i && ((l = o.value) == null || l.setCoordinates(i));
    }), () => [
      M("Image Source"),
      o.value && t.default ? t.default({}) : void 0
    ];
  }
}), Je = q({
  url: void 0,
  tiles: void 0,
  bounds: void 0,
  minzoom: void 0,
  maxzoom: void 0,
  tileSize: void 0,
  scheme: void 0,
  attribution: void 0,
  volatile: void 0
}), Xe = /* @__PURE__ */ p({
  name: "MglRasterSource",
  props: {
    sourceId: {
      type: String,
      required: !0
    },
    url: String,
    tiles: Array,
    bounds: Array,
    minzoom: Number,
    maxzoom: Number,
    tileSize: Number,
    scheme: String,
    attribution: String,
    volatile: Boolean
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = s(I), o = E.getSourceRef(r, e.sourceId), a = new Y();
    return A(N, e.sourceId), A(G, a), K(o, e, "raster", Je, a), () => [
      M("Raster Source"),
      o.value && t.default ? t.default({}) : void 0
    ];
  }
}), Qe = q({
  url: void 0,
  tiles: void 0,
  bounds: void 0,
  minzoom: void 0,
  maxzoom: void 0,
  tileSize: void 0,
  attribution: void 0,
  encoding: void 0,
  volatile: void 0
}), et = /* @__PURE__ */ p({
  name: "MglRasterDemSource",
  props: {
    sourceId: {
      type: String,
      required: !0
    },
    url: String,
    tiles: Array,
    bounds: Array,
    minzoom: Number,
    maxzoom: Number,
    tileSize: Number,
    attribution: String,
    encoding: String,
    volatile: Boolean
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = s(I), o = E.getSourceRef(r, e.sourceId), a = new Y();
    return A(N, e.sourceId), A(G, a), K(o, e, "raster-dem", Qe, a), () => [
      M("RasterDem Source"),
      o.value && t.default ? t.default({}) : void 0
    ];
  }
}), tt = q({
  url: void 0,
  tiles: void 0,
  bounds: void 0,
  scheme: void 0,
  minzoom: void 0,
  maxzoom: void 0,
  attribution: void 0,
  promoteId: void 0,
  volatile: void 0
}), at = /* @__PURE__ */ p({
  name: "MglVectorSource",
  props: {
    sourceId: {
      type: String,
      required: !0
    },
    url: String,
    tiles: Array,
    bounds: Array,
    scheme: String,
    minzoom: Number,
    maxzoom: Number,
    attribution: String,
    promoteId: [Object, String],
    volatile: Boolean
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = s(I), o = E.getSourceRef(r, e.sourceId), a = new Y();
    return A(N, e.sourceId), A(G, a), K(o, e, "vector", tt, a), m(v(e, "tiles"), (i) => {
      var l;
      return (l = o.value) == null ? void 0 : l.setTiles(i || []);
    }), m(v(e, "url"), (i) => {
      var l;
      return (l = o.value) == null ? void 0 : l.setUrl(i || "");
    }), () => [
      M("Vector Source"),
      o.value && t.default ? t.default({}) : void 0
    ];
  }
}), ot = q({
  urls: void 0,
  coordinates: void 0
}), rt = /* @__PURE__ */ p({
  name: "MglVideoSource",
  props: {
    sourceId: {
      type: String,
      required: !0
    },
    urls: Array,
    coordinates: Array
  },
  slots: Object,
  setup(e, { slots: t }) {
    const r = s(I), o = E.getSourceRef(r, e.sourceId), a = new Y();
    return A(N, e.sourceId), A(G, a), K(o, e, "video", ot, a), m(v(e, "coordinates"), (i) => {
      var l;
      i && ((l = o.value) == null || l.setCoordinates(i));
    }), () => [
      M("Video Source"),
      o.value && t.default ? t.default({}) : void 0
    ];
  }
}), x = class x {
  static genLayerOpts(t, r, o, a) {
    return Object.keys(o).filter((i) => o[i] !== void 0 && x.SOURCE_OPTS.indexOf(i) !== -1).reduce((i, l) => (i[l === "sourceLayer" ? "source-layer" : l] = J(o[l]), i), { type: r, source: o.source || a, id: t });
  }
  static registerLayerEvents(t, r, o) {
    if (o.props)
      for (let a = 0, i = x.LAYER_EVENTS.length; a < i; a++) {
        const l = "on" + x.LAYER_EVENTS[a].charAt(0).toUpperCase() + x.LAYER_EVENTS[a].substr(1);
        o.props[l] && t.on(x.LAYER_EVENTS[a], r, o.props[l]);
      }
  }
  static unregisterLayerEvents(t, r, o) {
    if (o.props)
      for (let a = 0, i = x.LAYER_EVENTS.length; a < i; a++) {
        const l = "on" + x.LAYER_EVENTS[a].charAt(0).toUpperCase() + x.LAYER_EVENTS[a].substr(1);
        o.props[l] && t.off(x.LAYER_EVENTS[a], r, o.props[l]);
      }
  }
};
L(x, "SOURCE_OPTS", [
  "metadata",
  "ref",
  "source",
  "sourceLayer",
  "minzoom",
  "maxzoom",
  "interactive",
  "filter",
  "layout",
  "paint"
]), L(x, "LAYER_EVENTS", [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "contextmenu",
  "touchstart",
  "touchend",
  "touchcancel"
]), L(x, "SHARED", {
  props: {
    layerId: {
      type: String,
      required: !0
    },
    source: [String, Object],
    metadata: [Object, Array, String, Number],
    ref: String,
    sourceLayer: String,
    minzoom: Number,
    maxzoom: Number,
    interactive: Boolean,
    filter: Array,
    before: String
  },
  emits: [
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    "mousemove",
    "mouseenter",
    "mouseleave",
    "mouseover",
    "mouseout",
    "contextmenu",
    "touchstart",
    "touchend",
    "touchcancel"
  ]
});
let y = x;
function F(e, t) {
  const r = s(O), o = s(T), a = s(G);
  function i() {
    o.value && (t && y.unregisterLayerEvents(r.value, e, t.vnode), r.value.getLayer(e) && r.value.removeLayer(e));
  }
  a.registerUnmountHandler(e, i), H(() => {
    a.unregisterUnmountHandler(e), i();
  });
}
const it = /* @__PURE__ */ p({
  name: "MglBackgroundLayer",
  props: {
    ...y.SHARED.props,
    layout: Object,
    paint: Object
  },
  emits: [...y.SHARED.emits],
  setup(e) {
    const t = s(N);
    if (!t && !e.source) {
      _("Background Layer: layer must be used inside source tag or source prop must be set");
      return;
    }
    const r = s(O), o = s(T), a = s(I), i = E.getSourceRef(a, e.source || t);
    return F(e.layerId), m([o, i], ([l, d]) => {
      l && (d || d === void 0) && r.value.addLayer(y.genLayerOpts(e.layerId, "background", e, t), e.before || void 0);
    }, { immediate: !0 }), () => M("Background Layer");
  }
}), nt = /* @__PURE__ */ p({
  name: "MglCircleLayer",
  props: {
    ...y.SHARED.props,
    layout: Object,
    paint: Object
  },
  emits: [...y.SHARED.emits],
  setup(e) {
    const t = s(N);
    if (!t && !e.source) {
      _("Circle Layer: layer must be used inside source tag or source prop must be set");
      return;
    }
    const r = k(), o = s(O), a = s(T), i = s(I), l = E.getSourceRef(i, e.source || t);
    return F(e.layerId, r), m([a, l], ([d, u]) => {
      d && (u || u === void 0) && (o.value.addLayer(y.genLayerOpts(e.layerId, "circle", e, t), e.before || void 0), y.registerLayerEvents(o.value, e.layerId, r.vnode));
    }, { immediate: !0 }), () => M("Circle Layer");
  }
}), lt = /* @__PURE__ */ p({
  name: "MglFillLayer",
  props: {
    ...y.SHARED.props,
    layout: Object,
    paint: Object
  },
  emits: [...y.SHARED.emits],
  setup(e) {
    const t = s(N);
    if (!t && !e.source) {
      _("Fill Layer: layer must be used inside source tag or source prop must be set");
      return;
    }
    const r = k(), o = s(O), a = s(T), i = s(I), l = E.getSourceRef(i, e.source || t);
    return F(e.layerId, r), m([a, l], ([d, u]) => {
      d && (u || u === void 0) && (o.value.addLayer(y.genLayerOpts(e.layerId, "fill", e, t), e.before || void 0), y.registerLayerEvents(o.value, e.layerId, r.vnode));
    }, { immediate: !0 }), () => M("Fill Layer");
  }
}), st = /* @__PURE__ */ p({
  name: "MglFillExtrusionLayer",
  props: {
    ...y.SHARED.props,
    layout: Object,
    paint: Object
  },
  emits: [...y.SHARED.emits],
  setup(e) {
    const t = s(N);
    if (!t && !e.source) {
      _("Fill Extrude Layer: layer must be used inside source tag or source prop must be set");
      return;
    }
    const r = k(), o = s(O), a = s(T), i = s(I), l = E.getSourceRef(i, e.source || t);
    return F(e.layerId, r), m([a, l], ([d, u]) => {
      d && (u || u === void 0) && (o.value.addLayer(y.genLayerOpts(e.layerId, "fill-extrusion", e, t), e.before || void 0), y.registerLayerEvents(o.value, e.layerId, r.vnode));
    }, { immediate: !0 }), () => M("Fill Extrusion Layer");
  }
}), ut = /* @__PURE__ */ p({
  name: "MglHeatmapLayer",
  props: {
    ...y.SHARED.props,
    layout: Object,
    paint: Object
  },
  emits: [...y.SHARED.emits],
  setup(e) {
    const t = s(N);
    if (!t && !e.source) {
      _("Heatmap Layer: layer must be used inside source tag or source prop must be set");
      return;
    }
    const r = k(), o = s(O), a = s(T), i = s(I), l = E.getSourceRef(i, e.source || t);
    return F(e.layerId, r), m([a, l], ([d, u]) => {
      d && (u || u === void 0) && (o.value.addLayer(y.genLayerOpts(e.layerId, "heatmap", e, t), e.before || void 0), y.registerLayerEvents(o.value, e.layerId, r.vnode));
    }, { immediate: !0 }), () => M("Heatmap Layer");
  }
}), ct = /* @__PURE__ */ p({
  name: "MglHillshadeLayer",
  props: {
    ...y.SHARED.props,
    layout: Object,
    paint: Object
  },
  emits: [...y.SHARED.emits],
  setup(e) {
    const t = s(N);
    if (!t && !e.source) {
      _("Hillshade Layer: layer must be used inside source tag or source prop must be set");
      return;
    }
    const r = k(), o = s(O), a = s(T), i = s(I), l = E.getSourceRef(i, e.source || t);
    return F(e.layerId, r), m([a, l], ([d, u]) => {
      d && (u || u === void 0) && (o.value.addLayer(y.genLayerOpts(e.layerId, "hillshade", e, t), e.before || void 0), y.registerLayerEvents(o.value, e.layerId, r.vnode));
    }, { immediate: !0 }), () => M("Hillshade Layer");
  }
}), dt = /* @__PURE__ */ p({
  name: "MglLineLayer",
  props: {
    ...y.SHARED.props,
    layout: Object,
    paint: Object
  },
  emits: [...y.SHARED.emits],
  setup(e) {
    const t = s(N);
    if (!t && !e.source) {
      _("Line Layer: layer must be used inside source tag or source prop must be set");
      return;
    }
    const r = k(), o = s(O), a = s(T), i = s(I), l = E.getSourceRef(i, e.source || t);
    return F(e.layerId, r), m([a, l], ([d, u]) => {
      d && (u || u === void 0) && (o.value.addLayer(y.genLayerOpts(e.layerId, "line", e, t), e.before || void 0), y.registerLayerEvents(o.value, e.layerId, r.vnode));
    }, { immediate: !0 }), () => M("Line Layer");
  }
}), mt = /* @__PURE__ */ p({
  name: "MglRasterLayer",
  props: {
    ...y.SHARED.props,
    layout: Object,
    paint: Object
  },
  emits: [...y.SHARED.emits],
  setup(e) {
    const t = s(N);
    if (!t && !e.source) {
      _("Raster Layer: layer must be used inside source tag or source prop must be set");
      return;
    }
    const r = k(), o = s(O), a = s(T), i = s(I), l = E.getSourceRef(i, e.source || t);
    return F(e.layerId, r), m([a, l], ([d, u]) => {
      d && (u || u === void 0) && (o.value.addLayer(y.genLayerOpts(e.layerId, "raster", e, t), e.before || void 0), y.registerLayerEvents(o.value, e.layerId, r.vnode));
    }, { immediate: !0 }), () => M("Raster Layer");
  }
}), gt = /* @__PURE__ */ p({
  name: "MglSymbolLayer",
  props: {
    ...y.SHARED.props,
    layout: Object,
    paint: Object
  },
  emits: [...y.SHARED.emits],
  setup(e) {
    const t = s(N);
    if (!t && !e.source) {
      _("Symbol Layer: layer must be used inside source tag or source prop must be set");
      return;
    }
    const r = k(), o = s(O), a = s(T), i = s(I), l = E.getSourceRef(i, e.source || t);
    return F(e.layerId, r), m([a, l], ([d, u]) => {
      d && (u || u === void 0) && (o.value.addLayer(y.genLayerOpts(e.layerId, "symbol", e, t), e.before || void 0), y.registerLayerEvents(o.value, e.layerId, r.vnode));
    }, { immediate: !0 }), () => M("Symbol Layer");
  }
}), ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MglAttributionControl: Pe,
  MglBackgroundLayer: it,
  MglButton: re,
  MglCanvasSource: Ze,
  MglCircleLayer: nt,
  MglCustomControl: Te,
  MglFillExtrusionLayer: st,
  MglFillLayer: lt,
  MglFrameRateControl: _e,
  MglFullscreenControl: He,
  MglGeoJsonSource: Ye,
  MglGeolocationControl: ze,
  MglHeatmapLayer: ut,
  MglHillshadeLayer: ct,
  MglImageSource: $e,
  MglLineLayer: dt,
  MglMap: we,
  MglMarker: Ue,
  MglNavigationControl: ke,
  MglPopup: Ge,
  MglRasterDemSource: et,
  MglRasterLayer: mt,
  MglRasterSource: Xe,
  MglScaleControl: De,
  MglStyleSwitchControl: Ve,
  MglSymbolLayer: gt,
  MglVectorSource: at,
  MglVideoSource: rt
}, Symbol.toStringTag, { value: "Module" })), Lt = function(t) {
  Object.entries(ft).forEach(([r, o]) => {
    t.component(r, o);
  });
};
export {
  St as AllOptions,
  q as AllSourceOptions,
  Pe as MglAttributionControl,
  it as MglBackgroundLayer,
  re as MglButton,
  Ze as MglCanvasSource,
  nt as MglCircleLayer,
  Te as MglCustomControl,
  g as MglDefaults,
  st as MglFillExtrusionLayer,
  lt as MglFillLayer,
  _e as MglFrameRateControl,
  He as MglFullscreenControl,
  Ye as MglGeoJsonSource,
  ze as MglGeolocationControl,
  ut as MglHeatmapLayer,
  ct as MglHillshadeLayer,
  $e as MglImageSource,
  dt as MglLineLayer,
  we as MglMap,
  Ue as MglMarker,
  ke as MglNavigationControl,
  Ge as MglPopup,
  et as MglRasterDemSource,
  mt as MglRasterLayer,
  Xe as MglRasterSource,
  De as MglScaleControl,
  Ve as MglStyleSwitchControl,
  gt as MglSymbolLayer,
  at as MglVectorSource,
  rt as MglVideoSource,
  W as Position,
  I as componentIdSymbol,
  Lt as default,
  le as emitterSymbol,
  j as isInitializedSymbol,
  T as isLoadedSymbol,
  O as mapSymbol,
  fe as markerSymbol,
  N as sourceIdSymbol,
  G as sourceLayerRegistry,
  F as useDisposableLayer,
  bt as useMap,
  Z as usePositionWatcher,
  K as useSource
};
//# sourceMappingURL=vue-maplibre-gl.es.js.map
