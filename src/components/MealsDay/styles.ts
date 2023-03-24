import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 24px;

`

export const Title = styled.Text`
  ${({theme})=> css`
  font-family: ${theme.fontFamily.bold};
  font-size: ${theme.fontSize.lg}px;
  color: ${theme.colors.gray100};
  `}
  margin-bottom: 8px;
  line-height: 23px;
`
