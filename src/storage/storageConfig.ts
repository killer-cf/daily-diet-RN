export const MEALS_COLLECTION = '@daily-diet:meals'

export interface Meal {
  id: string
  name: string
  description: string
  onDiet: boolean
  date: string
  hour: string
}