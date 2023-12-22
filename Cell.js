import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Cell({ cell, rowIndex, colIndex, dispatch }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        dispatch({
          type: 'player-move',
          rowIndex,
          colIndex
        })
      }
    >
      {cell != null && <Text style={styles.text}>{cell}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'blue',
    fontSize: 60
  }
});
