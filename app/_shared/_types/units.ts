export const UnitIds = {
  세인: 1,
  루디: 2,
} as const

export type UnitId = (typeof UnitIds)[keyof typeof UnitIds]
