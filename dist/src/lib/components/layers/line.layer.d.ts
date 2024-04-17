import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    layout: PropType<{
        "line-cap"?: import("maplibre-gl").PropertyValueSpecification<"round" | "butt" | "square"> | undefined;
        "line-join"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<"round" | "bevel" | "miter"> | undefined;
        "line-miter-limit"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "line-round-limit"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "line-sort-key"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        visibility?: "visible" | "none" | undefined;
    } | undefined>;
    paint: PropType<{
        "line-opacity"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "line-color"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<string> | undefined;
        "line-translate"?: import("maplibre-gl").PropertyValueSpecification<[number, number]> | undefined;
        "line-translate-anchor"?: import("maplibre-gl").PropertyValueSpecification<"map" | "viewport"> | undefined;
        "line-width"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "line-gap-width"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "line-offset"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "line-blur"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "line-dasharray"?: import("maplibre-gl").PropertyValueSpecification<number[]> | undefined;
        "line-pattern"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<string> | undefined;
        "line-gradient"?: import("maplibre-gl").ExpressionSpecification | undefined;
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
        "line-cap"?: import("maplibre-gl").PropertyValueSpecification<"round" | "butt" | "square"> | undefined;
        "line-join"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<"round" | "bevel" | "miter"> | undefined;
        "line-miter-limit"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "line-round-limit"?: import("maplibre-gl").PropertyValueSpecification<number> | undefined;
        "line-sort-key"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        visibility?: "visible" | "none" | undefined;
    } | undefined>;
    paint: PropType<{
        "line-opacity"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "line-color"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<string> | undefined;
        "line-translate"?: import("maplibre-gl").PropertyValueSpecification<[number, number]> | undefined;
        "line-translate-anchor"?: import("maplibre-gl").PropertyValueSpecification<"map" | "viewport"> | undefined;
        "line-width"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "line-gap-width"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "line-offset"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "line-blur"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<number> | undefined;
        "line-dasharray"?: import("maplibre-gl").PropertyValueSpecification<number[]> | undefined;
        "line-pattern"?: import("maplibre-gl").DataDrivenPropertyValueSpecification<string> | undefined;
        "line-gradient"?: import("maplibre-gl").ExpressionSpecification | undefined;
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
