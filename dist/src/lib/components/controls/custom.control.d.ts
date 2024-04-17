import { PropType, Ref, SlotsType } from 'vue';
import { Position, PositionProp } from '../../../lib/components/controls/position.enum';
import { ControlPosition, IControl } from 'maplibre-gl';
export declare class CustomControl implements IControl {
    private isAdded;
    static readonly CONTROL_CLASS = "maplibregl-ctrl";
    static readonly CONTROL_GROUP_CLASS = "maplibregl-ctrl-group";
    readonly container: HTMLDivElement;
    constructor(isAdded: Ref<boolean>, noClasses: boolean);
    getDefaultPosition(): ControlPosition;
    onAdd(): HTMLElement;
    onRemove(): void;
    setClasses(noClasses: boolean): void;
}
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<PositionProp>;
        validator: (v: Position) => boolean;
    };
    noClasses: {
        type: PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<PositionProp>;
        validator: (v: Position) => boolean;
    };
    noClasses: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    noClasses: boolean;
}, SlotsType<{
    default: {};
}>>;
export default _default;
