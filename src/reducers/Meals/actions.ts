import { Meal } from "src/contexts/Meals";

export enum ActionTypes {
  ADD_NEW_MEAL = 'ADD_NEW_MEAL',
}

export function addNewMealAction(newMeal: Meal) {
  return {
    type: ActionTypes.ADD_NEW_MEAL,
    payload: { newMeal },
  }
}