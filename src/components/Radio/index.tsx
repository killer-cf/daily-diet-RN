import { TouchableOpacityProps } from 'react-native';

import { Container, Text, FilterStyleProps, StatusCircle, BallColorStyles } from './styles';

type Props = TouchableOpacityProps & FilterStyleProps & {
  text: string;
  status_color: BallColorStyles
}

export function Radio({status_color, text, isActive = false, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest} status_color={status_color}>
      <StatusCircle status_color={status_color} />
      <Text>
        {text}
      </Text>
    </Container>
  );
}