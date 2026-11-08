
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../../src/constants/theme';

interface Props {
  label: string;
  color?: string;
  textColor?: string;
  onPress: () => void;
  doubleSize?: boolean;
}

export default function Boton({
  label,
  color = Colors.buttonGray,
  textColor = Colors.textPrimary,
  onPress,
  doubleSize = false,
}: Props) {
  const manejarToque = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? '#777777' : color,
          transform: [{ scale: pressed ? 0.96 : 1 }],
        },
        doubleSize ? styles.buttonDouble : {},
      ]}
      onPress={manejarToque}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 65,
    width: '22%',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.2%',
  },
  buttonDouble: {
    width: '47%',
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'WorkSans-Regular',
  },
});
