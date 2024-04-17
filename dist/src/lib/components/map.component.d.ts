import { PropType, SlotsType } from 'vue';
import { FitBoundsOptions, GestureOptions, LngLatBoundsLike, LngLatLike, RequestTransformFunction } from 'maplibre-gl';
import { ValidLanguages } from '../../lib/types';
import { Position } from '../../lib/components/controls/position.enum';
declare const _default: import("vue").DefineComponent<{
    width: {
        type: PropType<string | number>;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        default: string;
    };
    antialias: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    attributionControl: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    bearing: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    bearingSnap: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    bounds: {
        type: PropType<LngLatBoundsLike>;
        default: () => [number, number, number, number] | {
            _ne: {
                lng: number;
                lat: number;
                wrap: () => import("maplibre-gl").LngLat;
                toArray: () => [number, number];
                toString: () => string;
                distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
            };
            _sw: {
                lng: number;
                lat: number;
                wrap: () => import("maplibre-gl").LngLat;
                toArray: () => [number, number];
                toString: () => string;
                distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
            };
            setNorthEast: (ne: LngLatLike) => import("maplibre-gl").LngLatBounds;
            setSouthWest: (sw: LngLatLike) => import("maplibre-gl").LngLatBounds;
            extend: (obj: LngLatBoundsLike | LngLatLike) => import("maplibre-gl").LngLatBounds;
            getCenter: () => import("maplibre-gl").LngLat;
            getSouthWest: () => import("maplibre-gl").LngLat;
            getNorthEast: () => import("maplibre-gl").LngLat;
            getNorthWest: () => import("maplibre-gl").LngLat;
            getSouthEast: () => import("maplibre-gl").LngLat;
            getWest: () => number;
            getSouth: () => number;
            getEast: () => number;
            getNorth: () => number;
            toArray: () => [number, number][];
            toString: () => string;
            isEmpty: () => boolean;
            contains: (lnglat: LngLatLike) => boolean;
        } | [[number, number] | {
            lng: number;
            lat: number;
            wrap: () => import("maplibre-gl").LngLat;
            toArray: () => [number, number];
            toString: () => string;
            distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
        } | {
            lng: number;
            lat: number;
        } | {
            lon: number;
            lat: number;
        }, [number, number] | {
            lng: number;
            lat: number;
            wrap: () => import("maplibre-gl").LngLat;
            toArray: () => [number, number];
            toString: () => string;
            distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
        } | {
            lng: number;
            lat: number;
        } | {
            lon: number;
            lat: number;
        }] | undefined;
    };
    boxZoom: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    center: {
        type: PropType<LngLatLike>;
        default: () => [number, number] | {
            lng: number;
            lat: number;
            wrap: () => import("maplibre-gl").LngLat;
            toArray: () => [number, number];
            toString: () => string;
            distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
        } | {
            lng: number;
            lat: number;
        } | {
            lon: number;
            lat: number;
        } | undefined;
    };
    clickTolerance: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    collectResourceTiming: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    crossSourceCollisions: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    customAttribution: {
        type: PropType<string | string[]>;
        default: () => string | string[] | undefined;
    };
    dragPan: {
        type: PropType<boolean>;
        default: () => boolean | {
            linearity?: number | undefined;
            easing?: ((t: number) => number) | undefined;
            deceleration?: number | undefined;
            maxSpeed?: number | undefined;
        } | undefined;
    };
    dragRotate: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    doubleClickZoom: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    hash: {
        type: PropType<string | boolean>;
        default: () => string | boolean | undefined;
    };
    fadeDuration: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    failIfMajorPerformanceCaveat: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    fitBoundsOptions: {
        type: PropType<FitBoundsOptions>;
        default: () => {
            duration?: number | undefined;
            easing?: ((_: number) => number) | undefined;
            offset?: [number, number] | {
                x: number;
                y: number;
                clone: () => import("@mapbox/point-geometry");
                add: (p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                _add: (p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                sub: (p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                _sub: (p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                multiByPoint: (p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                divByPoint: (p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                mult: (k: number) => import("@mapbox/point-geometry");
                _mult: (k: number) => import("@mapbox/point-geometry");
                div: (k: number) => import("@mapbox/point-geometry");
                _div: (k: number) => import("@mapbox/point-geometry");
                rotate: (k: number) => import("@mapbox/point-geometry");
                _rotate: (k: number) => import("@mapbox/point-geometry");
                rotateAround: (k: number, p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                _rotateAround: (k: number, p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                matMult: (m: number[]) => import("@mapbox/point-geometry");
                _matMult: (m: number[]) => import("@mapbox/point-geometry");
                unit: () => import("@mapbox/point-geometry");
                _unit: () => import("@mapbox/point-geometry");
                perp: () => import("@mapbox/point-geometry");
                _perp: () => import("@mapbox/point-geometry");
                round: () => import("@mapbox/point-geometry");
                _round: () => import("@mapbox/point-geometry");
                mag: () => number;
                equals: (other: import("@mapbox/point-geometry")) => boolean;
                dist: (p: import("@mapbox/point-geometry")) => number;
                distSqr: (p: import("@mapbox/point-geometry")) => number;
                angle: () => number;
                angleTo: (b: import("@mapbox/point-geometry")) => number;
                angleWith: (b: import("@mapbox/point-geometry")) => number;
                angleWithSep: (x: number, y: number) => number;
            } | undefined;
            animate?: boolean | undefined;
            essential?: boolean | undefined;
            freezeElevation?: boolean | undefined;
            center?: [number, number] | {
                lng: number;
                lat: number;
                wrap: () => import("maplibre-gl").LngLat;
                toArray: () => [number, number];
                toString: () => string;
                distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
            } | {
                lng: number;
                lat: number;
            } | {
                lon: number;
                lat: number;
            } | undefined;
            zoom?: number | undefined;
            bearing?: number | undefined;
            pitch?: number | undefined;
            around?: [number, number] | {
                lng: number;
                lat: number;
                wrap: () => import("maplibre-gl").LngLat;
                toArray: () => [number, number];
                toString: () => string;
                distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
            } | {
                lng: number;
                lat: number;
            } | {
                lon: number;
                lat: number;
            } | undefined;
            curve?: number | undefined;
            minZoom?: number | undefined;
            speed?: number | undefined;
            screenSpeed?: number | undefined;
            maxDuration?: number | undefined;
            padding?: number | {
                top: number;
                bottom?: number | undefined;
                left?: number | undefined;
                right?: number | undefined;
            } | {
                bottom: number;
                top?: number | undefined;
                left?: number | undefined;
                right?: number | undefined;
            } | {
                left: number;
                top?: number | undefined;
                bottom?: number | undefined;
                right?: number | undefined;
            } | {
                right: number;
                top?: number | undefined;
                bottom?: number | undefined;
                left?: number | undefined;
            } | undefined;
            linear?: boolean | undefined;
            maxZoom?: number | undefined;
        } | undefined;
    };
    interactive: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    keyboard: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    locale: {
        type: PropType<Record<string, string>>;
        default: () => any;
    };
    language: {
        type: PropType<ValidLanguages | null>;
        default: () => ValidLanguages | null;
    };
    localIdeographFontFamily: {
        type: PropType<string>;
        default: () => string | undefined;
    };
    logoPosition: {
        type: PropType<Position>;
        validator: (val: any) => boolean;
        default: () => import("maplibre-gl").ControlPosition | undefined;
    };
    maxBounds: {
        type: PropType<LngLatBoundsLike>;
        default: () => [number, number, number, number] | {
            _ne: {
                lng: number;
                lat: number;
                wrap: () => import("maplibre-gl").LngLat;
                toArray: () => [number, number];
                toString: () => string;
                distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
            };
            _sw: {
                lng: number;
                lat: number;
                wrap: () => import("maplibre-gl").LngLat;
                toArray: () => [number, number];
                toString: () => string;
                distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
            };
            setNorthEast: (ne: LngLatLike) => import("maplibre-gl").LngLatBounds;
            setSouthWest: (sw: LngLatLike) => import("maplibre-gl").LngLatBounds;
            extend: (obj: LngLatBoundsLike | LngLatLike) => import("maplibre-gl").LngLatBounds;
            getCenter: () => import("maplibre-gl").LngLat;
            getSouthWest: () => import("maplibre-gl").LngLat;
            getNorthEast: () => import("maplibre-gl").LngLat;
            getNorthWest: () => import("maplibre-gl").LngLat;
            getSouthEast: () => import("maplibre-gl").LngLat;
            getWest: () => number;
            getSouth: () => number;
            getEast: () => number;
            getNorth: () => number;
            toArray: () => [number, number][];
            toString: () => string;
            isEmpty: () => boolean;
            contains: (lnglat: LngLatLike) => boolean;
        } | [[number, number] | {
            lng: number;
            lat: number;
            wrap: () => import("maplibre-gl").LngLat;
            toArray: () => [number, number];
            toString: () => string;
            distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
        } | {
            lng: number;
            lat: number;
        } | {
            lon: number;
            lat: number;
        }, [number, number] | {
            lng: number;
            lat: number;
            wrap: () => import("maplibre-gl").LngLat;
            toArray: () => [number, number];
            toString: () => string;
            distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
        } | {
            lng: number;
            lat: number;
        } | {
            lon: number;
            lat: number;
        }] | undefined;
    };
    maxPitch: {
        type: PropType<number>;
        default: () => number | null | undefined;
    };
    maxZoom: {
        type: PropType<number>;
        default: () => number | null | undefined;
    };
    minPitch: {
        type: PropType<number>;
        default: () => number | null | undefined;
    };
    minZoom: {
        type: PropType<number>;
        default: () => number | null | undefined;
    };
    preserveDrawingBuffer: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    pitch: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    pitchWithRotate: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    refreshExpiredTiles: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    renderWorldCopies: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    scrollZoom: {
        type: PropType<boolean>;
        default: () => boolean | {
            around: "center";
        } | undefined;
    };
    mapStyle: {
        type: PropType<string | object>;
        default: () => string | object;
    };
    trackResize: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    transformRequest: {
        type: PropType<RequestTransformFunction>;
        default: RequestTransformFunction | undefined;
    };
    touchZoomRotate: {
        type: PropType<boolean>;
        default: () => boolean | {
            around: "center";
        } | undefined;
    };
    touchPitch: {
        type: PropType<boolean>;
        default: () => boolean | {
            around: "center";
        } | undefined;
    };
    zoom: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    maxTileCacheSize: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    mapKey: {
        type: PropType<string | symbol>;
    };
    pixelRatio: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    cooperativeGestures: {
        type: PropType<boolean | GestureOptions>;
        default: () => boolean | {
            windowsHelpText?: string | undefined;
            macHelpText?: string | undefined;
            mobileHelpText?: string | undefined;
        } | undefined;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("map:error" | "map:load" | "map:idle" | "map:remove" | "map:render" | "map:resize" | "map:webglcontextlost" | "map:webglcontextrestored" | "map:dataloading" | "map:data" | "map:tiledataloading" | "map:sourcedataloading" | "map:styledataloading" | "map:sourcedata" | "map:styledata" | "map:boxzoomcancel" | "map:boxzoomstart" | "map:boxzoomend" | "map:touchcancel" | "map:touchmove" | "map:touchend" | "map:touchstart" | "map:click" | "map:contextmenu" | "map:dblclick" | "map:mousemove" | "map:mouseup" | "map:mousedown" | "map:mouseout" | "map:mouseover" | "map:movestart" | "map:move" | "map:moveend" | "map:zoomstart" | "map:zoom" | "map:zoomend" | "map:rotatestart" | "map:rotate" | "map:rotateend" | "map:dragstart" | "map:drag" | "map:dragend" | "map:pitchstart" | "map:pitch" | "map:pitchend" | "map:wheel")[], "map:error" | "map:load" | "map:idle" | "map:remove" | "map:render" | "map:resize" | "map:webglcontextlost" | "map:webglcontextrestored" | "map:dataloading" | "map:data" | "map:tiledataloading" | "map:sourcedataloading" | "map:styledataloading" | "map:sourcedata" | "map:styledata" | "map:boxzoomcancel" | "map:boxzoomstart" | "map:boxzoomend" | "map:touchcancel" | "map:touchmove" | "map:touchend" | "map:touchstart" | "map:click" | "map:contextmenu" | "map:dblclick" | "map:mousemove" | "map:mouseup" | "map:mousedown" | "map:mouseout" | "map:mouseover" | "map:movestart" | "map:move" | "map:moveend" | "map:zoomstart" | "map:zoom" | "map:zoomend" | "map:rotatestart" | "map:rotate" | "map:rotateend" | "map:dragstart" | "map:drag" | "map:dragend" | "map:pitchstart" | "map:pitch" | "map:pitchend" | "map:wheel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: PropType<string | number>;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        default: string;
    };
    antialias: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    attributionControl: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    bearing: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    bearingSnap: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    bounds: {
        type: PropType<LngLatBoundsLike>;
        default: () => [number, number, number, number] | {
            _ne: {
                lng: number;
                lat: number;
                wrap: () => import("maplibre-gl").LngLat;
                toArray: () => [number, number];
                toString: () => string;
                distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
            };
            _sw: {
                lng: number;
                lat: number;
                wrap: () => import("maplibre-gl").LngLat;
                toArray: () => [number, number];
                toString: () => string;
                distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
            };
            setNorthEast: (ne: LngLatLike) => import("maplibre-gl").LngLatBounds;
            setSouthWest: (sw: LngLatLike) => import("maplibre-gl").LngLatBounds;
            extend: (obj: LngLatBoundsLike | LngLatLike) => import("maplibre-gl").LngLatBounds;
            getCenter: () => import("maplibre-gl").LngLat;
            getSouthWest: () => import("maplibre-gl").LngLat;
            getNorthEast: () => import("maplibre-gl").LngLat;
            getNorthWest: () => import("maplibre-gl").LngLat;
            getSouthEast: () => import("maplibre-gl").LngLat;
            getWest: () => number;
            getSouth: () => number;
            getEast: () => number;
            getNorth: () => number;
            toArray: () => [number, number][];
            toString: () => string;
            isEmpty: () => boolean;
            contains: (lnglat: LngLatLike) => boolean;
        } | [[number, number] | {
            lng: number;
            lat: number;
            wrap: () => import("maplibre-gl").LngLat;
            toArray: () => [number, number];
            toString: () => string;
            distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
        } | {
            lng: number;
            lat: number;
        } | {
            lon: number;
            lat: number;
        }, [number, number] | {
            lng: number;
            lat: number;
            wrap: () => import("maplibre-gl").LngLat;
            toArray: () => [number, number];
            toString: () => string;
            distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
        } | {
            lng: number;
            lat: number;
        } | {
            lon: number;
            lat: number;
        }] | undefined;
    };
    boxZoom: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    center: {
        type: PropType<LngLatLike>;
        default: () => [number, number] | {
            lng: number;
            lat: number;
            wrap: () => import("maplibre-gl").LngLat;
            toArray: () => [number, number];
            toString: () => string;
            distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
        } | {
            lng: number;
            lat: number;
        } | {
            lon: number;
            lat: number;
        } | undefined;
    };
    clickTolerance: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    collectResourceTiming: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    crossSourceCollisions: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    customAttribution: {
        type: PropType<string | string[]>;
        default: () => string | string[] | undefined;
    };
    dragPan: {
        type: PropType<boolean>;
        default: () => boolean | {
            linearity?: number | undefined;
            easing?: ((t: number) => number) | undefined;
            deceleration?: number | undefined;
            maxSpeed?: number | undefined;
        } | undefined;
    };
    dragRotate: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    doubleClickZoom: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    hash: {
        type: PropType<string | boolean>;
        default: () => string | boolean | undefined;
    };
    fadeDuration: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    failIfMajorPerformanceCaveat: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    fitBoundsOptions: {
        type: PropType<FitBoundsOptions>;
        default: () => {
            duration?: number | undefined;
            easing?: ((_: number) => number) | undefined;
            offset?: [number, number] | {
                x: number;
                y: number;
                clone: () => import("@mapbox/point-geometry");
                add: (p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                _add: (p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                sub: (p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                _sub: (p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                multiByPoint: (p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                divByPoint: (p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                mult: (k: number) => import("@mapbox/point-geometry");
                _mult: (k: number) => import("@mapbox/point-geometry");
                div: (k: number) => import("@mapbox/point-geometry");
                _div: (k: number) => import("@mapbox/point-geometry");
                rotate: (k: number) => import("@mapbox/point-geometry");
                _rotate: (k: number) => import("@mapbox/point-geometry");
                rotateAround: (k: number, p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                _rotateAround: (k: number, p: import("@mapbox/point-geometry")) => import("@mapbox/point-geometry");
                matMult: (m: number[]) => import("@mapbox/point-geometry");
                _matMult: (m: number[]) => import("@mapbox/point-geometry");
                unit: () => import("@mapbox/point-geometry");
                _unit: () => import("@mapbox/point-geometry");
                perp: () => import("@mapbox/point-geometry");
                _perp: () => import("@mapbox/point-geometry");
                round: () => import("@mapbox/point-geometry");
                _round: () => import("@mapbox/point-geometry");
                mag: () => number;
                equals: (other: import("@mapbox/point-geometry")) => boolean;
                dist: (p: import("@mapbox/point-geometry")) => number;
                distSqr: (p: import("@mapbox/point-geometry")) => number;
                angle: () => number;
                angleTo: (b: import("@mapbox/point-geometry")) => number;
                angleWith: (b: import("@mapbox/point-geometry")) => number;
                angleWithSep: (x: number, y: number) => number;
            } | undefined;
            animate?: boolean | undefined;
            essential?: boolean | undefined;
            freezeElevation?: boolean | undefined;
            center?: [number, number] | {
                lng: number;
                lat: number;
                wrap: () => import("maplibre-gl").LngLat;
                toArray: () => [number, number];
                toString: () => string;
                distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
            } | {
                lng: number;
                lat: number;
            } | {
                lon: number;
                lat: number;
            } | undefined;
            zoom?: number | undefined;
            bearing?: number | undefined;
            pitch?: number | undefined;
            around?: [number, number] | {
                lng: number;
                lat: number;
                wrap: () => import("maplibre-gl").LngLat;
                toArray: () => [number, number];
                toString: () => string;
                distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
            } | {
                lng: number;
                lat: number;
            } | {
                lon: number;
                lat: number;
            } | undefined;
            curve?: number | undefined;
            minZoom?: number | undefined;
            speed?: number | undefined;
            screenSpeed?: number | undefined;
            maxDuration?: number | undefined;
            padding?: number | {
                top: number;
                bottom?: number | undefined;
                left?: number | undefined;
                right?: number | undefined;
            } | {
                bottom: number;
                top?: number | undefined;
                left?: number | undefined;
                right?: number | undefined;
            } | {
                left: number;
                top?: number | undefined;
                bottom?: number | undefined;
                right?: number | undefined;
            } | {
                right: number;
                top?: number | undefined;
                bottom?: number | undefined;
                left?: number | undefined;
            } | undefined;
            linear?: boolean | undefined;
            maxZoom?: number | undefined;
        } | undefined;
    };
    interactive: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    keyboard: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    locale: {
        type: PropType<Record<string, string>>;
        default: () => any;
    };
    language: {
        type: PropType<ValidLanguages | null>;
        default: () => ValidLanguages | null;
    };
    localIdeographFontFamily: {
        type: PropType<string>;
        default: () => string | undefined;
    };
    logoPosition: {
        type: PropType<Position>;
        validator: (val: any) => boolean;
        default: () => import("maplibre-gl").ControlPosition | undefined;
    };
    maxBounds: {
        type: PropType<LngLatBoundsLike>;
        default: () => [number, number, number, number] | {
            _ne: {
                lng: number;
                lat: number;
                wrap: () => import("maplibre-gl").LngLat;
                toArray: () => [number, number];
                toString: () => string;
                distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
            };
            _sw: {
                lng: number;
                lat: number;
                wrap: () => import("maplibre-gl").LngLat;
                toArray: () => [number, number];
                toString: () => string;
                distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
            };
            setNorthEast: (ne: LngLatLike) => import("maplibre-gl").LngLatBounds;
            setSouthWest: (sw: LngLatLike) => import("maplibre-gl").LngLatBounds;
            extend: (obj: LngLatBoundsLike | LngLatLike) => import("maplibre-gl").LngLatBounds;
            getCenter: () => import("maplibre-gl").LngLat;
            getSouthWest: () => import("maplibre-gl").LngLat;
            getNorthEast: () => import("maplibre-gl").LngLat;
            getNorthWest: () => import("maplibre-gl").LngLat;
            getSouthEast: () => import("maplibre-gl").LngLat;
            getWest: () => number;
            getSouth: () => number;
            getEast: () => number;
            getNorth: () => number;
            toArray: () => [number, number][];
            toString: () => string;
            isEmpty: () => boolean;
            contains: (lnglat: LngLatLike) => boolean;
        } | [[number, number] | {
            lng: number;
            lat: number;
            wrap: () => import("maplibre-gl").LngLat;
            toArray: () => [number, number];
            toString: () => string;
            distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
        } | {
            lng: number;
            lat: number;
        } | {
            lon: number;
            lat: number;
        }, [number, number] | {
            lng: number;
            lat: number;
            wrap: () => import("maplibre-gl").LngLat;
            toArray: () => [number, number];
            toString: () => string;
            distanceTo: (lngLat: import("maplibre-gl").LngLat) => number;
        } | {
            lng: number;
            lat: number;
        } | {
            lon: number;
            lat: number;
        }] | undefined;
    };
    maxPitch: {
        type: PropType<number>;
        default: () => number | null | undefined;
    };
    maxZoom: {
        type: PropType<number>;
        default: () => number | null | undefined;
    };
    minPitch: {
        type: PropType<number>;
        default: () => number | null | undefined;
    };
    minZoom: {
        type: PropType<number>;
        default: () => number | null | undefined;
    };
    preserveDrawingBuffer: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    pitch: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    pitchWithRotate: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    refreshExpiredTiles: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    renderWorldCopies: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    scrollZoom: {
        type: PropType<boolean>;
        default: () => boolean | {
            around: "center";
        } | undefined;
    };
    mapStyle: {
        type: PropType<string | object>;
        default: () => string | object;
    };
    trackResize: {
        type: PropType<boolean>;
        default: () => boolean | undefined;
    };
    transformRequest: {
        type: PropType<RequestTransformFunction>;
        default: RequestTransformFunction | undefined;
    };
    touchZoomRotate: {
        type: PropType<boolean>;
        default: () => boolean | {
            around: "center";
        } | undefined;
    };
    touchPitch: {
        type: PropType<boolean>;
        default: () => boolean | {
            around: "center";
        } | undefined;
    };
    zoom: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    maxTileCacheSize: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    mapKey: {
        type: PropType<string | symbol>;
    };
    pixelRatio: {
        type: PropType<number>;
        default: () => number | undefined;
    };
    cooperativeGestures: {
        type: PropType<boolean | GestureOptions>;
        default: () => boolean | {
            windowsHelpText?: string | undefined;
            macHelpText?: string | undefined;
            mobileHelpText?: string | undefined;
        } | undefined;
    };
}>> & {
    "onMap:error"?: ((...args: any[]) => any) | undefined;
    "onMap:load"?: ((...args: any[]) => any) | undefined;
    "onMap:idle"?: ((...args: any[]) => any) | undefined;
    "onMap:remove"?: ((...args: any[]) => any) | undefined;
    "onMap:render"?: ((...args: any[]) => any) | undefined;
    "onMap:resize"?: ((...args: any[]) => any) | undefined;
    "onMap:webglcontextlost"?: ((...args: any[]) => any) | undefined;
    "onMap:webglcontextrestored"?: ((...args: any[]) => any) | undefined;
    "onMap:dataloading"?: ((...args: any[]) => any) | undefined;
    "onMap:data"?: ((...args: any[]) => any) | undefined;
    "onMap:tiledataloading"?: ((...args: any[]) => any) | undefined;
    "onMap:sourcedataloading"?: ((...args: any[]) => any) | undefined;
    "onMap:styledataloading"?: ((...args: any[]) => any) | undefined;
    "onMap:sourcedata"?: ((...args: any[]) => any) | undefined;
    "onMap:styledata"?: ((...args: any[]) => any) | undefined;
    "onMap:boxzoomcancel"?: ((...args: any[]) => any) | undefined;
    "onMap:boxzoomstart"?: ((...args: any[]) => any) | undefined;
    "onMap:boxzoomend"?: ((...args: any[]) => any) | undefined;
    "onMap:touchcancel"?: ((...args: any[]) => any) | undefined;
    "onMap:touchmove"?: ((...args: any[]) => any) | undefined;
    "onMap:touchend"?: ((...args: any[]) => any) | undefined;
    "onMap:touchstart"?: ((...args: any[]) => any) | undefined;
    "onMap:click"?: ((...args: any[]) => any) | undefined;
    "onMap:contextmenu"?: ((...args: any[]) => any) | undefined;
    "onMap:dblclick"?: ((...args: any[]) => any) | undefined;
    "onMap:mousemove"?: ((...args: any[]) => any) | undefined;
    "onMap:mouseup"?: ((...args: any[]) => any) | undefined;
    "onMap:mousedown"?: ((...args: any[]) => any) | undefined;
    "onMap:mouseout"?: ((...args: any[]) => any) | undefined;
    "onMap:mouseover"?: ((...args: any[]) => any) | undefined;
    "onMap:movestart"?: ((...args: any[]) => any) | undefined;
    "onMap:move"?: ((...args: any[]) => any) | undefined;
    "onMap:moveend"?: ((...args: any[]) => any) | undefined;
    "onMap:zoomstart"?: ((...args: any[]) => any) | undefined;
    "onMap:zoom"?: ((...args: any[]) => any) | undefined;
    "onMap:zoomend"?: ((...args: any[]) => any) | undefined;
    "onMap:rotatestart"?: ((...args: any[]) => any) | undefined;
    "onMap:rotate"?: ((...args: any[]) => any) | undefined;
    "onMap:rotateend"?: ((...args: any[]) => any) | undefined;
    "onMap:dragstart"?: ((...args: any[]) => any) | undefined;
    "onMap:drag"?: ((...args: any[]) => any) | undefined;
    "onMap:dragend"?: ((...args: any[]) => any) | undefined;
    "onMap:pitchstart"?: ((...args: any[]) => any) | undefined;
    "onMap:pitch"?: ((...args: any[]) => any) | undefined;
    "onMap:pitchend"?: ((...args: any[]) => any) | undefined;
    "onMap:wheel"?: ((...args: any[]) => any) | undefined;
}, {
    hash: string | boolean;
    interactive: boolean;
    bearingSnap: number;
    attributionControl: boolean;
    customAttribution: string | string[];
    logoPosition: Position;
    failIfMajorPerformanceCaveat: boolean;
    preserveDrawingBuffer: boolean;
    antialias: boolean;
    refreshExpiredTiles: boolean;
    maxBounds: LngLatBoundsLike;
    scrollZoom: boolean;
    minZoom: number;
    maxZoom: number;
    minPitch: number;
    maxPitch: number;
    boxZoom: boolean;
    dragRotate: boolean;
    dragPan: boolean;
    keyboard: boolean;
    doubleClickZoom: boolean;
    touchZoomRotate: boolean;
    touchPitch: boolean;
    cooperativeGestures: boolean | GestureOptions;
    trackResize: boolean;
    center: LngLatLike;
    zoom: number;
    bearing: number;
    pitch: number;
    renderWorldCopies: boolean;
    maxTileCacheSize: number;
    transformRequest: RequestTransformFunction;
    locale: Record<string, string>;
    fadeDuration: number;
    crossSourceCollisions: boolean;
    collectResourceTiming: boolean;
    clickTolerance: number;
    bounds: LngLatBoundsLike;
    fitBoundsOptions: FitBoundsOptions;
    localIdeographFontFamily: string;
    pitchWithRotate: boolean;
    pixelRatio: number;
    language: ValidLanguages | null;
    width: string | number;
    height: string | number;
    mapStyle: string | object;
}, SlotsType<{
    default: {};
}>>;
export default _default;
