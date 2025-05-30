import {BattleStatus} from './battle-status'
import {UnitRank} from './rank'
import {Spec, StatId} from './spec'
import {UnitType} from './type'

interface SkillEffect {
  (prev: BattleStatus): BattleStatus
}

interface Skill {
  name: string
  effect: SkillEffect
}

export interface Unit {
  imageUrl: string
  name: string
  mainStat?: StatId
  type: UnitType
  rank: UnitRank
  spec: Spec
  skills: Skill[]
}
