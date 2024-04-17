import { PropType } from 'vue';
import { Position, PositionProp } from '../../../lib/components/controls/position.enum';
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<PositionProp>;
        default: Position;
        validator: (v: Position) => boolean;
    };
    showCompass: {
        type: PropType<boolean>;
        default: boolean;
    };
    showZoom: {
        type: PropType<boolean>;
        default: boolean;
    };
    visualizePitch: PropType<boolean>;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<PositionProp>;
        default: Position;
        validator: (v: Position) => boolean;
    };
    showCompass: {
        type: PropType<boolean>;
        default: boolean;
    };
    showZoom: {
        type: PropType<boolean>;
        default: boolean;
    };
    visualizePitch: PropType<boolean>;
}>>, {
    position: PositionProp;
    showCompass: boolean;
    showZoom: boolean;
}, {}>;
export default _default;
