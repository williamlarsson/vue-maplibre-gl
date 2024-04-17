import { PropType } from 'vue';
import { Position, PositionProp } from '../../../lib/components/controls/position.enum';
import { FitBoundsOptions } from 'maplibre-gl';
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<PositionProp>;
        default: Position;
        validator: (v: Position) => boolean;
    };
    positionOptions: {
        type: PropType<PositionOptions>;
        default: PositionOptions;
    };
    fitBoundsOptions: {
        type: PropType<FitBoundsOptions>;
        default: FitBoundsOptions;
    };
    trackUserLocation: {
        type: PropType<boolean>;
        default: boolean;
    };
    showAccuracyCircle: {
        type: PropType<boolean>;
        default: boolean;
    };
    showUserLocation: {
        type: PropType<boolean>;
        default: boolean;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<PositionProp>;
        default: Position;
        validator: (v: Position) => boolean;
    };
    positionOptions: {
        type: PropType<PositionOptions>;
        default: PositionOptions;
    };
    fitBoundsOptions: {
        type: PropType<FitBoundsOptions>;
        default: FitBoundsOptions;
    };
    trackUserLocation: {
        type: PropType<boolean>;
        default: boolean;
    };
    showAccuracyCircle: {
        type: PropType<boolean>;
        default: boolean;
    };
    showUserLocation: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    fitBoundsOptions: FitBoundsOptions;
    position: PositionProp;
    positionOptions: PositionOptions;
    trackUserLocation: boolean;
    showAccuracyCircle: boolean;
    showUserLocation: boolean;
}, {}>;
export default _default;
