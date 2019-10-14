import React from 'react'
import Button from '@material-ui/core/Button'
import RefreshIcon from '@material-ui/icons/Refresh'
import { useGame } from 'game'

export default function PlayAgainButton() {
  const { step, resetGame } = useGame()
  return (
    <Button onClick={resetGame} endIcon={<RefreshIcon />}>
      {step === 2 ? 'Play Again' : 'Reset Game'}
    </Button>
  )
}
