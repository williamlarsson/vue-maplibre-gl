import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    layout: PropType<{
        "circle-sort-key"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        visibility?: "visible" | "none" | undefined;
    } | undefined>;
    paint: PropType<{
        "circle-radius"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "circle-color"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<string> | undefined;
        "circle-blur"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "circle-opacity"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "circle-translate"?: import("maplibre-gl").PropertyValueSpecification<[number, number]> | undefined;
        "circle-translate-anchor"?: import("maplibre-gl").PropertyValueSpecification<"map" | "viewport"> | undefined;
        "circle-pitch-scale"?: import("maplibre-gl").PropertyValueSpecification<"map" | "viewport"> | undefined;
        "circle-pitch-alignment"?: import("maplibre-gl").PropertyValueSpecification<"map" | "viewport"> | undefined;
        "circle-stroke-width"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "circle-stroke-color"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<string> | undefined;
        "circle-stroke-opacity"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
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
        "circle-sort-key"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        visibility?: "visible" | "none" | undefined;
    } | undefined>;
    paint: PropType<{
        "circle-radius"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "circle-color"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<string> | undefined;
        "circle-blur"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "circle-opacity"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "circle-translate"?: import("maplibre-gl").PropertyValueSpecification<[number, number]> | undefined;
        "circle-translate-anchor"?: import("maplibre-gl").PropertyValueSpecification<"map" | "viewport"> | undefined;
        "circle-pitch-scale"?: import("maplibre-gl").PropertyValueSpecification<"map" | "viewport"> | undefined;
        "circle-pitch-alignment"?: import("maplibre-gl").PropertyValueSpecification<"map" | "viewport"> | undefined;
        "circle-stroke-width"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "circle-stroke-color"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<string> | undefined;
        "circle-stroke-opacity"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
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
