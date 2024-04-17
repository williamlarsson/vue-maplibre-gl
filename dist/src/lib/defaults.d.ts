import { LngLatLike, MapOptions as MaplibreMapOptions } from 'maplibre-gl';
import { ValidLanguages } from '../lib/types';
export type MapOptions = Omit<MaplibreMapOptions, 'container' | 'style'> & {
    style: object | string;
    language?: ValidLanguages;
};
export declare const defaults: {
    hash?: string | boolean | undefined;
    interactive?: boolean | undefined;
    bearingSnap?: number | undefined;
    attributionControl?: boolean | undefined;
    customAttribution?: string | string[] | undefined;
    maplibreLogo?: boolean | undefined;
    logoPosition?: import("maplibre-gl").ControlPosition | undefined;
    failIfMajorPerformanceCaveat?: boolean | undefined;
    preserveDrawingBuffer?: boolean | undefined;
    antialias?: boolean | undefined;
    refreshExpiredTiles?: boolean | undefined;
    maxBounds?: [number, number, number, number] | {
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
        extend: (obj: import("maplibre-gl").LngLatBoundsLike | LngLatLike) => import("maplibre-gl").LngLatBounds;
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
    scrollZoom?: boolean | {
        around: "center";
    } | undefined;
    minZoom?: number | null | undefined;
    maxZoom?: number | null | undefined;
    minPitch?: number | null | undefined;
    maxPitch?: number | null | undefined;
    boxZoom?: boolean | undefined;
    dragRotate?: boolean | undefined;
    dragPan?: boolean | {
        linearity?: number | undefined;
        easing?: ((t: number) => number) | undefined;
        deceleration?: number | undefined;
        maxSpeed?: number | undefined;
    } | undefined;
    keyboard?: boolean | undefined;
    doubleClickZoom?: boolean | undefined;
    touchZoomRotate?: boolean | {
        around: "center";
    } | undefined;
    touchPitch?: boolean | {
        around: "center";
    } | undefined;
    cooperativeGestures?: boolean | {
        windowsHelpText?: string | undefined;
        macHelpText?: string | undefined;
        mobileHelpText?: string | undefined;
    } | undefined;
    trackResize?: boolean | undefined;
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
    renderWorldCopies?: boolean | undefined;
    maxTileCacheSize?: number | undefined;
    maxTileCacheZoomLevels?: number | undefined;
    transformRequest?: import("maplibre-gl").RequestTransformFunction | undefined;
    transformCameraUpdate?: import("maplibre-gl").CameraUpdateTransformFunction | undefined;
    locale?: any;
    fadeDuration?: number | undefined;
    crossSourceCollisions?: boolean | undefined;
    collectResourceTiming?: boolean | undefined;
    clickTolerance?: number | undefined;
    bounds?: [number, number, number, number] | {
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
        extend: (obj: import("maplibre-gl").LngLatBoundsLike | LngLatLike) => import("maplibre-gl").LngLatBounds;
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
    fitBoundsOptions?: {
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
    localIdeographFontFamily?: string | undefined;
    pitchWithRotate?: boolean | undefined;
    pixelRatio?: number | undefined;
    validateStyle?: boolean | undefined;
    maxCanvasSize?: [number, number] | undefined;
    style: object | string;
    language?: ValidLanguages | undefined;
};
