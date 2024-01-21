export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
};

export enum Alliance {
  Blue = 'Blue',
  Red = 'Red',
  Solo = 'Solo'
}

export enum AllianceRole {
  Captain = 'Captain',
  FirstPick = 'FirstPick',
  SecondPick = 'SecondPick',
  Solo = 'Solo'
}

export enum AutoNav2021 {
  CompletelyInStorage = 'CompletelyInStorage',
  CompletelyInWarehouse = 'CompletelyInWarehouse',
  InStorage = 'InStorage',
  InWarehouse = 'InWarehouse',
  None = 'None'
}

export enum AutoNav2022 {
  None = 'None',
  Signal = 'Signal',
  TeamSignal = 'TeamSignal',
  Terminal = 'Terminal'
}

export enum AutoSpecialScoring {
  NoProp = 'NoProp',
  None = 'None',
  TeamProp = 'TeamProp'
}

export type Award = {
  __typename?: 'Award';
  createdAt: Scalars['DateTime']['output'];
  divisionName?: Maybe<Scalars['String']['output']>;
  event: Event;
  eventCode: Scalars['String']['output'];
  personName?: Maybe<Scalars['String']['output']>;
  placement: Scalars['Int']['output'];
  season: Scalars['Int']['output'];
  team: Team;
  teamNumber: Scalars['Int']['output'];
  type: AwardType;
  updatedAt: Scalars['DateTime']['output'];
};

export enum AwardType {
  Compass = 'Compass',
  ConferenceFinalist = 'ConferenceFinalist',
  Connect = 'Connect',
  Control = 'Control',
  DeansListFinalist = 'DeansListFinalist',
  DeansListSemiFinalist = 'DeansListSemiFinalist',
  DeansListWinner = 'DeansListWinner',
  Design = 'Design',
  DivisionFinalist = 'DivisionFinalist',
  DivisionWinner = 'DivisionWinner',
  Finalist = 'Finalist',
  Innovate = 'Innovate',
  Inspire = 'Inspire',
  JudgesChoice = 'JudgesChoice',
  Motivate = 'Motivate',
  Promote = 'Promote',
  Think = 'Think',
  TopRanked = 'TopRanked',
  Winner = 'Winner'
}

export enum BarcodeElement2021 {
  Duck = 'Duck',
  Tse = 'TSE'
}

export type BestName = {
  __typename?: 'BestName';
  id: Scalars['Int']['output'];
  team1: Team;
  team2: Team;
};

export type ConeLayout = {
  __typename?: 'ConeLayout';
  blueFarTerminal: Scalars['Int']['output'];
  blueNearTerminal: Scalars['Int']['output'];
  junctions: Array<Array<Array<ConeType>>>;
  redFarTerminal: Scalars['Int']['output'];
  redNearTerminal: Scalars['Int']['output'];
};

export enum ConeType {
  BlueBeacon1 = 'BlueBeacon1',
  BlueBeacon2 = 'BlueBeacon2',
  BlueCone = 'BlueCone',
  RedBeacon1 = 'RedBeacon1',
  RedBeacon2 = 'RedBeacon2',
  RedCone = 'RedCone'
}

export enum EgNav2023 {
  Backstage = 'Backstage',
  None = 'None',
  Rigging = 'Rigging'
}

export enum EgPark2021 {
  CompletelyInWarehouse = 'CompletelyInWarehouse',
  InWarehouse = 'InWarehouse',
  None = 'None'
}

export type Event = {
  __typename?: 'Event';
  address: Scalars['String']['output'];
  awards: Array<Award>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  districtCode?: Maybe<Scalars['String']['output']>;
  divisionCode?: Maybe<Scalars['String']['output']>;
  end: Scalars['Date']['output'];
  fieldCount: Scalars['Int']['output'];
  finished: Scalars['Boolean']['output'];
  hasMatches: Scalars['Boolean']['output'];
  hybrid: Scalars['Boolean']['output'];
  leagueCode?: Maybe<Scalars['String']['output']>;
  liveStreamURL?: Maybe<Scalars['String']['output']>;
  location: Location;
  matches: Array<Match>;
  name: Scalars['String']['output'];
  ongoing: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  regionCode?: Maybe<Scalars['String']['output']>;
  relatedEvents: Array<Event>;
  remote: Scalars['Boolean']['output'];
  season: Scalars['Int']['output'];
  start: Scalars['Date']['output'];
  started: Scalars['Boolean']['output'];
  teamMatches: Array<TeamMatchParticipation>;
  teams: Array<TeamEventParticipation>;
  timezone: Scalars['String']['output'];
  type: EventType;
  updatedAt: Scalars['DateTime']['output'];
  webcasts: Array<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};


export type EventTeamMatchesArgs = {
  teamNumber?: InputMaybe<Scalars['Int']['input']>;
};

export enum EventType {
  Championship = 'Championship',
  DemoExhibition = 'DemoExhibition',
  FirstChampionship = 'FIRSTChampionship',
  InnovationChallenge = 'InnovationChallenge',
  Kickoff = 'Kickoff',
  LeagueMeet = 'LeagueMeet',
  LeagueTournament = 'LeagueTournament',
  OffSeason = 'OffSeason',
  Other = 'Other',
  PracticeDay = 'PracticeDay',
  Qualifier = 'Qualifier',
  Scrimmage = 'Scrimmage',
  SuperQualifier = 'SuperQualifier',
  VolunteerSignup = 'VolunteerSignup',
  Workshop = 'Workshop'
}

export enum EventTypeOption {
  All = 'All',
  Championship = 'Championship',
  Competition = 'Competition',
  DemoExhibition = 'DemoExhibition',
  FirstChampionship = 'FIRSTChampionship',
  InnovationChallenge = 'InnovationChallenge',
  Kickoff = 'Kickoff',
  LeagueMeet = 'LeagueMeet',
  LeagueTournament = 'LeagueTournament',
  NonCompetition = 'NonCompetition',
  OffSeason = 'OffSeason',
  Official = 'Official',
  Other = 'Other',
  PracticeDay = 'PracticeDay',
  Qualifier = 'Qualifier',
  Scrimmage = 'Scrimmage',
  SuperQualifier = 'SuperQualifier',
  VolunteerSignup = 'VolunteerSignup',
  Workshop = 'Workshop'
}

export type Filter = {
  cond?: InputMaybe<FilterCond>;
  group?: InputMaybe<FilterGroup>;
};

