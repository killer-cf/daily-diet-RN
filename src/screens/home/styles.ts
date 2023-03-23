import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fontFamily.bold};
  font-size: ${({theme})=> theme.fontSize.xxl}px;
`