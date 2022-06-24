// If you wish to create a custom attribute it must be configured in Intercom first
// https://www.intercom.com/help/en/articles/179-send-custom-user-attributes-to-intercom

// @ts-nocheck

export type IntercomCustomAttributes = {
  name?: string;
  email?: string;
  created_at?: number; // unix timestamp
  company_name?: string;
  completed_onboards?: string; // join array of onboards
  user_type?: string;
  marketing_goal?: string; // concat goal and target
  integrated_ga?: boolean;
  funnel_visits?: number; // The latest month's data from their funnel
  funnel_leads?: number; // The latest month's data from their funnel
  funnel_customers?: number; // The latest month's data from their funnel
  funnel_revenue?: number;
  funnel_data?: string; // The latest month's data from their funnel
  user_id?: string;
  subscription_status?: string;
  subscription_active?: boolean;
  integrations?: number;
  campaigns?: number;
  invitedUsers?: number;
  teams?: string;
  isDemo?: boolean; // are they in a demo team right now?
  hide_default_launcher?: boolean;
  industry?: string;
};

export function recordIntercomEvent(eventname: string, metadata = {}) {
  if (typeof window !== "undefined" && window.Intercom && metadata) {
    window.Intercom("trackEvent", eventname, metadata);
  }
  return;
}

let interval;
const moveAppLauncher = (hide) => {
  const appLauncher = document.querySelector('[class*="intercom-launcher"]');

  if (appLauncher) {
    appLauncher.style.marginRight = hide ? "max(30vw, 460px)" : "0";
  }

  return appLauncher;
};

export function moveIntercomButton(hide: boolean) {
  if (typeof window !== "undefined" && window.Intercom) {
    const appLauncher = moveAppLauncher(hide);

    // intercom has not loaded yet
    if (!appLauncher) {
      interval = setInterval(() => moveAppLauncher(hide), 100);
    } else {
      clearInterval(interval);
    }
  }
  return;
}

export function updateIntercomCustomAttribute(data: IntercomCustomAttributes) {
  if (typeof window !== "undefined" && window.Intercom && data) {
    window.Intercom("update", data);
  }
  return;
}
