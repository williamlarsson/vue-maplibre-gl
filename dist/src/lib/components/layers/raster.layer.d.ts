import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    layout: PropType<{
        visibility?: "visible" | "none" | undefined;
    } | undefined>;
    paint: PropType<{
        "raster-opacity"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "raster-hue-rotate"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "raster-brightness-min"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "raster-brightness-max"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "raster-saturation"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "raster-contrast"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "raster-resampling"?: import("maplibre-gl").PropertyValueSpecification<"linear" | "nearest"> | undefined;
        "raster-fade-duration"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
    } | undefined>;
    layerId: {
        type: PropType<string>;
        required: boolean;
    };
    source: PropType<string | import("maplibre-gl").Source>;
    metadata: PropType<any>;
    ref: PropType<string>;
    sourceLayer: PropType<string>;
    minzoom: PropType<number>;
    maxzoom: PropType<number>;
    interactive: PropType<boolean>;
    filter: PropType<any[]>;
    before: PropType<string>;
}, (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>) | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    layout: PropType<{
        visibility?: "visible" | "none" | undefined;
    } | undefined>;
    paint: PropType<{
        "raster-opacity"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "raster-hue-rotate"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "raster-brightness-min"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "raster-brightness-max"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "raster-saturation"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "raster-contrast"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "raster-resampling"?: import("maplibre-gl").PropertyValueSpecification<"linear" | "nearest"> | undefined;
        "raster-fade-duration"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
    } | undefined>;
    layerId: {
        type: PropType<string>;
        required: boolean;
    };
    source: PropType<string | import("maplibre-gl").Source>;
    metadata: PropType<any>;
    ref: PropType<string>;
    sourceLayer: PropType<string>;
    minzoom: PropType<number>;
    maxzoom: PropType<number>;
    interactive: PropType<boolean>;
    filter: PropType<any[]>;
    before: PropType<string>;
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
