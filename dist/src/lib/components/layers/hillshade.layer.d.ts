import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    layout: PropType<{
        visibility?: "visible" | "none" | undefined;
    } | undefined>;
    paint: PropType<{
        "hillshade-illumination-direction"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "hillshade-illumination-anchor"?: import("maplibre-gl").PropertyValueSpecification<"map" | "viewport"> | undefined;
        "hillshade-exaggeration"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "hillshade-shadow-color"?: import("maplibre-gl").PropertyValueSpecification<string> | undefined;
        "hillshade-highlight-color"?: import("maplibre-gl").PropertyValueSpecification<string> | undefined;
        "hillshade-accent-color"?: import("maplibre-gl").PropertyValueSpecification<string> | undefined;
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
        "hillshade-illumination-direction"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "hillshade-illumination-anchor"?: import("maplibre-gl").PropertyValueSpecification<"map" | "viewport"> | undefined;
        "hillshade-exaggeration"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "hillshade-shadow-color"?: import("maplibre-gl").PropertyValueSpecification<string> | undefined;
        "hillshade-highlight-color"?: import("maplibre-gl").PropertyValueSpecification<string> | undefined;
        "hillshade-accent-color"?: import("maplibre-gl").PropertyValueSpecification<string> | undefined;
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
