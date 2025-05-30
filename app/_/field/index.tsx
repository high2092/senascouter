'use client'

import {useState} from 'react'
import {StatId, StatIds as S} from '../../_shared/_types/spec'
import {Unit} from '../../_shared/_types/unit'
import {Stats} from '../../_shared/database/stats'
import {DefaultSpecByUnitType, RefineSpecByUnitType_SR} from '../../_shared/database/spec'
import {UnitTypes} from '../../_shared/_types/type'
import {UnitRanks} from '../../_shared/_types/rank'
import {IconStar} from './star'
import {calculateStat, getTranscendenceSpec, sumSpec} from './_utils/calc'

const UNIT: Unit = {
  imageUrl:
    'https://i.namu.wiki/i/N-SHAZfQjHnDqll1f20ZsMOk8Tp0vyg1JhZrCfHHoo85jrWy5ejMNhCaE_fVdm-ZHdAVkqpVutElALMTxYalH5DVSyFNhtd8BImlynnDMbFK711W4eHoOIN1b8U2diAm4gjbWKtmyegFgn6so8mfuQ.webp',
  name: '세인',
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
}

export function Field() {
  const [refineLevel, setRefineLevel] = useState(5)
  const [transcendenceLevel, setTranscendenceLevel] = useState(2)
  const transcendenceSpec = getTranscendenceSpec({level: transcendenceLevel, unitType: UNIT.type})

  return (
    <div className="flex w-max flex-col gap-[20px] rounded bg-black/80 p-[20px] text-white">
      <div className="flex items-center justify-between gap-[4px]">
        <div className="flex flex-col gap-[4px]">
          <div className="flex">
            {Array.from({length: 6}).map((_, i) => (
              <button
                key={i}
                onClick={() =>
                  setTranscendenceLevel((transcendenceLevel) => (transcendenceLevel === i + 1 ? i + 1 - 1 : i + 1))
                }
              >
                <IconStar bloom={i < transcendenceLevel} />
              </button>
            ))}
          </div>
          <div className="flex items-end gap-[8px]">
            <span className="text-[18px]">세인</span>
            <span className="text-[13px] text-gray-400">악마봉인자</span>
          </div>
        </div>
        <div className="flex flex-col text-right select-none">
          <div className="text-lime-400" onClick={() => setRefineLevel((level) => (level === 5 ? 0 : level + 1))}>
            +{refineLevel}
          </div>
          <div>
            <span className="text-[14px]">LV.</span>30
          </div>
        </div>
      </div>
      <div className="flex gap-[20px]">
        <img src={UNIT.imageUrl} className="w-[200px]" />
        <div>
          {Object.keys(UNIT.spec).map((statId) => (
            <div key={statId} className="flex justify-between gap-[10px]">
              <div>{Stats[Number(statId) as StatId].name}</div>
              {Math.floor(
                calculateStat({
                  statId: Number(statId) as StatId,
                  specSum: sumSpec(
                    UNIT.spec,
                    {[statId]: (RefineSpecByUnitType_SR[UNIT.rank][statId] || 0) * refineLevel},
                    transcendenceSpec
                  ),
                })
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-[4px]">
          {UNIT.skills.map(({name}) => (
            <div key={name} className="h-[40px] w-[40px] rounded-xs bg-amber-50"></div>
          ))}
        </div>
        <div className="flex gap-[4px]">
          <div className="flex flex-col gap-[4px]">
            <button className="h-[40px] w-[40px] rounded-xs bg-amber-50"></button>
            <button className="h-[40px] w-[40px] rounded-xs bg-amber-50"></button>
          </div>
          <div className="flex flex-col gap-[4px]">
            <button className="h-[40px] w-[40px] rounded-xs bg-amber-50"></button>
            <button className="h-[40px] w-[40px] rounded-xs bg-amber-50"></button>
          </div>
          <div className="flex flex-col justify-center">
            <button className="h-[40px] w-[40px] rounded-xs bg-amber-50"></button>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex flex-col gap-[10px] text-[12px]">
        <div className="font-bold">{UNIT.name}을 활용할 수 있는 컨텐츠 목록</div>
        <div className="flex flex-wrap gap-[20px]">
          <div>파멸의 눈동자</div>
          <div>무한의 탑</div>
          <div>모험 (스테이지 돌파)</div>
        </div>
      </div>
    </div>
  )
}