export type FilterCond = {
  lhs: FilterValue;
  op: FilterOp;
  rhs: FilterValue;
};

export type FilterGroup = {
  children: Array<Filter>;
  ty: FilterGroupTy;
};

export enum FilterGroupTy {
  And = 'And',
  Or = 'Or'
}

export enum FilterOp {
  Eq = 'Eq',
  Gt = 'Gt',
  Gte = 'Gte',
  Lt = 'Lt',
  Lte = 'Lte',
  Neq = 'Neq'
}

export type FilterValue = {
  lit?: InputMaybe<Scalars['Int']['input']>;
  var?: InputMaybe<Scalars['String']['input']>;
};

export type Location = {
  __typename?: 'Location';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  state: Scalars['String']['output'];
  venue?: Maybe<Scalars['String']['output']>;
};

export type Match = {
  __typename?: 'Match';
  actualStartTime?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  event: Event;
  eventCode: Scalars['String']['output'];
  hasBeenPlayed: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  matchNum: Scalars['Int']['output'];
  postResultTime?: Maybe<Scalars['DateTime']['output']>;
  scheduledStartTime?: Maybe<Scalars['DateTime']['output']>;
  scores?: Maybe<MatchScores>;
  season: Scalars['Int']['output'];
  series: Scalars['Int']['output'];
  teams: Array<TeamMatchParticipation>;
  tournamentLevel: TournamentLevel;
  updatedAt: Scalars['DateTime']['output'];
};

export type MatchRecordRow = {
  __typename?: 'MatchRecordRow';
  data: SpecificAlliance;
  filterRank: Scalars['Int']['output'];
  filterSkipRank: Scalars['Int']['output'];
  noFilterRank: Scalars['Int']['output'];
  noFilterSkipRank: Scalars['Int']['output'];
};

export type MatchRecords = {
  __typename?: 'MatchRecords';
  count: Scalars['Int']['output'];
  data: Array<MatchRecordRow>;
  offset: Scalars['Int']['output'];
};

export type MatchScores = MatchScores2019 | MatchScores2020Remote | MatchScores2020Trad | MatchScores2021Remote | MatchScores2021Trad | MatchScores2022 | MatchScores2023;

export type MatchScores2019 = {
  __typename?: 'MatchScores2019';
  blue: MatchScores2019Alliance;
  eventCode: Scalars['String']['output'];
  matchId: Scalars['Int']['output'];
  red: MatchScores2019Alliance;
  season: Scalars['Int']['output'];
};

export type MatchScores2019Alliance = {
  __typename?: 'MatchScores2019Alliance';
  alliance: Alliance;
  autoDelivered: Scalars['Int']['output'];
  autoDeliveryPoints: Scalars['Int']['output'];
  autoFirstReturnedSkystone: Scalars['Boolean']['output'];
  autoNav2019_1: Scalars['Boolean']['output'];
  autoNav2019_2: Scalars['Boolean']['output'];
  autoNavPoints: Scalars['Int']['output'];
  autoPlaced: Scalars['Int']['output'];
  autoPlacementPoints: Scalars['Int']['output'];
  autoPoints: Scalars['Int']['output'];
  autoRepositioningPoints: Scalars['Int']['output'];
  autoReturned: Scalars['Int']['output'];
  autoSkystonesDeliveredFirst: Scalars['Int']['output'];
  capLevel1: Scalars['Int']['output'];
  capLevel2: Scalars['Int']['output'];
  cappingPoints: Scalars['Int']['output'];
  dcDelivered: Scalars['Int']['output'];
  dcDeliveryPoints: Scalars['Int']['output'];
  dcPlaced: Scalars['Int']['output'];
  dcPlacementPoints: Scalars['Int']['output'];
  dcPoints: Scalars['Int']['output'];
  dcReturned: Scalars['Int']['output'];
  egFoundationMoved: Scalars['Boolean']['output'];
  egFoundationMovedPoints: Scalars['Int']['output'];
  egParkPoints: Scalars['Int']['output'];
  egParked1: Scalars['Boolean']['output'];
  egParked2: Scalars['Boolean']['output'];
  egPoints: Scalars['Int']['output'];
  eventCode: Scalars['String']['output'];
  majorsByOpp: Scalars['Int']['output'];
  majorsCommitted: Scalars['Int']['output'];
  matchId: Scalars['Int']['output'];
  minorsByOpp: Scalars['Int']['output'];
  minorsCommitted: Scalars['Int']['output'];
  penaltyPointsByOpp: Scalars['Int']['output'];
  penaltyPointsCommitted: Scalars['Int']['output'];
  repositioned: Scalars['Boolean']['output'];
  season: Scalars['Int']['output'];
  skyscraperBonusPoints: Scalars['Int']['output'];
  skyscraperHeight: Scalars['Int']['output'];
  totalPoints: Scalars['Int']['output'];
  totalPointsNp: Scalars['Int']['output'];
};

export type MatchScores2020Alliance = {
  __typename?: 'MatchScores2020Alliance';
  alliance: Alliance;
  autoNav2020_1: Scalars['Boolean']['output'];
  autoNav2020_2: Scalars['Boolean']['output'];
  autoNavPoints: Scalars['Int']['output'];
  autoPoints: Scalars['Int']['output'];
  autoPowershotPoints: Scalars['Int']['output'];
  autoPowershots: Scalars['Int']['output'];
  autoTowerHigh: Scalars['Int']['output'];
  autoTowerLow: Scalars['Int']['output'];
  autoTowerMid: Scalars['Int']['output'];
  autoTowerPoints: Scalars['Int']['output'];
  autoWobble1: Scalars['Boolean']['output'];
  autoWobble2: Scalars['Boolean']['output'];
  autoWobblePoints: Scalars['Int']['output'];
  dcPoints: Scalars['Int']['output'];
  dcTowerHigh: Scalars['Int']['output'];
  dcTowerLow: Scalars['Int']['output'];
  dcTowerMid: Scalars['Int']['output'];
  egPoints: Scalars['Int']['output'];
  egPowershotPoints: Scalars['Int']['output'];
  egPowershots: Scalars['Int']['output'];
  egWobblePoints: Scalars['Int']['output'];
  egWobbleRingPoints: Scalars['Int']['output'];
  egWobbleRings: Scalars['Int']['output'];
  eventCode: Scalars['String']['output'];
  majorsCommitted: Scalars['Int']['output'];
  matchId: Scalars['Int']['output'];
  minorsCommitted: Scalars['Int']['output'];
  penaltyPointsCommitted: Scalars['Int']['output'];
  season: Scalars['Int']['output'];
  totalPoints: Scalars['Int']['output'];
  totalPointsNp: Scalars['Int']['output'];
  wobbleEndPos1: WobbleEndPosition2020;
  wobbleEndPos2: WobbleEndPosition2020;
};

