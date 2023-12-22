import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Cell({ cell, rowIndex, colIndex, dispatch }) {
  const Container = !cell ? TouchableOpacity : View;
  const onPress = !cell
    ? () => dispatch({ type: 'player-move', rowIndex, colIndex })
    : undefined;
  return (
    <Container style={styles.container} onPress={onPress}>
      {cell && <Text style={styles.text}>{cell}</Text>}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 60,
  },
});
