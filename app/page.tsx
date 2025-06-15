import {Field} from './_/field'
import {UnitList} from './_/list'

export default function HomePage() {
  return (
    <div className="h-[calc(100vh-40px)]">
      <UnitList />
      <Field />
    </div>
  )
}
