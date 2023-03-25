import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

const COLORS = {
  green: 'green_light',
  red: 'red_light',
} as const

type BoxProps = {
  backcolor: keyof typeof COLORS
}

export const Container = styled(SafeAreaView)<BoxProps>`
  flex: 1;
  background-color: ${({theme, backcolor})=> theme.colors[COLORS[backcolor]]};
  padding-top: 16px;
`

export const Title = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.lg}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 26px;
  text-align: center;
  height: 50px;
`

export const ButtonIcon = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 42px;
  left: 12px;
`

export const IconArrow = styled(ArrowLeft).attrs(({theme})=> ({
  size: 24,
  color: theme.colors.gray200,
}))``

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  background: ${({theme})=> theme.colors.white};
  padding: 24px 24px 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 32px 24px;
  padding-bottom: 60px;
`

export const Text = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
    color: ${theme.colors.gray200};
  `}
  line-height: 21px;
  margin-bottom: 24px;
`

export const Subtitle = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 18px;
  margin-bottom: 8px;
`
export const MealName = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.lg}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 26px;
  margin-bottom: 8px;
`

export const DietStatus = styled.View`
  width: 150px;
  background-color: ${({theme}) => theme.colors.gray600};
  border-radius: 999px;
  padding: 8px 16px;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`

export const Span = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.sm}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 18px;
`
export type DietStatusCircleStyleType = 'green' | 'red'

type DietStatusCircle = {
  backcolor: DietStatusCircleStyleType
}

export const DietStatusCircle = styled.View<DietStatusCircle>`
  background-color: ${({theme, backcolor}) => backcolor === 'green' ? theme.colors.green_dark : theme.colors.red_dark};
  width: 8px;
  height: 8px;
  border-radius: 999px;
`

export const ButtonsWrapper = styled.View`
  gap: 8px;
`