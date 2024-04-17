import { PropType } from 'vue';
import { PromoteIdSpecification } from 'maplibre-gl';
import { SlotsType } from 'vue/dist/vue';
declare const _default: import("vue").DefineComponent<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    url: PropType<string>;
    tiles: PropType<string[]>;
    bounds: PropType<number[]>;
    scheme: PropType<"xyz" | "tms">;
    minzoom: PropType<number>;
    maxzoom: PropType<number>;
    attribution: PropType<string>;
    promoteId: PropType<PromoteIdSpecification>;
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
    scheme: PropType<"xyz" | "tms">;
    minzoom: PropType<number>;
    maxzoom: PropType<number>;
    attribution: PropType<string>;
    promoteId: PropType<PromoteIdSpecification>;
    volatile: BooleanConstructor;
}>>, {
    volatile: boolean;
}, SlotsType<{
    default: {};
}>>;
export default _default;
