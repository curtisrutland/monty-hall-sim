import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import { useGame } from 'game'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing(2),
    width: 150
  },
  red: { color: 'red' },
  green: { color: 'green' }
}))

function GameButton({ choiceIndex }) {
  const classes = useStyles()
  const { step, removedIndex, setFirstChoice, setSecondChoice, prizeIndex, debug } = useGame()

  let disabled = false
  let icon = null
  if (step === 2) {
    disabled = true
    if (choiceIndex === prizeIndex) icon = <CheckIcon className={classes.green} />
    else icon = <CloseIcon className={classes.red} />
  } else if (step === 1 && removedIndex === choiceIndex) {
    disabled = true
  }

  if(debug) {
    if (choiceIndex === prizeIndex) icon = <CheckIcon className={classes.green} />
    else icon = <CloseIcon className={classes.red} />
  }

  function handleClick() {
    if (step === 0) setFirstChoice(choiceIndex)
    else setSecondChoice(choiceIndex)
  }

  return (
    <Button
      disabled={disabled}
      className={classes.button}
      variant="contained"
      size="large"
      onClick={handleClick}
      color="primary"
      endIcon={icon}
    >
      Door {choiceIndex + 1}
    </Button>
  )
}

export default function GameButtons() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <GameButton choiceIndex={0} />
      <GameButton choiceIndex={1} />
      <GameButton choiceIndex={2} />
    </div>
  )
}
