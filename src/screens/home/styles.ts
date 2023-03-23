import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  padding: 24px 24px 0;
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Avatar = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 2px solid ${({theme})=> theme.colors.gray200};
    background-color: ${({theme})=> theme.colors.gray500};
    overflow: hidden;
    justify-content: center;
    align-items: center;
`

export const DietPercent = styled.View`
  height: 102px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({theme})=> theme.colors.green_light};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  margin: 40px 0;
  position: relative;
  border-radius: 8px;
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

export const IconArrow = styled(ArrowUpRight).attrs(({theme})=> ({
  size: 18,
  color: theme.colors.green_dark,
}))``

export const Subtitle = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 21px;
  margin-bottom: 8px;
`