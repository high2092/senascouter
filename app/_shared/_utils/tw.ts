import clsx, {ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function twClsx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
