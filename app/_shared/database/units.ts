import {UnitRanks} from '../_types/rank'
import {StatIds as S} from '../_types/spec'
import {UnitTypes} from '../_types/type'
import {Unit} from '../_types/unit'
import {UnitId, UnitIds} from '../_types/units'
import {DefaultSpecByUnitType} from './spec'

export const UNITS: {
  [key in UnitId]: Unit
} = {
  [UnitIds.세인]: {
    id: UnitIds.세인,
    name: '세인',
    title: '악마 봉인자',
    type: UnitTypes.ATK,
    rank: UnitRanks.SR,
    spec: {
      ...DefaultSpecByUnitType[UnitRanks.SR][UnitTypes.ATK],
      [S.SPD]: 29,
      [S.CRI]: 5,
      [S.CRD]: 150,
      [S.BST]: 0,
      [S.BLK]: 0,
      [S.EFF]: 0,
      [S.TNC]: 0,
    },
    skills: [
      {
        name: '기본 공격',
        effect: (prev) => {
          return prev
        },
      },
      {
        name: '귀신 베기',
        effect: (prev) => {
          return prev
        },
      },
      {
        name: '악마의 힘',
        effect: (prev) => {
          return prev
        },
      },
    ],
    imageUrl:
      'https://i.namu.wiki/i/N-SHAZfQjHnDqll1f20ZsMOk8Tp0vyg1JhZrCfHHoo85jrWy5ejMNhCaE_fVdm-ZHdAVkqpVutElALMTxYalH5DVSyFNhtd8BImlynnDMbFK711W4eHoOIN1b8U2diAm4gjbWKtmyegFgn6so8mfuQ.webp',
  },
  [UnitIds.루디]: {
    id: UnitIds.루디,
    name: '루디',
    title: '절대 수호자',
    type: UnitTypes.TAN,
    rank: UnitRanks.SSR,
    spec: {
      ...DefaultSpecByUnitType[UnitRanks.SSR][UnitTypes.TAN],
      [S.SPD]: 19,
      [S.CRI]: 5,
      [S.CRD]: 150,
      [S.BST]: 0,
      [S.BLK]: 0,
      [S.EFF]: 0,
      [S.TNC]: 0,
    },
    skills: [
      {
        name: '기본 공격',
        effect: (prev) => {
          return prev
        },
      },
      {
        name: '돌격',
        effect: (prev) => {
          return prev
        },
      },
      {
        name: '방어준비',
        effect: (prev) => {
          return prev
        },
      },
      {
        name: '견고한 방패',
        effect: (prev) => {
          return prev
        },
      },
    ],
    imageUrl:
      'https://i.namu.wiki/i/UMJNU560xAGcUqDO0m65Lwwyhx5yBECYUASI9NpgjPohVcbXhuUFy2jRexCqfXNCDpN6nWH0MWLB2Z4qZCEScdEQlRBFt6B_aYJJumE9l31dRdHrswZQTXN7CgbEgXwVV6aQVCxFq0IKwhLvtg8WMg.webp',
  },
}
