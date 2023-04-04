import { Meal } from "src/contexts/Meals"
import { ActionTypes } from "./actions"

interface MealsState {
  meals: Meal[] 
}

export function MealsReducer(state: MealsState, action: any){
  switch (action.type) {
    case ActionTypes.ADD_NEW_MEAL:
      return {
      ...state,
        meals: [...state.meals, action.payload.newMeal]
      }
    default: return state
  }
}