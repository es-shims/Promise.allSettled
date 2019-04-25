interface PromiseResolution<T> {
	status: 'fulfilled';
	value: T;
}

interface PromiseRejection<E> {
	status: 'rejected';
	reason: E;
}

type PromiseResult<T, E> = PromiseResolution<T> | PromiseRejection<E>;
type PromiseTuple<T extends [any, ...any[]]> = {[P in keyof T]: Promise<T[P]>};
type PromiseResultTuple<T extends [any, ...any[]]> = {[P in keyof T]: PromiseResult<T[P], any>}

declare function allSettled(): Promise<[]>
declare function allSettled<T extends [any, ...any[]]>(iterable: PromiseTuple<T>): Promise<PromiseResultTuple<T>>
declare function allSettled<T>(iterable: Iterable<T>): Promise<T[]>

export = allSettled;
