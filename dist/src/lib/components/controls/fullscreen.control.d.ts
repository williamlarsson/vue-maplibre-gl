import { PropType } from 'vue';
import { Position, PositionProp } from '../../../lib/components/controls/position.enum';
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<PositionProp>;
        default: Position;
        validator: (v: Position) => boolean;
    };
    container: {
        type: PropType<HTMLElement>;
        default: null;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<PositionProp>;
        default: Position;
        validator: (v: Position) => boolean;
    };
    container: {
        type: PropType<HTMLElement>;
        default: null;
    };
}>>, {
    container: HTMLElement;
    position: PositionProp;
}, {}>;
export default _default;
