import { Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Container, ImageContainer, Text, TextBold, Title } from "./styles";
import { DietStatusParams } from "src/@types/navigation";
import { Button } from "@components/Button";
import onDietImage from "@assets/img-on-diet.png"
import offDietImage from "@assets/img-off-diet.png"

type RouteDietStatusParams = {
  dietStatus: DietStatusParams,
}

export function MealSuccess() {
  const { colors } = useTheme()
  const navigator = useNavigation()
  const route = useRoute()
  const { dietStatus } = route.params as RouteDietStatusParams

  return (
    <Container>  
      {dietStatus === 'onDiet' ? (
        <>
          <Title style={{color: colors.green_dark}}>
            Continue assim!
          </Title>
          <Text>
            Você continua
            <TextBold> dentro da dieta. </TextBold>
            Muito bem!
          </Text>
          <ImageContainer>
            <Image source={onDietImage} />
          </ImageContainer>
        </>
      ) : (
        <>
          <Title style={{color: colors.red_dark}}>
            Que pena!
          </Title>
          <Text>
            Você
            <TextBold> saiu da dieta </TextBold>
            dessa vez, mas continue se esforçando e não desista!
          </Text>
          <ImageContainer>
            <Image source={offDietImage} />
          </ImageContainer>
        </>
      )}
      <Button text="Ir para página inicial" onPress={()=> navigator.navigate("home")}/>
    </Container>
  )
}