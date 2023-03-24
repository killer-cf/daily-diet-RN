import { MealBox } from "@components/MealBox";
import { Container, Title } from "./styles";

export function MealsDay() {
  return (
    <Container>
      <Title>12.08.22</Title>

      <MealBox status="bad" />
      <MealBox status="good"/>
    </Container>
  )
}