export type MatchScores2020Remote = {
  __typename?: 'MatchScores2020Remote';
  alliance: Alliance;
  autoNav2020: Scalars['Boolean']['output'];
  autoNavPoints: Scalars['Int']['output'];
  autoPoints: Scalars['Int']['output'];
  autoPowershotPoints: Scalars['Int']['output'];
  autoPowershots: Scalars['Int']['output'];
  autoTowerHigh: Scalars['Int']['output'];
  autoTowerLow: Scalars['Int']['output'];
  autoTowerMid: Scalars['Int']['output'];
  autoTowerPoints: Scalars['Int']['output'];
  autoWobble1: Scalars['Boolean']['output'];
  autoWobble2: Scalars['Boolean']['output'];
  autoWobblePoints: Scalars['Int']['output'];
  dcPoints: Scalars['Int']['output'];
  dcTowerHigh: Scalars['Int']['output'];
  dcTowerLow: Scalars['Int']['output'];
  dcTowerMid: Scalars['Int']['output'];
  egPoints: Scalars['Int']['output'];
  egPowershotPoints: Scalars['Int']['output'];
  egPowershots: Scalars['Int']['output'];
  egWobblePoints: Scalars['Int']['output'];
  egWobbleRingPoints: Scalars['Int']['output'];
  egWobbleRings: Scalars['Int']['output'];
  eventCode: Scalars['String']['output'];
  majorsCommitted: Scalars['Int']['output'];
  matchId: Scalars['Int']['output'];
  minorsCommitted: Scalars['Int']['output'];
  penaltyPointsCommitted: Scalars['Int']['output'];
  season: Scalars['Int']['output'];
  totalPoints: Scalars['Int']['output'];
  totalPointsNp: Scalars['Int']['output'];
  wobbleEndPos1: WobbleEndPosition2020;
  wobbleEndPos2: WobbleEndPosition2020;
};

export type MatchScores2020Trad = {
  __typename?: 'MatchScores2020Trad';
  blue: MatchScores2020Alliance;
  eventCode: Scalars['String']['output'];
  matchId: Scalars['Int']['output'];
  red: MatchScores2020Alliance;
  season: Scalars['Int']['output'];
};

export type MatchScores2021Alliance = {
  __typename?: 'MatchScores2021Alliance';
  alliance: Alliance;
  allianceBalanced: Scalars['Boolean']['output'];
  allianceBalancedPoints: Scalars['Int']['output'];
  autoBonus1: Scalars['Boolean']['output'];
  autoBonus2: Scalars['Boolean']['output'];
  autoBonusPoints: Scalars['Int']['output'];
  autoCarousel: Scalars['Boolean']['output'];
  autoCarouselPoints: Scalars['Int']['output'];
  autoFreight1: Scalars['Int']['output'];
  autoFreight2: Scalars['Int']['output'];
  autoFreight3: Scalars['Int']['output'];
  autoFreightPoints: Scalars['Int']['output'];
  autoNav2021_1: AutoNav2021;
  autoNav2021_2: AutoNav2021;
  autoNavPoints: Scalars['Int']['output'];
  autoPoints: Scalars['Int']['output'];
  autoStorageFreight: Scalars['Int']['output'];
  barcodeElement1: BarcodeElement2021;
  barcodeElement2: BarcodeElement2021;
  capped: Scalars['Int']['output'];
  cappingPoints: Scalars['Int']['output'];
  dcAllianceHubPoints: Scalars['Int']['output'];
  dcFreight1: Scalars['Int']['output'];
  dcFreight2: Scalars['Int']['output'];
  dcFreight3: Scalars['Int']['output'];
  dcPoints: Scalars['Int']['output'];
  dcSharedHubPoints: Scalars['Int']['output'];
  dcStorageFreight: Scalars['Int']['output'];
  dcStoragePoints: Scalars['Int']['output'];
  egDuckPoints: Scalars['Int']['output'];
  egDucks: Scalars['Int']['output'];
  egPark1: EgPark2021;
  egPark2: EgPark2021;
  egParkPoints: Scalars['Int']['output'];
  egPoints: Scalars['Int']['output'];
  eventCode: Scalars['String']['output'];
  majorsCommitted: Scalars['Int']['output'];
  matchId: Scalars['Int']['output'];
  minorsCommitted: Scalars['Int']['output'];
  penaltyPointsCommitted: Scalars['Int']['output'];
  season: Scalars['Int']['output'];
  sharedFreight: Scalars['Int']['output'];
  sharedUnbalanced: Scalars['Boolean']['output'];
  sharedUnbalancedPoints: Scalars['Int']['output'];
  totalPoints: Scalars['Int']['output'];
  totalPointsNp: Scalars['Int']['output'];
};

export type MatchScores2021Remote = {
  __typename?: 'MatchScores2021Remote';
  alliance: Alliance;
  allianceBalanced: Scalars['Boolean']['output'];
  allianceBalancedPoints: Scalars['Int']['output'];
  autoBonus: Scalars['Boolean']['output'];
  autoBonusPoints: Scalars['Int']['output'];
  autoCarousel: Scalars['Boolean']['output'];
  autoCarouselPoints: Scalars['Int']['output'];
  autoFreight1: Scalars['Int']['output'];
  autoFreight2: Scalars['Int']['output'];
  autoFreight3: Scalars['Int']['output'];
  autoFreightPoints: Scalars['Int']['output'];
  autoNav2021: AutoNav2021;
  autoNavPoints: Scalars['Int']['output'];
  autoPoints: Scalars['Int']['output'];
  autoStorageFreight: Scalars['Int']['output'];
  barcodeElement: BarcodeElement2021;
  capped: Scalars['Int']['output'];
  cappingPoints: Scalars['Int']['output'];
  dcAllianceHubPoints: Scalars['Int']['output'];
  dcFreight1: Scalars['Int']['output'];
  dcFreight2: Scalars['Int']['output'];
  dcFreight3: Scalars['Int']['output'];
  dcPoints: Scalars['Int']['output'];
  dcStorageFreight: Scalars['Int']['output'];
  dcStoragePoints: Scalars['Int']['output'];
  egDuckPoints: Scalars['Int']['output'];
  egDucks: Scalars['Int']['output'];
  egPark: EgPark2021;
  egParkPoints: Scalars['Int']['output'];
  egPoints: Scalars['Int']['output'];
  eventCode: Scalars['String']['output'];
  majorsCommitted: Scalars['Int']['output'];
  matchId: Scalars['Int']['output'];
  minorsCommitted: Scalars['Int']['output'];
  penaltyPointsCommitted: Scalars['Int']['output'];
  season: Scalars['Int']['output'];
  totalPoints: Scalars['Int']['output'];
  totalPointsNp: Scalars['Int']['output'];
};

