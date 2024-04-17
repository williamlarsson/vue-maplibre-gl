import { WatchSource } from '@vue/runtime-core';
import { ShallowRef } from 'vue';
import { IControl, Map } from 'maplibre-gl';
import { PositionProp } from '../../lib/components/controls/position.enum';
export declare function usePositionWatcher(source: WatchSource<PositionProp | undefined>, map: ShallowRef<Map | undefined>, control: IControl): void;
