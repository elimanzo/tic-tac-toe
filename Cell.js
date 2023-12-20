import { View, Text, StyleSheet } from 'react-native';

export function Cell(props) {
  return (
    <View style={styles.container}>
      {props.cell != null && <Text style={styles.text}>{props.cell}</Text>}
    </View>
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
