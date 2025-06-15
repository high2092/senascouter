import {atom} from 'jotai'
import {UNITS} from '../database/units'
import {UnitId} from '../_types/units'

export const unitsAtom = atom(UNITS)
export const selectedUnitIdAtom = atom<UnitId | null>(null)
