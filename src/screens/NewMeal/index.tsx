import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Content, Header, Container, ButtonIcon, IconArrow, Title, InputBox, Label, InputBoxesRow, InputBoxDouble, InputText, RadiosContainer } from "./styles";
import { Radio } from "@components/Radio";
import { useState } from "react";

type DietState = 'Na dieta' | 'Fora da dieta'

export function NewMeal() {
  const navigator = useNavigation()
  const [buttonDietActive, setButtonDietActive] = useState<DietState>('Na dieta')

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

          <Label>Está dentro da dieta?</Label>
          <RadiosContainer>
            <Radio 
              isActive={buttonDietActive === 'Na dieta'} 
              onPress={()=> setButtonDietActive('Na dieta')}
              text="Sim" 
              status_color="green"
            />
            <Radio 
              isActive={buttonDietActive === 'Fora da dieta'} 
              onPress={()=> setButtonDietActive('Fora da dieta')}
              text="Não" 
              status_color="red" />
          </RadiosContainer>
        </View>
        <Button text="Cadastrar refeição" />
      </Content>
    </Container>
  )
}