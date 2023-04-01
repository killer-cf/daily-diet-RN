import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`

export const Title = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xl}px;
  `}
  line-height: 31px;
  text-align: center;
  margin-bottom: 8px;
`

export const Text = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 21px;
  text-align: center;
`

export const TextBold = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.md}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 21px;
  text-align: center;
`

export const ImageContainer = styled.View`
  padding: 40px 0 30px
`