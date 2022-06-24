import { SubscriptionStatus } from "truenorth-graphql";

export const convertTimestamp = (timestamp: number) =>
  new Date(timestamp * 1000);

export const convertStatus = (status) => {
  switch (status) {
    case "incomplete":
      return SubscriptionStatus.INCOMPLETE;
    case "incomplete_expired":
      return SubscriptionStatus.INCOMPLETE_EXPIRED;
    case "trialing":
      return SubscriptionStatus.TRIALING;
    case "past_due":
      return SubscriptionStatus.PAST_DUE;
    case "canceled":
      return SubscriptionStatus.CANCELED;
    case "unpaid":
      return SubscriptionStatus.UNPAID;
    default:
      return SubscriptionStatus.ACTIVE;
  }
};
