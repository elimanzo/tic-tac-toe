import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Cell({ cell, rowIndex, colIndex, dispatch, isGameOver }) {
  const Container = cell == null && !isGameOver ? TouchableOpacity : View;
  const onPress =
    cell == null
      ? () => dispatch({ type: 'player-move', rowIndex, colIndex })
      : undefined;
  return (
    <Container style={styles.container} onPress={onPress}>
      {cell != null && <Text style={styles.text}>{cell}</Text>}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 60,
  },
});
