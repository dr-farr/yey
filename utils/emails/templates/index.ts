import sendTemplate from "../sendTemplate";

import { EmailTemplates } from "constants/emailTemplates";

export const sendInviteEmailTemplate = async (
  email: string,
  inviter: string,
  inviter_url: string,
  team: string,
  token: string,
  name: string = undefined
) => {
  return sendTemplate(
    EmailTemplates.INVITE_USER,
    {
      team,
      inviter,
      inviter_url,
      inviter_initial: inviter[0].toUpperCase(),
      action_url: `${process.env.NEXTAUTH_URL}/auth/invitation/accept/${token}/`,
    },
    email,
    name
  );
};

export const sendLoginLinkTemplate = async (email: string, link: string) => {
  return sendTemplate(
    EmailTemplates.LOGIN,
    {
      action_url: link,
      header: "You’ve got the magic ✨",
    },
    email
  );
};

export const sendUnreadNotificationsTemplate = async (
  email: string,
  totalUnread: number,
  collections: {
    teamName: string;
    notifications: { content: string; title: string; link: string }[];
    more: { areThere: boolean; howMany: string };
  }[]
) => {
  return sendTemplate(
    EmailTemplates.UNREAD_NOTIFICATIONS,
    { collections: collections, totalUnreads: totalUnread },
    email,
    "."
  );
};

export const sendRoundupEmail = async (
  email: string,
  teamName: string,
  teamAbv: string,
  userName: string,
  content: string
) => {
  return sendTemplate(
    EmailTemplates.ROUNDUP,
    {
      team_abv: teamAbv,
      team: teamName,
      user: userName,
      content: content,
    },
    email,
    "."
  );
};

export const sendIdeaInviteTemplate = async (
  email: string,
  inviter: string,
  inviter_url: string,
  explanation: string,
  kpi: string,
  query: string,
  ideationToken: string,
  numberOfIdeas: number | string
) => {
  return sendTemplate(
    EmailTemplates.IDEAS_INVITE,
    {
      inviter,
      inviter_url,
      inviter_initial: inviter[0].toUpperCase(),
      explanation,
      kpi,
      action_url: `${process.env.NEXTAUTH_URL}/ideas/session/${ideationToken}`,
      numberOfIdeas,
    },
    email,
    "."
  );
};

export const sendIdeaSessionInviterTemplate = async (
  email: string,
  inviter: string,
  inviter_url: string,
  explanation: string,
  kpi: string,
  query: string,
  ideationToken: string,
  numberOfIdeas: number | string
) => {
  return sendTemplate(
    EmailTemplates.IDEAS_SESSION_INVITER,
    {
      inviter,
      inviter_url,
      inviter_initial: inviter[0].toUpperCase(),
      explanation,
      kpi,
      action_url: `${process.env.NEXTAUTH_URL}/ideas/session/${ideationToken}`,
      numberOfIdeas,
    },
    email,
    "."
  );
};

export const sendIdeaInviteToNewAccountTemplate = async (
  email: string,
  inviter: string,
  inviter_url: string,
  explanation: string,
  kpi: string,
  token: string,
  ideationToken: string,
  numberOfIdeas: string | number
) => {
  return sendTemplate(
    EmailTemplates.IDEAS_INVITE_TO_NEW_ACCOUNT,
    {
      inviter,
      inviter_url,
      inviter_initial: inviter[0].toUpperCase(),
      explanation,
      kpi,
      action_url: `${process.env.NEXTAUTH_URL}/auth/invitation/accept/${token}?ideation=${ideationToken}`,
      numberOfIdeas,
    },
    email,
    "."
  );
};

export const sendRetrospectiveInviteTemplate = async (
  email: string,
  inviter: string,
  title: string,
  dates: string,
  progressDataPointId: string
) => {
  return sendTemplate(
    EmailTemplates.RETROSPECTIVE_INVITE,
    {
      inviter,
      title,
      dates,
      action_url: `${process.env.NEXTAUTH_URL}/campaigns?id=${progressDataPointId}&sidepanelType=progress`,
    },
    email,
    "."
  );
};

export const sendRetrospectiveToNewAccountTemplate = async (
  email: string,
  inviter: string,
  title: string,
  dates: string,
  token: string,
  progressDataPointId: string
) => {
  return sendTemplate(
    EmailTemplates.RETROSPECTIVE_INVITE_TO_NEW_ACCOUNT,
    {
      inviter,
      title,
      dates,
      action_url: `${process.env.NEXTAUTH_URL}/auth/invitation/accept/${token}?retrospective=${progressDataPointId}`,
    },
    email,
    "."
  );
};
