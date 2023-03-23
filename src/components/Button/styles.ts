import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  border-radius: 6px;
  background-color: ${({theme, type})=> type === 'PRIMARY' ? theme.colors.gray200 : theme.colors.white};
  border: 1px solid ${({theme})=> theme.colors.gray100};
`

export const Text = styled.Text<Props>`
  ${({theme, type})=> css`
    color: ${type === 'PRIMARY' ? theme.colors.white : theme.colors.gray100};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
  `}
`