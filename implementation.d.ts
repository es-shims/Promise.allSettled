interface PromiseResolution<T> {
	status: 'fulfilled';
	value: T;
}

interface PromiseRejection<E extends Error = Error> {
	status: 'rejected';
	reason: E;
}

type PromiseResult<T, E extends Error = Error> = PromiseResolution<T> | PromiseRejection<E>;

type PromiseTuple1<T1> = [Promise<T1>];
type PromiseTuple2<T1, T2> = [Promise<T1>, Promise<T2>];
type PromiseTuple3<T1, T2, T3> = [Promise<T1>, Promise<T2>, Promise<T3>];
type PromiseTuple4<T1, T2, T3, T4> = [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>];
type PromiseTuple5<T1, T2, T3, T4, T5> = [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>];
type PromiseTuple6<T1, T2, T3, T4, T5, T6> = [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>];
type PromiseTuple7<T1, T2, T3, T4, T5, T6, T7> = [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>, Promise<T7>];
type PromiseTuple8<T1, T2, T3, T4, T5, T6, T7, T8> = [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>, Promise<T7>, Promise<T8>];
type PromiseTuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9> = [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>, Promise<T7>, Promise<T8>, Promise<T9>];
type PromiseTuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>, Promise<T7>, Promise<T8>, Promise<T9>, Promise<T10>];
type PromiseTuple11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> = [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>, Promise<T7>, Promise<T8>, Promise<T9>, Promise<T10>, Promise<T11>];
type PromiseTuple12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> = [Promise<T1>, Promise<T2>, Promise<T3>, Promise<T4>, Promise<T5>, Promise<T6>, Promise<T7>, Promise<T8>, Promise<T9>, Promise<T10>, Promise<T11>, Promise<T12>];

type PromiseResultTuple1<T1, E1 extends Error = Error> = [PromiseResult<T1, E1>];
type PromiseResultTuple2<T1, T2, E1 extends Error = Error, E2 extends Error = Error> = [PromiseResult<T1, E1>, PromiseResult<T2, E2>];
type PromiseResultTuple3<T1, T2, T3, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error> = [PromiseResult<T1, E1>, PromiseResult<T2, E2>, PromiseResult<T3, E3>];
type PromiseResultTuple4<T1, T2, T3, T4, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error> = [PromiseResult<T1, E1>, PromiseResult<T2, E2>, PromiseResult<T3, E3>, PromiseResult<T4, E4>];
type PromiseResultTuple5<T1, T2, T3, T4, T5, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error> = [PromiseResult<T1, E1>, PromiseResult<T2, E2>, PromiseResult<T3, E3>, PromiseResult<T4, E4>, PromiseResult<T5, E5>];
type PromiseResultTuple6<T1, T2, T3, T4, T5, T6, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error> = [PromiseResult<T1, E1>, PromiseResult<T2, E2>, PromiseResult<T3, E3>, PromiseResult<T4, E4>, PromiseResult<T5, E5>, PromiseResult<T6, E6>];
type PromiseResultTuple7<T1, T2, T3, T4, T5, T6, T7, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error, E7 extends Error = Error> = [PromiseResult<T1, E1>, PromiseResult<T2, E2>, PromiseResult<T3, E3>, PromiseResult<T4, E4>, PromiseResult<T5, E5>, PromiseResult<T6, E6>, PromiseResult<T7, E7>];
type PromiseResultTuple8<T1, T2, T3, T4, T5, T6, T7, T8, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error, E7 extends Error = Error, E8 extends Error = Error> = [PromiseResult<T1, E1>, PromiseResult<T2, E2>, PromiseResult<T3, E3>, PromiseResult<T4, E4>, PromiseResult<T5, E5>, PromiseResult<T6, E6>, PromiseResult<T7, E7>, PromiseResult<T8, E8>];
type PromiseResultTuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error, E7 extends Error = Error, E8 extends Error = Error, E9 extends Error = Error> = [PromiseResult<T1, E1>, PromiseResult<T2, E2>, PromiseResult<T3, E3>, PromiseResult<T4, E4>, PromiseResult<T5, E5>, PromiseResult<T6, E6>, PromiseResult<T7, E7>, PromiseResult<T8, E8>, PromiseResult<T9, E9>];
type PromiseResultTuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error, E7 extends Error = Error, E8 extends Error = Error, E9 extends Error = Error, E10 extends Error = Error> = [PromiseResult<T1, E1>, PromiseResult<T2, E2>, PromiseResult<T3, E3>, PromiseResult<T4, E4>, PromiseResult<T5, E5>, PromiseResult<T6, E6>, PromiseResult<T7, E7>, PromiseResult<T8, E8>, PromiseResult<T9, E9>, PromiseResult<T10, E10>];
type PromiseResultTuple11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error, E7 extends Error = Error, E8 extends Error = Error, E9 extends Error = Error, E10 extends Error = Error, E11 extends Error = Error> = [PromiseResult<T1, E1>, PromiseResult<T2, E2>, PromiseResult<T3, E3>, PromiseResult<T4, E4>, PromiseResult<T5, E5>, PromiseResult<T6, E6>, PromiseResult<T7, E7>, PromiseResult<T8, E8>, PromiseResult<T9, E9>, PromiseResult<T10, E10>, PromiseResult<T11, E11>];
type PromiseResultTuple12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error, E7 extends Error = Error, E8 extends Error = Error, E9 extends Error = Error, E10 extends Error = Error, E11 extends Error = Error, E12 extends Error = Error> = [PromiseResult<T1, E1>, PromiseResult<T2, E2>, PromiseResult<T3, E3>, PromiseResult<T4, E4>, PromiseResult<T5, E5>, PromiseResult<T6, E6>, PromiseResult<T7, E7>, PromiseResult<T8, E8>, PromiseResult<T9, E9>, PromiseResult<T10, E10>, PromiseResult<T11, E11>, PromiseResult<T12, E12>];

