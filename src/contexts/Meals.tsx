import { ReactNode, createContext, useReducer } from "react"
import { addNewMealAction } from "../reducers/Meals/actions"
import { MealsReducer } from "../reducers/Meals/reducer"

export interface Meal {
  id: string
  name: string
  description: string
  onDiet: boolean
  date: string
  hour: string
}

interface MealsContextProps {
  meals: Meal[]
  addNewMeal: (newMeal: Meal) => void
}

export const MealsContext = createContext({} as MealsContextProps)

interface MealsContextProviderProps {
  children: ReactNode
}

export function MealsContextProvider({children}: MealsContextProviderProps) {
  const [mealsState, dispatch] = useReducer(MealsReducer, {
    meals: []
  })

  const { meals } = mealsState

  function addNewMeal(newMeal: Meal) {
    dispatch(addNewMealAction(newMeal))
  }

  return (
    <MealsContext.Provider value={{ meals, addNewMeal }}>{children}</MealsContext.Provider>
  )
}