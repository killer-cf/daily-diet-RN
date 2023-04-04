import { useCallback, useContext, useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { Plus } from "phosphor-react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Avatar, ButtonIcon, Container, DietPercent, Header, IconArrow, Percent, Subtitle, Text } from "./styles";
import logoPng from '@assets/logo.png'

import { Button } from "@components/Button";
import { MealsDay } from "@components/MealsDay";
import { Meal, MealsContext } from "../../contexts/Meals";

type StatusColorsType = 'red' | 'green'

export function Home(){
  const navigator = useNavigation()
  const dietPercent = 100
  const statusColor: StatusColorsType = dietPercent >= 70 ? 'green' : 'red'

  
  const { meals } = useContext(MealsContext)

  // const listMealsPerDay = meals.reduce((acc: any, meal) => {
  //   let key = meal.date
    
  //   if (!acc[key]) {
  //     acc[key] = []
  //   }
    
  //   acc[key].push(meal)
    
  //   return acc
  // }, {})

  const listMealsPerDay = meals.reduce((acc: any, meal) => {
    let key = meal.date
    
    if (!acc[key]) {
      acc[key] = []
    }
    
    acc[key].push(meal)
    
    return acc
  }, {})

  console.log(Object.entries(listMealsPerDay))


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
        <Percent>90,86%</Percent>
        <Text>das refeições dentro da dieta</Text>
        <ButtonIcon onPress={()=> navigator.navigate('statistics')}>
          <IconArrow />
        </ButtonIcon>
      </DietPercent>

      <Subtitle>
        Refeições{meals.length}
      </Subtitle>

      <Button 
        CustomIcon={Plus}
        text='Nova refeição'
        style={{marginBottom: 32}}
        onPress={()=> navigator.navigate('new_meal')}
      />
      
      <FlatList
        data={Object.entries(listMealsPerDay)}
        keyExtractor={item => item[0]}
        renderItem={({ item }) => (
          <MealsDay data={item[1] as Meal[]}/>
        )}
      />
    </Container>
  )
}