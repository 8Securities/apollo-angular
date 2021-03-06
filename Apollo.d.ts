import { ApolloClient, WatchQueryOptions, MutationOptions, ApolloQueryResult, SubscriptionOptions, ApolloClientOptions } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { Observable } from 'rxjs/Observable';
import { QueryRef } from './QueryRef';
import { TypedVariables, R } from './types';
export declare class ApolloBase<TCacheShape> {
    private _client;
    constructor(_client?: ApolloClient<TCacheShape>);
    watchQuery<T, V = R>(options: WatchQueryOptions & TypedVariables<V>): QueryRef<T>;
    query<T, V = R>(options: WatchQueryOptions & TypedVariables<V>): Observable<ApolloQueryResult<T>>;
    mutate<T, V = R>(options: MutationOptions & TypedVariables<V>): Observable<FetchResult<T>>;
    subscribe(options: SubscriptionOptions): Observable<any>;
    getClient(): ApolloClient<TCacheShape>;
    setClient(client: ApolloClient<TCacheShape>): void;
    private readonly client;
    private beforeEach();
    private checkInstance();
}
export declare class Apollo extends ApolloBase<any> {
    private map;
    constructor();
    create<TCacheShape>(options: ApolloClientOptions<TCacheShape>, name?: string): void;
    default(): ApolloBase<any>;
    use(name: string): ApolloBase<any>;
    createDefault<TCacheShape>(options: ApolloClientOptions<TCacheShape>): void;
    createNamed<TCacheShape>(name: string, options: ApolloClientOptions<TCacheShape>): void;
}
