import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/home'
import { Meal } from '@screens/Meal'
import { MealSuccess } from '@screens/MealSuccess'
import { NewMeal } from '@screens/NewMeal'
import { Statistics } from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='home' component={Home} />
      <Screen name='statistics' component={Statistics} />
      <Screen name='meal' component={Meal} />
      <Screen name='new_meal' component={NewMeal} />
      <Screen name='edit_meal' component={NewMeal} />
      <Screen name='create_meal_success' component={MealSuccess} />
    </Navigator>
  )
}