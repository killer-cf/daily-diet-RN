import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealsStorageDTO } from "./mealCreate";

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION)

    const meals: MealsStorageDTO = storage ? JSON.parse(storage) : [];

    return meals
    
  } catch (err) {
      throw err
  }
}