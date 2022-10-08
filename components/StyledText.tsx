import { Text, TextProps } from './Themed';

export function LatoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'lato' }]} />;
}
