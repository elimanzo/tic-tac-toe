import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useReducer } from 'react';

import copy2DArray from './copy2DArray';
import make2DArray from './make2DArray';
import Board from './Board';

function reducer(state, action) {
  switch (action.type) {
    case 'player-move': {
      const newBoard = copy2DArray(state.board);
      newBoard[action.rowIndex][action.colIndex] =
        state.moveCount % 2 === 0 ? 'X' : 'O';
      return {
        ...state,
        board: newBoard,
        moveCount: state.moveCount + 1,
      };
    }
    case 'reset-game': {
      return makeInitialState();
    }
  }
  return state;
}

function makeInitialState() {
  return { board: make2DArray(3, 3, null), moveCount: 0 };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitialState);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <Board board={state.board} dispatch={dispatch} />
      {state.moveCount === 9 ? (
        <Button
          title='New Game'
          onPress={() => dispatch({ type: 'reset-game' })}
        />
      ) : undefined}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontSize: 30,
  },
});
