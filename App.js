import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useReducer } from 'react';

import copy2DArray from './copy2DArray';
import make2DArray from './make2DArray';
import calculateTicTacToe from './calculateTicTacToe';
import Board from './Board';
import getPlayerTurn from './getPlayerTurn';
import GameDescription from './GameDescription';

function reducer(state, action) {
  switch (action.type) {
    case 'player-move': {
      if (state.isGameOver) {
        return state;
      }
      const newBoard = copy2DArray(state.board);
      newBoard[action.rowIndex][action.colIndex] = getPlayerTurn(
        state.moveCount,
      );

      const { isGameOver, winner } = calculateTicTacToe(newBoard);
      return {
        ...state,
        board: newBoard,
        moveCount: state.moveCount + 1,
        isGameOver,
        winner,
      };
    }
    case 'new-game': {
      return makeInitialState();
    }
  }
  return state;
}

function makeInitialState() {
  return {
    board: make2DArray(3, 3, null),
    moveCount: 0,
    isGameOver: false,
    winner: null,
  };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitialState);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <Board
        board={state.board}
        dispatch={dispatch}
        isGameOver={state.isGameOver}
      />
      <GameDescription
        winner={state.winner}
        isGameOver={state.isGameOver}
        moveCount={state.moveCount}
      />
      {state.isGameOver ? (
        <Button
          title='New Game'
          onPress={() => dispatch({ type: 'new-game' })}
        />
      ) : null}
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
    gap: 10,
  },
  title: {
    fontSize: 30,
  },
});
