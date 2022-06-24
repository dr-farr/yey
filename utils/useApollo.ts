import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";
import { SentryLink } from "apollo-link-sentry";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createIsomorphicLink(req = null) {
  if (typeof window === "undefined" && req) {
    const { SchemaLink } = require("@apollo/client/link/schema");
    const { schema } = require("utils/database/schema");
    const { createContext } = require("utils/database/context");
    return new SchemaLink({ schema, context: createContext({ req }) });
  } else {
    const { BatchHttpLink } = require("@apollo/client/link/batch-http");
    const fetcher = (...args) => {
      //@ts-ignore
      return window.fetch(...args);
    };
    return ApolloLink.from([
      new SentryLink(),
      new BatchHttpLink({
        uri: "/api/graphql",
        batchMax: 10,
        batchInterval: 40,
        fetch: fetcher,
      }),
    ]);
  }
}

function createApolloClient(req = null) {
  return new ApolloClient({
    ssrMode: false,
    link: createIsomorphicLink(req),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null, req = null) {
  const _apolloClient = apolloClient ?? createApolloClient(req);
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache with the merged data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === "undefined") {
    // serverside, always send a new instance.
    return _apolloClient;
  }

  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export function useApollo(initialState) {
  const client = useMemo(() => {
    return initializeApollo(initialState);
  }, [initialState]);
  return client;
}
