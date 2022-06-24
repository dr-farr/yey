import { gql } from '@apollo/client';

export const CREATE_CAMPAIGN = gql`
  mutation ($data: CampaignCreateInput!) {
    createOneCampaign(data: $data) {
      id
    }
  }
`;

export const UPDATE_CAMPAIGN_TAGS = gql`
  mutation UpdateOneCampaignTags($id: String!, $data: CampaignUpdateInput!) {
    updateOneCampaign(where: { id: $id }, data: $data) {
      id
      tags {
        name
        id
      }
    }
  }
`;

export const UPSERT_CAMPAIGN_DATA_POINT_AGGREAGATED = gql`
  mutation upsertOneCampaignDataPointsAggregated(
    $where: CampaignDataPointsAggregatedWhereUniqueInput!
    $create: CampaignDataPointsAggregatedCreateInput!
    $update: CampaignDataPointsAggregatedUpdateInput!
  ) {
    upsertOneCampaignDataPointsAggregated(where: $where, create: $create, update: $update) {
      id
      sourceType
    }
  }
`;

export const UPDATE_CAMPAIGN_RESULTS = gql`
  mutation UpdateCampaignResults($id: String!, $data: CampaignUpdateInput!) {
    updateOneCampaign(where: { id: $id }, data: $data) {
      id
      actualRoi
    }
  }
`;

export const DELETE_CAMPAIGN = gql`
  mutation DeleteCampaign($id: String!) {
    deleteOneCampaign(where: { id: $id }) {
      id
    }
  }
`;

export const DELETE_CAMPAIGNS = gql`
  mutation DeleteCampaigns($ids: [String!]) {
    deleteManyCampaign(where: { id: { in: $ids } }) {
      count
    }
  }
`;

const CAMPAIGN_COUNT_FRAGMENT = gql`
  fragment CampaignCountData on Campaign {
    id
  }
`;

const CAMPAIGN_FRAGMENT = gql`
  fragment CampaignData on Campaign {
    id
    createdAt
    name
    impact
    confidence
    effort
    cost
    channel {
      id
      name
    }
    teamId
    resultHigh
    resultLow
    budgetHigh
    budgetLow
    resultAverage
    budgetAverage
    integration {
      taskStatus
      config
      provider
      lastRun
      account {
        name
        providerId
        id
      }
    }
    campaignGroup {
      id
      title
      emoji
    }
    start
    end
    priority
    campaignOverrides
    predictedRoi
    actualRoi
    returnValue
    roiLock
    resultAggregated {
      value
      sourceType
    }
    spendAggregated {
      value
      sourceType
    }
    user {
      name
      image
      id
      email
    }
    kpi {
      id
      name
      isRevenue
    }
    tags {
      id
      name
    }
    commentCount
    integrationConfig
  }
`;

const ADVANCED_CAMPAIGN_FRAGMENT = gql`
  fragment AdvancedCampaignData on Campaign {
    resultMap {
      value
      name
      funnelNodeId
      providerMetricName
    }
    campaignGroup {
      id
      emoji
    }
    note
    tasks(orderBy: { createdAt: asc }) {
      id
      content
      completed
      user {
        id
        name
        email
        image
      }
    }
    comments(orderBy: { createdAt: asc }) {
      content
      id
      user {
        id
        name
        email
      }
      createdAt
      reactions {
        id
        name
        users {
          id
          name
        }
      }
    }
  }
`;

export const TEAM_CAMPAIGNS_QUERY = gql`
  ${CAMPAIGN_FRAGMENT}
  query teamCampaignsQuery(
    $where: CampaignWhereInput
    $orderBy: [CampaignOrderByInput!]
    $take: Int
    $skip: Int
  ) {
    campaigns(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      ...CampaignData
    }
  }
`;

export const TEAM_CAMPAIGNS_COUNT_QUERY = gql`
  ${CAMPAIGN_COUNT_FRAGMENT}
  query teamCampaignsCountQuery(
    $where: CampaignWhereInput
    $orderBy: [CampaignOrderByInput!]
    $take: Int
    $skip: Int
  ) {
    campaigns(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      ...CampaignCountData
    }
  }
`;

export const TEAM_CAMPAIGNS_QUERY_WITH_AGGREGATE = gql`
  ${CAMPAIGN_FRAGMENT}
  ${ADVANCED_CAMPAIGN_FRAGMENT}
  query teamCampaignsQuery(
    $where: CampaignWhereInput
    $orderBy: [CampaignOrderByInput!]
    $take: Int
    $skip: Int
  ) {
    campaigns(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      ...CampaignData
      ...AdvancedCampaignData
    }
  }
`;

