import { View, StyleSheet } from 'react-native';

import { Row } from './Row';

export default function Board(props) {
  return (
    <View styles={styles.container}>
      {props.board.map((row, rowIndex) => (
        <Row
          dispatch={props.dispatch}
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    gap: 8,
    padding: 8,
    borderRadius: 8
  }
});
