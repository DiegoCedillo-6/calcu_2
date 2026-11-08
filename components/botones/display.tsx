
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../src/constants/theme';

interface Props {
  formula: string;
  resultado: string;
}

export default function Display({ formula, resultado }: Props) {
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.4}
        style={styles.formulaText}
      >
        {formula}
      </Text>

      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.4}
        style={styles.resultadoText}
      >
        {resultado === '0' ? formula : resultado}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    minHeight: 150,
  },
  formulaText: {
    color: Colors.textSecondary,
    fontSize: 32,
    fontFamily: 'WorkSans-Light',
  },
  resultadoText: {
    color: Colors.textPrimary,
    fontSize: 55,
    fontFamily: 'WorkSans-Light',
  },
});
