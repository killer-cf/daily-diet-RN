import { Container, Divisor, StatusCircle, StatusProps, Text, Title } from "./styles";

type Props = {
  status: StatusProps
}

export function MealBox({status}: Props) {
  return (
    <Container onPress={()=> {}}>
      <Title>20:00</Title>
      <Divisor />
      <Text>Whey protein com leite </Text>
      <StatusCircle status={status} />
    </Container>
  )
}