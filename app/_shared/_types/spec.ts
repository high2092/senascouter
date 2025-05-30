export const StatIds = {
  ATK: 1, // 공격력
  DEF: 2, // 방어력
  STA: 3, // 생명력
  SPD: 4, // 속공
  CRI: 5, // 치명타 확률
  CRD: 6, // 치명타 피해량
  BST: 7, // 약점공격 확률 backstab
  BSD: 8, // 약점공격 피해량
  BLK: 9, // 막기 확률
  RDC: 10, // 받는 피해 감소
  EFF: 11, // 효과 적중
  TNC: 12, // 효과 저항
  AMP: 13, // 주는 피해량 증가
  ATKPER_ITEM: 14, // 모든 공격력 %
  ATKPER_BUFF: 15,
  ATKPER_FORM: 16, // 진형 보너스
  ATK_ITEM: 17,
  DEFPER_ITEM: 18,
  DEFPER_BUFF: 19,
  DEFPER_FORM: 20,
  DEF_ITEM: 21,
  STAPER_ITEM: 22,
  STAPER_BUFF: 23,
  STA_ITEM: 25,
} as const

export type StatId = (typeof StatIds)[keyof typeof StatIds]

export type Spec = {
  [key in StatId]?: number
}
