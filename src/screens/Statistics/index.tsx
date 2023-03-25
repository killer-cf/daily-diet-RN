import { Container, StatisticBox, ButtonIcon, IconArrow, Percent, Text, Subtitle, Header, Title, BoxWraper, Content } from "./styles";

export function Statistics() {
  return (
      <Container backcolor="green">
        <Header>
          <Percent>90,86%</Percent>
          <Text>das refeições dentro da dieta</Text>
          <ButtonIcon>
            <IconArrow />
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

            <StatisticBox backcolor="green">
              <Title>99</Title>
              <Text>refeições dentro da dieta</Text>
            </StatisticBox>

            <StatisticBox backcolor="red">
              <Title>10</Title>
              <Text>refeições fora da dieta</Text>
            </StatisticBox>

          </BoxWraper>
        </Content>       
      </Container>
  )
}