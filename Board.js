import { View, StyleSheet } from 'react-native';

import { Row } from './Row';

export default function Board({ board, dispatch, isGameOver }) {
  return (
    <View style={styles.container}>
      {board.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          cells={row}
          dispatch={dispatch}
          rowIndex={rowIndex}
          isGameOver={isGameOver}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    gap: 8,
    padding: 8,
    borderRadius: 8,
  },
});
