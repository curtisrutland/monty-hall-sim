interface IGame{
  reset: () => void
  resetScore: () => void
  resetGame: () => void
  setFirstChoice: (choice: number) => void
  setSecondChoice: (choice: number) => void
  simulate: (type: 'switch' | 'stay', count: number) => void
  setDebug: (debug: boolean) => void
  switched: number
  switchedWins: number
  stayed: number
  stayedWins: number
  step: number
  prizeIndex: number
  firstChoiceIndex: number
  secondChoiceIndex: number
  removedIndex: number
  debug: boolean
}

export declare function useGame(): IGame