import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Content, Header, Container, ButtonIcon, IconArrow, Title, InputBox, Label, InputBoxesRow, InputBoxDouble, InputText } from "./styles";

export function NewMeal() {
  const navigator = useNavigation()

  return (
    <Container>
      <Header>
        <ButtonIcon onPress={()=> navigator.navigate('home')}>
          <IconArrow />
        </ButtonIcon>
        <Title>
          Nova refeição
        </Title>
      </Header>
      <Content>
        <View>
          <InputBox>
            <Label>Nome</Label>
            <InputText />
          </InputBox>
          <InputBox>
            <Label>Descrição</Label>
            <InputText 
              style={{height: 120}}
            />
          </InputBox>
          <InputBoxesRow>
            <InputBoxDouble>
              <Label>Data</Label>
              <InputText />
            </InputBoxDouble>
            <InputBoxDouble>
              <Label>Hora</Label>
              <InputText
              />
            </InputBoxDouble>
          </InputBoxesRow>
        </View>
        <Button text="Cadastrar refeição" />
      </Content>
    </Container>
  )
}