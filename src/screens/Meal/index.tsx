import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PencilLine, Trash } from "phosphor-react-native";
import { Alert, View } from "react-native";
import { useTheme } from "styled-components/native";
import { ButtonIcon, ButtonsWrapper, Container, Content, DietStatus, DietStatusCircle, Header, IconArrow, MealName, Span, Subtitle, Text, Title } from "./styles";
import { mealRemoveById } from "@storage/meals/mealRemoveById";
import { Meal as M } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

type StatusColorsType = 'red' | 'green'

type RouteMealDataParams = {
  mealData: M,
}

export function Meal(){
  const { colors } = useTheme()
  const navigator = useNavigation()
  const route = useRoute()
  const { mealData } = route.params as RouteMealDataParams

  const dietPercent = 100
  const statusColor: StatusColorsType = dietPercent >= 70 ? 'green' : 'red'

  async function remove() {
    try {
      await mealRemoveById(mealData.id)
      navigator.navigate('home')
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Excluir refeição', error.message)
      } else {
        Alert.alert('Excluir refeição','Erro ao excluir refeição')
        console.log(error)
      }
    }
  }

  function handleRemove() {
    Alert.alert(
      'Deseja mesmo excluir essa refeição?',
      '',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Excluir',
          onPress: () => remove() 
        }
      ]
    )
  }

  return (
    <Container backcolor={statusColor}>
      <Header>
        <ButtonIcon onPress={()=> navigator.navigate('home')}>
          <IconArrow color={statusColor === 'green' ? colors.green_dark : colors.red_dark}/>
        </ButtonIcon>
        <Title>
          Refeição
        </Title>
      </Header>
      
      <Content>
        <View>
          <MealName>{mealData.name}</MealName>
          <Text>{mealData.description}</Text>
          <Subtitle>Data e hora</Subtitle>
          <Text>{mealData.date} às {mealData.hour}</Text>
          <DietStatus>
            <DietStatusCircle backcolor={mealData.onDiet ? 'green' : 'red'}></DietStatusCircle>
            <Span>{mealData.onDiet ? 'dentro da dieta' : 'fora da dieta'}</Span>
          </DietStatus>
        </View>
        <ButtonsWrapper>
          <Button
            CustomIcon={PencilLine}
            text="Editar refeição"
          />
          <Button
            CustomIcon={Trash} 
            text="Excluir refeição" 
            type="SECONDARY"
            onPress={handleRemove}
          />
        </ButtonsWrapper>
      </Content>
    </Container>
  )
}