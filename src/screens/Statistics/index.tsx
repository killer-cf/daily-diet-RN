import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Container, StatisticBox, ButtonIcon, IconArrow, Percent, Text, Subtitle, Header, Title, BoxWraper, Content } from "./styles";

type StatusColorsType = 'red' | 'green'

export function Statistics() {
  const { colors } = useTheme()
  const navigator = useNavigation()

  const dietPercent = 100
  const statusColor: StatusColorsType = dietPercent >= 70 ? 'green' : 'red'

  return (
      <Container backcolor={statusColor}>
        <Header>
          <Percent>90,86%</Percent>
          <Text>das refeições dentro da dieta</Text>
          <ButtonIcon onPress={()=> navigator.navigate('home')}>
            <IconArrow color={statusColor === 'green' ? colors.green_dark : colors.red_dark}/>
          </ButtonIcon>
        </Header>

        <Content>
          <Subtitle>Estatísticas gerais</Subtitle>

          <StatisticBox backcolor="gray">
            <Title>22</Title>
            <Text>melhor sequência de pratos dentro da dieta</Text>
          </StatisticBox>

          <StatisticBox backcolor="gray">
            <Title>119</Title>
            <Text>refeições registradas</Text>
          </StatisticBox>

          <BoxWraper>

            <StatisticBox style={{flex: 1}} backcolor="green">
              <Title>99</Title>
              <Text>refeições dentro da dieta</Text>
            </StatisticBox>

            <StatisticBox style={{flex: 1}} backcolor="red">
              <Title>10</Title>
              <Text>refeições fora da dieta</Text>
            </StatisticBox>

          </BoxWraper>
        </Content>       
      </Container>
  )
}