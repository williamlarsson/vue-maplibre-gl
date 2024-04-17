import { Map, MapOptions, MarkerOptions, PopupOptions } from 'maplibre-gl';
import { MglMap } from '../../lib/components';
export type MapEventHandler = (e: any) => void;
export declare class MapLib {
    static readonly MAP_OPTION_KEYS: Array<keyof MapOptions | 'mapStyle'>;
    static readonly MARKER_OPTION_KEYS: Array<keyof MarkerOptions>;
    static readonly POPUP_OPTION_KEYS: Array<keyof PopupOptions>;
    static readonly MAP_EVENT_TYPES: string[];
    static createEventHandler(component: InstanceType<typeof MglMap>, map: Map, ctx: {
        emit: (t: string, payload: any) => void;
    }, eventName: string): MapEventHandler;
}
