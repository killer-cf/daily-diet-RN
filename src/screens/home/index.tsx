import { Image } from "react-native";
import { Avatar, ButtonIcon, Container, DietPercent, Header, IconArrow, Percent, Subtitle, Text } from "./styles";
import logoPng from '@assets/logo.png'
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { MealsDay } from "@components/MealsDay";

export function Home(){
  return (
    <Container>
      <Header>
        <Image source={logoPng}/>
        <Avatar>
          <Image
            style={{width: 40, height: 40}} 
            source={{uri:'https://github.com/killer-cf.png'}}
          />
        </Avatar>

      </Header>

      <DietPercent>
        <Percent>90,86%</Percent>
        <Text>das refeições dentro da dieta</Text>
        <ButtonIcon>
          <IconArrow />
        </ButtonIcon>
      </DietPercent>

      <Subtitle>
        Refeições
      </Subtitle>

      <Button 
        CustomIcon={Plus} 
        text='Nova refeição'
        style={{marginBottom: 32}}
      />

      <MealsDay />
      <MealsDay />
    </Container>
  )
}