export const SINGLE_CAMPAIGN_QUERY = gql`
  ${CAMPAIGN_FRAGMENT}
  ${ADVANCED_CAMPAIGN_FRAGMENT}
  query getSingleCampaign($id: String!) {
    campaign(where: { id: $id }) {
      ...CampaignData
      ...AdvancedCampaignData
    }
  }
`;

export const SINGLE_CAMPAIGNGROUP_QUERY = gql`
  query getSingleCampaignGroup($id: String!) {
    campaignGroup(where: { id: $id }) {
      id
      campaigns {
        id
        name
      }
      comments(orderBy: { createdAt: asc }) {
        content
        id
      }
    }
  }
`;

// Retrieves the expected values for the given campaign KPI across the timeframe
// this campaign is active for. This should be compared against the predicted
// or actual return
export const CAMPAIGN_CONTRIBUTION_QUERY = gql`
  query getCampaignContribution($id: String!) {
    campaign(where: { id: $id }) {
      id
      contributions {
        timeframeTotal
        totalContributionsFromAdditionalCampaigns
        numberOfAdditionalContributingCampaigns
        percentileBreakdown {
          month
          contribution
          name
        }
      }
    }
  }
`;

export const HIGH_PERFORMERS_QUERY = gql`
  query getGoodCampaign($scaleStart: DateTime!, $scaleEnd: DateTime!) {
    campaigns(
      where: {
        AND: [
          { actualRoi: { not: { equals: null } } }
          { actualRoi: { gt: 0 } }
          { start: { not: null } }
          { end: { not: null } }
          {
            OR: [
              # timeframe |-------|
              # campaign       |-------|
              {
                AND: [
                  { start: { gte: $scaleStart } }
                  { end: { gte: $scaleEnd } }
                  { start: { lte: $scaleEnd } }
                ]
              }
              # timeframe    |-------|
              # campaign  |-------|
              {
                AND: [
                  { start: { lte: $scaleStart } }
                  { end: { lte: $scaleEnd } }
                  { end: { gte: $scaleStart } }
                ]
              }
              # timeframe |-------|
              # campaign    |---|
              { AND: [{ start: { gte: $scaleStart } }, { end: { lte: $scaleEnd } }] }
              # timeframe   |---|
              # campaign  |--------|
              { AND: [{ start: { lte: $scaleStart } }, { end: { gte: $scaleEnd } }] }
            ]
          }
        ]
      }
      orderBy: { actualRoi: desc }
      take: 3
    ) {
      id
      name
      predictedRoi
      actualRoi
      start
      end
      name
      user {
        name
        image
      }
    }
  }
`;

export const LOW_PERFORMERS_QUERY = gql`
  query getBadCampaign($scaleStart: DateTime!, $scaleEnd: DateTime!) {
    campaigns(
      where: {
        AND: [
          { actualRoi: { not: { equals: null } } }
          { actualRoi: { lte: 0 } }
          { start: { not: null } }
          { end: { not: null } }
          {
            OR: [
              # timeframe |-------|
              # campaign       |-------|
              {
                AND: [
                  { start: { gte: $scaleStart } }
                  { end: { gte: $scaleEnd } }
                  { start: { lte: $scaleEnd } }
                ]
              }
              # timeframe    |-------|
              # campaign  |-------|
              {
                AND: [
                  { start: { lte: $scaleStart } }
                  { end: { lte: $scaleEnd } }
                  { end: { gte: $scaleStart } }
                ]
              }
              # timeframe |-------|
              # campaign    |---|
              { AND: [{ start: { gte: $scaleStart } }, { end: { lte: $scaleEnd } }] }
              # timeframe   |---|
              # campaign  |--------|
              { AND: [{ start: { lte: $scaleStart } }, { end: { gte: $scaleEnd } }] }
            ]
          }
        ]
      }
      orderBy: { actualRoi: asc }
      take: 3
    ) {
      id
      name
      predictedRoi
      actualRoi
      start
      end
      name
      user {
        name
        image
      }
    }
  }
`;

export const PENDING_CAMPAIGN_QUERY = gql`
  query getPendingCampaigns($date: DateTime) {
    campaigns(where: { AND: [{ end: { lt: $date } }, { actualRoi: { equals: null } }] }, take: 3) {
      id
      name
      predictedRoi
      start
      end
      name
      user {
        name
        image
      }
    }
  }
`;

export const INSUFFICIENT_CAMPAIGN_QUERY = gql`
  query getInsufficientCampaigns {
    campaigns(
      where: {
        OR: [{ funnelNodeId: null }, { start: { equals: null } }, { end: { equals: null } }]
      }
      take: 3
    ) {
      id
      name
      predictedRoi
      start
      end
      name
      user {
        name
        image
      }
    }
  }
`;
