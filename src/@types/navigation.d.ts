export type DietStatusParams = 'onDiet' | 'offDiet'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      meal: undefined;
      new_meal: undefined;
      new_meal: undefined;
      create_meal_success: {
        dietStatus: DietStatusParams
      }
    }
  }
}