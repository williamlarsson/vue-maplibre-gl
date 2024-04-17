import { PropType, SlotsType } from 'vue';
import { PromoteIdSpecification } from 'maplibre-gl';
import type GeoJSON from 'geojson';
declare const _default: import("vue").DefineComponent<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    data: PropType<string | GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties> | GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>>;
    maxzoom: PropType<number>;
    attribution: PropType<string>;
    buffer: PropType<number>;
    tolerance: PropType<number>;
    cluster: PropType<number | boolean>;
    clusterRadius: PropType<number>;
    clusterMaxZoom: PropType<number>;
    clusterMinPoints: PropType<number>;
    clusterProperties: PropType<object>;
    lineMetrics: PropType<boolean>;
    generateId: PropType<boolean>;
    promoteId: PropType<PromoteIdSpecification>;
    filter: PropType<any>;
}, () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined)[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sourceId: {
        type: PropType<string>;
        required: true;
    };
    data: PropType<string | GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties> | GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>>;
    maxzoom: PropType<number>;
    attribution: PropType<string>;
    buffer: PropType<number>;
    tolerance: PropType<number>;
    cluster: PropType<number | boolean>;
    clusterRadius: PropType<number>;
    clusterMaxZoom: PropType<number>;
    clusterMinPoints: PropType<number>;
    clusterProperties: PropType<object>;
    lineMetrics: PropType<boolean>;
    generateId: PropType<boolean>;
    promoteId: PropType<PromoteIdSpecification>;
    filter: PropType<any>;
}>>, {}, SlotsType<{
    default: {};
}>>;
export default _default;
