import setPrototypeOf = require("setprototypeof");

export interface Postable<T> {
    post(data: T): void;
}

/** Way of defining Object so it does not match number and string */
export type Object_ = { [k: string]: any };

/** Anything but a number, a callable function (i.e. not a constructor), undefined  or null */
export type Bindable = Object_ | string;

export interface UserProvidedParams<T> {
    matcher: (data: T) => boolean;
    boundTo: Bindable;
    timeout: number | undefined;
    callback: ((data: T) => any) | undefined;
}

export type ImplicitParams = ImplicitParams.Sync | ImplicitParams.Async;

export namespace ImplicitParams {

    export type _Base = {
        once: boolean;
        prepend: boolean;
        extract: boolean;
    };

    export type Sync = _Base & {
        async: false;
    };

    export type Async = _Base & {
        async: true;
    };


}

export type Handler<T>= UserProvidedParams<T> & ImplicitParams & {
    detach(): boolean;
    promise: Promise<T>;
};

export namespace EvtError {

    export class Timeout extends Error {
        constructor(public readonly timeout: number) {
            super(`Evt timeout after ${timeout}ms`);
            setPrototypeOf(this, new.target.prototype);
        }
    }

    export class Detached extends Error {
        constructor() {
            super(`Evt handler detached`);
            setPrototypeOf(this, new.target.prototype);
        }
    }

}

