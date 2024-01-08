import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';

const SIZE = 70;

function X() {
  return (
    <Svg height={SIZE} width={SIZE} viewBox='0 0 100 100'>
      <Line x1='20' y1='20' x2='80' y2='80' stroke='white' strokeWidth='10' />
      <Line x1='80' y1='20' x2='20' y2='80' stroke='white' strokeWidth='10' />
    </Svg>
  );
}

function O() {
  return (
    <Svg height={SIZE} width={SIZE} viewBox='0 0 100 100'>
      <Circle
        cx='50'
        cy='50'
        r='38'
        stroke='white'
        strokeWidth='10'
        fill='transparent'
      />
    </Svg>
  );
}

export function Cell({ cell, rowIndex, colIndex, dispatch, isGameOver }) {
  const Container = cell == null && !isGameOver ? TouchableOpacity : View;
  const onPress =
    cell == null
      ? () => dispatch({ type: 'player-move', rowIndex, colIndex })
      : undefined;

  const symbol = (() => {
    return cell === 'X' ? <X /> : cell === 'O' ? <O /> : null;
  })();
  return (
    <Container style={styles.container} onPress={onPress}>
      {symbol}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: '#27AE60',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 60,
  },
});
