import { PropType, SlotsType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    url: PropType<string>;
    tiles: PropType<string[]>;
    bounds: PropType<number[]>;
    minzoom: PropType<number>;
    maxzoom: PropType<number>;
    tileSize: PropType<number>;
    scheme: PropType<"xyz" | "tms">;
    attribution: PropType<string>;
    volatile: BooleanConstructor;
}, () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined)[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    url: PropType<string>;
    tiles: PropType<string[]>;
    bounds: PropType<number[]>;
    minzoom: PropType<number>;
    maxzoom: PropType<number>;
    tileSize: PropType<number>;
    scheme: PropType<"xyz" | "tms">;
    attribution: PropType<string>;
    volatile: BooleanConstructor;
}>>, {
    volatile: boolean;
}, SlotsType<{
    default: {};
}>>;
export default _default;
