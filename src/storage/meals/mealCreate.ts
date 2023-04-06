import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION, Meal } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export type MealsStorageDTO = {
  date: string
  meals: Meal[]
}[]

export async function mealCreate(newMeal: Meal) {
  try{
    let storage: MealsStorageDTO = await mealGetAll() || []

    const dates = storage.reduce<string[]>((acc, item)=> {
      acc.push(item.date)
      return acc
    },[])

    storage.map((item)=> {
      if (item.date === newMeal.date) {
        item.meals.push(newMeal)
        
      } else if (!dates.includes(newMeal.date)) {
        storage.push({
          date: newMeal.date,
          meals: [newMeal]
        })
      } 
    })
    
    if(storage.length === 0) {
      storage.push({
        date: newMeal.date,
        meals: [newMeal]
      }) 
    }

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storage))

  } catch (err) {
      throw err    
  }
}