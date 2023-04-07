import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { useTheme } from "styled-components/native";

import { 
  Container, 
  StatisticBox, 
  ButtonIcon, 
  IconArrow, 
  Percent, 
  Text, 
  Subtitle, 
  Header, 
  Title, 
  BoxWraper, 
  Content 
} from "./styles";
import { MealsStorageDTO } from "@storage/meals/mealCreate";
import { mealGetAll } from "@storage/meals/mealGetAll";
import { Meal } from "@storage/storageConfig";

type StatusColorsType = 'red' | 'green'

export function Statistics() {
  const [meals, setMeals] = useState<MealsStorageDTO>([])
  const navigator = useNavigation()
  const { colors } = useTheme()

  const onlyMeals = meals.flatMap(meal => meal.meals)
  const onDietMealsCount = onlyMeals.filter(meal => meal.onDiet).length;
  const totalMeals = meals.flatMap(meal => meal.meals).length;
  const onDietPercentage = (onDietMealsCount / totalMeals) * 100;

  const statusColor: StatusColorsType = onDietPercentage >= 70 ? 'green' : 'red'

  
  function findBestOnDietSequence(meals: Meal[]) {
    let maxSoFar = 0
    let maxEndingHere = 0

    for (let meal of meals) {
      if (meal.onDiet) {
        maxEndingHere = Math.max(maxEndingHere + 1, 1)
        maxSoFar = Math.max(maxSoFar, maxEndingHere)
      } else {
        maxEndingHere = 0
      }
    }

    return maxSoFar
  }
          
  async function getStorage(){
    const storage = await mealGetAll()
    setMeals(storage)
  }

  useFocusEffect(useCallback(()=> {
    getStorage()
  }, []))

  return (
      <Container backcolor={statusColor}>
        <Header>
          <Percent>{onDietPercentage.toFixed(2)}%</Percent>
          <Text>das refeições dentro da dieta</Text>
          <ButtonIcon onPress={()=> navigator.navigate('home')}>
            <IconArrow color={statusColor === 'green' ? colors.green_dark : colors.red_dark}/>
          </ButtonIcon>
        </Header>

        <Content>
          <Subtitle>Estatísticas gerais</Subtitle>

          <StatisticBox backcolor="gray">
            <Title>{findBestOnDietSequence(onlyMeals)}</Title>
            <Text>melhor sequência de pratos dentro da dieta</Text>
          </StatisticBox>

          <StatisticBox backcolor="gray">
            <Title>{totalMeals}</Title>
            <Text>refeições registradas</Text>
          </StatisticBox>

          <BoxWraper>

            <StatisticBox style={{flex: 1}} backcolor="green">
              <Title>{onDietMealsCount}</Title>
              <Text>refeições dentro da dieta</Text>
            </StatisticBox>

            <StatisticBox style={{flex: 1}} backcolor="red">
              <Title>{totalMeals - onDietMealsCount}</Title>
              <Text>refeições fora da dieta</Text>
            </StatisticBox>

          </BoxWraper>
        </Content>       
      </Container>
  )
}