import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { PencilLine, Trash } from "phosphor-react-native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { ButtonIcon, ButtonsWrapper, Container, Content, DietStatus, DietStatusCircle, Header, IconArrow, MealName, Span, Subtitle, Text, Title } from "./styles";

type StatusColorsType = 'red' | 'green'

export function Meal(){
  const { colors } = useTheme()
  const navigator = useNavigation()

  const dietPercent = 100
  const statusColor: StatusColorsType = dietPercent >= 70 ? 'green' : 'red'

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
          <MealName>Sanduíche</MealName>
          <Text>Sanduíche de pão integral com atum e salada de alface e tomate</Text>
          <Subtitle>Data e hora</Subtitle>
          <Text>12/08/2022 às 16:00</Text>
          <DietStatus>
            <DietStatusCircle backcolor="green"></DietStatusCircle>
            <Span>dentro da dieta</Span>
          </DietStatus>
        </View>
        <ButtonsWrapper>
          <Button
            CustomIcon={PencilLine}
            text="Editar refeição"
          />
          <Button
            CustomIcon={Trash} 
            text="Editar refeição" 
            type="SECONDARY"
          />
        </ButtonsWrapper>
      </Content>
    </Container>
  )
}