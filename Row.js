import { View, StyleSheet } from 'react-native';

import { Cell } from './Cell';

export function Row(props) {
  return (
    <View styles={styles.container}>
      {props.row.map((cell, colIndex) => (
        <Cell key={colIndex} cell={cell} />
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
