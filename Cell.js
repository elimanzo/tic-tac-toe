import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Cell(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        props.dispatch({
          type: 'player-move',
          rowIndex: props.rowIndex,
          colIndex: props.colIndex
        })
      }
    >
      {props.cell != null && <Text style={styles.text}>{props.cell}</Text>}
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
