import { getSession } from 'adapters/sessions';
import TrueNorthPageContext from 'utils/TrueNorthPageContext';

export default function withSession(next: any = undefined) {
  return async (context: TrueNorthPageContext) => {
    if (!context.req.session) {
      context.req.session = await getSession(context);
    }

    const response = next ? await next(context) : {};
    if (response.redirect) {
      return response;
    }
    return {
      props: {
        ...response.props,
        initialSession: context.req.session,
      },
    };
  };
}
