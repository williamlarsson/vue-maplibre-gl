import { PropType, Ref, SlotsType } from 'vue';
import { Position, PositionProp } from '../../../lib/components/controls/position.enum';
import { StyleSwitchItem } from '../../../lib/types';
interface SlotProps {
    isOpen: Ref<boolean>;
    toggleOpen: (forceIsOpen?: boolean | Event, e?: Event) => void;
    setStyle: (s: StyleSwitchItem) => void;
    mapStyles: StyleSwitchItem[];
    currentStyle: Ref<StyleSwitchItem | null>;
}
declare const _default: import("vue").DefineComponent<{
    position: {
        type: PropType<PositionProp>;
        validator: (v: Position) => boolean;
    };
    mapStyles: {
        type: PropType<StyleSwitchItem[]>;
        required: true;
        default: never[];
    };
    modelValue: {
        type: PropType<StyleSwitchItem>;
    };
    isOpen: {
        type: PropType<boolean>;
        default: undefined;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:isOpen")[], "update:modelValue" | "update:isOpen", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<PositionProp>;
        validator: (v: Position) => boolean;
    };
    mapStyles: {
        type: PropType<StyleSwitchItem[]>;
        required: true;
        default: never[];
    };
    modelValue: {
        type: PropType<StyleSwitchItem>;
    };
    isOpen: {
        type: PropType<boolean>;
        default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:isOpen"?: ((...args: any[]) => any) | undefined;
}, {
    mapStyles: StyleSwitchItem[];
    isOpen: boolean;
}, SlotsType<{
    default: SlotProps;
    button: SlotProps;
    styleList: SlotProps;
}>>;
export default _default;
