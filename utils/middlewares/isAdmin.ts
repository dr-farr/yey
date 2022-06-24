import withSession from 'utils/middlewares/withSession';
import TrueNorthPageContext from 'utils/TrueNorthPageContext';
import { UserType } from 'truenorth-graphql';
import redirect from 'utils/redirect';

export default function isAdmin(next: any, failRedirect: string = '/') {
  return withSession((context: TrueNorthPageContext) => {
    if (!context.req.session || context.req.session.user.type !== UserType.SUPERADMIN) {
      return redirect(context, failRedirect);
    }
    return next(context);
  });
}
