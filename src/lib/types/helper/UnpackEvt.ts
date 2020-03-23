
type EvtLike<T> = import("../../EvtCore").EvtLike<T>

/** https://docs.evt.land/api/unpackevt */
export type UnpackEvt<T extends EvtLike<any>> = T extends EvtLike<infer U> ? U : never;