export type MatchScores2021Trad = {
  __typename?: 'MatchScores2021Trad';
  blue: MatchScores2021Alliance;
  eventCode: Scalars['String']['output'];
  matchId: Scalars['Int']['output'];
  red: MatchScores2021Alliance;
  season: Scalars['Int']['output'];
};

export type MatchScores2022 = {
  __typename?: 'MatchScores2022';
  autoConeLayout: ConeLayout;
  blue: MatchScores2022Alliance;
  dcConeLayout: ConeLayout;
  eventCode: Scalars['String']['output'];
  matchId: Scalars['Int']['output'];
  red: MatchScores2022Alliance;
  season: Scalars['Int']['output'];
};

export type MatchScores2022Alliance = {
  __typename?: 'MatchScores2022Alliance';
  alliance: Alliance;
  autoConePoints: Scalars['Int']['output'];
  autoGroundCones: Scalars['Int']['output'];
  autoHighCones: Scalars['Int']['output'];
  autoLowCones: Scalars['Int']['output'];
  autoMediumCones: Scalars['Int']['output'];
  autoNav2022_1: AutoNav2022;
  autoNav2022_2: AutoNav2022;
  autoNavPoints: Scalars['Int']['output'];
  autoPoints: Scalars['Int']['output'];
  autoTerminalCones: Scalars['Int']['output'];
  beaconOwnedJunctions: Scalars['Int']['output'];
  circuit: Scalars['Boolean']['output'];
  circuitPoints: Scalars['Int']['output'];
  coneOwnedJunctions: Scalars['Int']['output'];
  dcFarTerminalCones: Scalars['Int']['output'];
  dcGroundCones: Scalars['Int']['output'];
  dcHighCones: Scalars['Int']['output'];
  dcLowCones: Scalars['Int']['output'];
  dcMediumCones: Scalars['Int']['output'];
  dcNearTerminalCones: Scalars['Int']['output'];
  dcPoints: Scalars['Int']['output'];
  dcTerminalCones: Scalars['Int']['output'];
  egNav1: Scalars['Boolean']['output'];
  egNav2: Scalars['Boolean']['output'];
  egNavPoints: Scalars['Int']['output'];
  egPoints: Scalars['Int']['output'];
  eventCode: Scalars['String']['output'];
  majorsByOpp: Scalars['Int']['output'];
  majorsCommitted: Scalars['Int']['output'];
  matchId: Scalars['Int']['output'];
  minorsByOpp: Scalars['Int']['output'];
  minorsCommitted: Scalars['Int']['output'];
  ownershipPoints: Scalars['Int']['output'];
  penaltyPointsByOpp: Scalars['Int']['output'];
  penaltyPointsCommitted: Scalars['Int']['output'];
  season: Scalars['Int']['output'];
  totalPoints: Scalars['Int']['output'];
  totalPointsNp: Scalars['Int']['output'];
};

export type MatchScores2023 = {
  __typename?: 'MatchScores2023';
  blue: MatchScores2023Alliance;
  eventCode: Scalars['String']['output'];
  matchId: Scalars['Int']['output'];
  red: MatchScores2023Alliance;
  season: Scalars['Int']['output'];
};

export type MatchScores2023Alliance = {
  __typename?: 'MatchScores2023Alliance';
  alliance: Alliance;
  autoBackdrop: Scalars['Int']['output'];
  autoBackstage: Scalars['Int']['output'];
  autoNav1: Scalars['Boolean']['output'];
  autoNav2: Scalars['Boolean']['output'];
  autoNavPoints: Scalars['Int']['output'];
  autoPixelPoints: Scalars['Int']['output'];
  autoPoints: Scalars['Int']['output'];
  dcBackdrop: Scalars['Int']['output'];
  dcBackstage: Scalars['Int']['output'];
  dcPoints: Scalars['Int']['output'];
  drone1: Scalars['Int']['output'];
  drone2: Scalars['Int']['output'];
  dronePoints: Scalars['Int']['output'];
  egNav2023_1: EgNav2023;
  egNav2023_2: EgNav2023;
  egNavPoints: Scalars['Int']['output'];
  egPoints: Scalars['Int']['output'];
  eventCode: Scalars['String']['output'];
  majorsByOpp: Scalars['Int']['output'];
  majorsCommitted: Scalars['Int']['output'];
  matchId: Scalars['Int']['output'];
  maxSetLine: Scalars['Int']['output'];
  minorsByOpp: Scalars['Int']['output'];
  minorsCommitted: Scalars['Int']['output'];
  mosaicPoints: Scalars['Int']['output'];
  mosaics: Scalars['Int']['output'];
  penaltyPointsByOpp: Scalars['Int']['output'];
  penaltyPointsCommitted: Scalars['Int']['output'];
  purple1: AutoSpecialScoring;
  purple2: AutoSpecialScoring;
  purplePoints: Scalars['Int']['output'];
  season: Scalars['Int']['output'];
  setLinePoints: Scalars['Int']['output'];
  totalPoints: Scalars['Int']['output'];
  totalPointsNp: Scalars['Int']['output'];
  yellow1: AutoSpecialScoring;
  yellow2: AutoSpecialScoring;
  yellowPoints: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  voteBestName?: Maybe<BestName>;
};


