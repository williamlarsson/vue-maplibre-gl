import { MglMap } from '../../lib/components';
import { ShallowRef } from 'vue';
import { ValidLanguages } from '../../lib/types';
export interface MapInstance {
    component?: InstanceType<typeof MglMap>;
    map?: maplibregl.Map;
    isMounted: boolean;
    isLoaded: boolean;
    language: ValidLanguages | null;
}
export declare function useMap(key?: symbol | string): MapInstance;
export declare function registerMap(instance: InstanceType<typeof MglMap>, map: ShallowRef<maplibregl.Map | undefined>, key?: symbol | string): MapInstance;
