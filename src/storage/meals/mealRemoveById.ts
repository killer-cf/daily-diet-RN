import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION } from "@storage/storageConfig"
import { mealGetAll } from "./mealGetAll"

export async function mealRemoveById(mealId: string) {
  try {
    const storedMeals = await mealGetAll()
    
    let meals = storedMeals.map(mealDay => {     
        return mealDay.meals.filter(m => m.id !== mealId)
      })
    meals = meals[0].length === 0 ? meals.filter(() => {}) : []

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals))

  } catch (error) {
    throw error
  }
}