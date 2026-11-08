// components/botones/rejilla.tsx
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../src/constants/theme';
import Boton from './boton';

interface Props {
  onPress: (valor: string) => void;
  isScientific: boolean;
}

export default function Rejilla({ onPress, isScientific }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.rowToggle}>
        <Boton
          label={isScientific ? '📱 Modo Normal' : '🔬 Modo Científico'}
          color={Colors.scientificButton}
          onPress={() => onPress('sci')}
        />
      </View>

      {isScientific && (
        <View style={styles.scientificPanel}>
          <Boton label="sin(" color="#1e3a5f" onPress={() => onPress('sin(')} />
          <Boton label="cos(" color="#1e3a5f" onPress={() => onPress('cos(')} />
          <Boton label="tan(" color="#1e3a5f" onPress={() => onPress('tan(')} />
          <Boton label="sqrt(" color="#1e3a5f" onPress={() => onPress('sqrt(')} />
          <Boton label="π" color="#1e3a5f" onPress={() => onPress('π')} />
          <Boton label="^2" color="#1e3a5f" onPress={() => onPress('^2')} />
          <Boton label="(" color="#1e3a5f" onPress={() => onPress('(')} />
          <Boton label=")" color="#1e3a5f" onPress={() => onPress(')')} />
        </View>
      )}

      {/* Fila 1 */}
      <View style={styles.row}>
        <Boton label="C" color={Colors.buttonLightGray} textColor="#FF453A" onPress={() => onPress('C')} />
        <Boton label="⌫" color={Colors.buttonLightGray} onPress={() => onPress('⌫')} />
        <Boton label="%" color={Colors.buttonLightGray} onPress={() => onPress('%')} />
        <Boton label="÷" color={Colors.orange} onPress={() => onPress('÷')} />
      </View>

      {/* Fila 2 */}
      <View style={styles.row}>
        <Boton label="7" onPress={() => onPress('7')} />
        <Boton label="8" onPress={() => onPress('8')} />
        <Boton label="9" onPress={() => onPress('9')} />
        <Boton label="×" color={Colors.orange} onPress={() => onPress('×')} />
      </View>

      {/* Fila 3 */}
      <View style={styles.row}>
        <Boton label="4" onPress={() => onPress('4')} />
        <Boton label="5" onPress={() => onPress('5')} />
        <Boton label="6" onPress={() => onPress('6')} />
        <Boton label="-" color={Colors.orange} onPress={() => onPress('-')} />
      </View>

      {/* Fila 4 */}
      <View style={styles.row}>
        <Boton label="1" onPress={() => onPress('1')} />
        <Boton label="2" onPress={() => onPress('2')} />
        <Boton label="3" onPress={() => onPress('3')} />
        <Boton label="+" color={Colors.orange} onPress={() => onPress('+')} />
      </View>

      {/* Fila 5 */}
      <View style={styles.row}>
        <Boton label="0" doubleSize onPress={() => onPress('0')} />
        <Boton label="." onPress={() => onPress('.')} />
        <Boton label="=" color={Colors.orange} onPress={() => onPress('=')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    width: '100%',
  },
  rowToggle: {
    paddingHorizontal: 15,
    marginBottom: 10,
    alignItems: 'stretch',
  },
  scientificPanel: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});