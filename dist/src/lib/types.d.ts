import { InjectionKey, Ref, ShallowRef } from 'vue';
import { Map, Marker, SourceSpecification, StyleSpecification } from 'maplibre-gl';
import { MglMap } from '../lib/components';
import { Emitter } from 'mitt';
import { SourceLayerRegistry } from '../lib/lib/sourceLayer.registry';
export declare const mapSymbol: InjectionKey<ShallowRef<Map | undefined>>, isLoadedSymbol: InjectionKey<Ref<boolean>>, isInitializedSymbol: InjectionKey<Ref<boolean>>, componentIdSymbol: InjectionKey<number>, sourceIdSymbol: InjectionKey<string>, sourceLayerRegistry: InjectionKey<SourceLayerRegistry>, emitterSymbol: InjectionKey<Emitter<MglEvents>>, markerSymbol: InjectionKey<ShallowRef<Marker | undefined>>;
export interface MglEvent<T = any> {
    type: string;
    component: InstanceType<typeof MglMap>;
    map: Map;
    event: T;
}
export type MglEvents = {
    styleSwitched: StyleSwitchItem;
};
export interface StyleSwitchItem {
    name: string;
    label: string;
    icon?: {
        path: string;
    };
    style: StyleSpecification | string;
}
export type AllProps<T extends object> = {
    [K in keyof T]: undefined;
};
export declare function AllOptions<T extends object>(obj: AllProps<Required<T>>): (keyof T)[];
export declare function AllSourceOptions<T = SourceSpecification>(obj: AllProps<Required<Omit<T, 'type'>>>): (keyof T)[];
export type ValidLanguages = 'sq' | 'am' | 'ar' | 'hy' | 'az' | 'eu' | 'be' | 'bs' | 'br' | 'bg' | 'ca' | 'zh' | 'co' | 'hr' | 'cs' | 'da' | 'nl' | 'en' | 'eo' | 'et' | 'fi' | 'fr' | 'fy' | 'ka' | 'de' | 'el' | 'he' | 'hi' | 'hu' | 'is' | 'id' | 'ga' | 'it' | 'ja' | 'ja-Hira' | 'ja_kana' | 'ja_rm' | 'ja-Latn' | 'kn' | 'kk' | 'ko' | 'ko-Latn' | 'ku' | 'la' | 'lv' | 'lt' | 'lb' | 'mk' | 'ml' | 'mt' | 'no' | 'oc' | 'pl' | 'pt' | 'ro' | 'rm' | 'ru' | 'gd' | 'sr' | 'sr-Latn' | 'sk' | 'sl' | 'es' | 'sv' | 'ta' | 'te' | 'th' | 'tr' | 'uk' | 'cy';
