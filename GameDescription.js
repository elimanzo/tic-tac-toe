import { View, StyleSheet, Text } from 'react-native';

import getPlayerTurn from './getPlayerTurn';

export default function GameDescription({ winner, isGameOver, moveCount }) {
  const text = (() => {
    if (!isGameOver) {
      return `${getPlayerTurn(moveCount)} turn to move`;
    }

    if (winner == null) {
      return "It's a Draw!";
    }

    return `${winner} wins the game in ${moveCount} moves!`;
  })();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
