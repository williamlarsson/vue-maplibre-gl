import { PropType } from 'vue';
import { Coordinates } from 'maplibre-gl';
import { SlotsType } from 'vue/dist/vue';
declare const _default: import("vue").DefineComponent<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    urls: PropType<string[]>;
    coordinates: PropType<Coordinates>;
}, () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined)[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    urls: PropType<string[]>;
    coordinates: PropType<Coordinates>;
}>>, {}, SlotsType<{
    default: {};
}>>;
export default _default;
