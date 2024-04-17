import { BackgroundLayerSpecification, CircleLayerSpecification, FillExtrusionLayerSpecification, FillLayerSpecification, HeatmapLayerSpecification, HillshadeLayerSpecification, LayerSpecification, LineLayerSpecification, Map, MapLayerEventType, RasterLayerSpecification, Source, SymbolLayerSpecification } from 'maplibre-gl';
import { PropType, VNode } from 'vue';
export declare class LayerLib {
    static readonly SOURCE_OPTS: Array<keyof (Omit<FillLayerSpecification & LineLayerSpecification & SymbolLayerSpecification & CircleLayerSpecification & HeatmapLayerSpecification & FillExtrusionLayerSpecification & RasterLayerSpecification & HillshadeLayerSpecification & BackgroundLayerSpecification, 'source-layer'> & {
        sourceLayer?: string;
    })>;
    static readonly LAYER_EVENTS: Array<keyof MapLayerEventType>;
    static readonly SHARED: {
        props: {
            layerId: {
                type: PropType<string>;
                required: boolean;
            };
            source: PropType<string | Source>;
            metadata: PropType<any>;
            ref: PropType<string>;
            sourceLayer: PropType<string>;
            minzoom: PropType<number>;
            maxzoom: PropType<number>;
            interactive: PropType<boolean>;
            filter: PropType<any[]>;
            before: PropType<string>;
        };
        emits: string[];
    };
    static genLayerOpts<T = LayerSpecification>(id: string, type: string, props: any, source: any): T;
    static registerLayerEvents(map: Map, layerId: string, vn: VNode): void;
    static unregisterLayerEvents(map: Map, layerId: string, vn: VNode): void;
}
