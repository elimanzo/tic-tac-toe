import { View, StyleSheet } from 'react-native';

import { Cell } from './Cell';

export function Row({ row, rowIndex, dispatch }) {
  return (
    <View styles={styles.container}>
      {row.map((cell, colIndex) => (
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
    gap: 8
  }
});
