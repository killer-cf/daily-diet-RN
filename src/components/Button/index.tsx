import { TouchableOpacityProps } from 'react-native';
import { Icon, IconContext } from "phosphor-react-native";
import { useTheme } from 'styled-components/native';

import { ButtonIconTypeStyleProps, Container, Text } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps
  text: string
  CustomIcon: Icon
}

export function Button({CustomIcon, text, type = 'PRIMARY', ...rest}: Props) {
  const { colors } = useTheme()

  return (
    <Container type={type} {...rest} >
      <IconContext.Provider
        value={{
          color: type === 'PRIMARY' ? colors.white : colors.gray100,
          size: 18
        }}
      >
        <CustomIcon style={{marginRight: 10}} />
      </IconContext.Provider>
      <Text type={type} >{text}</Text>
    </Container>
  )
}