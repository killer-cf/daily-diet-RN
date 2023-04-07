import { useCallback, useState } from "react";
import { FlatList, Image } from "react-native";
import { Plus } from "phosphor-react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Avatar, ButtonIcon, Container, DietPercent, Header, IconArrow, Percent, Subtitle, Text } from "./styles";
import logoPng from '@assets/logo.png'

import { Button } from "@components/Button";
import { MealsDay } from "@components/MealsDay";
import { mealGetAll } from "@storage/meals/mealGetAll";
import { MealsStorageDTO } from "@storage/meals/mealCreate";
import { useTheme } from "styled-components/native";

type StatusColorsType = 'red' | 'green'

export function Home(){
  const [meals, setMeals] = useState<MealsStorageDTO>([])
  const navigator = useNavigation()
  const { colors } = useTheme()

  const onDietMealsCount = meals.flatMap(meal => meal.meals).filter(meal => meal.onDiet).length;
  const totalMeals = meals.flatMap(meal => meal.meals).length;
  const onDietPercentage = (onDietMealsCount / totalMeals) * 100;

  const statusColor: StatusColorsType = onDietPercentage >= 70 ? 'green' : 'red'

  async function getStorage(){
    const storage = await mealGetAll()
    setMeals(storage)
  }

  useFocusEffect(useCallback(()=> {
    getStorage()
  }, []))

  return (
    <Container>
      <Header>
        <Image source={logoPng}/>
        <Avatar>
          <Image
            style={{width: 40, height: 40}} 
            source={{uri:'https://github.com/killer-cf.png'}}
          />
        </Avatar>

      </Header>

      <DietPercent backcolor={statusColor}>
        <Percent>{onDietPercentage.toFixed(2)}%</Percent>
        <Text>das refeições dentro da dieta</Text>
        <ButtonIcon onPress={()=> navigator.navigate('statistics')}>
          <IconArrow color={statusColor === 'green' ? colors.green_dark : colors.red_dark} />
        </ButtonIcon>
      </DietPercent>

      <Subtitle>
        Refeições
      </Subtitle>

      <Button 
        CustomIcon={Plus}
        text='Nova refeição'
        style={{marginBottom: 32}}
        onPress={()=> navigator.navigate('new_meal')}
      />
      
      <FlatList
        data={meals}
        keyExtractor={item => item?.date}
        renderItem={({ item }) => (
          <MealsDay data={item?.meals}/>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}