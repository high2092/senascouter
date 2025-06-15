import {Spec, StatId, StatIds as S, StatIds} from '../../../_shared/_types/spec'
import {UnitType, UnitTypes} from '../../../_shared/_types/type'

export function sumSpec(...specs: Spec[]) {
  return specs.reduce(
    (acc, cur) => {
      Object.entries(cur).forEach(([statId, value]) => {
        acc[statId] += value
      })
      return acc
    },
    Object.fromEntries(Object.values(StatIds).map((statId) => [statId, 0]))
  )
}

export function calculateStat({statId, specSum}: {statId: StatId; specSum: Spec}) {
  switch (statId) {
    case S.ATK:
      return (specSum[S.ATK] || 0) * (1 + (specSum[S.ATKPER_ITEM] || 0) / 100) + (specSum[S.ATK_ITEM] || 0)
    case S.DEF:
      return (specSum[S.DEF] || 0) * (1 + (specSum[S.DEFPER_ITEM] || 0) / 100) + (specSum[S.DEF_ITEM] || 0)
    case S.STA:
      return (specSum[S.STA] || 0) * (1 + (specSum[S.STAPER_ITEM] || 0) / 100) + (specSum[S.STA_ITEM] || 0)

    default:
      return specSum[statId] || 0
  }
}

export function getTranscendenceSpec({level, unitType}: {level: number; unitType: UnitType}) {
  const foo = (acc: Spec, cur: number) => {
    if (cur === 0) {
      return acc
    }

    return foo(sumSpec(acc, _getTransendenceSpec({level: cur, unitType})), cur - 1)
  }

  return foo(Object.fromEntries(Object.values(StatIds).map((statId) => [statId, 0])), level)
}

function _getTransendenceSpec({level, unitType, mainStat}: {level: number; unitType: UnitType; mainStat?: StatId}) {
  const targetStat = mainStat || getMainStatByUnitType({level, unitType})
  return {[targetStat]: getTransendenceStatIncrement({statId: targetStat, level})}
}

function getMainStatByUnitType({level, unitType}: {level: number; unitType: UnitType}) {
  if (level === 3) {
    return S.STAPER_ITEM
  }

  if (level === 4) {
    switch (unitType) {
      case UnitTypes.TAN:
      case UnitTypes.SUP:
        return S.RDC
      default:
        return S.CRI
    }
  }

  switch (unitType) {
    case UnitTypes.TAN:
    case UnitTypes.SUP:
      return S.DEFPER_ITEM
    default:
      return S.ATKPER_ITEM
  }
}

function getTransendenceStatIncrement({statId, level}: {statId: StatId; level: number}) {
  if (level === 1 || level === 5) {
    switch (statId) {
      case S.ATKPER_ITEM:
      case S.DEFPER_ITEM:
        return 12
    }
  }

  if (level === 3 || level === 4) {
    switch (statId) {
      case S.STAPER_ITEM:
      case S.CRI:
      case S.BLK:
        return 18
      case S.RDC:
        return 10
    }
  }

  if (level === 2 || level === 6) {
    switch (statId) {
      case S.ATKPER_ITEM:
      case S.DEFPER_ITEM:
        return 6
    }
  }

  return 0
}
