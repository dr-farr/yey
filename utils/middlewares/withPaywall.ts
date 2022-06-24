import withSession from 'utils/middlewares/withSession';
import TrueNorthPageContext from 'utils/TrueNorthPageContext';
import redirect from 'utils/redirect';

/**
 * The paywall middleware is used to block certain areas of the app to users
 * who have an inactive subscription.
 * @param next
 */
export default function withPaywall(next: any = undefined) {
  return withSession((context: TrueNorthPageContext) => {
    if (!context.req.session) {
      return redirect(context, '/campaigns');
    }
    if (!context.req.session.user.name) {
      return redirect(context, '/onboard/add-user');
    }
    if (context.req.session.user.paywall) {
      return redirect(context, '/onboard/add-payment-legacy');
    }
    if (next) {
      return next(context);
    } else {
      return { props: {} };
    }
  });
}
