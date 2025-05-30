import {UnitRanks} from '../_types/rank'
import {Spec, StatIds as S} from '../_types/spec'
import {UnitType, UnitTypes} from '../_types/type'

export const DefaultSpecByUnitType_SR: {
  [key in UnitType]: Spec
} = {
  [UnitTypes.ATK]: {
    [S.ATK]: 1080,
    [S.DEF]: 411,
    [S.STA]: 2391,
  },
  [UnitTypes.MAG]: {
    [S.ATK]: 1080,
    [S.DEF]: 411,
    [S.STA]: 2391,
  },
  [UnitTypes.TAN]: {
    [S.ATK]: 522,
    [S.DEF]: 657,
    [S.STA]: 3470,
  },
  [UnitTypes.SUP]: {
    [S.ATK]: 785,
    [S.DEF]: 485,
    [S.STA]: 3208,
  },
  [UnitTypes.ALR]: {
    [S.ATK]: 936,
    [S.DEF]: 479,
    [S.STA]: 2653,
  },
}

export const DefaultSpecByUnitType_R: {
  [key in UnitType]: Spec
} = {
  [UnitTypes.ATK]: {
    [S.ATK]: 1004,
    [S.DEF]: 378,
    [S.STA]: 2279,
  },
  [UnitTypes.MAG]: {
    [S.ATK]: 1004,
    [S.DEF]: 378,
    [S.STA]: 2279,
  },
  [UnitTypes.TAN]: {
    [S.ATK]: 514,
    [S.DEF]: 593,
    [S.STA]: 3287,
  },
  [UnitTypes.SUP]: {
    [S.ATK]: 745,
    [S.DEF]: 452,
    [S.STA]: 3058,
  },
  [UnitTypes.ALR]: {
    [S.ATK]: 893,
    [S.DEF]: 446,
    [S.STA]: 2539,
  },
}

export const RefineSpecByUnitType_SR: {
  [key in UnitType]: Spec
} = {
  [UnitTypes.ATK]: {
    [S.ATK]: 84,
    [S.DEF]: 32,
    [S.STA]: 187,
  },
  [UnitTypes.MAG]: {
    [S.ATK]: 84,
    [S.DEF]: 32,
    [S.STA]: 187,
  },
  [UnitTypes.TAN]: {
    [S.ATK]: 41,
    [S.DEF]: 47,
    [S.STA]: 271,
  },
  [UnitTypes.SUP]: {
    [S.ATK]: 62,
    [S.DEF]: 38,
    [S.STA]: 208,
  },
  [UnitTypes.ALR]: {
    [S.ATK]: 74,
    [S.DEF]: 36,
    [S.STA]: 208,
  },
}

export const RefineSpecByUnitType_R: {
  [key in UnitType]: Spec
} = {
  [UnitTypes.ATK]: {
    [S.ATK]: 77,
    [S.DEF]: 31,
    [S.STA]: 179,
  },
  [UnitTypes.MAG]: {
    [S.ATK]: 77,
    [S.DEF]: 31,
    [S.STA]: 179,
  },
  [UnitTypes.TAN]: {
    [S.ATK]: 38,
    [S.DEF]: 45,
    [S.STA]: 257,
  },
  [UnitTypes.SUP]: {
    [S.ATK]: 58,
    [S.DEF]: 36,
    [S.STA]: 238,
  },
  [UnitTypes.ALR]: {
    [S.ATK]: 69,
    [S.DEF]: 34,
    [S.STA]: 198,
  },
}

export const DefaultSpecByUnitType = {
  [UnitRanks.SSR]: DefaultSpecByUnitType_SR,
  [UnitRanks.SR]: DefaultSpecByUnitType_SR,
  [UnitRanks.R]: DefaultSpecByUnitType_R,
}

export const RefineSpecByUnitType = {
  [UnitRanks.SSR]: RefineSpecByUnitType_SR,
  [UnitRanks.SR]: RefineSpecByUnitType_SR,
  [UnitRanks.R]: RefineSpecByUnitType_R,
}