export type MutationVoteBestNameArgs = {
  id: Scalars['Int']['input'];
  vote: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  activeTeamsCount: Scalars['Int']['output'];
  eventByCode?: Maybe<Event>;
  eventsOnDate: Array<Event>;
  eventsSearch: Array<Event>;
  getBestName?: Maybe<BestName>;
  matchRecords: MatchRecords;
  matchesPlayedCount: Scalars['Int']['output'];
  teamByName?: Maybe<Team>;
  teamByNumber?: Maybe<Team>;
  teamsSearch: Array<Team>;
  tepRecords: TepRecords;
  tradWorldRecord: Match;
};


export type QueryActiveTeamsCountArgs = {
  season: Scalars['Int']['input'];
};


export type QueryEventByCodeArgs = {
  code: Scalars['String']['input'];
  season: Scalars['Int']['input'];
};


export type QueryEventsOnDateArgs = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<EventTypeOption>;
};


export type QueryEventsSearchArgs = {
  end?: InputMaybe<Scalars['Date']['input']>;
  hasMatches?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<RegionOption>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  season: Scalars['Int']['input'];
  start?: InputMaybe<Scalars['Date']['input']>;
  type?: InputMaybe<EventTypeOption>;
};


export type QueryMatchRecordsArgs = {
  end?: InputMaybe<Scalars['Date']['input']>;
  filter?: InputMaybe<Filter>;
  region?: InputMaybe<RegionOption>;
  remote?: InputMaybe<RemoteOption>;
  season: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDir?: InputMaybe<SortDir>;
  start?: InputMaybe<Scalars['Date']['input']>;
  take: Scalars['Int']['input'];
  type?: InputMaybe<EventTypeOption>;
};


export type QueryMatchesPlayedCountArgs = {
  season: Scalars['Int']['input'];
};


export type QueryTeamByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryTeamByNumberArgs = {
  number: Scalars['Int']['input'];
};


export type QueryTeamsSearchArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<RegionOption>;
  searchText?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTepRecordsArgs = {
  end?: InputMaybe<Scalars['Date']['input']>;
  filter?: InputMaybe<Filter>;
  region?: InputMaybe<RegionOption>;
  remote?: InputMaybe<RemoteOption>;
  season: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDir?: InputMaybe<SortDir>;
  start?: InputMaybe<Scalars['Date']['input']>;
  take: Scalars['Int']['input'];
  type?: InputMaybe<EventTypeOption>;
};


export type QueryTradWorldRecordArgs = {
  season: Scalars['Int']['input'];
};

export type QuickStat = {
  __typename?: 'QuickStat';
  rank: Scalars['Int']['output'];
  value: Scalars['Float']['output'];
};

export type QuickStats = {
  __typename?: 'QuickStats';
  auto: QuickStat;
  count: Scalars['Int']['output'];
  dc: QuickStat;
  eg: QuickStat;
  number: Scalars['Int']['output'];
  season: Scalars['Int']['output'];
  tot: QuickStat;
};

export enum RegionOption {
  Au = 'AU',
  All = 'All',
  Br = 'BR',
  Caab = 'CAAB',
  Cabc = 'CABC',
  Caon = 'CAON',
  Caqc = 'CAQC',
  Cmpic = 'CMPIC',
  Cmpz2 = 'CMPZ2',
  Cn = 'CN',
  Cy = 'CY',
  De = 'DE',
  Eg = 'EG',
  Es = 'ES',
  Fr = 'FR',
  Gb = 'GB',
  Il = 'IL',
  In = 'IN',
  International = 'International',
  Jm = 'JM',
  Kr = 'KR',
  Kz = 'KZ',
  Ly = 'LY',
  Mx = 'MX',
  Ng = 'NG',
  Nl = 'NL',
  Nz = 'NZ',
  Onadod = 'ONADOD',
  Qa = 'QA',
  Ro = 'RO',
  Ru = 'RU',
  Sa = 'SA',
  Th = 'TH',
  Tw = 'TW',
  Usak = 'USAK',
  Usal = 'USAL',
  Usar = 'USAR',
  Usarl = 'USARL',
  Usaz = 'USAZ',
  Usca = 'USCA',
  Uscala = 'USCALA',
  Uscals = 'USCALS',
  Uscano = 'USCANO',
  Uscasd = 'USCASD',
  Uschs = 'USCHS',
  Usco = 'USCO',
  Usct = 'USCT',
  Usde = 'USDE',
  Usfl = 'USFL',
  Usga = 'USGA',
  Ushi = 'USHI',
  Usia = 'USIA',
  Usid = 'USID',
  Usil = 'USIL',
  Usin = 'USIN',
  Usky = 'USKY',
  Usla = 'USLA',
  Usma = 'USMA',
  Usmd = 'USMD',
  Usmi = 'USMI',
  Usmn = 'USMN',
  Usmoks = 'USMOKS',
  Usms = 'USMS',
  Usmt = 'USMT',
  Usnc = 'USNC',
  Usnd = 'USND',
  Usnh = 'USNH',
  Usnj = 'USNJ',
  Usnm = 'USNM',
  Usnv = 'USNV',
  Usny = 'USNY',
  Usnyex = 'USNYEX',
  Usnyli = 'USNYLI',
  Usnyny = 'USNYNY',
  Usoh = 'USOH',
  Usok = 'USOK',
  Usor = 'USOR',
  Uspa = 'USPA',
  Usri = 'USRI',
  Ussc = 'USSC',
  Ustn = 'USTN',
  Ustx = 'USTX',
  Ustxce = 'USTXCE',
  Ustxho = 'USTXHO',
  Ustxno = 'USTXNO',
  Ustxso = 'USTXSO',
  Ustxwp = 'USTXWP',
  Usut = 'USUT',
  Usva = 'USVA',
  Usvt = 'USVT',
  Uswa = 'USWA',
  Uswi = 'USWI',
  Uswv = 'USWV',
  Uswy = 'USWY',
  UnitedStates = 'UnitedStates',
  Za = 'ZA'
}

export enum RemoteOption {
  All = 'All',
  Remote = 'Remote',
  Trad = 'Trad'
}

