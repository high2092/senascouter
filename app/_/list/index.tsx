'use client'

import {useAtom} from 'jotai'
import {selectedUnitIdAtom, unitsAtom} from '../../_shared/atom'

export function UnitList() {
  const [units] = useAtom(unitsAtom)
  const [selectedUnitId, setSelectedUnitId] = useAtom(selectedUnitIdAtom)
  return (
    <div>
      {Object.values(units).map((unit) => (
        <div key={unit.name} onClick={() => setSelectedUnitId(unit.id)}>
          {unit.name}
        </div>
      ))}
    </div>
  )
}
