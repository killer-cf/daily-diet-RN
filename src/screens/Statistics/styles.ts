import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  padding: 24px 24px 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -32px;
  position: relative;
  background: ${({theme})=> theme.colors.white};
  gap: 12px;
`

const COLORS = {
  gray: 'gray600',
  green: 'green_light',
  red: 'red_light',
} as const

type BoxProps = {
  backcolor: keyof typeof COLORS
}

export const Box = styled.View<BoxProps>`
  justify-content: space-between;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 16px;
  position: relative;
  border-radius: 8px;
  background-color: ${({theme, backcolor})=> theme.colors[COLORS[backcolor]]};
`

export const Header = styled(Box)<BoxProps>`
  height: 200px;
`

export const Percent = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xxl}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 42px;
  text-align: center;
`

export const Text = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.sm}px;
    color: ${theme.colors.gray200};
  `}
  line-height: 18px;
  text-align: center;
`

export const ButtonIcon = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 8px;
`
export const IconArrow = styled(ArrowLeft).attrs(({theme})=> ({
  size: 18,
  color: theme.colors.green_dark,
}))``

export const Subtitle = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 18px;
  margin-bottom: 11px;
  text-align: center;
`
export const Title = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xl}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 31px;
  text-align: center;
`

export const StatisticBox = styled(Box)`
  display: flex;
  gap: 8px;
`

export const BoxWraper = styled.View`
  flex-direction: row;
  gap: 8px;
`