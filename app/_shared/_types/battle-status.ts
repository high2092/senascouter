import {Team} from './team'

export interface BattleStatus {
  turn: number
  friendly: Team
  enemy: Team
}
