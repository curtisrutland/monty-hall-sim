import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useGame } from 'game'

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  }
})

export default function GameMessage() {
  const classes = useStyles()
  const { step, firstChoiceIndex, secondChoiceIndex, prizeIndex , removedIndex} = useGame()
  let message = 'Select a door!'
  let submessage = 'Only one holds the prize.'
  if (step === 1) {
    message = `Door ${removedIndex + 1} does not have the prize and has been removed.`
    submessage = 'You can choose to switch or stay.'
  } else if (step === 2) {
    const won = secondChoiceIndex === prizeIndex
    const switched = firstChoiceIndex !== secondChoiceIndex
    message = `You ${switched ? 'switched' : 'stayed'} and ${won ? 'won' : 'lost'}.`
    submessage = `The prize was in door ${prizeIndex + 1}.`
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5">{message}</Typography>
      {submessage && <Typography variant="h6">{submessage}</Typography>}
    </div>
  )
}
