import { Ref } from 'vue';
import { Source } from 'maplibre-gl';
import { SourceLayerRegistry } from '../../lib/lib/sourceLayer.registry';
export declare function useSource<O extends object>(source: Ref<Source | undefined | null>, props: any, type: string, sourceOpts: Array<keyof O>, registry: SourceLayerRegistry): false | Function | undefined;
