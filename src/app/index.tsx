
import { StyleSheet, View } from 'react-native';
import Display from '../../components/botones/display';
import Rejilla from '../../components/botones/rejilla';
import { Colors } from '../constants/theme';
import { useCalculadora } from '../hooks/UseCalculadora';

export default function CalculatorApp() {
  const {
    formula,
    resultado,
    isScientific,
    manejarPresion,
  } = useCalculadora();

  return (
    <View style={styles.container}>
      <Display
        formula={formula}
        resultado={resultado}
      />

      <Rejilla
        onPress={manejarPresion}
        isScientific={isScientific}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'flex-end',
  },
});
