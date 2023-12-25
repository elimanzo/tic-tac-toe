import { View, StyleSheet } from 'react-native';

import { Cell } from './Cell';

export function Row({ cells, rowIndex, dispatch }) {
  return (
    <View style={styles.container}>
      {cells.map((cell, colIndex) => (
        <Cell
          dispatch={dispatch}
          key={colIndex}
          cell={cell}
          rowIndex={rowIndex}
          colIndex={colIndex}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
});
