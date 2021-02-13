import type { Operator } from "../types/Operator";

/** Invoke any type of stateless operator and return as if it was a fλ*/
export function invokeOperator<T, U>(op: Operator.fλ.Stateless<T, U>, data: T, isPost?: true): Operator.fλ.Result<U>;
export function invokeOperator<T, U extends T>(op: (data: T) => data is U, data: T): Operator.fλ.Result<U>;
export function invokeOperator<T>(op: (data: T) => boolean, data: T): Operator.fλ.Result<T>;
export function invokeOperator<T, U>(op: Operator.Stateless<T, U>, data: T, isPost?: true): Operator.fλ.Result<U>;
export function invokeOperator<T>(op: Operator.Stateless<T, any>, data: T, isPost?: true): Operator.fλ.Result<any> {

    const result = op(data, undefined, isPost);

    return typeof result !== "boolean" ? 
        result :
        !!result ? [data] : null
        ;


}