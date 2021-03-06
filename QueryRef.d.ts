import { ApolloQueryResult, ObservableQuery, ApolloError, FetchMoreQueryOptions, FetchMoreOptions, SubscribeToMoreOptions, UpdateQueryOptions } from 'apollo-client';
import { ApolloCurrentResult } from 'apollo-client/core/ObservableQuery';
import { Observable } from 'rxjs/Observable';
import { R } from './types';
export declare class QueryRef<T, V = R> {
    private obsQuery;
    valueChanges: Observable<ApolloQueryResult<T>>;
    constructor(obsQuery: ObservableQuery<T>);
    result(): Promise<ApolloQueryResult<T>>;
    currentResult(): ApolloCurrentResult<T>;
    getLastResult(): ApolloQueryResult<T>;
    getLastError(): ApolloError;
    resetLastResults(): void;
    refetch(variables?: V): Promise<ApolloQueryResult<T>>;
    fetchMore(fetchMoreOptions: any & FetchMoreOptions): Promise<ApolloQueryResult<T>>;
    subscribeToMore(options: SubscribeToMoreOptions): () => void;
    updateQuery(mapFn: (previousQueryResult: any, options: any) => any): void;
    stopPolling(): void;
    startPolling(pollInterval: number): void;
    setOptions(opts: any): Promise<ApolloQueryResult<T>>;
    setVariables(variables: V, tryFetch?: boolean, fetchResults?: boolean): Promise<ApolloQueryResult<T>>;
}
