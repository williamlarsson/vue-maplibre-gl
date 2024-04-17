import { PropType, SlotsType } from 'vue';
export declare enum ButtonType {
    DEFAULT = "default",
    TEXT = "text",
    MDI = "mdi",
    SIMPLE_ICON = "simple-icons"
}
export declare const ButtonTypeValues: ButtonType[];
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"default" | "text" | "mdi" | "simple-icons" | ButtonType>;
        default: ButtonType;
        validator: (v: ButtonType) => boolean;
    };
    path: {
        type: PropType<string>;
    };
    size: PropType<number>;
    viewbox: PropType<string>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"default" | "text" | "mdi" | "simple-icons" | ButtonType>;
        default: ButtonType;
        validator: (v: ButtonType) => boolean;
    };
    path: {
        type: PropType<string>;
    };
    size: PropType<number>;
    viewbox: PropType<string>;
}>>, {
    type: "default" | "text" | "mdi" | "simple-icons" | ButtonType;
}, SlotsType<{
    default: {};
}>>;
export default _default;
