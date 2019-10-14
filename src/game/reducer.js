const rand = (max = 3) => Math.floor(Math.random() * max)

export const actions = {
  RESET: 'reset',
  RESET_SCORE: 'reset_score',
  RESET_GAME: 'reset_game',
  SET_FIRST_CHOICE: 'set_first_choice',
  SET_SECOND_CHOICE: 'set_second_choice',
  SIMULATE: 'simulate',
  SET_DEBUG: 'set_debug'
}

export const defaultState = {
  switched: 0,
  switchedWins: 0,
  stayed: 0,
  stayedWins: 0,
  step: 0,
  prizeIndex: rand(),
  firstChoiceIndex: 0,
  secondChoiceIndex: 0,
  removedIndex: 0,
  debug: false
}

export default function reducer(state = defaultState, action) {
  const { type, payload } = action

  switch (type) {
    case actions.RESET:
      return reset()
    case actions.RESET_SCORE:
      return resetScore(state)
    case actions.RESET_GAME:
      return resetGame(state)
    case actions.SET_FIRST_CHOICE:
      return setFirstChoice(state, payload)
    case actions.SET_SECOND_CHOICE:
      return setSecondChoice(state, payload)
    case actions.SIMULATE:
      return simulate(state, payload)
    case actions.SET_DEBUG:
      return setDebug(state, payload)
    default:
      return state
  }
}

function reset() {
  return defaultState
}

function resetScore(state) {
  return { ...state, switched: 0, switchedWins: 0, stayed: 0, stayedWins: 0 }
}

function resetGame(state) {
  return {
    ...state,
    step: 0,
    prizeIndex: rand(),
    firstChoiceIndex: 0,
    secondChoiceIndex: 0,
    removedIndex: 0
  }
}

function setFirstChoice(state, firstChoiceIndex) {
  if (state.step !== 0) {
    console.error(`setFirstChoice called on invalid step (${state.step})`)
  }
  const removeOptions = []
  for (let i = 0; i < 3; i++) {
    if (i !== firstChoiceIndex && i !== state.prizeIndex) removeOptions.push(i)
  }
  const removedIndex = removeOptions[rand(removeOptions.length)]
  return {
    ...state,
    step: 1,
    firstChoiceIndex,
    removedIndex
  }
}

function setSecondChoice(state, secondChoiceIndex) {
  if (state.step !== 1) {
    console.error(`setSecondChoice called on invalid step (${state.step})`)
  }
  let { switched, stayed, switchedWins, stayedWins, firstChoiceIndex, prizeIndex } = state
  const won = secondChoiceIndex === prizeIndex
  const didStay = secondChoiceIndex === firstChoiceIndex
  if (didStay) {
    ++stayed
    if (won) ++stayedWins
  } else {
    ++switched
    if (won) ++switchedWins
  }
  console.log(`Player ${didStay ? 'stayed' : 'switched'} and ${won ? 'won' : 'lost'}.`)
  return {
    ...state,
    step: 2,
    switched,
    stayed,
    switchedWins,
    stayedWins,
    secondChoiceIndex
  }
}

function simulate(state, { type, count }) {
  for (let i = 0; i < count; i++) {
    state = resetGame(state)
    state = setFirstChoice(state, rand())
    const { firstChoiceIndex, removedIndex } = state
    if (type === 'switch') state = setSecondChoice(state, firstChoiceIndex)
    else {
      const nextChoice = [0, 1, 2].find(x => x !== firstChoiceIndex && x !== removedIndex)
      state = setSecondChoice(state, nextChoice)
    }
  }
  return resetGame(state)
}

function setDebug(state, debug) {
  return { ...state, debug }
}