import { PropType } from 'vue';
import { Position, PositionProp } from '../../../lib/components/controls/position.enum';
export declare enum ScaleControlUnit {
    IMPERIAL = "imperial",
    METRIC = "metric",
    NAUTICAL = "nautical"
}
type UnitValue = ScaleControlUnit | 'imperial' | 'metric' | 'nautical';
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<PositionProp>;
        validator: (v: Position) => boolean;
    };
    maxWidth: {
        type: PropType<number>;
        default: number;
    };
    unit: {
        type: PropType<UnitValue>;
        default: ScaleControlUnit;
        validator: (v: ScaleControlUnit) => boolean;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<PositionProp>;
        validator: (v: Position) => boolean;
    };
    maxWidth: {
        type: PropType<number>;
        default: number;
    };
    unit: {
        type: PropType<UnitValue>;
        default: ScaleControlUnit;
        validator: (v: ScaleControlUnit) => boolean;
    };
}>>, {
    maxWidth: number;
    unit: UnitValue;
}, {}>;
export default _default;