export enum SortDir {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type SpecificAlliance = {
  __typename?: 'SpecificAlliance';
  alliance: Alliance;
  match: Match;
};

export enum Station {
  NotOnField = 'NotOnField',
  One = 'One',
  Solo = 'Solo',
  Two = 'Two'
}

export type Subscription = {
  __typename?: 'Subscription';
  newMatches?: Maybe<Array<Match>>;
};


export type SubscriptionNewMatchesArgs = {
  code: Scalars['String']['input'];
  season: Scalars['Int']['input'];
};

export type Team = {
  __typename?: 'Team';
  awards: Array<Award>;
  createdAt: Scalars['DateTime']['output'];
  events: Array<TeamEventParticipation>;
  location: Location;
  matches: Array<TeamMatchParticipation>;
  name: Scalars['String']['output'];
  number: Scalars['Int']['output'];
  quickStats?: Maybe<QuickStats>;
  rookieYear: Scalars['Int']['output'];
  schoolName: Scalars['String']['output'];
  sponsors: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


export type TeamAwardsArgs = {
  season?: InputMaybe<Scalars['Int']['input']>;
};


export type TeamEventsArgs = {
  season: Scalars['Int']['input'];
};


export type TeamMatchesArgs = {
  eventCode?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<Scalars['Int']['input']>;
};


export type TeamQuickStatsArgs = {
  region?: InputMaybe<RegionOption>;
  season: Scalars['Int']['input'];
};

export type TeamEventParticipation = {
  __typename?: 'TeamEventParticipation';
  awards: Array<Award>;
  event: Event;
  eventCode: Scalars['String']['output'];
  matches: Array<TeamMatchParticipation>;
  season: Scalars['Int']['output'];
  stats?: Maybe<TeamEventStats>;
  team: Team;
  teamNumber: Scalars['Int']['output'];
};

export type TeamEventStats = TeamEventStats2019 | TeamEventStats2020Remote | TeamEventStats2020Trad | TeamEventStats2021Remote | TeamEventStats2021Trad | TeamEventStats2022 | TeamEventStats2023;

export type TeamEventStats2019 = {
  __typename?: 'TeamEventStats2019';
  avg: TeamEventStats2019Group;
  dev: TeamEventStats2019Group;
  dqs: Scalars['Int']['output'];
  losses: Scalars['Int']['output'];
  max: TeamEventStats2019Group;
  min: TeamEventStats2019Group;
  opr: TeamEventStats2019Group;
  qualMatchesPlayed: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  rp: Scalars['Float']['output'];
  tb1: Scalars['Float']['output'];
  ties: Scalars['Int']['output'];
  tot: TeamEventStats2019Group;
  wins: Scalars['Int']['output'];
};

export type TeamEventStats2019Group = {
  __typename?: 'TeamEventStats2019Group';
  autoDeliveryPoints: Scalars['Float']['output'];
  autoNavPoints: Scalars['Float']['output'];
  autoNavPointsIndividual: Scalars['Float']['output'];
  autoPlacementPoints: Scalars['Float']['output'];
  autoPoints: Scalars['Float']['output'];
  autoRepositioningPoints: Scalars['Float']['output'];
  cappingPoints: Scalars['Float']['output'];
  cappingPointsIndividual: Scalars['Float']['output'];
  dcDeliveryPoints: Scalars['Float']['output'];
  dcPlacementPoints: Scalars['Float']['output'];
  dcPoints: Scalars['Float']['output'];
  egFoundationMovedPoints: Scalars['Float']['output'];
  egParkPoints: Scalars['Float']['output'];
  egParkPointsIndividual: Scalars['Float']['output'];
  egPoints: Scalars['Float']['output'];
  majorsByOppPoints: Scalars['Float']['output'];
  majorsCommittedPoints: Scalars['Float']['output'];
  minorsByOppPoints: Scalars['Float']['output'];
  minorsCommittedPoints: Scalars['Float']['output'];
  penaltyPointsByOpp: Scalars['Float']['output'];
  penaltyPointsCommitted: Scalars['Float']['output'];
  skyscraperBonusPoints: Scalars['Float']['output'];
  totalPoints: Scalars['Float']['output'];
  totalPointsNp: Scalars['Float']['output'];
};

export type TeamEventStats2020Remote = {
  __typename?: 'TeamEventStats2020Remote';
  avg: TeamEventStats2020RemoteGroup;
  dev: TeamEventStats2020RemoteGroup;
  max: TeamEventStats2020RemoteGroup;
  min: TeamEventStats2020RemoteGroup;
  opr: TeamEventStats2020RemoteGroup;
  qualMatchesPlayed: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  rp: Scalars['Float']['output'];
  tb1: Scalars['Float']['output'];
  tb2: Scalars['Float']['output'];
  tot: TeamEventStats2020RemoteGroup;
};

export type TeamEventStats2020RemoteGroup = {
  __typename?: 'TeamEventStats2020RemoteGroup';
  autoNavPoints: Scalars['Float']['output'];
  autoNavPointsIndividual: Scalars['Float']['output'];
  autoPoints: Scalars['Float']['output'];
  autoPowershotPoints: Scalars['Float']['output'];
  autoTowerHighPoints: Scalars['Float']['output'];
  autoTowerLowPoints: Scalars['Float']['output'];
  autoTowerMidPoints: Scalars['Float']['output'];
  autoTowerPoints: Scalars['Float']['output'];
  autoWobblePoints: Scalars['Float']['output'];
  dcPoints: Scalars['Float']['output'];
  dcTowerHighPoints: Scalars['Float']['output'];
  dcTowerLowPoints: Scalars['Float']['output'];
  dcTowerMidPoints: Scalars['Float']['output'];
  egPoints: Scalars['Float']['output'];
  egPowershotPoints: Scalars['Float']['output'];
  egWobblePoints: Scalars['Float']['output'];
  egWobbleRingPoints: Scalars['Float']['output'];
  majorsCommittedPoints: Scalars['Float']['output'];
  minorsCommittedPoints: Scalars['Float']['output'];
  penaltyPointsCommitted: Scalars['Float']['output'];
  totalPoints: Scalars['Float']['output'];
  totalPointsNp: Scalars['Float']['output'];
};

export type TeamEventStats2020Trad = {
  __typename?: 'TeamEventStats2020Trad';
  avg: TeamEventStats2020TradGroup;
  dev: TeamEventStats2020TradGroup;
  dqs: Scalars['Int']['output'];
  losses: Scalars['Int']['output'];
  max: TeamEventStats2020TradGroup;
  min: TeamEventStats2020TradGroup;
  opr: TeamEventStats2020TradGroup;
  qualMatchesPlayed: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  rp: Scalars['Float']['output'];
  tb1: Scalars['Float']['output'];
  tb2: Scalars['Float']['output'];
  ties: Scalars['Int']['output'];
  tot: TeamEventStats2020TradGroup;
  wins: Scalars['Int']['output'];
};

export type TeamEventStats2020TradGroup = {
  __typename?: 'TeamEventStats2020TradGroup';
  autoNavPoints: Scalars['Float']['output'];
  autoNavPointsIndividual: Scalars['Float']['output'];
  autoPoints: Scalars['Float']['output'];
  autoPowershotPoints: Scalars['Float']['output'];
  autoTowerHighPoints: Scalars['Float']['output'];
  autoTowerLowPoints: Scalars['Float']['output'];
  autoTowerMidPoints: Scalars['Float']['output'];
  autoTowerPoints: Scalars['Float']['output'];
  autoWobblePoints: Scalars['Float']['output'];
  dcPoints: Scalars['Float']['output'];
  dcTowerHighPoints: Scalars['Float']['output'];
  dcTowerLowPoints: Scalars['Float']['output'];
  dcTowerMidPoints: Scalars['Float']['output'];
  egPoints: Scalars['Float']['output'];
  egPowershotPoints: Scalars['Float']['output'];
  egWobblePoints: Scalars['Float']['output'];
  egWobbleRingPoints: Scalars['Float']['output'];
  majorsCommittedPoints: Scalars['Float']['output'];
  minorsCommittedPoints: Scalars['Float']['output'];
  penaltyPointsCommitted: Scalars['Float']['output'];
  totalPoints: Scalars['Float']['output'];
  totalPointsNp: Scalars['Float']['output'];
};

export type TeamEventStats2021Remote = {
  __typename?: 'TeamEventStats2021Remote';
  avg: TeamEventStats2021RemoteGroup;
  dev: TeamEventStats2021RemoteGroup;
  max: TeamEventStats2021RemoteGroup;
  min: TeamEventStats2021RemoteGroup;
  opr: TeamEventStats2021RemoteGroup;
  qualMatchesPlayed: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  rp: Scalars['Float']['output'];
  tb1: Scalars['Float']['output'];
  tb2: Scalars['Float']['output'];
  tot: TeamEventStats2021RemoteGroup;
};

export type TeamEventStats2021RemoteGroup = {
  __typename?: 'TeamEventStats2021RemoteGroup';
  allianceBalancedPoints: Scalars['Float']['output'];
  autoBonusPoints: Scalars['Float']['output'];
  autoBonusPointsIndividual: Scalars['Float']['output'];
  autoCarouselPoints: Scalars['Float']['output'];
  autoFreight1Points: Scalars['Float']['output'];
  autoFreight2Points: Scalars['Float']['output'];
  autoFreight3Points: Scalars['Float']['output'];
  autoFreightPoints: Scalars['Float']['output'];
  autoFreightStoragePoints: Scalars['Float']['output'];
  autoNavPoints: Scalars['Float']['output'];
  autoNavPointsIndividual: Scalars['Float']['output'];
  autoPoints: Scalars['Float']['output'];
  cappingPoints: Scalars['Float']['output'];
  dcAllianceHubPoints: Scalars['Float']['output'];
  dcFreight1Points: Scalars['Float']['output'];
  dcFreight2Points: Scalars['Float']['output'];
  dcFreight3Points: Scalars['Float']['output'];
  dcPoints: Scalars['Float']['output'];
  dcStoragePoints: Scalars['Float']['output'];
  egDuckPoints: Scalars['Float']['output'];
  egParkPoints: Scalars['Float']['output'];
  egParkPointsIndividual: Scalars['Float']['output'];
  egPoints: Scalars['Float']['output'];
  majorsCommittedPoints: Scalars['Float']['output'];
  minorsCommittedPoints: Scalars['Float']['output'];
  penaltyPointsCommitted: Scalars['Float']['output'];
  totalPoints: Scalars['Float']['output'];
  totalPointsNp: Scalars['Float']['output'];
};

export type TeamEventStats2021Trad = {
  __typename?: 'TeamEventStats2021Trad';
  avg: TeamEventStats2021TradGroup;
  dev: TeamEventStats2021TradGroup;
  dqs: Scalars['Int']['output'];
  losses: Scalars['Int']['output'];
  max: TeamEventStats2021TradGroup;
  min: TeamEventStats2021TradGroup;
  opr: TeamEventStats2021TradGroup;
  qualMatchesPlayed: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  rp: Scalars['Float']['output'];
  tb1: Scalars['Float']['output'];
  tb2: Scalars['Float']['output'];
  ties: Scalars['Int']['output'];
  tot: TeamEventStats2021TradGroup;
  wins: Scalars['Int']['output'];
};

export type TeamEventStats2021TradGroup = {
  __typename?: 'TeamEventStats2021TradGroup';
  allianceBalancedPoints: Scalars['Float']['output'];
  autoBonusPoints: Scalars['Float']['output'];
  autoBonusPointsIndividual: Scalars['Float']['output'];
  autoCarouselPoints: Scalars['Float']['output'];
  autoFreight1Points: Scalars['Float']['output'];
  autoFreight2Points: Scalars['Float']['output'];
  autoFreight3Points: Scalars['Float']['output'];
  autoFreightPoints: Scalars['Float']['output'];
  autoFreightStoragePoints: Scalars['Float']['output'];
  autoNavPoints: Scalars['Float']['output'];
  autoNavPointsIndividual: Scalars['Float']['output'];
  autoPoints: Scalars['Float']['output'];
  cappingPoints: Scalars['Float']['output'];
  dcAllianceHubPoints: Scalars['Float']['output'];
  dcFreight1Points: Scalars['Float']['output'];
  dcFreight2Points: Scalars['Float']['output'];
  dcFreight3Points: Scalars['Float']['output'];
  dcPoints: Scalars['Float']['output'];
  dcSharedHubPoints: Scalars['Float']['output'];
  dcStoragePoints: Scalars['Float']['output'];
  egDuckPoints: Scalars['Float']['output'];
  egParkPoints: Scalars['Float']['output'];
  egParkPointsIndividual: Scalars['Float']['output'];
  egPoints: Scalars['Float']['output'];
  majorsCommittedPoints: Scalars['Float']['output'];
  minorsCommittedPoints: Scalars['Float']['output'];
  penaltyPointsCommitted: Scalars['Float']['output'];
  sharedUnbalancedPoints: Scalars['Float']['output'];
  totalPoints: Scalars['Float']['output'];
  totalPointsNp: Scalars['Float']['output'];
};

export type TeamEventStats2022 = {
  __typename?: 'TeamEventStats2022';
  avg: TeamEventStats2022Group;
  dev: TeamEventStats2022Group;
  dqs: Scalars['Int']['output'];
  losses: Scalars['Int']['output'];
  max: TeamEventStats2022Group;
  min: TeamEventStats2022Group;
  opr: TeamEventStats2022Group;
  qualMatchesPlayed: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  rp: Scalars['Float']['output'];
  tb1: Scalars['Float']['output'];
  tb2: Scalars['Float']['output'];
  ties: Scalars['Int']['output'];
  tot: TeamEventStats2022Group;
  wins: Scalars['Int']['output'];
};

export type TeamEventStats2022Group = {
  __typename?: 'TeamEventStats2022Group';
  autoConePoints: Scalars['Float']['output'];
  autoGroundPoints: Scalars['Float']['output'];
  autoHighPoints: Scalars['Float']['output'];
  autoLowPoints: Scalars['Float']['output'];
  autoMediumPoints: Scalars['Float']['output'];
  autoNavPoints: Scalars['Float']['output'];
  autoNavPointsIndividual: Scalars['Float']['output'];
  autoPoints: Scalars['Float']['output'];
  autoTerminalPoints: Scalars['Float']['output'];
  beaconOwnershipPoints: Scalars['Float']['output'];
  circuitPoints: Scalars['Float']['output'];
  coneOwnershipPoints: Scalars['Float']['output'];
  dcGroundPoints: Scalars['Float']['output'];
  dcHighPoints: Scalars['Float']['output'];
  dcLowPoints: Scalars['Float']['output'];
  dcMediumPoints: Scalars['Float']['output'];
  dcPoints: Scalars['Float']['output'];
  dcTerminalPoints: Scalars['Float']['output'];
  egNavPoints: Scalars['Float']['output'];
  egNavPointsIndividual: Scalars['Float']['output'];
  egPoints: Scalars['Float']['output'];
  majorsByOppPoints: Scalars['Float']['output'];
  majorsCommittedPoints: Scalars['Float']['output'];
  minorsByOppPoints: Scalars['Float']['output'];
  minorsCommittedPoints: Scalars['Float']['output'];
  ownershipPoints: Scalars['Float']['output'];
  penaltyPointsByOpp: Scalars['Float']['output'];
  penaltyPointsCommitted: Scalars['Float']['output'];
  totalPoints: Scalars['Float']['output'];
  totalPointsNp: Scalars['Float']['output'];
};

export type TeamEventStats2023 = {
  __typename?: 'TeamEventStats2023';
  avg: TeamEventStats2023Group;
  dev: TeamEventStats2023Group;
  dqs: Scalars['Int']['output'];
  losses: Scalars['Int']['output'];
  max: TeamEventStats2023Group;
  min: TeamEventStats2023Group;
  opr: TeamEventStats2023Group;
  qualMatchesPlayed: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  rp: Scalars['Float']['output'];
  tb1: Scalars['Float']['output'];
  tb2: Scalars['Float']['output'];
  ties: Scalars['Int']['output'];
  tot: TeamEventStats2023Group;
  wins: Scalars['Int']['output'];
};

export type TeamEventStats2023Group = {
  __typename?: 'TeamEventStats2023Group';
  autoBackdropPoints: Scalars['Float']['output'];
  autoBackstagePoints: Scalars['Float']['output'];
  autoNavPoints: Scalars['Float']['output'];
  autoNavPointsIndividual: Scalars['Float']['output'];
  autoPixelPoints: Scalars['Float']['output'];
  autoPoints: Scalars['Float']['output'];
  dcBackdropPoints: Scalars['Float']['output'];
  dcBackstagePoints: Scalars['Float']['output'];
  dcPoints: Scalars['Float']['output'];
  dronePoints: Scalars['Float']['output'];
  dronePointsIndividual: Scalars['Float']['output'];
  egNavPoints: Scalars['Float']['output'];
  egNavPointsIndividual: Scalars['Float']['output'];
  egPoints: Scalars['Float']['output'];
  majorsByOppPoints: Scalars['Float']['output'];
  majorsCommittedPoints: Scalars['Float']['output'];
  minorsByOppPoints: Scalars['Float']['output'];
  minorsCommittedPoints: Scalars['Float']['output'];
  mosaicPoints: Scalars['Float']['output'];
  penaltyPointsByOpp: Scalars['Float']['output'];
  penaltyPointsCommitted: Scalars['Float']['output'];
  purplePoints: Scalars['Float']['output'];
  purplePointsIndividual: Scalars['Float']['output'];
  setLinePoints: Scalars['Float']['output'];
  totalPoints: Scalars['Float']['output'];
  totalPointsNp: Scalars['Float']['output'];
  yellowPoints: Scalars['Float']['output'];
  yellowPointsIndividual: Scalars['Float']['output'];
};

export type TeamMatchParticipation = {
  __typename?: 'TeamMatchParticipation';
  alliance: Alliance;
  allianceRole: AllianceRole;
  createdAt: Scalars['DateTime']['output'];
  dq: Scalars['Boolean']['output'];
  event: Event;
  eventCode: Scalars['String']['output'];
  match: Match;
  matchId: Scalars['Int']['output'];
  noShow: Scalars['Boolean']['output'];
  onField: Scalars['Boolean']['output'];
  season: Scalars['Int']['output'];
  station: Station;
  surrogate: Scalars['Boolean']['output'];
  team: Team;
  teamNumber: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TepRecordRow = {
  __typename?: 'TepRecordRow';
  data: TeamEventParticipation;
  filterRank: Scalars['Int']['output'];
  filterSkipRank: Scalars['Int']['output'];
  noFilterRank: Scalars['Int']['output'];
  noFilterSkipRank: Scalars['Int']['output'];
};

export type TepRecords = {
  __typename?: 'TepRecords';
  count: Scalars['Int']['output'];
  data: Array<TepRecordRow>;
  offset: Scalars['Int']['output'];
};

export enum TournamentLevel {
  Finals = 'Finals',
  Quals = 'Quals',
  Semis = 'Semis'
}

export enum WobbleEndPosition2020 {
  DropZone = 'DropZone',
  None = 'None',
  StartLine = 'StartLine'
}
