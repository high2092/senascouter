import {BattleStatus} from './battle-status'
import {UnitRank} from './rank'
import {Spec, StatId} from './spec'
import {UnitType} from './type'
import {UnitId} from './units'

interface SkillEffect {
  (prev: BattleStatus): BattleStatus
}

interface Skill {
  name: string
  effect: SkillEffect
}

export interface Unit {
  id: UnitId
  imageUrl: string
  name: string
  title: string
  mainStat?: StatId
  type: UnitType
  rank: UnitRank
  spec: Spec
  skills: Skill[]
}
