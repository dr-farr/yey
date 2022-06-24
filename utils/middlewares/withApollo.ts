import TrueNorthPageContext from 'utils/TrueNorthPageContext';
import { initializeApollo } from 'utils/useApollo';

export default function withApollo(next: any) {
  return async (context: TrueNorthPageContext) => {
    if (!context.req.apolloClient) {
      context.req.apolloClient = initializeApollo({}, context.req);
    }

    const response = await next(context);
    if (response.redirect) {
      return response;
    }
    const initialApolloState = context.req.apolloClient.cache.extract();

    return {
      props: {
        ...response.props,
        initialApolloState,
      },
    };
  };
}
