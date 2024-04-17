import { PropType } from "vue";
import { LngLatLike, PointLike, PositionAnchor } from "maplibre-gl";
declare const _default: import("vue").DefineComponent<{
    coordinates: {
        type: PropType<LngLatLike>;
        required: true;
    };
    offset: PropType<PointLike>;
    anchor: PropType<PositionAnchor>;
    color: PropType<string>;
    clickTolerance: PropType<number>;
    rotation: PropType<number>;
    rotationAlignment: PropType<"map" | "auto" | "viewport">;
    pitchAlignment: PropType<"map" | "auto" | "viewport">;
    scale: PropType<number>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    coordinates: {
        type: PropType<LngLatLike>;
        required: true;
    };
    offset: PropType<PointLike>;
    anchor: PropType<PositionAnchor>;
    color: PropType<string>;
    clickTolerance: PropType<number>;
    rotation: PropType<number>;
    rotationAlignment: PropType<"map" | "auto" | "viewport">;
    pitchAlignment: PropType<"map" | "auto" | "viewport">;
    scale: PropType<number>;
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
