import { PropType } from "vue";
import { LngLatLike, Offset, PositionAnchor } from "maplibre-gl";
declare const _default: import("vue").DefineComponent<{
    coordinates: {
        type: PropType<LngLatLike>;
        required: false;
    };
    closeButton: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    closeOnClick: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    closeOnMove: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    focusAfterOpen: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    anchor: {
        type: PropType<PositionAnchor>;
        required: false;
    };
    offset: {
        type: PropType<Offset>;
        required: false;
    };
    className: {
        type: StringConstructor;
        required: false;
    };
    maxWidth: {
        type: StringConstructor;
        default: string;
    };
    text: {
        type: StringConstructor;
        required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "open")[], "close" | "open", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    coordinates: {
        type: PropType<LngLatLike>;
        required: false;
    };
    closeButton: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    closeOnClick: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    closeOnMove: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    focusAfterOpen: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    anchor: {
        type: PropType<PositionAnchor>;
        required: false;
    };
    offset: {
        type: PropType<Offset>;
        required: false;
    };
    className: {
        type: StringConstructor;
        required: false;
    };
    maxWidth: {
        type: StringConstructor;
        default: string;
    };
    text: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}, {
    closeButton: boolean;
    closeOnClick: boolean;
    closeOnMove: boolean;
    focusAfterOpen: boolean;
    maxWidth: string;
}, {}>;
export default _default;
