export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTime: any;
  Json: any;
};

export type Account = {
  __typename?: 'Account';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  integrationDefault: Array<IntegrationDefault>;
  name?: Maybe<Scalars['String']>;
  providerId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};


export type AccountIntegrationDefaultArgs = {
  cursor?: Maybe<IntegrationDefaultWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type AccountCreateManyUserInput = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  compoundId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountCreateManyUserInputEnvelope = {
  data?: Maybe<Array<AccountCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateNestedOneWithoutIntegrationDefaultInput = {
  connect?: Maybe<AccountWhereUniqueInput>;
  connectOrCreate?: Maybe<AccountCreateOrConnectWithoutIntegrationDefaultInput>;
  create?: Maybe<AccountCreateWithoutIntegrationDefaultInput>;
};

export type AccountCreateNestedOneWithoutIntegrationInput = {
  connect?: Maybe<AccountWhereUniqueInput>;
  connectOrCreate?: Maybe<AccountCreateOrConnectWithoutIntegrationInput>;
  create?: Maybe<AccountCreateWithoutIntegrationInput>;
};

export type AccountCreateOrConnectWithoutIntegrationDefaultInput = {
  create: AccountCreateWithoutIntegrationDefaultInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateOrConnectWithoutIntegrationInput = {
  create: AccountCreateWithoutIntegrationInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutIntegrationDefaultInput = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  compoundId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutAccountInput>;
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAccountInput;
};

export type AccountCreateWithoutIntegrationInput = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  compoundId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutAccountInput>;
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAccountInput;
};

export type AccountCreateWithoutUserInput = {
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  compoundId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutAccountInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutAccountInput>;
  providerAccountId: Scalars['String'];
  providerId: Scalars['String'];
  providerType: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountListRelationFilter = {
  every?: Maybe<AccountWhereInput>;
  none?: Maybe<AccountWhereInput>;
  some?: Maybe<AccountWhereInput>;
};

export type AccountScalarWhereInput = {
  accessToken?: Maybe<StringNullableFilter>;
  accessTokenExpires?: Maybe<DateTimeNullableFilter>;
  AND?: Maybe<Array<AccountScalarWhereInput>>;
  compoundId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AccountScalarWhereInput>>;
  OR?: Maybe<Array<AccountScalarWhereInput>>;
  providerAccountId?: Maybe<StringFilter>;
  providerId?: Maybe<StringFilter>;
  providerType?: Maybe<StringFilter>;
  refreshToken?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type AccountUpdateManyMutationInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  compoundId?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AccountScalarWhereInput>>;
  disconnect?: Maybe<Array<AccountWhereUniqueInput>>;
  set?: Maybe<Array<AccountWhereUniqueInput>>;
  update?: Maybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateOneRequiredWithoutIntegrationDefaultInput = {
  connect?: Maybe<AccountWhereUniqueInput>;
  connectOrCreate?: Maybe<AccountCreateOrConnectWithoutIntegrationDefaultInput>;
  create?: Maybe<AccountCreateWithoutIntegrationDefaultInput>;
  update?: Maybe<AccountUpdateWithoutIntegrationDefaultInput>;
  upsert?: Maybe<AccountUpsertWithoutIntegrationDefaultInput>;
};

export type AccountUpdateOneWithoutIntegrationInput = {
  connect?: Maybe<AccountWhereUniqueInput>;
  connectOrCreate?: Maybe<AccountCreateOrConnectWithoutIntegrationInput>;
  create?: Maybe<AccountCreateWithoutIntegrationInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AccountUpdateWithoutIntegrationInput>;
  upsert?: Maybe<AccountUpsertWithoutIntegrationInput>;
};

export type AccountUpdateWithoutIntegrationDefaultInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  compoundId?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutAccountInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutAccountInput>;
};

export type AccountUpdateWithoutIntegrationInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  compoundId?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutAccountInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutAccountInput>;
};

export type AccountUpdateWithoutUserInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  compoundId?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutAccountInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutAccountInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpsertWithoutIntegrationDefaultInput = {
  create: AccountCreateWithoutIntegrationDefaultInput;
  update: AccountUpdateWithoutIntegrationDefaultInput;
};

export type AccountUpsertWithoutIntegrationInput = {
  create: AccountCreateWithoutIntegrationInput;
  update: AccountUpdateWithoutIntegrationInput;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUserIdProviderIdCompoundUniqueInput = {
  providerId: Scalars['String'];
  userId: Scalars['String'];
};

export type AccountWhereInput = {
  accessToken?: Maybe<StringNullableFilter>;
  accessTokenExpires?: Maybe<DateTimeNullableFilter>;
  AND?: Maybe<Array<AccountWhereInput>>;
  compoundId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  integration?: Maybe<IntegrationListRelationFilter>;
  integrationDefault?: Maybe<IntegrationDefaultListRelationFilter>;
  NOT?: Maybe<Array<AccountWhereInput>>;
  OR?: Maybe<Array<AccountWhereInput>>;
  providerAccountId?: Maybe<StringFilter>;
  providerId?: Maybe<StringFilter>;
  providerType?: Maybe<StringFilter>;
  refreshToken?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  compoundId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  userId_providerId?: Maybe<AccountUserIdProviderIdCompoundUniqueInput>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type Campaign = {
  __typename?: 'Campaign';
  actualRoi?: Maybe<Scalars['Float']>;
  /** Average of budgetlow and budgetHigh */
  budgetAverage?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroup>;
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignOverrides: Array<CampaignOverrides>;
  channel?: Maybe<Channel>;
  channelId?: Maybe<Scalars['String']>;
  commentCount?: Maybe<Scalars['Int']>;
  comments: Array<Comment>;
  confidence?: Maybe<Scalars['Int']>;
  /** Get information about how this campaign contributes to the simulation and relates to contributions from others */
  contributions?: Maybe<Contributions>;
  /** spendAggregated value for a campaign */
  cost?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<Integration>;
  integrationConfig?: Maybe<Scalars['Json']>;
  integrationId?: Maybe<Scalars['String']>;
  kpi?: Maybe<FunnelNode>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name: Scalars['String'];
  note: Scalars['String'];
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultAggregated?: Maybe<CampaignResultAggregation>;
  /** Average of resultLow and resultHigh */
  resultAverage?: Maybe<Scalars['Float']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  resultMap?: Maybe<Array<Maybe<CampaignResultForKpi>>>;
  /** the lowest point in the funnel that has a result */
  returnValue?: Maybe<Scalars['Float']>;
  roiLock: Scalars['Boolean'];
  spendAggregated?: Maybe<CampaignResultAggregation>;
  spendMetricId?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  tags: Array<Tag>;
  tasks: Array<Task>;
  team: Team;
  teamId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};


export type CampaignBudgetAverageArgs = {
  where?: Maybe<CampaignWhereInput>;
};


export type CampaignCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type CampaignTagsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type CampaignTasksArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  orderBy?: Maybe<Array<TaskOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type CampaignCreatecampaignOverridesInput = {
  set?: Maybe<Array<CampaignOverrides>>;
};

export type CampaignCreateInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateManyCampaignGroupInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignOverrides?: Maybe<CampaignCreateManycampaignOverridesInput>;
  channelId?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integrationConfig?: Maybe<Scalars['Json']>;
  integrationId?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetricId?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CampaignCreateManyCampaignGroupInputEnvelope = {
  data?: Maybe<Array<CampaignCreateManyCampaignGroupInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignCreateManycampaignOverridesInput = {
  set?: Maybe<Array<CampaignOverrides>>;
};

export type CampaignCreateManyChannelInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignOverrides?: Maybe<CampaignCreateManycampaignOverridesInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integrationConfig?: Maybe<Scalars['Json']>;
  integrationId?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetricId?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CampaignCreateManyChannelInputEnvelope = {
  data?: Maybe<Array<CampaignCreateManyChannelInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignCreateManyIntegrationInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignOverrides?: Maybe<CampaignCreateManycampaignOverridesInput>;
  channelId?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integrationConfig?: Maybe<Scalars['Json']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetricId?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CampaignCreateManyIntegrationInputEnvelope = {
  data?: Maybe<Array<CampaignCreateManyIntegrationInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignCreateManyKpiInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignOverrides?: Maybe<CampaignCreateManycampaignOverridesInput>;
  channelId?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integrationConfig?: Maybe<Scalars['Json']>;
  integrationId?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetricId?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CampaignCreateManyKpiInputEnvelope = {
  data?: Maybe<Array<CampaignCreateManyKpiInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignCreateManySpendMetricInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignOverrides?: Maybe<CampaignCreateManycampaignOverridesInput>;
  channelId?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integrationConfig?: Maybe<Scalars['Json']>;
  integrationId?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CampaignCreateManySpendMetricInputEnvelope = {
  data?: Maybe<Array<CampaignCreateManySpendMetricInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignCreateManyTeamInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignOverrides?: Maybe<CampaignCreateManycampaignOverridesInput>;
  channelId?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integrationConfig?: Maybe<Scalars['Json']>;
  integrationId?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetricId?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CampaignCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<CampaignCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignCreateManyUserInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignOverrides?: Maybe<CampaignCreateManycampaignOverridesInput>;
  channelId?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integrationConfig?: Maybe<Scalars['Json']>;
  integrationId?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetricId?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignCreateManyUserInputEnvelope = {
  data?: Maybe<Array<CampaignCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignCreateNestedManyWithoutCampaignGroupInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutCampaignGroupInput>>;
  create?: Maybe<Array<CampaignCreateWithoutCampaignGroupInput>>;
  createMany?: Maybe<CampaignCreateManyCampaignGroupInputEnvelope>;
};

export type CampaignCreateNestedManyWithoutChannelInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutChannelInput>>;
  create?: Maybe<Array<CampaignCreateWithoutChannelInput>>;
  createMany?: Maybe<CampaignCreateManyChannelInputEnvelope>;
};

export type CampaignCreateNestedManyWithoutIntegrationInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutIntegrationInput>>;
  create?: Maybe<Array<CampaignCreateWithoutIntegrationInput>>;
  createMany?: Maybe<CampaignCreateManyIntegrationInputEnvelope>;
};

export type CampaignCreateNestedManyWithoutKpiInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutKpiInput>>;
  create?: Maybe<Array<CampaignCreateWithoutKpiInput>>;
  createMany?: Maybe<CampaignCreateManyKpiInputEnvelope>;
};

export type CampaignCreateNestedManyWithoutSpendMetricInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutSpendMetricInput>>;
  create?: Maybe<Array<CampaignCreateWithoutSpendMetricInput>>;
  createMany?: Maybe<CampaignCreateManySpendMetricInputEnvelope>;
};

export type CampaignCreateNestedManyWithoutTagsInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutTagsInput>>;
  create?: Maybe<Array<CampaignCreateWithoutTagsInput>>;
};

export type CampaignCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<CampaignCreateWithoutTeamInput>>;
  createMany?: Maybe<CampaignCreateManyTeamInputEnvelope>;
};

export type CampaignCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<CampaignCreateWithoutUserInput>>;
  createMany?: Maybe<CampaignCreateManyUserInputEnvelope>;
};

export type CampaignCreateNestedOneWithoutCampaignResultInput = {
  connect?: Maybe<CampaignWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignCreateOrConnectWithoutCampaignResultInput>;
  create?: Maybe<CampaignCreateWithoutCampaignResultInput>;
};

export type CampaignCreateNestedOneWithoutCampaignResultMapInput = {
  connect?: Maybe<CampaignWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignCreateOrConnectWithoutCampaignResultMapInput>;
  create?: Maybe<CampaignCreateWithoutCampaignResultMapInput>;
};

export type CampaignCreateNestedOneWithoutCampaignResultMetricInput = {
  connect?: Maybe<CampaignWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignCreateOrConnectWithoutCampaignResultMetricInput>;
  create?: Maybe<CampaignCreateWithoutCampaignResultMetricInput>;
};

export type CampaignCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<CampaignWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<CampaignCreateWithoutCommentsInput>;
};

export type CampaignCreateNestedOneWithoutTasksInput = {
  connect?: Maybe<CampaignWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignCreateOrConnectWithoutTasksInput>;
  create?: Maybe<CampaignCreateWithoutTasksInput>;
};

export type CampaignCreateOrConnectWithoutCampaignGroupInput = {
  create: CampaignCreateWithoutCampaignGroupInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateOrConnectWithoutCampaignResultInput = {
  create: CampaignCreateWithoutCampaignResultInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateOrConnectWithoutCampaignResultMapInput = {
  create: CampaignCreateWithoutCampaignResultMapInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateOrConnectWithoutCampaignResultMetricInput = {
  create: CampaignCreateWithoutCampaignResultMetricInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateOrConnectWithoutChannelInput = {
  create: CampaignCreateWithoutChannelInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateOrConnectWithoutCommentsInput = {
  create: CampaignCreateWithoutCommentsInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateOrConnectWithoutIntegrationInput = {
  create: CampaignCreateWithoutIntegrationInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateOrConnectWithoutKpiInput = {
  create: CampaignCreateWithoutKpiInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateOrConnectWithoutSpendMetricInput = {
  create: CampaignCreateWithoutSpendMetricInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateOrConnectWithoutTagsInput = {
  create: CampaignCreateWithoutTagsInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateOrConnectWithoutTasksInput = {
  create: CampaignCreateWithoutTasksInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateOrConnectWithoutTeamInput = {
  create: CampaignCreateWithoutTeamInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateOrConnectWithoutUserInput = {
  create: CampaignCreateWithoutUserInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignCreateWithoutCampaignGroupInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutCampaignResultInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutCampaignResultMapInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutCampaignResultMetricInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutChannelInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutCommentsInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutIntegrationInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutKpiInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutSpendMetricInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutTagsInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutTasksInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutTeamInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCampaignsInput;
};

export type CampaignCreateWithoutUserInput = {
  actualRoi?: Maybe<Scalars['Float']>;
  budgetHigh?: Maybe<Scalars['Float']>;
  budgetLow?: Maybe<Scalars['Float']>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignCreatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedManyWithoutCampaignInput>;
  channel?: Maybe<ChannelCreateNestedOneWithoutCampaignInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignsInput>;
  lastRun?: Maybe<Scalars['DateTime']>;
  lastRunStatus?: Maybe<IntegrationStatusType>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  predictedRoi?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Int']>;
  resultHigh?: Maybe<Scalars['Float']>;
  resultLow?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['Float']>;
  roiLock?: Maybe<Scalars['Boolean']>;
  spendMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput>;
  start?: Maybe<Scalars['DateTime']>;
  state?: Maybe<CampaignState>;
  tags?: Maybe<TagCreateNestedManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignInput>;
  team: TeamCreateNestedOneWithoutCampaignsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum CampaignDataValueType {
  RESULT = 'RESULT',
  SPEND = 'SPEND'
}

export type CampaignDisconnectionResponse = {
  __typename?: 'CampaignDisconnectionResponse';
  campaignId?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  taskerId?: Maybe<Scalars['String']>;
};

export type CampaignGroup = {
  __typename?: 'CampaignGroup';
  campaigns: Array<Campaign>;
  comments: Array<Comment>;
  contributions?: Maybe<CampaignGroupsContribution>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['Int']>;
  expectedSpend?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  kpi?: Maybe<FunnelNode>;
  owner?: Maybe<User>;
  tasks: Array<Task>;
  team: Team;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type CampaignGroupCampaignsArgs = {
  cursor?: Maybe<CampaignWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type CampaignGroupCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type CampaignGroupTasksArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type CampaignGroupCreateInput = {
  campaigns?: Maybe<CampaignCreateNestedManyWithoutCampaignGroupInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['Int']>;
  expectedSpend?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignGroupsInput>;
  owner?: Maybe<UserCreateNestedOneWithoutCampaignGroupsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignGroupInput>;
  team: TeamCreateNestedOneWithoutCampaignGroupsInput;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignGroupCreateManyKpiInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['Int']>;
  expectedSpend?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignGroupCreateManyKpiInputEnvelope = {
  data?: Maybe<Array<CampaignGroupCreateManyKpiInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignGroupCreateManyOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['Int']>;
  expectedSpend?: Maybe<Scalars['Int']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignGroupCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<CampaignGroupCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignGroupCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['Int']>;
  expectedSpend?: Maybe<Scalars['Int']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignGroupCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<CampaignGroupCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignGroupCreateNestedManyWithoutKpiInput = {
  connect?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignGroupCreateOrConnectWithoutKpiInput>>;
  create?: Maybe<Array<CampaignGroupCreateWithoutKpiInput>>;
  createMany?: Maybe<CampaignGroupCreateManyKpiInputEnvelope>;
};

export type CampaignGroupCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignGroupCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<CampaignGroupCreateWithoutOwnerInput>>;
  createMany?: Maybe<CampaignGroupCreateManyOwnerInputEnvelope>;
};

export type CampaignGroupCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignGroupCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<CampaignGroupCreateWithoutTeamInput>>;
  createMany?: Maybe<CampaignGroupCreateManyTeamInputEnvelope>;
};

export type CampaignGroupCreateNestedOneWithoutCampaignsInput = {
  connect?: Maybe<CampaignGroupWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignGroupCreateOrConnectWithoutCampaignsInput>;
  create?: Maybe<CampaignGroupCreateWithoutCampaignsInput>;
};

export type CampaignGroupCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<CampaignGroupWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignGroupCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<CampaignGroupCreateWithoutCommentsInput>;
};

export type CampaignGroupCreateNestedOneWithoutTasksInput = {
  connect?: Maybe<CampaignGroupWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignGroupCreateOrConnectWithoutTasksInput>;
  create?: Maybe<CampaignGroupCreateWithoutTasksInput>;
};

export type CampaignGroupCreateOrConnectWithoutCampaignsInput = {
  create: CampaignGroupCreateWithoutCampaignsInput;
  where: CampaignGroupWhereUniqueInput;
};

export type CampaignGroupCreateOrConnectWithoutCommentsInput = {
  create: CampaignGroupCreateWithoutCommentsInput;
  where: CampaignGroupWhereUniqueInput;
};

export type CampaignGroupCreateOrConnectWithoutKpiInput = {
  create: CampaignGroupCreateWithoutKpiInput;
  where: CampaignGroupWhereUniqueInput;
};

export type CampaignGroupCreateOrConnectWithoutOwnerInput = {
  create: CampaignGroupCreateWithoutOwnerInput;
  where: CampaignGroupWhereUniqueInput;
};

export type CampaignGroupCreateOrConnectWithoutTasksInput = {
  create: CampaignGroupCreateWithoutTasksInput;
  where: CampaignGroupWhereUniqueInput;
};

export type CampaignGroupCreateOrConnectWithoutTeamInput = {
  create: CampaignGroupCreateWithoutTeamInput;
  where: CampaignGroupWhereUniqueInput;
};

export type CampaignGroupCreateWithoutCampaignsInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['Int']>;
  expectedSpend?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignGroupsInput>;
  owner?: Maybe<UserCreateNestedOneWithoutCampaignGroupsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignGroupInput>;
  team: TeamCreateNestedOneWithoutCampaignGroupsInput;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignGroupCreateWithoutCommentsInput = {
  campaigns?: Maybe<CampaignCreateNestedManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['Int']>;
  expectedSpend?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignGroupsInput>;
  owner?: Maybe<UserCreateNestedOneWithoutCampaignGroupsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignGroupInput>;
  team: TeamCreateNestedOneWithoutCampaignGroupsInput;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignGroupCreateWithoutKpiInput = {
  campaigns?: Maybe<CampaignCreateNestedManyWithoutCampaignGroupInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['Int']>;
  expectedSpend?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  owner?: Maybe<UserCreateNestedOneWithoutCampaignGroupsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignGroupInput>;
  team: TeamCreateNestedOneWithoutCampaignGroupsInput;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignGroupCreateWithoutOwnerInput = {
  campaigns?: Maybe<CampaignCreateNestedManyWithoutCampaignGroupInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['Int']>;
  expectedSpend?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignGroupsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignGroupInput>;
  team: TeamCreateNestedOneWithoutCampaignGroupsInput;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignGroupCreateWithoutTasksInput = {
  campaigns?: Maybe<CampaignCreateNestedManyWithoutCampaignGroupInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['Int']>;
  expectedSpend?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignGroupsInput>;
  owner?: Maybe<UserCreateNestedOneWithoutCampaignGroupsInput>;
  team: TeamCreateNestedOneWithoutCampaignGroupsInput;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignGroupCreateWithoutTeamInput = {
  campaigns?: Maybe<CampaignCreateNestedManyWithoutCampaignGroupInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  expectedResult?: Maybe<Scalars['Int']>;
  expectedSpend?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutCampaignGroupsInput>;
  owner?: Maybe<UserCreateNestedOneWithoutCampaignGroupsInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutCampaignGroupInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignGroupListRelationFilter = {
  every?: Maybe<CampaignGroupWhereInput>;
  none?: Maybe<CampaignGroupWhereInput>;
  some?: Maybe<CampaignGroupWhereInput>;
};

export type CampaignGroupScalarWhereInput = {
  AND?: Maybe<Array<CampaignGroupScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  emoji?: Maybe<StringNullableFilter>;
  expectedResult?: Maybe<IntNullableFilter>;
  expectedSpend?: Maybe<IntNullableFilter>;
  funnelNodeId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CampaignGroupScalarWhereInput>>;
  OR?: Maybe<Array<CampaignGroupScalarWhereInput>>;
  ownerId?: Maybe<StringNullableFilter>;
  teamId?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CampaignGroupsContribution = {
  __typename?: 'CampaignGroupsContribution';
  campaignsContributionToGoal?: Maybe<Scalars['Float']>;
  campaignsContributionToGoalPercentage?: Maybe<Scalars['Float']>;
};

export type CampaignGroupUpdateInput = {
  campaigns?: Maybe<CampaignUpdateManyWithoutCampaignGroupInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emoji?: Maybe<NullableStringFieldUpdateOperationsInput>;
  expectedResult?: Maybe<NullableIntFieldUpdateOperationsInput>;
  expectedSpend?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignGroupsInput>;
  owner?: Maybe<UserUpdateOneWithoutCampaignGroupsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignGroupInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignGroupsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignGroupUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emoji?: Maybe<NullableStringFieldUpdateOperationsInput>;
  expectedResult?: Maybe<NullableIntFieldUpdateOperationsInput>;
  expectedSpend?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignGroupUpdateManyWithoutKpiInput = {
  connect?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignGroupCreateOrConnectWithoutKpiInput>>;
  create?: Maybe<Array<CampaignGroupCreateWithoutKpiInput>>;
  createMany?: Maybe<CampaignGroupCreateManyKpiInputEnvelope>;
  delete?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignGroupScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  set?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  update?: Maybe<Array<CampaignGroupUpdateWithWhereUniqueWithoutKpiInput>>;
  updateMany?: Maybe<Array<CampaignGroupUpdateManyWithWhereWithoutKpiInput>>;
  upsert?: Maybe<Array<CampaignGroupUpsertWithWhereUniqueWithoutKpiInput>>;
};

export type CampaignGroupUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignGroupCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<CampaignGroupCreateWithoutOwnerInput>>;
  createMany?: Maybe<CampaignGroupCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignGroupScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  set?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  update?: Maybe<Array<CampaignGroupUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<CampaignGroupUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<CampaignGroupUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type CampaignGroupUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignGroupCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<CampaignGroupCreateWithoutTeamInput>>;
  createMany?: Maybe<CampaignGroupCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignGroupScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  set?: Maybe<Array<CampaignGroupWhereUniqueInput>>;
  update?: Maybe<Array<CampaignGroupUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<CampaignGroupUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<CampaignGroupUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type CampaignGroupUpdateManyWithWhereWithoutKpiInput = {
  data: CampaignGroupUpdateManyMutationInput;
  where: CampaignGroupScalarWhereInput;
};

export type CampaignGroupUpdateManyWithWhereWithoutOwnerInput = {
  data: CampaignGroupUpdateManyMutationInput;
  where: CampaignGroupScalarWhereInput;
};

export type CampaignGroupUpdateManyWithWhereWithoutTeamInput = {
  data: CampaignGroupUpdateManyMutationInput;
  where: CampaignGroupScalarWhereInput;
};

export type CampaignGroupUpdateOneWithoutCampaignsInput = {
  connect?: Maybe<CampaignGroupWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignGroupCreateOrConnectWithoutCampaignsInput>;
  create?: Maybe<CampaignGroupCreateWithoutCampaignsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CampaignGroupUpdateWithoutCampaignsInput>;
  upsert?: Maybe<CampaignGroupUpsertWithoutCampaignsInput>;
};

export type CampaignGroupUpdateOneWithoutCommentsInput = {
  connect?: Maybe<CampaignGroupWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignGroupCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<CampaignGroupCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CampaignGroupUpdateWithoutCommentsInput>;
  upsert?: Maybe<CampaignGroupUpsertWithoutCommentsInput>;
};

export type CampaignGroupUpdateOneWithoutTasksInput = {
  connect?: Maybe<CampaignGroupWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignGroupCreateOrConnectWithoutTasksInput>;
  create?: Maybe<CampaignGroupCreateWithoutTasksInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CampaignGroupUpdateWithoutTasksInput>;
  upsert?: Maybe<CampaignGroupUpsertWithoutTasksInput>;
};

export type CampaignGroupUpdateWithoutCampaignsInput = {
  comments?: Maybe<CommentUpdateManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emoji?: Maybe<NullableStringFieldUpdateOperationsInput>;
  expectedResult?: Maybe<NullableIntFieldUpdateOperationsInput>;
  expectedSpend?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignGroupsInput>;
  owner?: Maybe<UserUpdateOneWithoutCampaignGroupsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignGroupInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignGroupsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignGroupUpdateWithoutCommentsInput = {
  campaigns?: Maybe<CampaignUpdateManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emoji?: Maybe<NullableStringFieldUpdateOperationsInput>;
  expectedResult?: Maybe<NullableIntFieldUpdateOperationsInput>;
  expectedSpend?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignGroupsInput>;
  owner?: Maybe<UserUpdateOneWithoutCampaignGroupsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignGroupInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignGroupsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignGroupUpdateWithoutKpiInput = {
  campaigns?: Maybe<CampaignUpdateManyWithoutCampaignGroupInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emoji?: Maybe<NullableStringFieldUpdateOperationsInput>;
  expectedResult?: Maybe<NullableIntFieldUpdateOperationsInput>;
  expectedSpend?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutCampaignGroupsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignGroupInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignGroupsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignGroupUpdateWithoutOwnerInput = {
  campaigns?: Maybe<CampaignUpdateManyWithoutCampaignGroupInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emoji?: Maybe<NullableStringFieldUpdateOperationsInput>;
  expectedResult?: Maybe<NullableIntFieldUpdateOperationsInput>;
  expectedSpend?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignGroupsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignGroupInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignGroupsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignGroupUpdateWithoutTasksInput = {
  campaigns?: Maybe<CampaignUpdateManyWithoutCampaignGroupInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emoji?: Maybe<NullableStringFieldUpdateOperationsInput>;
  expectedResult?: Maybe<NullableIntFieldUpdateOperationsInput>;
  expectedSpend?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignGroupsInput>;
  owner?: Maybe<UserUpdateOneWithoutCampaignGroupsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignGroupsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignGroupUpdateWithoutTeamInput = {
  campaigns?: Maybe<CampaignUpdateManyWithoutCampaignGroupInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignGroupInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emoji?: Maybe<NullableStringFieldUpdateOperationsInput>;
  expectedResult?: Maybe<NullableIntFieldUpdateOperationsInput>;
  expectedSpend?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignGroupsInput>;
  owner?: Maybe<UserUpdateOneWithoutCampaignGroupsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignGroupInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignGroupUpdateWithWhereUniqueWithoutKpiInput = {
  data: CampaignGroupUpdateWithoutKpiInput;
  where: CampaignGroupWhereUniqueInput;
};

export type CampaignGroupUpdateWithWhereUniqueWithoutOwnerInput = {
  data: CampaignGroupUpdateWithoutOwnerInput;
  where: CampaignGroupWhereUniqueInput;
};

export type CampaignGroupUpdateWithWhereUniqueWithoutTeamInput = {
  data: CampaignGroupUpdateWithoutTeamInput;
  where: CampaignGroupWhereUniqueInput;
};

export type CampaignGroupUpsertWithoutCampaignsInput = {
  create: CampaignGroupCreateWithoutCampaignsInput;
  update: CampaignGroupUpdateWithoutCampaignsInput;
};

export type CampaignGroupUpsertWithoutCommentsInput = {
  create: CampaignGroupCreateWithoutCommentsInput;
  update: CampaignGroupUpdateWithoutCommentsInput;
};

export type CampaignGroupUpsertWithoutTasksInput = {
  create: CampaignGroupCreateWithoutTasksInput;
  update: CampaignGroupUpdateWithoutTasksInput;
};

export type CampaignGroupUpsertWithWhereUniqueWithoutKpiInput = {
  create: CampaignGroupCreateWithoutKpiInput;
  update: CampaignGroupUpdateWithoutKpiInput;
  where: CampaignGroupWhereUniqueInput;
};

export type CampaignGroupUpsertWithWhereUniqueWithoutOwnerInput = {
  create: CampaignGroupCreateWithoutOwnerInput;
  update: CampaignGroupUpdateWithoutOwnerInput;
  where: CampaignGroupWhereUniqueInput;
};

export type CampaignGroupUpsertWithWhereUniqueWithoutTeamInput = {
  create: CampaignGroupCreateWithoutTeamInput;
  update: CampaignGroupUpdateWithoutTeamInput;
  where: CampaignGroupWhereUniqueInput;
};

export type CampaignGroupWhereInput = {
  AND?: Maybe<Array<CampaignGroupWhereInput>>;
  campaigns?: Maybe<CampaignListRelationFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  emoji?: Maybe<StringNullableFilter>;
  expectedResult?: Maybe<IntNullableFilter>;
  expectedSpend?: Maybe<IntNullableFilter>;
  funnelNodeId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  kpi?: Maybe<FunnelNodeWhereInput>;
  NOT?: Maybe<Array<CampaignGroupWhereInput>>;
  OR?: Maybe<Array<CampaignGroupWhereInput>>;
  owner?: Maybe<UserWhereInput>;
  ownerId?: Maybe<StringNullableFilter>;
  tasks?: Maybe<TaskListRelationFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CampaignGroupWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CampaignListRelationFilter = {
  every?: Maybe<CampaignWhereInput>;
  none?: Maybe<CampaignWhereInput>;
  some?: Maybe<CampaignWhereInput>;
};

export type CampaignOrderByInput = {
  actualRoi?: Maybe<SortOrder>;
  budgetHigh?: Maybe<SortOrder>;
  budgetLow?: Maybe<SortOrder>;
  campaignGroupId?: Maybe<SortOrder>;
  campaignOverrides?: Maybe<SortOrder>;
  channelId?: Maybe<SortOrder>;
  confidence?: Maybe<SortOrder>;
  cost?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  effort?: Maybe<SortOrder>;
  end?: Maybe<SortOrder>;
  funnelNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  impact?: Maybe<SortOrder>;
  integrationConfig?: Maybe<SortOrder>;
  integrationId?: Maybe<SortOrder>;
  lastRun?: Maybe<SortOrder>;
  lastRunStatus?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  note?: Maybe<SortOrder>;
  predictedRoi?: Maybe<SortOrder>;
  priority?: Maybe<SortOrder>;
  resultHigh?: Maybe<SortOrder>;
  resultLow?: Maybe<SortOrder>;
  returnValue?: Maybe<SortOrder>;
  roiLock?: Maybe<SortOrder>;
  spendMetricId?: Maybe<SortOrder>;
  start?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum CampaignOverrides {
  BUDGET = 'BUDGET',
  DATE = 'DATE',
  ENDDATE = 'ENDDATE',
  NAME = 'NAME',
  RESULT = 'RESULT',
  SPEND = 'SPEND',
  STARTDATE = 'STARTDATE'
}

export type CampaignResultAggregation = {
  __typename?: 'CampaignResultAggregation';
  sourceType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type CampaignResultCampaignIdProviderMetricNameDateCompoundUniqueInput = {
  campaignId: Scalars['String'];
  date: Scalars['DateTime'];
  providerMetricName: Scalars['String'];
};

export type CampaignResultCreateManyCampaignInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  providerMetricName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Float'];
  valueType?: Maybe<CampaignDataValueType>;
};

export type CampaignResultCreateManyCampaignInputEnvelope = {
  data?: Maybe<Array<CampaignResultCreateManyCampaignInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignResultCreateManyCampaignResultMetricInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Float'];
  valueType?: Maybe<CampaignDataValueType>;
};

export type CampaignResultCreateManyCampaignResultMetricInputEnvelope = {
  data?: Maybe<Array<CampaignResultCreateManyCampaignResultMetricInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignResultCreateNestedManyWithoutCampaignInput = {
  connect?: Maybe<Array<CampaignResultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignResultCreateOrConnectWithoutCampaignInput>>;
  create?: Maybe<Array<CampaignResultCreateWithoutCampaignInput>>;
  createMany?: Maybe<CampaignResultCreateManyCampaignInputEnvelope>;
};

export type CampaignResultCreateNestedManyWithoutCampaignResultMetricInput = {
  connect?: Maybe<Array<CampaignResultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignResultCreateOrConnectWithoutCampaignResultMetricInput>>;
  create?: Maybe<Array<CampaignResultCreateWithoutCampaignResultMetricInput>>;
  createMany?: Maybe<CampaignResultCreateManyCampaignResultMetricInputEnvelope>;
};

export type CampaignResultCreateOrConnectWithoutCampaignInput = {
  create: CampaignResultCreateWithoutCampaignInput;
  where: CampaignResultWhereUniqueInput;
};

export type CampaignResultCreateOrConnectWithoutCampaignResultMetricInput = {
  create: CampaignResultCreateWithoutCampaignResultMetricInput;
  where: CampaignResultWhereUniqueInput;
};

export type CampaignResultCreateWithoutCampaignInput = {
  campaignResultMetric?: Maybe<CampaignResultMetricCreateNestedOneWithoutCampaignResultInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Float'];
  valueType?: Maybe<CampaignDataValueType>;
};

export type CampaignResultCreateWithoutCampaignResultMetricInput = {
  campaign?: Maybe<CampaignCreateNestedOneWithoutCampaignResultInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Float'];
  valueType?: Maybe<CampaignDataValueType>;
};

export type CampaignResultForKpi = {
  __typename?: 'CampaignResultForKPI';
  funnelNodeId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  providerMetricName?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type CampaignResultListRelationFilter = {
  every?: Maybe<CampaignResultWhereInput>;
  none?: Maybe<CampaignResultWhereInput>;
  some?: Maybe<CampaignResultWhereInput>;
};

export type CampaignResultMap = {
  __typename?: 'CampaignResultMap';
  campaign: Campaign;
  campaignId: Scalars['String'];
  providerMetricName: Scalars['String'];
};

export type CampaignResultMapCampaignIdFunnelNodeIdCompoundUniqueInput = {
  campaignId: Scalars['String'];
  funnelNodeId: Scalars['String'];
};

export type CampaignResultMapCreateManyCampaignInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelNodeId: Scalars['String'];
  providerMetricName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignResultMapCreateManyCampaignInputEnvelope = {
  data?: Maybe<Array<CampaignResultMapCreateManyCampaignInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignResultMapCreateManyCampaignResultMetricInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelNodeId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignResultMapCreateManyCampaignResultMetricInputEnvelope = {
  data?: Maybe<Array<CampaignResultMapCreateManyCampaignResultMetricInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignResultMapCreateManyKpiInput = {
  campaignId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  providerMetricName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignResultMapCreateManyKpiInputEnvelope = {
  data?: Maybe<Array<CampaignResultMapCreateManyKpiInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignResultMapCreateNestedManyWithoutCampaignInput = {
  connect?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignResultMapCreateOrConnectWithoutCampaignInput>>;
  create?: Maybe<Array<CampaignResultMapCreateWithoutCampaignInput>>;
  createMany?: Maybe<CampaignResultMapCreateManyCampaignInputEnvelope>;
};

export type CampaignResultMapCreateNestedManyWithoutCampaignResultMetricInput = {
  connect?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignResultMapCreateOrConnectWithoutCampaignResultMetricInput>>;
  create?: Maybe<Array<CampaignResultMapCreateWithoutCampaignResultMetricInput>>;
  createMany?: Maybe<CampaignResultMapCreateManyCampaignResultMetricInputEnvelope>;
};

export type CampaignResultMapCreateNestedManyWithoutKpiInput = {
  connect?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignResultMapCreateOrConnectWithoutKpiInput>>;
  create?: Maybe<Array<CampaignResultMapCreateWithoutKpiInput>>;
  createMany?: Maybe<CampaignResultMapCreateManyKpiInputEnvelope>;
};

export type CampaignResultMapCreateOrConnectWithoutCampaignInput = {
  create: CampaignResultMapCreateWithoutCampaignInput;
  where: CampaignResultMapWhereUniqueInput;
};

export type CampaignResultMapCreateOrConnectWithoutCampaignResultMetricInput = {
  create: CampaignResultMapCreateWithoutCampaignResultMetricInput;
  where: CampaignResultMapWhereUniqueInput;
};

export type CampaignResultMapCreateOrConnectWithoutKpiInput = {
  create: CampaignResultMapCreateWithoutKpiInput;
  where: CampaignResultMapWhereUniqueInput;
};

export type CampaignResultMapCreateWithoutCampaignInput = {
  campaignResultMetric: CampaignResultMetricCreateNestedOneWithoutCampaignResultMapInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  kpi: FunnelNodeCreateNestedOneWithoutCampaignResultMapInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignResultMapCreateWithoutCampaignResultMetricInput = {
  campaign: CampaignCreateNestedOneWithoutCampaignResultMapInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  kpi: FunnelNodeCreateNestedOneWithoutCampaignResultMapInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignResultMapCreateWithoutKpiInput = {
  campaign: CampaignCreateNestedOneWithoutCampaignResultMapInput;
  campaignResultMetric: CampaignResultMetricCreateNestedOneWithoutCampaignResultMapInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignResultMapListRelationFilter = {
  every?: Maybe<CampaignResultMapWhereInput>;
  none?: Maybe<CampaignResultMapWhereInput>;
  some?: Maybe<CampaignResultMapWhereInput>;
};

export type CampaignResultMapScalarWhereInput = {
  AND?: Maybe<Array<CampaignResultMapScalarWhereInput>>;
  campaignId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  funnelNodeId?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CampaignResultMapScalarWhereInput>>;
  OR?: Maybe<Array<CampaignResultMapScalarWhereInput>>;
  providerMetricName?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CampaignResultMapUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignResultMapUpdateManyWithoutCampaignInput = {
  connect?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignResultMapCreateOrConnectWithoutCampaignInput>>;
  create?: Maybe<Array<CampaignResultMapCreateWithoutCampaignInput>>;
  createMany?: Maybe<CampaignResultMapCreateManyCampaignInputEnvelope>;
  delete?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignResultMapScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  set?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  update?: Maybe<Array<CampaignResultMapUpdateWithWhereUniqueWithoutCampaignInput>>;
  updateMany?: Maybe<Array<CampaignResultMapUpdateManyWithWhereWithoutCampaignInput>>;
  upsert?: Maybe<Array<CampaignResultMapUpsertWithWhereUniqueWithoutCampaignInput>>;
};

export type CampaignResultMapUpdateManyWithoutCampaignResultMetricInput = {
  connect?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignResultMapCreateOrConnectWithoutCampaignResultMetricInput>>;
  create?: Maybe<Array<CampaignResultMapCreateWithoutCampaignResultMetricInput>>;
  createMany?: Maybe<CampaignResultMapCreateManyCampaignResultMetricInputEnvelope>;
  delete?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignResultMapScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  set?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  update?: Maybe<Array<CampaignResultMapUpdateWithWhereUniqueWithoutCampaignResultMetricInput>>;
  updateMany?: Maybe<Array<CampaignResultMapUpdateManyWithWhereWithoutCampaignResultMetricInput>>;
  upsert?: Maybe<Array<CampaignResultMapUpsertWithWhereUniqueWithoutCampaignResultMetricInput>>;
};

export type CampaignResultMapUpdateManyWithoutKpiInput = {
  connect?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignResultMapCreateOrConnectWithoutKpiInput>>;
  create?: Maybe<Array<CampaignResultMapCreateWithoutKpiInput>>;
  createMany?: Maybe<CampaignResultMapCreateManyKpiInputEnvelope>;
  delete?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignResultMapScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  set?: Maybe<Array<CampaignResultMapWhereUniqueInput>>;
  update?: Maybe<Array<CampaignResultMapUpdateWithWhereUniqueWithoutKpiInput>>;
  updateMany?: Maybe<Array<CampaignResultMapUpdateManyWithWhereWithoutKpiInput>>;
  upsert?: Maybe<Array<CampaignResultMapUpsertWithWhereUniqueWithoutKpiInput>>;
};

export type CampaignResultMapUpdateManyWithWhereWithoutCampaignInput = {
  data: CampaignResultMapUpdateManyMutationInput;
  where: CampaignResultMapScalarWhereInput;
};

export type CampaignResultMapUpdateManyWithWhereWithoutCampaignResultMetricInput = {
  data: CampaignResultMapUpdateManyMutationInput;
  where: CampaignResultMapScalarWhereInput;
};

export type CampaignResultMapUpdateManyWithWhereWithoutKpiInput = {
  data: CampaignResultMapUpdateManyMutationInput;
  where: CampaignResultMapScalarWhereInput;
};

export type CampaignResultMapUpdateWithoutCampaignInput = {
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateOneRequiredWithoutCampaignResultMapInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneRequiredWithoutCampaignResultMapInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignResultMapUpdateWithoutCampaignResultMetricInput = {
  campaign?: Maybe<CampaignUpdateOneRequiredWithoutCampaignResultMapInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneRequiredWithoutCampaignResultMapInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignResultMapUpdateWithoutKpiInput = {
  campaign?: Maybe<CampaignUpdateOneRequiredWithoutCampaignResultMapInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateOneRequiredWithoutCampaignResultMapInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignResultMapUpdateWithWhereUniqueWithoutCampaignInput = {
  data: CampaignResultMapUpdateWithoutCampaignInput;
  where: CampaignResultMapWhereUniqueInput;
};

export type CampaignResultMapUpdateWithWhereUniqueWithoutCampaignResultMetricInput = {
  data: CampaignResultMapUpdateWithoutCampaignResultMetricInput;
  where: CampaignResultMapWhereUniqueInput;
};

export type CampaignResultMapUpdateWithWhereUniqueWithoutKpiInput = {
  data: CampaignResultMapUpdateWithoutKpiInput;
  where: CampaignResultMapWhereUniqueInput;
};

export type CampaignResultMapUpsertWithWhereUniqueWithoutCampaignInput = {
  create: CampaignResultMapCreateWithoutCampaignInput;
  update: CampaignResultMapUpdateWithoutCampaignInput;
  where: CampaignResultMapWhereUniqueInput;
};

export type CampaignResultMapUpsertWithWhereUniqueWithoutCampaignResultMetricInput = {
  create: CampaignResultMapCreateWithoutCampaignResultMetricInput;
  update: CampaignResultMapUpdateWithoutCampaignResultMetricInput;
  where: CampaignResultMapWhereUniqueInput;
};

export type CampaignResultMapUpsertWithWhereUniqueWithoutKpiInput = {
  create: CampaignResultMapCreateWithoutKpiInput;
  update: CampaignResultMapUpdateWithoutKpiInput;
  where: CampaignResultMapWhereUniqueInput;
};

export type CampaignResultMapWhereInput = {
  AND?: Maybe<Array<CampaignResultMapWhereInput>>;
  campaign?: Maybe<CampaignWhereInput>;
  campaignId?: Maybe<StringFilter>;
  campaignResultMetric?: Maybe<CampaignResultMetricWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  funnelNodeId?: Maybe<StringFilter>;
  kpi?: Maybe<FunnelNodeWhereInput>;
  NOT?: Maybe<Array<CampaignResultMapWhereInput>>;
  OR?: Maybe<Array<CampaignResultMapWhereInput>>;
  providerMetricName?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CampaignResultMapWhereUniqueInput = {
  campaignId_funnelNodeId?: Maybe<CampaignResultMapCampaignIdFunnelNodeIdCompoundUniqueInput>;
};

export type CampaignResultMetricCampaignIdProviderMetricNameCompoundUniqueInput = {
  campaignId: Scalars['String'];
  providerMetricName: Scalars['String'];
};

export type CampaignResultMetricCreateManyCampaignInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerMetricName: Scalars['String'];
  providerName: Scalars['String'];
  totalValue: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignResultMetricCreateManyCampaignInputEnvelope = {
  data?: Maybe<Array<CampaignResultMetricCreateManyCampaignInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CampaignResultMetricCreateNestedManyWithoutCampaignInput = {
  connect?: Maybe<Array<CampaignResultMetricWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignResultMetricCreateOrConnectWithoutCampaignInput>>;
  create?: Maybe<Array<CampaignResultMetricCreateWithoutCampaignInput>>;
  createMany?: Maybe<CampaignResultMetricCreateManyCampaignInputEnvelope>;
};

export type CampaignResultMetricCreateNestedOneWithoutCampaignResultInput = {
  connect?: Maybe<CampaignResultMetricWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignResultMetricCreateOrConnectWithoutCampaignResultInput>;
  create?: Maybe<CampaignResultMetricCreateWithoutCampaignResultInput>;
};

export type CampaignResultMetricCreateNestedOneWithoutCampaignResultMapInput = {
  connect?: Maybe<CampaignResultMetricWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignResultMetricCreateOrConnectWithoutCampaignResultMapInput>;
  create?: Maybe<CampaignResultMetricCreateWithoutCampaignResultMapInput>;
};

export type CampaignResultMetricCreateNestedOneWithoutSpendCampaignsInput = {
  connect?: Maybe<CampaignResultMetricWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignResultMetricCreateOrConnectWithoutSpendCampaignsInput>;
  create?: Maybe<CampaignResultMetricCreateWithoutSpendCampaignsInput>;
};

export type CampaignResultMetricCreateOrConnectWithoutCampaignInput = {
  create: CampaignResultMetricCreateWithoutCampaignInput;
  where: CampaignResultMetricWhereUniqueInput;
};

export type CampaignResultMetricCreateOrConnectWithoutCampaignResultInput = {
  create: CampaignResultMetricCreateWithoutCampaignResultInput;
  where: CampaignResultMetricWhereUniqueInput;
};

export type CampaignResultMetricCreateOrConnectWithoutCampaignResultMapInput = {
  create: CampaignResultMetricCreateWithoutCampaignResultMapInput;
  where: CampaignResultMetricWhereUniqueInput;
};

export type CampaignResultMetricCreateOrConnectWithoutSpendCampaignsInput = {
  create: CampaignResultMetricCreateWithoutSpendCampaignsInput;
  where: CampaignResultMetricWhereUniqueInput;
};

export type CampaignResultMetricCreateWithoutCampaignInput = {
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignResultMetricInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignResultMetricInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerMetricName: Scalars['String'];
  providerName: Scalars['String'];
  spendCampaigns?: Maybe<CampaignCreateNestedManyWithoutSpendMetricInput>;
  totalValue: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignResultMetricCreateWithoutCampaignResultInput = {
  campaign: CampaignCreateNestedOneWithoutCampaignResultMetricInput;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignResultMetricInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerMetricName: Scalars['String'];
  providerName: Scalars['String'];
  spendCampaigns?: Maybe<CampaignCreateNestedManyWithoutSpendMetricInput>;
  totalValue: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignResultMetricCreateWithoutCampaignResultMapInput = {
  campaign: CampaignCreateNestedOneWithoutCampaignResultMetricInput;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignResultMetricInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerMetricName: Scalars['String'];
  providerName: Scalars['String'];
  spendCampaigns?: Maybe<CampaignCreateNestedManyWithoutSpendMetricInput>;
  totalValue: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignResultMetricCreateWithoutSpendCampaignsInput = {
  campaign: CampaignCreateNestedOneWithoutCampaignResultMetricInput;
  campaignResult?: Maybe<CampaignResultCreateNestedManyWithoutCampaignResultMetricInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutCampaignResultMetricInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  providerMetricName: Scalars['String'];
  providerName: Scalars['String'];
  totalValue: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CampaignResultMetricListRelationFilter = {
  every?: Maybe<CampaignResultMetricWhereInput>;
  none?: Maybe<CampaignResultMetricWhereInput>;
  some?: Maybe<CampaignResultMetricWhereInput>;
};

export type CampaignResultMetricScalarWhereInput = {
  AND?: Maybe<Array<CampaignResultMetricScalarWhereInput>>;
  campaignId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CampaignResultMetricScalarWhereInput>>;
  OR?: Maybe<Array<CampaignResultMetricScalarWhereInput>>;
  providerMetricName?: Maybe<StringFilter>;
  providerName?: Maybe<StringFilter>;
  totalValue?: Maybe<FloatFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CampaignResultMetricUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerMetricName?: Maybe<StringFieldUpdateOperationsInput>;
  providerName?: Maybe<StringFieldUpdateOperationsInput>;
  totalValue?: Maybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignResultMetricUpdateManyWithoutCampaignInput = {
  connect?: Maybe<Array<CampaignResultMetricWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignResultMetricCreateOrConnectWithoutCampaignInput>>;
  create?: Maybe<Array<CampaignResultMetricCreateWithoutCampaignInput>>;
  createMany?: Maybe<CampaignResultMetricCreateManyCampaignInputEnvelope>;
  delete?: Maybe<Array<CampaignResultMetricWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignResultMetricScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignResultMetricWhereUniqueInput>>;
  set?: Maybe<Array<CampaignResultMetricWhereUniqueInput>>;
  update?: Maybe<Array<CampaignResultMetricUpdateWithWhereUniqueWithoutCampaignInput>>;
  updateMany?: Maybe<Array<CampaignResultMetricUpdateManyWithWhereWithoutCampaignInput>>;
  upsert?: Maybe<Array<CampaignResultMetricUpsertWithWhereUniqueWithoutCampaignInput>>;
};

export type CampaignResultMetricUpdateManyWithWhereWithoutCampaignInput = {
  data: CampaignResultMetricUpdateManyMutationInput;
  where: CampaignResultMetricScalarWhereInput;
};

export type CampaignResultMetricUpdateOneRequiredWithoutCampaignResultMapInput = {
  connect?: Maybe<CampaignResultMetricWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignResultMetricCreateOrConnectWithoutCampaignResultMapInput>;
  create?: Maybe<CampaignResultMetricCreateWithoutCampaignResultMapInput>;
  update?: Maybe<CampaignResultMetricUpdateWithoutCampaignResultMapInput>;
  upsert?: Maybe<CampaignResultMetricUpsertWithoutCampaignResultMapInput>;
};

export type CampaignResultMetricUpdateOneWithoutCampaignResultInput = {
  connect?: Maybe<CampaignResultMetricWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignResultMetricCreateOrConnectWithoutCampaignResultInput>;
  create?: Maybe<CampaignResultMetricCreateWithoutCampaignResultInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CampaignResultMetricUpdateWithoutCampaignResultInput>;
  upsert?: Maybe<CampaignResultMetricUpsertWithoutCampaignResultInput>;
};

export type CampaignResultMetricUpdateOneWithoutSpendCampaignsInput = {
  connect?: Maybe<CampaignResultMetricWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignResultMetricCreateOrConnectWithoutSpendCampaignsInput>;
  create?: Maybe<CampaignResultMetricCreateWithoutSpendCampaignsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CampaignResultMetricUpdateWithoutSpendCampaignsInput>;
  upsert?: Maybe<CampaignResultMetricUpsertWithoutSpendCampaignsInput>;
};

export type CampaignResultMetricUpdateWithoutCampaignInput = {
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignResultMetricInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignResultMetricInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerMetricName?: Maybe<StringFieldUpdateOperationsInput>;
  providerName?: Maybe<StringFieldUpdateOperationsInput>;
  spendCampaigns?: Maybe<CampaignUpdateManyWithoutSpendMetricInput>;
  totalValue?: Maybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignResultMetricUpdateWithoutCampaignResultInput = {
  campaign?: Maybe<CampaignUpdateOneRequiredWithoutCampaignResultMetricInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignResultMetricInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerMetricName?: Maybe<StringFieldUpdateOperationsInput>;
  providerName?: Maybe<StringFieldUpdateOperationsInput>;
  spendCampaigns?: Maybe<CampaignUpdateManyWithoutSpendMetricInput>;
  totalValue?: Maybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignResultMetricUpdateWithoutCampaignResultMapInput = {
  campaign?: Maybe<CampaignUpdateOneRequiredWithoutCampaignResultMetricInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignResultMetricInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerMetricName?: Maybe<StringFieldUpdateOperationsInput>;
  providerName?: Maybe<StringFieldUpdateOperationsInput>;
  spendCampaigns?: Maybe<CampaignUpdateManyWithoutSpendMetricInput>;
  totalValue?: Maybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignResultMetricUpdateWithoutSpendCampaignsInput = {
  campaign?: Maybe<CampaignUpdateOneRequiredWithoutCampaignResultMetricInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignResultMetricInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignResultMetricInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerMetricName?: Maybe<StringFieldUpdateOperationsInput>;
  providerName?: Maybe<StringFieldUpdateOperationsInput>;
  totalValue?: Maybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignResultMetricUpdateWithWhereUniqueWithoutCampaignInput = {
  data: CampaignResultMetricUpdateWithoutCampaignInput;
  where: CampaignResultMetricWhereUniqueInput;
};

export type CampaignResultMetricUpsertWithoutCampaignResultInput = {
  create: CampaignResultMetricCreateWithoutCampaignResultInput;
  update: CampaignResultMetricUpdateWithoutCampaignResultInput;
};

export type CampaignResultMetricUpsertWithoutCampaignResultMapInput = {
  create: CampaignResultMetricCreateWithoutCampaignResultMapInput;
  update: CampaignResultMetricUpdateWithoutCampaignResultMapInput;
};

export type CampaignResultMetricUpsertWithoutSpendCampaignsInput = {
  create: CampaignResultMetricCreateWithoutSpendCampaignsInput;
  update: CampaignResultMetricUpdateWithoutSpendCampaignsInput;
};

export type CampaignResultMetricUpsertWithWhereUniqueWithoutCampaignInput = {
  create: CampaignResultMetricCreateWithoutCampaignInput;
  update: CampaignResultMetricUpdateWithoutCampaignInput;
  where: CampaignResultMetricWhereUniqueInput;
};

export type CampaignResultMetricWhereInput = {
  AND?: Maybe<Array<CampaignResultMetricWhereInput>>;
  campaign?: Maybe<CampaignWhereInput>;
  campaignId?: Maybe<StringFilter>;
  campaignResult?: Maybe<CampaignResultListRelationFilter>;
  campaignResultMap?: Maybe<CampaignResultMapListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CampaignResultMetricWhereInput>>;
  OR?: Maybe<Array<CampaignResultMetricWhereInput>>;
  providerMetricName?: Maybe<StringFilter>;
  providerName?: Maybe<StringFilter>;
  spendCampaigns?: Maybe<CampaignListRelationFilter>;
  totalValue?: Maybe<FloatFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CampaignResultMetricWhereUniqueInput = {
  campaignId_providerMetricName?: Maybe<CampaignResultMetricCampaignIdProviderMetricNameCompoundUniqueInput>;
  id?: Maybe<Scalars['String']>;
};

export type CampaignResultScalarWhereInput = {
  AND?: Maybe<Array<CampaignResultScalarWhereInput>>;
  campaignId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CampaignResultScalarWhereInput>>;
  OR?: Maybe<Array<CampaignResultScalarWhereInput>>;
  providerMetricName?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  value?: Maybe<FloatFilter>;
  valueType?: Maybe<EnumCampaignDataValueTypeFilter>;
};

export type CampaignResultUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
  valueType?: Maybe<EnumCampaignDataValueTypeFieldUpdateOperationsInput>;
};

export type CampaignResultUpdateManyWithoutCampaignInput = {
  connect?: Maybe<Array<CampaignResultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignResultCreateOrConnectWithoutCampaignInput>>;
  create?: Maybe<Array<CampaignResultCreateWithoutCampaignInput>>;
  createMany?: Maybe<CampaignResultCreateManyCampaignInputEnvelope>;
  delete?: Maybe<Array<CampaignResultWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignResultScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignResultWhereUniqueInput>>;
  set?: Maybe<Array<CampaignResultWhereUniqueInput>>;
  update?: Maybe<Array<CampaignResultUpdateWithWhereUniqueWithoutCampaignInput>>;
  updateMany?: Maybe<Array<CampaignResultUpdateManyWithWhereWithoutCampaignInput>>;
  upsert?: Maybe<Array<CampaignResultUpsertWithWhereUniqueWithoutCampaignInput>>;
};

export type CampaignResultUpdateManyWithoutCampaignResultMetricInput = {
  connect?: Maybe<Array<CampaignResultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignResultCreateOrConnectWithoutCampaignResultMetricInput>>;
  create?: Maybe<Array<CampaignResultCreateWithoutCampaignResultMetricInput>>;
  createMany?: Maybe<CampaignResultCreateManyCampaignResultMetricInputEnvelope>;
  delete?: Maybe<Array<CampaignResultWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignResultScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignResultWhereUniqueInput>>;
  set?: Maybe<Array<CampaignResultWhereUniqueInput>>;
  update?: Maybe<Array<CampaignResultUpdateWithWhereUniqueWithoutCampaignResultMetricInput>>;
  updateMany?: Maybe<Array<CampaignResultUpdateManyWithWhereWithoutCampaignResultMetricInput>>;
  upsert?: Maybe<Array<CampaignResultUpsertWithWhereUniqueWithoutCampaignResultMetricInput>>;
};

export type CampaignResultUpdateManyWithWhereWithoutCampaignInput = {
  data: CampaignResultUpdateManyMutationInput;
  where: CampaignResultScalarWhereInput;
};

export type CampaignResultUpdateManyWithWhereWithoutCampaignResultMetricInput = {
  data: CampaignResultUpdateManyMutationInput;
  where: CampaignResultScalarWhereInput;
};

export type CampaignResultUpdateWithoutCampaignInput = {
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateOneWithoutCampaignResultInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
  valueType?: Maybe<EnumCampaignDataValueTypeFieldUpdateOperationsInput>;
};

export type CampaignResultUpdateWithoutCampaignResultMetricInput = {
  campaign?: Maybe<CampaignUpdateOneWithoutCampaignResultInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
  valueType?: Maybe<EnumCampaignDataValueTypeFieldUpdateOperationsInput>;
};

export type CampaignResultUpdateWithWhereUniqueWithoutCampaignInput = {
  data: CampaignResultUpdateWithoutCampaignInput;
  where: CampaignResultWhereUniqueInput;
};

export type CampaignResultUpdateWithWhereUniqueWithoutCampaignResultMetricInput = {
  data: CampaignResultUpdateWithoutCampaignResultMetricInput;
  where: CampaignResultWhereUniqueInput;
};

export type CampaignResultUpsertWithWhereUniqueWithoutCampaignInput = {
  create: CampaignResultCreateWithoutCampaignInput;
  update: CampaignResultUpdateWithoutCampaignInput;
  where: CampaignResultWhereUniqueInput;
};

export type CampaignResultUpsertWithWhereUniqueWithoutCampaignResultMetricInput = {
  create: CampaignResultCreateWithoutCampaignResultMetricInput;
  update: CampaignResultUpdateWithoutCampaignResultMetricInput;
  where: CampaignResultWhereUniqueInput;
};

export type CampaignResultWhereInput = {
  AND?: Maybe<Array<CampaignResultWhereInput>>;
  campaign?: Maybe<CampaignWhereInput>;
  campaignId?: Maybe<StringNullableFilter>;
  campaignResultMetric?: Maybe<CampaignResultMetricWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CampaignResultWhereInput>>;
  OR?: Maybe<Array<CampaignResultWhereInput>>;
  providerMetricName?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  value?: Maybe<FloatFilter>;
  valueType?: Maybe<EnumCampaignDataValueTypeFilter>;
};

export type CampaignResultWhereUniqueInput = {
  campaignId_providerMetricName_date?: Maybe<CampaignResultCampaignIdProviderMetricNameDateCompoundUniqueInput>;
  id?: Maybe<Scalars['String']>;
};

export type CampaignScalarWhereInput = {
  actualRoi?: Maybe<FloatNullableFilter>;
  AND?: Maybe<Array<CampaignScalarWhereInput>>;
  budgetHigh?: Maybe<FloatNullableFilter>;
  budgetLow?: Maybe<FloatNullableFilter>;
  campaignGroupId?: Maybe<StringNullableFilter>;
  campaignOverrides?: Maybe<EnumCampaignOverridesNullableListFilter>;
  channelId?: Maybe<StringNullableFilter>;
  confidence?: Maybe<IntNullableFilter>;
  cost?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  effort?: Maybe<IntNullableFilter>;
  end?: Maybe<DateTimeNullableFilter>;
  funnelNodeId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  impact?: Maybe<IntNullableFilter>;
  integrationConfig?: Maybe<JsonNullableFilter>;
  integrationId?: Maybe<StringNullableFilter>;
  lastRun?: Maybe<DateTimeNullableFilter>;
  lastRunStatus?: Maybe<EnumIntegrationStatusTypeNullableFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CampaignScalarWhereInput>>;
  note?: Maybe<StringFilter>;
  OR?: Maybe<Array<CampaignScalarWhereInput>>;
  predictedRoi?: Maybe<FloatNullableFilter>;
  priority?: Maybe<IntNullableFilter>;
  resultHigh?: Maybe<FloatNullableFilter>;
  resultLow?: Maybe<FloatNullableFilter>;
  returnValue?: Maybe<FloatNullableFilter>;
  roiLock?: Maybe<BoolFilter>;
  spendMetricId?: Maybe<StringNullableFilter>;
  start?: Maybe<DateTimeNullableFilter>;
  state?: Maybe<EnumCampaignStateFilter>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export enum CampaignState {
  COMPLETE = 'COMPLETE',
  PENDING = 'PENDING'
}

export type CampaignUpdatecampaignOverridesInput = {
  push?: Maybe<CampaignOverrides>;
  set?: Maybe<Array<CampaignOverrides>>;
};

export type CampaignUpdateInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateManyMutationInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignUpdateManyWithoutCampaignGroupInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutCampaignGroupInput>>;
  create?: Maybe<Array<CampaignCreateWithoutCampaignGroupInput>>;
  createMany?: Maybe<CampaignCreateManyCampaignGroupInputEnvelope>;
  delete?: Maybe<Array<CampaignWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignWhereUniqueInput>>;
  set?: Maybe<Array<CampaignWhereUniqueInput>>;
  update?: Maybe<Array<CampaignUpdateWithWhereUniqueWithoutCampaignGroupInput>>;
  updateMany?: Maybe<Array<CampaignUpdateManyWithWhereWithoutCampaignGroupInput>>;
  upsert?: Maybe<Array<CampaignUpsertWithWhereUniqueWithoutCampaignGroupInput>>;
};

export type CampaignUpdateManyWithoutChannelInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutChannelInput>>;
  create?: Maybe<Array<CampaignCreateWithoutChannelInput>>;
  createMany?: Maybe<CampaignCreateManyChannelInputEnvelope>;
  delete?: Maybe<Array<CampaignWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignWhereUniqueInput>>;
  set?: Maybe<Array<CampaignWhereUniqueInput>>;
  update?: Maybe<Array<CampaignUpdateWithWhereUniqueWithoutChannelInput>>;
  updateMany?: Maybe<Array<CampaignUpdateManyWithWhereWithoutChannelInput>>;
  upsert?: Maybe<Array<CampaignUpsertWithWhereUniqueWithoutChannelInput>>;
};

export type CampaignUpdateManyWithoutIntegrationInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutIntegrationInput>>;
  create?: Maybe<Array<CampaignCreateWithoutIntegrationInput>>;
  createMany?: Maybe<CampaignCreateManyIntegrationInputEnvelope>;
  delete?: Maybe<Array<CampaignWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignWhereUniqueInput>>;
  set?: Maybe<Array<CampaignWhereUniqueInput>>;
  update?: Maybe<Array<CampaignUpdateWithWhereUniqueWithoutIntegrationInput>>;
  updateMany?: Maybe<Array<CampaignUpdateManyWithWhereWithoutIntegrationInput>>;
  upsert?: Maybe<Array<CampaignUpsertWithWhereUniqueWithoutIntegrationInput>>;
};

export type CampaignUpdateManyWithoutKpiInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutKpiInput>>;
  create?: Maybe<Array<CampaignCreateWithoutKpiInput>>;
  createMany?: Maybe<CampaignCreateManyKpiInputEnvelope>;
  delete?: Maybe<Array<CampaignWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignWhereUniqueInput>>;
  set?: Maybe<Array<CampaignWhereUniqueInput>>;
  update?: Maybe<Array<CampaignUpdateWithWhereUniqueWithoutKpiInput>>;
  updateMany?: Maybe<Array<CampaignUpdateManyWithWhereWithoutKpiInput>>;
  upsert?: Maybe<Array<CampaignUpsertWithWhereUniqueWithoutKpiInput>>;
};

export type CampaignUpdateManyWithoutSpendMetricInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutSpendMetricInput>>;
  create?: Maybe<Array<CampaignCreateWithoutSpendMetricInput>>;
  createMany?: Maybe<CampaignCreateManySpendMetricInputEnvelope>;
  delete?: Maybe<Array<CampaignWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignWhereUniqueInput>>;
  set?: Maybe<Array<CampaignWhereUniqueInput>>;
  update?: Maybe<Array<CampaignUpdateWithWhereUniqueWithoutSpendMetricInput>>;
  updateMany?: Maybe<Array<CampaignUpdateManyWithWhereWithoutSpendMetricInput>>;
  upsert?: Maybe<Array<CampaignUpsertWithWhereUniqueWithoutSpendMetricInput>>;
};

export type CampaignUpdateManyWithoutTagsInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutTagsInput>>;
  create?: Maybe<Array<CampaignCreateWithoutTagsInput>>;
  delete?: Maybe<Array<CampaignWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignWhereUniqueInput>>;
  set?: Maybe<Array<CampaignWhereUniqueInput>>;
  update?: Maybe<Array<CampaignUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: Maybe<Array<CampaignUpdateManyWithWhereWithoutTagsInput>>;
  upsert?: Maybe<Array<CampaignUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type CampaignUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<CampaignCreateWithoutTeamInput>>;
  createMany?: Maybe<CampaignCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<CampaignWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignWhereUniqueInput>>;
  set?: Maybe<Array<CampaignWhereUniqueInput>>;
  update?: Maybe<Array<CampaignUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<CampaignUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<CampaignUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type CampaignUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<CampaignWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CampaignCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<CampaignCreateWithoutUserInput>>;
  createMany?: Maybe<CampaignCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<CampaignWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CampaignScalarWhereInput>>;
  disconnect?: Maybe<Array<CampaignWhereUniqueInput>>;
  set?: Maybe<Array<CampaignWhereUniqueInput>>;
  update?: Maybe<Array<CampaignUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CampaignUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<CampaignUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CampaignUpdateManyWithWhereWithoutCampaignGroupInput = {
  data: CampaignUpdateManyMutationInput;
  where: CampaignScalarWhereInput;
};

export type CampaignUpdateManyWithWhereWithoutChannelInput = {
  data: CampaignUpdateManyMutationInput;
  where: CampaignScalarWhereInput;
};

export type CampaignUpdateManyWithWhereWithoutIntegrationInput = {
  data: CampaignUpdateManyMutationInput;
  where: CampaignScalarWhereInput;
};

export type CampaignUpdateManyWithWhereWithoutKpiInput = {
  data: CampaignUpdateManyMutationInput;
  where: CampaignScalarWhereInput;
};

export type CampaignUpdateManyWithWhereWithoutSpendMetricInput = {
  data: CampaignUpdateManyMutationInput;
  where: CampaignScalarWhereInput;
};

export type CampaignUpdateManyWithWhereWithoutTagsInput = {
  data: CampaignUpdateManyMutationInput;
  where: CampaignScalarWhereInput;
};

export type CampaignUpdateManyWithWhereWithoutTeamInput = {
  data: CampaignUpdateManyMutationInput;
  where: CampaignScalarWhereInput;
};

export type CampaignUpdateManyWithWhereWithoutUserInput = {
  data: CampaignUpdateManyMutationInput;
  where: CampaignScalarWhereInput;
};

export type CampaignUpdateOneRequiredWithoutCampaignResultMapInput = {
  connect?: Maybe<CampaignWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignCreateOrConnectWithoutCampaignResultMapInput>;
  create?: Maybe<CampaignCreateWithoutCampaignResultMapInput>;
  update?: Maybe<CampaignUpdateWithoutCampaignResultMapInput>;
  upsert?: Maybe<CampaignUpsertWithoutCampaignResultMapInput>;
};

export type CampaignUpdateOneRequiredWithoutCampaignResultMetricInput = {
  connect?: Maybe<CampaignWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignCreateOrConnectWithoutCampaignResultMetricInput>;
  create?: Maybe<CampaignCreateWithoutCampaignResultMetricInput>;
  update?: Maybe<CampaignUpdateWithoutCampaignResultMetricInput>;
  upsert?: Maybe<CampaignUpsertWithoutCampaignResultMetricInput>;
};

export type CampaignUpdateOneWithoutCampaignResultInput = {
  connect?: Maybe<CampaignWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignCreateOrConnectWithoutCampaignResultInput>;
  create?: Maybe<CampaignCreateWithoutCampaignResultInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CampaignUpdateWithoutCampaignResultInput>;
  upsert?: Maybe<CampaignUpsertWithoutCampaignResultInput>;
};

export type CampaignUpdateOneWithoutCommentsInput = {
  connect?: Maybe<CampaignWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<CampaignCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CampaignUpdateWithoutCommentsInput>;
  upsert?: Maybe<CampaignUpsertWithoutCommentsInput>;
};

export type CampaignUpdateOneWithoutTasksInput = {
  connect?: Maybe<CampaignWhereUniqueInput>;
  connectOrCreate?: Maybe<CampaignCreateOrConnectWithoutTasksInput>;
  create?: Maybe<CampaignCreateWithoutTasksInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CampaignUpdateWithoutTasksInput>;
  upsert?: Maybe<CampaignUpsertWithoutTasksInput>;
};

export type CampaignUpdateWithoutCampaignGroupInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutCampaignResultInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutCampaignResultMapInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutCampaignResultMetricInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutChannelInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutCommentsInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutIntegrationInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutKpiInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutSpendMetricInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutTagsInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutTasksInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutTeamInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCampaignsInput>;
};

export type CampaignUpdateWithoutUserInput = {
  actualRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  budgetLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCampaignsInput>;
  campaignOverrides?: Maybe<CampaignUpdatecampaignOverridesInput>;
  campaignResult?: Maybe<CampaignResultUpdateManyWithoutCampaignInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutCampaignInput>;
  campaignResultMetric?: Maybe<CampaignResultMetricUpdateManyWithoutCampaignInput>;
  channel?: Maybe<ChannelUpdateOneWithoutCampaignInput>;
  comments?: Maybe<CommentUpdateManyWithoutCampaignInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutCampaignInput>;
  integrationConfig?: Maybe<Scalars['Json']>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutCampaignsInput>;
  lastRun?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastRunStatus?: Maybe<NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  predictedRoi?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  resultHigh?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultLow?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  returnValue?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  roiLock?: Maybe<BoolFieldUpdateOperationsInput>;
  spendMetric?: Maybe<CampaignResultMetricUpdateOneWithoutSpendCampaignsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: Maybe<EnumCampaignStateFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutCampaignsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutCampaignInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutCampaignsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CampaignUpdateWithWhereUniqueWithoutCampaignGroupInput = {
  data: CampaignUpdateWithoutCampaignGroupInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpdateWithWhereUniqueWithoutChannelInput = {
  data: CampaignUpdateWithoutChannelInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpdateWithWhereUniqueWithoutIntegrationInput = {
  data: CampaignUpdateWithoutIntegrationInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpdateWithWhereUniqueWithoutKpiInput = {
  data: CampaignUpdateWithoutKpiInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpdateWithWhereUniqueWithoutSpendMetricInput = {
  data: CampaignUpdateWithoutSpendMetricInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpdateWithWhereUniqueWithoutTagsInput = {
  data: CampaignUpdateWithoutTagsInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpdateWithWhereUniqueWithoutTeamInput = {
  data: CampaignUpdateWithoutTeamInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpdateWithWhereUniqueWithoutUserInput = {
  data: CampaignUpdateWithoutUserInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpsertWithoutCampaignResultInput = {
  create: CampaignCreateWithoutCampaignResultInput;
  update: CampaignUpdateWithoutCampaignResultInput;
};

export type CampaignUpsertWithoutCampaignResultMapInput = {
  create: CampaignCreateWithoutCampaignResultMapInput;
  update: CampaignUpdateWithoutCampaignResultMapInput;
};

export type CampaignUpsertWithoutCampaignResultMetricInput = {
  create: CampaignCreateWithoutCampaignResultMetricInput;
  update: CampaignUpdateWithoutCampaignResultMetricInput;
};

export type CampaignUpsertWithoutCommentsInput = {
  create: CampaignCreateWithoutCommentsInput;
  update: CampaignUpdateWithoutCommentsInput;
};

export type CampaignUpsertWithoutTasksInput = {
  create: CampaignCreateWithoutTasksInput;
  update: CampaignUpdateWithoutTasksInput;
};

export type CampaignUpsertWithWhereUniqueWithoutCampaignGroupInput = {
  create: CampaignCreateWithoutCampaignGroupInput;
  update: CampaignUpdateWithoutCampaignGroupInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpsertWithWhereUniqueWithoutChannelInput = {
  create: CampaignCreateWithoutChannelInput;
  update: CampaignUpdateWithoutChannelInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpsertWithWhereUniqueWithoutIntegrationInput = {
  create: CampaignCreateWithoutIntegrationInput;
  update: CampaignUpdateWithoutIntegrationInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpsertWithWhereUniqueWithoutKpiInput = {
  create: CampaignCreateWithoutKpiInput;
  update: CampaignUpdateWithoutKpiInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpsertWithWhereUniqueWithoutSpendMetricInput = {
  create: CampaignCreateWithoutSpendMetricInput;
  update: CampaignUpdateWithoutSpendMetricInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpsertWithWhereUniqueWithoutTagsInput = {
  create: CampaignCreateWithoutTagsInput;
  update: CampaignUpdateWithoutTagsInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpsertWithWhereUniqueWithoutTeamInput = {
  create: CampaignCreateWithoutTeamInput;
  update: CampaignUpdateWithoutTeamInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpsertWithWhereUniqueWithoutUserInput = {
  create: CampaignCreateWithoutUserInput;
  update: CampaignUpdateWithoutUserInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignWhereInput = {
  actualRoi?: Maybe<FloatNullableFilter>;
  AND?: Maybe<Array<CampaignWhereInput>>;
  budgetHigh?: Maybe<FloatNullableFilter>;
  budgetLow?: Maybe<FloatNullableFilter>;
  campaignGroup?: Maybe<CampaignGroupWhereInput>;
  campaignGroupId?: Maybe<StringNullableFilter>;
  campaignOverrides?: Maybe<EnumCampaignOverridesNullableListFilter>;
  campaignResult?: Maybe<CampaignResultListRelationFilter>;
  campaignResultMap?: Maybe<CampaignResultMapListRelationFilter>;
  campaignResultMetric?: Maybe<CampaignResultMetricListRelationFilter>;
  channel?: Maybe<ChannelWhereInput>;
  channelId?: Maybe<StringNullableFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  confidence?: Maybe<IntNullableFilter>;
  cost?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  effort?: Maybe<IntNullableFilter>;
  end?: Maybe<DateTimeNullableFilter>;
  funnelNodeId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  impact?: Maybe<IntNullableFilter>;
  integration?: Maybe<IntegrationWhereInput>;
  integrationConfig?: Maybe<JsonNullableFilter>;
  integrationId?: Maybe<StringNullableFilter>;
  kpi?: Maybe<FunnelNodeWhereInput>;
  lastRun?: Maybe<DateTimeNullableFilter>;
  lastRunStatus?: Maybe<EnumIntegrationStatusTypeNullableFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CampaignWhereInput>>;
  note?: Maybe<StringFilter>;
  OR?: Maybe<Array<CampaignWhereInput>>;
  predictedRoi?: Maybe<FloatNullableFilter>;
  priority?: Maybe<IntNullableFilter>;
  resultHigh?: Maybe<FloatNullableFilter>;
  resultLow?: Maybe<FloatNullableFilter>;
  returnValue?: Maybe<FloatNullableFilter>;
  roiLock?: Maybe<BoolFilter>;
  spendMetric?: Maybe<CampaignResultMetricWhereInput>;
  spendMetricId?: Maybe<StringNullableFilter>;
  start?: Maybe<DateTimeNullableFilter>;
  state?: Maybe<EnumCampaignStateFilter>;
  tags?: Maybe<TagListRelationFilter>;
  tasks?: Maybe<TaskListRelationFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type CampaignWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Channel = {
  __typename?: 'Channel';
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
};

export type ChannelCreateManyOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  teamId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChannelCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<ChannelCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ChannelCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChannelCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<ChannelCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ChannelCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<ChannelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ChannelCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<ChannelCreateWithoutOwnerInput>>;
  createMany?: Maybe<ChannelCreateManyOwnerInputEnvelope>;
};

export type ChannelCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<ChannelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ChannelCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<ChannelCreateWithoutTeamInput>>;
  createMany?: Maybe<ChannelCreateManyTeamInputEnvelope>;
};

export type ChannelCreateNestedOneWithoutCampaignInput = {
  connect?: Maybe<ChannelWhereUniqueInput>;
  connectOrCreate?: Maybe<ChannelCreateOrConnectWithoutCampaignInput>;
  create?: Maybe<ChannelCreateWithoutCampaignInput>;
};

export type ChannelCreateNestedOneWithoutIdeaInput = {
  connect?: Maybe<ChannelWhereUniqueInput>;
  connectOrCreate?: Maybe<ChannelCreateOrConnectWithoutIdeaInput>;
  create?: Maybe<ChannelCreateWithoutIdeaInput>;
};

export type ChannelCreateOrConnectWithoutCampaignInput = {
  create: ChannelCreateWithoutCampaignInput;
  where: ChannelWhereUniqueInput;
};

export type ChannelCreateOrConnectWithoutIdeaInput = {
  create: ChannelCreateWithoutIdeaInput;
  where: ChannelWhereUniqueInput;
};

export type ChannelCreateOrConnectWithoutOwnerInput = {
  create: ChannelCreateWithoutOwnerInput;
  where: ChannelWhereUniqueInput;
};

export type ChannelCreateOrConnectWithoutTeamInput = {
  create: ChannelCreateWithoutTeamInput;
  where: ChannelWhereUniqueInput;
};

export type ChannelCreateWithoutCampaignInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutChannelInput>;
  name: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutChannelInput>;
  team?: Maybe<TeamCreateNestedOneWithoutChannelInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChannelCreateWithoutIdeaInput = {
  Campaign?: Maybe<CampaignCreateNestedManyWithoutChannelInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutChannelInput>;
  team?: Maybe<TeamCreateNestedOneWithoutChannelInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChannelCreateWithoutOwnerInput = {
  Campaign?: Maybe<CampaignCreateNestedManyWithoutChannelInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutChannelInput>;
  name: Scalars['String'];
  team?: Maybe<TeamCreateNestedOneWithoutChannelInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChannelCreateWithoutTeamInput = {
  Campaign?: Maybe<CampaignCreateNestedManyWithoutChannelInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutChannelInput>;
  name: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutChannelInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ChannelListRelationFilter = {
  every?: Maybe<ChannelWhereInput>;
  none?: Maybe<ChannelWhereInput>;
  some?: Maybe<ChannelWhereInput>;
};

export type ChannelOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ChannelScalarWhereInput = {
  AND?: Maybe<Array<ChannelScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ChannelScalarWhereInput>>;
  OR?: Maybe<Array<ChannelScalarWhereInput>>;
  ownerId?: Maybe<StringNullableFilter>;
  teamId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ChannelUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChannelUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<ChannelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ChannelCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<ChannelCreateWithoutOwnerInput>>;
  createMany?: Maybe<ChannelCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<ChannelWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ChannelScalarWhereInput>>;
  disconnect?: Maybe<Array<ChannelWhereUniqueInput>>;
  set?: Maybe<Array<ChannelWhereUniqueInput>>;
  update?: Maybe<Array<ChannelUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<ChannelUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<ChannelUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type ChannelUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<ChannelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ChannelCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<ChannelCreateWithoutTeamInput>>;
  createMany?: Maybe<ChannelCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<ChannelWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ChannelScalarWhereInput>>;
  disconnect?: Maybe<Array<ChannelWhereUniqueInput>>;
  set?: Maybe<Array<ChannelWhereUniqueInput>>;
  update?: Maybe<Array<ChannelUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<ChannelUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<ChannelUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type ChannelUpdateManyWithWhereWithoutOwnerInput = {
  data: ChannelUpdateManyMutationInput;
  where: ChannelScalarWhereInput;
};

export type ChannelUpdateManyWithWhereWithoutTeamInput = {
  data: ChannelUpdateManyMutationInput;
  where: ChannelScalarWhereInput;
};

export type ChannelUpdateOneWithoutCampaignInput = {
  connect?: Maybe<ChannelWhereUniqueInput>;
  connectOrCreate?: Maybe<ChannelCreateOrConnectWithoutCampaignInput>;
  create?: Maybe<ChannelCreateWithoutCampaignInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ChannelUpdateWithoutCampaignInput>;
  upsert?: Maybe<ChannelUpsertWithoutCampaignInput>;
};

export type ChannelUpdateOneWithoutIdeaInput = {
  connect?: Maybe<ChannelWhereUniqueInput>;
  connectOrCreate?: Maybe<ChannelCreateOrConnectWithoutIdeaInput>;
  create?: Maybe<ChannelCreateWithoutIdeaInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ChannelUpdateWithoutIdeaInput>;
  upsert?: Maybe<ChannelUpsertWithoutIdeaInput>;
};

export type ChannelUpdateWithoutCampaignInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutChannelInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutChannelInput>;
  team?: Maybe<TeamUpdateOneWithoutChannelInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChannelUpdateWithoutIdeaInput = {
  Campaign?: Maybe<CampaignUpdateManyWithoutChannelInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutChannelInput>;
  team?: Maybe<TeamUpdateOneWithoutChannelInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChannelUpdateWithoutOwnerInput = {
  Campaign?: Maybe<CampaignUpdateManyWithoutChannelInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutChannelInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneWithoutChannelInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChannelUpdateWithoutTeamInput = {
  Campaign?: Maybe<CampaignUpdateManyWithoutChannelInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutChannelInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutChannelInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChannelUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ChannelUpdateWithoutOwnerInput;
  where: ChannelWhereUniqueInput;
};

export type ChannelUpdateWithWhereUniqueWithoutTeamInput = {
  data: ChannelUpdateWithoutTeamInput;
  where: ChannelWhereUniqueInput;
};

export type ChannelUpsertWithoutCampaignInput = {
  create: ChannelCreateWithoutCampaignInput;
  update: ChannelUpdateWithoutCampaignInput;
};

export type ChannelUpsertWithoutIdeaInput = {
  create: ChannelCreateWithoutIdeaInput;
  update: ChannelUpdateWithoutIdeaInput;
};

export type ChannelUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ChannelCreateWithoutOwnerInput;
  update: ChannelUpdateWithoutOwnerInput;
  where: ChannelWhereUniqueInput;
};

export type ChannelUpsertWithWhereUniqueWithoutTeamInput = {
  create: ChannelCreateWithoutTeamInput;
  update: ChannelUpdateWithoutTeamInput;
  where: ChannelWhereUniqueInput;
};

export type ChannelWhereInput = {
  AND?: Maybe<Array<ChannelWhereInput>>;
  Campaign?: Maybe<CampaignListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  Idea?: Maybe<IdeaListRelationFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ChannelWhereInput>>;
  OR?: Maybe<Array<ChannelWhereInput>>;
  owner?: Maybe<UserWhereInput>;
  ownerId?: Maybe<StringNullableFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ChannelWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CombinedUnreadNotificationCount = {
  __typename?: 'CombinedUnreadNotificationCount';
  campaign?: Maybe<Scalars['Int']>;
  combinedCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  idea?: Maybe<Scalars['Int']>;
  mention?: Maybe<Scalars['Int']>;
  other?: Maybe<Scalars['Int']>;
};

export type Comment = {
  __typename?: 'Comment';
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  ideaId?: Maybe<Scalars['String']>;
  progressDataPointId?: Maybe<Scalars['String']>;
  reactions: Array<Reaction>;
  user: User;
  userId: Scalars['String'];
};


export type CommentReactionsArgs = {
  cursor?: Maybe<ReactionWhereUniqueInput>;
  orderBy?: Maybe<Array<ReactionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type CommentCreateInput = {
  campaign?: Maybe<CampaignCreateNestedOneWithoutCommentsInput>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCommentsInput>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  idea?: Maybe<IdeaCreateNestedOneWithoutCommentsInput>;
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedOneWithoutCommentsInput>;
  reactions?: Maybe<ReactionCreateNestedManyWithoutCommentInput>;
  type: CommentType;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateManyCampaignGroupInput = {
  campaignId?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideaId?: Maybe<Scalars['String']>;
  progressDataPointId?: Maybe<Scalars['String']>;
  type: CommentType;
  userId: Scalars['String'];
};

export type CommentCreateManyCampaignGroupInputEnvelope = {
  data?: Maybe<Array<CommentCreateManyCampaignGroupInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateManyCampaignInput = {
  campaignGroupId?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideaId?: Maybe<Scalars['String']>;
  progressDataPointId?: Maybe<Scalars['String']>;
  type: CommentType;
  userId: Scalars['String'];
};

export type CommentCreateManyCampaignInputEnvelope = {
  data?: Maybe<Array<CommentCreateManyCampaignInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateManyIdeaInput = {
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  progressDataPointId?: Maybe<Scalars['String']>;
  type: CommentType;
  userId: Scalars['String'];
};

export type CommentCreateManyIdeaInputEnvelope = {
  data?: Maybe<Array<CommentCreateManyIdeaInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateManyProgressDataPointInput = {
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideaId?: Maybe<Scalars['String']>;
  type: CommentType;
  userId: Scalars['String'];
};

export type CommentCreateManyProgressDataPointInputEnvelope = {
  data?: Maybe<Array<CommentCreateManyProgressDataPointInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateManyUserInput = {
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideaId?: Maybe<Scalars['String']>;
  progressDataPointId?: Maybe<Scalars['String']>;
  type: CommentType;
};

export type CommentCreateManyUserInputEnvelope = {
  data?: Maybe<Array<CommentCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutCampaignGroupInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutCampaignGroupInput>>;
  create?: Maybe<Array<CommentCreateWithoutCampaignGroupInput>>;
  createMany?: Maybe<CommentCreateManyCampaignGroupInputEnvelope>;
};

export type CommentCreateNestedManyWithoutCampaignInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutCampaignInput>>;
  create?: Maybe<Array<CommentCreateWithoutCampaignInput>>;
  createMany?: Maybe<CommentCreateManyCampaignInputEnvelope>;
};

export type CommentCreateNestedManyWithoutIdeaInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutIdeaInput>>;
  create?: Maybe<Array<CommentCreateWithoutIdeaInput>>;
  createMany?: Maybe<CommentCreateManyIdeaInputEnvelope>;
};

export type CommentCreateNestedManyWithoutProgressDataPointInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutProgressDataPointInput>>;
  create?: Maybe<Array<CommentCreateWithoutProgressDataPointInput>>;
  createMany?: Maybe<CommentCreateManyProgressDataPointInputEnvelope>;
};

export type CommentCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: Maybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentCreateNestedOneWithoutReactionsInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutReactionsInput>;
  create?: Maybe<CommentCreateWithoutReactionsInput>;
};

export type CommentCreateOrConnectWithoutCampaignGroupInput = {
  create: CommentCreateWithoutCampaignGroupInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutCampaignInput = {
  create: CommentCreateWithoutCampaignInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutIdeaInput = {
  create: CommentCreateWithoutIdeaInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutProgressDataPointInput = {
  create: CommentCreateWithoutProgressDataPointInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutReactionsInput = {
  create: CommentCreateWithoutReactionsInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutCampaignGroupInput = {
  campaign?: Maybe<CampaignCreateNestedOneWithoutCommentsInput>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  idea?: Maybe<IdeaCreateNestedOneWithoutCommentsInput>;
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedOneWithoutCommentsInput>;
  reactions?: Maybe<ReactionCreateNestedManyWithoutCommentInput>;
  type: CommentType;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateWithoutCampaignInput = {
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCommentsInput>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  idea?: Maybe<IdeaCreateNestedOneWithoutCommentsInput>;
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedOneWithoutCommentsInput>;
  reactions?: Maybe<ReactionCreateNestedManyWithoutCommentInput>;
  type: CommentType;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateWithoutIdeaInput = {
  campaign?: Maybe<CampaignCreateNestedOneWithoutCommentsInput>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCommentsInput>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedOneWithoutCommentsInput>;
  reactions?: Maybe<ReactionCreateNestedManyWithoutCommentInput>;
  type: CommentType;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateWithoutProgressDataPointInput = {
  campaign?: Maybe<CampaignCreateNestedOneWithoutCommentsInput>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCommentsInput>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  idea?: Maybe<IdeaCreateNestedOneWithoutCommentsInput>;
  reactions?: Maybe<ReactionCreateNestedManyWithoutCommentInput>;
  type: CommentType;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateWithoutReactionsInput = {
  campaign?: Maybe<CampaignCreateNestedOneWithoutCommentsInput>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCommentsInput>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  idea?: Maybe<IdeaCreateNestedOneWithoutCommentsInput>;
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedOneWithoutCommentsInput>;
  type: CommentType;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateWithoutUserInput = {
  campaign?: Maybe<CampaignCreateNestedOneWithoutCommentsInput>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutCommentsInput>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  idea?: Maybe<IdeaCreateNestedOneWithoutCommentsInput>;
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedOneWithoutCommentsInput>;
  reactions?: Maybe<ReactionCreateNestedManyWithoutCommentInput>;
  type: CommentType;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
};

export type CommentOrderByInput = {
  campaignGroupId?: Maybe<SortOrder>;
  campaignId?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  ideaId?: Maybe<SortOrder>;
  progressDataPointId?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  campaignGroupId?: Maybe<StringNullableFilter>;
  campaignId?: Maybe<StringNullableFilter>;
  content?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  ideaId?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  progressDataPointId?: Maybe<StringNullableFilter>;
  type?: Maybe<EnumCommentTypeFilter>;
  userId?: Maybe<StringFilter>;
};

export enum CommentType {
  CAMPAIGN = 'CAMPAIGN',
  CAMPAIGN_GROUP = 'CAMPAIGN_GROUP',
  IDEA = 'IDEA',
  PROGRESSDATAPOINT = 'PROGRESSDATAPOINT',
  RETROSPECTIVE = 'RETROSPECTIVE'
}

export type CommentUpdateInput = {
  campaign?: Maybe<CampaignUpdateOneWithoutCommentsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCommentsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  idea?: Maybe<IdeaUpdateOneWithoutCommentsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutCommentsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutCommentInput>;
  type?: Maybe<EnumCommentTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateManyMutationInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumCommentTypeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithoutCampaignGroupInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutCampaignGroupInput>>;
  create?: Maybe<Array<CommentCreateWithoutCampaignGroupInput>>;
  createMany?: Maybe<CommentCreateManyCampaignGroupInputEnvelope>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutCampaignGroupInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutCampaignGroupInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutCampaignGroupInput>>;
};

export type CommentUpdateManyWithoutCampaignInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutCampaignInput>>;
  create?: Maybe<Array<CommentCreateWithoutCampaignInput>>;
  createMany?: Maybe<CommentCreateManyCampaignInputEnvelope>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutCampaignInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutCampaignInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutCampaignInput>>;
};

export type CommentUpdateManyWithoutIdeaInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutIdeaInput>>;
  create?: Maybe<Array<CommentCreateWithoutIdeaInput>>;
  createMany?: Maybe<CommentCreateManyIdeaInputEnvelope>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutIdeaInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutIdeaInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutIdeaInput>>;
};

export type CommentUpdateManyWithoutProgressDataPointInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutProgressDataPointInput>>;
  create?: Maybe<Array<CommentCreateWithoutProgressDataPointInput>>;
  createMany?: Maybe<CommentCreateManyProgressDataPointInputEnvelope>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutProgressDataPointInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutProgressDataPointInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutProgressDataPointInput>>;
};

export type CommentUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: Maybe<CommentCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommentUpdateManyWithWhereWithoutCampaignGroupInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutCampaignInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutIdeaInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutProgressDataPointInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutUserInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateOneRequiredWithoutReactionsInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutReactionsInput>;
  create?: Maybe<CommentCreateWithoutReactionsInput>;
  update?: Maybe<CommentUpdateWithoutReactionsInput>;
  upsert?: Maybe<CommentUpsertWithoutReactionsInput>;
};

export type CommentUpdateWithoutCampaignGroupInput = {
  campaign?: Maybe<CampaignUpdateOneWithoutCommentsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  idea?: Maybe<IdeaUpdateOneWithoutCommentsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutCommentsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutCommentInput>;
  type?: Maybe<EnumCommentTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateWithoutCampaignInput = {
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCommentsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  idea?: Maybe<IdeaUpdateOneWithoutCommentsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutCommentsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutCommentInput>;
  type?: Maybe<EnumCommentTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateWithoutIdeaInput = {
  campaign?: Maybe<CampaignUpdateOneWithoutCommentsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCommentsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutCommentsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutCommentInput>;
  type?: Maybe<EnumCommentTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateWithoutProgressDataPointInput = {
  campaign?: Maybe<CampaignUpdateOneWithoutCommentsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCommentsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  idea?: Maybe<IdeaUpdateOneWithoutCommentsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutCommentInput>;
  type?: Maybe<EnumCommentTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateWithoutReactionsInput = {
  campaign?: Maybe<CampaignUpdateOneWithoutCommentsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCommentsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  idea?: Maybe<IdeaUpdateOneWithoutCommentsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutCommentsInput>;
  type?: Maybe<EnumCommentTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateWithoutUserInput = {
  campaign?: Maybe<CampaignUpdateOneWithoutCommentsInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutCommentsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  idea?: Maybe<IdeaUpdateOneWithoutCommentsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutCommentsInput>;
  reactions?: Maybe<ReactionUpdateManyWithoutCommentInput>;
  type?: Maybe<EnumCommentTypeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithWhereUniqueWithoutCampaignGroupInput = {
  data: CommentUpdateWithoutCampaignGroupInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutCampaignInput = {
  data: CommentUpdateWithoutCampaignInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutIdeaInput = {
  data: CommentUpdateWithoutIdeaInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutProgressDataPointInput = {
  data: CommentUpdateWithoutProgressDataPointInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithoutReactionsInput = {
  create: CommentCreateWithoutReactionsInput;
  update: CommentUpdateWithoutReactionsInput;
};

export type CommentUpsertWithWhereUniqueWithoutCampaignGroupInput = {
  create: CommentCreateWithoutCampaignGroupInput;
  update: CommentUpdateWithoutCampaignGroupInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutCampaignInput = {
  create: CommentCreateWithoutCampaignInput;
  update: CommentUpdateWithoutCampaignInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutIdeaInput = {
  create: CommentCreateWithoutIdeaInput;
  update: CommentUpdateWithoutIdeaInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutProgressDataPointInput = {
  create: CommentCreateWithoutProgressDataPointInput;
  update: CommentUpdateWithoutProgressDataPointInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  update: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  campaign?: Maybe<CampaignWhereInput>;
  campaignGroup?: Maybe<CampaignGroupWhereInput>;
  campaignGroupId?: Maybe<StringNullableFilter>;
  campaignId?: Maybe<StringNullableFilter>;
  content?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  idea?: Maybe<IdeaWhereInput>;
  ideaId?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  progressDataPoint?: Maybe<ProgressDataPointWhereInput>;
  progressDataPointId?: Maybe<StringNullableFilter>;
  reactions?: Maybe<ReactionListRelationFilter>;
  type?: Maybe<EnumCommentTypeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ConfidenceDataSet = {
  __typename?: 'ConfidenceDataSet';
  high?: Maybe<Array<Maybe<DataLinePoint>>>;
  low?: Maybe<Array<Maybe<DataLinePoint>>>;
};

export type Contribution = {
  __typename?: 'Contribution';
  /** The campaign-by-campaign contributions to this month's expected result. */
  contributions?: Maybe<Array<Maybe<MonthlyContribution>>>;
  /** The value of this month's expected result. This value refers to the current team's GOAL, such as the number of 'visits' or 'leads' as specified during onboarding. */
  expectation?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  /** The month in question. Returned in MMMM YYYY format. */
  month?: Maybe<Scalars['String']>;
};

export type ContributionCount = {
  __typename?: 'ContributionCount';
  /** The number of campaigns that contribute to this month. */
  count?: Maybe<Scalars['Int']>;
  /** The month in question. Returned in MMMM YYYY format. */
  month?: Maybe<Scalars['String']>;
};

export type Contributions = {
  __typename?: 'Contributions';
  /** The number of additional campaigns that contribute to this KPI in this date range to some degree.Does not include this campaign. */
  numberOfAdditionalContributingCampaigns?: Maybe<Scalars['Float']>;
  /** A month by month breakdown of campaign contributions to the simulation for campaigns that fall within this timeframe */
  percentileBreakdown?: Maybe<Array<Maybe<MonthlyBreakdown>>>;
  /** The amount of return for this KPI in between this campaign's start and end in the simulation */
  timeframeTotal?: Maybe<Scalars['Float']>;
  /** The contributions in this timeframe from other campaigns that have some overlap. Does not include the value from this campaign. */
  totalContributionsFromAdditionalCampaigns?: Maybe<Scalars['Float']>;
};

export type DailyStats = {
  __typename?: 'DailyStats';
  campaigns?: Maybe<Scalars['Float']>;
  ideas?: Maybe<Scalars['Float']>;
  teams?: Maybe<Scalars['Float']>;
  users?: Maybe<Scalars['Float']>;
};

export type DataLinePoint = {
  __typename?: 'DataLinePoint';
  /** Whether or not this point on the data line has been overridden manually */
  manual?: Maybe<Scalars['Boolean']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['Float']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DisconnectConsequences = {
  __typename?: 'DisconnectConsequences';
  /** The number of campaigns affected by the disconnection of this integration */
  campaigns?: Maybe<Scalars['Int']>;
  /** The number of funnel steps affected by the disconnection of this integration */
  funnelNodes?: Maybe<Scalars['Int']>;
};

export type EnumCampaignDataValueTypeFieldUpdateOperationsInput = {
  set?: Maybe<CampaignDataValueType>;
};

export type EnumCampaignDataValueTypeFilter = {
  equals?: Maybe<CampaignDataValueType>;
  in?: Maybe<Array<CampaignDataValueType>>;
  not?: Maybe<NestedEnumCampaignDataValueTypeFilter>;
  notIn?: Maybe<Array<CampaignDataValueType>>;
};

export type EnumCampaignOverridesNullableListFilter = {
  equals?: Maybe<Array<CampaignOverrides>>;
  has?: Maybe<CampaignOverrides>;
  hasEvery?: Maybe<Array<CampaignOverrides>>;
  hasSome?: Maybe<Array<CampaignOverrides>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type EnumCampaignStateFieldUpdateOperationsInput = {
  set?: Maybe<CampaignState>;
};

export type EnumCampaignStateFilter = {
  equals?: Maybe<CampaignState>;
  in?: Maybe<Array<CampaignState>>;
  not?: Maybe<NestedEnumCampaignStateFilter>;
  notIn?: Maybe<Array<CampaignState>>;
};

export type EnumCommentTypeFieldUpdateOperationsInput = {
  set?: Maybe<CommentType>;
};

export type EnumCommentTypeFilter = {
  equals?: Maybe<CommentType>;
  in?: Maybe<Array<CommentType>>;
  not?: Maybe<NestedEnumCommentTypeFilter>;
  notIn?: Maybe<Array<CommentType>>;
};

export type EnumFunnelDataPointSourceFieldUpdateOperationsInput = {
  set?: Maybe<FunnelDataPointSource>;
};

export type EnumFunnelDataPointSourceFilter = {
  equals?: Maybe<FunnelDataPointSource>;
  in?: Maybe<Array<FunnelDataPointSource>>;
  not?: Maybe<NestedEnumFunnelDataPointSourceFilter>;
  notIn?: Maybe<Array<FunnelDataPointSource>>;
};

export type EnumGoalDataPointValueProviderFieldUpdateOperationsInput = {
  set?: Maybe<GoalDataPointValueProvider>;
};

export type EnumGoalDataPointValueProviderFilter = {
  equals?: Maybe<GoalDataPointValueProvider>;
  in?: Maybe<Array<GoalDataPointValueProvider>>;
  not?: Maybe<NestedEnumGoalDataPointValueProviderFilter>;
  notIn?: Maybe<Array<GoalDataPointValueProvider>>;
};

export type EnumGoalDataTypeFieldUpdateOperationsInput = {
  set?: Maybe<GoalDataType>;
};

export type EnumGoalDataTypeFilter = {
  equals?: Maybe<GoalDataType>;
  in?: Maybe<Array<GoalDataType>>;
  not?: Maybe<NestedEnumGoalDataTypeFilter>;
  notIn?: Maybe<Array<GoalDataType>>;
};

export type EnumIntegrationDefaultTypeFieldUpdateOperationsInput = {
  set?: Maybe<IntegrationDefaultType>;
};

export type EnumIntegrationDefaultTypeFilter = {
  equals?: Maybe<IntegrationDefaultType>;
  in?: Maybe<Array<IntegrationDefaultType>>;
  not?: Maybe<NestedEnumIntegrationDefaultTypeFilter>;
  notIn?: Maybe<Array<IntegrationDefaultType>>;
};

export type EnumIntegrationScheduleTypeFieldUpdateOperationsInput = {
  set?: Maybe<IntegrationScheduleType>;
};

export type EnumIntegrationScheduleTypeFilter = {
  equals?: Maybe<IntegrationScheduleType>;
  in?: Maybe<Array<IntegrationScheduleType>>;
  not?: Maybe<NestedEnumIntegrationScheduleTypeFilter>;
  notIn?: Maybe<Array<IntegrationScheduleType>>;
};

export type EnumIntegrationStatusTypeFieldUpdateOperationsInput = {
  set?: Maybe<IntegrationStatusType>;
};

export type EnumIntegrationStatusTypeFilter = {
  equals?: Maybe<IntegrationStatusType>;
  in?: Maybe<Array<IntegrationStatusType>>;
  not?: Maybe<NestedEnumIntegrationStatusTypeFilter>;
  notIn?: Maybe<Array<IntegrationStatusType>>;
};

export type EnumIntegrationStatusTypeNullableFilter = {
  equals?: Maybe<IntegrationStatusType>;
  in?: Maybe<Array<IntegrationStatusType>>;
  not?: Maybe<NestedEnumIntegrationStatusTypeNullableFilter>;
  notIn?: Maybe<Array<IntegrationStatusType>>;
};

export type EnumIntegrationTaskTypeFieldUpdateOperationsInput = {
  set?: Maybe<IntegrationTaskType>;
};

export type EnumIntegrationTaskTypeFilter = {
  equals?: Maybe<IntegrationTaskType>;
  in?: Maybe<Array<IntegrationTaskType>>;
  not?: Maybe<NestedEnumIntegrationTaskTypeFilter>;
  notIn?: Maybe<Array<IntegrationTaskType>>;
};

export type EnumNotificationTypeFieldUpdateOperationsInput = {
  set?: Maybe<NotificationType>;
};

export type EnumNotificationTypeFilter = {
  equals?: Maybe<NotificationType>;
  in?: Maybe<Array<NotificationType>>;
  not?: Maybe<NestedEnumNotificationTypeFilter>;
  notIn?: Maybe<Array<NotificationType>>;
};

export type EnumOnboardsNullableListFilter = {
  equals?: Maybe<Array<Onboards>>;
  has?: Maybe<Onboards>;
  hasEvery?: Maybe<Array<Onboards>>;
  hasSome?: Maybe<Array<Onboards>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type EnumProgressDataPointTypeFieldUpdateOperationsInput = {
  set?: Maybe<ProgressDataPointType>;
};

export type EnumProgressDataPointTypeFilter = {
  equals?: Maybe<ProgressDataPointType>;
  in?: Maybe<Array<ProgressDataPointType>>;
  not?: Maybe<NestedEnumProgressDataPointTypeFilter>;
  notIn?: Maybe<Array<ProgressDataPointType>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type EnumStatementTrackingNullableFilter = {
  equals?: Maybe<StatementTracking>;
  in?: Maybe<Array<StatementTracking>>;
  not?: Maybe<NestedEnumStatementTrackingNullableFilter>;
  notIn?: Maybe<Array<StatementTracking>>;
};

export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
  set?: Maybe<SubscriptionStatus>;
};

export type EnumSubscriptionStatusFilter = {
  equals?: Maybe<SubscriptionStatus>;
  in?: Maybe<Array<SubscriptionStatus>>;
  not?: Maybe<NestedEnumSubscriptionStatusFilter>;
  notIn?: Maybe<Array<SubscriptionStatus>>;
};

export type EnumTaskTypeFieldUpdateOperationsInput = {
  set?: Maybe<TaskType>;
};

export type EnumTaskTypeFilter = {
  equals?: Maybe<TaskType>;
  in?: Maybe<Array<TaskType>>;
  not?: Maybe<NestedEnumTaskTypeFilter>;
  notIn?: Maybe<Array<TaskType>>;
};

export type EnumUserTypeFieldUpdateOperationsInput = {
  set?: Maybe<UserType>;
};

export type EnumUserTypeFilter = {
  equals?: Maybe<UserType>;
  in?: Maybe<Array<UserType>>;
  not?: Maybe<NestedEnumUserTypeFilter>;
  notIn?: Maybe<Array<UserType>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type Funnel = {
  __typename?: 'Funnel';
  /** Provides a two computed sets of data that represent high and low confidence lines for this funnel's projection. This field is separate from the progressDataLine field so it can be queried lazily and independently from progress data. */
  confidenceLines?: Maybe<ConfidenceDataSet>;
  /** The number of campaigns contributing to a given month. Past, present, or future. */
  contributionCount?: Maybe<Array<Maybe<ContributionCount>>>;
  conversions?: Maybe<Array<Maybe<FunnelConversion>>>;
  createdAt: Scalars['DateTime'];
  dataPointValues: Array<FunnelDataPointValue>;
  edges: Array<FunnelEdge>;
  /** Information about the status of expected results for each month in the simulation. Alsocontains information about the fulfilment of each month in respect to campaigns planned within it. */
  future?: Maybe<Array<Maybe<Contribution>>>;
  goals: Array<Goal>;
  id: Scalars['String'];
  nodes: Array<FunnelNode>;
  teamId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type FunnelConfidenceLinesArgs = {
  node: Scalars['String'];
};


export type FunnelContributionCountArgs = {
  end?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
};


export type FunnelDataPointValuesArgs = {
  cursor?: Maybe<FunnelDataPointValueWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FunnelDataPointValueWhereInput>;
};


export type FunnelEdgesArgs = {
  cursor?: Maybe<FunnelEdgeWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FunnelGoalsArgs = {
  cursor?: Maybe<GoalWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FunnelNodesArgs = {
  cursor?: Maybe<FunnelNodeWhereUniqueInput>;
  orderBy?: Maybe<Array<FunnelNodeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FunnelNodeWhereInput>;
};

export type FunnelConversion = {
  __typename?: 'FunnelConversion';
  averageEgress?: Maybe<Scalars['Float']>;
  averageIngress?: Maybe<Scalars['Float']>;
  fromNodeId?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  toNodeId?: Maybe<Scalars['String']>;
};

export type FunnelCreateManyOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FunnelCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<FunnelCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FunnelCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type FunnelCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<FunnelCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FunnelCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<FunnelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<FunnelCreateWithoutOwnerInput>>;
  createMany?: Maybe<FunnelCreateManyOwnerInputEnvelope>;
};

export type FunnelCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<FunnelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<FunnelCreateWithoutTeamInput>>;
  createMany?: Maybe<FunnelCreateManyTeamInputEnvelope>;
};

export type FunnelCreateNestedOneWithoutDataPointValuesInput = {
  connect?: Maybe<FunnelWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelCreateOrConnectWithoutDataPointValuesInput>;
  create?: Maybe<FunnelCreateWithoutDataPointValuesInput>;
};

export type FunnelCreateNestedOneWithoutEdgesInput = {
  connect?: Maybe<FunnelWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelCreateOrConnectWithoutEdgesInput>;
  create?: Maybe<FunnelCreateWithoutEdgesInput>;
};

export type FunnelCreateNestedOneWithoutGoalsInput = {
  connect?: Maybe<FunnelWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelCreateOrConnectWithoutGoalsInput>;
  create?: Maybe<FunnelCreateWithoutGoalsInput>;
};

export type FunnelCreateNestedOneWithoutNodesInput = {
  connect?: Maybe<FunnelWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelCreateOrConnectWithoutNodesInput>;
  create?: Maybe<FunnelCreateWithoutNodesInput>;
};

export type FunnelCreateOrConnectWithoutDataPointValuesInput = {
  create: FunnelCreateWithoutDataPointValuesInput;
  where: FunnelWhereUniqueInput;
};

export type FunnelCreateOrConnectWithoutEdgesInput = {
  create: FunnelCreateWithoutEdgesInput;
  where: FunnelWhereUniqueInput;
};

export type FunnelCreateOrConnectWithoutGoalsInput = {
  create: FunnelCreateWithoutGoalsInput;
  where: FunnelWhereUniqueInput;
};

export type FunnelCreateOrConnectWithoutNodesInput = {
  create: FunnelCreateWithoutNodesInput;
  where: FunnelWhereUniqueInput;
};

export type FunnelCreateOrConnectWithoutOwnerInput = {
  create: FunnelCreateWithoutOwnerInput;
  where: FunnelWhereUniqueInput;
};

export type FunnelCreateOrConnectWithoutTeamInput = {
  create: FunnelCreateWithoutTeamInput;
  where: FunnelWhereUniqueInput;
};

export type FunnelCreateWithoutDataPointValuesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  edges?: Maybe<FunnelEdgeCreateNestedManyWithoutFunnelInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutFunnelInput>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodes?: Maybe<FunnelNodeCreateNestedManyWithoutFunnelInput>;
  owner: UserCreateNestedOneWithoutFunnelsInput;
  team: TeamCreateNestedOneWithoutFunnelsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FunnelCreateWithoutEdgesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutFunnelInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutFunnelInput>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodes?: Maybe<FunnelNodeCreateNestedManyWithoutFunnelInput>;
  owner: UserCreateNestedOneWithoutFunnelsInput;
  team: TeamCreateNestedOneWithoutFunnelsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FunnelCreateWithoutGoalsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutFunnelInput>;
  edges?: Maybe<FunnelEdgeCreateNestedManyWithoutFunnelInput>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodes?: Maybe<FunnelNodeCreateNestedManyWithoutFunnelInput>;
  owner: UserCreateNestedOneWithoutFunnelsInput;
  team: TeamCreateNestedOneWithoutFunnelsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FunnelCreateWithoutNodesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutFunnelInput>;
  edges?: Maybe<FunnelEdgeCreateNestedManyWithoutFunnelInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutFunnelInput>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutFunnelsInput;
  team: TeamCreateNestedOneWithoutFunnelsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FunnelCreateWithoutOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutFunnelInput>;
  edges?: Maybe<FunnelEdgeCreateNestedManyWithoutFunnelInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutFunnelInput>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodes?: Maybe<FunnelNodeCreateNestedManyWithoutFunnelInput>;
  team: TeamCreateNestedOneWithoutFunnelsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FunnelCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutFunnelInput>;
  edges?: Maybe<FunnelEdgeCreateNestedManyWithoutFunnelInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutFunnelInput>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodes?: Maybe<FunnelNodeCreateNestedManyWithoutFunnelInput>;
  owner: UserCreateNestedOneWithoutFunnelsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FunnelDataInput = {
  data: Array<Maybe<FunnelDataPointInput>>;
  dateFrom: Scalars['String'];
  dateTo: Scalars['String'];
};

export type FunnelDataPointInput = {
  nodeId: Scalars['ID'];
  value: Scalars['Float'];
};

export enum FunnelDataPointSource {
  INTEGRATION = 'INTEGRATION',
  MANUAL_OVERRIDE = 'MANUAL_OVERRIDE',
  ONBOARD = 'ONBOARD'
}

export type FunnelDataPointValue = {
  __typename?: 'FunnelDataPointValue';
  date: Scalars['DateTime'];
  id: Scalars['String'];
  nodeId: Scalars['String'];
  source: FunnelDataPointSource;
  value: Scalars['Float'];
};

export type FunnelDataPointValueCreateManyFunnelInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  integrationId?: Maybe<Scalars['String']>;
  nodeId: Scalars['String'];
  source?: Maybe<FunnelDataPointSource>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Float'];
};

export type FunnelDataPointValueCreateManyFunnelInputEnvelope = {
  data?: Maybe<Array<FunnelDataPointValueCreateManyFunnelInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FunnelDataPointValueCreateManyIntegrationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  funnelId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  nodeId: Scalars['String'];
  source?: Maybe<FunnelDataPointSource>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Float'];
};

export type FunnelDataPointValueCreateManyIntegrationInputEnvelope = {
  data?: Maybe<Array<FunnelDataPointValueCreateManyIntegrationInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FunnelDataPointValueCreateManyNodeInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  funnelId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  integrationId?: Maybe<Scalars['String']>;
  source?: Maybe<FunnelDataPointSource>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Float'];
};

export type FunnelDataPointValueCreateManyNodeInputEnvelope = {
  data?: Maybe<Array<FunnelDataPointValueCreateManyNodeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FunnelDataPointValueCreateNestedManyWithoutFunnelInput = {
  connect?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelDataPointValueCreateOrConnectWithoutFunnelInput>>;
  create?: Maybe<Array<FunnelDataPointValueCreateWithoutFunnelInput>>;
  createMany?: Maybe<FunnelDataPointValueCreateManyFunnelInputEnvelope>;
};

export type FunnelDataPointValueCreateNestedManyWithoutIntegrationInput = {
  connect?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelDataPointValueCreateOrConnectWithoutIntegrationInput>>;
  create?: Maybe<Array<FunnelDataPointValueCreateWithoutIntegrationInput>>;
  createMany?: Maybe<FunnelDataPointValueCreateManyIntegrationInputEnvelope>;
};

export type FunnelDataPointValueCreateNestedManyWithoutNodeInput = {
  connect?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelDataPointValueCreateOrConnectWithoutNodeInput>>;
  create?: Maybe<Array<FunnelDataPointValueCreateWithoutNodeInput>>;
  createMany?: Maybe<FunnelDataPointValueCreateManyNodeInputEnvelope>;
};

export type FunnelDataPointValueCreateOrConnectWithoutFunnelInput = {
  create: FunnelDataPointValueCreateWithoutFunnelInput;
  where: FunnelDataPointValueWhereUniqueInput;
};

export type FunnelDataPointValueCreateOrConnectWithoutIntegrationInput = {
  create: FunnelDataPointValueCreateWithoutIntegrationInput;
  where: FunnelDataPointValueWhereUniqueInput;
};

export type FunnelDataPointValueCreateOrConnectWithoutNodeInput = {
  create: FunnelDataPointValueCreateWithoutNodeInput;
  where: FunnelDataPointValueWhereUniqueInput;
};

export type FunnelDataPointValueCreateWithoutFunnelInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutFunnelDataPointValueInput>;
  node: FunnelNodeCreateNestedOneWithoutDataPointValuesInput;
  source?: Maybe<FunnelDataPointSource>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Float'];
};

export type FunnelDataPointValueCreateWithoutIntegrationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  funnel: FunnelCreateNestedOneWithoutDataPointValuesInput;
  id?: Maybe<Scalars['String']>;
  node: FunnelNodeCreateNestedOneWithoutDataPointValuesInput;
  source?: Maybe<FunnelDataPointSource>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Float'];
};

export type FunnelDataPointValueCreateWithoutNodeInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  funnel: FunnelCreateNestedOneWithoutDataPointValuesInput;
  id?: Maybe<Scalars['String']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutFunnelDataPointValueInput>;
  source?: Maybe<FunnelDataPointSource>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Float'];
};

export type FunnelDataPointValueListRelationFilter = {
  every?: Maybe<FunnelDataPointValueWhereInput>;
  none?: Maybe<FunnelDataPointValueWhereInput>;
  some?: Maybe<FunnelDataPointValueWhereInput>;
};

export type FunnelDataPointValueNodeIdDateSourceCompoundUniqueInput = {
  date: Scalars['DateTime'];
  nodeId: Scalars['String'];
  source: FunnelDataPointSource;
};

export type FunnelDataPointValueScalarWhereInput = {
  AND?: Maybe<Array<FunnelDataPointValueScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeFilter>;
  funnelId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  integrationId?: Maybe<StringNullableFilter>;
  nodeId?: Maybe<StringFilter>;
  NOT?: Maybe<Array<FunnelDataPointValueScalarWhereInput>>;
  OR?: Maybe<Array<FunnelDataPointValueScalarWhereInput>>;
  source?: Maybe<EnumFunnelDataPointSourceFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  value?: Maybe<FloatFilter>;
};

export type FunnelDataPointValueUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  source?: Maybe<EnumFunnelDataPointSourceFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type FunnelDataPointValueUpdateManyWithoutFunnelInput = {
  connect?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelDataPointValueCreateOrConnectWithoutFunnelInput>>;
  create?: Maybe<Array<FunnelDataPointValueCreateWithoutFunnelInput>>;
  createMany?: Maybe<FunnelDataPointValueCreateManyFunnelInputEnvelope>;
  delete?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FunnelDataPointValueScalarWhereInput>>;
  disconnect?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  set?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  update?: Maybe<Array<FunnelDataPointValueUpdateWithWhereUniqueWithoutFunnelInput>>;
  updateMany?: Maybe<Array<FunnelDataPointValueUpdateManyWithWhereWithoutFunnelInput>>;
  upsert?: Maybe<Array<FunnelDataPointValueUpsertWithWhereUniqueWithoutFunnelInput>>;
};

export type FunnelDataPointValueUpdateManyWithoutIntegrationInput = {
  connect?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelDataPointValueCreateOrConnectWithoutIntegrationInput>>;
  create?: Maybe<Array<FunnelDataPointValueCreateWithoutIntegrationInput>>;
  createMany?: Maybe<FunnelDataPointValueCreateManyIntegrationInputEnvelope>;
  delete?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FunnelDataPointValueScalarWhereInput>>;
  disconnect?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  set?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  update?: Maybe<Array<FunnelDataPointValueUpdateWithWhereUniqueWithoutIntegrationInput>>;
  updateMany?: Maybe<Array<FunnelDataPointValueUpdateManyWithWhereWithoutIntegrationInput>>;
  upsert?: Maybe<Array<FunnelDataPointValueUpsertWithWhereUniqueWithoutIntegrationInput>>;
};

export type FunnelDataPointValueUpdateManyWithoutNodeInput = {
  connect?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelDataPointValueCreateOrConnectWithoutNodeInput>>;
  create?: Maybe<Array<FunnelDataPointValueCreateWithoutNodeInput>>;
  createMany?: Maybe<FunnelDataPointValueCreateManyNodeInputEnvelope>;
  delete?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FunnelDataPointValueScalarWhereInput>>;
  disconnect?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  set?: Maybe<Array<FunnelDataPointValueWhereUniqueInput>>;
  update?: Maybe<Array<FunnelDataPointValueUpdateWithWhereUniqueWithoutNodeInput>>;
  updateMany?: Maybe<Array<FunnelDataPointValueUpdateManyWithWhereWithoutNodeInput>>;
  upsert?: Maybe<Array<FunnelDataPointValueUpsertWithWhereUniqueWithoutNodeInput>>;
};

export type FunnelDataPointValueUpdateManyWithWhereWithoutFunnelInput = {
  data: FunnelDataPointValueUpdateManyMutationInput;
  where: FunnelDataPointValueScalarWhereInput;
};

export type FunnelDataPointValueUpdateManyWithWhereWithoutIntegrationInput = {
  data: FunnelDataPointValueUpdateManyMutationInput;
  where: FunnelDataPointValueScalarWhereInput;
};

export type FunnelDataPointValueUpdateManyWithWhereWithoutNodeInput = {
  data: FunnelDataPointValueUpdateManyMutationInput;
  where: FunnelDataPointValueScalarWhereInput;
};

export type FunnelDataPointValueUpdateWithoutFunnelInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutFunnelDataPointValueInput>;
  node?: Maybe<FunnelNodeUpdateOneRequiredWithoutDataPointValuesInput>;
  source?: Maybe<EnumFunnelDataPointSourceFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type FunnelDataPointValueUpdateWithoutIntegrationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutDataPointValuesInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  node?: Maybe<FunnelNodeUpdateOneRequiredWithoutDataPointValuesInput>;
  source?: Maybe<EnumFunnelDataPointSourceFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type FunnelDataPointValueUpdateWithoutNodeInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutDataPointValuesInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutFunnelDataPointValueInput>;
  source?: Maybe<EnumFunnelDataPointSourceFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type FunnelDataPointValueUpdateWithWhereUniqueWithoutFunnelInput = {
  data: FunnelDataPointValueUpdateWithoutFunnelInput;
  where: FunnelDataPointValueWhereUniqueInput;
};

export type FunnelDataPointValueUpdateWithWhereUniqueWithoutIntegrationInput = {
  data: FunnelDataPointValueUpdateWithoutIntegrationInput;
  where: FunnelDataPointValueWhereUniqueInput;
};

export type FunnelDataPointValueUpdateWithWhereUniqueWithoutNodeInput = {
  data: FunnelDataPointValueUpdateWithoutNodeInput;
  where: FunnelDataPointValueWhereUniqueInput;
};

export type FunnelDataPointValueUpsertWithWhereUniqueWithoutFunnelInput = {
  create: FunnelDataPointValueCreateWithoutFunnelInput;
  update: FunnelDataPointValueUpdateWithoutFunnelInput;
  where: FunnelDataPointValueWhereUniqueInput;
};

export type FunnelDataPointValueUpsertWithWhereUniqueWithoutIntegrationInput = {
  create: FunnelDataPointValueCreateWithoutIntegrationInput;
  update: FunnelDataPointValueUpdateWithoutIntegrationInput;
  where: FunnelDataPointValueWhereUniqueInput;
};

export type FunnelDataPointValueUpsertWithWhereUniqueWithoutNodeInput = {
  create: FunnelDataPointValueCreateWithoutNodeInput;
  update: FunnelDataPointValueUpdateWithoutNodeInput;
  where: FunnelDataPointValueWhereUniqueInput;
};

export type FunnelDataPointValueWhereInput = {
  AND?: Maybe<Array<FunnelDataPointValueWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeFilter>;
  funnel?: Maybe<FunnelWhereInput>;
  funnelId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  integration?: Maybe<IntegrationWhereInput>;
  integrationId?: Maybe<StringNullableFilter>;
  node?: Maybe<FunnelNodeWhereInput>;
  nodeId?: Maybe<StringFilter>;
  NOT?: Maybe<Array<FunnelDataPointValueWhereInput>>;
  OR?: Maybe<Array<FunnelDataPointValueWhereInput>>;
  source?: Maybe<EnumFunnelDataPointSourceFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  value?: Maybe<FloatFilter>;
};

export type FunnelDataPointValueWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  nodeId_date_source?: Maybe<FunnelDataPointValueNodeIdDateSourceCompoundUniqueInput>;
};

export type FunnelEdge = {
  __typename?: 'FunnelEdge';
  createdAt: Scalars['DateTime'];
  from: FunnelNode;
  fromNodeId: Scalars['String'];
  id: Scalars['String'];
  to: FunnelNode;
  toNodeId: Scalars['String'];
};

export type FunnelEdgeCreateManyFromInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  toNodeId: Scalars['String'];
};

export type FunnelEdgeCreateManyFromInputEnvelope = {
  data?: Maybe<Array<FunnelEdgeCreateManyFromInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FunnelEdgeCreateManyFunnelInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  fromNodeId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  toNodeId: Scalars['String'];
};

export type FunnelEdgeCreateManyFunnelInputEnvelope = {
  data?: Maybe<Array<FunnelEdgeCreateManyFunnelInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FunnelEdgeCreateManyToInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  fromNodeId: Scalars['String'];
  funnelId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
};

export type FunnelEdgeCreateManyToInputEnvelope = {
  data?: Maybe<Array<FunnelEdgeCreateManyToInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FunnelEdgeCreateNestedManyWithoutFromInput = {
  connect?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelEdgeCreateOrConnectWithoutFromInput>>;
  create?: Maybe<Array<FunnelEdgeCreateWithoutFromInput>>;
  createMany?: Maybe<FunnelEdgeCreateManyFromInputEnvelope>;
};

export type FunnelEdgeCreateNestedManyWithoutFunnelInput = {
  connect?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelEdgeCreateOrConnectWithoutFunnelInput>>;
  create?: Maybe<Array<FunnelEdgeCreateWithoutFunnelInput>>;
  createMany?: Maybe<FunnelEdgeCreateManyFunnelInputEnvelope>;
};

export type FunnelEdgeCreateNestedManyWithoutToInput = {
  connect?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelEdgeCreateOrConnectWithoutToInput>>;
  create?: Maybe<Array<FunnelEdgeCreateWithoutToInput>>;
  createMany?: Maybe<FunnelEdgeCreateManyToInputEnvelope>;
};

export type FunnelEdgeCreateOrConnectWithoutFromInput = {
  create: FunnelEdgeCreateWithoutFromInput;
  where: FunnelEdgeWhereUniqueInput;
};

export type FunnelEdgeCreateOrConnectWithoutFunnelInput = {
  create: FunnelEdgeCreateWithoutFunnelInput;
  where: FunnelEdgeWhereUniqueInput;
};

export type FunnelEdgeCreateOrConnectWithoutToInput = {
  create: FunnelEdgeCreateWithoutToInput;
  where: FunnelEdgeWhereUniqueInput;
};

export type FunnelEdgeCreateWithoutFromInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  funnel: FunnelCreateNestedOneWithoutEdgesInput;
  id?: Maybe<Scalars['String']>;
  to: FunnelNodeCreateNestedOneWithoutToEdgesInput;
};

export type FunnelEdgeCreateWithoutFunnelInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  from: FunnelNodeCreateNestedOneWithoutFromEdgesInput;
  id?: Maybe<Scalars['String']>;
  to: FunnelNodeCreateNestedOneWithoutToEdgesInput;
};

export type FunnelEdgeCreateWithoutToInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  from: FunnelNodeCreateNestedOneWithoutFromEdgesInput;
  funnel: FunnelCreateNestedOneWithoutEdgesInput;
  id?: Maybe<Scalars['String']>;
};

export type FunnelEdgeListRelationFilter = {
  every?: Maybe<FunnelEdgeWhereInput>;
  none?: Maybe<FunnelEdgeWhereInput>;
  some?: Maybe<FunnelEdgeWhereInput>;
};

export type FunnelEdgeScalarWhereInput = {
  AND?: Maybe<Array<FunnelEdgeScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  fromNodeId?: Maybe<StringFilter>;
  funnelId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<FunnelEdgeScalarWhereInput>>;
  OR?: Maybe<Array<FunnelEdgeScalarWhereInput>>;
  toNodeId?: Maybe<StringFilter>;
};

export type FunnelEdgeUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
};

export type FunnelEdgeUpdateManyWithoutFromInput = {
  connect?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelEdgeCreateOrConnectWithoutFromInput>>;
  create?: Maybe<Array<FunnelEdgeCreateWithoutFromInput>>;
  createMany?: Maybe<FunnelEdgeCreateManyFromInputEnvelope>;
  delete?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FunnelEdgeScalarWhereInput>>;
  disconnect?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  set?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  update?: Maybe<Array<FunnelEdgeUpdateWithWhereUniqueWithoutFromInput>>;
  updateMany?: Maybe<Array<FunnelEdgeUpdateManyWithWhereWithoutFromInput>>;
  upsert?: Maybe<Array<FunnelEdgeUpsertWithWhereUniqueWithoutFromInput>>;
};

export type FunnelEdgeUpdateManyWithoutFunnelInput = {
  connect?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelEdgeCreateOrConnectWithoutFunnelInput>>;
  create?: Maybe<Array<FunnelEdgeCreateWithoutFunnelInput>>;
  createMany?: Maybe<FunnelEdgeCreateManyFunnelInputEnvelope>;
  delete?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FunnelEdgeScalarWhereInput>>;
  disconnect?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  set?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  update?: Maybe<Array<FunnelEdgeUpdateWithWhereUniqueWithoutFunnelInput>>;
  updateMany?: Maybe<Array<FunnelEdgeUpdateManyWithWhereWithoutFunnelInput>>;
  upsert?: Maybe<Array<FunnelEdgeUpsertWithWhereUniqueWithoutFunnelInput>>;
};

export type FunnelEdgeUpdateManyWithoutToInput = {
  connect?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelEdgeCreateOrConnectWithoutToInput>>;
  create?: Maybe<Array<FunnelEdgeCreateWithoutToInput>>;
  createMany?: Maybe<FunnelEdgeCreateManyToInputEnvelope>;
  delete?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FunnelEdgeScalarWhereInput>>;
  disconnect?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  set?: Maybe<Array<FunnelEdgeWhereUniqueInput>>;
  update?: Maybe<Array<FunnelEdgeUpdateWithWhereUniqueWithoutToInput>>;
  updateMany?: Maybe<Array<FunnelEdgeUpdateManyWithWhereWithoutToInput>>;
  upsert?: Maybe<Array<FunnelEdgeUpsertWithWhereUniqueWithoutToInput>>;
};

export type FunnelEdgeUpdateManyWithWhereWithoutFromInput = {
  data: FunnelEdgeUpdateManyMutationInput;
  where: FunnelEdgeScalarWhereInput;
};

export type FunnelEdgeUpdateManyWithWhereWithoutFunnelInput = {
  data: FunnelEdgeUpdateManyMutationInput;
  where: FunnelEdgeScalarWhereInput;
};

export type FunnelEdgeUpdateManyWithWhereWithoutToInput = {
  data: FunnelEdgeUpdateManyMutationInput;
  where: FunnelEdgeScalarWhereInput;
};

export type FunnelEdgeUpdateWithoutFromInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutEdgesInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  to?: Maybe<FunnelNodeUpdateOneRequiredWithoutToEdgesInput>;
};

export type FunnelEdgeUpdateWithoutFunnelInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  from?: Maybe<FunnelNodeUpdateOneRequiredWithoutFromEdgesInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  to?: Maybe<FunnelNodeUpdateOneRequiredWithoutToEdgesInput>;
};

export type FunnelEdgeUpdateWithoutToInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  from?: Maybe<FunnelNodeUpdateOneRequiredWithoutFromEdgesInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutEdgesInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
};

export type FunnelEdgeUpdateWithWhereUniqueWithoutFromInput = {
  data: FunnelEdgeUpdateWithoutFromInput;
  where: FunnelEdgeWhereUniqueInput;
};

export type FunnelEdgeUpdateWithWhereUniqueWithoutFunnelInput = {
  data: FunnelEdgeUpdateWithoutFunnelInput;
  where: FunnelEdgeWhereUniqueInput;
};

export type FunnelEdgeUpdateWithWhereUniqueWithoutToInput = {
  data: FunnelEdgeUpdateWithoutToInput;
  where: FunnelEdgeWhereUniqueInput;
};

export type FunnelEdgeUpsertWithWhereUniqueWithoutFromInput = {
  create: FunnelEdgeCreateWithoutFromInput;
  update: FunnelEdgeUpdateWithoutFromInput;
  where: FunnelEdgeWhereUniqueInput;
};

export type FunnelEdgeUpsertWithWhereUniqueWithoutFunnelInput = {
  create: FunnelEdgeCreateWithoutFunnelInput;
  update: FunnelEdgeUpdateWithoutFunnelInput;
  where: FunnelEdgeWhereUniqueInput;
};

export type FunnelEdgeUpsertWithWhereUniqueWithoutToInput = {
  create: FunnelEdgeCreateWithoutToInput;
  update: FunnelEdgeUpdateWithoutToInput;
  where: FunnelEdgeWhereUniqueInput;
};

export type FunnelEdgeWhereInput = {
  AND?: Maybe<Array<FunnelEdgeWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  from?: Maybe<FunnelNodeWhereInput>;
  fromNodeId?: Maybe<StringFilter>;
  funnel?: Maybe<FunnelWhereInput>;
  funnelId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<FunnelEdgeWhereInput>>;
  OR?: Maybe<Array<FunnelEdgeWhereInput>>;
  to?: Maybe<FunnelNodeWhereInput>;
  toNodeId?: Maybe<StringFilter>;
};

export type FunnelEdgeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type FunnelListRelationFilter = {
  every?: Maybe<FunnelWhereInput>;
  none?: Maybe<FunnelWhereInput>;
  some?: Maybe<FunnelWhereInput>;
};

export type FunnelNode = {
  __typename?: 'FunnelNode';
  actualDataLine?: Maybe<Array<Maybe<DataLinePoint>>>;
  campaignResultMap: Array<CampaignResultMap>;
  campaigns: Array<Campaign>;
  /** Provides a default virtual set of values for this goal point. Use thisif there is no milestone for the point you have requested */
  defaultGoalDataPointValue?: Maybe<Array<Maybe<GoalDataPointValue>>>;
  funnelId: Scalars['String'];
  goalDataPointValue: Array<GoalDataPointValue>;
  id: Scalars['String'];
  integration: Array<Integration>;
  /** Get a sum for a specific integration between start and end dates for this node */
  integrationValue?: Maybe<Scalars['Float']>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  /** A sum of funnel data values grouped by month and source  */
  monthlyValues?: Maybe<Array<Maybe<MonthlyDataPointValues>>>;
  name: Scalars['String'];
  /** Get the value provided during onboarding for this node */
  onboardValue?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Int']>;
  progressDataLine?: Maybe<Array<Maybe<DataLinePoint>>>;
};


export type FunnelNodeActualDataLineArgs = {
  end?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
};


export type FunnelNodeCampaignResultMapArgs = {
  cursor?: Maybe<CampaignResultMapWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CampaignResultMapWhereInput>;
};


export type FunnelNodeCampaignsArgs = {
  cursor?: Maybe<CampaignWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FunnelNodeDefaultGoalDataPointValueArgs = {
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};


export type FunnelNodeGoalDataPointValueArgs = {
  cursor?: Maybe<GoalDataPointValueWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GoalDataPointValueWhereInput>;
};


export type FunnelNodeIntegrationArgs = {
  cursor?: Maybe<IntegrationWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FunnelNodeIntegrationValueArgs = {
  end?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
};


export type FunnelNodeProgressDataLineArgs = {
  end?: Maybe<Scalars['String']>;
  normaliseLast?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['String']>;
};

export type FunnelNodeCreateManyFunnelInput = {
  id?: Maybe<Scalars['String']>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
};

export type FunnelNodeCreateManyFunnelInputEnvelope = {
  data?: Maybe<Array<FunnelNodeCreateManyFunnelInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FunnelNodeCreateNestedManyWithoutFunnelInput = {
  connect?: Maybe<Array<FunnelNodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelNodeCreateOrConnectWithoutFunnelInput>>;
  create?: Maybe<Array<FunnelNodeCreateWithoutFunnelInput>>;
  createMany?: Maybe<FunnelNodeCreateManyFunnelInputEnvelope>;
};

export type FunnelNodeCreateNestedOneWithoutCampaignGroupsInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutCampaignGroupsInput>;
  create?: Maybe<FunnelNodeCreateWithoutCampaignGroupsInput>;
};

export type FunnelNodeCreateNestedOneWithoutCampaignResultMapInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutCampaignResultMapInput>;
  create?: Maybe<FunnelNodeCreateWithoutCampaignResultMapInput>;
};

export type FunnelNodeCreateNestedOneWithoutCampaignsInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutCampaignsInput>;
  create?: Maybe<FunnelNodeCreateWithoutCampaignsInput>;
};

export type FunnelNodeCreateNestedOneWithoutDataPointValuesInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutDataPointValuesInput>;
  create?: Maybe<FunnelNodeCreateWithoutDataPointValuesInput>;
};

export type FunnelNodeCreateNestedOneWithoutFromEdgesInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutFromEdgesInput>;
  create?: Maybe<FunnelNodeCreateWithoutFromEdgesInput>;
};

export type FunnelNodeCreateNestedOneWithoutGoalDataPointValueInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutGoalDataPointValueInput>;
  create?: Maybe<FunnelNodeCreateWithoutGoalDataPointValueInput>;
};

export type FunnelNodeCreateNestedOneWithoutGoalInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutGoalInput>;
  create?: Maybe<FunnelNodeCreateWithoutGoalInput>;
};

export type FunnelNodeCreateNestedOneWithoutIdeaInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutIdeaInput>;
  create?: Maybe<FunnelNodeCreateWithoutIdeaInput>;
};

export type FunnelNodeCreateNestedOneWithoutIdeaSessionInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutIdeaSessionInput>;
  create?: Maybe<FunnelNodeCreateWithoutIdeaSessionInput>;
};

export type FunnelNodeCreateNestedOneWithoutIntegrationInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutIntegrationInput>;
  create?: Maybe<FunnelNodeCreateWithoutIntegrationInput>;
};

export type FunnelNodeCreateNestedOneWithoutToEdgesInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutToEdgesInput>;
  create?: Maybe<FunnelNodeCreateWithoutToEdgesInput>;
};

export type FunnelNodeCreateOrConnectWithoutCampaignGroupsInput = {
  create: FunnelNodeCreateWithoutCampaignGroupsInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeCreateOrConnectWithoutCampaignResultMapInput = {
  create: FunnelNodeCreateWithoutCampaignResultMapInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeCreateOrConnectWithoutCampaignsInput = {
  create: FunnelNodeCreateWithoutCampaignsInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeCreateOrConnectWithoutDataPointValuesInput = {
  create: FunnelNodeCreateWithoutDataPointValuesInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeCreateOrConnectWithoutFromEdgesInput = {
  create: FunnelNodeCreateWithoutFromEdgesInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeCreateOrConnectWithoutFunnelInput = {
  create: FunnelNodeCreateWithoutFunnelInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeCreateOrConnectWithoutGoalDataPointValueInput = {
  create: FunnelNodeCreateWithoutGoalDataPointValueInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeCreateOrConnectWithoutGoalInput = {
  create: FunnelNodeCreateWithoutGoalInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeCreateOrConnectWithoutIdeaInput = {
  create: FunnelNodeCreateWithoutIdeaInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeCreateOrConnectWithoutIdeaSessionInput = {
  create: FunnelNodeCreateWithoutIdeaSessionInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeCreateOrConnectWithoutIntegrationInput = {
  create: FunnelNodeCreateWithoutIntegrationInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeCreateOrConnectWithoutToEdgesInput = {
  create: FunnelNodeCreateWithoutToEdgesInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeCreateWithoutCampaignGroupsInput = {
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutFromInput>;
  funnel: FunnelCreateNestedOneWithoutNodesInput;
  Goal?: Maybe<GoalCreateNestedManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutFunnelNodeInput>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutKpiInput>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  toEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutToInput>;
};

export type FunnelNodeCreateWithoutCampaignResultMapInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutFromInput>;
  funnel: FunnelCreateNestedOneWithoutNodesInput;
  Goal?: Maybe<GoalCreateNestedManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutFunnelNodeInput>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutKpiInput>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  toEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutToInput>;
};

export type FunnelNodeCreateWithoutCampaignsInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutFromInput>;
  funnel: FunnelCreateNestedOneWithoutNodesInput;
  Goal?: Maybe<GoalCreateNestedManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutFunnelNodeInput>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutKpiInput>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  toEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutToInput>;
};

export type FunnelNodeCreateWithoutDataPointValuesInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutKpiInput>;
  fromEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutFromInput>;
  funnel: FunnelCreateNestedOneWithoutNodesInput;
  Goal?: Maybe<GoalCreateNestedManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutFunnelNodeInput>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutKpiInput>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  toEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutToInput>;
};

export type FunnelNodeCreateWithoutFromEdgesInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutNodeInput>;
  funnel: FunnelCreateNestedOneWithoutNodesInput;
  Goal?: Maybe<GoalCreateNestedManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutFunnelNodeInput>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutKpiInput>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  toEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutToInput>;
};

export type FunnelNodeCreateWithoutFunnelInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutFromInput>;
  Goal?: Maybe<GoalCreateNestedManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutFunnelNodeInput>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutKpiInput>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  toEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutToInput>;
};

export type FunnelNodeCreateWithoutGoalDataPointValueInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutFromInput>;
  funnel: FunnelCreateNestedOneWithoutNodesInput;
  Goal?: Maybe<GoalCreateNestedManyWithoutMetricInput>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutKpiInput>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  toEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutToInput>;
};

export type FunnelNodeCreateWithoutGoalInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutFromInput>;
  funnel: FunnelCreateNestedOneWithoutNodesInput;
  GoalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutFunnelNodeInput>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutKpiInput>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  toEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutToInput>;
};

export type FunnelNodeCreateWithoutIdeaInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutFromInput>;
  funnel: FunnelCreateNestedOneWithoutNodesInput;
  Goal?: Maybe<GoalCreateNestedManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutFunnelNodeInput>;
  id?: Maybe<Scalars['String']>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutKpiInput>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  toEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutToInput>;
};

export type FunnelNodeCreateWithoutIdeaSessionInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutFromInput>;
  funnel: FunnelCreateNestedOneWithoutNodesInput;
  Goal?: Maybe<GoalCreateNestedManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutFunnelNodeInput>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutKpiInput>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  toEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutToInput>;
};

export type FunnelNodeCreateWithoutIntegrationInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutFromInput>;
  funnel: FunnelCreateNestedOneWithoutNodesInput;
  Goal?: Maybe<GoalCreateNestedManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutFunnelNodeInput>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutKpiInput>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  toEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutToInput>;
};

export type FunnelNodeCreateWithoutToEdgesInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapCreateNestedManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueCreateNestedManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeCreateNestedManyWithoutFromInput>;
  funnel: FunnelCreateNestedOneWithoutNodesInput;
  Goal?: Maybe<GoalCreateNestedManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutFunnelNodeInput>;
  id?: Maybe<Scalars['String']>;
  Idea?: Maybe<IdeaCreateNestedManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutKpiInput>;
  integration?: Maybe<IntegrationCreateNestedManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
};

export type FunnelNodeFunnelIdNameCompoundUniqueInput = {
  funnelId: Scalars['String'];
  name: Scalars['String'];
};

export type FunnelNodeListRelationFilter = {
  every?: Maybe<FunnelNodeWhereInput>;
  none?: Maybe<FunnelNodeWhereInput>;
  some?: Maybe<FunnelNodeWhereInput>;
};

export type FunnelNodeOrderByInput = {
  funnelId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isRevenue?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  order?: Maybe<SortOrder>;
};

export type FunnelNodeScalarWhereInput = {
  AND?: Maybe<Array<FunnelNodeScalarWhereInput>>;
  funnelId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  isRevenue?: Maybe<BoolNullableFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<FunnelNodeScalarWhereInput>>;
  OR?: Maybe<Array<FunnelNodeScalarWhereInput>>;
  order?: Maybe<IntNullableFilter>;
};

export type FunnelNodeUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type FunnelNodeUpdateManyWithoutFunnelInput = {
  connect?: Maybe<Array<FunnelNodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelNodeCreateOrConnectWithoutFunnelInput>>;
  create?: Maybe<Array<FunnelNodeCreateWithoutFunnelInput>>;
  createMany?: Maybe<FunnelNodeCreateManyFunnelInputEnvelope>;
  delete?: Maybe<Array<FunnelNodeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FunnelNodeScalarWhereInput>>;
  disconnect?: Maybe<Array<FunnelNodeWhereUniqueInput>>;
  set?: Maybe<Array<FunnelNodeWhereUniqueInput>>;
  update?: Maybe<Array<FunnelNodeUpdateWithWhereUniqueWithoutFunnelInput>>;
  updateMany?: Maybe<Array<FunnelNodeUpdateManyWithWhereWithoutFunnelInput>>;
  upsert?: Maybe<Array<FunnelNodeUpsertWithWhereUniqueWithoutFunnelInput>>;
};

export type FunnelNodeUpdateManyWithWhereWithoutFunnelInput = {
  data: FunnelNodeUpdateManyMutationInput;
  where: FunnelNodeScalarWhereInput;
};

export type FunnelNodeUpdateOneRequiredWithoutCampaignResultMapInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutCampaignResultMapInput>;
  create?: Maybe<FunnelNodeCreateWithoutCampaignResultMapInput>;
  update?: Maybe<FunnelNodeUpdateWithoutCampaignResultMapInput>;
  upsert?: Maybe<FunnelNodeUpsertWithoutCampaignResultMapInput>;
};

export type FunnelNodeUpdateOneRequiredWithoutDataPointValuesInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutDataPointValuesInput>;
  create?: Maybe<FunnelNodeCreateWithoutDataPointValuesInput>;
  update?: Maybe<FunnelNodeUpdateWithoutDataPointValuesInput>;
  upsert?: Maybe<FunnelNodeUpsertWithoutDataPointValuesInput>;
};

export type FunnelNodeUpdateOneRequiredWithoutFromEdgesInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutFromEdgesInput>;
  create?: Maybe<FunnelNodeCreateWithoutFromEdgesInput>;
  update?: Maybe<FunnelNodeUpdateWithoutFromEdgesInput>;
  upsert?: Maybe<FunnelNodeUpsertWithoutFromEdgesInput>;
};

export type FunnelNodeUpdateOneRequiredWithoutGoalDataPointValueInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutGoalDataPointValueInput>;
  create?: Maybe<FunnelNodeCreateWithoutGoalDataPointValueInput>;
  update?: Maybe<FunnelNodeUpdateWithoutGoalDataPointValueInput>;
  upsert?: Maybe<FunnelNodeUpsertWithoutGoalDataPointValueInput>;
};

export type FunnelNodeUpdateOneRequiredWithoutGoalInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutGoalInput>;
  create?: Maybe<FunnelNodeCreateWithoutGoalInput>;
  update?: Maybe<FunnelNodeUpdateWithoutGoalInput>;
  upsert?: Maybe<FunnelNodeUpsertWithoutGoalInput>;
};

export type FunnelNodeUpdateOneRequiredWithoutToEdgesInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutToEdgesInput>;
  create?: Maybe<FunnelNodeCreateWithoutToEdgesInput>;
  update?: Maybe<FunnelNodeUpdateWithoutToEdgesInput>;
  upsert?: Maybe<FunnelNodeUpsertWithoutToEdgesInput>;
};

export type FunnelNodeUpdateOneWithoutCampaignGroupsInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutCampaignGroupsInput>;
  create?: Maybe<FunnelNodeCreateWithoutCampaignGroupsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FunnelNodeUpdateWithoutCampaignGroupsInput>;
  upsert?: Maybe<FunnelNodeUpsertWithoutCampaignGroupsInput>;
};

export type FunnelNodeUpdateOneWithoutCampaignsInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutCampaignsInput>;
  create?: Maybe<FunnelNodeCreateWithoutCampaignsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FunnelNodeUpdateWithoutCampaignsInput>;
  upsert?: Maybe<FunnelNodeUpsertWithoutCampaignsInput>;
};

export type FunnelNodeUpdateOneWithoutIdeaInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutIdeaInput>;
  create?: Maybe<FunnelNodeCreateWithoutIdeaInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FunnelNodeUpdateWithoutIdeaInput>;
  upsert?: Maybe<FunnelNodeUpsertWithoutIdeaInput>;
};

export type FunnelNodeUpdateOneWithoutIdeaSessionInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutIdeaSessionInput>;
  create?: Maybe<FunnelNodeCreateWithoutIdeaSessionInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FunnelNodeUpdateWithoutIdeaSessionInput>;
  upsert?: Maybe<FunnelNodeUpsertWithoutIdeaSessionInput>;
};

export type FunnelNodeUpdateOneWithoutIntegrationInput = {
  connect?: Maybe<FunnelNodeWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelNodeCreateOrConnectWithoutIntegrationInput>;
  create?: Maybe<FunnelNodeCreateWithoutIntegrationInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FunnelNodeUpdateWithoutIntegrationInput>;
  upsert?: Maybe<FunnelNodeUpsertWithoutIntegrationInput>;
};

export type FunnelNodeUpdateWithoutCampaignGroupsInput = {
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeUpdateManyWithoutFromInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutNodesInput>;
  Goal?: Maybe<GoalUpdateManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutFunnelNodeInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutKpiInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  toEdges?: Maybe<FunnelEdgeUpdateManyWithoutToInput>;
};

export type FunnelNodeUpdateWithoutCampaignResultMapInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeUpdateManyWithoutFromInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutNodesInput>;
  Goal?: Maybe<GoalUpdateManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutFunnelNodeInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutKpiInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  toEdges?: Maybe<FunnelEdgeUpdateManyWithoutToInput>;
};

export type FunnelNodeUpdateWithoutCampaignsInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeUpdateManyWithoutFromInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutNodesInput>;
  Goal?: Maybe<GoalUpdateManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutFunnelNodeInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutKpiInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  toEdges?: Maybe<FunnelEdgeUpdateManyWithoutToInput>;
};

export type FunnelNodeUpdateWithoutDataPointValuesInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutKpiInput>;
  fromEdges?: Maybe<FunnelEdgeUpdateManyWithoutFromInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutNodesInput>;
  Goal?: Maybe<GoalUpdateManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutFunnelNodeInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutKpiInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  toEdges?: Maybe<FunnelEdgeUpdateManyWithoutToInput>;
};

export type FunnelNodeUpdateWithoutFromEdgesInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutNodeInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutNodesInput>;
  Goal?: Maybe<GoalUpdateManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutFunnelNodeInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutKpiInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  toEdges?: Maybe<FunnelEdgeUpdateManyWithoutToInput>;
};

export type FunnelNodeUpdateWithoutFunnelInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeUpdateManyWithoutFromInput>;
  Goal?: Maybe<GoalUpdateManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutFunnelNodeInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutKpiInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  toEdges?: Maybe<FunnelEdgeUpdateManyWithoutToInput>;
};

export type FunnelNodeUpdateWithoutGoalDataPointValueInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeUpdateManyWithoutFromInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutNodesInput>;
  Goal?: Maybe<GoalUpdateManyWithoutMetricInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutKpiInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  toEdges?: Maybe<FunnelEdgeUpdateManyWithoutToInput>;
};

export type FunnelNodeUpdateWithoutGoalInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeUpdateManyWithoutFromInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutNodesInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutFunnelNodeInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutKpiInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  toEdges?: Maybe<FunnelEdgeUpdateManyWithoutToInput>;
};

export type FunnelNodeUpdateWithoutIdeaInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeUpdateManyWithoutFromInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutNodesInput>;
  Goal?: Maybe<GoalUpdateManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutFunnelNodeInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutKpiInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  toEdges?: Maybe<FunnelEdgeUpdateManyWithoutToInput>;
};

export type FunnelNodeUpdateWithoutIdeaSessionInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeUpdateManyWithoutFromInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutNodesInput>;
  Goal?: Maybe<GoalUpdateManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutFunnelNodeInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutKpiInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  toEdges?: Maybe<FunnelEdgeUpdateManyWithoutToInput>;
};

export type FunnelNodeUpdateWithoutIntegrationInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeUpdateManyWithoutFromInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutNodesInput>;
  Goal?: Maybe<GoalUpdateManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutFunnelNodeInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutKpiInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  toEdges?: Maybe<FunnelEdgeUpdateManyWithoutToInput>;
};

export type FunnelNodeUpdateWithoutToEdgesInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutKpiInput>;
  campaignResultMap?: Maybe<CampaignResultMapUpdateManyWithoutKpiInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutKpiInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutNodeInput>;
  fromEdges?: Maybe<FunnelEdgeUpdateManyWithoutFromInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutNodesInput>;
  Goal?: Maybe<GoalUpdateManyWithoutMetricInput>;
  GoalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutFunnelNodeInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  Idea?: Maybe<IdeaUpdateManyWithoutKpiInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutKpiInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutFunnelNodeInput>;
  isRevenue?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type FunnelNodeUpdateWithWhereUniqueWithoutFunnelInput = {
  data: FunnelNodeUpdateWithoutFunnelInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeUpsertWithoutCampaignGroupsInput = {
  create: FunnelNodeCreateWithoutCampaignGroupsInput;
  update: FunnelNodeUpdateWithoutCampaignGroupsInput;
};

export type FunnelNodeUpsertWithoutCampaignResultMapInput = {
  create: FunnelNodeCreateWithoutCampaignResultMapInput;
  update: FunnelNodeUpdateWithoutCampaignResultMapInput;
};

export type FunnelNodeUpsertWithoutCampaignsInput = {
  create: FunnelNodeCreateWithoutCampaignsInput;
  update: FunnelNodeUpdateWithoutCampaignsInput;
};

export type FunnelNodeUpsertWithoutDataPointValuesInput = {
  create: FunnelNodeCreateWithoutDataPointValuesInput;
  update: FunnelNodeUpdateWithoutDataPointValuesInput;
};

export type FunnelNodeUpsertWithoutFromEdgesInput = {
  create: FunnelNodeCreateWithoutFromEdgesInput;
  update: FunnelNodeUpdateWithoutFromEdgesInput;
};

export type FunnelNodeUpsertWithoutGoalDataPointValueInput = {
  create: FunnelNodeCreateWithoutGoalDataPointValueInput;
  update: FunnelNodeUpdateWithoutGoalDataPointValueInput;
};

export type FunnelNodeUpsertWithoutGoalInput = {
  create: FunnelNodeCreateWithoutGoalInput;
  update: FunnelNodeUpdateWithoutGoalInput;
};

export type FunnelNodeUpsertWithoutIdeaInput = {
  create: FunnelNodeCreateWithoutIdeaInput;
  update: FunnelNodeUpdateWithoutIdeaInput;
};

export type FunnelNodeUpsertWithoutIdeaSessionInput = {
  create: FunnelNodeCreateWithoutIdeaSessionInput;
  update: FunnelNodeUpdateWithoutIdeaSessionInput;
};

export type FunnelNodeUpsertWithoutIntegrationInput = {
  create: FunnelNodeCreateWithoutIntegrationInput;
  update: FunnelNodeUpdateWithoutIntegrationInput;
};

export type FunnelNodeUpsertWithoutToEdgesInput = {
  create: FunnelNodeCreateWithoutToEdgesInput;
  update: FunnelNodeUpdateWithoutToEdgesInput;
};

export type FunnelNodeUpsertWithWhereUniqueWithoutFunnelInput = {
  create: FunnelNodeCreateWithoutFunnelInput;
  update: FunnelNodeUpdateWithoutFunnelInput;
  where: FunnelNodeWhereUniqueInput;
};

export type FunnelNodeWhereInput = {
  AND?: Maybe<Array<FunnelNodeWhereInput>>;
  campaignGroups?: Maybe<CampaignGroupListRelationFilter>;
  campaignResultMap?: Maybe<CampaignResultMapListRelationFilter>;
  campaigns?: Maybe<CampaignListRelationFilter>;
  dataPointValues?: Maybe<FunnelDataPointValueListRelationFilter>;
  fromEdges?: Maybe<FunnelEdgeListRelationFilter>;
  funnel?: Maybe<FunnelWhereInput>;
  funnelId?: Maybe<StringFilter>;
  Goal?: Maybe<GoalListRelationFilter>;
  GoalDataPointValue?: Maybe<GoalDataPointValueListRelationFilter>;
  id?: Maybe<StringFilter>;
  Idea?: Maybe<IdeaListRelationFilter>;
  IdeaSession?: Maybe<IdeaSessionListRelationFilter>;
  integration?: Maybe<IntegrationListRelationFilter>;
  isRevenue?: Maybe<BoolNullableFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<FunnelNodeWhereInput>>;
  OR?: Maybe<Array<FunnelNodeWhereInput>>;
  order?: Maybe<IntNullableFilter>;
  toEdges?: Maybe<FunnelEdgeListRelationFilter>;
};

export type FunnelNodeWhereUniqueInput = {
  funnelId_name?: Maybe<FunnelNodeFunnelIdNameCompoundUniqueInput>;
  id?: Maybe<Scalars['String']>;
};

export type FunnelOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type FunnelScalarWhereInput = {
  AND?: Maybe<Array<FunnelScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<FunnelScalarWhereInput>>;
  OR?: Maybe<Array<FunnelScalarWhereInput>>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type FunnelUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutFunnelInput>;
  edges?: Maybe<FunnelEdgeUpdateManyWithoutFunnelInput>;
  goals?: Maybe<GoalUpdateManyWithoutFunnelInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  nodes?: Maybe<FunnelNodeUpdateManyWithoutFunnelInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutFunnelsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutFunnelsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FunnelUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FunnelUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<FunnelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<FunnelCreateWithoutOwnerInput>>;
  createMany?: Maybe<FunnelCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<FunnelWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FunnelScalarWhereInput>>;
  disconnect?: Maybe<Array<FunnelWhereUniqueInput>>;
  set?: Maybe<Array<FunnelWhereUniqueInput>>;
  update?: Maybe<Array<FunnelUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<FunnelUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<FunnelUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type FunnelUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<FunnelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FunnelCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<FunnelCreateWithoutTeamInput>>;
  createMany?: Maybe<FunnelCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<FunnelWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FunnelScalarWhereInput>>;
  disconnect?: Maybe<Array<FunnelWhereUniqueInput>>;
  set?: Maybe<Array<FunnelWhereUniqueInput>>;
  update?: Maybe<Array<FunnelUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<FunnelUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<FunnelUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type FunnelUpdateManyWithWhereWithoutOwnerInput = {
  data: FunnelUpdateManyMutationInput;
  where: FunnelScalarWhereInput;
};

export type FunnelUpdateManyWithWhereWithoutTeamInput = {
  data: FunnelUpdateManyMutationInput;
  where: FunnelScalarWhereInput;
};

export type FunnelUpdateOneRequiredWithoutDataPointValuesInput = {
  connect?: Maybe<FunnelWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelCreateOrConnectWithoutDataPointValuesInput>;
  create?: Maybe<FunnelCreateWithoutDataPointValuesInput>;
  update?: Maybe<FunnelUpdateWithoutDataPointValuesInput>;
  upsert?: Maybe<FunnelUpsertWithoutDataPointValuesInput>;
};

export type FunnelUpdateOneRequiredWithoutEdgesInput = {
  connect?: Maybe<FunnelWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelCreateOrConnectWithoutEdgesInput>;
  create?: Maybe<FunnelCreateWithoutEdgesInput>;
  update?: Maybe<FunnelUpdateWithoutEdgesInput>;
  upsert?: Maybe<FunnelUpsertWithoutEdgesInput>;
};

export type FunnelUpdateOneRequiredWithoutGoalsInput = {
  connect?: Maybe<FunnelWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelCreateOrConnectWithoutGoalsInput>;
  create?: Maybe<FunnelCreateWithoutGoalsInput>;
  update?: Maybe<FunnelUpdateWithoutGoalsInput>;
  upsert?: Maybe<FunnelUpsertWithoutGoalsInput>;
};

export type FunnelUpdateOneRequiredWithoutNodesInput = {
  connect?: Maybe<FunnelWhereUniqueInput>;
  connectOrCreate?: Maybe<FunnelCreateOrConnectWithoutNodesInput>;
  create?: Maybe<FunnelCreateWithoutNodesInput>;
  update?: Maybe<FunnelUpdateWithoutNodesInput>;
  upsert?: Maybe<FunnelUpsertWithoutNodesInput>;
};

export type FunnelUpdateWithoutDataPointValuesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  edges?: Maybe<FunnelEdgeUpdateManyWithoutFunnelInput>;
  goals?: Maybe<GoalUpdateManyWithoutFunnelInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  nodes?: Maybe<FunnelNodeUpdateManyWithoutFunnelInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutFunnelsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutFunnelsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FunnelUpdateWithoutEdgesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutFunnelInput>;
  goals?: Maybe<GoalUpdateManyWithoutFunnelInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  nodes?: Maybe<FunnelNodeUpdateManyWithoutFunnelInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutFunnelsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutFunnelsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FunnelUpdateWithoutGoalsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutFunnelInput>;
  edges?: Maybe<FunnelEdgeUpdateManyWithoutFunnelInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  nodes?: Maybe<FunnelNodeUpdateManyWithoutFunnelInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutFunnelsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutFunnelsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FunnelUpdateWithoutNodesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutFunnelInput>;
  edges?: Maybe<FunnelEdgeUpdateManyWithoutFunnelInput>;
  goals?: Maybe<GoalUpdateManyWithoutFunnelInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutFunnelsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutFunnelsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FunnelUpdateWithoutOwnerInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutFunnelInput>;
  edges?: Maybe<FunnelEdgeUpdateManyWithoutFunnelInput>;
  goals?: Maybe<GoalUpdateManyWithoutFunnelInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  nodes?: Maybe<FunnelNodeUpdateManyWithoutFunnelInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutFunnelsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FunnelUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  dataPointValues?: Maybe<FunnelDataPointValueUpdateManyWithoutFunnelInput>;
  edges?: Maybe<FunnelEdgeUpdateManyWithoutFunnelInput>;
  goals?: Maybe<GoalUpdateManyWithoutFunnelInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  nodes?: Maybe<FunnelNodeUpdateManyWithoutFunnelInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutFunnelsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FunnelUpdateWithWhereUniqueWithoutOwnerInput = {
  data: FunnelUpdateWithoutOwnerInput;
  where: FunnelWhereUniqueInput;
};

export type FunnelUpdateWithWhereUniqueWithoutTeamInput = {
  data: FunnelUpdateWithoutTeamInput;
  where: FunnelWhereUniqueInput;
};

export type FunnelUpsertWithoutDataPointValuesInput = {
  create: FunnelCreateWithoutDataPointValuesInput;
  update: FunnelUpdateWithoutDataPointValuesInput;
};

export type FunnelUpsertWithoutEdgesInput = {
  create: FunnelCreateWithoutEdgesInput;
  update: FunnelUpdateWithoutEdgesInput;
};

export type FunnelUpsertWithoutGoalsInput = {
  create: FunnelCreateWithoutGoalsInput;
  update: FunnelUpdateWithoutGoalsInput;
};

export type FunnelUpsertWithoutNodesInput = {
  create: FunnelCreateWithoutNodesInput;
  update: FunnelUpdateWithoutNodesInput;
};

export type FunnelUpsertWithWhereUniqueWithoutOwnerInput = {
  create: FunnelCreateWithoutOwnerInput;
  update: FunnelUpdateWithoutOwnerInput;
  where: FunnelWhereUniqueInput;
};

export type FunnelUpsertWithWhereUniqueWithoutTeamInput = {
  create: FunnelCreateWithoutTeamInput;
  update: FunnelUpdateWithoutTeamInput;
  where: FunnelWhereUniqueInput;
};

export type FunnelValues = {
  __typename?: 'FunnelValues';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type FunnelWhereInput = {
  AND?: Maybe<Array<FunnelWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  dataPointValues?: Maybe<FunnelDataPointValueListRelationFilter>;
  edges?: Maybe<FunnelEdgeListRelationFilter>;
  goals?: Maybe<GoalListRelationFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  nodes?: Maybe<FunnelNodeListRelationFilter>;
  NOT?: Maybe<Array<FunnelWhereInput>>;
  OR?: Maybe<Array<FunnelWhereInput>>;
  owner?: Maybe<UserWhereInput>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type FunnelWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Goal = {
  __typename?: 'Goal';
  data: Array<GoalDataPoint>;
  funnelId: Scalars['String'];
  id: Scalars['String'];
  metric: FunnelNode;
  owner: User;
  strategyDescription?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['DateTime']>;
  team: Team;
  updatedAt: Scalars['DateTime'];
  value: Scalars['Int'];
};


export type GoalDataArgs = {
  cursor?: Maybe<GoalDataPointWhereUniqueInput>;
  orderBy?: Maybe<Array<GoalDataPointOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GoalDataPointWhereInput>;
};

export type GoalCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<GoalDataPointCreateNestedManyWithoutGoalInput>;
  funnel: FunnelCreateNestedOneWithoutGoalsInput;
  id?: Maybe<Scalars['String']>;
  metric: FunnelNodeCreateNestedOneWithoutGoalInput;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutGoalsInput;
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutGoalInput>;
  start?: Maybe<Scalars['DateTime']>;
  strategyDescription?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['DateTime']>;
  team: TeamCreateNestedOneWithoutGoalsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Int'];
};

export type GoalCreateManyFunnelInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelNodeId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  strategyDescription?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['DateTime']>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  value: Scalars['Int'];
};

export type GoalCreateManyFunnelInputEnvelope = {
  data?: Maybe<Array<GoalCreateManyFunnelInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GoalCreateManyMetricInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  strategyDescription?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['DateTime']>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  value: Scalars['Int'];
};

export type GoalCreateManyMetricInputEnvelope = {
  data?: Maybe<Array<GoalCreateManyMetricInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GoalCreateManyOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelId: Scalars['String'];
  funnelNodeId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  strategyDescription?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['DateTime']>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Int'];
};

export type GoalCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<GoalCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GoalCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelId: Scalars['String'];
  funnelNodeId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  strategyDescription?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  value: Scalars['Int'];
};

export type GoalCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<GoalCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GoalCreateNestedManyWithoutFunnelInput = {
  connect?: Maybe<Array<GoalWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalCreateOrConnectWithoutFunnelInput>>;
  create?: Maybe<Array<GoalCreateWithoutFunnelInput>>;
  createMany?: Maybe<GoalCreateManyFunnelInputEnvelope>;
};

export type GoalCreateNestedManyWithoutMetricInput = {
  connect?: Maybe<Array<GoalWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalCreateOrConnectWithoutMetricInput>>;
  create?: Maybe<Array<GoalCreateWithoutMetricInput>>;
  createMany?: Maybe<GoalCreateManyMetricInputEnvelope>;
};

export type GoalCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<GoalWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<GoalCreateWithoutOwnerInput>>;
  createMany?: Maybe<GoalCreateManyOwnerInputEnvelope>;
};

export type GoalCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<GoalWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<GoalCreateWithoutTeamInput>>;
  createMany?: Maybe<GoalCreateManyTeamInputEnvelope>;
};

export type GoalCreateNestedOneWithoutDataInput = {
  connect?: Maybe<GoalWhereUniqueInput>;
  connectOrCreate?: Maybe<GoalCreateOrConnectWithoutDataInput>;
  create?: Maybe<GoalCreateWithoutDataInput>;
};

export type GoalCreateNestedOneWithoutProgressDataPointInput = {
  connect?: Maybe<GoalWhereUniqueInput>;
  connectOrCreate?: Maybe<GoalCreateOrConnectWithoutProgressDataPointInput>;
  create?: Maybe<GoalCreateWithoutProgressDataPointInput>;
};

export type GoalCreateOrConnectWithoutDataInput = {
  create: GoalCreateWithoutDataInput;
  where: GoalWhereUniqueInput;
};

export type GoalCreateOrConnectWithoutFunnelInput = {
  create: GoalCreateWithoutFunnelInput;
  where: GoalWhereUniqueInput;
};

export type GoalCreateOrConnectWithoutMetricInput = {
  create: GoalCreateWithoutMetricInput;
  where: GoalWhereUniqueInput;
};

export type GoalCreateOrConnectWithoutOwnerInput = {
  create: GoalCreateWithoutOwnerInput;
  where: GoalWhereUniqueInput;
};

export type GoalCreateOrConnectWithoutProgressDataPointInput = {
  create: GoalCreateWithoutProgressDataPointInput;
  where: GoalWhereUniqueInput;
};

export type GoalCreateOrConnectWithoutTeamInput = {
  create: GoalCreateWithoutTeamInput;
  where: GoalWhereUniqueInput;
};

export type GoalCreateWithoutDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  funnel: FunnelCreateNestedOneWithoutGoalsInput;
  id?: Maybe<Scalars['String']>;
  metric: FunnelNodeCreateNestedOneWithoutGoalInput;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutGoalsInput;
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutGoalInput>;
  start?: Maybe<Scalars['DateTime']>;
  strategyDescription?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['DateTime']>;
  team: TeamCreateNestedOneWithoutGoalsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Int'];
};

export type GoalCreateWithoutFunnelInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<GoalDataPointCreateNestedManyWithoutGoalInput>;
  id?: Maybe<Scalars['String']>;
  metric: FunnelNodeCreateNestedOneWithoutGoalInput;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutGoalsInput;
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutGoalInput>;
  start?: Maybe<Scalars['DateTime']>;
  strategyDescription?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['DateTime']>;
  team: TeamCreateNestedOneWithoutGoalsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Int'];
};

export type GoalCreateWithoutMetricInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<GoalDataPointCreateNestedManyWithoutGoalInput>;
  funnel: FunnelCreateNestedOneWithoutGoalsInput;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutGoalsInput;
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutGoalInput>;
  start?: Maybe<Scalars['DateTime']>;
  strategyDescription?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['DateTime']>;
  team: TeamCreateNestedOneWithoutGoalsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Int'];
};

export type GoalCreateWithoutOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<GoalDataPointCreateNestedManyWithoutGoalInput>;
  funnel: FunnelCreateNestedOneWithoutGoalsInput;
  id?: Maybe<Scalars['String']>;
  metric: FunnelNodeCreateNestedOneWithoutGoalInput;
  name?: Maybe<Scalars['String']>;
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutGoalInput>;
  start?: Maybe<Scalars['DateTime']>;
  strategyDescription?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['DateTime']>;
  team: TeamCreateNestedOneWithoutGoalsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Int'];
};

export type GoalCreateWithoutProgressDataPointInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<GoalDataPointCreateNestedManyWithoutGoalInput>;
  funnel: FunnelCreateNestedOneWithoutGoalsInput;
  id?: Maybe<Scalars['String']>;
  metric: FunnelNodeCreateNestedOneWithoutGoalInput;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutGoalsInput;
  start?: Maybe<Scalars['DateTime']>;
  strategyDescription?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['DateTime']>;
  team: TeamCreateNestedOneWithoutGoalsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Int'];
};

export type GoalCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<GoalDataPointCreateNestedManyWithoutGoalInput>;
  funnel: FunnelCreateNestedOneWithoutGoalsInput;
  id?: Maybe<Scalars['String']>;
  metric: FunnelNodeCreateNestedOneWithoutGoalInput;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutGoalsInput;
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutGoalInput>;
  start?: Maybe<Scalars['DateTime']>;
  strategyDescription?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Int'];
};

export type GoalDataPoint = {
  __typename?: 'GoalDataPoint';
  data: Array<GoalDataPointValue>;
  goalId: Scalars['String'];
  id: Scalars['String'];
  month: Scalars['Int'];
  type: GoalDataType;
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};


export type GoalDataPointDataArgs = {
  cursor?: Maybe<GoalDataPointValueWhereUniqueInput>;
  orderBy?: Maybe<Array<GoalDataPointValueOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GoalDataPointValueWhereInput>;
};

export type GoalDataPointCreateManyGoalInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  type: GoalDataType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  year: Scalars['Int'];
};

export type GoalDataPointCreateManyGoalInputEnvelope = {
  data?: Maybe<Array<GoalDataPointCreateManyGoalInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GoalDataPointCreateManyOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  goalId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  type: GoalDataType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type GoalDataPointCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<GoalDataPointCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GoalDataPointCreateNestedManyWithoutGoalInput = {
  connect?: Maybe<Array<GoalDataPointWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalDataPointCreateOrConnectWithoutGoalInput>>;
  create?: Maybe<Array<GoalDataPointCreateWithoutGoalInput>>;
  createMany?: Maybe<GoalDataPointCreateManyGoalInputEnvelope>;
};

export type GoalDataPointCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<GoalDataPointWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalDataPointCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<GoalDataPointCreateWithoutOwnerInput>>;
  createMany?: Maybe<GoalDataPointCreateManyOwnerInputEnvelope>;
};

export type GoalDataPointCreateNestedOneWithoutDataInput = {
  connect?: Maybe<GoalDataPointWhereUniqueInput>;
  connectOrCreate?: Maybe<GoalDataPointCreateOrConnectWithoutDataInput>;
  create?: Maybe<GoalDataPointCreateWithoutDataInput>;
};

export type GoalDataPointCreateOrConnectWithoutDataInput = {
  create: GoalDataPointCreateWithoutDataInput;
  where: GoalDataPointWhereUniqueInput;
};

export type GoalDataPointCreateOrConnectWithoutGoalInput = {
  create: GoalDataPointCreateWithoutGoalInput;
  where: GoalDataPointWhereUniqueInput;
};

export type GoalDataPointCreateOrConnectWithoutOwnerInput = {
  create: GoalDataPointCreateWithoutOwnerInput;
  where: GoalDataPointWhereUniqueInput;
};

export type GoalDataPointCreateWithoutDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  goal: GoalCreateNestedOneWithoutDataInput;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  owner: UserCreateNestedOneWithoutGoalDataPointInput;
  type: GoalDataType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type GoalDataPointCreateWithoutGoalInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<GoalDataPointValueCreateNestedManyWithoutDataPointInput>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  owner: UserCreateNestedOneWithoutGoalDataPointInput;
  type: GoalDataType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type GoalDataPointCreateWithoutOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<GoalDataPointValueCreateNestedManyWithoutDataPointInput>;
  goal: GoalCreateNestedOneWithoutDataInput;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  type: GoalDataType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type GoalDataPointGoalIdMonthYearCompoundUniqueInput = {
  goalId: Scalars['String'];
  month: Scalars['Int'];
  year: Scalars['Int'];
};

export type GoalDataPointListRelationFilter = {
  every?: Maybe<GoalDataPointWhereInput>;
  none?: Maybe<GoalDataPointWhereInput>;
  some?: Maybe<GoalDataPointWhereInput>;
};

export type GoalDataPointOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  goalId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  month?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type GoalDataPointScalarWhereInput = {
  AND?: Maybe<Array<GoalDataPointScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  goalId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  month?: Maybe<IntFilter>;
  NOT?: Maybe<Array<GoalDataPointScalarWhereInput>>;
  OR?: Maybe<Array<GoalDataPointScalarWhereInput>>;
  type?: Maybe<EnumGoalDataTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  year?: Maybe<IntFilter>;
};

export type GoalDataPointUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  type?: Maybe<EnumGoalDataTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type GoalDataPointUpdateManyWithoutGoalInput = {
  connect?: Maybe<Array<GoalDataPointWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalDataPointCreateOrConnectWithoutGoalInput>>;
  create?: Maybe<Array<GoalDataPointCreateWithoutGoalInput>>;
  createMany?: Maybe<GoalDataPointCreateManyGoalInputEnvelope>;
  delete?: Maybe<Array<GoalDataPointWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GoalDataPointScalarWhereInput>>;
  disconnect?: Maybe<Array<GoalDataPointWhereUniqueInput>>;
  set?: Maybe<Array<GoalDataPointWhereUniqueInput>>;
  update?: Maybe<Array<GoalDataPointUpdateWithWhereUniqueWithoutGoalInput>>;
  updateMany?: Maybe<Array<GoalDataPointUpdateManyWithWhereWithoutGoalInput>>;
  upsert?: Maybe<Array<GoalDataPointUpsertWithWhereUniqueWithoutGoalInput>>;
};

export type GoalDataPointUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<GoalDataPointWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalDataPointCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<GoalDataPointCreateWithoutOwnerInput>>;
  createMany?: Maybe<GoalDataPointCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<GoalDataPointWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GoalDataPointScalarWhereInput>>;
  disconnect?: Maybe<Array<GoalDataPointWhereUniqueInput>>;
  set?: Maybe<Array<GoalDataPointWhereUniqueInput>>;
  update?: Maybe<Array<GoalDataPointUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<GoalDataPointUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<GoalDataPointUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type GoalDataPointUpdateManyWithWhereWithoutGoalInput = {
  data: GoalDataPointUpdateManyMutationInput;
  where: GoalDataPointScalarWhereInput;
};

export type GoalDataPointUpdateManyWithWhereWithoutOwnerInput = {
  data: GoalDataPointUpdateManyMutationInput;
  where: GoalDataPointScalarWhereInput;
};

export type GoalDataPointUpdateOneWithoutDataInput = {
  connect?: Maybe<GoalDataPointWhereUniqueInput>;
  connectOrCreate?: Maybe<GoalDataPointCreateOrConnectWithoutDataInput>;
  create?: Maybe<GoalDataPointCreateWithoutDataInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<GoalDataPointUpdateWithoutDataInput>;
  upsert?: Maybe<GoalDataPointUpsertWithoutDataInput>;
};

export type GoalDataPointUpdateWithoutDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  goal?: Maybe<GoalUpdateOneRequiredWithoutDataInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutGoalDataPointInput>;
  type?: Maybe<EnumGoalDataTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type GoalDataPointUpdateWithoutGoalInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  data?: Maybe<GoalDataPointValueUpdateManyWithoutDataPointInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutGoalDataPointInput>;
  type?: Maybe<EnumGoalDataTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type GoalDataPointUpdateWithoutOwnerInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  data?: Maybe<GoalDataPointValueUpdateManyWithoutDataPointInput>;
  goal?: Maybe<GoalUpdateOneRequiredWithoutDataInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  type?: Maybe<EnumGoalDataTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type GoalDataPointUpdateWithWhereUniqueWithoutGoalInput = {
  data: GoalDataPointUpdateWithoutGoalInput;
  where: GoalDataPointWhereUniqueInput;
};

export type GoalDataPointUpdateWithWhereUniqueWithoutOwnerInput = {
  data: GoalDataPointUpdateWithoutOwnerInput;
  where: GoalDataPointWhereUniqueInput;
};

export type GoalDataPointUpsertWithoutDataInput = {
  create: GoalDataPointCreateWithoutDataInput;
  update: GoalDataPointUpdateWithoutDataInput;
};

export type GoalDataPointUpsertWithWhereUniqueWithoutGoalInput = {
  create: GoalDataPointCreateWithoutGoalInput;
  update: GoalDataPointUpdateWithoutGoalInput;
  where: GoalDataPointWhereUniqueInput;
};

export type GoalDataPointUpsertWithWhereUniqueWithoutOwnerInput = {
  create: GoalDataPointCreateWithoutOwnerInput;
  update: GoalDataPointUpdateWithoutOwnerInput;
  where: GoalDataPointWhereUniqueInput;
};

export type GoalDataPointValue = {
  __typename?: 'GoalDataPointValue';
  /** The conversion rate against the above node in the funnel */
  conversionRate?: Maybe<Scalars['Float']>;
  dataPointId?: Maybe<Scalars['String']>;
  funnelNode: FunnelNode;
  funnelNodeId: Scalars['String'];
  id: Scalars['String'];
  integration?: Maybe<Integration>;
  provider: GoalDataPointValueProvider;
  statement?: Maybe<StatementTracking>;
  /** The current state of progress against this statement */
  statementProgress?: Maybe<Scalars['Float']>;
  value: Scalars['Float'];
};

export type GoalDataPointValueCreateManyDataPointInput = {
  funnelNodeId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  integrationId?: Maybe<Scalars['String']>;
  progressDataPointId?: Maybe<Scalars['String']>;
  provider?: Maybe<GoalDataPointValueProvider>;
  statement?: Maybe<StatementTracking>;
  value: Scalars['Float'];
};

export type GoalDataPointValueCreateManyDataPointInputEnvelope = {
  data?: Maybe<Array<GoalDataPointValueCreateManyDataPointInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GoalDataPointValueCreateManyFunnelNodeInput = {
  dataPointId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  integrationId?: Maybe<Scalars['String']>;
  progressDataPointId?: Maybe<Scalars['String']>;
  provider?: Maybe<GoalDataPointValueProvider>;
  statement?: Maybe<StatementTracking>;
  value: Scalars['Float'];
};

export type GoalDataPointValueCreateManyFunnelNodeInputEnvelope = {
  data?: Maybe<Array<GoalDataPointValueCreateManyFunnelNodeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GoalDataPointValueCreateManyIntegrationInput = {
  dataPointId?: Maybe<Scalars['String']>;
  funnelNodeId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  progressDataPointId?: Maybe<Scalars['String']>;
  provider?: Maybe<GoalDataPointValueProvider>;
  statement?: Maybe<StatementTracking>;
  value: Scalars['Float'];
};

export type GoalDataPointValueCreateManyIntegrationInputEnvelope = {
  data?: Maybe<Array<GoalDataPointValueCreateManyIntegrationInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GoalDataPointValueCreateManyProgressDataPointInput = {
  dataPointId?: Maybe<Scalars['String']>;
  funnelNodeId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  integrationId?: Maybe<Scalars['String']>;
  provider?: Maybe<GoalDataPointValueProvider>;
  statement?: Maybe<StatementTracking>;
  value: Scalars['Float'];
};

export type GoalDataPointValueCreateManyProgressDataPointInputEnvelope = {
  data?: Maybe<Array<GoalDataPointValueCreateManyProgressDataPointInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type GoalDataPointValueCreateNestedManyWithoutDataPointInput = {
  connect?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalDataPointValueCreateOrConnectWithoutDataPointInput>>;
  create?: Maybe<Array<GoalDataPointValueCreateWithoutDataPointInput>>;
  createMany?: Maybe<GoalDataPointValueCreateManyDataPointInputEnvelope>;
};

export type GoalDataPointValueCreateNestedManyWithoutFunnelNodeInput = {
  connect?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalDataPointValueCreateOrConnectWithoutFunnelNodeInput>>;
  create?: Maybe<Array<GoalDataPointValueCreateWithoutFunnelNodeInput>>;
  createMany?: Maybe<GoalDataPointValueCreateManyFunnelNodeInputEnvelope>;
};

export type GoalDataPointValueCreateNestedManyWithoutIntegrationInput = {
  connect?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalDataPointValueCreateOrConnectWithoutIntegrationInput>>;
  create?: Maybe<Array<GoalDataPointValueCreateWithoutIntegrationInput>>;
  createMany?: Maybe<GoalDataPointValueCreateManyIntegrationInputEnvelope>;
};

export type GoalDataPointValueCreateNestedManyWithoutProgressDataPointInput = {
  connect?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalDataPointValueCreateOrConnectWithoutProgressDataPointInput>>;
  create?: Maybe<Array<GoalDataPointValueCreateWithoutProgressDataPointInput>>;
  createMany?: Maybe<GoalDataPointValueCreateManyProgressDataPointInputEnvelope>;
};

export type GoalDataPointValueCreateOrConnectWithoutDataPointInput = {
  create: GoalDataPointValueCreateWithoutDataPointInput;
  where: GoalDataPointValueWhereUniqueInput;
};

export type GoalDataPointValueCreateOrConnectWithoutFunnelNodeInput = {
  create: GoalDataPointValueCreateWithoutFunnelNodeInput;
  where: GoalDataPointValueWhereUniqueInput;
};

export type GoalDataPointValueCreateOrConnectWithoutIntegrationInput = {
  create: GoalDataPointValueCreateWithoutIntegrationInput;
  where: GoalDataPointValueWhereUniqueInput;
};

export type GoalDataPointValueCreateOrConnectWithoutProgressDataPointInput = {
  create: GoalDataPointValueCreateWithoutProgressDataPointInput;
  where: GoalDataPointValueWhereUniqueInput;
};

export type GoalDataPointValueCreateWithoutDataPointInput = {
  funnelNode: FunnelNodeCreateNestedOneWithoutGoalDataPointValueInput;
  id?: Maybe<Scalars['String']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutGoalDataPointValueInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedOneWithoutGoalDataPointValueInput>;
  provider?: Maybe<GoalDataPointValueProvider>;
  statement?: Maybe<StatementTracking>;
  value: Scalars['Float'];
};

export type GoalDataPointValueCreateWithoutFunnelNodeInput = {
  dataPoint?: Maybe<GoalDataPointCreateNestedOneWithoutDataInput>;
  id?: Maybe<Scalars['String']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutGoalDataPointValueInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedOneWithoutGoalDataPointValueInput>;
  provider?: Maybe<GoalDataPointValueProvider>;
  statement?: Maybe<StatementTracking>;
  value: Scalars['Float'];
};

export type GoalDataPointValueCreateWithoutIntegrationInput = {
  dataPoint?: Maybe<GoalDataPointCreateNestedOneWithoutDataInput>;
  funnelNode: FunnelNodeCreateNestedOneWithoutGoalDataPointValueInput;
  id?: Maybe<Scalars['String']>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedOneWithoutGoalDataPointValueInput>;
  provider?: Maybe<GoalDataPointValueProvider>;
  statement?: Maybe<StatementTracking>;
  value: Scalars['Float'];
};

export type GoalDataPointValueCreateWithoutProgressDataPointInput = {
  dataPoint?: Maybe<GoalDataPointCreateNestedOneWithoutDataInput>;
  funnelNode: FunnelNodeCreateNestedOneWithoutGoalDataPointValueInput;
  id?: Maybe<Scalars['String']>;
  integration?: Maybe<IntegrationCreateNestedOneWithoutGoalDataPointValueInput>;
  provider?: Maybe<GoalDataPointValueProvider>;
  statement?: Maybe<StatementTracking>;
  value: Scalars['Float'];
};

export type GoalDataPointValueDataPointIdFunnelNodeIdCompoundUniqueInput = {
  dataPointId: Scalars['String'];
  funnelNodeId: Scalars['String'];
};

export type GoalDataPointValueListRelationFilter = {
  every?: Maybe<GoalDataPointValueWhereInput>;
  none?: Maybe<GoalDataPointValueWhereInput>;
  some?: Maybe<GoalDataPointValueWhereInput>;
};

export type GoalDataPointValueOrderByInput = {
  dataPointId?: Maybe<SortOrder>;
  funnelNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  integrationId?: Maybe<SortOrder>;
  progressDataPointId?: Maybe<SortOrder>;
  provider?: Maybe<SortOrder>;
  statement?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
};

export enum GoalDataPointValueProvider {
  INTEGRATION = 'INTEGRATION',
  MANUAL = 'MANUAL'
}

export type GoalDataPointValueScalarWhereInput = {
  AND?: Maybe<Array<GoalDataPointValueScalarWhereInput>>;
  dataPointId?: Maybe<StringNullableFilter>;
  funnelNodeId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  integrationId?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<GoalDataPointValueScalarWhereInput>>;
  OR?: Maybe<Array<GoalDataPointValueScalarWhereInput>>;
  progressDataPointId?: Maybe<StringNullableFilter>;
  provider?: Maybe<EnumGoalDataPointValueProviderFilter>;
  statement?: Maybe<EnumStatementTrackingNullableFilter>;
  value?: Maybe<FloatFilter>;
};

export type GoalDataPointValueUpdateInput = {
  dataPoint?: Maybe<GoalDataPointUpdateOneWithoutDataInput>;
  funnelNode?: Maybe<FunnelNodeUpdateOneRequiredWithoutGoalDataPointValueInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutGoalDataPointValueInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutGoalDataPointValueInput>;
  provider?: Maybe<EnumGoalDataPointValueProviderFieldUpdateOperationsInput>;
  statement?: Maybe<NullableEnumStatementTrackingFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type GoalDataPointValueUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  provider?: Maybe<EnumGoalDataPointValueProviderFieldUpdateOperationsInput>;
  statement?: Maybe<NullableEnumStatementTrackingFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type GoalDataPointValueUpdateManyWithoutDataPointInput = {
  connect?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalDataPointValueCreateOrConnectWithoutDataPointInput>>;
  create?: Maybe<Array<GoalDataPointValueCreateWithoutDataPointInput>>;
  createMany?: Maybe<GoalDataPointValueCreateManyDataPointInputEnvelope>;
  delete?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GoalDataPointValueScalarWhereInput>>;
  disconnect?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  set?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  update?: Maybe<Array<GoalDataPointValueUpdateWithWhereUniqueWithoutDataPointInput>>;
  updateMany?: Maybe<Array<GoalDataPointValueUpdateManyWithWhereWithoutDataPointInput>>;
  upsert?: Maybe<Array<GoalDataPointValueUpsertWithWhereUniqueWithoutDataPointInput>>;
};

export type GoalDataPointValueUpdateManyWithoutFunnelNodeInput = {
  connect?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalDataPointValueCreateOrConnectWithoutFunnelNodeInput>>;
  create?: Maybe<Array<GoalDataPointValueCreateWithoutFunnelNodeInput>>;
  createMany?: Maybe<GoalDataPointValueCreateManyFunnelNodeInputEnvelope>;
  delete?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GoalDataPointValueScalarWhereInput>>;
  disconnect?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  set?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  update?: Maybe<Array<GoalDataPointValueUpdateWithWhereUniqueWithoutFunnelNodeInput>>;
  updateMany?: Maybe<Array<GoalDataPointValueUpdateManyWithWhereWithoutFunnelNodeInput>>;
  upsert?: Maybe<Array<GoalDataPointValueUpsertWithWhereUniqueWithoutFunnelNodeInput>>;
};

export type GoalDataPointValueUpdateManyWithoutIntegrationInput = {
  connect?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalDataPointValueCreateOrConnectWithoutIntegrationInput>>;
  create?: Maybe<Array<GoalDataPointValueCreateWithoutIntegrationInput>>;
  createMany?: Maybe<GoalDataPointValueCreateManyIntegrationInputEnvelope>;
  delete?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GoalDataPointValueScalarWhereInput>>;
  disconnect?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  set?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  update?: Maybe<Array<GoalDataPointValueUpdateWithWhereUniqueWithoutIntegrationInput>>;
  updateMany?: Maybe<Array<GoalDataPointValueUpdateManyWithWhereWithoutIntegrationInput>>;
  upsert?: Maybe<Array<GoalDataPointValueUpsertWithWhereUniqueWithoutIntegrationInput>>;
};

export type GoalDataPointValueUpdateManyWithoutProgressDataPointInput = {
  connect?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalDataPointValueCreateOrConnectWithoutProgressDataPointInput>>;
  create?: Maybe<Array<GoalDataPointValueCreateWithoutProgressDataPointInput>>;
  createMany?: Maybe<GoalDataPointValueCreateManyProgressDataPointInputEnvelope>;
  delete?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GoalDataPointValueScalarWhereInput>>;
  disconnect?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  set?: Maybe<Array<GoalDataPointValueWhereUniqueInput>>;
  update?: Maybe<Array<GoalDataPointValueUpdateWithWhereUniqueWithoutProgressDataPointInput>>;
  updateMany?: Maybe<Array<GoalDataPointValueUpdateManyWithWhereWithoutProgressDataPointInput>>;
  upsert?: Maybe<Array<GoalDataPointValueUpsertWithWhereUniqueWithoutProgressDataPointInput>>;
};

export type GoalDataPointValueUpdateManyWithWhereWithoutDataPointInput = {
  data: GoalDataPointValueUpdateManyMutationInput;
  where: GoalDataPointValueScalarWhereInput;
};

export type GoalDataPointValueUpdateManyWithWhereWithoutFunnelNodeInput = {
  data: GoalDataPointValueUpdateManyMutationInput;
  where: GoalDataPointValueScalarWhereInput;
};

export type GoalDataPointValueUpdateManyWithWhereWithoutIntegrationInput = {
  data: GoalDataPointValueUpdateManyMutationInput;
  where: GoalDataPointValueScalarWhereInput;
};

export type GoalDataPointValueUpdateManyWithWhereWithoutProgressDataPointInput = {
  data: GoalDataPointValueUpdateManyMutationInput;
  where: GoalDataPointValueScalarWhereInput;
};

export type GoalDataPointValueUpdateWithoutDataPointInput = {
  funnelNode?: Maybe<FunnelNodeUpdateOneRequiredWithoutGoalDataPointValueInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutGoalDataPointValueInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutGoalDataPointValueInput>;
  provider?: Maybe<EnumGoalDataPointValueProviderFieldUpdateOperationsInput>;
  statement?: Maybe<NullableEnumStatementTrackingFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type GoalDataPointValueUpdateWithoutFunnelNodeInput = {
  dataPoint?: Maybe<GoalDataPointUpdateOneWithoutDataInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutGoalDataPointValueInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutGoalDataPointValueInput>;
  provider?: Maybe<EnumGoalDataPointValueProviderFieldUpdateOperationsInput>;
  statement?: Maybe<NullableEnumStatementTrackingFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type GoalDataPointValueUpdateWithoutIntegrationInput = {
  dataPoint?: Maybe<GoalDataPointUpdateOneWithoutDataInput>;
  funnelNode?: Maybe<FunnelNodeUpdateOneRequiredWithoutGoalDataPointValueInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutGoalDataPointValueInput>;
  provider?: Maybe<EnumGoalDataPointValueProviderFieldUpdateOperationsInput>;
  statement?: Maybe<NullableEnumStatementTrackingFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type GoalDataPointValueUpdateWithoutProgressDataPointInput = {
  dataPoint?: Maybe<GoalDataPointUpdateOneWithoutDataInput>;
  funnelNode?: Maybe<FunnelNodeUpdateOneRequiredWithoutGoalDataPointValueInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateOneWithoutGoalDataPointValueInput>;
  provider?: Maybe<EnumGoalDataPointValueProviderFieldUpdateOperationsInput>;
  statement?: Maybe<NullableEnumStatementTrackingFieldUpdateOperationsInput>;
  value?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type GoalDataPointValueUpdateWithWhereUniqueWithoutDataPointInput = {
  data: GoalDataPointValueUpdateWithoutDataPointInput;
  where: GoalDataPointValueWhereUniqueInput;
};

export type GoalDataPointValueUpdateWithWhereUniqueWithoutFunnelNodeInput = {
  data: GoalDataPointValueUpdateWithoutFunnelNodeInput;
  where: GoalDataPointValueWhereUniqueInput;
};

export type GoalDataPointValueUpdateWithWhereUniqueWithoutIntegrationInput = {
  data: GoalDataPointValueUpdateWithoutIntegrationInput;
  where: GoalDataPointValueWhereUniqueInput;
};

export type GoalDataPointValueUpdateWithWhereUniqueWithoutProgressDataPointInput = {
  data: GoalDataPointValueUpdateWithoutProgressDataPointInput;
  where: GoalDataPointValueWhereUniqueInput;
};

export type GoalDataPointValueUpsertWithWhereUniqueWithoutDataPointInput = {
  create: GoalDataPointValueCreateWithoutDataPointInput;
  update: GoalDataPointValueUpdateWithoutDataPointInput;
  where: GoalDataPointValueWhereUniqueInput;
};

export type GoalDataPointValueUpsertWithWhereUniqueWithoutFunnelNodeInput = {
  create: GoalDataPointValueCreateWithoutFunnelNodeInput;
  update: GoalDataPointValueUpdateWithoutFunnelNodeInput;
  where: GoalDataPointValueWhereUniqueInput;
};

export type GoalDataPointValueUpsertWithWhereUniqueWithoutIntegrationInput = {
  create: GoalDataPointValueCreateWithoutIntegrationInput;
  update: GoalDataPointValueUpdateWithoutIntegrationInput;
  where: GoalDataPointValueWhereUniqueInput;
};

export type GoalDataPointValueUpsertWithWhereUniqueWithoutProgressDataPointInput = {
  create: GoalDataPointValueCreateWithoutProgressDataPointInput;
  update: GoalDataPointValueUpdateWithoutProgressDataPointInput;
  where: GoalDataPointValueWhereUniqueInput;
};

export type GoalDataPointValueWhereInput = {
  AND?: Maybe<Array<GoalDataPointValueWhereInput>>;
  dataPoint?: Maybe<GoalDataPointWhereInput>;
  dataPointId?: Maybe<StringNullableFilter>;
  funnelNode?: Maybe<FunnelNodeWhereInput>;
  funnelNodeId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  integration?: Maybe<IntegrationWhereInput>;
  integrationId?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<GoalDataPointValueWhereInput>>;
  OR?: Maybe<Array<GoalDataPointValueWhereInput>>;
  ProgressDataPoint?: Maybe<ProgressDataPointWhereInput>;
  progressDataPointId?: Maybe<StringNullableFilter>;
  provider?: Maybe<EnumGoalDataPointValueProviderFilter>;
  statement?: Maybe<EnumStatementTrackingNullableFilter>;
  value?: Maybe<FloatFilter>;
};

export type GoalDataPointValueWhereUniqueInput = {
  dataPointId_funnelNodeId?: Maybe<GoalDataPointValueDataPointIdFunnelNodeIdCompoundUniqueInput>;
  id?: Maybe<Scalars['String']>;
};

export type GoalDataPointWhereInput = {
  AND?: Maybe<Array<GoalDataPointWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  data?: Maybe<GoalDataPointValueListRelationFilter>;
  goal?: Maybe<GoalWhereInput>;
  goalId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  month?: Maybe<IntFilter>;
  NOT?: Maybe<Array<GoalDataPointWhereInput>>;
  OR?: Maybe<Array<GoalDataPointWhereInput>>;
  owner?: Maybe<UserWhereInput>;
  type?: Maybe<EnumGoalDataTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  year?: Maybe<IntFilter>;
};

export type GoalDataPointWhereUniqueInput = {
  goalId_month_year?: Maybe<GoalDataPointGoalIdMonthYearCompoundUniqueInput>;
  id?: Maybe<Scalars['String']>;
};

export enum GoalDataType {
  INPUT = 'INPUT',
  MILESTONE = 'MILESTONE',
  PROPOGATE_MILESTONE = 'PROPOGATE_MILESTONE',
  SPIKE_MILESTONE = 'SPIKE_MILESTONE',
  TARGET = 'TARGET'
}

export type GoalListRelationFilter = {
  every?: Maybe<GoalWhereInput>;
  none?: Maybe<GoalWhereInput>;
  some?: Maybe<GoalWhereInput>;
};

export type GoalOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  funnelId?: Maybe<SortOrder>;
  funnelNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  start?: Maybe<SortOrder>;
  strategyDescription?: Maybe<SortOrder>;
  target?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
};

export type GoalScalarWhereInput = {
  AND?: Maybe<Array<GoalScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  funnelId?: Maybe<StringFilter>;
  funnelNodeId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<GoalScalarWhereInput>>;
  OR?: Maybe<Array<GoalScalarWhereInput>>;
  start?: Maybe<DateTimeNullableFilter>;
  strategyDescription?: Maybe<StringNullableFilter>;
  target?: Maybe<DateTimeNullableFilter>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  value?: Maybe<IntFilter>;
};

export type GoalUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  data?: Maybe<GoalDataPointUpdateManyWithoutGoalInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutGoalsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  metric?: Maybe<FunnelNodeUpdateOneRequiredWithoutGoalInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutGoalsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutGoalInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  strategyDescription?: Maybe<NullableStringFieldUpdateOperationsInput>;
  target?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutGoalsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<IntFieldUpdateOperationsInput>;
};

export type GoalUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  strategyDescription?: Maybe<NullableStringFieldUpdateOperationsInput>;
  target?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<IntFieldUpdateOperationsInput>;
};

export type GoalUpdateManyWithoutFunnelInput = {
  connect?: Maybe<Array<GoalWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalCreateOrConnectWithoutFunnelInput>>;
  create?: Maybe<Array<GoalCreateWithoutFunnelInput>>;
  createMany?: Maybe<GoalCreateManyFunnelInputEnvelope>;
  delete?: Maybe<Array<GoalWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GoalScalarWhereInput>>;
  disconnect?: Maybe<Array<GoalWhereUniqueInput>>;
  set?: Maybe<Array<GoalWhereUniqueInput>>;
  update?: Maybe<Array<GoalUpdateWithWhereUniqueWithoutFunnelInput>>;
  updateMany?: Maybe<Array<GoalUpdateManyWithWhereWithoutFunnelInput>>;
  upsert?: Maybe<Array<GoalUpsertWithWhereUniqueWithoutFunnelInput>>;
};

export type GoalUpdateManyWithoutMetricInput = {
  connect?: Maybe<Array<GoalWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalCreateOrConnectWithoutMetricInput>>;
  create?: Maybe<Array<GoalCreateWithoutMetricInput>>;
  createMany?: Maybe<GoalCreateManyMetricInputEnvelope>;
  delete?: Maybe<Array<GoalWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GoalScalarWhereInput>>;
  disconnect?: Maybe<Array<GoalWhereUniqueInput>>;
  set?: Maybe<Array<GoalWhereUniqueInput>>;
  update?: Maybe<Array<GoalUpdateWithWhereUniqueWithoutMetricInput>>;
  updateMany?: Maybe<Array<GoalUpdateManyWithWhereWithoutMetricInput>>;
  upsert?: Maybe<Array<GoalUpsertWithWhereUniqueWithoutMetricInput>>;
};

export type GoalUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<GoalWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<GoalCreateWithoutOwnerInput>>;
  createMany?: Maybe<GoalCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<GoalWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GoalScalarWhereInput>>;
  disconnect?: Maybe<Array<GoalWhereUniqueInput>>;
  set?: Maybe<Array<GoalWhereUniqueInput>>;
  update?: Maybe<Array<GoalUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<GoalUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<GoalUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type GoalUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<GoalWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GoalCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<GoalCreateWithoutTeamInput>>;
  createMany?: Maybe<GoalCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<GoalWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GoalScalarWhereInput>>;
  disconnect?: Maybe<Array<GoalWhereUniqueInput>>;
  set?: Maybe<Array<GoalWhereUniqueInput>>;
  update?: Maybe<Array<GoalUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<GoalUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<GoalUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type GoalUpdateManyWithWhereWithoutFunnelInput = {
  data: GoalUpdateManyMutationInput;
  where: GoalScalarWhereInput;
};

export type GoalUpdateManyWithWhereWithoutMetricInput = {
  data: GoalUpdateManyMutationInput;
  where: GoalScalarWhereInput;
};

export type GoalUpdateManyWithWhereWithoutOwnerInput = {
  data: GoalUpdateManyMutationInput;
  where: GoalScalarWhereInput;
};

export type GoalUpdateManyWithWhereWithoutTeamInput = {
  data: GoalUpdateManyMutationInput;
  where: GoalScalarWhereInput;
};

export type GoalUpdateOneRequiredWithoutDataInput = {
  connect?: Maybe<GoalWhereUniqueInput>;
  connectOrCreate?: Maybe<GoalCreateOrConnectWithoutDataInput>;
  create?: Maybe<GoalCreateWithoutDataInput>;
  update?: Maybe<GoalUpdateWithoutDataInput>;
  upsert?: Maybe<GoalUpsertWithoutDataInput>;
};

export type GoalUpdateOneRequiredWithoutProgressDataPointInput = {
  connect?: Maybe<GoalWhereUniqueInput>;
  connectOrCreate?: Maybe<GoalCreateOrConnectWithoutProgressDataPointInput>;
  create?: Maybe<GoalCreateWithoutProgressDataPointInput>;
  update?: Maybe<GoalUpdateWithoutProgressDataPointInput>;
  upsert?: Maybe<GoalUpsertWithoutProgressDataPointInput>;
};

export type GoalUpdateWithoutDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutGoalsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  metric?: Maybe<FunnelNodeUpdateOneRequiredWithoutGoalInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutGoalsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutGoalInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  strategyDescription?: Maybe<NullableStringFieldUpdateOperationsInput>;
  target?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutGoalsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<IntFieldUpdateOperationsInput>;
};

export type GoalUpdateWithoutFunnelInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  data?: Maybe<GoalDataPointUpdateManyWithoutGoalInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  metric?: Maybe<FunnelNodeUpdateOneRequiredWithoutGoalInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutGoalsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutGoalInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  strategyDescription?: Maybe<NullableStringFieldUpdateOperationsInput>;
  target?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutGoalsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<IntFieldUpdateOperationsInput>;
};

export type GoalUpdateWithoutMetricInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  data?: Maybe<GoalDataPointUpdateManyWithoutGoalInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutGoalsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutGoalsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutGoalInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  strategyDescription?: Maybe<NullableStringFieldUpdateOperationsInput>;
  target?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutGoalsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<IntFieldUpdateOperationsInput>;
};

export type GoalUpdateWithoutOwnerInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  data?: Maybe<GoalDataPointUpdateManyWithoutGoalInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutGoalsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  metric?: Maybe<FunnelNodeUpdateOneRequiredWithoutGoalInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutGoalInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  strategyDescription?: Maybe<NullableStringFieldUpdateOperationsInput>;
  target?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutGoalsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<IntFieldUpdateOperationsInput>;
};

export type GoalUpdateWithoutProgressDataPointInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  data?: Maybe<GoalDataPointUpdateManyWithoutGoalInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutGoalsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  metric?: Maybe<FunnelNodeUpdateOneRequiredWithoutGoalInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutGoalsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  strategyDescription?: Maybe<NullableStringFieldUpdateOperationsInput>;
  target?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutGoalsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<IntFieldUpdateOperationsInput>;
};

export type GoalUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  data?: Maybe<GoalDataPointUpdateManyWithoutGoalInput>;
  funnel?: Maybe<FunnelUpdateOneRequiredWithoutGoalsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  metric?: Maybe<FunnelNodeUpdateOneRequiredWithoutGoalInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutGoalsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutGoalInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  strategyDescription?: Maybe<NullableStringFieldUpdateOperationsInput>;
  target?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  value?: Maybe<IntFieldUpdateOperationsInput>;
};

export type GoalUpdateWithWhereUniqueWithoutFunnelInput = {
  data: GoalUpdateWithoutFunnelInput;
  where: GoalWhereUniqueInput;
};

export type GoalUpdateWithWhereUniqueWithoutMetricInput = {
  data: GoalUpdateWithoutMetricInput;
  where: GoalWhereUniqueInput;
};

export type GoalUpdateWithWhereUniqueWithoutOwnerInput = {
  data: GoalUpdateWithoutOwnerInput;
  where: GoalWhereUniqueInput;
};

export type GoalUpdateWithWhereUniqueWithoutTeamInput = {
  data: GoalUpdateWithoutTeamInput;
  where: GoalWhereUniqueInput;
};

export type GoalUpsertWithoutDataInput = {
  create: GoalCreateWithoutDataInput;
  update: GoalUpdateWithoutDataInput;
};

export type GoalUpsertWithoutProgressDataPointInput = {
  create: GoalCreateWithoutProgressDataPointInput;
  update: GoalUpdateWithoutProgressDataPointInput;
};

export type GoalUpsertWithWhereUniqueWithoutFunnelInput = {
  create: GoalCreateWithoutFunnelInput;
  update: GoalUpdateWithoutFunnelInput;
  where: GoalWhereUniqueInput;
};

export type GoalUpsertWithWhereUniqueWithoutMetricInput = {
  create: GoalCreateWithoutMetricInput;
  update: GoalUpdateWithoutMetricInput;
  where: GoalWhereUniqueInput;
};

export type GoalUpsertWithWhereUniqueWithoutOwnerInput = {
  create: GoalCreateWithoutOwnerInput;
  update: GoalUpdateWithoutOwnerInput;
  where: GoalWhereUniqueInput;
};

export type GoalUpsertWithWhereUniqueWithoutTeamInput = {
  create: GoalCreateWithoutTeamInput;
  update: GoalUpdateWithoutTeamInput;
  where: GoalWhereUniqueInput;
};

export type GoalWhereInput = {
  AND?: Maybe<Array<GoalWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  data?: Maybe<GoalDataPointListRelationFilter>;
  funnel?: Maybe<FunnelWhereInput>;
  funnelId?: Maybe<StringFilter>;
  funnelNodeId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  metric?: Maybe<FunnelNodeWhereInput>;
  name?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<GoalWhereInput>>;
  OR?: Maybe<Array<GoalWhereInput>>;
  owner?: Maybe<UserWhereInput>;
  progressDataPoint?: Maybe<ProgressDataPointListRelationFilter>;
  start?: Maybe<DateTimeNullableFilter>;
  strategyDescription?: Maybe<StringNullableFilter>;
  target?: Maybe<DateTimeNullableFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  value?: Maybe<IntFilter>;
};

export type GoalWhereUniqueInput = {
  funnelId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type Idea = {
  __typename?: 'Idea';
  channel?: Maybe<Channel>;
  channelId?: Maybe<Scalars['String']>;
  commentCount?: Maybe<Scalars['Int']>;
  comments: Array<Comment>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  effort?: Maybe<Scalars['Int']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ideaSession?: Maybe<IdeaSession>;
  ideaSessionId?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  kpi?: Maybe<FunnelNode>;
  name: Scalars['String'];
  note: Scalars['String'];
  priority?: Maybe<Scalars['Int']>;
  tags: Array<Tag>;
  teamId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};


export type IdeaCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type IdeaTagsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type IdeaCreateInput = {
  channel?: Maybe<ChannelCreateNestedOneWithoutIdeaInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutIdeaInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  ideaSession?: Maybe<IdeaSessionCreateNestedOneWithoutIdeasInput>;
  impact?: Maybe<Scalars['Int']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutIdeaInput>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  tags?: Maybe<TagCreateNestedManyWithoutIdeasInput>;
  team: TeamCreateNestedOneWithoutIdeasInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutIdeasInput;
};

export type IdeaCreateManyChannelInput = {
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  ideaSessionId?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type IdeaCreateManyChannelInputEnvelope = {
  data?: Maybe<Array<IdeaCreateManyChannelInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IdeaCreateManyIdeaSessionInput = {
  channelId?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type IdeaCreateManyIdeaSessionInputEnvelope = {
  data?: Maybe<Array<IdeaCreateManyIdeaSessionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IdeaCreateManyKpiInput = {
  channelId?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  ideaSessionId?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type IdeaCreateManyKpiInputEnvelope = {
  data?: Maybe<Array<IdeaCreateManyKpiInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IdeaCreateManyTeamInput = {
  channelId?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  ideaSessionId?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type IdeaCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<IdeaCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IdeaCreateManyUserInput = {
  channelId?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  ideaSessionId?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IdeaCreateManyUserInputEnvelope = {
  data?: Maybe<Array<IdeaCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IdeaCreateNestedManyWithoutChannelInput = {
  connect?: Maybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaCreateOrConnectWithoutChannelInput>>;
  create?: Maybe<Array<IdeaCreateWithoutChannelInput>>;
  createMany?: Maybe<IdeaCreateManyChannelInputEnvelope>;
};

export type IdeaCreateNestedManyWithoutIdeaSessionInput = {
  connect?: Maybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaCreateOrConnectWithoutIdeaSessionInput>>;
  create?: Maybe<Array<IdeaCreateWithoutIdeaSessionInput>>;
  createMany?: Maybe<IdeaCreateManyIdeaSessionInputEnvelope>;
};

export type IdeaCreateNestedManyWithoutKpiInput = {
  connect?: Maybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaCreateOrConnectWithoutKpiInput>>;
  create?: Maybe<Array<IdeaCreateWithoutKpiInput>>;
  createMany?: Maybe<IdeaCreateManyKpiInputEnvelope>;
};

export type IdeaCreateNestedManyWithoutTagsInput = {
  connect?: Maybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaCreateOrConnectWithoutTagsInput>>;
  create?: Maybe<Array<IdeaCreateWithoutTagsInput>>;
};

export type IdeaCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<IdeaCreateWithoutTeamInput>>;
  createMany?: Maybe<IdeaCreateManyTeamInputEnvelope>;
};

export type IdeaCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<IdeaCreateWithoutUserInput>>;
  createMany?: Maybe<IdeaCreateManyUserInputEnvelope>;
};

export type IdeaCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<IdeaWhereUniqueInput>;
  connectOrCreate?: Maybe<IdeaCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<IdeaCreateWithoutCommentsInput>;
};

export type IdeaCreateOrConnectWithoutChannelInput = {
  create: IdeaCreateWithoutChannelInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateOrConnectWithoutCommentsInput = {
  create: IdeaCreateWithoutCommentsInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateOrConnectWithoutIdeaSessionInput = {
  create: IdeaCreateWithoutIdeaSessionInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateOrConnectWithoutKpiInput = {
  create: IdeaCreateWithoutKpiInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateOrConnectWithoutTagsInput = {
  create: IdeaCreateWithoutTagsInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateOrConnectWithoutTeamInput = {
  create: IdeaCreateWithoutTeamInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateOrConnectWithoutUserInput = {
  create: IdeaCreateWithoutUserInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaCreateWithoutChannelInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutIdeaInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  ideaSession?: Maybe<IdeaSessionCreateNestedOneWithoutIdeasInput>;
  impact?: Maybe<Scalars['Int']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutIdeaInput>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  tags?: Maybe<TagCreateNestedManyWithoutIdeasInput>;
  team: TeamCreateNestedOneWithoutIdeasInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutIdeasInput;
};

export type IdeaCreateWithoutCommentsInput = {
  channel?: Maybe<ChannelCreateNestedOneWithoutIdeaInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  ideaSession?: Maybe<IdeaSessionCreateNestedOneWithoutIdeasInput>;
  impact?: Maybe<Scalars['Int']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutIdeaInput>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  tags?: Maybe<TagCreateNestedManyWithoutIdeasInput>;
  team: TeamCreateNestedOneWithoutIdeasInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutIdeasInput;
};

export type IdeaCreateWithoutIdeaSessionInput = {
  channel?: Maybe<ChannelCreateNestedOneWithoutIdeaInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutIdeaInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['Int']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutIdeaInput>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  tags?: Maybe<TagCreateNestedManyWithoutIdeasInput>;
  team: TeamCreateNestedOneWithoutIdeasInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutIdeasInput;
};

export type IdeaCreateWithoutKpiInput = {
  channel?: Maybe<ChannelCreateNestedOneWithoutIdeaInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutIdeaInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  ideaSession?: Maybe<IdeaSessionCreateNestedOneWithoutIdeasInput>;
  impact?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  tags?: Maybe<TagCreateNestedManyWithoutIdeasInput>;
  team: TeamCreateNestedOneWithoutIdeasInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutIdeasInput;
};

export type IdeaCreateWithoutTagsInput = {
  channel?: Maybe<ChannelCreateNestedOneWithoutIdeaInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutIdeaInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  ideaSession?: Maybe<IdeaSessionCreateNestedOneWithoutIdeasInput>;
  impact?: Maybe<Scalars['Int']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutIdeaInput>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  team: TeamCreateNestedOneWithoutIdeasInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutIdeasInput;
};

export type IdeaCreateWithoutTeamInput = {
  channel?: Maybe<ChannelCreateNestedOneWithoutIdeaInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutIdeaInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  ideaSession?: Maybe<IdeaSessionCreateNestedOneWithoutIdeasInput>;
  impact?: Maybe<Scalars['Int']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutIdeaInput>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  tags?: Maybe<TagCreateNestedManyWithoutIdeasInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutIdeasInput;
};

export type IdeaCreateWithoutUserInput = {
  channel?: Maybe<ChannelCreateNestedOneWithoutIdeaInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutIdeaInput>;
  confidence?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  effort?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  ideaSession?: Maybe<IdeaSessionCreateNestedOneWithoutIdeasInput>;
  impact?: Maybe<Scalars['Int']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutIdeaInput>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  tags?: Maybe<TagCreateNestedManyWithoutIdeasInput>;
  team: TeamCreateNestedOneWithoutIdeasInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IdeaListRelationFilter = {
  every?: Maybe<IdeaWhereInput>;
  none?: Maybe<IdeaWhereInput>;
  some?: Maybe<IdeaWhereInput>;
};

export type IdeaOrderByInput = {
  channelId?: Maybe<SortOrder>;
  confidence?: Maybe<SortOrder>;
  cost?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  effort?: Maybe<SortOrder>;
  funnelNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  ideaSessionId?: Maybe<SortOrder>;
  impact?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  note?: Maybe<SortOrder>;
  priority?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type IdeaScalarWhereInput = {
  AND?: Maybe<Array<IdeaScalarWhereInput>>;
  channelId?: Maybe<StringNullableFilter>;
  confidence?: Maybe<IntNullableFilter>;
  cost?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  effort?: Maybe<IntNullableFilter>;
  funnelNodeId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  ideaSessionId?: Maybe<StringNullableFilter>;
  impact?: Maybe<IntNullableFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<IdeaScalarWhereInput>>;
  note?: Maybe<StringFilter>;
  OR?: Maybe<Array<IdeaScalarWhereInput>>;
  priority?: Maybe<IntNullableFilter>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type IdeaSession = {
  __typename?: 'IdeaSession';
  completed: Scalars['Boolean'];
  funnelNodeId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  kpi?: Maybe<FunnelNode>;
  name: Scalars['String'];
  numberOfIdeas: Scalars['Int'];
  requestedBy: User;
  requestedById: Scalars['String'];
  tag?: Maybe<Tag>;
  tagId?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

export type IdeaSessionCreateInput = {
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutIdeaSessionInput>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutIdeaSessionInput>;
  name: Scalars['String'];
  numberOfIdeas: Scalars['Int'];
  requestedBy: UserCreateNestedOneWithoutIdeaSessionInput;
  tag?: Maybe<TagCreateNestedOneWithoutIdeaSessionInput>;
  team: TeamCreateNestedOneWithoutIdeaSessionInput;
  userId?: Maybe<Scalars['String']>;
};

export type IdeaSessionCreateManyKpiInput = {
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  numberOfIdeas: Scalars['Int'];
  requestedById: Scalars['String'];
  tagId?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

export type IdeaSessionCreateManyKpiInputEnvelope = {
  data?: Maybe<Array<IdeaSessionCreateManyKpiInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IdeaSessionCreateManyRequestedByInput = {
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  numberOfIdeas: Scalars['Int'];
  tagId?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

export type IdeaSessionCreateManyRequestedByInputEnvelope = {
  data?: Maybe<Array<IdeaSessionCreateManyRequestedByInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IdeaSessionCreateManyTagInput = {
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  numberOfIdeas: Scalars['Int'];
  requestedById: Scalars['String'];
  teamId: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

export type IdeaSessionCreateManyTagInputEnvelope = {
  data?: Maybe<Array<IdeaSessionCreateManyTagInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IdeaSessionCreateManyTeamInput = {
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  numberOfIdeas: Scalars['Int'];
  requestedById: Scalars['String'];
  tagId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type IdeaSessionCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<IdeaSessionCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IdeaSessionCreateNestedManyWithoutKpiInput = {
  connect?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaSessionCreateOrConnectWithoutKpiInput>>;
  create?: Maybe<Array<IdeaSessionCreateWithoutKpiInput>>;
  createMany?: Maybe<IdeaSessionCreateManyKpiInputEnvelope>;
};

export type IdeaSessionCreateNestedManyWithoutRequestedByInput = {
  connect?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaSessionCreateOrConnectWithoutRequestedByInput>>;
  create?: Maybe<Array<IdeaSessionCreateWithoutRequestedByInput>>;
  createMany?: Maybe<IdeaSessionCreateManyRequestedByInputEnvelope>;
};

export type IdeaSessionCreateNestedManyWithoutTagInput = {
  connect?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaSessionCreateOrConnectWithoutTagInput>>;
  create?: Maybe<Array<IdeaSessionCreateWithoutTagInput>>;
  createMany?: Maybe<IdeaSessionCreateManyTagInputEnvelope>;
};

export type IdeaSessionCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaSessionCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<IdeaSessionCreateWithoutTeamInput>>;
  createMany?: Maybe<IdeaSessionCreateManyTeamInputEnvelope>;
};

export type IdeaSessionCreateNestedOneWithoutIdeasInput = {
  connect?: Maybe<IdeaSessionWhereUniqueInput>;
  connectOrCreate?: Maybe<IdeaSessionCreateOrConnectWithoutIdeasInput>;
  create?: Maybe<IdeaSessionCreateWithoutIdeasInput>;
};

export type IdeaSessionCreateOrConnectWithoutIdeasInput = {
  create: IdeaSessionCreateWithoutIdeasInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionCreateOrConnectWithoutKpiInput = {
  create: IdeaSessionCreateWithoutKpiInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionCreateOrConnectWithoutRequestedByInput = {
  create: IdeaSessionCreateWithoutRequestedByInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionCreateOrConnectWithoutTagInput = {
  create: IdeaSessionCreateWithoutTagInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionCreateOrConnectWithoutTeamInput = {
  create: IdeaSessionCreateWithoutTeamInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionCreateWithoutIdeasInput = {
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutIdeaSessionInput>;
  name: Scalars['String'];
  numberOfIdeas: Scalars['Int'];
  requestedBy: UserCreateNestedOneWithoutIdeaSessionInput;
  tag?: Maybe<TagCreateNestedOneWithoutIdeaSessionInput>;
  team: TeamCreateNestedOneWithoutIdeaSessionInput;
  userId?: Maybe<Scalars['String']>;
};

export type IdeaSessionCreateWithoutKpiInput = {
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutIdeaSessionInput>;
  name: Scalars['String'];
  numberOfIdeas: Scalars['Int'];
  requestedBy: UserCreateNestedOneWithoutIdeaSessionInput;
  tag?: Maybe<TagCreateNestedOneWithoutIdeaSessionInput>;
  team: TeamCreateNestedOneWithoutIdeaSessionInput;
  userId?: Maybe<Scalars['String']>;
};

export type IdeaSessionCreateWithoutRequestedByInput = {
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutIdeaSessionInput>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutIdeaSessionInput>;
  name: Scalars['String'];
  numberOfIdeas: Scalars['Int'];
  tag?: Maybe<TagCreateNestedOneWithoutIdeaSessionInput>;
  team: TeamCreateNestedOneWithoutIdeaSessionInput;
  userId?: Maybe<Scalars['String']>;
};

export type IdeaSessionCreateWithoutTagInput = {
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutIdeaSessionInput>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutIdeaSessionInput>;
  name: Scalars['String'];
  numberOfIdeas: Scalars['Int'];
  requestedBy: UserCreateNestedOneWithoutIdeaSessionInput;
  team: TeamCreateNestedOneWithoutIdeaSessionInput;
  userId?: Maybe<Scalars['String']>;
};

export type IdeaSessionCreateWithoutTeamInput = {
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutIdeaSessionInput>;
  kpi?: Maybe<FunnelNodeCreateNestedOneWithoutIdeaSessionInput>;
  name: Scalars['String'];
  numberOfIdeas: Scalars['Int'];
  requestedBy: UserCreateNestedOneWithoutIdeaSessionInput;
  tag?: Maybe<TagCreateNestedOneWithoutIdeaSessionInput>;
  userId?: Maybe<Scalars['String']>;
};

export type IdeaSessionListRelationFilter = {
  every?: Maybe<IdeaSessionWhereInput>;
  none?: Maybe<IdeaSessionWhereInput>;
  some?: Maybe<IdeaSessionWhereInput>;
};

export type IdeaSessionOrderByInput = {
  completed?: Maybe<SortOrder>;
  deadline?: Maybe<SortOrder>;
  funnelNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  numberOfIdeas?: Maybe<SortOrder>;
  requestedById?: Maybe<SortOrder>;
  tagId?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type IdeaSessionScalarWhereInput = {
  AND?: Maybe<Array<IdeaSessionScalarWhereInput>>;
  completed?: Maybe<BoolFilter>;
  deadline?: Maybe<DateTimeNullableFilter>;
  funnelNodeId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<IdeaSessionScalarWhereInput>>;
  numberOfIdeas?: Maybe<IntFilter>;
  OR?: Maybe<Array<IdeaSessionScalarWhereInput>>;
  requestedById?: Maybe<StringFilter>;
  tagId?: Maybe<StringNullableFilter>;
  teamId?: Maybe<StringFilter>;
  userId?: Maybe<StringNullableFilter>;
};

export type IdeaSessionUpdateInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  deadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutIdeaSessionInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutIdeaSessionInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  numberOfIdeas?: Maybe<IntFieldUpdateOperationsInput>;
  requestedBy?: Maybe<UserUpdateOneRequiredWithoutIdeaSessionInput>;
  tag?: Maybe<TagUpdateOneWithoutIdeaSessionInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIdeaSessionInput>;
  userId?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type IdeaSessionUpdateManyMutationInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  deadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  numberOfIdeas?: Maybe<IntFieldUpdateOperationsInput>;
  userId?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type IdeaSessionUpdateManyWithoutKpiInput = {
  connect?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaSessionCreateOrConnectWithoutKpiInput>>;
  create?: Maybe<Array<IdeaSessionCreateWithoutKpiInput>>;
  createMany?: Maybe<IdeaSessionCreateManyKpiInputEnvelope>;
  delete?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IdeaSessionScalarWhereInput>>;
  disconnect?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  set?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  update?: Maybe<Array<IdeaSessionUpdateWithWhereUniqueWithoutKpiInput>>;
  updateMany?: Maybe<Array<IdeaSessionUpdateManyWithWhereWithoutKpiInput>>;
  upsert?: Maybe<Array<IdeaSessionUpsertWithWhereUniqueWithoutKpiInput>>;
};

export type IdeaSessionUpdateManyWithoutRequestedByInput = {
  connect?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaSessionCreateOrConnectWithoutRequestedByInput>>;
  create?: Maybe<Array<IdeaSessionCreateWithoutRequestedByInput>>;
  createMany?: Maybe<IdeaSessionCreateManyRequestedByInputEnvelope>;
  delete?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IdeaSessionScalarWhereInput>>;
  disconnect?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  set?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  update?: Maybe<Array<IdeaSessionUpdateWithWhereUniqueWithoutRequestedByInput>>;
  updateMany?: Maybe<Array<IdeaSessionUpdateManyWithWhereWithoutRequestedByInput>>;
  upsert?: Maybe<Array<IdeaSessionUpsertWithWhereUniqueWithoutRequestedByInput>>;
};

export type IdeaSessionUpdateManyWithoutTagInput = {
  connect?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaSessionCreateOrConnectWithoutTagInput>>;
  create?: Maybe<Array<IdeaSessionCreateWithoutTagInput>>;
  createMany?: Maybe<IdeaSessionCreateManyTagInputEnvelope>;
  delete?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IdeaSessionScalarWhereInput>>;
  disconnect?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  set?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  update?: Maybe<Array<IdeaSessionUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: Maybe<Array<IdeaSessionUpdateManyWithWhereWithoutTagInput>>;
  upsert?: Maybe<Array<IdeaSessionUpsertWithWhereUniqueWithoutTagInput>>;
};

export type IdeaSessionUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaSessionCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<IdeaSessionCreateWithoutTeamInput>>;
  createMany?: Maybe<IdeaSessionCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IdeaSessionScalarWhereInput>>;
  disconnect?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  set?: Maybe<Array<IdeaSessionWhereUniqueInput>>;
  update?: Maybe<Array<IdeaSessionUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<IdeaSessionUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<IdeaSessionUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type IdeaSessionUpdateManyWithWhereWithoutKpiInput = {
  data: IdeaSessionUpdateManyMutationInput;
  where: IdeaSessionScalarWhereInput;
};

export type IdeaSessionUpdateManyWithWhereWithoutRequestedByInput = {
  data: IdeaSessionUpdateManyMutationInput;
  where: IdeaSessionScalarWhereInput;
};

export type IdeaSessionUpdateManyWithWhereWithoutTagInput = {
  data: IdeaSessionUpdateManyMutationInput;
  where: IdeaSessionScalarWhereInput;
};

export type IdeaSessionUpdateManyWithWhereWithoutTeamInput = {
  data: IdeaSessionUpdateManyMutationInput;
  where: IdeaSessionScalarWhereInput;
};

export type IdeaSessionUpdateOneWithoutIdeasInput = {
  connect?: Maybe<IdeaSessionWhereUniqueInput>;
  connectOrCreate?: Maybe<IdeaSessionCreateOrConnectWithoutIdeasInput>;
  create?: Maybe<IdeaSessionCreateWithoutIdeasInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<IdeaSessionUpdateWithoutIdeasInput>;
  upsert?: Maybe<IdeaSessionUpsertWithoutIdeasInput>;
};

export type IdeaSessionUpdateWithoutIdeasInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  deadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutIdeaSessionInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  numberOfIdeas?: Maybe<IntFieldUpdateOperationsInput>;
  requestedBy?: Maybe<UserUpdateOneRequiredWithoutIdeaSessionInput>;
  tag?: Maybe<TagUpdateOneWithoutIdeaSessionInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIdeaSessionInput>;
  userId?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type IdeaSessionUpdateWithoutKpiInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  deadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutIdeaSessionInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  numberOfIdeas?: Maybe<IntFieldUpdateOperationsInput>;
  requestedBy?: Maybe<UserUpdateOneRequiredWithoutIdeaSessionInput>;
  tag?: Maybe<TagUpdateOneWithoutIdeaSessionInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIdeaSessionInput>;
  userId?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type IdeaSessionUpdateWithoutRequestedByInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  deadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutIdeaSessionInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutIdeaSessionInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  numberOfIdeas?: Maybe<IntFieldUpdateOperationsInput>;
  tag?: Maybe<TagUpdateOneWithoutIdeaSessionInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIdeaSessionInput>;
  userId?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type IdeaSessionUpdateWithoutTagInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  deadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutIdeaSessionInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutIdeaSessionInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  numberOfIdeas?: Maybe<IntFieldUpdateOperationsInput>;
  requestedBy?: Maybe<UserUpdateOneRequiredWithoutIdeaSessionInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIdeaSessionInput>;
  userId?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type IdeaSessionUpdateWithoutTeamInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  deadline?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutIdeaSessionInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutIdeaSessionInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  numberOfIdeas?: Maybe<IntFieldUpdateOperationsInput>;
  requestedBy?: Maybe<UserUpdateOneRequiredWithoutIdeaSessionInput>;
  tag?: Maybe<TagUpdateOneWithoutIdeaSessionInput>;
  userId?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type IdeaSessionUpdateWithWhereUniqueWithoutKpiInput = {
  data: IdeaSessionUpdateWithoutKpiInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionUpdateWithWhereUniqueWithoutRequestedByInput = {
  data: IdeaSessionUpdateWithoutRequestedByInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionUpdateWithWhereUniqueWithoutTagInput = {
  data: IdeaSessionUpdateWithoutTagInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionUpdateWithWhereUniqueWithoutTeamInput = {
  data: IdeaSessionUpdateWithoutTeamInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionUpsertWithoutIdeasInput = {
  create: IdeaSessionCreateWithoutIdeasInput;
  update: IdeaSessionUpdateWithoutIdeasInput;
};

export type IdeaSessionUpsertWithWhereUniqueWithoutKpiInput = {
  create: IdeaSessionCreateWithoutKpiInput;
  update: IdeaSessionUpdateWithoutKpiInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionUpsertWithWhereUniqueWithoutRequestedByInput = {
  create: IdeaSessionCreateWithoutRequestedByInput;
  update: IdeaSessionUpdateWithoutRequestedByInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionUpsertWithWhereUniqueWithoutTagInput = {
  create: IdeaSessionCreateWithoutTagInput;
  update: IdeaSessionUpdateWithoutTagInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionUpsertWithWhereUniqueWithoutTeamInput = {
  create: IdeaSessionCreateWithoutTeamInput;
  update: IdeaSessionUpdateWithoutTeamInput;
  where: IdeaSessionWhereUniqueInput;
};

export type IdeaSessionWhereInput = {
  AND?: Maybe<Array<IdeaSessionWhereInput>>;
  completed?: Maybe<BoolFilter>;
  deadline?: Maybe<DateTimeNullableFilter>;
  funnelNodeId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  ideas?: Maybe<IdeaListRelationFilter>;
  kpi?: Maybe<FunnelNodeWhereInput>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<IdeaSessionWhereInput>>;
  numberOfIdeas?: Maybe<IntFilter>;
  OR?: Maybe<Array<IdeaSessionWhereInput>>;
  requestedBy?: Maybe<UserWhereInput>;
  requestedById?: Maybe<StringFilter>;
  tag?: Maybe<TagWhereInput>;
  tagId?: Maybe<StringNullableFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  userId?: Maybe<StringNullableFilter>;
};

export type IdeaSessionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type IdeaSuggestion = {
  __typename?: 'IdeaSuggestion';
  by?: Maybe<Scalars['String']>;
  /** Optional KPI conversion rate that this suggestion affects. If this value is not null, the suggestion is indicating that you should increase a conversionrate between two KPIs by an amount or percentage. This value will not relate to a single value increase. */
  conversion?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['String']>;
  /** Optional single KPI value that this suggestion affects. If this value is not null, the suggestion is indicating that you should increase a singleKPI's value by an amount or percentage. This value will not relate to a conversion rate betweentwo KPIs. */
  kpi?: Maybe<Scalars['String']>;
  /** Indicated whether this suggestion's value represents an increase BY an amountor TO an amount. This is an important distinction. */
  modifier?: Maybe<Scalars['String']>;
  /** complete result string */
  result?: Maybe<Scalars['String']>;
  /** The value to improve the suggested KPI or conversion rate by.This may be an absolute value, a percentage, or a multiple.Be wary of making sure this is used alongside the modifier field. */
  value?: Maybe<Scalars['String']>;
};

export type IdeaUpdateInput = {
  channel?: Maybe<ChannelUpdateOneWithoutIdeaInput>;
  comments?: Maybe<CommentUpdateManyWithoutIdeaInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideaSession?: Maybe<IdeaSessionUpdateOneWithoutIdeasInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutIdeaInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutIdeasInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIdeasInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutIdeasInput>;
};

export type IdeaUpdateManyMutationInput = {
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IdeaUpdateManyWithoutChannelInput = {
  connect?: Maybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaCreateOrConnectWithoutChannelInput>>;
  create?: Maybe<Array<IdeaCreateWithoutChannelInput>>;
  createMany?: Maybe<IdeaCreateManyChannelInputEnvelope>;
  delete?: Maybe<Array<IdeaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IdeaScalarWhereInput>>;
  disconnect?: Maybe<Array<IdeaWhereUniqueInput>>;
  set?: Maybe<Array<IdeaWhereUniqueInput>>;
  update?: Maybe<Array<IdeaUpdateWithWhereUniqueWithoutChannelInput>>;
  updateMany?: Maybe<Array<IdeaUpdateManyWithWhereWithoutChannelInput>>;
  upsert?: Maybe<Array<IdeaUpsertWithWhereUniqueWithoutChannelInput>>;
};

export type IdeaUpdateManyWithoutIdeaSessionInput = {
  connect?: Maybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaCreateOrConnectWithoutIdeaSessionInput>>;
  create?: Maybe<Array<IdeaCreateWithoutIdeaSessionInput>>;
  createMany?: Maybe<IdeaCreateManyIdeaSessionInputEnvelope>;
  delete?: Maybe<Array<IdeaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IdeaScalarWhereInput>>;
  disconnect?: Maybe<Array<IdeaWhereUniqueInput>>;
  set?: Maybe<Array<IdeaWhereUniqueInput>>;
  update?: Maybe<Array<IdeaUpdateWithWhereUniqueWithoutIdeaSessionInput>>;
  updateMany?: Maybe<Array<IdeaUpdateManyWithWhereWithoutIdeaSessionInput>>;
  upsert?: Maybe<Array<IdeaUpsertWithWhereUniqueWithoutIdeaSessionInput>>;
};

export type IdeaUpdateManyWithoutKpiInput = {
  connect?: Maybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaCreateOrConnectWithoutKpiInput>>;
  create?: Maybe<Array<IdeaCreateWithoutKpiInput>>;
  createMany?: Maybe<IdeaCreateManyKpiInputEnvelope>;
  delete?: Maybe<Array<IdeaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IdeaScalarWhereInput>>;
  disconnect?: Maybe<Array<IdeaWhereUniqueInput>>;
  set?: Maybe<Array<IdeaWhereUniqueInput>>;
  update?: Maybe<Array<IdeaUpdateWithWhereUniqueWithoutKpiInput>>;
  updateMany?: Maybe<Array<IdeaUpdateManyWithWhereWithoutKpiInput>>;
  upsert?: Maybe<Array<IdeaUpsertWithWhereUniqueWithoutKpiInput>>;
};

export type IdeaUpdateManyWithoutTagsInput = {
  connect?: Maybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaCreateOrConnectWithoutTagsInput>>;
  create?: Maybe<Array<IdeaCreateWithoutTagsInput>>;
  delete?: Maybe<Array<IdeaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IdeaScalarWhereInput>>;
  disconnect?: Maybe<Array<IdeaWhereUniqueInput>>;
  set?: Maybe<Array<IdeaWhereUniqueInput>>;
  update?: Maybe<Array<IdeaUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: Maybe<Array<IdeaUpdateManyWithWhereWithoutTagsInput>>;
  upsert?: Maybe<Array<IdeaUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type IdeaUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<IdeaCreateWithoutTeamInput>>;
  createMany?: Maybe<IdeaCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<IdeaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IdeaScalarWhereInput>>;
  disconnect?: Maybe<Array<IdeaWhereUniqueInput>>;
  set?: Maybe<Array<IdeaWhereUniqueInput>>;
  update?: Maybe<Array<IdeaUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<IdeaUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<IdeaUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type IdeaUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<IdeaWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IdeaCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<IdeaCreateWithoutUserInput>>;
  createMany?: Maybe<IdeaCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<IdeaWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IdeaScalarWhereInput>>;
  disconnect?: Maybe<Array<IdeaWhereUniqueInput>>;
  set?: Maybe<Array<IdeaWhereUniqueInput>>;
  update?: Maybe<Array<IdeaUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<IdeaUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<IdeaUpsertWithWhereUniqueWithoutUserInput>>;
};

export type IdeaUpdateManyWithWhereWithoutChannelInput = {
  data: IdeaUpdateManyMutationInput;
  where: IdeaScalarWhereInput;
};

export type IdeaUpdateManyWithWhereWithoutIdeaSessionInput = {
  data: IdeaUpdateManyMutationInput;
  where: IdeaScalarWhereInput;
};

export type IdeaUpdateManyWithWhereWithoutKpiInput = {
  data: IdeaUpdateManyMutationInput;
  where: IdeaScalarWhereInput;
};

export type IdeaUpdateManyWithWhereWithoutTagsInput = {
  data: IdeaUpdateManyMutationInput;
  where: IdeaScalarWhereInput;
};

export type IdeaUpdateManyWithWhereWithoutTeamInput = {
  data: IdeaUpdateManyMutationInput;
  where: IdeaScalarWhereInput;
};

export type IdeaUpdateManyWithWhereWithoutUserInput = {
  data: IdeaUpdateManyMutationInput;
  where: IdeaScalarWhereInput;
};

export type IdeaUpdateOneWithoutCommentsInput = {
  connect?: Maybe<IdeaWhereUniqueInput>;
  connectOrCreate?: Maybe<IdeaCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<IdeaCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<IdeaUpdateWithoutCommentsInput>;
  upsert?: Maybe<IdeaUpsertWithoutCommentsInput>;
};

export type IdeaUpdateWithoutChannelInput = {
  comments?: Maybe<CommentUpdateManyWithoutIdeaInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideaSession?: Maybe<IdeaSessionUpdateOneWithoutIdeasInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutIdeaInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutIdeasInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIdeasInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutIdeasInput>;
};

export type IdeaUpdateWithoutCommentsInput = {
  channel?: Maybe<ChannelUpdateOneWithoutIdeaInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideaSession?: Maybe<IdeaSessionUpdateOneWithoutIdeasInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutIdeaInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutIdeasInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIdeasInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutIdeasInput>;
};

export type IdeaUpdateWithoutIdeaSessionInput = {
  channel?: Maybe<ChannelUpdateOneWithoutIdeaInput>;
  comments?: Maybe<CommentUpdateManyWithoutIdeaInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutIdeaInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutIdeasInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIdeasInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutIdeasInput>;
};

export type IdeaUpdateWithoutKpiInput = {
  channel?: Maybe<ChannelUpdateOneWithoutIdeaInput>;
  comments?: Maybe<CommentUpdateManyWithoutIdeaInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideaSession?: Maybe<IdeaSessionUpdateOneWithoutIdeasInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutIdeasInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIdeasInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutIdeasInput>;
};

export type IdeaUpdateWithoutTagsInput = {
  channel?: Maybe<ChannelUpdateOneWithoutIdeaInput>;
  comments?: Maybe<CommentUpdateManyWithoutIdeaInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideaSession?: Maybe<IdeaSessionUpdateOneWithoutIdeasInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutIdeaInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIdeasInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutIdeasInput>;
};

export type IdeaUpdateWithoutTeamInput = {
  channel?: Maybe<ChannelUpdateOneWithoutIdeaInput>;
  comments?: Maybe<CommentUpdateManyWithoutIdeaInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideaSession?: Maybe<IdeaSessionUpdateOneWithoutIdeasInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutIdeaInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutIdeasInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutIdeasInput>;
};

export type IdeaUpdateWithoutUserInput = {
  channel?: Maybe<ChannelUpdateOneWithoutIdeaInput>;
  comments?: Maybe<CommentUpdateManyWithoutIdeaInput>;
  confidence?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  effort?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideaSession?: Maybe<IdeaSessionUpdateOneWithoutIdeasInput>;
  impact?: Maybe<NullableIntFieldUpdateOperationsInput>;
  kpi?: Maybe<FunnelNodeUpdateOneWithoutIdeaInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  note?: Maybe<StringFieldUpdateOperationsInput>;
  priority?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutIdeasInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIdeasInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IdeaUpdateWithWhereUniqueWithoutChannelInput = {
  data: IdeaUpdateWithoutChannelInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpdateWithWhereUniqueWithoutIdeaSessionInput = {
  data: IdeaUpdateWithoutIdeaSessionInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpdateWithWhereUniqueWithoutKpiInput = {
  data: IdeaUpdateWithoutKpiInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpdateWithWhereUniqueWithoutTagsInput = {
  data: IdeaUpdateWithoutTagsInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpdateWithWhereUniqueWithoutTeamInput = {
  data: IdeaUpdateWithoutTeamInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpdateWithWhereUniqueWithoutUserInput = {
  data: IdeaUpdateWithoutUserInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpsertWithoutCommentsInput = {
  create: IdeaCreateWithoutCommentsInput;
  update: IdeaUpdateWithoutCommentsInput;
};

export type IdeaUpsertWithWhereUniqueWithoutChannelInput = {
  create: IdeaCreateWithoutChannelInput;
  update: IdeaUpdateWithoutChannelInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpsertWithWhereUniqueWithoutIdeaSessionInput = {
  create: IdeaCreateWithoutIdeaSessionInput;
  update: IdeaUpdateWithoutIdeaSessionInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpsertWithWhereUniqueWithoutKpiInput = {
  create: IdeaCreateWithoutKpiInput;
  update: IdeaUpdateWithoutKpiInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpsertWithWhereUniqueWithoutTagsInput = {
  create: IdeaCreateWithoutTagsInput;
  update: IdeaUpdateWithoutTagsInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpsertWithWhereUniqueWithoutTeamInput = {
  create: IdeaCreateWithoutTeamInput;
  update: IdeaUpdateWithoutTeamInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaUpsertWithWhereUniqueWithoutUserInput = {
  create: IdeaCreateWithoutUserInput;
  update: IdeaUpdateWithoutUserInput;
  where: IdeaWhereUniqueInput;
};

export type IdeaWhereInput = {
  AND?: Maybe<Array<IdeaWhereInput>>;
  channel?: Maybe<ChannelWhereInput>;
  channelId?: Maybe<StringNullableFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  confidence?: Maybe<IntNullableFilter>;
  cost?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  effort?: Maybe<IntNullableFilter>;
  funnelNodeId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  ideaSession?: Maybe<IdeaSessionWhereInput>;
  ideaSessionId?: Maybe<StringNullableFilter>;
  impact?: Maybe<IntNullableFilter>;
  kpi?: Maybe<FunnelNodeWhereInput>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<IdeaWhereInput>>;
  note?: Maybe<StringFilter>;
  OR?: Maybe<Array<IdeaWhereInput>>;
  priority?: Maybe<IntNullableFilter>;
  tags?: Maybe<TagListRelationFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type IdeaWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type InputFunnel = {
  /** Array of funnel nodes */
  nodes: Array<Maybe<InputFunnelNode>>;
  /** The lastUpdated date of the funnel at the time of edit */
  priorUpdate: Scalars['String'];
};

export type InputFunnelNode = {
  id: Scalars['String'];
  isRevenue?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  onboardValue?: Maybe<Scalars['Float']>;
  order: Scalars['Int'];
};

export type InputIntegration = {
  /** ID of associated funnel node */
  funnelNodeId?: Maybe<Scalars['String']>;
  /** Account information specific to provider */
  providerAccount?: Maybe<ProviderAccountArgs>;
  /** provider name for account */
  providerId?: Maybe<Scalars['String']>;
  /** The type of metric for the given provider */
  providerType?: Maybe<Scalars['String']>;
};

export type Integration = {
  __typename?: 'Integration';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  config: Scalars['Json'];
  createdAt: Scalars['DateTime'];
  funnelNode?: Maybe<FunnelNode>;
  id: Scalars['String'];
  lastRun: Scalars['DateTime'];
  metrics?: Maybe<Array<Maybe<Scalars['String']>>>;
  progress?: Maybe<Scalars['Float']>;
  provider?: Maybe<Scalars['String']>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerSchedule: IntegrationScheduleType;
  taskStatus: IntegrationStatusType;
  taskType: IntegrationTaskType;
  updatedAt: Scalars['DateTime'];
};

export type IntegrationCreateManyAccountInput = {
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  ownerId: Scalars['String'];
  progress?: Maybe<Scalars['Float']>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationCreateManytaskerIdsInput>;
  taskerSchedule: IntegrationScheduleType;
  taskStatus: IntegrationStatusType;
  taskType: IntegrationTaskType;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationCreateManyAccountInputEnvelope = {
  data?: Maybe<Array<IntegrationCreateManyAccountInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IntegrationCreateManyFunnelNodeInput = {
  accountId?: Maybe<Scalars['String']>;
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  ownerId: Scalars['String'];
  progress?: Maybe<Scalars['Float']>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationCreateManytaskerIdsInput>;
  taskerSchedule: IntegrationScheduleType;
  taskStatus: IntegrationStatusType;
  taskType: IntegrationTaskType;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationCreateManyFunnelNodeInputEnvelope = {
  data?: Maybe<Array<IntegrationCreateManyFunnelNodeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IntegrationCreateManyOwnerInput = {
  accountId?: Maybe<Scalars['String']>;
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  progress?: Maybe<Scalars['Float']>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationCreateManytaskerIdsInput>;
  taskerSchedule: IntegrationScheduleType;
  taskStatus: IntegrationStatusType;
  taskType: IntegrationTaskType;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<IntegrationCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IntegrationCreateManytaskerIdsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type IntegrationCreateManyTeamInput = {
  accountId?: Maybe<Scalars['String']>;
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  ownerId: Scalars['String'];
  progress?: Maybe<Scalars['Float']>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationCreateManytaskerIdsInput>;
  taskerSchedule: IntegrationScheduleType;
  taskStatus: IntegrationStatusType;
  taskType: IntegrationTaskType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<IntegrationCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IntegrationCreateNestedManyWithoutAccountInput = {
  connect?: Maybe<Array<IntegrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationCreateOrConnectWithoutAccountInput>>;
  create?: Maybe<Array<IntegrationCreateWithoutAccountInput>>;
  createMany?: Maybe<IntegrationCreateManyAccountInputEnvelope>;
};

export type IntegrationCreateNestedManyWithoutFunnelNodeInput = {
  connect?: Maybe<Array<IntegrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationCreateOrConnectWithoutFunnelNodeInput>>;
  create?: Maybe<Array<IntegrationCreateWithoutFunnelNodeInput>>;
  createMany?: Maybe<IntegrationCreateManyFunnelNodeInputEnvelope>;
};

export type IntegrationCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<IntegrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<IntegrationCreateWithoutOwnerInput>>;
  createMany?: Maybe<IntegrationCreateManyOwnerInputEnvelope>;
};

export type IntegrationCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<IntegrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<IntegrationCreateWithoutTeamInput>>;
  createMany?: Maybe<IntegrationCreateManyTeamInputEnvelope>;
};

export type IntegrationCreateNestedOneWithoutCampaignInput = {
  connect?: Maybe<IntegrationWhereUniqueInput>;
  connectOrCreate?: Maybe<IntegrationCreateOrConnectWithoutCampaignInput>;
  create?: Maybe<IntegrationCreateWithoutCampaignInput>;
};

export type IntegrationCreateNestedOneWithoutFunnelDataPointValueInput = {
  connect?: Maybe<IntegrationWhereUniqueInput>;
  connectOrCreate?: Maybe<IntegrationCreateOrConnectWithoutFunnelDataPointValueInput>;
  create?: Maybe<IntegrationCreateWithoutFunnelDataPointValueInput>;
};

export type IntegrationCreateNestedOneWithoutGoalDataPointValueInput = {
  connect?: Maybe<IntegrationWhereUniqueInput>;
  connectOrCreate?: Maybe<IntegrationCreateOrConnectWithoutGoalDataPointValueInput>;
  create?: Maybe<IntegrationCreateWithoutGoalDataPointValueInput>;
};

export type IntegrationCreateOrConnectWithoutAccountInput = {
  create: IntegrationCreateWithoutAccountInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationCreateOrConnectWithoutCampaignInput = {
  create: IntegrationCreateWithoutCampaignInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationCreateOrConnectWithoutFunnelDataPointValueInput = {
  create: IntegrationCreateWithoutFunnelDataPointValueInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationCreateOrConnectWithoutFunnelNodeInput = {
  create: IntegrationCreateWithoutFunnelNodeInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationCreateOrConnectWithoutGoalDataPointValueInput = {
  create: IntegrationCreateWithoutGoalDataPointValueInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationCreateOrConnectWithoutOwnerInput = {
  create: IntegrationCreateWithoutOwnerInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationCreateOrConnectWithoutTeamInput = {
  create: IntegrationCreateWithoutTeamInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationCreatetaskerIdsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type IntegrationCreateWithoutAccountInput = {
  campaign?: Maybe<CampaignCreateNestedManyWithoutIntegrationInput>;
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueCreateNestedManyWithoutIntegrationInput>;
  funnelNode?: Maybe<FunnelNodeCreateNestedOneWithoutIntegrationInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutIntegrationInput>;
  id?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  owner: UserCreateNestedOneWithoutIntegrationsInput;
  progress?: Maybe<Scalars['Float']>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationCreatetaskerIdsInput>;
  taskerSchedule: IntegrationScheduleType;
  taskStatus: IntegrationStatusType;
  taskType: IntegrationTaskType;
  team: TeamCreateNestedOneWithoutIntegrationInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationCreateWithoutCampaignInput = {
  account?: Maybe<AccountCreateNestedOneWithoutIntegrationInput>;
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueCreateNestedManyWithoutIntegrationInput>;
  funnelNode?: Maybe<FunnelNodeCreateNestedOneWithoutIntegrationInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutIntegrationInput>;
  id?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  owner: UserCreateNestedOneWithoutIntegrationsInput;
  progress?: Maybe<Scalars['Float']>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationCreatetaskerIdsInput>;
  taskerSchedule: IntegrationScheduleType;
  taskStatus: IntegrationStatusType;
  taskType: IntegrationTaskType;
  team: TeamCreateNestedOneWithoutIntegrationInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationCreateWithoutFunnelDataPointValueInput = {
  account?: Maybe<AccountCreateNestedOneWithoutIntegrationInput>;
  campaign?: Maybe<CampaignCreateNestedManyWithoutIntegrationInput>;
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelNode?: Maybe<FunnelNodeCreateNestedOneWithoutIntegrationInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutIntegrationInput>;
  id?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  owner: UserCreateNestedOneWithoutIntegrationsInput;
  progress?: Maybe<Scalars['Float']>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationCreatetaskerIdsInput>;
  taskerSchedule: IntegrationScheduleType;
  taskStatus: IntegrationStatusType;
  taskType: IntegrationTaskType;
  team: TeamCreateNestedOneWithoutIntegrationInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationCreateWithoutFunnelNodeInput = {
  account?: Maybe<AccountCreateNestedOneWithoutIntegrationInput>;
  campaign?: Maybe<CampaignCreateNestedManyWithoutIntegrationInput>;
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueCreateNestedManyWithoutIntegrationInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutIntegrationInput>;
  id?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  owner: UserCreateNestedOneWithoutIntegrationsInput;
  progress?: Maybe<Scalars['Float']>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationCreatetaskerIdsInput>;
  taskerSchedule: IntegrationScheduleType;
  taskStatus: IntegrationStatusType;
  taskType: IntegrationTaskType;
  team: TeamCreateNestedOneWithoutIntegrationInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationCreateWithoutGoalDataPointValueInput = {
  account?: Maybe<AccountCreateNestedOneWithoutIntegrationInput>;
  campaign?: Maybe<CampaignCreateNestedManyWithoutIntegrationInput>;
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueCreateNestedManyWithoutIntegrationInput>;
  funnelNode?: Maybe<FunnelNodeCreateNestedOneWithoutIntegrationInput>;
  id?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  owner: UserCreateNestedOneWithoutIntegrationsInput;
  progress?: Maybe<Scalars['Float']>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationCreatetaskerIdsInput>;
  taskerSchedule: IntegrationScheduleType;
  taskStatus: IntegrationStatusType;
  taskType: IntegrationTaskType;
  team: TeamCreateNestedOneWithoutIntegrationInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationCreateWithoutOwnerInput = {
  account?: Maybe<AccountCreateNestedOneWithoutIntegrationInput>;
  campaign?: Maybe<CampaignCreateNestedManyWithoutIntegrationInput>;
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueCreateNestedManyWithoutIntegrationInput>;
  funnelNode?: Maybe<FunnelNodeCreateNestedOneWithoutIntegrationInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutIntegrationInput>;
  id?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  progress?: Maybe<Scalars['Float']>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationCreatetaskerIdsInput>;
  taskerSchedule: IntegrationScheduleType;
  taskStatus: IntegrationStatusType;
  taskType: IntegrationTaskType;
  team: TeamCreateNestedOneWithoutIntegrationInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationCreateWithoutTeamInput = {
  account?: Maybe<AccountCreateNestedOneWithoutIntegrationInput>;
  campaign?: Maybe<CampaignCreateNestedManyWithoutIntegrationInput>;
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueCreateNestedManyWithoutIntegrationInput>;
  funnelNode?: Maybe<FunnelNodeCreateNestedOneWithoutIntegrationInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutIntegrationInput>;
  id?: Maybe<Scalars['String']>;
  lastRun?: Maybe<Scalars['DateTime']>;
  owner: UserCreateNestedOneWithoutIntegrationsInput;
  progress?: Maybe<Scalars['Float']>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationCreatetaskerIdsInput>;
  taskerSchedule: IntegrationScheduleType;
  taskStatus: IntegrationStatusType;
  taskType: IntegrationTaskType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationDefault = {
  __typename?: 'IntegrationDefault';
  account: Account;
  config: Scalars['Json'];
  owner: User;
  team: Team;
  type: IntegrationDefaultType;
};

export type IntegrationDefaultCreateManyAccountInput = {
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  ownerId: Scalars['String'];
  teamId: Scalars['String'];
  type: IntegrationDefaultType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationDefaultCreateManyAccountInputEnvelope = {
  data?: Maybe<Array<IntegrationDefaultCreateManyAccountInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IntegrationDefaultCreateManyOwnerInput = {
  accountId: Scalars['String'];
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  teamId: Scalars['String'];
  type: IntegrationDefaultType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationDefaultCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<IntegrationDefaultCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IntegrationDefaultCreateManyTeamInput = {
  accountId: Scalars['String'];
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  ownerId: Scalars['String'];
  type: IntegrationDefaultType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationDefaultCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<IntegrationDefaultCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IntegrationDefaultCreateNestedManyWithoutAccountInput = {
  connect?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationDefaultCreateOrConnectWithoutAccountInput>>;
  create?: Maybe<Array<IntegrationDefaultCreateWithoutAccountInput>>;
  createMany?: Maybe<IntegrationDefaultCreateManyAccountInputEnvelope>;
};

export type IntegrationDefaultCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationDefaultCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<IntegrationDefaultCreateWithoutOwnerInput>>;
  createMany?: Maybe<IntegrationDefaultCreateManyOwnerInputEnvelope>;
};

export type IntegrationDefaultCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationDefaultCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<IntegrationDefaultCreateWithoutTeamInput>>;
  createMany?: Maybe<IntegrationDefaultCreateManyTeamInputEnvelope>;
};

export type IntegrationDefaultCreateOrConnectWithoutAccountInput = {
  create: IntegrationDefaultCreateWithoutAccountInput;
  where: IntegrationDefaultWhereUniqueInput;
};

export type IntegrationDefaultCreateOrConnectWithoutOwnerInput = {
  create: IntegrationDefaultCreateWithoutOwnerInput;
  where: IntegrationDefaultWhereUniqueInput;
};

export type IntegrationDefaultCreateOrConnectWithoutTeamInput = {
  create: IntegrationDefaultCreateWithoutTeamInput;
  where: IntegrationDefaultWhereUniqueInput;
};

export type IntegrationDefaultCreateWithoutAccountInput = {
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  owner: UserCreateNestedOneWithoutIntegrationDefaultInput;
  team: TeamCreateNestedOneWithoutIntegrationDefaultInput;
  type: IntegrationDefaultType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationDefaultCreateWithoutOwnerInput = {
  account: AccountCreateNestedOneWithoutIntegrationDefaultInput;
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  team: TeamCreateNestedOneWithoutIntegrationDefaultInput;
  type: IntegrationDefaultType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationDefaultCreateWithoutTeamInput = {
  account: AccountCreateNestedOneWithoutIntegrationDefaultInput;
  config: Scalars['Json'];
  createdAt?: Maybe<Scalars['DateTime']>;
  owner: UserCreateNestedOneWithoutIntegrationDefaultInput;
  type: IntegrationDefaultType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IntegrationDefaultListRelationFilter = {
  every?: Maybe<IntegrationDefaultWhereInput>;
  none?: Maybe<IntegrationDefaultWhereInput>;
  some?: Maybe<IntegrationDefaultWhereInput>;
};

export type IntegrationDefaultScalarWhereInput = {
  accountId?: Maybe<StringFilter>;
  AND?: Maybe<Array<IntegrationDefaultScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<IntegrationDefaultScalarWhereInput>>;
  OR?: Maybe<Array<IntegrationDefaultScalarWhereInput>>;
  ownerId?: Maybe<StringFilter>;
  teamId?: Maybe<StringFilter>;
  type?: Maybe<EnumIntegrationDefaultTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type IntegrationDefaultTeamIdAccountIdTypeCompoundUniqueInput = {
  accountId: Scalars['String'];
  teamId: Scalars['String'];
  type: IntegrationDefaultType;
};

export enum IntegrationDefaultType {
  ACCOUNT = 'ACCOUNT',
  RESULTMAP = 'RESULTMAP'
}

export type IntegrationDefaultUpdateManyMutationInput = {
  config?: Maybe<Scalars['Json']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  type?: Maybe<EnumIntegrationDefaultTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationDefaultUpdateManyWithoutAccountInput = {
  connect?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationDefaultCreateOrConnectWithoutAccountInput>>;
  create?: Maybe<Array<IntegrationDefaultCreateWithoutAccountInput>>;
  createMany?: Maybe<IntegrationDefaultCreateManyAccountInputEnvelope>;
  delete?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IntegrationDefaultScalarWhereInput>>;
  disconnect?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  set?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  update?: Maybe<Array<IntegrationDefaultUpdateWithWhereUniqueWithoutAccountInput>>;
  updateMany?: Maybe<Array<IntegrationDefaultUpdateManyWithWhereWithoutAccountInput>>;
  upsert?: Maybe<Array<IntegrationDefaultUpsertWithWhereUniqueWithoutAccountInput>>;
};

export type IntegrationDefaultUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationDefaultCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<IntegrationDefaultCreateWithoutOwnerInput>>;
  createMany?: Maybe<IntegrationDefaultCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IntegrationDefaultScalarWhereInput>>;
  disconnect?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  set?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  update?: Maybe<Array<IntegrationDefaultUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<IntegrationDefaultUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<IntegrationDefaultUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type IntegrationDefaultUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationDefaultCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<IntegrationDefaultCreateWithoutTeamInput>>;
  createMany?: Maybe<IntegrationDefaultCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IntegrationDefaultScalarWhereInput>>;
  disconnect?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  set?: Maybe<Array<IntegrationDefaultWhereUniqueInput>>;
  update?: Maybe<Array<IntegrationDefaultUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<IntegrationDefaultUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<IntegrationDefaultUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type IntegrationDefaultUpdateManyWithWhereWithoutAccountInput = {
  data: IntegrationDefaultUpdateManyMutationInput;
  where: IntegrationDefaultScalarWhereInput;
};

export type IntegrationDefaultUpdateManyWithWhereWithoutOwnerInput = {
  data: IntegrationDefaultUpdateManyMutationInput;
  where: IntegrationDefaultScalarWhereInput;
};

export type IntegrationDefaultUpdateManyWithWhereWithoutTeamInput = {
  data: IntegrationDefaultUpdateManyMutationInput;
  where: IntegrationDefaultScalarWhereInput;
};

export type IntegrationDefaultUpdateWithoutAccountInput = {
  config?: Maybe<Scalars['Json']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutIntegrationDefaultInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIntegrationDefaultInput>;
  type?: Maybe<EnumIntegrationDefaultTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationDefaultUpdateWithoutOwnerInput = {
  account?: Maybe<AccountUpdateOneRequiredWithoutIntegrationDefaultInput>;
  config?: Maybe<Scalars['Json']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIntegrationDefaultInput>;
  type?: Maybe<EnumIntegrationDefaultTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationDefaultUpdateWithoutTeamInput = {
  account?: Maybe<AccountUpdateOneRequiredWithoutIntegrationDefaultInput>;
  config?: Maybe<Scalars['Json']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutIntegrationDefaultInput>;
  type?: Maybe<EnumIntegrationDefaultTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationDefaultUpdateWithWhereUniqueWithoutAccountInput = {
  data: IntegrationDefaultUpdateWithoutAccountInput;
  where: IntegrationDefaultWhereUniqueInput;
};

export type IntegrationDefaultUpdateWithWhereUniqueWithoutOwnerInput = {
  data: IntegrationDefaultUpdateWithoutOwnerInput;
  where: IntegrationDefaultWhereUniqueInput;
};

export type IntegrationDefaultUpdateWithWhereUniqueWithoutTeamInput = {
  data: IntegrationDefaultUpdateWithoutTeamInput;
  where: IntegrationDefaultWhereUniqueInput;
};

export type IntegrationDefaultUpsertWithWhereUniqueWithoutAccountInput = {
  create: IntegrationDefaultCreateWithoutAccountInput;
  update: IntegrationDefaultUpdateWithoutAccountInput;
  where: IntegrationDefaultWhereUniqueInput;
};

export type IntegrationDefaultUpsertWithWhereUniqueWithoutOwnerInput = {
  create: IntegrationDefaultCreateWithoutOwnerInput;
  update: IntegrationDefaultUpdateWithoutOwnerInput;
  where: IntegrationDefaultWhereUniqueInput;
};

export type IntegrationDefaultUpsertWithWhereUniqueWithoutTeamInput = {
  create: IntegrationDefaultCreateWithoutTeamInput;
  update: IntegrationDefaultUpdateWithoutTeamInput;
  where: IntegrationDefaultWhereUniqueInput;
};

export type IntegrationDefaultWhereInput = {
  account?: Maybe<AccountWhereInput>;
  accountId?: Maybe<StringFilter>;
  AND?: Maybe<Array<IntegrationDefaultWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<IntegrationDefaultWhereInput>>;
  OR?: Maybe<Array<IntegrationDefaultWhereInput>>;
  owner?: Maybe<UserWhereInput>;
  ownerId?: Maybe<StringFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  type?: Maybe<EnumIntegrationDefaultTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type IntegrationDefaultWhereUniqueInput = {
  teamId_accountId_type?: Maybe<IntegrationDefaultTeamIdAccountIdTypeCompoundUniqueInput>;
};

export type IntegrationListRelationFilter = {
  every?: Maybe<IntegrationWhereInput>;
  none?: Maybe<IntegrationWhereInput>;
  some?: Maybe<IntegrationWhereInput>;
};

export type IntegrationOrderByInput = {
  accountId?: Maybe<SortOrder>;
  config?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  funnelNodeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastRun?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  progress?: Maybe<SortOrder>;
  resultTypes?: Maybe<SortOrder>;
  taskerIds?: Maybe<SortOrder>;
  taskerSchedule?: Maybe<SortOrder>;
  taskStatus?: Maybe<SortOrder>;
  taskType?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type IntegrationScalarWhereInput = {
  accountId?: Maybe<StringNullableFilter>;
  AND?: Maybe<Array<IntegrationScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  funnelNodeId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  lastRun?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<IntegrationScalarWhereInput>>;
  OR?: Maybe<Array<IntegrationScalarWhereInput>>;
  ownerId?: Maybe<StringFilter>;
  progress?: Maybe<FloatNullableFilter>;
  resultTypes?: Maybe<JsonNullableFilter>;
  taskerIds?: Maybe<StringNullableListFilter>;
  taskerSchedule?: Maybe<EnumIntegrationScheduleTypeFilter>;
  taskStatus?: Maybe<EnumIntegrationStatusTypeFilter>;
  taskType?: Maybe<EnumIntegrationTaskTypeFilter>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export enum IntegrationScheduleType {
  DAILY = 'DAILY',
  MONTHLY = 'MONTHLY',
  ONCE = 'ONCE',
  WEEKLY = 'WEEKLY'
}

export type IntegrationStats = {
  __typename?: 'IntegrationStats';
  error?: Maybe<Scalars['Float']>;
  ran?: Maybe<Scalars['Float']>;
  running?: Maybe<Scalars['Float']>;
  success?: Maybe<Scalars['Float']>;
};

export enum IntegrationStatusType {
  CANCELLED = 'CANCELLED',
  CREATED = 'CREATED',
  ERROR = 'ERROR',
  RUNNING = 'RUNNING',
  SUCCESS = 'SUCCESS'
}

export enum IntegrationTaskType {
  ACCOUNT = 'ACCOUNT',
  CAMPAIGN = 'CAMPAIGN',
  CAMPAIGNRESULT = 'CAMPAIGNRESULT',
  FUNNEL = 'FUNNEL'
}

export type IntegrationUpdateManyMutationInput = {
  config?: Maybe<Scalars['Json']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastRun?: Maybe<DateTimeFieldUpdateOperationsInput>;
  progress?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationUpdatetaskerIdsInput>;
  taskerSchedule?: Maybe<EnumIntegrationScheduleTypeFieldUpdateOperationsInput>;
  taskStatus?: Maybe<EnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  taskType?: Maybe<EnumIntegrationTaskTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationUpdateManyWithoutAccountInput = {
  connect?: Maybe<Array<IntegrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationCreateOrConnectWithoutAccountInput>>;
  create?: Maybe<Array<IntegrationCreateWithoutAccountInput>>;
  createMany?: Maybe<IntegrationCreateManyAccountInputEnvelope>;
  delete?: Maybe<Array<IntegrationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IntegrationScalarWhereInput>>;
  disconnect?: Maybe<Array<IntegrationWhereUniqueInput>>;
  set?: Maybe<Array<IntegrationWhereUniqueInput>>;
  update?: Maybe<Array<IntegrationUpdateWithWhereUniqueWithoutAccountInput>>;
  updateMany?: Maybe<Array<IntegrationUpdateManyWithWhereWithoutAccountInput>>;
  upsert?: Maybe<Array<IntegrationUpsertWithWhereUniqueWithoutAccountInput>>;
};

export type IntegrationUpdateManyWithoutFunnelNodeInput = {
  connect?: Maybe<Array<IntegrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationCreateOrConnectWithoutFunnelNodeInput>>;
  create?: Maybe<Array<IntegrationCreateWithoutFunnelNodeInput>>;
  createMany?: Maybe<IntegrationCreateManyFunnelNodeInputEnvelope>;
  delete?: Maybe<Array<IntegrationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IntegrationScalarWhereInput>>;
  disconnect?: Maybe<Array<IntegrationWhereUniqueInput>>;
  set?: Maybe<Array<IntegrationWhereUniqueInput>>;
  update?: Maybe<Array<IntegrationUpdateWithWhereUniqueWithoutFunnelNodeInput>>;
  updateMany?: Maybe<Array<IntegrationUpdateManyWithWhereWithoutFunnelNodeInput>>;
  upsert?: Maybe<Array<IntegrationUpsertWithWhereUniqueWithoutFunnelNodeInput>>;
};

export type IntegrationUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<IntegrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<IntegrationCreateWithoutOwnerInput>>;
  createMany?: Maybe<IntegrationCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<IntegrationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IntegrationScalarWhereInput>>;
  disconnect?: Maybe<Array<IntegrationWhereUniqueInput>>;
  set?: Maybe<Array<IntegrationWhereUniqueInput>>;
  update?: Maybe<Array<IntegrationUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<IntegrationUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<IntegrationUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type IntegrationUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<IntegrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IntegrationCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<IntegrationCreateWithoutTeamInput>>;
  createMany?: Maybe<IntegrationCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<IntegrationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IntegrationScalarWhereInput>>;
  disconnect?: Maybe<Array<IntegrationWhereUniqueInput>>;
  set?: Maybe<Array<IntegrationWhereUniqueInput>>;
  update?: Maybe<Array<IntegrationUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<IntegrationUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<IntegrationUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type IntegrationUpdateManyWithWhereWithoutAccountInput = {
  data: IntegrationUpdateManyMutationInput;
  where: IntegrationScalarWhereInput;
};

export type IntegrationUpdateManyWithWhereWithoutFunnelNodeInput = {
  data: IntegrationUpdateManyMutationInput;
  where: IntegrationScalarWhereInput;
};

export type IntegrationUpdateManyWithWhereWithoutOwnerInput = {
  data: IntegrationUpdateManyMutationInput;
  where: IntegrationScalarWhereInput;
};

export type IntegrationUpdateManyWithWhereWithoutTeamInput = {
  data: IntegrationUpdateManyMutationInput;
  where: IntegrationScalarWhereInput;
};

export type IntegrationUpdateOneWithoutCampaignInput = {
  connect?: Maybe<IntegrationWhereUniqueInput>;
  connectOrCreate?: Maybe<IntegrationCreateOrConnectWithoutCampaignInput>;
  create?: Maybe<IntegrationCreateWithoutCampaignInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<IntegrationUpdateWithoutCampaignInput>;
  upsert?: Maybe<IntegrationUpsertWithoutCampaignInput>;
};

export type IntegrationUpdateOneWithoutFunnelDataPointValueInput = {
  connect?: Maybe<IntegrationWhereUniqueInput>;
  connectOrCreate?: Maybe<IntegrationCreateOrConnectWithoutFunnelDataPointValueInput>;
  create?: Maybe<IntegrationCreateWithoutFunnelDataPointValueInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<IntegrationUpdateWithoutFunnelDataPointValueInput>;
  upsert?: Maybe<IntegrationUpsertWithoutFunnelDataPointValueInput>;
};

export type IntegrationUpdateOneWithoutGoalDataPointValueInput = {
  connect?: Maybe<IntegrationWhereUniqueInput>;
  connectOrCreate?: Maybe<IntegrationCreateOrConnectWithoutGoalDataPointValueInput>;
  create?: Maybe<IntegrationCreateWithoutGoalDataPointValueInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<IntegrationUpdateWithoutGoalDataPointValueInput>;
  upsert?: Maybe<IntegrationUpsertWithoutGoalDataPointValueInput>;
};

export type IntegrationUpdatetaskerIdsInput = {
  push?: Maybe<Scalars['String']>;
  set?: Maybe<Array<Scalars['String']>>;
};

export type IntegrationUpdateWithoutAccountInput = {
  campaign?: Maybe<CampaignUpdateManyWithoutIntegrationInput>;
  config?: Maybe<Scalars['Json']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueUpdateManyWithoutIntegrationInput>;
  funnelNode?: Maybe<FunnelNodeUpdateOneWithoutIntegrationInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutIntegrationInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastRun?: Maybe<DateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutIntegrationsInput>;
  progress?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationUpdatetaskerIdsInput>;
  taskerSchedule?: Maybe<EnumIntegrationScheduleTypeFieldUpdateOperationsInput>;
  taskStatus?: Maybe<EnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  taskType?: Maybe<EnumIntegrationTaskTypeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIntegrationInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationUpdateWithoutCampaignInput = {
  account?: Maybe<AccountUpdateOneWithoutIntegrationInput>;
  config?: Maybe<Scalars['Json']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueUpdateManyWithoutIntegrationInput>;
  funnelNode?: Maybe<FunnelNodeUpdateOneWithoutIntegrationInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutIntegrationInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastRun?: Maybe<DateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutIntegrationsInput>;
  progress?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationUpdatetaskerIdsInput>;
  taskerSchedule?: Maybe<EnumIntegrationScheduleTypeFieldUpdateOperationsInput>;
  taskStatus?: Maybe<EnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  taskType?: Maybe<EnumIntegrationTaskTypeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIntegrationInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationUpdateWithoutFunnelDataPointValueInput = {
  account?: Maybe<AccountUpdateOneWithoutIntegrationInput>;
  campaign?: Maybe<CampaignUpdateManyWithoutIntegrationInput>;
  config?: Maybe<Scalars['Json']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  funnelNode?: Maybe<FunnelNodeUpdateOneWithoutIntegrationInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutIntegrationInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastRun?: Maybe<DateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutIntegrationsInput>;
  progress?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationUpdatetaskerIdsInput>;
  taskerSchedule?: Maybe<EnumIntegrationScheduleTypeFieldUpdateOperationsInput>;
  taskStatus?: Maybe<EnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  taskType?: Maybe<EnumIntegrationTaskTypeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIntegrationInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationUpdateWithoutFunnelNodeInput = {
  account?: Maybe<AccountUpdateOneWithoutIntegrationInput>;
  campaign?: Maybe<CampaignUpdateManyWithoutIntegrationInput>;
  config?: Maybe<Scalars['Json']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueUpdateManyWithoutIntegrationInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutIntegrationInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastRun?: Maybe<DateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutIntegrationsInput>;
  progress?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationUpdatetaskerIdsInput>;
  taskerSchedule?: Maybe<EnumIntegrationScheduleTypeFieldUpdateOperationsInput>;
  taskStatus?: Maybe<EnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  taskType?: Maybe<EnumIntegrationTaskTypeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIntegrationInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationUpdateWithoutGoalDataPointValueInput = {
  account?: Maybe<AccountUpdateOneWithoutIntegrationInput>;
  campaign?: Maybe<CampaignUpdateManyWithoutIntegrationInput>;
  config?: Maybe<Scalars['Json']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueUpdateManyWithoutIntegrationInput>;
  funnelNode?: Maybe<FunnelNodeUpdateOneWithoutIntegrationInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastRun?: Maybe<DateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutIntegrationsInput>;
  progress?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationUpdatetaskerIdsInput>;
  taskerSchedule?: Maybe<EnumIntegrationScheduleTypeFieldUpdateOperationsInput>;
  taskStatus?: Maybe<EnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  taskType?: Maybe<EnumIntegrationTaskTypeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIntegrationInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationUpdateWithoutOwnerInput = {
  account?: Maybe<AccountUpdateOneWithoutIntegrationInput>;
  campaign?: Maybe<CampaignUpdateManyWithoutIntegrationInput>;
  config?: Maybe<Scalars['Json']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueUpdateManyWithoutIntegrationInput>;
  funnelNode?: Maybe<FunnelNodeUpdateOneWithoutIntegrationInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutIntegrationInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastRun?: Maybe<DateTimeFieldUpdateOperationsInput>;
  progress?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationUpdatetaskerIdsInput>;
  taskerSchedule?: Maybe<EnumIntegrationScheduleTypeFieldUpdateOperationsInput>;
  taskStatus?: Maybe<EnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  taskType?: Maybe<EnumIntegrationTaskTypeFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutIntegrationInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationUpdateWithoutTeamInput = {
  account?: Maybe<AccountUpdateOneWithoutIntegrationInput>;
  campaign?: Maybe<CampaignUpdateManyWithoutIntegrationInput>;
  config?: Maybe<Scalars['Json']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueUpdateManyWithoutIntegrationInput>;
  funnelNode?: Maybe<FunnelNodeUpdateOneWithoutIntegrationInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutIntegrationInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastRun?: Maybe<DateTimeFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutIntegrationsInput>;
  progress?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  resultTypes?: Maybe<Scalars['Json']>;
  taskerIds?: Maybe<IntegrationUpdatetaskerIdsInput>;
  taskerSchedule?: Maybe<EnumIntegrationScheduleTypeFieldUpdateOperationsInput>;
  taskStatus?: Maybe<EnumIntegrationStatusTypeFieldUpdateOperationsInput>;
  taskType?: Maybe<EnumIntegrationTaskTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntegrationUpdateWithWhereUniqueWithoutAccountInput = {
  data: IntegrationUpdateWithoutAccountInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationUpdateWithWhereUniqueWithoutFunnelNodeInput = {
  data: IntegrationUpdateWithoutFunnelNodeInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationUpdateWithWhereUniqueWithoutOwnerInput = {
  data: IntegrationUpdateWithoutOwnerInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationUpdateWithWhereUniqueWithoutTeamInput = {
  data: IntegrationUpdateWithoutTeamInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationUpsertWithoutCampaignInput = {
  create: IntegrationCreateWithoutCampaignInput;
  update: IntegrationUpdateWithoutCampaignInput;
};

export type IntegrationUpsertWithoutFunnelDataPointValueInput = {
  create: IntegrationCreateWithoutFunnelDataPointValueInput;
  update: IntegrationUpdateWithoutFunnelDataPointValueInput;
};

export type IntegrationUpsertWithoutGoalDataPointValueInput = {
  create: IntegrationCreateWithoutGoalDataPointValueInput;
  update: IntegrationUpdateWithoutGoalDataPointValueInput;
};

export type IntegrationUpsertWithWhereUniqueWithoutAccountInput = {
  create: IntegrationCreateWithoutAccountInput;
  update: IntegrationUpdateWithoutAccountInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationUpsertWithWhereUniqueWithoutFunnelNodeInput = {
  create: IntegrationCreateWithoutFunnelNodeInput;
  update: IntegrationUpdateWithoutFunnelNodeInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationUpsertWithWhereUniqueWithoutOwnerInput = {
  create: IntegrationCreateWithoutOwnerInput;
  update: IntegrationUpdateWithoutOwnerInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationUpsertWithWhereUniqueWithoutTeamInput = {
  create: IntegrationCreateWithoutTeamInput;
  update: IntegrationUpdateWithoutTeamInput;
  where: IntegrationWhereUniqueInput;
};

export type IntegrationWhereInput = {
  account?: Maybe<AccountWhereInput>;
  accountId?: Maybe<StringNullableFilter>;
  AND?: Maybe<Array<IntegrationWhereInput>>;
  campaign?: Maybe<CampaignListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  funnelDataPointValue?: Maybe<FunnelDataPointValueListRelationFilter>;
  funnelNode?: Maybe<FunnelNodeWhereInput>;
  funnelNodeId?: Maybe<StringNullableFilter>;
  goalDataPointValue?: Maybe<GoalDataPointValueListRelationFilter>;
  id?: Maybe<StringFilter>;
  lastRun?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<IntegrationWhereInput>>;
  OR?: Maybe<Array<IntegrationWhereInput>>;
  owner?: Maybe<UserWhereInput>;
  ownerId?: Maybe<StringFilter>;
  progress?: Maybe<FloatNullableFilter>;
  resultTypes?: Maybe<JsonNullableFilter>;
  taskerIds?: Maybe<StringNullableListFilter>;
  taskerSchedule?: Maybe<EnumIntegrationScheduleTypeFilter>;
  taskStatus?: Maybe<EnumIntegrationStatusTypeFilter>;
  taskType?: Maybe<EnumIntegrationTaskTypeFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type IntegrationWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};


export type JsonNullableFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export type MonthlyBreakdown = {
  __typename?: 'MonthlyBreakdown';
  contribution?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MonthlyContribution = {
  __typename?: 'MonthlyContribution';
  /** The percentage that this campaign contributes to this month's expectation */
  contribution?: Maybe<Scalars['Float']>;
  /** The ID of the campaign that is contributing */
  id?: Maybe<Scalars['String']>;
  /** The name of the campaign that is contributing */
  name?: Maybe<Scalars['String']>;
};

export type MonthlyDataPointValues = {
  __typename?: 'MonthlyDataPointValues';
  point_month?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  total_value?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates an Integration record, the Campaigns selected by user and sends the campaign tasks to Tasker to fetch the campaign results  */
  createOneBulkImportIntegration?: Maybe<Integration>;
  createOneCampaign: Campaign;
  createOneCampaignGroup: CampaignGroup;
  createOneComment: Comment;
  createOneFunnelIntegration?: Maybe<Scalars['Boolean']>;
  createOneGoal: Goal;
  createOneIdea: Idea;
  createOneIdeaSession: IdeaSession;
  /** Creates an Integration record, the Campaign selected by user and sends the campaign tasks to Tasker to fetch the campaign results  */
  createOneImportIntegration?: Maybe<Integration>;
  createOneNotification: Notification;
  createOneProgressDataPoint: ProgressDataPoint;
  createOneRetrospective: Retrospective;
  createOneTag: Tag;
  createOneTask: Task;
  createOneTeam: Team;
  createOneTeamForUser?: Maybe<Team>;
  createOneUser: User;
  createStrategy?: Maybe<GoalDataPoint>;
  deleteManyCampaign: AffectedRowsOutput;
  deleteManyComment: AffectedRowsOutput;
  deleteManyFunnelDataPointValue: AffectedRowsOutput;
  deleteManyIdea: AffectedRowsOutput;
  deleteManyNotification: AffectedRowsOutput;
  deleteManyTag: AffectedRowsOutput;
  deleteOneCampaign?: Maybe<Campaign>;
  deleteOneCampaignGroup?: Maybe<CampaignGroup>;
  deleteOneChannel?: Maybe<Channel>;
  deleteOneComment?: Maybe<Comment>;
  deleteOneFunnel?: Maybe<Funnel>;
  deleteOneFunnelNodeIntegration?: Maybe<Scalars['Boolean']>;
  deleteOneGoal?: Maybe<Goal>;
  deleteOneGoalDataPoint?: Maybe<GoalDataPoint>;
  deleteOneIdea?: Maybe<Idea>;
  deleteOneIntegration?: Maybe<Integration>;
  deleteOneNotification?: Maybe<Notification>;
  deleteOneProvider?: Maybe<Scalars['Boolean']>;
  deleteOneTag?: Maybe<Tag>;
  deleteOneTask?: Maybe<Task>;
  deleteOneUser?: Maybe<User>;
  /** Disconnect a single campaign from it's connected integration. This will remove the connection between the campaign and the integration tableand also remove the campaign's connection to tasker - both by removing thecampaign-task id from the integration row, and also by cancelling the task in tasker.The data from the previous integration is preserved. */
  disconnectCampaignIntegration?: Maybe<CampaignDisconnectionResponse>;
  updateCurrentFunnel?: Maybe<Scalars['Boolean']>;
  updateOneCampaign?: Maybe<Campaign>;
  updateOneCampaignGroup?: Maybe<CampaignGroup>;
  /** Updates both the 'returnValue' and 'spend' of a campaign in a single mutation.This mutation should be called via a front-end component that is itended to influence a manual roi resultby changing the spend/return associated with the campaign. The campaign roi_lock will implicitly be set to truewhen calling this mutation. */
  updateOneCampaignManualRoi?: Maybe<Campaign>;
  updateOneCampaignResult?: Maybe<Campaign>;
  updateOneCampaignSpend?: Maybe<Campaign>;
  updateOneComment?: Maybe<Comment>;
  updateOneFunnel?: Maybe<Funnel>;
  updateOneGoal?: Maybe<Goal>;
  updateOneGoalDataPointValue?: Maybe<GoalDataPointValue>;
  updateOneIdea?: Maybe<Idea>;
  updateOneIdeaSession?: Maybe<IdeaSession>;
  /** Update the result metric map for a campaign */
  updateOneIntegrationResultMap?: Maybe<Integration>;
  updateOneNotification?: Maybe<Notification>;
  updateOneProgressDataPoint?: Maybe<ProgressDataPoint>;
  updateOneRetrospective?: Maybe<Retrospective>;
  updateOneRetrospectiveAction?: Maybe<RetrospectiveAction>;
  updateOneTag?: Maybe<Tag>;
  updateOneTask?: Maybe<Task>;
  updateOneTeam?: Maybe<Team>;
  updateOneUser?: Maybe<User>;
  upsertOneProgressDataPoint: ProgressDataPoint;
  upsertOneRetrospectiveAction: RetrospectiveAction;
};


export type MutationCreateOneBulkImportIntegrationArgs = {
  account?: Maybe<ProviderAccountArgs>;
  providerCampaigns?: Maybe<Array<Maybe<ProviderCampaignArgs>>>;
  providerId?: Maybe<Scalars['String']>;
  resultMetricMap?: Maybe<Array<Maybe<ResultMetricMapArgs>>>;
};


export type MutationCreateOneCampaignArgs = {
  data: CampaignCreateInput;
};


export type MutationCreateOneCampaignGroupArgs = {
  data: CampaignGroupCreateInput;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOneFunnelIntegrationArgs = {
  data?: Maybe<InputIntegration>;
};


export type MutationCreateOneGoalArgs = {
  data: GoalCreateInput;
};


export type MutationCreateOneIdeaArgs = {
  data: IdeaCreateInput;
};


export type MutationCreateOneIdeaSessionArgs = {
  data: IdeaSessionCreateInput;
};


export type MutationCreateOneImportIntegrationArgs = {
  account?: Maybe<ProviderAccountArgs>;
  campaignId?: Maybe<Scalars['String']>;
  providerCampaign?: Maybe<ProviderCampaignArgs>;
  providerId?: Maybe<Scalars['String']>;
  resultMetricMap?: Maybe<Array<Maybe<ResultMetricMapArgs>>>;
};


export type MutationCreateOneNotificationArgs = {
  data: NotificationCreateInput;
};


export type MutationCreateOneProgressDataPointArgs = {
  data: ProgressDataPointCreateInput;
};


export type MutationCreateOneRetrospectiveArgs = {
  data: RetrospectiveCreateInput;
};


export type MutationCreateOneTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateOneTaskArgs = {
  data: TaskCreateInput;
};


export type MutationCreateOneTeamArgs = {
  data: TeamCreateInput;
};


export type MutationCreateOneTeamForUserArgs = {
  industry?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateStrategyArgs = {
  dataType?: Maybe<GoalDataType>;
  goalId?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  statements?: Maybe<Array<Maybe<StrategyInput>>>;
  year?: Maybe<Scalars['Int']>;
};


export type MutationDeleteManyCampaignArgs = {
  where?: Maybe<CampaignWhereInput>;
};


export type MutationDeleteManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type MutationDeleteManyFunnelDataPointValueArgs = {
  where?: Maybe<FunnelDataPointValueWhereInput>;
};


export type MutationDeleteManyIdeaArgs = {
  where?: Maybe<IdeaWhereInput>;
};


export type MutationDeleteManyNotificationArgs = {
  where?: Maybe<NotificationWhereInput>;
};


export type MutationDeleteManyTagArgs = {
  where?: Maybe<TagWhereInput>;
};


export type MutationDeleteOneCampaignArgs = {
  where: CampaignWhereUniqueInput;
};


export type MutationDeleteOneCampaignGroupArgs = {
  where: CampaignGroupWhereUniqueInput;
};


export type MutationDeleteOneChannelArgs = {
  where: ChannelWhereUniqueInput;
};


export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteOneFunnelArgs = {
  where: FunnelWhereUniqueInput;
};


export type MutationDeleteOneFunnelNodeIntegrationArgs = {
  funnelNodeId?: Maybe<Scalars['String']>;
};


export type MutationDeleteOneGoalArgs = {
  where: GoalWhereUniqueInput;
};


export type MutationDeleteOneGoalDataPointArgs = {
  where: GoalDataPointWhereUniqueInput;
};


export type MutationDeleteOneIdeaArgs = {
  where: IdeaWhereUniqueInput;
};


export type MutationDeleteOneIntegrationArgs = {
  where: IntegrationWhereUniqueInput;
};


export type MutationDeleteOneNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type MutationDeleteOneProviderArgs = {
  providerId?: Maybe<Scalars['String']>;
};


export type MutationDeleteOneTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteOneTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDisconnectCampaignIntegrationArgs = {
  campaignId?: Maybe<Scalars['String']>;
};


export type MutationUpdateCurrentFunnelArgs = {
  data?: Maybe<InputFunnel>;
};


export type MutationUpdateOneCampaignArgs = {
  data: CampaignUpdateInput;
  where: CampaignWhereUniqueInput;
};


export type MutationUpdateOneCampaignGroupArgs = {
  data: CampaignGroupUpdateInput;
  where: CampaignGroupWhereUniqueInput;
};


export type MutationUpdateOneCampaignManualRoiArgs = {
  campaignId?: Maybe<Scalars['String']>;
  returnValue?: Maybe<Scalars['Float']>;
  spendValue?: Maybe<Scalars['Float']>;
};


export type MutationUpdateOneCampaignResultArgs = {
  campaignId?: Maybe<Scalars['String']>;
  funnelNodeId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};


export type MutationUpdateOneCampaignSpendArgs = {
  campaignId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};


export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateOneFunnelArgs = {
  data: FunnelUpdateInput;
  where: FunnelWhereUniqueInput;
};


export type MutationUpdateOneGoalArgs = {
  data: GoalUpdateInput;
  where: GoalWhereUniqueInput;
};


export type MutationUpdateOneGoalDataPointValueArgs = {
  data: GoalDataPointValueUpdateInput;
  where: GoalDataPointValueWhereUniqueInput;
};


export type MutationUpdateOneIdeaArgs = {
  data: IdeaUpdateInput;
  where: IdeaWhereUniqueInput;
};


export type MutationUpdateOneIdeaSessionArgs = {
  data: IdeaSessionUpdateInput;
  where: IdeaSessionWhereUniqueInput;
};


export type MutationUpdateOneIntegrationResultMapArgs = {
  campaignId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  resultMetricMap?: Maybe<Array<Maybe<ResultMetricMapArgs>>>;
};


export type MutationUpdateOneNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpdateOneProgressDataPointArgs = {
  data: ProgressDataPointUpdateInput;
  where: ProgressDataPointWhereUniqueInput;
};


export type MutationUpdateOneRetrospectiveArgs = {
  data: RetrospectiveUpdateInput;
  where: RetrospectiveWhereUniqueInput;
};


export type MutationUpdateOneRetrospectiveActionArgs = {
  data: RetrospectiveActionUpdateInput;
  where: RetrospectiveActionWhereUniqueInput;
};


export type MutationUpdateOneTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateOneTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpdateOneTeamArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneProgressDataPointArgs = {
  create: ProgressDataPointCreateInput;
  update: ProgressDataPointUpdateInput;
  where: ProgressDataPointWhereUniqueInput;
};


export type MutationUpsertOneRetrospectiveActionArgs = {
  create: RetrospectiveActionCreateInput;
  update: RetrospectiveActionUpdateInput;
  where: RetrospectiveActionWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumCampaignDataValueTypeFilter = {
  equals?: Maybe<CampaignDataValueType>;
  in?: Maybe<Array<CampaignDataValueType>>;
  not?: Maybe<NestedEnumCampaignDataValueTypeFilter>;
  notIn?: Maybe<Array<CampaignDataValueType>>;
};

export type NestedEnumCampaignStateFilter = {
  equals?: Maybe<CampaignState>;
  in?: Maybe<Array<CampaignState>>;
  not?: Maybe<NestedEnumCampaignStateFilter>;
  notIn?: Maybe<Array<CampaignState>>;
};

export type NestedEnumCommentTypeFilter = {
  equals?: Maybe<CommentType>;
  in?: Maybe<Array<CommentType>>;
  not?: Maybe<NestedEnumCommentTypeFilter>;
  notIn?: Maybe<Array<CommentType>>;
};

export type NestedEnumFunnelDataPointSourceFilter = {
  equals?: Maybe<FunnelDataPointSource>;
  in?: Maybe<Array<FunnelDataPointSource>>;
  not?: Maybe<NestedEnumFunnelDataPointSourceFilter>;
  notIn?: Maybe<Array<FunnelDataPointSource>>;
};

export type NestedEnumGoalDataPointValueProviderFilter = {
  equals?: Maybe<GoalDataPointValueProvider>;
  in?: Maybe<Array<GoalDataPointValueProvider>>;
  not?: Maybe<NestedEnumGoalDataPointValueProviderFilter>;
  notIn?: Maybe<Array<GoalDataPointValueProvider>>;
};

export type NestedEnumGoalDataTypeFilter = {
  equals?: Maybe<GoalDataType>;
  in?: Maybe<Array<GoalDataType>>;
  not?: Maybe<NestedEnumGoalDataTypeFilter>;
  notIn?: Maybe<Array<GoalDataType>>;
};

export type NestedEnumIntegrationDefaultTypeFilter = {
  equals?: Maybe<IntegrationDefaultType>;
  in?: Maybe<Array<IntegrationDefaultType>>;
  not?: Maybe<NestedEnumIntegrationDefaultTypeFilter>;
  notIn?: Maybe<Array<IntegrationDefaultType>>;
};

export type NestedEnumIntegrationScheduleTypeFilter = {
  equals?: Maybe<IntegrationScheduleType>;
  in?: Maybe<Array<IntegrationScheduleType>>;
  not?: Maybe<NestedEnumIntegrationScheduleTypeFilter>;
  notIn?: Maybe<Array<IntegrationScheduleType>>;
};

export type NestedEnumIntegrationStatusTypeFilter = {
  equals?: Maybe<IntegrationStatusType>;
  in?: Maybe<Array<IntegrationStatusType>>;
  not?: Maybe<NestedEnumIntegrationStatusTypeFilter>;
  notIn?: Maybe<Array<IntegrationStatusType>>;
};

export type NestedEnumIntegrationStatusTypeNullableFilter = {
  equals?: Maybe<IntegrationStatusType>;
  in?: Maybe<Array<IntegrationStatusType>>;
  not?: Maybe<NestedEnumIntegrationStatusTypeNullableFilter>;
  notIn?: Maybe<Array<IntegrationStatusType>>;
};

export type NestedEnumIntegrationTaskTypeFilter = {
  equals?: Maybe<IntegrationTaskType>;
  in?: Maybe<Array<IntegrationTaskType>>;
  not?: Maybe<NestedEnumIntegrationTaskTypeFilter>;
  notIn?: Maybe<Array<IntegrationTaskType>>;
};

export type NestedEnumNotificationTypeFilter = {
  equals?: Maybe<NotificationType>;
  in?: Maybe<Array<NotificationType>>;
  not?: Maybe<NestedEnumNotificationTypeFilter>;
  notIn?: Maybe<Array<NotificationType>>;
};

export type NestedEnumProgressDataPointTypeFilter = {
  equals?: Maybe<ProgressDataPointType>;
  in?: Maybe<Array<ProgressDataPointType>>;
  not?: Maybe<NestedEnumProgressDataPointTypeFilter>;
  notIn?: Maybe<Array<ProgressDataPointType>>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type NestedEnumStatementTrackingNullableFilter = {
  equals?: Maybe<StatementTracking>;
  in?: Maybe<Array<StatementTracking>>;
  not?: Maybe<NestedEnumStatementTrackingNullableFilter>;
  notIn?: Maybe<Array<StatementTracking>>;
};

export type NestedEnumSubscriptionStatusFilter = {
  equals?: Maybe<SubscriptionStatus>;
  in?: Maybe<Array<SubscriptionStatus>>;
  not?: Maybe<NestedEnumSubscriptionStatusFilter>;
  notIn?: Maybe<Array<SubscriptionStatus>>;
};

export type NestedEnumTaskTypeFilter = {
  equals?: Maybe<TaskType>;
  in?: Maybe<Array<TaskType>>;
  not?: Maybe<NestedEnumTaskTypeFilter>;
  notIn?: Maybe<Array<TaskType>>;
};

export type NestedEnumUserTypeFilter = {
  equals?: Maybe<UserType>;
  in?: Maybe<Array<UserType>>;
  not?: Maybe<NestedEnumUserTypeFilter>;
  notIn?: Maybe<Array<UserType>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  fromUser?: Maybe<User>;
  id: Scalars['String'];
  link: Scalars['String'];
  read: Scalars['Boolean'];
  team: Team;
  teamId: Scalars['String'];
  title: Scalars['String'];
  type: NotificationType;
  user: User;
  userId: Scalars['String'];
};

export type NotificationCount = {
  __typename?: 'NotificationCount';
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type NotificationCreateInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  fromUser?: Maybe<UserCreateNestedOneWithoutSentNotificationsInput>;
  id?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  read?: Maybe<Scalars['Boolean']>;
  team: TeamCreateNestedOneWithoutNotificationInput;
  title: Scalars['String'];
  type: NotificationType;
  user: UserCreateNestedOneWithoutNotificationsInput;
};

export type NotificationCreateManyFromUserInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  read?: Maybe<Scalars['Boolean']>;
  teamId: Scalars['String'];
  title: Scalars['String'];
  type: NotificationType;
  userId: Scalars['String'];
};

export type NotificationCreateManyFromUserInputEnvelope = {
  data?: Maybe<Array<NotificationCreateManyFromUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type NotificationCreateManyTeamInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  fromUserId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  read?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: NotificationType;
  userId: Scalars['String'];
};

export type NotificationCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<NotificationCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type NotificationCreateManyUserInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  fromUserId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  read?: Maybe<Scalars['Boolean']>;
  teamId: Scalars['String'];
  title: Scalars['String'];
  type: NotificationType;
};

export type NotificationCreateManyUserInputEnvelope = {
  data?: Maybe<Array<NotificationCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type NotificationCreateNestedManyWithoutFromUserInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<NotificationCreateOrConnectWithoutFromUserInput>>;
  create?: Maybe<Array<NotificationCreateWithoutFromUserInput>>;
  createMany?: Maybe<NotificationCreateManyFromUserInputEnvelope>;
};

export type NotificationCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<NotificationCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<NotificationCreateWithoutTeamInput>>;
  createMany?: Maybe<NotificationCreateManyTeamInputEnvelope>;
};

export type NotificationCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<NotificationCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: Maybe<NotificationCreateManyUserInputEnvelope>;
};

export type NotificationCreateOrConnectWithoutFromUserInput = {
  create: NotificationCreateWithoutFromUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateOrConnectWithoutTeamInput = {
  create: NotificationCreateWithoutTeamInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateOrConnectWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateWithoutFromUserInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  read?: Maybe<Scalars['Boolean']>;
  team: TeamCreateNestedOneWithoutNotificationInput;
  title: Scalars['String'];
  type: NotificationType;
  user: UserCreateNestedOneWithoutNotificationsInput;
};

export type NotificationCreateWithoutTeamInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  fromUser?: Maybe<UserCreateNestedOneWithoutSentNotificationsInput>;
  id?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  read?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  type: NotificationType;
  user: UserCreateNestedOneWithoutNotificationsInput;
};

export type NotificationCreateWithoutUserInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  fromUser?: Maybe<UserCreateNestedOneWithoutSentNotificationsInput>;
  id?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  read?: Maybe<Scalars['Boolean']>;
  team: TeamCreateNestedOneWithoutNotificationInput;
  title: Scalars['String'];
  type: NotificationType;
};

export type NotificationListRelationFilter = {
  every?: Maybe<NotificationWhereInput>;
  none?: Maybe<NotificationWhereInput>;
  some?: Maybe<NotificationWhereInput>;
};

export type NotificationOrderByInput = {
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  fromUserId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  link?: Maybe<SortOrder>;
  read?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type NotificationScalarWhereInput = {
  AND?: Maybe<Array<NotificationScalarWhereInput>>;
  content?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  fromUserId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  link?: Maybe<StringFilter>;
  NOT?: Maybe<Array<NotificationScalarWhereInput>>;
  OR?: Maybe<Array<NotificationScalarWhereInput>>;
  read?: Maybe<BoolFilter>;
  teamId?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  type?: Maybe<EnumNotificationTypeFilter>;
  userId?: Maybe<StringFilter>;
};

export enum NotificationType {
  CAMPAIGN = 'CAMPAIGN',
  IDEA = 'IDEA',
  MENTION = 'MENTION',
  OTHER = 'OTHER'
}

export type NotificationUpdateInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  fromUser?: Maybe<UserUpdateOneWithoutSentNotificationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  link?: Maybe<StringFieldUpdateOperationsInput>;
  read?: Maybe<BoolFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutNotificationInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumNotificationTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutNotificationsInput>;
};

export type NotificationUpdateManyMutationInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  link?: Maybe<StringFieldUpdateOperationsInput>;
  read?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumNotificationTypeFieldUpdateOperationsInput>;
};

export type NotificationUpdateManyWithoutFromUserInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<NotificationCreateOrConnectWithoutFromUserInput>>;
  create?: Maybe<Array<NotificationCreateWithoutFromUserInput>>;
  createMany?: Maybe<NotificationCreateManyFromUserInputEnvelope>;
  delete?: Maybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<NotificationScalarWhereInput>>;
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>;
  set?: Maybe<Array<NotificationWhereUniqueInput>>;
  update?: Maybe<Array<NotificationUpdateWithWhereUniqueWithoutFromUserInput>>;
  updateMany?: Maybe<Array<NotificationUpdateManyWithWhereWithoutFromUserInput>>;
  upsert?: Maybe<Array<NotificationUpsertWithWhereUniqueWithoutFromUserInput>>;
};

export type NotificationUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<NotificationCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<NotificationCreateWithoutTeamInput>>;
  createMany?: Maybe<NotificationCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<NotificationScalarWhereInput>>;
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>;
  set?: Maybe<Array<NotificationWhereUniqueInput>>;
  update?: Maybe<Array<NotificationUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<NotificationUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<NotificationUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type NotificationUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<NotificationCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: Maybe<NotificationCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<NotificationScalarWhereInput>>;
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>;
  set?: Maybe<Array<NotificationWhereUniqueInput>>;
  update?: Maybe<Array<NotificationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<NotificationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<NotificationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NotificationUpdateManyWithWhereWithoutFromUserInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithWhereWithoutTeamInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithWhereWithoutUserInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateWithoutFromUserInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  link?: Maybe<StringFieldUpdateOperationsInput>;
  read?: Maybe<BoolFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutNotificationInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumNotificationTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutNotificationsInput>;
};

export type NotificationUpdateWithoutTeamInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  fromUser?: Maybe<UserUpdateOneWithoutSentNotificationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  link?: Maybe<StringFieldUpdateOperationsInput>;
  read?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumNotificationTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutNotificationsInput>;
};

export type NotificationUpdateWithoutUserInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  fromUser?: Maybe<UserUpdateOneWithoutSentNotificationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  link?: Maybe<StringFieldUpdateOperationsInput>;
  read?: Maybe<BoolFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutNotificationInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumNotificationTypeFieldUpdateOperationsInput>;
};

export type NotificationUpdateWithWhereUniqueWithoutFromUserInput = {
  data: NotificationUpdateWithoutFromUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithWhereUniqueWithoutTeamInput = {
  data: NotificationUpdateWithoutTeamInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutFromUserInput = {
  create: NotificationCreateWithoutFromUserInput;
  update: NotificationUpdateWithoutFromUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutTeamInput = {
  create: NotificationCreateWithoutTeamInput;
  update: NotificationUpdateWithoutTeamInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  update: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationWhereInput = {
  AND?: Maybe<Array<NotificationWhereInput>>;
  content?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  fromUser?: Maybe<UserWhereInput>;
  fromUserId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  link?: Maybe<StringFilter>;
  NOT?: Maybe<Array<NotificationWhereInput>>;
  OR?: Maybe<Array<NotificationWhereInput>>;
  read?: Maybe<BoolFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  type?: Maybe<EnumNotificationTypeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type NotificationWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableEnumIntegrationStatusTypeFieldUpdateOperationsInput = {
  set?: Maybe<IntegrationStatusType>;
};

export type NullableEnumStatementTrackingFieldUpdateOperationsInput = {
  set?: Maybe<StatementTracking>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export enum Onboards {
  FUNNEL = 'FUNNEL',
  GOAL = 'GOAL',
  GOALTWO = 'GOALTWO',
  PAYMENT = 'PAYMENT',
  TEAM = 'TEAM',
  USER = 'USER'
}

export type Progress = {
  __typename?: 'Progress';
  predictionOnDate?: Maybe<Scalars['Float']>;
  realOnDate?: Maybe<Scalars['Float']>;
};

export type ProgressDataPoint = {
  __typename?: 'ProgressDataPoint';
  commentCount?: Maybe<Scalars['Int']>;
  comments: Array<Comment>;
  goal: Goal;
  id: Scalars['String'];
  month: Scalars['Int'];
  progress?: Maybe<Progress>;
  retrospective: Array<Retrospective>;
  teamId: Scalars['String'];
  type: ProgressDataPointType;
  year: Scalars['Int'];
};


export type ProgressDataPointCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type ProgressDataPointRetrospectiveArgs = {
  cursor?: Maybe<RetrospectiveWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ProgressDataPointCreateInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutProgressDataPointInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  goal: GoalCreateNestedOneWithoutProgressDataPointInput;
  goalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutProgressDataPointInput>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutProgressDataPointInput>;
  team: TeamCreateNestedOneWithoutProgressDataPointInput;
  type: ProgressDataPointType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type ProgressDataPointCreateManyGoalInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  teamId: Scalars['String'];
  type: ProgressDataPointType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type ProgressDataPointCreateManyGoalInputEnvelope = {
  data?: Maybe<Array<ProgressDataPointCreateManyGoalInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProgressDataPointCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  goalId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  type: ProgressDataPointType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type ProgressDataPointCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<ProgressDataPointCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProgressDataPointCreateNestedManyWithoutGoalInput = {
  connect?: Maybe<Array<ProgressDataPointWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProgressDataPointCreateOrConnectWithoutGoalInput>>;
  create?: Maybe<Array<ProgressDataPointCreateWithoutGoalInput>>;
  createMany?: Maybe<ProgressDataPointCreateManyGoalInputEnvelope>;
};

export type ProgressDataPointCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<ProgressDataPointWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProgressDataPointCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<ProgressDataPointCreateWithoutTeamInput>>;
  createMany?: Maybe<ProgressDataPointCreateManyTeamInputEnvelope>;
};

export type ProgressDataPointCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<ProgressDataPointWhereUniqueInput>;
  connectOrCreate?: Maybe<ProgressDataPointCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<ProgressDataPointCreateWithoutCommentsInput>;
};

export type ProgressDataPointCreateNestedOneWithoutGoalDataPointValueInput = {
  connect?: Maybe<ProgressDataPointWhereUniqueInput>;
  connectOrCreate?: Maybe<ProgressDataPointCreateOrConnectWithoutGoalDataPointValueInput>;
  create?: Maybe<ProgressDataPointCreateWithoutGoalDataPointValueInput>;
};

export type ProgressDataPointCreateNestedOneWithoutRetrospectiveInput = {
  connect?: Maybe<ProgressDataPointWhereUniqueInput>;
  connectOrCreate?: Maybe<ProgressDataPointCreateOrConnectWithoutRetrospectiveInput>;
  create?: Maybe<ProgressDataPointCreateWithoutRetrospectiveInput>;
};

export type ProgressDataPointCreateOrConnectWithoutCommentsInput = {
  create: ProgressDataPointCreateWithoutCommentsInput;
  where: ProgressDataPointWhereUniqueInput;
};

export type ProgressDataPointCreateOrConnectWithoutGoalDataPointValueInput = {
  create: ProgressDataPointCreateWithoutGoalDataPointValueInput;
  where: ProgressDataPointWhereUniqueInput;
};

export type ProgressDataPointCreateOrConnectWithoutGoalInput = {
  create: ProgressDataPointCreateWithoutGoalInput;
  where: ProgressDataPointWhereUniqueInput;
};

export type ProgressDataPointCreateOrConnectWithoutRetrospectiveInput = {
  create: ProgressDataPointCreateWithoutRetrospectiveInput;
  where: ProgressDataPointWhereUniqueInput;
};

export type ProgressDataPointCreateOrConnectWithoutTeamInput = {
  create: ProgressDataPointCreateWithoutTeamInput;
  where: ProgressDataPointWhereUniqueInput;
};

export type ProgressDataPointCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  goal: GoalCreateNestedOneWithoutProgressDataPointInput;
  goalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutProgressDataPointInput>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutProgressDataPointInput>;
  team: TeamCreateNestedOneWithoutProgressDataPointInput;
  type: ProgressDataPointType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type ProgressDataPointCreateWithoutGoalDataPointValueInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutProgressDataPointInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  goal: GoalCreateNestedOneWithoutProgressDataPointInput;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutProgressDataPointInput>;
  team: TeamCreateNestedOneWithoutProgressDataPointInput;
  type: ProgressDataPointType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type ProgressDataPointCreateWithoutGoalInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutProgressDataPointInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  goalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutProgressDataPointInput>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutProgressDataPointInput>;
  team: TeamCreateNestedOneWithoutProgressDataPointInput;
  type: ProgressDataPointType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type ProgressDataPointCreateWithoutRetrospectiveInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutProgressDataPointInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  goal: GoalCreateNestedOneWithoutProgressDataPointInput;
  goalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutProgressDataPointInput>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  team: TeamCreateNestedOneWithoutProgressDataPointInput;
  type: ProgressDataPointType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type ProgressDataPointCreateWithoutTeamInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutProgressDataPointInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  goal: GoalCreateNestedOneWithoutProgressDataPointInput;
  goalDataPointValue?: Maybe<GoalDataPointValueCreateNestedManyWithoutProgressDataPointInput>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutProgressDataPointInput>;
  type: ProgressDataPointType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type ProgressDataPointGoalIdMonthYearCompoundUniqueInput = {
  goalId: Scalars['String'];
  month: Scalars['Int'];
  year: Scalars['Int'];
};

export type ProgressDataPointListRelationFilter = {
  every?: Maybe<ProgressDataPointWhereInput>;
  none?: Maybe<ProgressDataPointWhereInput>;
  some?: Maybe<ProgressDataPointWhereInput>;
};

export type ProgressDataPointOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  goalId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  month?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type ProgressDataPointScalarWhereInput = {
  AND?: Maybe<Array<ProgressDataPointScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  goalId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  month?: Maybe<IntFilter>;
  NOT?: Maybe<Array<ProgressDataPointScalarWhereInput>>;
  OR?: Maybe<Array<ProgressDataPointScalarWhereInput>>;
  teamId?: Maybe<StringFilter>;
  type?: Maybe<EnumProgressDataPointTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  year?: Maybe<IntFilter>;
};

export enum ProgressDataPointType {
  MONTH = 'MONTH'
}

export type ProgressDataPointUpdateInput = {
  comments?: Maybe<CommentUpdateManyWithoutProgressDataPointInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  goal?: Maybe<GoalUpdateOneRequiredWithoutProgressDataPointInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutProgressDataPointInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  retrospective?: Maybe<RetrospectiveUpdateManyWithoutProgressDataPointInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutProgressDataPointInput>;
  type?: Maybe<EnumProgressDataPointTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ProgressDataPointUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  type?: Maybe<EnumProgressDataPointTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ProgressDataPointUpdateManyWithoutGoalInput = {
  connect?: Maybe<Array<ProgressDataPointWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProgressDataPointCreateOrConnectWithoutGoalInput>>;
  create?: Maybe<Array<ProgressDataPointCreateWithoutGoalInput>>;
  createMany?: Maybe<ProgressDataPointCreateManyGoalInputEnvelope>;
  delete?: Maybe<Array<ProgressDataPointWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProgressDataPointScalarWhereInput>>;
  disconnect?: Maybe<Array<ProgressDataPointWhereUniqueInput>>;
  set?: Maybe<Array<ProgressDataPointWhereUniqueInput>>;
  update?: Maybe<Array<ProgressDataPointUpdateWithWhereUniqueWithoutGoalInput>>;
  updateMany?: Maybe<Array<ProgressDataPointUpdateManyWithWhereWithoutGoalInput>>;
  upsert?: Maybe<Array<ProgressDataPointUpsertWithWhereUniqueWithoutGoalInput>>;
};

export type ProgressDataPointUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<ProgressDataPointWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProgressDataPointCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<ProgressDataPointCreateWithoutTeamInput>>;
  createMany?: Maybe<ProgressDataPointCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<ProgressDataPointWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProgressDataPointScalarWhereInput>>;
  disconnect?: Maybe<Array<ProgressDataPointWhereUniqueInput>>;
  set?: Maybe<Array<ProgressDataPointWhereUniqueInput>>;
  update?: Maybe<Array<ProgressDataPointUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<ProgressDataPointUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<ProgressDataPointUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type ProgressDataPointUpdateManyWithWhereWithoutGoalInput = {
  data: ProgressDataPointUpdateManyMutationInput;
  where: ProgressDataPointScalarWhereInput;
};

export type ProgressDataPointUpdateManyWithWhereWithoutTeamInput = {
  data: ProgressDataPointUpdateManyMutationInput;
  where: ProgressDataPointScalarWhereInput;
};

export type ProgressDataPointUpdateOneWithoutCommentsInput = {
  connect?: Maybe<ProgressDataPointWhereUniqueInput>;
  connectOrCreate?: Maybe<ProgressDataPointCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<ProgressDataPointCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProgressDataPointUpdateWithoutCommentsInput>;
  upsert?: Maybe<ProgressDataPointUpsertWithoutCommentsInput>;
};

export type ProgressDataPointUpdateOneWithoutGoalDataPointValueInput = {
  connect?: Maybe<ProgressDataPointWhereUniqueInput>;
  connectOrCreate?: Maybe<ProgressDataPointCreateOrConnectWithoutGoalDataPointValueInput>;
  create?: Maybe<ProgressDataPointCreateWithoutGoalDataPointValueInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProgressDataPointUpdateWithoutGoalDataPointValueInput>;
  upsert?: Maybe<ProgressDataPointUpsertWithoutGoalDataPointValueInput>;
};

export type ProgressDataPointUpdateOneWithoutRetrospectiveInput = {
  connect?: Maybe<ProgressDataPointWhereUniqueInput>;
  connectOrCreate?: Maybe<ProgressDataPointCreateOrConnectWithoutRetrospectiveInput>;
  create?: Maybe<ProgressDataPointCreateWithoutRetrospectiveInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProgressDataPointUpdateWithoutRetrospectiveInput>;
  upsert?: Maybe<ProgressDataPointUpsertWithoutRetrospectiveInput>;
};

export type ProgressDataPointUpdateWithoutCommentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  goal?: Maybe<GoalUpdateOneRequiredWithoutProgressDataPointInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutProgressDataPointInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  retrospective?: Maybe<RetrospectiveUpdateManyWithoutProgressDataPointInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutProgressDataPointInput>;
  type?: Maybe<EnumProgressDataPointTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ProgressDataPointUpdateWithoutGoalDataPointValueInput = {
  comments?: Maybe<CommentUpdateManyWithoutProgressDataPointInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  goal?: Maybe<GoalUpdateOneRequiredWithoutProgressDataPointInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  retrospective?: Maybe<RetrospectiveUpdateManyWithoutProgressDataPointInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutProgressDataPointInput>;
  type?: Maybe<EnumProgressDataPointTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ProgressDataPointUpdateWithoutGoalInput = {
  comments?: Maybe<CommentUpdateManyWithoutProgressDataPointInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutProgressDataPointInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  retrospective?: Maybe<RetrospectiveUpdateManyWithoutProgressDataPointInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutProgressDataPointInput>;
  type?: Maybe<EnumProgressDataPointTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ProgressDataPointUpdateWithoutRetrospectiveInput = {
  comments?: Maybe<CommentUpdateManyWithoutProgressDataPointInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  goal?: Maybe<GoalUpdateOneRequiredWithoutProgressDataPointInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutProgressDataPointInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutProgressDataPointInput>;
  type?: Maybe<EnumProgressDataPointTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ProgressDataPointUpdateWithoutTeamInput = {
  comments?: Maybe<CommentUpdateManyWithoutProgressDataPointInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  goal?: Maybe<GoalUpdateOneRequiredWithoutProgressDataPointInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueUpdateManyWithoutProgressDataPointInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  retrospective?: Maybe<RetrospectiveUpdateManyWithoutProgressDataPointInput>;
  type?: Maybe<EnumProgressDataPointTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type ProgressDataPointUpdateWithWhereUniqueWithoutGoalInput = {
  data: ProgressDataPointUpdateWithoutGoalInput;
  where: ProgressDataPointWhereUniqueInput;
};

export type ProgressDataPointUpdateWithWhereUniqueWithoutTeamInput = {
  data: ProgressDataPointUpdateWithoutTeamInput;
  where: ProgressDataPointWhereUniqueInput;
};

export type ProgressDataPointUpsertWithoutCommentsInput = {
  create: ProgressDataPointCreateWithoutCommentsInput;
  update: ProgressDataPointUpdateWithoutCommentsInput;
};

export type ProgressDataPointUpsertWithoutGoalDataPointValueInput = {
  create: ProgressDataPointCreateWithoutGoalDataPointValueInput;
  update: ProgressDataPointUpdateWithoutGoalDataPointValueInput;
};

export type ProgressDataPointUpsertWithoutRetrospectiveInput = {
  create: ProgressDataPointCreateWithoutRetrospectiveInput;
  update: ProgressDataPointUpdateWithoutRetrospectiveInput;
};

export type ProgressDataPointUpsertWithWhereUniqueWithoutGoalInput = {
  create: ProgressDataPointCreateWithoutGoalInput;
  update: ProgressDataPointUpdateWithoutGoalInput;
  where: ProgressDataPointWhereUniqueInput;
};

export type ProgressDataPointUpsertWithWhereUniqueWithoutTeamInput = {
  create: ProgressDataPointCreateWithoutTeamInput;
  update: ProgressDataPointUpdateWithoutTeamInput;
  where: ProgressDataPointWhereUniqueInput;
};

export type ProgressDataPointWhereInput = {
  AND?: Maybe<Array<ProgressDataPointWhereInput>>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  goal?: Maybe<GoalWhereInput>;
  goalDataPointValue?: Maybe<GoalDataPointValueListRelationFilter>;
  goalId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  month?: Maybe<IntFilter>;
  NOT?: Maybe<Array<ProgressDataPointWhereInput>>;
  OR?: Maybe<Array<ProgressDataPointWhereInput>>;
  retrospective?: Maybe<RetrospectiveListRelationFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  type?: Maybe<EnumProgressDataPointTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  year?: Maybe<IntFilter>;
};

export type ProgressDataPointWhereUniqueInput = {
  goalId_month_year?: Maybe<ProgressDataPointGoalIdMonthYearCompoundUniqueInput>;
  id?: Maybe<Scalars['String']>;
};

/** A campaign that has been retrieved from an external provider e.g Google Analytics via Peddler. */
export type ProivderCampaign = {
  __typename?: 'ProivderCampaign';
  /** Config object used in the query */
  config?: Maybe<ProviderConfig>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  resultPreview?: Maybe<Array<Maybe<ProviderCampaignResult>>>;
};

export type Provider = {
  __typename?: 'Provider';
  disconnectConsequences?: Maybe<DisconnectConsequences>;
  id?: Maybe<Scalars['String']>;
};

/** An external ProviderAccount that assiocaited to the user auth token */
export type ProviderAccount = {
  __typename?: 'ProviderAccount';
  accountType?: Maybe<Scalars['String']>;
  grandparentId?: Maybe<Scalars['String']>;
  grandparentName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  node?: Maybe<Array<Maybe<ProviderAccount>>>;
  parentId?: Maybe<Scalars['String']>;
  parentName?: Maybe<Scalars['String']>;
};

/** The ProviderAccount that will be used to execute the query via Peddler */
export type ProviderAccountArgs = {
  accountType: Scalars['String'];
  grandparentId?: Maybe<Scalars['String']>;
  grandparentName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  parentName?: Maybe<Scalars['String']>;
};

/** The ProviderCampaignArgs that will be used to execute the query via Peddler to fetch campaign results */
export type ProviderCampaignArgs = {
  channel?: Maybe<Scalars['String']>;
  /** Config object used in the query */
  config?: Maybe<ProviderConfigArgs>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** A daily campaign result for a selected result type */
export type ProviderCampaignResult = {
  __typename?: 'ProviderCampaignResult';
  date?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** A group of campaigns e.g. Google Analytics - SEO.  */
export type ProviderCampaignsGroup = {
  __typename?: 'ProviderCampaignsGroup';
  channel?: Maybe<Scalars['String']>;
  /** Config object used in the query */
  config?: Maybe<ProviderConfig>;
  name?: Maybe<Scalars['String']>;
  /** A list of Provider campaigns objects grouped by type */
  result?: Maybe<Array<Maybe<ProivderCampaign>>>;
};

/** This field represents the config used to execute the query that was returned. This allows us to store config so that it can be used again */
export type ProviderConfig = {
  __typename?: 'ProviderConfig';
  dimensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  endDate?: Maybe<Scalars['String']>;
  filtersExpression?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  metrics?: Maybe<Array<Maybe<Scalars['String']>>>;
  startDate?: Maybe<Scalars['String']>;
};

/** The config that will be used to execute the query via Peddler */
export type ProviderConfigArgs = {
  dimensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  endDate?: Maybe<Scalars['String']>;
  filtersExpression?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  metrics?: Maybe<Array<Maybe<Scalars['String']>>>;
  startDate?: Maybe<Scalars['String']>;
};

/** Returns a list of dimensions (filters) that are available for a provider to filter campaigns */
export type ProviderDimensions = {
  __typename?: 'ProviderDimensions';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** The result types available that count towards the campaign result */
export type ProviderResultType = {
  __typename?: 'ProviderResultType';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  campaign?: Maybe<Campaign>;
  campaignCount?: Maybe<Scalars['Int']>;
  campaignGroup?: Maybe<CampaignGroup>;
  campaignGroups: Array<CampaignGroup>;
  campaigns: Array<Campaign>;
  channel?: Maybe<Channel>;
  channels: Array<Channel>;
  currentFunnel?: Maybe<Funnel>;
  currentUser?: Maybe<User>;
  dailyStats?: Maybe<DailyStats>;
  funnel?: Maybe<Funnel>;
  funnels: Array<Funnel>;
  getTeamMembers?: Maybe<Array<Maybe<UserTeam>>>;
  globalCampaigns: Array<Campaign>;
  globalTeams: Array<Team>;
  goal?: Maybe<Goal>;
  goals: Array<Goal>;
  idea?: Maybe<Idea>;
  ideas: Array<Idea>;
  ideaSession?: Maybe<IdeaSession>;
  ideaSessions: Array<IdeaSession>;
  integrationStats?: Maybe<IntegrationStats>;
  notification?: Maybe<Notification>;
  notifications: Array<Notification>;
  progressDataPoint?: Maybe<ProgressDataPoint>;
  progressDataPoints: Array<ProgressDataPoint>;
  provider?: Maybe<Provider>;
  /** Returns a list of ProviderAccounts via Peddler */
  providerAccounts?: Maybe<Array<Maybe<ProviderAccount>>>;
  /** Returns a list of campaigns via Peddler dependant on the provider e.g Google Analytics and the account */
  providerCampaigns?: Maybe<Array<Maybe<ProviderCampaignsGroup>>>;
  /** Returns a list of dimensions (filters) that are available for a provider to filter campaigns */
  providerDimensions?: Maybe<Array<Maybe<ProviderDimensions>>>;
  /** The result types available that count towards the campaign result */
  providerResultTypes?: Maybe<Array<Maybe<ProviderResultType>>>;
  retrospective?: Maybe<Retrospective>;
  retrospectiveAction?: Maybe<RetrospectiveAction>;
  retrospectiveActions: Array<RetrospectiveAction>;
  retrospectives: Array<Retrospective>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  team?: Maybe<Team>;
  teamCount?: Maybe<Scalars['Int']>;
  unreadCombinedNotificationCount?: Maybe<CombinedUnreadNotificationCount>;
  unreadNotificationCount?: Maybe<NotificationCount>;
  user?: Maybe<User>;
  userAccounts?: Maybe<Array<Maybe<Account>>>;
  userCount?: Maybe<Scalars['Int']>;
  users: Array<User>;
};


export type QueryCampaignArgs = {
  where: CampaignWhereUniqueInput;
};


export type QueryCampaignCountArgs = {
  where?: Maybe<CampaignWhereInput>;
};


export type QueryCampaignGroupArgs = {
  where: CampaignGroupWhereUniqueInput;
};


export type QueryCampaignGroupsArgs = {
  cursor?: Maybe<CampaignGroupWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CampaignGroupWhereInput>;
};


export type QueryCampaignsArgs = {
  cursor?: Maybe<CampaignWhereUniqueInput>;
  orderBy?: Maybe<Array<CampaignOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CampaignWhereInput>;
};


export type QueryChannelArgs = {
  where: ChannelWhereUniqueInput;
};


export type QueryChannelsArgs = {
  cursor?: Maybe<ChannelWhereUniqueInput>;
  orderBy?: Maybe<Array<ChannelOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ChannelWhereInput>;
};


export type QueryFunnelArgs = {
  where: FunnelWhereUniqueInput;
};


export type QueryFunnelsArgs = {
  cursor?: Maybe<FunnelWhereUniqueInput>;
  orderBy?: Maybe<Array<FunnelOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FunnelWhereInput>;
};


export type QueryGetTeamMembersArgs = {
  teamId?: Maybe<Scalars['String']>;
};


export type QueryGlobalCampaignsArgs = {
  cursor?: Maybe<CampaignWhereUniqueInput>;
  orderBy?: Maybe<Array<CampaignOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CampaignWhereInput>;
};


export type QueryGlobalTeamsArgs = {
  cursor?: Maybe<TeamWhereUniqueInput>;
  orderBy?: Maybe<Array<TeamOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeamWhereInput>;
};


export type QueryGoalArgs = {
  where: GoalWhereUniqueInput;
};


export type QueryGoalsArgs = {
  cursor?: Maybe<GoalWhereUniqueInput>;
  orderBy?: Maybe<Array<GoalOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GoalWhereInput>;
};


export type QueryIdeaArgs = {
  where: IdeaWhereUniqueInput;
};


export type QueryIdeasArgs = {
  cursor?: Maybe<IdeaWhereUniqueInput>;
  orderBy?: Maybe<Array<IdeaOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IdeaWhereInput>;
};


export type QueryIdeaSessionArgs = {
  where: IdeaSessionWhereUniqueInput;
};


export type QueryIdeaSessionsArgs = {
  cursor?: Maybe<IdeaSessionWhereUniqueInput>;
  orderBy?: Maybe<Array<IdeaSessionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IdeaSessionWhereInput>;
};


export type QueryNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type QueryNotificationsArgs = {
  cursor?: Maybe<NotificationWhereUniqueInput>;
  orderBy?: Maybe<Array<NotificationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<NotificationWhereInput>;
};


export type QueryProgressDataPointArgs = {
  where: ProgressDataPointWhereUniqueInput;
};


export type QueryProgressDataPointsArgs = {
  cursor?: Maybe<ProgressDataPointWhereUniqueInput>;
  orderBy?: Maybe<Array<ProgressDataPointOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProgressDataPointWhereInput>;
};


export type QueryProviderArgs = {
  providerId?: Maybe<Scalars['String']>;
};


export type QueryProviderAccountsArgs = {
  providerId?: Maybe<Scalars['String']>;
};


export type QueryProviderCampaignsArgs = {
  account?: Maybe<ProviderAccountArgs>;
  config?: Maybe<ProviderConfigArgs>;
  providerId?: Maybe<Scalars['String']>;
};


export type QueryProviderDimensionsArgs = {
  account?: Maybe<ProviderAccountArgs>;
  providerId?: Maybe<Scalars['String']>;
};


export type QueryProviderResultTypesArgs = {
  account?: Maybe<ProviderAccountArgs>;
  providerId?: Maybe<Scalars['String']>;
};


export type QueryRetrospectiveArgs = {
  where: RetrospectiveWhereUniqueInput;
};


export type QueryRetrospectiveActionArgs = {
  where: RetrospectiveActionWhereUniqueInput;
};


export type QueryRetrospectiveActionsArgs = {
  cursor?: Maybe<RetrospectiveActionWhereUniqueInput>;
  orderBy?: Maybe<Array<RetrospectiveActionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RetrospectiveActionWhereInput>;
};


export type QueryRetrospectivesArgs = {
  cursor?: Maybe<RetrospectiveWhereUniqueInput>;
  orderBy?: Maybe<Array<RetrospectiveOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RetrospectiveWhereInput>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryTeamCountArgs = {
  where?: Maybe<TeamWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserCountArgs = {
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export enum QueryMode {
  DEFAULT = 'default',
  INSENSITIVE = 'insensitive'
}

export type Reaction = {
  __typename?: 'Reaction';
  id: Scalars['String'];
  name: Scalars['String'];
  users: Array<User>;
};


export type ReactionUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ReactionCreateManyCommentInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReactionCreateManyCommentInputEnvelope = {
  data?: Maybe<Array<ReactionCreateManyCommentInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ReactionCreateNestedManyWithoutCommentInput = {
  connect?: Maybe<Array<ReactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ReactionCreateOrConnectWithoutCommentInput>>;
  create?: Maybe<Array<ReactionCreateWithoutCommentInput>>;
  createMany?: Maybe<ReactionCreateManyCommentInputEnvelope>;
};

export type ReactionCreateNestedManyWithoutUsersInput = {
  connect?: Maybe<Array<ReactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ReactionCreateOrConnectWithoutUsersInput>>;
  create?: Maybe<Array<ReactionCreateWithoutUsersInput>>;
};

export type ReactionCreateOrConnectWithoutCommentInput = {
  create: ReactionCreateWithoutCommentInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionCreateOrConnectWithoutUsersInput = {
  create: ReactionCreateWithoutUsersInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionCreateWithoutCommentInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserCreateNestedManyWithoutReactionInput>;
};

export type ReactionCreateWithoutUsersInput = {
  comment: CommentCreateNestedOneWithoutReactionsInput;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReactionListRelationFilter = {
  every?: Maybe<ReactionWhereInput>;
  none?: Maybe<ReactionWhereInput>;
  some?: Maybe<ReactionWhereInput>;
};

export type ReactionOrderByInput = {
  commentId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ReactionScalarWhereInput = {
  AND?: Maybe<Array<ReactionScalarWhereInput>>;
  commentId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ReactionScalarWhereInput>>;
  OR?: Maybe<Array<ReactionScalarWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ReactionUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReactionUpdateManyWithoutCommentInput = {
  connect?: Maybe<Array<ReactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ReactionCreateOrConnectWithoutCommentInput>>;
  create?: Maybe<Array<ReactionCreateWithoutCommentInput>>;
  createMany?: Maybe<ReactionCreateManyCommentInputEnvelope>;
  delete?: Maybe<Array<ReactionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReactionScalarWhereInput>>;
  disconnect?: Maybe<Array<ReactionWhereUniqueInput>>;
  set?: Maybe<Array<ReactionWhereUniqueInput>>;
  update?: Maybe<Array<ReactionUpdateWithWhereUniqueWithoutCommentInput>>;
  updateMany?: Maybe<Array<ReactionUpdateManyWithWhereWithoutCommentInput>>;
  upsert?: Maybe<Array<ReactionUpsertWithWhereUniqueWithoutCommentInput>>;
};

export type ReactionUpdateManyWithoutUsersInput = {
  connect?: Maybe<Array<ReactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ReactionCreateOrConnectWithoutUsersInput>>;
  create?: Maybe<Array<ReactionCreateWithoutUsersInput>>;
  delete?: Maybe<Array<ReactionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReactionScalarWhereInput>>;
  disconnect?: Maybe<Array<ReactionWhereUniqueInput>>;
  set?: Maybe<Array<ReactionWhereUniqueInput>>;
  update?: Maybe<Array<ReactionUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: Maybe<Array<ReactionUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: Maybe<Array<ReactionUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type ReactionUpdateManyWithWhereWithoutCommentInput = {
  data: ReactionUpdateManyMutationInput;
  where: ReactionScalarWhereInput;
};

export type ReactionUpdateManyWithWhereWithoutUsersInput = {
  data: ReactionUpdateManyMutationInput;
  where: ReactionScalarWhereInput;
};

export type ReactionUpdateWithoutCommentInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  users?: Maybe<UserUpdateManyWithoutReactionInput>;
};

export type ReactionUpdateWithoutUsersInput = {
  comment?: Maybe<CommentUpdateOneRequiredWithoutReactionsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReactionUpdateWithWhereUniqueWithoutCommentInput = {
  data: ReactionUpdateWithoutCommentInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionUpdateWithWhereUniqueWithoutUsersInput = {
  data: ReactionUpdateWithoutUsersInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionUpsertWithWhereUniqueWithoutCommentInput = {
  create: ReactionCreateWithoutCommentInput;
  update: ReactionUpdateWithoutCommentInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionUpsertWithWhereUniqueWithoutUsersInput = {
  create: ReactionCreateWithoutUsersInput;
  update: ReactionUpdateWithoutUsersInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionWhereInput = {
  AND?: Maybe<Array<ReactionWhereInput>>;
  comment?: Maybe<CommentWhereInput>;
  commentId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ReactionWhereInput>>;
  OR?: Maybe<Array<ReactionWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
  users?: Maybe<UserListRelationFilter>;
};

export type ReactionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

/** The ResultMetricMapArgs that will be used to execute the query via Peddler to fetch campaign results */
export type ResultMetricMapArgs = {
  funnelNodeId?: Maybe<Scalars['String']>;
  providerMetricName?: Maybe<Scalars['String']>;
};

export type Retrospective = {
  __typename?: 'Retrospective';
  actions: Array<RetrospectiveAction>;
  actionsCount?: Maybe<Scalars['Int']>;
  active: Scalars['Boolean'];
  complete: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  month: Scalars['Int'];
  progressDataPoint?: Maybe<ProgressDataPoint>;
  teamId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  year: Scalars['Int'];
};


export type RetrospectiveActionsArgs = {
  cursor?: Maybe<RetrospectiveActionWhereUniqueInput>;
  orderBy?: Maybe<Array<RetrospectiveActionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type RetrospectiveAction = {
  __typename?: 'RetrospectiveAction';
  complete: Scalars['Boolean'];
  id: Scalars['String'];
  item: Scalars['String'];
  owner?: Maybe<User>;
};

export type RetrospectiveActionCreateInput = {
  complete: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  item: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutRetrospectiveActionInput>;
  retrospective: RetrospectiveCreateNestedOneWithoutActionsInput;
  team: TeamCreateNestedOneWithoutRetrospectiveActionInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RetrospectiveActionCreateManyOwnerInput = {
  complete: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  item: Scalars['String'];
  retrospectiveId: Scalars['String'];
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RetrospectiveActionCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<RetrospectiveActionCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RetrospectiveActionCreateManyRetrospectiveInput = {
  complete: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  item: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RetrospectiveActionCreateManyRetrospectiveInputEnvelope = {
  data?: Maybe<Array<RetrospectiveActionCreateManyRetrospectiveInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RetrospectiveActionCreateManyTeamInput = {
  complete: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  item: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
  retrospectiveId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RetrospectiveActionCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<RetrospectiveActionCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RetrospectiveActionCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RetrospectiveActionCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<RetrospectiveActionCreateWithoutOwnerInput>>;
  createMany?: Maybe<RetrospectiveActionCreateManyOwnerInputEnvelope>;
};

export type RetrospectiveActionCreateNestedManyWithoutRetrospectiveInput = {
  connect?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RetrospectiveActionCreateOrConnectWithoutRetrospectiveInput>>;
  create?: Maybe<Array<RetrospectiveActionCreateWithoutRetrospectiveInput>>;
  createMany?: Maybe<RetrospectiveActionCreateManyRetrospectiveInputEnvelope>;
};

export type RetrospectiveActionCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RetrospectiveActionCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<RetrospectiveActionCreateWithoutTeamInput>>;
  createMany?: Maybe<RetrospectiveActionCreateManyTeamInputEnvelope>;
};

export type RetrospectiveActionCreateOrConnectWithoutOwnerInput = {
  create: RetrospectiveActionCreateWithoutOwnerInput;
  where: RetrospectiveActionWhereUniqueInput;
};

export type RetrospectiveActionCreateOrConnectWithoutRetrospectiveInput = {
  create: RetrospectiveActionCreateWithoutRetrospectiveInput;
  where: RetrospectiveActionWhereUniqueInput;
};

export type RetrospectiveActionCreateOrConnectWithoutTeamInput = {
  create: RetrospectiveActionCreateWithoutTeamInput;
  where: RetrospectiveActionWhereUniqueInput;
};

export type RetrospectiveActionCreateWithoutOwnerInput = {
  complete: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  item: Scalars['String'];
  retrospective: RetrospectiveCreateNestedOneWithoutActionsInput;
  team: TeamCreateNestedOneWithoutRetrospectiveActionInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RetrospectiveActionCreateWithoutRetrospectiveInput = {
  complete: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  item: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutRetrospectiveActionInput>;
  team: TeamCreateNestedOneWithoutRetrospectiveActionInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RetrospectiveActionCreateWithoutTeamInput = {
  complete: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  item: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutRetrospectiveActionInput>;
  retrospective: RetrospectiveCreateNestedOneWithoutActionsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RetrospectiveActionListRelationFilter = {
  every?: Maybe<RetrospectiveActionWhereInput>;
  none?: Maybe<RetrospectiveActionWhereInput>;
  some?: Maybe<RetrospectiveActionWhereInput>;
};

export type RetrospectiveActionOrderByInput = {
  complete?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  item?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  retrospectiveId?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RetrospectiveActionScalarWhereInput = {
  AND?: Maybe<Array<RetrospectiveActionScalarWhereInput>>;
  complete?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  item?: Maybe<StringFilter>;
  NOT?: Maybe<Array<RetrospectiveActionScalarWhereInput>>;
  OR?: Maybe<Array<RetrospectiveActionScalarWhereInput>>;
  ownerId?: Maybe<StringNullableFilter>;
  retrospectiveId?: Maybe<StringFilter>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type RetrospectiveActionUpdateInput = {
  complete?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  item?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutRetrospectiveActionInput>;
  retrospective?: Maybe<RetrospectiveUpdateOneRequiredWithoutActionsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutRetrospectiveActionInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RetrospectiveActionUpdateManyMutationInput = {
  complete?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  item?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RetrospectiveActionUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RetrospectiveActionCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<RetrospectiveActionCreateWithoutOwnerInput>>;
  createMany?: Maybe<RetrospectiveActionCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RetrospectiveActionScalarWhereInput>>;
  disconnect?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  set?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  update?: Maybe<Array<RetrospectiveActionUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<RetrospectiveActionUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<RetrospectiveActionUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type RetrospectiveActionUpdateManyWithoutRetrospectiveInput = {
  connect?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RetrospectiveActionCreateOrConnectWithoutRetrospectiveInput>>;
  create?: Maybe<Array<RetrospectiveActionCreateWithoutRetrospectiveInput>>;
  createMany?: Maybe<RetrospectiveActionCreateManyRetrospectiveInputEnvelope>;
  delete?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RetrospectiveActionScalarWhereInput>>;
  disconnect?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  set?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  update?: Maybe<Array<RetrospectiveActionUpdateWithWhereUniqueWithoutRetrospectiveInput>>;
  updateMany?: Maybe<Array<RetrospectiveActionUpdateManyWithWhereWithoutRetrospectiveInput>>;
  upsert?: Maybe<Array<RetrospectiveActionUpsertWithWhereUniqueWithoutRetrospectiveInput>>;
};

export type RetrospectiveActionUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RetrospectiveActionCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<RetrospectiveActionCreateWithoutTeamInput>>;
  createMany?: Maybe<RetrospectiveActionCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RetrospectiveActionScalarWhereInput>>;
  disconnect?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  set?: Maybe<Array<RetrospectiveActionWhereUniqueInput>>;
  update?: Maybe<Array<RetrospectiveActionUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<RetrospectiveActionUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<RetrospectiveActionUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type RetrospectiveActionUpdateManyWithWhereWithoutOwnerInput = {
  data: RetrospectiveActionUpdateManyMutationInput;
  where: RetrospectiveActionScalarWhereInput;
};

export type RetrospectiveActionUpdateManyWithWhereWithoutRetrospectiveInput = {
  data: RetrospectiveActionUpdateManyMutationInput;
  where: RetrospectiveActionScalarWhereInput;
};

export type RetrospectiveActionUpdateManyWithWhereWithoutTeamInput = {
  data: RetrospectiveActionUpdateManyMutationInput;
  where: RetrospectiveActionScalarWhereInput;
};

export type RetrospectiveActionUpdateWithoutOwnerInput = {
  complete?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  item?: Maybe<StringFieldUpdateOperationsInput>;
  retrospective?: Maybe<RetrospectiveUpdateOneRequiredWithoutActionsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutRetrospectiveActionInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RetrospectiveActionUpdateWithoutRetrospectiveInput = {
  complete?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  item?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutRetrospectiveActionInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutRetrospectiveActionInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RetrospectiveActionUpdateWithoutTeamInput = {
  complete?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  item?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutRetrospectiveActionInput>;
  retrospective?: Maybe<RetrospectiveUpdateOneRequiredWithoutActionsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RetrospectiveActionUpdateWithWhereUniqueWithoutOwnerInput = {
  data: RetrospectiveActionUpdateWithoutOwnerInput;
  where: RetrospectiveActionWhereUniqueInput;
};

export type RetrospectiveActionUpdateWithWhereUniqueWithoutRetrospectiveInput = {
  data: RetrospectiveActionUpdateWithoutRetrospectiveInput;
  where: RetrospectiveActionWhereUniqueInput;
};

export type RetrospectiveActionUpdateWithWhereUniqueWithoutTeamInput = {
  data: RetrospectiveActionUpdateWithoutTeamInput;
  where: RetrospectiveActionWhereUniqueInput;
};

export type RetrospectiveActionUpsertWithWhereUniqueWithoutOwnerInput = {
  create: RetrospectiveActionCreateWithoutOwnerInput;
  update: RetrospectiveActionUpdateWithoutOwnerInput;
  where: RetrospectiveActionWhereUniqueInput;
};

export type RetrospectiveActionUpsertWithWhereUniqueWithoutRetrospectiveInput = {
  create: RetrospectiveActionCreateWithoutRetrospectiveInput;
  update: RetrospectiveActionUpdateWithoutRetrospectiveInput;
  where: RetrospectiveActionWhereUniqueInput;
};

export type RetrospectiveActionUpsertWithWhereUniqueWithoutTeamInput = {
  create: RetrospectiveActionCreateWithoutTeamInput;
  update: RetrospectiveActionUpdateWithoutTeamInput;
  where: RetrospectiveActionWhereUniqueInput;
};

export type RetrospectiveActionWhereInput = {
  AND?: Maybe<Array<RetrospectiveActionWhereInput>>;
  complete?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  item?: Maybe<StringFilter>;
  NOT?: Maybe<Array<RetrospectiveActionWhereInput>>;
  OR?: Maybe<Array<RetrospectiveActionWhereInput>>;
  owner?: Maybe<UserWhereInput>;
  ownerId?: Maybe<StringNullableFilter>;
  retrospective?: Maybe<RetrospectiveWhereInput>;
  retrospectiveId?: Maybe<StringFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type RetrospectiveActionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type RetrospectiveCreateInput = {
  actions?: Maybe<RetrospectiveActionCreateNestedManyWithoutRetrospectiveInput>;
  active?: Maybe<Scalars['Boolean']>;
  complete?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedOneWithoutRetrospectiveInput>;
  team: TeamCreateNestedOneWithoutRetrospectiveInput;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type RetrospectiveCreateManyProgressDataPointInput = {
  active?: Maybe<Scalars['Boolean']>;
  complete?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  teamId: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type RetrospectiveCreateManyProgressDataPointInputEnvelope = {
  data?: Maybe<Array<RetrospectiveCreateManyProgressDataPointInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RetrospectiveCreateManyTeamInput = {
  active?: Maybe<Scalars['Boolean']>;
  complete?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  progressDataPointId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type RetrospectiveCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<RetrospectiveCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RetrospectiveCreateNestedManyWithoutProgressDataPointInput = {
  connect?: Maybe<Array<RetrospectiveWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RetrospectiveCreateOrConnectWithoutProgressDataPointInput>>;
  create?: Maybe<Array<RetrospectiveCreateWithoutProgressDataPointInput>>;
  createMany?: Maybe<RetrospectiveCreateManyProgressDataPointInputEnvelope>;
};

export type RetrospectiveCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<RetrospectiveWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RetrospectiveCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<RetrospectiveCreateWithoutTeamInput>>;
  createMany?: Maybe<RetrospectiveCreateManyTeamInputEnvelope>;
};

export type RetrospectiveCreateNestedOneWithoutActionsInput = {
  connect?: Maybe<RetrospectiveWhereUniqueInput>;
  connectOrCreate?: Maybe<RetrospectiveCreateOrConnectWithoutActionsInput>;
  create?: Maybe<RetrospectiveCreateWithoutActionsInput>;
};

export type RetrospectiveCreateOrConnectWithoutActionsInput = {
  create: RetrospectiveCreateWithoutActionsInput;
  where: RetrospectiveWhereUniqueInput;
};

export type RetrospectiveCreateOrConnectWithoutProgressDataPointInput = {
  create: RetrospectiveCreateWithoutProgressDataPointInput;
  where: RetrospectiveWhereUniqueInput;
};

export type RetrospectiveCreateOrConnectWithoutTeamInput = {
  create: RetrospectiveCreateWithoutTeamInput;
  where: RetrospectiveWhereUniqueInput;
};

export type RetrospectiveCreateWithoutActionsInput = {
  active?: Maybe<Scalars['Boolean']>;
  complete?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedOneWithoutRetrospectiveInput>;
  team: TeamCreateNestedOneWithoutRetrospectiveInput;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type RetrospectiveCreateWithoutProgressDataPointInput = {
  actions?: Maybe<RetrospectiveActionCreateNestedManyWithoutRetrospectiveInput>;
  active?: Maybe<Scalars['Boolean']>;
  complete?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  team: TeamCreateNestedOneWithoutRetrospectiveInput;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type RetrospectiveCreateWithoutTeamInput = {
  actions?: Maybe<RetrospectiveActionCreateNestedManyWithoutRetrospectiveInput>;
  active?: Maybe<Scalars['Boolean']>;
  complete?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  month: Scalars['Int'];
  progressDataPoint?: Maybe<ProgressDataPointCreateNestedOneWithoutRetrospectiveInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type RetrospectiveListRelationFilter = {
  every?: Maybe<RetrospectiveWhereInput>;
  none?: Maybe<RetrospectiveWhereInput>;
  some?: Maybe<RetrospectiveWhereInput>;
};

export type RetrospectiveOrderByInput = {
  active?: Maybe<SortOrder>;
  complete?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  month?: Maybe<SortOrder>;
  progressDataPointId?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type RetrospectiveProgressDataPointIdMonthYearCompoundUniqueInput = {
  month: Scalars['Int'];
  progressDataPointId: Scalars['String'];
  year: Scalars['Int'];
};

export type RetrospectiveScalarWhereInput = {
  active?: Maybe<BoolFilter>;
  AND?: Maybe<Array<RetrospectiveScalarWhereInput>>;
  complete?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  month?: Maybe<IntFilter>;
  NOT?: Maybe<Array<RetrospectiveScalarWhereInput>>;
  OR?: Maybe<Array<RetrospectiveScalarWhereInput>>;
  progressDataPointId?: Maybe<StringNullableFilter>;
  teamId?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  year?: Maybe<IntFilter>;
};

export type RetrospectiveUpdateInput = {
  actions?: Maybe<RetrospectiveActionUpdateManyWithoutRetrospectiveInput>;
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  complete?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutRetrospectiveInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutRetrospectiveInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type RetrospectiveUpdateManyMutationInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  complete?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type RetrospectiveUpdateManyWithoutProgressDataPointInput = {
  connect?: Maybe<Array<RetrospectiveWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RetrospectiveCreateOrConnectWithoutProgressDataPointInput>>;
  create?: Maybe<Array<RetrospectiveCreateWithoutProgressDataPointInput>>;
  createMany?: Maybe<RetrospectiveCreateManyProgressDataPointInputEnvelope>;
  delete?: Maybe<Array<RetrospectiveWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RetrospectiveScalarWhereInput>>;
  disconnect?: Maybe<Array<RetrospectiveWhereUniqueInput>>;
  set?: Maybe<Array<RetrospectiveWhereUniqueInput>>;
  update?: Maybe<Array<RetrospectiveUpdateWithWhereUniqueWithoutProgressDataPointInput>>;
  updateMany?: Maybe<Array<RetrospectiveUpdateManyWithWhereWithoutProgressDataPointInput>>;
  upsert?: Maybe<Array<RetrospectiveUpsertWithWhereUniqueWithoutProgressDataPointInput>>;
};

export type RetrospectiveUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<RetrospectiveWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RetrospectiveCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<RetrospectiveCreateWithoutTeamInput>>;
  createMany?: Maybe<RetrospectiveCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<RetrospectiveWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RetrospectiveScalarWhereInput>>;
  disconnect?: Maybe<Array<RetrospectiveWhereUniqueInput>>;
  set?: Maybe<Array<RetrospectiveWhereUniqueInput>>;
  update?: Maybe<Array<RetrospectiveUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<RetrospectiveUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<RetrospectiveUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type RetrospectiveUpdateManyWithWhereWithoutProgressDataPointInput = {
  data: RetrospectiveUpdateManyMutationInput;
  where: RetrospectiveScalarWhereInput;
};

export type RetrospectiveUpdateManyWithWhereWithoutTeamInput = {
  data: RetrospectiveUpdateManyMutationInput;
  where: RetrospectiveScalarWhereInput;
};

export type RetrospectiveUpdateOneRequiredWithoutActionsInput = {
  connect?: Maybe<RetrospectiveWhereUniqueInput>;
  connectOrCreate?: Maybe<RetrospectiveCreateOrConnectWithoutActionsInput>;
  create?: Maybe<RetrospectiveCreateWithoutActionsInput>;
  update?: Maybe<RetrospectiveUpdateWithoutActionsInput>;
  upsert?: Maybe<RetrospectiveUpsertWithoutActionsInput>;
};

export type RetrospectiveUpdateWithoutActionsInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  complete?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutRetrospectiveInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutRetrospectiveInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type RetrospectiveUpdateWithoutProgressDataPointInput = {
  actions?: Maybe<RetrospectiveActionUpdateManyWithoutRetrospectiveInput>;
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  complete?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutRetrospectiveInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type RetrospectiveUpdateWithoutTeamInput = {
  actions?: Maybe<RetrospectiveActionUpdateManyWithoutRetrospectiveInput>;
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  complete?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  month?: Maybe<IntFieldUpdateOperationsInput>;
  progressDataPoint?: Maybe<ProgressDataPointUpdateOneWithoutRetrospectiveInput>;
  title?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type RetrospectiveUpdateWithWhereUniqueWithoutProgressDataPointInput = {
  data: RetrospectiveUpdateWithoutProgressDataPointInput;
  where: RetrospectiveWhereUniqueInput;
};

export type RetrospectiveUpdateWithWhereUniqueWithoutTeamInput = {
  data: RetrospectiveUpdateWithoutTeamInput;
  where: RetrospectiveWhereUniqueInput;
};

export type RetrospectiveUpsertWithoutActionsInput = {
  create: RetrospectiveCreateWithoutActionsInput;
  update: RetrospectiveUpdateWithoutActionsInput;
};

export type RetrospectiveUpsertWithWhereUniqueWithoutProgressDataPointInput = {
  create: RetrospectiveCreateWithoutProgressDataPointInput;
  update: RetrospectiveUpdateWithoutProgressDataPointInput;
  where: RetrospectiveWhereUniqueInput;
};

export type RetrospectiveUpsertWithWhereUniqueWithoutTeamInput = {
  create: RetrospectiveCreateWithoutTeamInput;
  update: RetrospectiveUpdateWithoutTeamInput;
  where: RetrospectiveWhereUniqueInput;
};

export type RetrospectiveWhereInput = {
  actions?: Maybe<RetrospectiveActionListRelationFilter>;
  active?: Maybe<BoolFilter>;
  AND?: Maybe<Array<RetrospectiveWhereInput>>;
  complete?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  month?: Maybe<IntFilter>;
  NOT?: Maybe<Array<RetrospectiveWhereInput>>;
  OR?: Maybe<Array<RetrospectiveWhereInput>>;
  progressDataPoint?: Maybe<ProgressDataPointWhereInput>;
  progressDataPointId?: Maybe<StringNullableFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  title?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  year?: Maybe<IntFilter>;
};

export type RetrospectiveWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  progressDataPointId_month_year?: Maybe<RetrospectiveProgressDataPointIdMonthYearCompoundUniqueInput>;
};

export enum Role {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER'
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export enum StatementTracking {
  ABSOLUTE = 'ABSOLUTE',
  CONVERSION = 'CONVERSION'
}

export type StrategyInput = {
  dataType?: Maybe<GoalDataType>;
  funnelNodeId?: Maybe<Scalars['ID']>;
  statementTrackingType?: Maybe<StatementTracking>;
  value?: Maybe<Scalars['Float']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: Maybe<Array<Scalars['String']>>;
  has?: Maybe<Scalars['String']>;
  hasEvery?: Maybe<Array<Scalars['String']>>;
  hasSome?: Maybe<Array<Scalars['String']>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  ends: Scalars['DateTime'];
  id: Scalars['String'];
  status: SubscriptionStatus;
  team: Team;
};

export type SubscriptionCreateManyOwnerInput = {
  couponId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customerId?: Maybe<Scalars['String']>;
  ends: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  status: SubscriptionStatus;
  subscriptionId?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubscriptionCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<SubscriptionCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SubscriptionCreateManyTeamInput = {
  couponId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customerId?: Maybe<Scalars['String']>;
  ends: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  status: SubscriptionStatus;
  subscriptionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type SubscriptionCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<SubscriptionCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SubscriptionCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SubscriptionCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<SubscriptionCreateWithoutOwnerInput>>;
  createMany?: Maybe<SubscriptionCreateManyOwnerInputEnvelope>;
};

export type SubscriptionCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SubscriptionCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<SubscriptionCreateWithoutTeamInput>>;
  createMany?: Maybe<SubscriptionCreateManyTeamInputEnvelope>;
};

export type SubscriptionCreateOrConnectWithoutOwnerInput = {
  create: SubscriptionCreateWithoutOwnerInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionCreateOrConnectWithoutTeamInput = {
  create: SubscriptionCreateWithoutTeamInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionCreateWithoutOwnerInput = {
  couponId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customerId?: Maybe<Scalars['String']>;
  ends: Scalars['DateTime'];
  events?: Maybe<SubscriptionEventCreateNestedManyWithoutSubscriptionInput>;
  id?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  status: SubscriptionStatus;
  subscriptionId?: Maybe<Scalars['String']>;
  team: TeamCreateNestedOneWithoutSubscriptionsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubscriptionCreateWithoutTeamInput = {
  couponId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customerId?: Maybe<Scalars['String']>;
  ends: Scalars['DateTime'];
  events?: Maybe<SubscriptionEventCreateNestedManyWithoutSubscriptionInput>;
  id?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutSubscriptionInput;
  priceId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  status: SubscriptionStatus;
  subscriptionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubscriptionEventCreateManySubscriptionInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  type: SubscriptionStatus;
  update?: Maybe<Scalars['Boolean']>;
};

export type SubscriptionEventCreateManySubscriptionInputEnvelope = {
  data?: Maybe<Array<SubscriptionEventCreateManySubscriptionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SubscriptionEventCreateNestedManyWithoutSubscriptionInput = {
  connect?: Maybe<Array<SubscriptionEventWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SubscriptionEventCreateOrConnectWithoutSubscriptionInput>>;
  create?: Maybe<Array<SubscriptionEventCreateWithoutSubscriptionInput>>;
  createMany?: Maybe<SubscriptionEventCreateManySubscriptionInputEnvelope>;
};

export type SubscriptionEventCreateOrConnectWithoutSubscriptionInput = {
  create: SubscriptionEventCreateWithoutSubscriptionInput;
  where: SubscriptionEventWhereUniqueInput;
};

export type SubscriptionEventCreateWithoutSubscriptionInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  type: SubscriptionStatus;
  update?: Maybe<Scalars['Boolean']>;
};

export type SubscriptionEventListRelationFilter = {
  every?: Maybe<SubscriptionEventWhereInput>;
  none?: Maybe<SubscriptionEventWhereInput>;
  some?: Maybe<SubscriptionEventWhereInput>;
};

export type SubscriptionEventScalarWhereInput = {
  AND?: Maybe<Array<SubscriptionEventScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  end?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<SubscriptionEventScalarWhereInput>>;
  OR?: Maybe<Array<SubscriptionEventScalarWhereInput>>;
  start?: Maybe<DateTimeNullableFilter>;
  subscriptionId?: Maybe<StringFilter>;
  type?: Maybe<EnumSubscriptionStatusFilter>;
  update?: Maybe<BoolFilter>;
};

export type SubscriptionEventUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: Maybe<EnumSubscriptionStatusFieldUpdateOperationsInput>;
  update?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type SubscriptionEventUpdateManyWithoutSubscriptionInput = {
  connect?: Maybe<Array<SubscriptionEventWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SubscriptionEventCreateOrConnectWithoutSubscriptionInput>>;
  create?: Maybe<Array<SubscriptionEventCreateWithoutSubscriptionInput>>;
  createMany?: Maybe<SubscriptionEventCreateManySubscriptionInputEnvelope>;
  delete?: Maybe<Array<SubscriptionEventWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SubscriptionEventScalarWhereInput>>;
  disconnect?: Maybe<Array<SubscriptionEventWhereUniqueInput>>;
  set?: Maybe<Array<SubscriptionEventWhereUniqueInput>>;
  update?: Maybe<Array<SubscriptionEventUpdateWithWhereUniqueWithoutSubscriptionInput>>;
  updateMany?: Maybe<Array<SubscriptionEventUpdateManyWithWhereWithoutSubscriptionInput>>;
  upsert?: Maybe<Array<SubscriptionEventUpsertWithWhereUniqueWithoutSubscriptionInput>>;
};

export type SubscriptionEventUpdateManyWithWhereWithoutSubscriptionInput = {
  data: SubscriptionEventUpdateManyMutationInput;
  where: SubscriptionEventScalarWhereInput;
};

export type SubscriptionEventUpdateWithoutSubscriptionInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  end?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  start?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: Maybe<EnumSubscriptionStatusFieldUpdateOperationsInput>;
  update?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type SubscriptionEventUpdateWithWhereUniqueWithoutSubscriptionInput = {
  data: SubscriptionEventUpdateWithoutSubscriptionInput;
  where: SubscriptionEventWhereUniqueInput;
};

export type SubscriptionEventUpsertWithWhereUniqueWithoutSubscriptionInput = {
  create: SubscriptionEventCreateWithoutSubscriptionInput;
  update: SubscriptionEventUpdateWithoutSubscriptionInput;
  where: SubscriptionEventWhereUniqueInput;
};

export type SubscriptionEventWhereInput = {
  AND?: Maybe<Array<SubscriptionEventWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  end?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<SubscriptionEventWhereInput>>;
  OR?: Maybe<Array<SubscriptionEventWhereInput>>;
  start?: Maybe<DateTimeNullableFilter>;
  subscription?: Maybe<SubscriptionWhereInput>;
  subscriptionId?: Maybe<StringFilter>;
  type?: Maybe<EnumSubscriptionStatusFilter>;
  update?: Maybe<BoolFilter>;
};

export type SubscriptionEventWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type SubscriptionListRelationFilter = {
  every?: Maybe<SubscriptionWhereInput>;
  none?: Maybe<SubscriptionWhereInput>;
  some?: Maybe<SubscriptionWhereInput>;
};

export type SubscriptionScalarWhereInput = {
  AND?: Maybe<Array<SubscriptionScalarWhereInput>>;
  couponId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  customerId?: Maybe<StringNullableFilter>;
  ends?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<SubscriptionScalarWhereInput>>;
  OR?: Maybe<Array<SubscriptionScalarWhereInput>>;
  priceId?: Maybe<StringNullableFilter>;
  productId?: Maybe<StringNullableFilter>;
  sessionId?: Maybe<StringNullableFilter>;
  status?: Maybe<EnumSubscriptionStatusFilter>;
  subscriptionId?: Maybe<StringNullableFilter>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  INCOMPLETE = 'INCOMPLETE',
  INCOMPLETE_EXPIRED = 'INCOMPLETE_EXPIRED',
  INITIAL = 'INITIAL',
  PAST_DUE = 'PAST_DUE',
  TRIAL_EXPIRED = 'TRIAL_EXPIRED',
  TRIALING = 'TRIALING',
  UNPAID = 'UNPAID'
}

export type SubscriptionUpdateManyMutationInput = {
  couponId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  customerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ends?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  priceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  productId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sessionId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<EnumSubscriptionStatusFieldUpdateOperationsInput>;
  subscriptionId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubscriptionUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SubscriptionCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<SubscriptionCreateWithoutOwnerInput>>;
  createMany?: Maybe<SubscriptionCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SubscriptionScalarWhereInput>>;
  disconnect?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  set?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  update?: Maybe<Array<SubscriptionUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<SubscriptionUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<SubscriptionUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type SubscriptionUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SubscriptionCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<SubscriptionCreateWithoutTeamInput>>;
  createMany?: Maybe<SubscriptionCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SubscriptionScalarWhereInput>>;
  disconnect?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  set?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  update?: Maybe<Array<SubscriptionUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<SubscriptionUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<SubscriptionUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type SubscriptionUpdateManyWithWhereWithoutOwnerInput = {
  data: SubscriptionUpdateManyMutationInput;
  where: SubscriptionScalarWhereInput;
};

export type SubscriptionUpdateManyWithWhereWithoutTeamInput = {
  data: SubscriptionUpdateManyMutationInput;
  where: SubscriptionScalarWhereInput;
};

export type SubscriptionUpdateWithoutOwnerInput = {
  couponId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  customerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ends?: Maybe<DateTimeFieldUpdateOperationsInput>;
  events?: Maybe<SubscriptionEventUpdateManyWithoutSubscriptionInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  priceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  productId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sessionId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<EnumSubscriptionStatusFieldUpdateOperationsInput>;
  subscriptionId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutSubscriptionsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubscriptionUpdateWithoutTeamInput = {
  couponId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  customerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ends?: Maybe<DateTimeFieldUpdateOperationsInput>;
  events?: Maybe<SubscriptionEventUpdateManyWithoutSubscriptionInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutSubscriptionInput>;
  priceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  productId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sessionId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  status?: Maybe<EnumSubscriptionStatusFieldUpdateOperationsInput>;
  subscriptionId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubscriptionUpdateWithWhereUniqueWithoutOwnerInput = {
  data: SubscriptionUpdateWithoutOwnerInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpdateWithWhereUniqueWithoutTeamInput = {
  data: SubscriptionUpdateWithoutTeamInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpsertWithWhereUniqueWithoutOwnerInput = {
  create: SubscriptionCreateWithoutOwnerInput;
  update: SubscriptionUpdateWithoutOwnerInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpsertWithWhereUniqueWithoutTeamInput = {
  create: SubscriptionCreateWithoutTeamInput;
  update: SubscriptionUpdateWithoutTeamInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionWhereInput = {
  AND?: Maybe<Array<SubscriptionWhereInput>>;
  couponId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  customerId?: Maybe<StringNullableFilter>;
  ends?: Maybe<DateTimeFilter>;
  events?: Maybe<SubscriptionEventListRelationFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<SubscriptionWhereInput>>;
  OR?: Maybe<Array<SubscriptionWhereInput>>;
  owner?: Maybe<UserWhereInput>;
  priceId?: Maybe<StringNullableFilter>;
  productId?: Maybe<StringNullableFilter>;
  sessionId?: Maybe<StringNullableFilter>;
  status?: Maybe<EnumSubscriptionStatusFilter>;
  subscriptionId?: Maybe<StringNullableFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type SubscriptionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  owner: User;
  team: Team;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type TagCreateInput = {
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTagsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTagsInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTagInput>;
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutTagsInput;
  team: TeamCreateNestedOneWithoutTagsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagCreateManyOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<TagCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TagCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type TagCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<TagCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TagCreateNestedManyWithoutCampaignsInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutCampaignsInput>>;
  create?: Maybe<Array<TagCreateWithoutCampaignsInput>>;
};

export type TagCreateNestedManyWithoutIdeasInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutIdeasInput>>;
  create?: Maybe<Array<TagCreateWithoutIdeasInput>>;
};

export type TagCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<TagCreateWithoutOwnerInput>>;
  createMany?: Maybe<TagCreateManyOwnerInputEnvelope>;
};

export type TagCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<TagCreateWithoutTeamInput>>;
  createMany?: Maybe<TagCreateManyTeamInputEnvelope>;
};

export type TagCreateNestedOneWithoutIdeaSessionInput = {
  connect?: Maybe<TagWhereUniqueInput>;
  connectOrCreate?: Maybe<TagCreateOrConnectWithoutIdeaSessionInput>;
  create?: Maybe<TagCreateWithoutIdeaSessionInput>;
};

export type TagCreateOrConnectWithoutCampaignsInput = {
  create: TagCreateWithoutCampaignsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutIdeaSessionInput = {
  create: TagCreateWithoutIdeaSessionInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutIdeasInput = {
  create: TagCreateWithoutIdeasInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutOwnerInput = {
  create: TagCreateWithoutOwnerInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutTeamInput = {
  create: TagCreateWithoutTeamInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutCampaignsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTagsInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTagInput>;
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutTagsInput;
  team: TeamCreateNestedOneWithoutTagsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagCreateWithoutIdeaSessionInput = {
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTagsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTagsInput>;
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutTagsInput;
  team: TeamCreateNestedOneWithoutTagsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagCreateWithoutIdeasInput = {
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTagsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTagInput>;
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutTagsInput;
  team: TeamCreateNestedOneWithoutTagsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagCreateWithoutOwnerInput = {
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTagsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTagsInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTagInput>;
  name: Scalars['String'];
  team: TeamCreateNestedOneWithoutTagsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagCreateWithoutTeamInput = {
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTagsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTagsInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTagInput>;
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutTagsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagListRelationFilter = {
  every?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
};

export type TagOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TagScalarWhereInput = {
  AND?: Maybe<Array<TagScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TagScalarWhereInput>>;
  OR?: Maybe<Array<TagScalarWhereInput>>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type TagTeamIdNameCompoundUniqueInput = {
  name: Scalars['String'];
  teamId: Scalars['String'];
};

export type TagUpdateInput = {
  campaigns?: Maybe<CampaignUpdateManyWithoutTagsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTagsInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTagInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutTagsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutTagsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithoutCampaignsInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutCampaignsInput>>;
  create?: Maybe<Array<TagCreateWithoutCampaignsInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutCampaignsInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereWithoutCampaignsInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutCampaignsInput>>;
};

export type TagUpdateManyWithoutIdeasInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutIdeasInput>>;
  create?: Maybe<Array<TagCreateWithoutIdeasInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutIdeasInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereWithoutIdeasInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutIdeasInput>>;
};

export type TagUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<TagCreateWithoutOwnerInput>>;
  createMany?: Maybe<TagCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type TagUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<TagCreateWithoutTeamInput>>;
  createMany?: Maybe<TagCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type TagUpdateManyWithWhereWithoutCampaignsInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithWhereWithoutIdeasInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithWhereWithoutOwnerInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithWhereWithoutTeamInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateOneWithoutIdeaSessionInput = {
  connect?: Maybe<TagWhereUniqueInput>;
  connectOrCreate?: Maybe<TagCreateOrConnectWithoutIdeaSessionInput>;
  create?: Maybe<TagCreateWithoutIdeaSessionInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TagUpdateWithoutIdeaSessionInput>;
  upsert?: Maybe<TagUpsertWithoutIdeaSessionInput>;
};

export type TagUpdateWithoutCampaignsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTagsInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTagInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutTagsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutTagsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateWithoutIdeaSessionInput = {
  campaigns?: Maybe<CampaignUpdateManyWithoutTagsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTagsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutTagsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutTagsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateWithoutIdeasInput = {
  campaigns?: Maybe<CampaignUpdateManyWithoutTagsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTagInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutTagsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutTagsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateWithoutOwnerInput = {
  campaigns?: Maybe<CampaignUpdateManyWithoutTagsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTagsInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTagInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutTagsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateWithoutTeamInput = {
  campaigns?: Maybe<CampaignUpdateManyWithoutTagsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTagsInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTagInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutTagsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateWithWhereUniqueWithoutCampaignsInput = {
  data: TagUpdateWithoutCampaignsInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithWhereUniqueWithoutIdeasInput = {
  data: TagUpdateWithoutIdeasInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithWhereUniqueWithoutOwnerInput = {
  data: TagUpdateWithoutOwnerInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithWhereUniqueWithoutTeamInput = {
  data: TagUpdateWithoutTeamInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithoutIdeaSessionInput = {
  create: TagCreateWithoutIdeaSessionInput;
  update: TagUpdateWithoutIdeaSessionInput;
};

export type TagUpsertWithWhereUniqueWithoutCampaignsInput = {
  create: TagCreateWithoutCampaignsInput;
  update: TagUpdateWithoutCampaignsInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutIdeasInput = {
  create: TagCreateWithoutIdeasInput;
  update: TagUpdateWithoutIdeasInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutOwnerInput = {
  create: TagCreateWithoutOwnerInput;
  update: TagUpdateWithoutOwnerInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutTeamInput = {
  create: TagCreateWithoutTeamInput;
  update: TagUpdateWithoutTeamInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: Maybe<Array<TagWhereInput>>;
  campaigns?: Maybe<CampaignListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  ideas?: Maybe<IdeaListRelationFilter>;
  IdeaSession?: Maybe<IdeaSessionListRelationFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  owner?: Maybe<UserWhereInput>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  teamId_name?: Maybe<TagTeamIdNameCompoundUniqueInput>;
};

export type Task = {
  __typename?: 'Task';
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Scalars['String']>;
  completed: Scalars['Boolean'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  user: User;
};

export type TaskCreateInput = {
  campaign?: Maybe<CampaignCreateNestedOneWithoutTasksInput>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutTasksInput>;
  completed?: Maybe<Scalars['Boolean']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  team: TeamCreateNestedOneWithoutTaskInput;
  type: TaskType;
  user: UserCreateNestedOneWithoutTasksInput;
};

export type TaskCreateManyCampaignGroupInput = {
  campaignId?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  type: TaskType;
  userId: Scalars['String'];
};

export type TaskCreateManyCampaignGroupInputEnvelope = {
  data?: Maybe<Array<TaskCreateManyCampaignGroupInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TaskCreateManyCampaignInput = {
  campaignGroupId?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  type: TaskType;
  userId: Scalars['String'];
};

export type TaskCreateManyCampaignInputEnvelope = {
  data?: Maybe<Array<TaskCreateManyCampaignInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TaskCreateManyTeamInput = {
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: TaskType;
  userId: Scalars['String'];
};

export type TaskCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<TaskCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TaskCreateManyUserInput = {
  campaignGroupId?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  teamId: Scalars['String'];
  type: TaskType;
};

export type TaskCreateManyUserInputEnvelope = {
  data?: Maybe<Array<TaskCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TaskCreateNestedManyWithoutCampaignGroupInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutCampaignGroupInput>>;
  create?: Maybe<Array<TaskCreateWithoutCampaignGroupInput>>;
  createMany?: Maybe<TaskCreateManyCampaignGroupInputEnvelope>;
};

export type TaskCreateNestedManyWithoutCampaignInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutCampaignInput>>;
  create?: Maybe<Array<TaskCreateWithoutCampaignInput>>;
  createMany?: Maybe<TaskCreateManyCampaignInputEnvelope>;
};

export type TaskCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<TaskCreateWithoutTeamInput>>;
  createMany?: Maybe<TaskCreateManyTeamInputEnvelope>;
};

export type TaskCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<TaskCreateWithoutUserInput>>;
  createMany?: Maybe<TaskCreateManyUserInputEnvelope>;
};

export type TaskCreateOrConnectWithoutCampaignGroupInput = {
  create: TaskCreateWithoutCampaignGroupInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutCampaignInput = {
  create: TaskCreateWithoutCampaignInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutTeamInput = {
  create: TaskCreateWithoutTeamInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutUserInput = {
  create: TaskCreateWithoutUserInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateWithoutCampaignGroupInput = {
  campaign?: Maybe<CampaignCreateNestedOneWithoutTasksInput>;
  completed?: Maybe<Scalars['Boolean']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  team: TeamCreateNestedOneWithoutTaskInput;
  type: TaskType;
  user: UserCreateNestedOneWithoutTasksInput;
};

export type TaskCreateWithoutCampaignInput = {
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutTasksInput>;
  completed?: Maybe<Scalars['Boolean']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  team: TeamCreateNestedOneWithoutTaskInput;
  type: TaskType;
  user: UserCreateNestedOneWithoutTasksInput;
};

export type TaskCreateWithoutTeamInput = {
  campaign?: Maybe<CampaignCreateNestedOneWithoutTasksInput>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutTasksInput>;
  completed?: Maybe<Scalars['Boolean']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: TaskType;
  user: UserCreateNestedOneWithoutTasksInput;
};

export type TaskCreateWithoutUserInput = {
  campaign?: Maybe<CampaignCreateNestedOneWithoutTasksInput>;
  campaignGroup?: Maybe<CampaignGroupCreateNestedOneWithoutTasksInput>;
  completed?: Maybe<Scalars['Boolean']>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  team: TeamCreateNestedOneWithoutTaskInput;
  type: TaskType;
};

export type TaskListRelationFilter = {
  every?: Maybe<TaskWhereInput>;
  none?: Maybe<TaskWhereInput>;
  some?: Maybe<TaskWhereInput>;
};

export type TaskOrderByInput = {
  campaignGroupId?: Maybe<SortOrder>;
  campaignId?: Maybe<SortOrder>;
  completed?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type TaskScalarWhereInput = {
  AND?: Maybe<Array<TaskScalarWhereInput>>;
  campaignGroupId?: Maybe<StringNullableFilter>;
  campaignId?: Maybe<StringNullableFilter>;
  completed?: Maybe<BoolFilter>;
  content?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TaskScalarWhereInput>>;
  OR?: Maybe<Array<TaskScalarWhereInput>>;
  teamId?: Maybe<StringFilter>;
  type?: Maybe<EnumTaskTypeFilter>;
  userId?: Maybe<StringFilter>;
};

export enum TaskType {
  CAMPAIGN = 'CAMPAIGN',
  CAMPAIGN_GROUP = 'CAMPAIGN_GROUP'
}

export type TaskUpdateInput = {
  campaign?: Maybe<CampaignUpdateOneWithoutTasksInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutTasksInput>;
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutTaskInput>;
  type?: Maybe<EnumTaskTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutTasksInput>;
};

export type TaskUpdateManyMutationInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTaskTypeFieldUpdateOperationsInput>;
};

export type TaskUpdateManyWithoutCampaignGroupInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutCampaignGroupInput>>;
  create?: Maybe<Array<TaskCreateWithoutCampaignGroupInput>>;
  createMany?: Maybe<TaskCreateManyCampaignGroupInputEnvelope>;
  delete?: Maybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TaskScalarWhereInput>>;
  disconnect?: Maybe<Array<TaskWhereUniqueInput>>;
  set?: Maybe<Array<TaskWhereUniqueInput>>;
  update?: Maybe<Array<TaskUpdateWithWhereUniqueWithoutCampaignGroupInput>>;
  updateMany?: Maybe<Array<TaskUpdateManyWithWhereWithoutCampaignGroupInput>>;
  upsert?: Maybe<Array<TaskUpsertWithWhereUniqueWithoutCampaignGroupInput>>;
};

export type TaskUpdateManyWithoutCampaignInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutCampaignInput>>;
  create?: Maybe<Array<TaskCreateWithoutCampaignInput>>;
  createMany?: Maybe<TaskCreateManyCampaignInputEnvelope>;
  delete?: Maybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TaskScalarWhereInput>>;
  disconnect?: Maybe<Array<TaskWhereUniqueInput>>;
  set?: Maybe<Array<TaskWhereUniqueInput>>;
  update?: Maybe<Array<TaskUpdateWithWhereUniqueWithoutCampaignInput>>;
  updateMany?: Maybe<Array<TaskUpdateManyWithWhereWithoutCampaignInput>>;
  upsert?: Maybe<Array<TaskUpsertWithWhereUniqueWithoutCampaignInput>>;
};

export type TaskUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<TaskCreateWithoutTeamInput>>;
  createMany?: Maybe<TaskCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TaskScalarWhereInput>>;
  disconnect?: Maybe<Array<TaskWhereUniqueInput>>;
  set?: Maybe<Array<TaskWhereUniqueInput>>;
  update?: Maybe<Array<TaskUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<TaskUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<TaskUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type TaskUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<TaskCreateWithoutUserInput>>;
  createMany?: Maybe<TaskCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TaskScalarWhereInput>>;
  disconnect?: Maybe<Array<TaskWhereUniqueInput>>;
  set?: Maybe<Array<TaskWhereUniqueInput>>;
  update?: Maybe<Array<TaskUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<TaskUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<TaskUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TaskUpdateManyWithWhereWithoutCampaignGroupInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithWhereWithoutCampaignInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithWhereWithoutTeamInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithWhereWithoutUserInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateWithoutCampaignGroupInput = {
  campaign?: Maybe<CampaignUpdateOneWithoutTasksInput>;
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutTaskInput>;
  type?: Maybe<EnumTaskTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutTasksInput>;
};

export type TaskUpdateWithoutCampaignInput = {
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutTasksInput>;
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutTaskInput>;
  type?: Maybe<EnumTaskTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutTasksInput>;
};

export type TaskUpdateWithoutTeamInput = {
  campaign?: Maybe<CampaignUpdateOneWithoutTasksInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutTasksInput>;
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTaskTypeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutTasksInput>;
};

export type TaskUpdateWithoutUserInput = {
  campaign?: Maybe<CampaignUpdateOneWithoutTasksInput>;
  campaignGroup?: Maybe<CampaignGroupUpdateOneWithoutTasksInput>;
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutTaskInput>;
  type?: Maybe<EnumTaskTypeFieldUpdateOperationsInput>;
};

export type TaskUpdateWithWhereUniqueWithoutCampaignGroupInput = {
  data: TaskUpdateWithoutCampaignGroupInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithWhereUniqueWithoutCampaignInput = {
  data: TaskUpdateWithoutCampaignInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithWhereUniqueWithoutTeamInput = {
  data: TaskUpdateWithoutTeamInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithWhereUniqueWithoutUserInput = {
  data: TaskUpdateWithoutUserInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithWhereUniqueWithoutCampaignGroupInput = {
  create: TaskCreateWithoutCampaignGroupInput;
  update: TaskUpdateWithoutCampaignGroupInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithWhereUniqueWithoutCampaignInput = {
  create: TaskCreateWithoutCampaignInput;
  update: TaskUpdateWithoutCampaignInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithWhereUniqueWithoutTeamInput = {
  create: TaskCreateWithoutTeamInput;
  update: TaskUpdateWithoutTeamInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithWhereUniqueWithoutUserInput = {
  create: TaskCreateWithoutUserInput;
  update: TaskUpdateWithoutUserInput;
  where: TaskWhereUniqueInput;
};

export type TaskWhereInput = {
  AND?: Maybe<Array<TaskWhereInput>>;
  campaign?: Maybe<CampaignWhereInput>;
  campaignGroup?: Maybe<CampaignGroupWhereInput>;
  campaignGroupId?: Maybe<StringNullableFilter>;
  campaignId?: Maybe<StringNullableFilter>;
  completed?: Maybe<BoolFilter>;
  content?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TaskWhereInput>>;
  OR?: Maybe<Array<TaskWhereInput>>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  type?: Maybe<EnumTaskTypeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type TaskWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  campaignCount?: Maybe<Scalars['Int']>;
  campaigns: Array<Campaign>;
  channels: Array<Channel>;
  completedOnboards: Array<Onboards>;
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  funnels: Array<Funnel>;
  goals: Array<Goal>;
  hasCreatedCampaigns: Scalars['Boolean'];
  hasEditedStrategy?: Maybe<Scalars['Boolean']>;
  hasIntegrations?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  /** Provides seeded random suggestions for ideation based on team simulations. Requires arguments for the number of ideas to generate and a seed value.The seed value is any string - for normal usage this should be sufficiently random or unique. Using a string value from the current datetime is a good choice. */
  ideaSuggestions?: Maybe<Array<Maybe<IdeaSuggestion>>>;
  industry: Scalars['String'];
  invites: Array<TeamInvite>;
  isDemo: Scalars['Boolean'];
  members: Array<UserTeam>;
  name: Scalars['String'];
  subscription?: Maybe<Subscription>;
  tags: Array<Tag>;
};


export type TeamCampaignCountArgs = {
  where?: Maybe<CampaignWhereInput>;
};


export type TeamCampaignsArgs = {
  cursor?: Maybe<CampaignWhereUniqueInput>;
  orderBy?: Maybe<Array<CampaignOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CampaignWhereInput>;
};


export type TeamChannelsArgs = {
  cursor?: Maybe<ChannelWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type TeamFunnelsArgs = {
  cursor?: Maybe<FunnelWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type TeamGoalsArgs = {
  cursor?: Maybe<GoalWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type TeamIdeaSuggestionsArgs = {
  amount: Scalars['Int'];
  seed: Scalars['String'];
};


export type TeamInvitesArgs = {
  cursor?: Maybe<TeamInviteWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type TeamMembersArgs = {
  cursor?: Maybe<UserTeamWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type TeamTagsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type TeamCreatecompletedOnboardsInput = {
  set?: Maybe<Array<Onboards>>;
};

export type TeamCreateInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateNestedOneWithoutCampaignGroupsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCampaignGroupsInput>;
  create?: Maybe<TeamCreateWithoutCampaignGroupsInput>;
};

export type TeamCreateNestedOneWithoutCampaignsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCampaignsInput>;
  create?: Maybe<TeamCreateWithoutCampaignsInput>;
};

export type TeamCreateNestedOneWithoutChannelInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutChannelInput>;
  create?: Maybe<TeamCreateWithoutChannelInput>;
};

export type TeamCreateNestedOneWithoutFunnelsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutFunnelsInput>;
  create?: Maybe<TeamCreateWithoutFunnelsInput>;
};

export type TeamCreateNestedOneWithoutGoalsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutGoalsInput>;
  create?: Maybe<TeamCreateWithoutGoalsInput>;
};

export type TeamCreateNestedOneWithoutIdeaSessionInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutIdeaSessionInput>;
  create?: Maybe<TeamCreateWithoutIdeaSessionInput>;
};

export type TeamCreateNestedOneWithoutIdeasInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutIdeasInput>;
  create?: Maybe<TeamCreateWithoutIdeasInput>;
};

export type TeamCreateNestedOneWithoutIntegrationDefaultInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutIntegrationDefaultInput>;
  create?: Maybe<TeamCreateWithoutIntegrationDefaultInput>;
};

export type TeamCreateNestedOneWithoutIntegrationInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutIntegrationInput>;
  create?: Maybe<TeamCreateWithoutIntegrationInput>;
};

export type TeamCreateNestedOneWithoutInvitesInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutInvitesInput>;
  create?: Maybe<TeamCreateWithoutInvitesInput>;
};

export type TeamCreateNestedOneWithoutMembersInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutMembersInput>;
  create?: Maybe<TeamCreateWithoutMembersInput>;
};

export type TeamCreateNestedOneWithoutNotificationInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutNotificationInput>;
  create?: Maybe<TeamCreateWithoutNotificationInput>;
};

export type TeamCreateNestedOneWithoutProgressDataPointInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutProgressDataPointInput>;
  create?: Maybe<TeamCreateWithoutProgressDataPointInput>;
};

export type TeamCreateNestedOneWithoutRetrospectiveActionInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutRetrospectiveActionInput>;
  create?: Maybe<TeamCreateWithoutRetrospectiveActionInput>;
};

export type TeamCreateNestedOneWithoutRetrospectiveInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutRetrospectiveInput>;
  create?: Maybe<TeamCreateWithoutRetrospectiveInput>;
};

export type TeamCreateNestedOneWithoutSelectedUsersInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutSelectedUsersInput>;
  create?: Maybe<TeamCreateWithoutSelectedUsersInput>;
};

export type TeamCreateNestedOneWithoutSubscriptionsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutSubscriptionsInput>;
  create?: Maybe<TeamCreateWithoutSubscriptionsInput>;
};

export type TeamCreateNestedOneWithoutTagsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutTagsInput>;
  create?: Maybe<TeamCreateWithoutTagsInput>;
};

export type TeamCreateNestedOneWithoutTaskInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutTaskInput>;
  create?: Maybe<TeamCreateWithoutTaskInput>;
};

export type TeamCreateOrConnectWithoutCampaignGroupsInput = {
  create: TeamCreateWithoutCampaignGroupsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutCampaignsInput = {
  create: TeamCreateWithoutCampaignsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutChannelInput = {
  create: TeamCreateWithoutChannelInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutFunnelsInput = {
  create: TeamCreateWithoutFunnelsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutGoalsInput = {
  create: TeamCreateWithoutGoalsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutIdeaSessionInput = {
  create: TeamCreateWithoutIdeaSessionInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutIdeasInput = {
  create: TeamCreateWithoutIdeasInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutIntegrationDefaultInput = {
  create: TeamCreateWithoutIntegrationDefaultInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutIntegrationInput = {
  create: TeamCreateWithoutIntegrationInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutInvitesInput = {
  create: TeamCreateWithoutInvitesInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutMembersInput = {
  create: TeamCreateWithoutMembersInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutNotificationInput = {
  create: TeamCreateWithoutNotificationInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutProgressDataPointInput = {
  create: TeamCreateWithoutProgressDataPointInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutRetrospectiveActionInput = {
  create: TeamCreateWithoutRetrospectiveActionInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutRetrospectiveInput = {
  create: TeamCreateWithoutRetrospectiveInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutSelectedUsersInput = {
  create: TeamCreateWithoutSelectedUsersInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutSubscriptionsInput = {
  create: TeamCreateWithoutSubscriptionsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutTagsInput = {
  create: TeamCreateWithoutTagsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutTaskInput = {
  create: TeamCreateWithoutTaskInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateWithoutCampaignGroupsInput = {
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutCampaignsInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutChannelInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutFunnelsInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutGoalsInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutIdeaSessionInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutIdeasInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutIntegrationDefaultInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutIntegrationInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutInvitesInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutMembersInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutNotificationInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutProgressDataPointInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutRetrospectiveActionInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutRetrospectiveInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutSelectedUsersInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutSubscriptionsInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutTagsInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  Task?: Maybe<TaskCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutTaskInput = {
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutTeamInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutTeamInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutTeamInput>;
  industry: Scalars['String'];
  integration?: Maybe<IntegrationCreateNestedManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutTeamInput>;
  isDemo?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UserTeamCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  Notification?: Maybe<NotificationCreateNestedManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointCreateNestedManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveCreateNestedManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserCreateNestedManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutTeamInput>;
  tags?: Maybe<TagCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamInvite = {
  __typename?: 'TeamInvite';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  role: Role;
};

export type TeamInviteCreateManyOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  redirect?: Maybe<Scalars['String']>;
  role: Role;
  teamId: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamInviteCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<TeamInviteCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TeamInviteCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  ownerId: Scalars['String'];
  redirect?: Maybe<Scalars['String']>;
  role: Role;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamInviteCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<TeamInviteCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TeamInviteCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<TeamInviteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TeamInviteCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<TeamInviteCreateWithoutOwnerInput>>;
  createMany?: Maybe<TeamInviteCreateManyOwnerInputEnvelope>;
};

export type TeamInviteCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<TeamInviteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TeamInviteCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<TeamInviteCreateWithoutTeamInput>>;
  createMany?: Maybe<TeamInviteCreateManyTeamInputEnvelope>;
};

export type TeamInviteCreateOrConnectWithoutOwnerInput = {
  create: TeamInviteCreateWithoutOwnerInput;
  where: TeamInviteWhereUniqueInput;
};

export type TeamInviteCreateOrConnectWithoutTeamInput = {
  create: TeamInviteCreateWithoutTeamInput;
  where: TeamInviteWhereUniqueInput;
};

export type TeamInviteCreateWithoutOwnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  redirect?: Maybe<Scalars['String']>;
  role: Role;
  team: TeamCreateNestedOneWithoutInvitesInput;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamInviteCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutInvitesInput;
  redirect?: Maybe<Scalars['String']>;
  role: Role;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamInviteListRelationFilter = {
  every?: Maybe<TeamInviteWhereInput>;
  none?: Maybe<TeamInviteWhereInput>;
  some?: Maybe<TeamInviteWhereInput>;
};

export type TeamInviteScalarWhereInput = {
  AND?: Maybe<Array<TeamInviteScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TeamInviteScalarWhereInput>>;
  OR?: Maybe<Array<TeamInviteScalarWhereInput>>;
  ownerId?: Maybe<StringFilter>;
  redirect?: Maybe<StringNullableFilter>;
  role?: Maybe<EnumRoleFilter>;
  teamId?: Maybe<StringFilter>;
  token?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TeamInviteUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  redirect?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamInviteUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<TeamInviteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TeamInviteCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<TeamInviteCreateWithoutOwnerInput>>;
  createMany?: Maybe<TeamInviteCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<TeamInviteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TeamInviteScalarWhereInput>>;
  disconnect?: Maybe<Array<TeamInviteWhereUniqueInput>>;
  set?: Maybe<Array<TeamInviteWhereUniqueInput>>;
  update?: Maybe<Array<TeamInviteUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<TeamInviteUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<TeamInviteUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type TeamInviteUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<TeamInviteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TeamInviteCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<TeamInviteCreateWithoutTeamInput>>;
  createMany?: Maybe<TeamInviteCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<TeamInviteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TeamInviteScalarWhereInput>>;
  disconnect?: Maybe<Array<TeamInviteWhereUniqueInput>>;
  set?: Maybe<Array<TeamInviteWhereUniqueInput>>;
  update?: Maybe<Array<TeamInviteUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<TeamInviteUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<TeamInviteUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type TeamInviteUpdateManyWithWhereWithoutOwnerInput = {
  data: TeamInviteUpdateManyMutationInput;
  where: TeamInviteScalarWhereInput;
};

export type TeamInviteUpdateManyWithWhereWithoutTeamInput = {
  data: TeamInviteUpdateManyMutationInput;
  where: TeamInviteScalarWhereInput;
};

export type TeamInviteUpdateWithoutOwnerInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  redirect?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutInvitesInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamInviteUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutInvitesInput>;
  redirect?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamInviteUpdateWithWhereUniqueWithoutOwnerInput = {
  data: TeamInviteUpdateWithoutOwnerInput;
  where: TeamInviteWhereUniqueInput;
};

export type TeamInviteUpdateWithWhereUniqueWithoutTeamInput = {
  data: TeamInviteUpdateWithoutTeamInput;
  where: TeamInviteWhereUniqueInput;
};

export type TeamInviteUpsertWithWhereUniqueWithoutOwnerInput = {
  create: TeamInviteCreateWithoutOwnerInput;
  update: TeamInviteUpdateWithoutOwnerInput;
  where: TeamInviteWhereUniqueInput;
};

export type TeamInviteUpsertWithWhereUniqueWithoutTeamInput = {
  create: TeamInviteCreateWithoutTeamInput;
  update: TeamInviteUpdateWithoutTeamInput;
  where: TeamInviteWhereUniqueInput;
};

export type TeamInviteWhereInput = {
  AND?: Maybe<Array<TeamInviteWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TeamInviteWhereInput>>;
  OR?: Maybe<Array<TeamInviteWhereInput>>;
  owner?: Maybe<UserWhereInput>;
  ownerId?: Maybe<StringFilter>;
  redirect?: Maybe<StringNullableFilter>;
  role?: Maybe<EnumRoleFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  token?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TeamInviteWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type TeamOrderByInput = {
  completedOnboards?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  currency?: Maybe<SortOrder>;
  hasCreatedCampaigns?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  industry?: Maybe<SortOrder>;
  isDemo?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TeamUpdatecompletedOnboardsInput = {
  push?: Maybe<Onboards>;
  set?: Maybe<Array<Onboards>>;
};

export type TeamUpdateInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateOneRequiredWithoutCampaignGroupsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCampaignGroupsInput>;
  create?: Maybe<TeamCreateWithoutCampaignGroupsInput>;
  update?: Maybe<TeamUpdateWithoutCampaignGroupsInput>;
  upsert?: Maybe<TeamUpsertWithoutCampaignGroupsInput>;
};

export type TeamUpdateOneRequiredWithoutCampaignsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutCampaignsInput>;
  create?: Maybe<TeamCreateWithoutCampaignsInput>;
  update?: Maybe<TeamUpdateWithoutCampaignsInput>;
  upsert?: Maybe<TeamUpsertWithoutCampaignsInput>;
};

export type TeamUpdateOneRequiredWithoutFunnelsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutFunnelsInput>;
  create?: Maybe<TeamCreateWithoutFunnelsInput>;
  update?: Maybe<TeamUpdateWithoutFunnelsInput>;
  upsert?: Maybe<TeamUpsertWithoutFunnelsInput>;
};

export type TeamUpdateOneRequiredWithoutGoalsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutGoalsInput>;
  create?: Maybe<TeamCreateWithoutGoalsInput>;
  update?: Maybe<TeamUpdateWithoutGoalsInput>;
  upsert?: Maybe<TeamUpsertWithoutGoalsInput>;
};

export type TeamUpdateOneRequiredWithoutIdeaSessionInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutIdeaSessionInput>;
  create?: Maybe<TeamCreateWithoutIdeaSessionInput>;
  update?: Maybe<TeamUpdateWithoutIdeaSessionInput>;
  upsert?: Maybe<TeamUpsertWithoutIdeaSessionInput>;
};

export type TeamUpdateOneRequiredWithoutIdeasInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutIdeasInput>;
  create?: Maybe<TeamCreateWithoutIdeasInput>;
  update?: Maybe<TeamUpdateWithoutIdeasInput>;
  upsert?: Maybe<TeamUpsertWithoutIdeasInput>;
};

export type TeamUpdateOneRequiredWithoutIntegrationDefaultInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutIntegrationDefaultInput>;
  create?: Maybe<TeamCreateWithoutIntegrationDefaultInput>;
  update?: Maybe<TeamUpdateWithoutIntegrationDefaultInput>;
  upsert?: Maybe<TeamUpsertWithoutIntegrationDefaultInput>;
};

export type TeamUpdateOneRequiredWithoutIntegrationInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutIntegrationInput>;
  create?: Maybe<TeamCreateWithoutIntegrationInput>;
  update?: Maybe<TeamUpdateWithoutIntegrationInput>;
  upsert?: Maybe<TeamUpsertWithoutIntegrationInput>;
};

export type TeamUpdateOneRequiredWithoutInvitesInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutInvitesInput>;
  create?: Maybe<TeamCreateWithoutInvitesInput>;
  update?: Maybe<TeamUpdateWithoutInvitesInput>;
  upsert?: Maybe<TeamUpsertWithoutInvitesInput>;
};

export type TeamUpdateOneRequiredWithoutMembersInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutMembersInput>;
  create?: Maybe<TeamCreateWithoutMembersInput>;
  update?: Maybe<TeamUpdateWithoutMembersInput>;
  upsert?: Maybe<TeamUpsertWithoutMembersInput>;
};

export type TeamUpdateOneRequiredWithoutNotificationInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutNotificationInput>;
  create?: Maybe<TeamCreateWithoutNotificationInput>;
  update?: Maybe<TeamUpdateWithoutNotificationInput>;
  upsert?: Maybe<TeamUpsertWithoutNotificationInput>;
};

export type TeamUpdateOneRequiredWithoutProgressDataPointInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutProgressDataPointInput>;
  create?: Maybe<TeamCreateWithoutProgressDataPointInput>;
  update?: Maybe<TeamUpdateWithoutProgressDataPointInput>;
  upsert?: Maybe<TeamUpsertWithoutProgressDataPointInput>;
};

export type TeamUpdateOneRequiredWithoutRetrospectiveActionInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutRetrospectiveActionInput>;
  create?: Maybe<TeamCreateWithoutRetrospectiveActionInput>;
  update?: Maybe<TeamUpdateWithoutRetrospectiveActionInput>;
  upsert?: Maybe<TeamUpsertWithoutRetrospectiveActionInput>;
};

export type TeamUpdateOneRequiredWithoutRetrospectiveInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutRetrospectiveInput>;
  create?: Maybe<TeamCreateWithoutRetrospectiveInput>;
  update?: Maybe<TeamUpdateWithoutRetrospectiveInput>;
  upsert?: Maybe<TeamUpsertWithoutRetrospectiveInput>;
};

export type TeamUpdateOneRequiredWithoutSubscriptionsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutSubscriptionsInput>;
  create?: Maybe<TeamCreateWithoutSubscriptionsInput>;
  update?: Maybe<TeamUpdateWithoutSubscriptionsInput>;
  upsert?: Maybe<TeamUpsertWithoutSubscriptionsInput>;
};

export type TeamUpdateOneRequiredWithoutTagsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutTagsInput>;
  create?: Maybe<TeamCreateWithoutTagsInput>;
  update?: Maybe<TeamUpdateWithoutTagsInput>;
  upsert?: Maybe<TeamUpsertWithoutTagsInput>;
};

export type TeamUpdateOneRequiredWithoutTaskInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutTaskInput>;
  create?: Maybe<TeamCreateWithoutTaskInput>;
  update?: Maybe<TeamUpdateWithoutTaskInput>;
  upsert?: Maybe<TeamUpsertWithoutTaskInput>;
};

export type TeamUpdateOneWithoutChannelInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutChannelInput>;
  create?: Maybe<TeamCreateWithoutChannelInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutChannelInput>;
  upsert?: Maybe<TeamUpsertWithoutChannelInput>;
};

export type TeamUpdateOneWithoutSelectedUsersInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutSelectedUsersInput>;
  create?: Maybe<TeamCreateWithoutSelectedUsersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutSelectedUsersInput>;
  upsert?: Maybe<TeamUpsertWithoutSelectedUsersInput>;
};

export type TeamUpdateWithoutCampaignGroupsInput = {
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutCampaignsInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutChannelInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutFunnelsInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutGoalsInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutIdeaSessionInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutIdeasInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutIntegrationDefaultInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutIntegrationInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutInvitesInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutMembersInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutNotificationInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutProgressDataPointInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutRetrospectiveActionInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutRetrospectiveInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutSelectedUsersInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutSubscriptionsInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutTagsInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  Task?: Maybe<TaskUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutTaskInput = {
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutTeamInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutTeamInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutTeamInput>;
  completedOnboards?: Maybe<TeamUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutTeamInput>;
  goals?: Maybe<GoalUpdateManyWithoutTeamInput>;
  hasCreatedCampaigns?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutTeamInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutTeamInput>;
  industry?: Maybe<StringFieldUpdateOperationsInput>;
  integration?: Maybe<IntegrationUpdateManyWithoutTeamInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutTeamInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutTeamInput>;
  isDemo?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UserTeamUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutTeamInput>;
  ProgressDataPoint?: Maybe<ProgressDataPointUpdateManyWithoutTeamInput>;
  Retrospective?: Maybe<RetrospectiveUpdateManyWithoutTeamInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutTeamInput>;
  selectedUsers?: Maybe<UserUpdateManyWithoutSelectedTeamInput>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutTeamInput>;
  tags?: Maybe<TagUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpsertWithoutCampaignGroupsInput = {
  create: TeamCreateWithoutCampaignGroupsInput;
  update: TeamUpdateWithoutCampaignGroupsInput;
};

export type TeamUpsertWithoutCampaignsInput = {
  create: TeamCreateWithoutCampaignsInput;
  update: TeamUpdateWithoutCampaignsInput;
};

export type TeamUpsertWithoutChannelInput = {
  create: TeamCreateWithoutChannelInput;
  update: TeamUpdateWithoutChannelInput;
};

export type TeamUpsertWithoutFunnelsInput = {
  create: TeamCreateWithoutFunnelsInput;
  update: TeamUpdateWithoutFunnelsInput;
};

export type TeamUpsertWithoutGoalsInput = {
  create: TeamCreateWithoutGoalsInput;
  update: TeamUpdateWithoutGoalsInput;
};

export type TeamUpsertWithoutIdeaSessionInput = {
  create: TeamCreateWithoutIdeaSessionInput;
  update: TeamUpdateWithoutIdeaSessionInput;
};

export type TeamUpsertWithoutIdeasInput = {
  create: TeamCreateWithoutIdeasInput;
  update: TeamUpdateWithoutIdeasInput;
};

export type TeamUpsertWithoutIntegrationDefaultInput = {
  create: TeamCreateWithoutIntegrationDefaultInput;
  update: TeamUpdateWithoutIntegrationDefaultInput;
};

export type TeamUpsertWithoutIntegrationInput = {
  create: TeamCreateWithoutIntegrationInput;
  update: TeamUpdateWithoutIntegrationInput;
};

export type TeamUpsertWithoutInvitesInput = {
  create: TeamCreateWithoutInvitesInput;
  update: TeamUpdateWithoutInvitesInput;
};

export type TeamUpsertWithoutMembersInput = {
  create: TeamCreateWithoutMembersInput;
  update: TeamUpdateWithoutMembersInput;
};

export type TeamUpsertWithoutNotificationInput = {
  create: TeamCreateWithoutNotificationInput;
  update: TeamUpdateWithoutNotificationInput;
};

export type TeamUpsertWithoutProgressDataPointInput = {
  create: TeamCreateWithoutProgressDataPointInput;
  update: TeamUpdateWithoutProgressDataPointInput;
};

export type TeamUpsertWithoutRetrospectiveActionInput = {
  create: TeamCreateWithoutRetrospectiveActionInput;
  update: TeamUpdateWithoutRetrospectiveActionInput;
};

export type TeamUpsertWithoutRetrospectiveInput = {
  create: TeamCreateWithoutRetrospectiveInput;
  update: TeamUpdateWithoutRetrospectiveInput;
};

export type TeamUpsertWithoutSelectedUsersInput = {
  create: TeamCreateWithoutSelectedUsersInput;
  update: TeamUpdateWithoutSelectedUsersInput;
};

export type TeamUpsertWithoutSubscriptionsInput = {
  create: TeamCreateWithoutSubscriptionsInput;
  update: TeamUpdateWithoutSubscriptionsInput;
};

export type TeamUpsertWithoutTagsInput = {
  create: TeamCreateWithoutTagsInput;
  update: TeamUpdateWithoutTagsInput;
};

export type TeamUpsertWithoutTaskInput = {
  create: TeamCreateWithoutTaskInput;
  update: TeamUpdateWithoutTaskInput;
};

export type TeamWhereInput = {
  AND?: Maybe<Array<TeamWhereInput>>;
  campaignGroups?: Maybe<CampaignGroupListRelationFilter>;
  campaigns?: Maybe<CampaignListRelationFilter>;
  Channel?: Maybe<ChannelListRelationFilter>;
  completedOnboards?: Maybe<EnumOnboardsNullableListFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  currency?: Maybe<StringFilter>;
  funnels?: Maybe<FunnelListRelationFilter>;
  goals?: Maybe<GoalListRelationFilter>;
  hasCreatedCampaigns?: Maybe<BoolFilter>;
  id?: Maybe<StringFilter>;
  ideas?: Maybe<IdeaListRelationFilter>;
  IdeaSession?: Maybe<IdeaSessionListRelationFilter>;
  industry?: Maybe<StringFilter>;
  integration?: Maybe<IntegrationListRelationFilter>;
  integrationDefault?: Maybe<IntegrationDefaultListRelationFilter>;
  invites?: Maybe<TeamInviteListRelationFilter>;
  isDemo?: Maybe<BoolFilter>;
  members?: Maybe<UserTeamListRelationFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TeamWhereInput>>;
  Notification?: Maybe<NotificationListRelationFilter>;
  OR?: Maybe<Array<TeamWhereInput>>;
  ProgressDataPoint?: Maybe<ProgressDataPointListRelationFilter>;
  Retrospective?: Maybe<RetrospectiveListRelationFilter>;
  RetrospectiveAction?: Maybe<RetrospectiveActionListRelationFilter>;
  selectedUsers?: Maybe<UserListRelationFilter>;
  subscriptions?: Maybe<SubscriptionListRelationFilter>;
  tags?: Maybe<TagListRelationFilter>;
  Task?: Maybe<TaskListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TeamWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  acceptNotificationEmails: Scalars['Boolean'];
  completedOnboards: Array<Onboards>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  /** An array of connected provider account ids, excluding demo integrated accounts. Only viewable by superadmins */
  integratedProviders?: Maybe<Array<Maybe<Scalars['String']>>>;
  integrationCampaignsCount?: Maybe<Scalars['Int']>;
  integrations: Array<Integration>;
  name?: Maybe<Scalars['String']>;
  selectedTeam?: Maybe<Team>;
  teams: Array<UserTeam>;
  type: UserType;
};


export type UserIntegrationsArgs = {
  cursor?: Maybe<IntegrationWhereUniqueInput>;
  orderBy?: Maybe<Array<IntegrationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IntegrationWhereInput>;
};


export type UserTeamsArgs = {
  cursor?: Maybe<UserTeamWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type UserCreatecompletedOnboardsInput = {
  set?: Maybe<Array<Onboards>>;
};

export type UserCreateInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManycompletedOnboardsInput = {
  set?: Maybe<Array<Onboards>>;
};

export type UserCreateManySelectedTeamInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  completedOnboards?: Maybe<UserCreateManycompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManySelectedTeamInputEnvelope = {
  data?: Maybe<Array<UserCreateManySelectedTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutReactionInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutReactionInput>>;
  create?: Maybe<Array<UserCreateWithoutReactionInput>>;
};

export type UserCreateNestedManyWithoutSelectedTeamInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutSelectedTeamInput>>;
  create?: Maybe<Array<UserCreateWithoutSelectedTeamInput>>;
  createMany?: Maybe<UserCreateManySelectedTeamInputEnvelope>;
};

export type UserCreateNestedOneWithoutAccountInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAccountInput>;
  create?: Maybe<UserCreateWithoutAccountInput>;
};

export type UserCreateNestedOneWithoutCampaignGroupsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCampaignGroupsInput>;
  create?: Maybe<UserCreateWithoutCampaignGroupsInput>;
};

export type UserCreateNestedOneWithoutCampaignsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCampaignsInput>;
  create?: Maybe<UserCreateWithoutCampaignsInput>;
};

export type UserCreateNestedOneWithoutChannelInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutChannelInput>;
  create?: Maybe<UserCreateWithoutChannelInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutFunnelsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFunnelsInput>;
  create?: Maybe<UserCreateWithoutFunnelsInput>;
};

export type UserCreateNestedOneWithoutGoalDataPointInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutGoalDataPointInput>;
  create?: Maybe<UserCreateWithoutGoalDataPointInput>;
};

export type UserCreateNestedOneWithoutGoalsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutGoalsInput>;
  create?: Maybe<UserCreateWithoutGoalsInput>;
};

export type UserCreateNestedOneWithoutIdeaSessionInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutIdeaSessionInput>;
  create?: Maybe<UserCreateWithoutIdeaSessionInput>;
};

export type UserCreateNestedOneWithoutIdeasInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutIdeasInput>;
  create?: Maybe<UserCreateWithoutIdeasInput>;
};

export type UserCreateNestedOneWithoutIntegrationDefaultInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutIntegrationDefaultInput>;
  create?: Maybe<UserCreateWithoutIntegrationDefaultInput>;
};

export type UserCreateNestedOneWithoutIntegrationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutIntegrationsInput>;
  create?: Maybe<UserCreateWithoutIntegrationsInput>;
};

export type UserCreateNestedOneWithoutInvitesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutInvitesInput>;
  create?: Maybe<UserCreateWithoutInvitesInput>;
};

export type UserCreateNestedOneWithoutNotificationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: Maybe<UserCreateWithoutNotificationsInput>;
};

export type UserCreateNestedOneWithoutRetrospectiveActionInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRetrospectiveActionInput>;
  create?: Maybe<UserCreateWithoutRetrospectiveActionInput>;
};

export type UserCreateNestedOneWithoutSentNotificationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSentNotificationsInput>;
  create?: Maybe<UserCreateWithoutSentNotificationsInput>;
};

export type UserCreateNestedOneWithoutSubscriptionInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSubscriptionInput>;
  create?: Maybe<UserCreateWithoutSubscriptionInput>;
};

export type UserCreateNestedOneWithoutTagsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTagsInput>;
  create?: Maybe<UserCreateWithoutTagsInput>;
};

export type UserCreateNestedOneWithoutTasksInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTasksInput>;
  create?: Maybe<UserCreateWithoutTasksInput>;
};

export type UserCreateNestedOneWithoutTeamsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTeamsInput>;
  create?: Maybe<UserCreateWithoutTeamsInput>;
};

export type UserCreateOrConnectWithoutAccountInput = {
  create: UserCreateWithoutAccountInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCampaignGroupsInput = {
  create: UserCreateWithoutCampaignGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCampaignsInput = {
  create: UserCreateWithoutCampaignsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChannelInput = {
  create: UserCreateWithoutChannelInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFunnelsInput = {
  create: UserCreateWithoutFunnelsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutGoalDataPointInput = {
  create: UserCreateWithoutGoalDataPointInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutGoalsInput = {
  create: UserCreateWithoutGoalsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutIdeaSessionInput = {
  create: UserCreateWithoutIdeaSessionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutIdeasInput = {
  create: UserCreateWithoutIdeasInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutIntegrationDefaultInput = {
  create: UserCreateWithoutIntegrationDefaultInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutIntegrationsInput = {
  create: UserCreateWithoutIntegrationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutInvitesInput = {
  create: UserCreateWithoutInvitesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReactionInput = {
  create: UserCreateWithoutReactionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRetrospectiveActionInput = {
  create: UserCreateWithoutRetrospectiveActionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSelectedTeamInput = {
  create: UserCreateWithoutSelectedTeamInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSentNotificationsInput = {
  create: UserCreateWithoutSentNotificationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSubscriptionInput = {
  create: UserCreateWithoutSubscriptionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTagsInput = {
  create: UserCreateWithoutTagsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTasksInput = {
  create: UserCreateWithoutTasksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTeamsInput = {
  create: UserCreateWithoutTeamsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutCampaignGroupsInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutCampaignsInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutChannelInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutCommentsInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutFunnelsInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutGoalDataPointInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutGoalsInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutIdeaSessionInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutIdeasInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutIntegrationDefaultInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutIntegrationsInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutInvitesInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutNotificationsInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutReactionInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutRetrospectiveActionInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutSelectedTeamInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutSentNotificationsInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutSubscriptionInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTagsInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTasksInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  teams?: Maybe<UserTeamCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTeamsInput = {
  acceptNotificationEmails?: Maybe<Scalars['Boolean']>;
  Account?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupCreateNestedManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignCreateNestedManyWithoutUserInput>;
  Channel?: Maybe<ChannelCreateNestedManyWithoutOwnerInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  completedOnboards?: Maybe<UserCreatecompletedOnboardsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  funnels?: Maybe<FunnelCreateNestedManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointCreateNestedManyWithoutOwnerInput>;
  goals?: Maybe<GoalCreateNestedManyWithoutOwnerInput>;
  id?: Maybe<Scalars['String']>;
  ideas?: Maybe<IdeaCreateNestedManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionCreateNestedManyWithoutRequestedByInput>;
  image?: Maybe<Scalars['String']>;
  integrationDefault?: Maybe<IntegrationDefaultCreateNestedManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationCreateNestedManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteCreateNestedManyWithoutOwnerInput>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationCreateNestedManyWithoutUserInput>;
  Reaction?: Maybe<ReactionCreateNestedManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionCreateNestedManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamCreateNestedOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationCreateNestedManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionCreateNestedManyWithoutOwnerInput>;
  tags?: Maybe<TagCreateNestedManyWithoutOwnerInput>;
  tasks?: Maybe<TaskCreateNestedManyWithoutUserInput>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserOrderByInput = {
  acceptNotificationEmails?: Maybe<SortOrder>;
  completedOnboards?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  selectedTeamId?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserScalarWhereInput = {
  acceptNotificationEmails?: Maybe<BoolFilter>;
  AND?: Maybe<Array<UserScalarWhereInput>>;
  completedOnboards?: Maybe<EnumOnboardsNullableListFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  selectedTeamId?: Maybe<StringNullableFilter>;
  type?: Maybe<EnumUserTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserTeam = {
  __typename?: 'UserTeam';
  createdAt: Scalars['DateTime'];
  role: Role;
  team: Team;
  user: User;
};

export type UserTeamCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  role: Role;
  userId: Scalars['String'];
};

export type UserTeamCreateManyTeamInputEnvelope = {
  data?: Maybe<Array<UserTeamCreateManyTeamInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserTeamCreateManyUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  role: Role;
  teamId: Scalars['String'];
};

export type UserTeamCreateManyUserInputEnvelope = {
  data?: Maybe<Array<UserTeamCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserTeamCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<UserTeamWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserTeamCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<UserTeamCreateWithoutTeamInput>>;
  createMany?: Maybe<UserTeamCreateManyTeamInputEnvelope>;
};

export type UserTeamCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<UserTeamWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserTeamCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<UserTeamCreateWithoutUserInput>>;
  createMany?: Maybe<UserTeamCreateManyUserInputEnvelope>;
};

export type UserTeamCreateOrConnectWithoutTeamInput = {
  create: UserTeamCreateWithoutTeamInput;
  where: UserTeamWhereUniqueInput;
};

export type UserTeamCreateOrConnectWithoutUserInput = {
  create: UserTeamCreateWithoutUserInput;
  where: UserTeamWhereUniqueInput;
};

export type UserTeamCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  role: Role;
  user: UserCreateNestedOneWithoutTeamsInput;
};

export type UserTeamCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  role: Role;
  team: TeamCreateNestedOneWithoutMembersInput;
};

export type UserTeamListRelationFilter = {
  every?: Maybe<UserTeamWhereInput>;
  none?: Maybe<UserTeamWhereInput>;
  some?: Maybe<UserTeamWhereInput>;
};

export type UserTeamScalarWhereInput = {
  AND?: Maybe<Array<UserTeamScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<UserTeamScalarWhereInput>>;
  OR?: Maybe<Array<UserTeamScalarWhereInput>>;
  role?: Maybe<EnumRoleFilter>;
  teamId?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type UserTeamUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserTeamUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<UserTeamWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserTeamCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<UserTeamCreateWithoutTeamInput>>;
  createMany?: Maybe<UserTeamCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<UserTeamWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserTeamScalarWhereInput>>;
  disconnect?: Maybe<Array<UserTeamWhereUniqueInput>>;
  set?: Maybe<Array<UserTeamWhereUniqueInput>>;
  update?: Maybe<Array<UserTeamUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<UserTeamUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<UserTeamUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type UserTeamUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<UserTeamWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserTeamCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<UserTeamCreateWithoutUserInput>>;
  createMany?: Maybe<UserTeamCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<UserTeamWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserTeamScalarWhereInput>>;
  disconnect?: Maybe<Array<UserTeamWhereUniqueInput>>;
  set?: Maybe<Array<UserTeamWhereUniqueInput>>;
  update?: Maybe<Array<UserTeamUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UserTeamUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<UserTeamUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserTeamUpdateManyWithWhereWithoutTeamInput = {
  data: UserTeamUpdateManyMutationInput;
  where: UserTeamScalarWhereInput;
};

export type UserTeamUpdateManyWithWhereWithoutUserInput = {
  data: UserTeamUpdateManyMutationInput;
  where: UserTeamScalarWhereInput;
};

export type UserTeamUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutTeamsInput>;
};

export type UserTeamUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutMembersInput>;
};

export type UserTeamUpdateWithWhereUniqueWithoutTeamInput = {
  data: UserTeamUpdateWithoutTeamInput;
  where: UserTeamWhereUniqueInput;
};

export type UserTeamUpdateWithWhereUniqueWithoutUserInput = {
  data: UserTeamUpdateWithoutUserInput;
  where: UserTeamWhereUniqueInput;
};

export type UserTeamUpsertWithWhereUniqueWithoutTeamInput = {
  create: UserTeamCreateWithoutTeamInput;
  update: UserTeamUpdateWithoutTeamInput;
  where: UserTeamWhereUniqueInput;
};

export type UserTeamUpsertWithWhereUniqueWithoutUserInput = {
  create: UserTeamCreateWithoutUserInput;
  update: UserTeamUpdateWithoutUserInput;
  where: UserTeamWhereUniqueInput;
};

export type UserTeamUserIdTeamIdCompoundUniqueInput = {
  teamId: Scalars['String'];
  userId: Scalars['String'];
};

export type UserTeamWhereInput = {
  AND?: Maybe<Array<UserTeamWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<UserTeamWhereInput>>;
  OR?: Maybe<Array<UserTeamWhereInput>>;
  role?: Maybe<EnumRoleFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type UserTeamWhereUniqueInput = {
  userId_teamId?: Maybe<UserTeamUserIdTeamIdCompoundUniqueInput>;
};

export enum UserType {
  BETA = 'BETA',
  PUBLIC = 'PUBLIC',
  SUPERADMIN = 'SUPERADMIN'
}

export type UserUpdatecompletedOnboardsInput = {
  push?: Maybe<Onboards>;
  set?: Maybe<Array<Onboards>>;
};

export type UserUpdateInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithoutReactionInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutReactionInput>>;
  create?: Maybe<Array<UserCreateWithoutReactionInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutReactionInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutReactionInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutReactionInput>>;
};

export type UserUpdateManyWithoutSelectedTeamInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutSelectedTeamInput>>;
  create?: Maybe<Array<UserCreateWithoutSelectedTeamInput>>;
  createMany?: Maybe<UserCreateManySelectedTeamInputEnvelope>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutSelectedTeamInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutSelectedTeamInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutSelectedTeamInput>>;
};

export type UserUpdateManyWithWhereWithoutReactionInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutSelectedTeamInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateOneRequiredWithoutAccountInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAccountInput>;
  create?: Maybe<UserCreateWithoutAccountInput>;
  update?: Maybe<UserUpdateWithoutAccountInput>;
  upsert?: Maybe<UserUpsertWithoutAccountInput>;
};

export type UserUpdateOneRequiredWithoutCampaignsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCampaignsInput>;
  create?: Maybe<UserCreateWithoutCampaignsInput>;
  update?: Maybe<UserUpdateWithoutCampaignsInput>;
  upsert?: Maybe<UserUpsertWithoutCampaignsInput>;
};

export type UserUpdateOneRequiredWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<UserCreateWithoutCommentsInput>;
  update?: Maybe<UserUpdateWithoutCommentsInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneRequiredWithoutFunnelsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFunnelsInput>;
  create?: Maybe<UserCreateWithoutFunnelsInput>;
  update?: Maybe<UserUpdateWithoutFunnelsInput>;
  upsert?: Maybe<UserUpsertWithoutFunnelsInput>;
};

export type UserUpdateOneRequiredWithoutGoalDataPointInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutGoalDataPointInput>;
  create?: Maybe<UserCreateWithoutGoalDataPointInput>;
  update?: Maybe<UserUpdateWithoutGoalDataPointInput>;
  upsert?: Maybe<UserUpsertWithoutGoalDataPointInput>;
};

export type UserUpdateOneRequiredWithoutGoalsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutGoalsInput>;
  create?: Maybe<UserCreateWithoutGoalsInput>;
  update?: Maybe<UserUpdateWithoutGoalsInput>;
  upsert?: Maybe<UserUpsertWithoutGoalsInput>;
};

export type UserUpdateOneRequiredWithoutIdeaSessionInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutIdeaSessionInput>;
  create?: Maybe<UserCreateWithoutIdeaSessionInput>;
  update?: Maybe<UserUpdateWithoutIdeaSessionInput>;
  upsert?: Maybe<UserUpsertWithoutIdeaSessionInput>;
};

export type UserUpdateOneRequiredWithoutIdeasInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutIdeasInput>;
  create?: Maybe<UserCreateWithoutIdeasInput>;
  update?: Maybe<UserUpdateWithoutIdeasInput>;
  upsert?: Maybe<UserUpsertWithoutIdeasInput>;
};

export type UserUpdateOneRequiredWithoutIntegrationDefaultInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutIntegrationDefaultInput>;
  create?: Maybe<UserCreateWithoutIntegrationDefaultInput>;
  update?: Maybe<UserUpdateWithoutIntegrationDefaultInput>;
  upsert?: Maybe<UserUpsertWithoutIntegrationDefaultInput>;
};

export type UserUpdateOneRequiredWithoutIntegrationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutIntegrationsInput>;
  create?: Maybe<UserCreateWithoutIntegrationsInput>;
  update?: Maybe<UserUpdateWithoutIntegrationsInput>;
  upsert?: Maybe<UserUpsertWithoutIntegrationsInput>;
};

export type UserUpdateOneRequiredWithoutInvitesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutInvitesInput>;
  create?: Maybe<UserCreateWithoutInvitesInput>;
  update?: Maybe<UserUpdateWithoutInvitesInput>;
  upsert?: Maybe<UserUpsertWithoutInvitesInput>;
};

export type UserUpdateOneRequiredWithoutNotificationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: Maybe<UserCreateWithoutNotificationsInput>;
  update?: Maybe<UserUpdateWithoutNotificationsInput>;
  upsert?: Maybe<UserUpsertWithoutNotificationsInput>;
};

export type UserUpdateOneRequiredWithoutSubscriptionInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSubscriptionInput>;
  create?: Maybe<UserCreateWithoutSubscriptionInput>;
  update?: Maybe<UserUpdateWithoutSubscriptionInput>;
  upsert?: Maybe<UserUpsertWithoutSubscriptionInput>;
};

export type UserUpdateOneRequiredWithoutTagsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTagsInput>;
  create?: Maybe<UserCreateWithoutTagsInput>;
  update?: Maybe<UserUpdateWithoutTagsInput>;
  upsert?: Maybe<UserUpsertWithoutTagsInput>;
};

export type UserUpdateOneRequiredWithoutTasksInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTasksInput>;
  create?: Maybe<UserCreateWithoutTasksInput>;
  update?: Maybe<UserUpdateWithoutTasksInput>;
  upsert?: Maybe<UserUpsertWithoutTasksInput>;
};

export type UserUpdateOneRequiredWithoutTeamsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTeamsInput>;
  create?: Maybe<UserCreateWithoutTeamsInput>;
  update?: Maybe<UserUpdateWithoutTeamsInput>;
  upsert?: Maybe<UserUpsertWithoutTeamsInput>;
};

export type UserUpdateOneWithoutCampaignGroupsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCampaignGroupsInput>;
  create?: Maybe<UserCreateWithoutCampaignGroupsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutCampaignGroupsInput>;
  upsert?: Maybe<UserUpsertWithoutCampaignGroupsInput>;
};

export type UserUpdateOneWithoutChannelInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutChannelInput>;
  create?: Maybe<UserCreateWithoutChannelInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutChannelInput>;
  upsert?: Maybe<UserUpsertWithoutChannelInput>;
};

export type UserUpdateOneWithoutRetrospectiveActionInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRetrospectiveActionInput>;
  create?: Maybe<UserCreateWithoutRetrospectiveActionInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutRetrospectiveActionInput>;
  upsert?: Maybe<UserUpsertWithoutRetrospectiveActionInput>;
};

export type UserUpdateOneWithoutSentNotificationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSentNotificationsInput>;
  create?: Maybe<UserCreateWithoutSentNotificationsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutSentNotificationsInput>;
  upsert?: Maybe<UserUpsertWithoutSentNotificationsInput>;
};

export type UserUpdateWithoutAccountInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCampaignGroupsInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCampaignsInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChannelInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommentsInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFunnelsInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutGoalDataPointInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutGoalsInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutIdeaSessionInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutIdeasInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutIntegrationDefaultInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutIntegrationsInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutInvitesInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotificationsInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutReactionInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRetrospectiveActionInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSelectedTeamInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSentNotificationsInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSubscriptionInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTagsInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTasksInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  teams?: Maybe<UserTeamUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTeamsInput = {
  acceptNotificationEmails?: Maybe<BoolFieldUpdateOperationsInput>;
  Account?: Maybe<AccountUpdateManyWithoutUserInput>;
  campaignGroups?: Maybe<CampaignGroupUpdateManyWithoutOwnerInput>;
  campaigns?: Maybe<CampaignUpdateManyWithoutUserInput>;
  Channel?: Maybe<ChannelUpdateManyWithoutOwnerInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  completedOnboards?: Maybe<UserUpdatecompletedOnboardsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  funnels?: Maybe<FunnelUpdateManyWithoutOwnerInput>;
  GoalDataPoint?: Maybe<GoalDataPointUpdateManyWithoutOwnerInput>;
  goals?: Maybe<GoalUpdateManyWithoutOwnerInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutUserInput>;
  IdeaSession?: Maybe<IdeaSessionUpdateManyWithoutRequestedByInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  integrationDefault?: Maybe<IntegrationDefaultUpdateManyWithoutOwnerInput>;
  integrations?: Maybe<IntegrationUpdateManyWithoutOwnerInput>;
  invites?: Maybe<TeamInviteUpdateManyWithoutOwnerInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutUserInput>;
  Reaction?: Maybe<ReactionUpdateManyWithoutUsersInput>;
  RetrospectiveAction?: Maybe<RetrospectiveActionUpdateManyWithoutOwnerInput>;
  selectedTeam?: Maybe<TeamUpdateOneWithoutSelectedUsersInput>;
  sentNotifications?: Maybe<NotificationUpdateManyWithoutFromUserInput>;
  Subscription?: Maybe<SubscriptionUpdateManyWithoutOwnerInput>;
  tags?: Maybe<TagUpdateManyWithoutOwnerInput>;
  tasks?: Maybe<TaskUpdateManyWithoutUserInput>;
  type?: Maybe<EnumUserTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithWhereUniqueWithoutReactionInput = {
  data: UserUpdateWithoutReactionInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutSelectedTeamInput = {
  data: UserUpdateWithoutSelectedTeamInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutAccountInput = {
  create: UserCreateWithoutAccountInput;
  update: UserUpdateWithoutAccountInput;
};

export type UserUpsertWithoutCampaignGroupsInput = {
  create: UserCreateWithoutCampaignGroupsInput;
  update: UserUpdateWithoutCampaignGroupsInput;
};

export type UserUpsertWithoutCampaignsInput = {
  create: UserCreateWithoutCampaignsInput;
  update: UserUpdateWithoutCampaignsInput;
};

export type UserUpsertWithoutChannelInput = {
  create: UserCreateWithoutChannelInput;
  update: UserUpdateWithoutChannelInput;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
};

export type UserUpsertWithoutFunnelsInput = {
  create: UserCreateWithoutFunnelsInput;
  update: UserUpdateWithoutFunnelsInput;
};

export type UserUpsertWithoutGoalDataPointInput = {
  create: UserCreateWithoutGoalDataPointInput;
  update: UserUpdateWithoutGoalDataPointInput;
};

export type UserUpsertWithoutGoalsInput = {
  create: UserCreateWithoutGoalsInput;
  update: UserUpdateWithoutGoalsInput;
};

export type UserUpsertWithoutIdeaSessionInput = {
  create: UserCreateWithoutIdeaSessionInput;
  update: UserUpdateWithoutIdeaSessionInput;
};

export type UserUpsertWithoutIdeasInput = {
  create: UserCreateWithoutIdeasInput;
  update: UserUpdateWithoutIdeasInput;
};

export type UserUpsertWithoutIntegrationDefaultInput = {
  create: UserCreateWithoutIntegrationDefaultInput;
  update: UserUpdateWithoutIntegrationDefaultInput;
};

export type UserUpsertWithoutIntegrationsInput = {
  create: UserCreateWithoutIntegrationsInput;
  update: UserUpdateWithoutIntegrationsInput;
};

export type UserUpsertWithoutInvitesInput = {
  create: UserCreateWithoutInvitesInput;
  update: UserUpdateWithoutInvitesInput;
};

export type UserUpsertWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  update: UserUpdateWithoutNotificationsInput;
};

export type UserUpsertWithoutRetrospectiveActionInput = {
  create: UserCreateWithoutRetrospectiveActionInput;
  update: UserUpdateWithoutRetrospectiveActionInput;
};

export type UserUpsertWithoutSentNotificationsInput = {
  create: UserCreateWithoutSentNotificationsInput;
  update: UserUpdateWithoutSentNotificationsInput;
};

export type UserUpsertWithoutSubscriptionInput = {
  create: UserCreateWithoutSubscriptionInput;
  update: UserUpdateWithoutSubscriptionInput;
};

export type UserUpsertWithoutTagsInput = {
  create: UserCreateWithoutTagsInput;
  update: UserUpdateWithoutTagsInput;
};

export type UserUpsertWithoutTasksInput = {
  create: UserCreateWithoutTasksInput;
  update: UserUpdateWithoutTasksInput;
};

export type UserUpsertWithoutTeamsInput = {
  create: UserCreateWithoutTeamsInput;
  update: UserUpdateWithoutTeamsInput;
};

export type UserUpsertWithWhereUniqueWithoutReactionInput = {
  create: UserCreateWithoutReactionInput;
  update: UserUpdateWithoutReactionInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutSelectedTeamInput = {
  create: UserCreateWithoutSelectedTeamInput;
  update: UserUpdateWithoutSelectedTeamInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  acceptNotificationEmails?: Maybe<BoolFilter>;
  Account?: Maybe<AccountListRelationFilter>;
  AND?: Maybe<Array<UserWhereInput>>;
  campaignGroups?: Maybe<CampaignGroupListRelationFilter>;
  campaigns?: Maybe<CampaignListRelationFilter>;
  Channel?: Maybe<ChannelListRelationFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  completedOnboards?: Maybe<EnumOnboardsNullableListFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  funnels?: Maybe<FunnelListRelationFilter>;
  GoalDataPoint?: Maybe<GoalDataPointListRelationFilter>;
  goals?: Maybe<GoalListRelationFilter>;
  id?: Maybe<StringFilter>;
  ideas?: Maybe<IdeaListRelationFilter>;
  IdeaSession?: Maybe<IdeaSessionListRelationFilter>;
  image?: Maybe<StringNullableFilter>;
  integrationDefault?: Maybe<IntegrationDefaultListRelationFilter>;
  integrations?: Maybe<IntegrationListRelationFilter>;
  invites?: Maybe<TeamInviteListRelationFilter>;
  name?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  notifications?: Maybe<NotificationListRelationFilter>;
  OR?: Maybe<Array<UserWhereInput>>;
  Reaction?: Maybe<ReactionListRelationFilter>;
  RetrospectiveAction?: Maybe<RetrospectiveActionListRelationFilter>;
  selectedTeam?: Maybe<TeamWhereInput>;
  selectedTeamId?: Maybe<StringNullableFilter>;
  sentNotifications?: Maybe<NotificationListRelationFilter>;
  Subscription?: Maybe<SubscriptionListRelationFilter>;
  tags?: Maybe<TagListRelationFilter>;
  tasks?: Maybe<TaskListRelationFilter>;
  teams?: Maybe<UserTeamListRelationFilter>;
  type?: Maybe<EnumUserTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};