declare function allSettled(): Promise<[]>
declare function allSettled<T1, E1 extends Error = Error>(iterable: PromiseTuple1<T1>): Promise<PromiseResultTuple1<T1, E1>>
declare function allSettled<T1, T2, E1 extends Error = Error, E2 extends Error = Error>(iterable: PromiseTuple2<T1, T2>): Promise<PromiseResultTuple2<T1, T2, E1, E2>>
declare function allSettled<T1, T2, T3, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error>(iterable: PromiseTuple3<T1, T2, T3>): Promise<PromiseResultTuple3<T1, T2, T3, E1, E2, E3>>
declare function allSettled<T1, T2, T3, T4, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error>(iterable: PromiseTuple4<T1, T2, T3, T4>): Promise<PromiseResultTuple4<T1, T2, T3, T4, E1, E2, E3, E4>>
declare function allSettled<T1, T2, T3, T4, T5, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error>(iterable: PromiseTuple5<T1, T2, T3, T4, T5>): Promise<PromiseResultTuple5<T1, T2, T3, T4, T5, E1, E2, E3, E4, E5>>
declare function allSettled<T1, T2, T3, T4, T5, T6, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error>(iterable: PromiseTuple6<T1, T2, T3, T4, T5, T6>): Promise<PromiseResultTuple6<T1, T2, T3, T4, T5, T6, E1, E2, E3, E4, E5, E6>>
declare function allSettled<T1, T2, T3, T4, T5, T6, T7, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error, E7 extends Error = Error>(iterable: PromiseTuple7<T1, T2, T3, T4, T5, T6, T7>): Promise<PromiseResultTuple7<T1, T2, T3, T4, T5, T6, E1, E2, E3, E4, E5, E6, E7>>
declare function allSettled<T1, T2, T3, T4, T5, T6, T7, T8, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error, E7 extends Error = Error, E8 extends Error = Error>(iterable: PromiseTuple8<T1, T2, T3, T4, T5, T6, T7, T8>): Promise<PromiseResultTuple8<T1, T2, T3, T4, T5, T6, E1, E2, E3, E4, E5, E6, E7, E8>>
declare function allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error, E7 extends Error = Error, E8 extends Error = Error, E9 extends Error = Error>(iterable: PromiseTuple9<T1, T2, T3, T4, T5, T6, T7, T8, T9>): Promise<PromiseResultTuple9<T1, T2, T3, T4, T5, T6, E1, E2, E3, E4, E5, E6, E7, E8, E9>>
declare function allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error, E7 extends Error = Error, E8 extends Error = Error, E9 extends Error = Error, E10 extends Error = Error>(iterable: PromiseTuple10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>): Promise<PromiseResultTuple10<T1, T2, T3, T4, T5, T6, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10>>
declare function allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error, E7 extends Error = Error, E8 extends Error = Error, E9 extends Error = Error, E10 extends Error = Error, E11 extends Error = Error>(iterable: PromiseTuple11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>): Promise<PromiseResultTuple11<T1, T2, T3, T4, T5, T6, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11>>
declare function allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, E1 extends Error = Error, E2 extends Error = Error, E3 extends Error = Error, E4 extends Error = Error, E5 extends Error = Error, E6 extends Error = Error, E7 extends Error = Error, E8 extends Error = Error, E9 extends Error = Error, E10 extends Error = Error, E11 extends Error = Error, E12 extends Error = Error>(iterable: PromiseTuple12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>): Promise<PromiseResultTuple12<T1, T2, T3, T4, T5, T6, E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12>>
declare function allSettled<T, E extends Error = Error>(iterable: Iterable<T>): Promise<Array<PromiseResult<T, E>>>

export = allSettled;
