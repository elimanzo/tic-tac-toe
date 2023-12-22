import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useReducer } from 'react';

import copy2DArray from './copy2DArray';
import make2DArray from './make2DArray';
import Board from './Board';

function isValidMove(board, i, j) {
  return board[i][j] == null;
}

function reducer(state, action) {
  switch (action.type) {
    case 'player-move': {
      if (!isValidMove(state.board, action.rowIndex, action.colIndex)) {
        // Alert later
        return state;
      }
      const newBoard = copy2DArray(state.board);
      newBoard[action.rowIndex][action.colIndex] = state.currentPlayer;
      return {
        ...state,
        board: newBoard,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X'
      };
    }
  }
  return state;
}

function makeInitialState() {
  return { board: make2DArray(3, 3, null), currentPlayer: 'X' };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitialState);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <Board board={state.board} dispatch={dispatch} />
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
    gap: 8
  },
  title: {
    fontSize: 30
  }
});
