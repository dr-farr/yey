import { cookieNoticeStore } from "store/cookie";

// pulled from https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

/**
 * Sends a pageview to Google Analytics
 * @param url
 * @constructor
 * @return void
 */
export const pageview = (url: string) => {
  if (typeof window !== undefined) {
    // If they haven't consented to tracking then don't track.
    const allowAnalytics = cookieNoticeStore.getState().allowAnalytics ?? false;
    const cookiePolicy = cookieNoticeStore.getState().open ?? false;
    if (allowAnalytics && !cookiePolicy) {
      // @ts-ignore
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    }
  }
};
