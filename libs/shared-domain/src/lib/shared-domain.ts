export type NhlPosition = 'C' | 'LW' | 'RW' | 'D' | 'G';

export interface LeagueSettings {
  scoringType: 'points' | 'categories';
  categories?: string[];
  rosterSpots: Record<NhlPosition | 'UTIL' | 'BN' | 'IR', number>;
}

export interface PlayerId {
  provider: 'yahoo';
  id: string;
}

export interface Player {
  id: PlayerId;
  fullName: string;
  team: string;
  positions: NhlPosition[];
  isInjured?: boolean;
}

export interface PlayerRanking {
  player: Player;
  rank: number;
  score: number;
  rationale?: string;
}

export interface RosterMoveSuggestion {
  drop?: Player;
  add?: Player;
  reason: string;
}

export interface YahooOAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}
