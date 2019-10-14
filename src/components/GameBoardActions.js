import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import PlayAgainButton from './PlayAgainButton'
import { useGame } from 'game'

const useStyles = makeStyles({
  spacer: { flex: 1 }
})

export default function GameBoardActions() {
  const classes = useStyles()
  const { simulate, step } = useGame()
  const simDisabled = step === 1
  return (
    <CardActions>
      <Button disabled={simDisabled} onClick={() => simulate('switch', 100)}>
        Simulate 100 Switches
      </Button>
      <Button disabled={simDisabled} onClick={() => simulate('stay', 100)}>
        Simulate 100 Stays
      </Button>
      <div className={classes.spacer} />
      <PlayAgainButton />
    </CardActions>
  )
}
