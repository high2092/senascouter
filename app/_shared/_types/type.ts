export const UnitTypes = {
  ATK: 1,
  MAG: 2,
  TAN: 3,
  SUP: 4,
  ALR: 5,
}

export type UnitType = (typeof UnitTypes)[keyof typeof UnitTypes]
