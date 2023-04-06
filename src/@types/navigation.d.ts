import { Meal } from "@storage/storageConfig";

export type DietStatusParams = 'onDiet' | 'offDiet'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      new_meal: undefined;
      meal: {
        mealData: Meal
      };
      create_meal_success: {
        dietStatus: DietStatusParams
      }
    }
  }
}