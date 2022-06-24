import FB from 'fb';
import dayjs from 'utils/dayjs';

import prisma from 'utils/database/prisma';
import Sentry from 'utils/sentry';
/**
 * Update the facebook access token expiry date with the Facebook API
 * also updates for the related truenorth account.
 * https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing/
 *
 * @param userId: user id
 * @param providerId: ProviderAccountType
 * @param token: access token
 *
 *
 * @returns Proimse<Account>
 *
 * @alpha
 */
export const getLongLifeToken = async (userId: string, providerId: string, token: string) => {
  try {
    const response = await FB.api('oauth/access_token', {
      client_id: process.env.FACEBOOK_ADS_CLIENT_ID,
      client_secret: process.env.FACEBOOK_ADS_CLIENT_SECRET,
      grant_type: 'fb_exchange_token',
      fb_exchange_token: token,
    });

    const account = await prisma.account.findUnique({
      where: { userId_providerId: { userId, providerId: providerId } },
    });

    if (account == undefined) {
      throw new Error('Auth account not found, unable to make long lived token');
    }

    return await prisma.account.update({
      where: {
        id: account.id,
      },
      data: {
        updatedAt: dayjs().toISOString(),
        accessToken: response.access_token,
        accessTokenExpires: dayjs().add(response.expires_in, 'second').toISOString(),
      },
    });
  } catch (e) {
    Sentry.captureException(e);
  }
};
