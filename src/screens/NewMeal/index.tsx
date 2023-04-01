import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Content, Header, Container, ButtonIcon, IconArrow, Title, InputBox, Label, InputBoxesRow, InputBoxDouble, InputText, RadiosContainer } from "./styles";
import { Radio } from "@components/Radio";
import { useState } from "react";
import { DietStatusParams } from "src/@types/navigation";

export function NewMeal() {
  const navigator = useNavigation()
  const [dietStatus, setDietStatus] = useState<DietStatusParams>('onDiet')

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
              isActive={dietStatus === 'onDiet'} 
              onPress={()=> setDietStatus('onDiet')}
              text="Sim" 
              status_color="green"
            />
            <Radio 
              isActive={dietStatus === 'offDiet'} 
              onPress={()=> setDietStatus('offDiet')}
              text="Não" 
              status_color="red" />
          </RadiosContainer>
        </View>
        <Button 
          text="Cadastrar refeição" 
          onPress={()=> 
            navigator.navigate('create_meal_success', { dietStatus })} />
      </Content>
    </Container>
  )
}