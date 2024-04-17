import { Ref } from 'vue';
import { Source } from 'maplibre-gl';
export declare class SourceLib {
    private static readonly REFS;
    static genSourceOpts<T extends object, O extends object>(type: string, props: object, sourceOpts: Array<keyof O>): T;
    static getSourceRef<T extends Source>(mcid: number, source: any): Ref<T | undefined | null>;
}
