'use client'

import {Field} from '../../_/field'

export function BattleSimulator() {
  return (
    <div className="flex flex-col gap-[20px] p-[4px]">
      <div className="flex justify-between">
        <div className="flex gap-[4px]">
          <div>세인</div>
          <div>아일린</div>
          <div>레이첼</div>
          <div>유이</div>
          <div>에이스</div>
        </div>
        <div className="fixed right-0">
          {/* @TODO: 피격 대상 설정 UI */}
          <Field />
        </div>
      </div>

      <div className="flex gap-[4px]">
        <button className="flex flex-col items-center gap-[4px]">
          <div className="h-[64px] w-[64px] bg-orange-300" />
          <span className="text-[11px]">귀신 베기</span>
        </button>
        <button className="flex flex-col items-center gap-[4px]">
          <div className="h-[64px] w-[64px] bg-gray-300" />
          <span className="text-[11px]">포디나의 분노</span>
        </button>
        <button className="flex flex-col items-center gap-[4px]">
          <div className="h-[64px] w-[64px] bg-gray-300" />
          <span className="text-[11px]">염화</span>
        </button>
      </div>

      <div className="flex gap-[4px]">
        <button className="flex flex-col items-center gap-[4px]">
          <div className="h-[64px] w-[64px] bg-orange-300" />
          <span className="text-[11px]">축복의 선율</span>
        </button>
        <button className="flex flex-col items-center gap-[4px]">
          <div className="h-[64px] w-[64px] bg-orange-300" />
          <span className="text-[11px]">치명타</span>
        </button>
        <button className="flex flex-col items-center gap-[4px]">
          <div className="h-[64px] w-[64px] bg-orange-300" />
          <span className="text-[11px]">약점공격</span>
        </button>
        <button className="flex flex-col items-center gap-[4px]">
          <div className="h-[64px] w-[64px] bg-gray-300" />
          <span className="text-[11px]">막기</span>
        </button>
      </div>

      <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[10px]">
          <div className="w-max bg-black/75 p-4 text-white">
            <div>공격력</div>
            <div className="flex justify-between gap-[20px]">
              <div>스탯</div> 2700
            </div>
            <div className="flex justify-between gap-[20px]">
              <div>펫</div> 315
            </div>
            <div className="flex justify-between gap-[20px]">
              <div>진형보너스</div> 600
            </div>
          </div>
          <div className="w-max bg-black/75 p-4 text-white">
            <div>공격력 %</div>
            <div className="flex justify-between gap-[20px]">
              <div>포디나의 분노</div> 15%
            </div>
          </div>
          <div className="w-max bg-black/75 p-4 text-white">
            <div>계수</div>
            <div className="flex justify-between gap-[20px]">
              <div>귀신 베기</div> 570%
            </div>
          </div>
          <div className="w-max bg-black/75 p-4 text-white">
            <div>물리 취약</div>
            <div className="flex justify-between gap-[20px]">
              <div>불새</div> 22%
            </div>
          </div>
          <div className="w-max bg-black/75 p-4 text-white">
            <div>치명타피해</div>
            <div className="flex justify-between gap-[20px]">
              <div>치명타</div> 150%
            </div>
          </div>
          <div className="w-max bg-black/75 p-4 text-white">
            <div>약점공격피해량</div>
            <div className="flex justify-between gap-[20px]">
              <div>약점공격</div> 130%
            </div>
          </div>
        </div>
        <div className="flex gap-[10px]">
          <div className="w-max bg-black/75 p-4 text-white">
            <div>방어력</div>
            <div className="flex justify-between gap-[20px]">
              <div>스탯</div> 1200
            </div>
            <div className="flex justify-between gap-[20px]">
              <div>펫</div> 115
            </div>
            <div className="flex justify-between gap-[20px]">
              <div>진형보너스</div> 48
            </div>
          </div>
          <div className="w-max bg-black/75 p-4 text-white">
            <div>방어력 %</div>
            <div className="flex justify-between gap-[20px]">
              <div>견고한 방패</div> 20%
            </div>
            <div className="flex justify-between gap-[20px]">
              <div>불새</div> -29%
            </div>
            <div className="flex justify-between gap-[20px]">
              <div>불굴의 지휘</div> -20%
            </div>
          </div>
          <div className="w-max bg-black/75 p-4 text-white">
            <div>받피감</div>
            <div className="flex justify-between gap-[20px]">
              <div>4초월 추가효과</div> 10%
            </div>
          </div>
          <div className="w-max bg-black/75 p-4 text-white">
            <div>막기피해감소</div>
            <div className="flex justify-between gap-[20px]">
              <div>막기</div> 50%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
