import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION, Meal } from "@storage/storageConfig"
import { mealGetAll } from "./mealGetAll"

export async function mealEdit(mealEdit: Meal) {
  try {
    const storedMeals = await mealGetAll()
    
    const meals = storedMeals.map((item) => {
      item.meals.forEach((meal, i)=> {
        if (meal.id === mealEdit.id) {
          item.meals[i] = mealEdit;
        }
      })
      return item;
    })
    
    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals))

  } catch (error) {
    throw error
  }
}