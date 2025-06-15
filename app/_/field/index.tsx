'use client'

import {useState} from 'react'
import {StatId} from '../../_shared/_types/spec'
import {Stats} from '../../_shared/database/stats'
import {RefineSpecByUnitType_SR} from '../../_shared/database/spec'
import {IconStar} from './star'
import {calculateStat, getTranscendenceSpec, sumSpec} from './_utils/calc'
import {useAtom} from 'jotai'
import {selectedUnitIdAtom, unitsAtom} from '../../_shared/atom'

export function Field() {
  const [selectedUnitId] = useAtom(selectedUnitIdAtom)
  const [units] = useAtom(unitsAtom)
  const unit = selectedUnitId ? units[selectedUnitId] : null
  const [refineLevel, setRefineLevel] = useState(5)
  const [transcendenceLevel, setTranscendenceLevel] = useState(2)

  if (!unit) {
    return <></>
  }

  const transcendenceSpec = getTranscendenceSpec({level: transcendenceLevel, unitType: unit.type})

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
            <span className="text-[18px]">{unit.name}</span>
            <span className="text-[13px] text-gray-400">{unit.title}</span>
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
        <img src={unit.imageUrl} className="w-[200px] bg-slate-400 object-cover" />
        <div>
          {Object.keys(unit.spec).map((statId) => (
            <div key={statId} className="flex justify-between gap-[10px]">
              <div>{Stats[Number(statId) as StatId].name}</div>
              {Math.floor(
                calculateStat({
                  statId: Number(statId) as StatId,
                  specSum: sumSpec(
                    unit.spec,
                    {[statId]: (RefineSpecByUnitType_SR[unit.rank][Number(statId) as StatId] || 0) * refineLevel},
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
          {unit.skills.map(({name}) => (
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
        <div className="font-bold">{unit.name}을 활용할 수 있는 컨텐츠 목록</div>
        <div className="flex flex-wrap gap-[20px]">
          <div>파멸의 눈동자</div>
          <div>무한의 탑</div>
          <div>모험 (스테이지 돌파)</div>
        </div>
      </div>
    </div>
  )
}
