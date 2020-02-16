declare type EvtBaseProtected<T> = import("./EvtBaseProtected").EvtBaseProtected<T>;
/** https://garronej.github.io/ts-evt/#unpackevttypeof-evt */
export declare type UnpackEvt<T extends EvtBaseProtected<any>> = T extends EvtBaseProtected<infer U> ? U : never;
export {};