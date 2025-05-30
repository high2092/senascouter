export const UnitRanks = {
  R: 1,
  SR: 2,
  SSR: 3,
}

export type UnitRank = (typeof UnitRanks)[keyof typeof UnitRanks]
