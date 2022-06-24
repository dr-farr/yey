import withSession from 'utils/middlewares/withSession';
import TrueNorthPageContext from 'utils/TrueNorthPageContext';
import redirect from 'utils/redirect';

/**
 * The demo block middleware will block a page from being accessed by a user
 * and redirect them to a "demo account closed" page.
 * @param next
 */
export default function withDemoBlock(
  next: (context: TrueNorthPageContext) => Promise<any | { props: any }>,
) {
  return withSession((context: TrueNorthPageContext) => {
    if (!context.req.session) {
      return redirect(context, '/auth/signin');
    }
    if (context?.req?.session?.user?.paywall && context?.req?.session?.user?.isDemo) {
      return redirect(context, '/demo/closed');
    }
    return next(context);
  });
}
