import { PropType } from 'vue';
import { SlotsType } from 'vue/dist/vue';
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
    attribution: PropType<string>;
    encoding: PropType<"terrarium" | "mapbox">;
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
    attribution: PropType<string>;
    encoding: PropType<"terrarium" | "mapbox">;
    volatile: BooleanConstructor;
}>>, {
    volatile: boolean;
}, SlotsType<{
    default: {};
}>>;
export default _default;
