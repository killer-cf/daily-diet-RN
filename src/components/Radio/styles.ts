import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type BallColorStyles = 'green' | 'red'

export type FilterStyleProps = {
  isActive?: boolean;
  status_color: BallColorStyles
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  background-color: ${({theme}) => theme.colors.gray600};
  border: 1px solid transparent;
  ${({ theme, isActive, status_color }) => isActive && css`
    border: 1px solid ${status_color === 'green' ? theme.colors.green_dark : theme.colors.red_dark};
    background-color: ${status_color === 'green' ? theme.colors.green_light : theme.colors.red_light};
  `};
  border-radius: 6px;
  padding: 16px;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 8px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    color: ${theme.colors.gray200};
  `};
`

type Props = {
  status_color: BallColorStyles
}

export const StatusCircle = styled.View<Props>`
  width: 8px;
  height: 8px;
  margin-left: 12px;
  border-radius: 999px;
  background-color: ${({theme, status_color}) => status_color === 'green' ? theme.colors.green_dark : theme.colors.red_dark};
`