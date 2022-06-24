import { recordIntercomEvent } from 'utils/intercom';
import kebabCase from 'lodash/kebabCase';
import Sentry from 'utils/sentry';

import mixpanel from 'mixpanel-browser';
import { cookieNoticeStore } from 'store/cookie';

export enum AnalyticEvent {
  PAGE_VIEW = 'Page View',
  ADD_IDEA = 'Add Idea',
  ADD_INTEGRATION = 'Add Integration',
  ADD_CAMPAIGN = 'Add Campaign',
  ADD_CAMPAIGN_GROUP = 'Add Campaign Group',
  ADD_CAMPAIGN_RESULT = 'Add Campaign Result',
  ADD_PROGRESS_POINT = 'Add progress point',
  ADD_RETROSPECTIVE = 'Add retrospective',
  START_IDEATION_SESSION = 'Start ideation session',
  COMPLETE_IDEA_SESSION = 'Complete idea session',
  INVITE_USER = 'Invite user',
  ONBOARD_TEAM_INDUSTRY = 'Onboard team industry',
  ONBOARD_TEAM_FUNNEL = 'Onboard team funnel',
  ONBOARD_TEAM_GOAL = 'Onboard team goal',
  ONBOARD_ADD_USER = 'Onboard add user',
  ONBOARD_DESIRED_OUTCOME = 'Onboard desired outcome',
  TEAM_SUBSCRIPTION_CREATED = 'Team subscription created',
  TEAM_SUBSCRIPTION_CANCELLED = 'Team subscription cancelled',
  TEAM_SUBSCRIPTION_UPDATE = 'Team to update subscription',
  EXPRESS_PROVIDER_INTEREST = 'Express integration provider interest',
  BULK_IMPORT_CAMPAIGNS = 'Bulk import campaigns',
  IMPORT_SINGLE_CAMPAIGN = 'Import single campaign',
  EXPRESS_DEMO_FEATURE_INTEREST = 'Express feature interest in demo',
  UPDATE_INTEGRATED_CAMPAIGN_RESULTS_MAP = 'Update integrated campaign results map',
}

/**
 * Singleton instance for wrapping the mixpanel library in a safer interface.
 * This is primarily to protect us against unitialised client errors.
 *
 * NOTE: this class should not be used directly to track user events. This should be done with
 * the {@link TrackUserEvent} function. Use this class inside that function, or in _app.tsx
 * to perform lower-level opt_ins and identifications.
 */
export class Mixpanel {
  private static instance: Mixpanel;
  private mixpanel: any;

  private constructor() {
    this.mixpanel = mixpanel;
    this.mixpanel.initialised = false;
  }

