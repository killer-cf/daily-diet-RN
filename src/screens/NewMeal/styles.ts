import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme})=> theme.colors.gray500};
  padding-top: 16px;
`

export const Title = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.lg}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 26px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 12px 32px;
  position: relative;
`

export const ButtonIcon = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 12px;
`

export const IconArrow = styled(ArrowLeft).attrs(({theme})=> ({
  size: 24,
  color: theme.colors.gray200,
}))``;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  background: ${({theme})=> theme.colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 24px;
  padding-bottom: 90px;
  margin-bottom: -70px;
`

export const InputBox = styled.View`
  margin-bottom: 24px;
`

export const InputBoxDouble = styled.View`
  margin-bottom: 24px;
  flex: 1;
`

export const InputBoxesRow = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 24px;
`

export const InputText = styled.TextInput`
  border: 1px solid ${({theme})=> theme.colors.gray500};
  border-radius: 6px;
  padding: 14px;
  height: 48px;

  ${({theme})=> css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 21px;
`

export const InputPicker = styled(TouchableOpacity)`
  border: 1px solid ${({theme})=> theme.colors.gray500};
  padding: 0 14px;
  border-radius: 6px;
  height: 48px;
  justify-content: center;
`

export const Label = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    color: ${theme.colors.gray200};
  `}
  line-height: 18px;
  margin-bottom: 4px;
`

export const RadiosContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const Placeholder = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
    color: ${theme.colors.gray100};
  `}
  line-height: 21px;
`

export const DateTimePickerContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=> theme.colors.white};
  position: absolute;
  border: 1px solid ${({theme})=> theme.colors.gray500};
  border-radius: 6px;
`