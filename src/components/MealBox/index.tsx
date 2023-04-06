import { useNavigation } from "@react-navigation/native";
import { Container, Divisor, StatusCircle, StatusProps, Text, Title } from "./styles";
import { Meal } from "@storage/storageConfig";

type Props = {
  mealData: Meal
}

export function MealBox({mealData}: Props) {
  const navigator = useNavigation()

  return (
    <Container onPress={()=> navigator.navigate('meal', { mealData })}>
      <Title>{mealData.hour}</Title>
      <Divisor />
      <Text>{mealData.name}</Text>
      <StatusCircle status={mealData.onDiet ? "good" : "bad"} />
    </Container>
  )
}