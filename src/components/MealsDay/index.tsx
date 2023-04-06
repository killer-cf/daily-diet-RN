import { MealBox } from "@components/MealBox";
import { Container, Title } from "./styles";
import { Meal } from "@storage/storageConfig";

type Props = {
  data: Meal[]
}

export function MealsDay({data}: Props) {
  return (
    <Container>
      <Title>{data && data[0].date}</Title>

      {data && data.map((meal) => (
        <MealBox key={meal.id} mealData={meal}/>
      ))}
    </Container>
  )
}