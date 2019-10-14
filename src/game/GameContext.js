import React, { createContext, useReducer, useContext } from 'react'
import reducer, { defaultState, actions } from './reducer'

export const GameContext = createContext()

export function useGame() {
  const value = useContext(GameContext)
  return value
}

export default function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const d = (type, payload) => dispatch({ type, payload })
  const reset = () => d(actions.RESET)
  const resetScore = () => d(actions.RESET_SCORE)
  const resetGame = () => d(actions.RESET_GAME)
  const setFirstChoice = choice => d(actions.SET_FIRST_CHOICE, choice)
  const setSecondChoice = choice => d(actions.SET_SECOND_CHOICE, choice)
  const simulate = (type, count) => d(actions.SIMULATE, { type, count })
  const setDebug = debug => d(actions.SET_DEBUG, debug)

  return (
    <GameContext.Provider
      value={{
        ...state,
        reset,
        resetScore,
        resetGame,
        setFirstChoice,
        setSecondChoice,
        simulate,
        setDebug
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
