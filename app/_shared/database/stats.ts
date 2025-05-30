import {StatId, StatIds} from '../_types/spec'

interface Stat {
  id: StatId
  name: string
}

export const Stats: {
  [key in StatId]: Stat
} = {
  [StatIds.ATK]: {id: StatIds.ATK, name: '공격력'},
  [StatIds.DEF]: {id: StatIds.DEF, name: '방어력'},
  [StatIds.STA]: {id: StatIds.STA, name: '생명력'},
  [StatIds.SPD]: {id: StatIds.SPD, name: '속공'},
  [StatIds.CRI]: {id: StatIds.CRI, name: '치명타 확률'},
  [StatIds.CRD]: {id: StatIds.CRD, name: '치명타 피해량'},
  [StatIds.BST]: {id: StatIds.BST, name: '약점공격 확률'},
  [StatIds.BSD]: {id: StatIds.BSD, name: '약점공격 피해량'},
  [StatIds.BLK]: {id: StatIds.BLK, name: '막기 확률'},
  [StatIds.RDC]: {id: StatIds.RDC, name: '받는 피해 감소'},
  [StatIds.EFF]: {id: StatIds.EFF, name: '효과 적중'},
  [StatIds.TNC]: {id: StatIds.TNC, name: '효과 저항'},
  [StatIds.AMP]: {id: StatIds.AMP, name: '주는 피해량 증가'},
  [StatIds.ATKPER_ITEM]: {id: StatIds.ATKPER_ITEM, name: '모든 공격력 %'},
  [StatIds.ATKPER_BUFF]: {id: StatIds.ATKPER_BUFF, name: '버프로 인한 공격력 %'},
  [StatIds.ATKPER_FORM]: {id: StatIds.ATKPER_FORM, name: '진형 보너스 공격력 %'},
  [StatIds.ATK_ITEM]: {id: StatIds.ATK_ITEM, name: '모든 공격력'},
  [StatIds.DEFPER_ITEM]: {id: StatIds.DEFPER_ITEM, name: '방어력 %'},
  [StatIds.DEFPER_BUFF]: {id: StatIds.DEFPER_BUFF, name: '버프로 인한 방어력 %'},
  [StatIds.DEFPER_FORM]: {id: StatIds.DEFPER_FORM, name: '진형 보너스 방어력 %'},
  [StatIds.DEF_ITEM]: {id: StatIds.DEF_ITEM, name: '방어력'},
  [StatIds.STAPER_ITEM]: {id: StatIds.STAPER_ITEM, name: '생명력 %'},
  [StatIds.STAPER_BUFF]: {id: StatIds.STAPER_BUFF, name: '버프로 인한 생명력 %'},
  [StatIds.STA_ITEM]: {id: StatIds.STA_ITEM, name: '생명력'},
}
