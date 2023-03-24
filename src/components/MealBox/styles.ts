import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;

  padding: 14px 16px 14px 12px;
  border: 1px solid ${({theme}) => theme.colors.gray500};
  border-radius: 6px; 
`
export const Title = styled.Text`
  ${({theme})=> css`
  font-family: ${theme.fontFamily.bold};
  font-size: ${theme.fontSize.xs}px;
  color: ${theme.colors.gray100};
  `}
  line-height: 23px;
`

export const Divisor = styled.View`
  width: 1px;
  height: 14px;
  border-left-color: ${({theme}) => theme.colors.gray400};
  border-left-width: 1px;
  margin: 0 12px;
`

export const Text = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
    color: ${theme.colors.gray200};
  `}
  line-height: 21px;
  flex: 1;
`

export type StatusProps = 'good' | 'bad'

type Props = {
  status: StatusProps
}

export const StatusCircle = styled.View<Props>`
  width: 14px;
  height: 14px;
  margin-left: 12px;
  border-radius: 999px;
  background-color: ${({theme, status}) => status === 'good' ? theme.colors.green_mid : theme.colors.red_mid};
`