  /**
   * Initialise the mixpanel singleton instance
   */
  private init() {
    this.mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_ID, {
      debug: process.env.NODE_ENV !== 'production',
      opt_out_tracking_by_default: true,
      error_reporter: function (msg, err) {
        Sentry.captureException(msg, err);
      },
    });
    this.mixpanel.initialised = true;
  }

  /**
   * Get the mixpanel analytics instance from the singleton
   *
   * @static
   * @returns {Mixpanel} the Mixpanel singleton instance
   */
  public static getInstance(): Mixpanel {
    if (!Mixpanel.instance) {
      Mixpanel.instance = new Mixpanel();
      Mixpanel.instance.init();
    }
    return Mixpanel.instance;
  }

  /**
   * Wrap a function with a check for mixpanel's initialisation state. Runs {@link Mixpanel.init} if this has not been done.
   *
   * @param {() => void} callback - a function that is to be run after the initialisation is verified
   */
  private withInitCheck(callback: () => void) {
    if (Object.prototype.hasOwnProperty.call(this.mixpanel, '__loaded') && this.mixpanel.__loaded) {
      if (!this.mixpanel.initialised) {
        Sentry.captureException(new Error('Mixpanel method called without prior initialisation'));
      } else {
        callback();
      }
    } else {
      this.init();
      callback();
    }
  }

  /**
   * Track a user event
   *
   * @param {string} eventName - the name of the event to track
   * @param {Record<string, string | number | boolean>} data - additional data associated with this tracking event
   */
  public track(eventName: string, data: Record<string, string | number | boolean>) {
    const callback = () => this.mixpanel.track(eventName, data);
    this.withInitCheck(callback);
  }

  /**
   * Identify a user in the mixpanel library
   *
   * @param {string} userId - the userId to identify in mixpanel for this session
   */
  public identify(userId: string) {
    const callback = () => this.mixpanel.identify(userId);
    this.withInitCheck(callback);
  }

  /**
   * Register an email against an identified user in the mixpanel library
   *
   * @param {{Email: string}} props - object containing properties to be associated with the mixpanel user
   */
  public register(props: { Email: string }) {
    const callback = () => this.mixpanel.register(props);
    this.withInitCheck(callback);
  }

  /**
   * Opt in to mixpanel tracking
   */
  public opt_in_tracking() {
    const callback = () => this.mixpanel.opt_in_tracking();
    this.withInitCheck(callback);
  }

  /**
   * Opt out of mixpanel tracking
   */
  public opt_out_tracking() {
    const callback = () => this.mixpanel.opt_out_tracking();
    this.withInitCheck(callback);
  }

  /**
   * Check the state of the intialisation field.
   * This only checks the field that is set in the singleton after
   * {@link Mixpanel.init} is called for the first time. The {@link Mixpanel.withInitCheck}
   * wrapper will check for a more specified field on the library object to ensure
   * initialisation states are properly handled.
   *
   * @returns {boolean} whether this singleton has been initialised for the first time
   */
  public isInitialised(): boolean {
    return this.mixpanel.initialised;
  }
}

/**
 * Track a user event in the analytics library.
 * At the moment this is Mixpanel and Intercom Events.
 *
 * Pass in an {@link AnalyticEvent} as the event you wish
 * to mark this under, an object containing additional data to track,
 * and, if you really want to do dev work, you can set forceDeliver to true
 * and control whether events can be sent to either intercom or mixpanel
 *
 * forceDeliver defaults to false, and should be used very sparingly.
 * We only really want to deliver these events in the case that we're on production.
 * But it might be necessary to test the events in an environment other than production.
 *
 * If forceDeliver is set to true, it will deliver the event to mixpanel regardless
 * of whether you are on production or not, and will clearly mark the event as '--DEV EVENT--'
 * @param event
 * @param data
 * @param options
 * @constructor
 */
export function TrackUserEvent(
  event: AnalyticEvent,
  data: Record<string, string | number | boolean> & {
    isDemo: boolean;
  },
  options?: {
    forceDeliver?: boolean;
    intercom?: boolean;
    mixpanel?: boolean;
  },
) {
  // If they haven't consented to tracking then don't track.
  const allowAnalytics = cookieNoticeStore.getState().allowAnalytics ?? false;
  const cookiePolicy = cookieNoticeStore.getState().open ?? false;

  const mixpanelBrowser = Mixpanel.getInstance();
  if (allowAnalytics && !cookiePolicy) {
    const { forceDeliver, intercom, mixpanel } = {
      ...{
        forceDeliver: false,
        intercom: true,
        mixpanel: mixpanelBrowser.isInitialised(),
      },
      ...options,
    };
    const deliver = process.env.NODE_ENV === 'production';

    if (forceDeliver) {
      console.warn(
        'YOU HAVE ARE FORCING DELIVERY OF AN ANALYTICS EVENT. THIS IS REALLY' +
          'NOT RECOMMENDED AND YOU SHOULD GO THINK ABOUT YOUR CHOICES',
      );
    }

    try {
      // intercom uses a test account for develop branches so these can always been delivered. Good for testing ;)
      if (intercom) {
        recordIntercomEvent(kebabCase(event.toLowerCase()), data);
      }

      if (deliver || forceDeliver) {
        if (mixpanel) {
          mixpanelBrowser.track(`${event}${forceDeliver ? '--DEV EVENT--' : ''}`, data);
        }
      }
    } catch (e) {
      Sentry.captureException(e);
    }
  }
}
