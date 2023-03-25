import { useNavigation } from "@react-navigation/native";
import { Container, Divisor, StatusCircle, StatusProps, Text, Title } from "./styles";

type Props = {
  status: StatusProps
}

export function MealBox({status}: Props) {
  const navigator = useNavigation()

  return (
    <Container onPress={()=> navigator.navigate('meal')}>
      <Title>20:00</Title>
      <Divisor />
      <Text>Whey protein com leite </Text>
      <StatusCircle status={status} />
    </Container>
  )
}